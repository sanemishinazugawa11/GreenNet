"use server";

import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { connect, Event } from "@/DB/db";
import { cookies } from "next/headers";
import Organizer from "@/DB/db";
import cloudinary from "@/config/cloudinary";

dotenv.config();
const JWT_SECRET: string = process.env.JWT_SECRET || "GreenNet is the best";

export async function signup({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<boolean> {
  try {
    await connect();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userFound = await Organizer.findOne({ email });

    if (userFound) {
      console.log(userFound, "already exists");
      // User already exists
      return false;
    }

    const user = new Organizer({
      name,
      email,
      password: hashedPassword,
      events: [],
    });
    await user.save();

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    const token = jwt.sign(email, process.env.JWT_SECRET);
    const cookieStore = await cookies();
    cookieStore.set("token", token);

    return true;
  } catch (error) {
    console.error(error);
    throw new Error("Signup failed");
  }
}

export async function signin({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> {
  try {
    await connect();
    const userFound = await Organizer.findOne({
      email,
    });
    console.log(userFound);
    if (!userFound) {
      return false;
    }
    const isPasswordValid = await bcrypt.compare(password, userFound.password);
    if (!isPasswordValid) {
      return false;
    }
    const token = jwt.sign(email, JWT_SECRET);
    const cookieStore = await cookies();
    cookieStore.set("token", token.toString());
    return true;
  } catch (error) {
    console.error(error);
    throw new Error("Signin failed");
  }
}

export async function signout(): Promise<void> {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("token");
  } catch (error) {
    console.error(error);
    throw new Error("Signout failed");
  }
}

//action for creating an event
export default async function createEvent(
  formData: FormData
): Promise<boolean> {
  try {
    await connect();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      throw new Error("No token found");
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded !== "string") {
      throw new Error("Invalid token");
    }
    const user = await Organizer.findOne({ email: decoded });
    if (!user) {
      throw new Error("User not found");
    }
    const name = formData.get("name") as string;
    const desc = formData.get("desc") as string;
    const location = formData.get("location") as string;
    const volunteers = formData.get("volunteers") as string;
    const contact = formData.get("contact") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const duration = formData.get("duration") as string;
    const tags = formData.get("tags") as string;

    // Get all uploaded files
    const files = formData.getAll("PreEventPhotos") as File[];

    const validFiles = files.filter((file) => file.size > 0);

    const uploadedImageUrls: string[] = [];
    console.log("Valid files:", validFiles);

    for (const file of validFiles) {
      try {
        if (file.size > 10 * 1024 * 1024) {
          throw new Error("File too large. Limit is 10MB.");
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        const mime = file.type;
        const base64 = buffer.toString("base64");
        const dataUri = `data:${mime};base64,${base64}`;

        const result = await cloudinary.uploader.upload(dataUri, {
          folder: "pre-event-photos",
        });
        uploadedImageUrls.push(result.secure_url);
      } catch (err) {
        console.error("Failed to upload file to Cloudinary:", err);
      }
    }
    if (uploadedImageUrls.length === 0) {
      return false;
    }
    console.log("Uploaded image URLs:", uploadedImageUrls);

    const event = new Event({
      organizer: user._id,
      title: name,
      description: desc,
      location,
      volunteers_size: volunteers ? parseInt(volunteers) : 0,
      date,
      time,
      duration,
      tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
      PostEventPhotos: [],
      contact_number: contact ? parseInt(contact) : 0,
      PreEventPhotos: uploadedImageUrls, // Storing the uploaded image URLs in DB
    });
    await event.save();
    user.events.push(event._id);
    await user.save();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}


interface OrganizerType {
  email: string;
  events: Event[];
}
//action for getting all events of the user.
export async function getEvents(): Promise<any[]> {
  try {
    await connect();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      throw new Error("No token found");
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded !== "string") {
      throw new Error("Invalid token");
    }

     const user = await Organizer.findOne({ email: decoded })
      .populate("events")
      .lean<OrganizerType>();

    if (!user) throw new Error("User not found");

    
    return user.events;
  } catch (error) {
    console.error(error);
    throw new Error("Event retrieval failed");
  }
}

//action for getting userState
export async function getUserState(): Promise<Object | null> {
  try {
    await connect();

    const cookieStore =await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) 
      return null;
    // console.log(token)
    const decoded = jwt.verify(token,JWT_SECRET);
    if (!decoded) throw new Error("Invalid token payload");
    console.log("Decoded token:", decoded);
    const user = await Organizer.findOne({ email: decoded});
    if (!user) throw new Error("User not found");
    console.log("User found:", user);
    const userData = {
      name: user.name,
      email: user.email,
      events: user.events || [],
    }
    return userData;
  } catch (error) {
    console.error("getUserState error:", error);
    return null;
  }
}


//handling user logout
export async function logout() {
    try {
        const cookieStore = await cookies();
        cookieStore.delete('token')
        return { success: true }
    } catch (error) {
        return { success: false, error: 'Failed to logout' }
    }
}


//action for getting all events
export async function getAllEvents(): Promise<any[]> {
  try {
    await connect();
    const events = await Event.find().populate("organizer").lean();
    console.log("All events fetched:", events);
    return events;
  } catch (error) {
    console.error("Error fetching all events:", error);
    throw new Error("Failed to fetch all events");
  }
}