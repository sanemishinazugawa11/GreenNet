"use client";
import Navbar from "@/Components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import createEvent, { getAllEvents } from "@/Actions/actions";
import Toast from "@/Components/Toast";
import { getEventStatus } from "../utils/utils";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  allEvents,
  completedEventsSelector,
  ongoingEventsSelector,
  upcomingEventsSelector,
} from "../store/recoil";

export default function Dashboard() {
  const router = useRouter();
  const [Events, setEvents] = useRecoilState(allEvents);

  const upcomingEvents = useRecoilValue(upcomingEventsSelector);
  const completedEvents = useRecoilValue(completedEventsSelector);
  const ongoingEvents = useRecoilValue(ongoingEventsSelector);

  // // Sample data for events
  // const data = [
  //   {
  //     no: 1,
  //     title: "Beach Cleaning",
  //     description:
  //       "Join the coastal clean-up in Chennai to restore our beautiful beaches.",
  //     location: "Chennai",
  //     photos: [img, img, img, img, img, img],
  //     size: 35,
  //     tags: ["beach", "cleaning", "nature"],
  //     contact: "9876543210",
  //     organizer: "Blue ocean Foundation",
  //     date: "20-06-2025",
  //     time: "10:00 AM",
  //     duration: "2 hours",
  //   },
  //   {
  //     no: 2,
  //     title: "Tree Plantation Drive",
  //     description: "Let's plant 1000 trees around the outskirts of Pune.",
  //     location: "Pune",
  //     photos: [img, img, img, img, img, img],
  //     size: 50,
  //     tags: ["plantation", "trees", "community"],
  //     contact: "9123456789",
  //     organizer: "Green Warriors India",
  //     date: "05-04-2025",
  //     time: "09:00 AM",
  //     duration: "3 hours",
  //   },
  //   {
  //     no: 3,
  //     title: "River Awareness Walk",
  //     description:
  //       "Walk along the Yamuna in Delhi to raise awareness about pollution.",
  //     location: "Delhi",
  //     photos: [img, img, img, img, img, img],
  //     size: 100,
  //     tags: ["river", "awareness", "walk"],
  //     contact: "9988776655",
  //     organizer: "Namami Gange Volunteers",
  //     date: "27-05-2025",
  //     time: "07:00 AM",
  //     duration: "4 hours",
  //   },
  //   {
  //     no: 5,
  //     title: "Mangrove Restoration",
  //     description: "Help restore mangroves in Navi Mumbai's coastal belt.",
  //     location: "Mumbai",
  //     photos: [img, img, img, img, img, img],
  //     size: 25,
  //     tags: ["mangrove", "restoration", "coastal"],
  //     contact: "9090909090",
  //     organizer: "Ocean Roots India",
  //     date: "15-06-2025",
  //     time: "08:30 AM",
  //     duration: "6 hours",
  //   },
  //   {
  //     no: 6,
  //     title: "Lake Desilting Drive",
  //     description: "Help clean and restore the lake ecosystem in Hyderabad.",
  //     location: "Hyderabad",
  //     photos: [img, img, img, img, img, img],
  //     size: 45,
  //     tags: ["lake", "desilting", "cleanup"],
  //     contact: "9345678901",
  //     organizer: "Clean Earth NGO",
  //     date: "18-03-2025",
  //     time: "08:00 AM",
  //     duration: "4 hours",
  //   },
  //   {
  //     no: 7,
  //     title: "E-Waste Collection Camp",
  //     description: "Bring your old electronics for safe disposal in Bangalore.",
  //     location: "Bangalore",
  //     photos: [img, img, img, img, img, img],
  //     size: 60,
  //     tags: ["e-waste", "collection", "recycle"],
  //     contact: "9888888888",
  //     organizer: "Urban Forest Collective",
  //     date: "30-06-2025",
  //     time: "10:00 AM",
  //     duration: "3 hours",
  //   },
  //   {
  //     no: 8,
  //     title: "Community Art Project",
  //     description: "Paint environmental murals with local artists in Kolkata.",
  //     location: "Kolkata",
  //     photos: [img, img, img, img, img, img],
  //     size: 20,
  //     tags: ["art", "community", "murals"],
  //     contact: "9012345678",
  //     organizer: "Green Canvas Foundation",
  //     date: "26-05-2025",
  //     time: "11:00 AM",
  //     duration: "5 hours",
  //   },
  //   {
  //     no: 9,
  //     title: "Solar Awareness Drive",
  //     description:
  //       "Educate villagers near Ahmedabad about solar energy benefits.",
  //     location: "Ahmedabad",
  //     photos: [img, img, img, img, img, img],
  //     size: 35,
  //     tags: ["solar", "energy", "awareness"],
  //     contact: "9876501234",
  //     organizer: "Solar Shakti Trust",
  //     date: "10-04-2025",
  //     time: "09:30 AM",
  //     duration: "2 hours",
  //   },
  //   {
  //     no: 10,
  //     title: "Heritage Walk",
  //     description:
  //       "Explore historic areas in Lucknow while promoting cleanliness.",
  //     location: "Lucknow",
  //     photos: [img, img, img, img, img, img],
  //     size: 80,
  //     tags: ["heritage", "walk", "culture"],
  //     contact: "9023456781",
  //     organizer: "City Roots Collective",
  //     cancelled: true,
  //     date: "12-05-2025",
  //     time: "07:00 AM",
  //     duration: "3 hours",
  //   },
  //   {
  //     no: 11,
  //     title: "Wildlife Conservation Talk",
  //     description:
  //       "Attend an expert session on saving India's endangered species.",
  //     location: "Nagpur",
  //     photos: [img, img, img, img, img, img],
  //     size: 90,
  //     tags: ["wildlife", "talk", "conservation"],
  //     contact: "9356789012",
  //     organizer: "Wildlife Voice India",
  //     date: "10-07-2025",
  //     time: "06:00 PM",
  //     duration: "2 hours",
  //   },
  //   {
  //     no: 12,
  //     title: "Zero Waste Workshop",
  //     description: "Learn about sustainable living practices in Chandigarh.",
  //     location: "Chandigarh",
  //     photos: [img, img, img, img, img, img],
  //     size: 30,
  //     tags: ["zero waste", "eco", "workshop"],
  //     contact: "9988998899",
  //     organizer: "Zero Footprint Org",
  //     date: "27-05-2025",
  //     time: "04:00 PM",
  //     duration: "2 hours",
  //   },
  //   {
  //     no: 13,
  //     title: "Rainwater Harvesting Setup",
  //     description: "Install systems in homes across Coimbatore to save water.",
  //     location: "Coimbatore",
  //     photos: [img, img, img, img, img, img],
  //     size: 25,
  //     tags: ["water", "harvesting", "rain"],
  //     contact: "9367890123",
  //     organizer: "Aqua Save India",
  //     date: "22-03-2025",
  //     time: "09:00 AM",
  //     duration: "4 hours",
  //   },
  //   {
  //     no: 14,
  //     title: "Biodiversity Fair",
  //     description:
  //       "Celebrate World Biodiversity Day with exhibits and workshops.",
  //     location: "Bhopal",
  //     photos: [img, img, img, img, img, img],
  //     size: 70,
  //     tags: ["biodiversity", "fair", "eco"],
  //     contact: "9345098765",
  //     organizer: "Nature India Collective",
  //     date: "30-05-2025",
  //     time: "10:00 AM",
  //     duration: "6 hours",
  //   },
  //   {
  //     no: 15,
  //     title: "Organic Farming Demo",
  //     description: "Experience natural farming techniques in Kerala.",
  //     location: "Kochi",
  //     photos: [img, img, img, img, img, img],
  //     size: 40,
  //     tags: ["organic", "farming", "sustainable"],
  //     contact: "9345123456",
  //     organizer: "Soil to Soul Network",
  //     date: "01-04-2025",
  //     time: "08:30 AM",
  //     duration: "5 hours",
  //   },
  //   {
  //     no: 16,
  //     title: "Public Transport Promotion",
  //     description: "Encourage using public transport with a campaign in Surat.",
  //     location: "Surat",
  //     photos: [img, img, img, img, img, img],
  //     size: 60,
  //     tags: ["transport", "public", "green"],
  //     contact: "9012123456",
  //     organizer: "Urban Move Trust",
  //     date: "27-05-2025",
  //     time: "08:00 AM",
  //     duration: "3 hours",
  //   },
  //   {
  //     no: 17,
  //     title: "Clean Air Campaign",
  //     description: "Air quality monitoring and awareness in Delhi NCR.",
  //     location: "Delhi NCR",
  //     photos: [img, img, img, img, img, img],
  //     size: 75,
  //     tags: ["air", "pollution", "awareness"],
  //     contact: "9333445566",
  //     organizer: "Breathe India",
  //     cancelled: true,
  //     date: "15-05-2025",
  //     time: "11:00 AM",
  //     duration: "4 hours",
  //   },
  //   {
  //     no: 18,
  //     title: "Green Tech Expo",
  //     description: "Showcasing startups innovating in environmental tech.",
  //     location: "Bangalore",
  //     photos: [img, img, img, img, img, img],
  //     size: 100,
  //     tags: ["tech", "green", "expo"],
  //     contact: "9111222233",
  //     organizer: "Greentech Forum",
  //     date: "08-06-2025",
  //     time: "10:00 AM",
  //     duration: "7 hours",
  //   },
  //   {
  //     no: 19,
  //     title: "Recycling Workshop",
  //     description: "Hands-on session on household recycling in Goa.",
  //     location: "Panaji",
  //     photos: [img, img, img, img, img, img],
  //     size: 30,
  //     tags: ["recycling", "workshop", "waste"],
  //     contact: "9000990000",
  //     organizer: "EcoWaste Initiative",
  //     date: "19-03-2025",
  //     time: "10:00 AM",
  //     duration: "2 hours",
  //   },
  //   {
  //     no: 20,
  //     title: "Compost Training",
  //     description: "Learn to compost at home and reduce organic waste.",
  //     location: "Mysore",
  //     photos: [img, img, img, img, img, img],
  //     size: 35,
  //     tags: ["compost", "organic", "training"],
  //     contact: "9393939393",
  //     organizer: "GreenBin Project",
  //     date: "12-06-2025",
  //     time: "09:00 AM",
  //     duration: "2 hours",
  //   },
  // ];

  const indianCities: string[] = [
    // Tier-1 Cities
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Ahmedabad",

    // Tier-2 Cities
    "Agra",
    "Ajmer",
    "Aligarh",
    "Amravati",
    "Amritsar",
    "Anand",
    "Asansol",
    "Aurangabad",
    "Bareilly",
    "Bardhaman",
    "Belagavi",
    "Berhampur",
    "Bhavnagar",
    "Bhiwandi",
    "Bhopal",
    "Bhubaneswar",
    "Bikaner",
    "Bilaspur",
    "Bokaro Steel City",
    "Bellary",
    "Chandigarh",
    "Coimbatore",
    "Cuttack",
    "Dahod",
    "Dehradun",
    "Dhule",
    "Dombivli",
    "Dhanbad",
    "Bhilai",
    "Durgapur",
    "Erode",
    "Faridabad",
    "Ghaziabad",
    "Gorakhpur",
    "Guntur",
    "Gurugram",
    "Guwahati",
    "Gwalior",
    "Hamirpur",
    "Hubballi-Dharwad",
    "Indore",
    "Jabalpur",
    "Jaipur",
    "Jalandhar",
    "Jalgaon",
    "Jammu",
    "Jamshedpur",
    "Jamnagar",
    "Jhansi",
    "Jodhpur",
    "Kalaburagi",
    "Kakinada",
    "Kannur",
    "Kanpur",
    "Karimnagar",
    "Karnal",
    "Kochi",
    "Kolhapur",
    "Kollam",
    "Kota",
    "Kozhikode",
    "Kumbakonam",
    "Kurnool",
    "Ludhiana",
    "Lucknow",
    "Mathura",
    "Mangaluru",
    "Meerut",
    "Mohali",
    "Moradabad",
    "Mysuru",
    "Nagpur",
    "Nanded",
    "Nadiad",
    "Nashik",
    "Nellore",
    "Noida",
    "Patna",
    "Pimpri-Chinchwad",
    "Puducherry",
    "Purulia",
    "Prayagraj",
    "Raipur",
    "Rajkot",
    "Ranchi",
    "Rourkela",
    "Ratlam",
    "Raichur",
    "Saharanpur",
    "Salem",
    "Sangli",
    "Shimla",
    "Siliguri",
    "Solapur",
    "Srinagar",
    "Surat",
    "Thanjavur",
    "Thiruvananthapuram",
    "Thrissur",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tiruvannamalai",
    "Ujjain",
    "Vijayapura",
    "Vadodara",
    "Varanasi",
    "Vasai-Virar",
    "Vijayawada",
    "Visakhapatnam",
    "Vellore",
    "Warangal",
  ];

  const [EventForm, setEventForm] = useState(false); //state for opening the event creation form

  const [openDialogue, setDialogue] = useState(false); //state for opening the details form of an event

  const [item, setItem] = useState<any | null>(null); //state for opening the dialogue menu of a particular event

  const [tagInput, setTagInput] = useState<string>("");

  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [tags, setTags] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<boolean>(false);
  console.log(item);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formdata = new FormData(form);

    formdata.set("tags", tags.join(","));

    try {
      const result = await createEvent(formdata);
      if (result === true) {
        console.log("Event created successfully");
        setToastMessage(true);
        setEventForm(false);
        {
          toastMessage && (
            <Toast
              message="Event created Successfully"
              handleClick={() => {
                setToastMessage(false);
              }}
            />
          );
        }
      } else {
        console.error("Failed to create event:");
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  useEffect(() => {
    try {
      const fetchAllEvents = async () => {
        const events = await getAllEvents();
        if (events.length > 0) setEvents(events);
      };
      fetchAllEvents();
    } catch (error) {}
  }, []);

  // useEffect(() => {
  //   console.log(Events[0]);
  //   // console.log(upcomingEvents)
  // }, [Events]);

  return (
    <main className="relative max-w-screen-lg w-full mx-auto min-h-screen flex flex-col   overflow-x-hidden">
      <Navbar />

      {/*
        div for filters
      */}
      <div className="w-[95%] mx-auto flex flex-col md:flex md:flex-row gap-4 justify-between items-start md:items-end mb-5 px-2 py-2  h-auto">
        <div className="filters">
          <h1 className="text-md text-start  font-semibold text-de-york-900 font-Raleway">
            Filters
          </h1>
          <div className="w-full flex gap-2 items-center justify-start flex-wrap">
            <select
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
              }}
              className="border-2 border-gray-300 font-Raleway text-md font-semibold text-de-york-800 bg-de-york-100 rounded-lg px-2 py-1"
            >
              <option value="">Select City</option>
              {indianCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
              }}
              className="border-2 border-gray-300 font-Raleway text-md font-semibold text-de-york-800 bg-de-york-100 rounded-lg px-2 py-1"
            >
              <option value="">Select Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="flex justify-evenly gap-2">
          <button
            onClick={() => {
              router.push("/MyEvents");
            }}
            className="font-Raleway font-semibold px-3 py-2 bg-de-york-400 hover:cursor-pointer hover:bg-de-york-300 duration-300 transition-colors ease-linear rounded-lg w-auto"
          >
            My events
          </button>
          <button
            onClick={() => {
              const token = cookieStore.get("token");
              if (token === null) {
                router.push("/signin");
              }
              setEventForm(true);
            }}
            className="font-Raleway font-semibold px-3 py-2 bg-de-york-400 hover:cursor-pointer hover:bg-de-york-300 duration-300 transition-colors ease-linear rounded-lg w-auto"
          >
            Create an Event
          </button>
        </div>
      </div>

      {/* 
      take tags in an array and send it to the server action 
      only take icon image for now, maybe users might upload images later
      keep track of cities in india, use external api
      */}
      {/* //eventform */}
      {EventForm && (
        <div className="fixed inset-0 w-full h-screen bg-black/50 z-50 backdrop-blur-lg flex justify-center items-center">
          <div className="bg-de-york-50 shadow-2xl rounded-lg border-[1px] border-gray-300 backdrop-blur-sm drop-shadow-xl w-[94%] mx-auto h-[80%]  overflow-x-hidden overflow-y-scroll flex flex-col my-auto fixed inset-0 px-6 py-4 ">
            <div className="w-full   h-auto flex justify-end items-center px-2 ">
              <svg
                onClick={() => setEventForm(false)}
                className="w-8 h-8 p-1 border-2 hover:bg-de-york-200 duration-100 transition-colors ease-linear border-gray-400/50 hover:cursor-pointer text-bilbao-950/80 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </div>
            <div className="flex flex-col border-[1px] border-gray-300 rounded-lg px-4 py-6 gap-4 max-w-screen-md w-full mx-auto ">
              <h2 className="w-full font-bold font-Raleway text-xl text-center">
                Create your own event!!
              </h2>
              <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="">
                  <label
                    className="block font-Montserrat text-sm font-semibold mb-2"
                    htmlFor="name"
                  >
                    Title for the event
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full font-Montserrat text-sm px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500"
                    placeholder="Enter title here"
                    required
                  />
                </div>
                <div className="">
                  <label
                    className="block font-Montserrat text-sm font-semibold mb-2"
                    htmlFor="desc"
                  >
                    Description for the event
                  </label>
                  <input
                    type="text"
                    id="desc"
                    name="desc"
                    className="w-full font-Montserrat text-sm px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500"
                    placeholder="Enter Description here"
                    required
                  />
                </div>
                <div className="">
                  <label
                    className="block font-Montserrat text-sm font-semibold mb-2"
                    htmlFor="location"
                  >
                    Select Location
                  </label>
                  <select
                    className="w-1/2 px-4 py-1 bg-de-york-100 font-Montserrat text-sm border-[1px] border-gray-200 rounded-md"
                    id="location"
                    name="location"
                  >
                    <option className="bg-de-york-100 p-2" value="Select city">
                      Select City
                    </option>
                    {indianCities.map((city, index) => {
                      return (
                        <option
                          key={index}
                          className="bg-de-york-100 p-2"
                          value={city}
                        >
                          {city}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="">
                  <label
                    className="block font-Montserrat text-sm font-semibold mb-2"
                    htmlFor="volunteers"
                  >
                    Number of Volunteers
                  </label>
                  <input
                    type="number"
                    id="volunteers"
                    name="volunteers"
                    className="w-full font-Montserrat text-sm px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500"
                    placeholder="Enter here"
                    required
                  />
                </div>
                <div className="">
                  <label
                    className="block font-Montserrat text-sm font-semibold mb-2"
                    htmlFor="contact"
                  >
                    Enter Contact Number
                  </label>
                  <input
                    type="tel"
                    pattern="[6-9]{1}[0-9]{9}"
                    id="contact"
                    name="contact"
                    className="w-full font-Montserrat text-sm px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500"
                    placeholder="Enter here"
                    required
                  />
                </div>
                <div className="">
                  <label
                    className="block font-Montserrat text-sm font-semibold mb-2"
                    htmlFor="date"
                  >
                    Select the date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full font-Montserrat text-sm px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500"
                    placeholder="Enter here "
                    required
                  />
                </div>
                <div className="">
                  <label
                    className="block font-Montserrat text-sm font-semibold mb-2"
                    htmlFor="time"
                  >
                    Select the time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="w-full font-Montserrat text-sm px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500"
                    placeholder="Enter here "
                    required
                  />
                </div>
                <div className="">
                  <label
                    className="block font-Montserrat text-sm font-semibold mb-2"
                    htmlFor="duration"
                  >
                    Enter the duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    className="w-full font-Montserrat text-sm px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500"
                    placeholder="Enter duration here"
                    required
                  />
                </div>
                <div className="mt-3">
                  <label
                    className="block font-Montserrat text-sm font-semibold mb-2"
                    htmlFor="PreEventPhotos"
                  >
                    Upload Pre Event Photos
                    <div className="w-full bg-de-york-200 p-2 rounded-lg border-[1px] border-gray-200 mt-3 flex justify-center items-center">
                      <svg
                        className="w-10 h-10 text-bilbao-600 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z"></path>
                      </svg>
                    </div>
                  </label>
                  <input
                    type="file"
                    id="PreEventPhotos"
                    name="PreEventPhotos"
                    accept="image/png, image/jpeg"
                    multiple
                    className="w-full font-Montserrat text-sm px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500"
                    hidden
                  />
                </div>
                <div className="">
                  <label
                    className="block font-Montserrat text-sm font-semibold mb-2"
                    htmlFor="tags"
                  >
                    Add tags
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    className="w-full font-Montserrat text-sm px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500"
                    placeholder="Enter tags and press Enter"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && tagInput.trim()) {
                        e.preventDefault();
                        if (!tags.includes(tagInput.trim())) {
                          setTags([...tags, tagInput.trim()]);
                        }
                        setTagInput("");
                      }
                    }}
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-de-york-200 px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1"
                      >
                        #{tag}
                        <button
                          type="button"
                          className="ml-1 text-bilbao-700 hover:text-red-500"
                          onClick={() =>
                            setTags(tags.filter((t, i) => i !== idx))
                          }
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                  {/* Hidden input to submit tags as comma separated */}
                  <input type="hidden" name="tags" value={tags.join(",")} />
                </div>

                <div className="w-full mt-3">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 h-auto bg-de-york-300 font-Montserrat font-semibold rounded-md "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="w-[98%] mx-auto gap-6 grid grid-cols-1 px-4 py-2 sm:grid-cols-2 md:grid-cols-2 ">
        {(selectedStatus === "upcoming"
          ? upcomingEvents
          : selectedStatus === "ongoing"
          ? ongoingEvents
          : selectedStatus === "completed"
          ? completedEvents
          : Events
        )
          .filter((item: any) =>
            selectedCity ? item.location === selectedCity : true
          )
          .map((item: any, index: any) => (
            <div
              key={index}
              onClick={() => {
                setItem(item);
                setDialogue(true);
              }}
              className="px-4 cursor-pointer justify-center items-center flex flex-col border-2 border-x-de-york-600/30 border-y-de-york-600/30 py-2 rounded-lg gap-2"
            >
              <div className="image w-full flex justify-start items-center gap-4">
                <Image
                  className="w-20 h-20 object-cover rounded-lg"
                  src={item.PreEventPhotos[0]}
                  height={100}
                  width={100}
                  alt=""
                />
                <div className="w-full flex flex-col py-2 items-start justify-end gap-2">
                  <h1 className="font-semibold text-md text-text font-Raleway">
                    {item.title}
                  </h1>
                  <h2 className=" font-Montserrat text-de-york-800 overflow-hidden text-xs font-semibold text-ellipsis line-clamp-3">
                    {item.description}
                  </h2>
                </div>
              </div>
              <div className="w-full  flex flex-col gap-1 items-start ">
                <h1 className="font-semibold text-xs text-de-york-900 font-Montserrat">
                  Organizer: {item.organizer.name}
                </h1>
                <div className="w-full flex gap-2 flex-wrap justify-start mt-1 items-center">
                  <h3 className="font-semibold text-xs bg-de-york-100 border-[1px] rounded-lg px-2 border-x-bilbao-500 border-y-bilbao-500 text-de-york-600 font-Montserrat">
                    Date: {item.date.toLocaleDateString("en-IN")}
                  </h3>
                  <h3 className="font-semibold text-xs bg-de-york-100 border-[1px] rounded-lg px-2 border-x-bilbao-500 border-y-bilbao-500 text-de-york-600 font-Montserrat">
                    Time: {item.time}
                  </h3>
                </div>
              </div>
              <div className="w-full flex gap-2 flex-wrap justify-start items-center">
                <p className="font-Raleway font-extrabold text-xs flex items-center justify-center border-[1px] border-x-bilbao-500 border-y-bilbao-500 bg-de-york-100 text-bilbao-600 px-2 h-5 text-center rounded-full w-auto">
                  Location: {item.location}
                </p>
                <p className="font-Raleway font-extrabold text-xs flex items-center justify-center border-[1px] border-x-bilbao-500 border-y-bilbao-500 bg-de-york-100 text-bilbao-600 px-2 h-5 text-center rounded-full w-auto">
                  Status:{" "}
                  {getEventStatus(item.date.toLocaleDateString("en-IN"))}
                </p>
              </div>
            </div>
          ))}

        {item && openDialogue && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center backdrop-blur-lg">
            <div className="max-w-screen-lg overflow-y-scroll  flex flex-col justify-evenly h-screen sm:h-[90vh] w-[95%] mx-auto px-4 py-2 bg-de-york-50/90 border-[1px] border-x-gray-400 border-y-gray-400 rounded-lg">
              <div className="w-full flex items-center justify-end">
                <svg
                  onClick={() => setDialogue(false)}
                  className="w-8 h-8 p-1 border-2 border-gray-400/50 hover:cursor-pointer hover:bg-accent text-bilbao-950/80 rounded-lg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
              </div>
              <div className="w-full h-auto flex flex-col items-start gap-2 px-2  font-Raleway font-semibold text-lg ">
                <h1 className="w-full text-start text-lg md:text-2xl text-wrap">
                  {item.title}
                </h1>
                <h1 className="font-semibold font-Montserrat w-full text-wrap text-sm">
                  {item.description}
                </h1>
              </div>
              <div className="w-full h-auto p-2  gap-2 flex flex-col items-start justify-start">
                <h2 className="w-full items-start font-semibold font-Montserrat text-sm">
                  Organizer: {item.organizer.name}
                </h2>
                <div className="w-full flex gap-2 flex-wrap justify-start items-center">
                  <h2 className="bg-de-york-200/70 font-semibold font-Montserrat rounded-full w-auto text-center px-2 py-0.5 border-2 text-xs border-x-de-york-500/60 border-y-de-york-600/60 text-de-york-900 sm:text-sm">
                    Location: {item.location}
                  </h2>
                  <h2 className="bg-de-york-200/70 font-semibold font-Montserrat rounded-full w-auto text-center px-2 py-0.5 border-2 text-xs border-x-de-york-500/60 border-y-de-york-600/60 text-de-york-900 sm:text-sm">
                    Expected Volunteers: {item.volunteers_size} members
                  </h2>
                  <h2 className="bg-de-york-200/70 font-semibold font-Montserrat rounded-full w-auto text-center px-2 py-0.5 border-2 text-xs border-x-de-york-500/60 border-y-de-york-600/60 text-de-york-900 sm:text-sm">
                    Date: {item.date.toLocaleString("en-IN")}
                  </h2>
                  <h2 className="bg-de-york-200/70 font-semibold font-Montserrat rounded-full w-auto text-center px-2 py-0.5 border-2 text-xs border-x-de-york-500/60 border-y-de-york-600/60 text-de-york-900 sm:text-sm">
                    Duration: {item.duration} hours
                  </h2>
                </div>

                <div className=" w-full flex gap-2 flex-wrap justify-start items-center">
                  <h2 className="bg-de-york-200/70 font-semibold font-Montserrat rounded-full w-auto text-center px-2 py-0.5 border-2 text-xs border-x-de-york-500/60 border-y-de-york-600/60 text-de-york-900 sm:text-sm">
                    Status:{" "}
                    {getEventStatus(item.date.toLocaleDateString("en-IN"))}
                  </h2>
                  <h2 className="bg-de-york-200/70 font-semibold font-Montserrat rounded-full w-auto text-center px-2 py-0.5 border-2 text-xs border-x-de-york-500/60 border-y-de-york-600/60 text-de-york-900 sm:text-sm">
                    Contact:+91 {item.contact_number}
                  </h2>
                </div>
                <div className="w-full flex gap-2 flex-wrap justify-start items-center">
                  <span className="font-semibold font-Montserrat text-sm">
                    Tags:
                  </span>
                  {item.tags.map((tag: any, index: any) => {
                    return (
                      <h2
                        key={index}
                        className="bg-de-york-200 flex items-center justify-center rounded-full w-auto text-center px-2 py-0.5 border-x-de-york-500/60 border-y-de-york-500/60 text-de-york-800 font-semibold  border-2 text-xs"
                      >
                        #{tag}
                      </h2>
                    );
                  })}
                </div>
              </div>
              <div className="w-full flex flex-col h-auto justify-center">
                <h2 className="font-semibold px-2 font-Montserrat text-sm">
                  Pre Event Photos:
                </h2>
                <div className="w-full flex flex-wrap py-2 px-2 items-center justify-start gap-2 ">
                  {item.PreEventPhotos.map((photo: any, index: any) => {
                    return (
                      <a
                        key={index}
                        href={
                          typeof photo === "string" ? photo : photo.src ?? "#"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          key={index}
                          className="w-24 h-24 object-cover  rounded-lg"
                          src={photo}
                          layout="responsive"
                          objectFit="cover"
                          width={50}
                          height={50}
                          alt=""
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
