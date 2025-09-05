"use client";
import Navbar from "@/Components/Navbar";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userEvents } from "../store/recoil";
import { getEvents } from "@/Actions/actions";

function page() {
  const [events, setEvents] = useRecoilState(userEvents);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    console.log("Events in MyEvents page:", events);
    async function fetchEvents() {
      try {
        setLoading(true);
        
        setError("");
        const Data = await getEvents();
        console.log("Fetched events:", Data[0]);
        setEvents(Data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to fetch events");
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, [setEvents]);

  return (
    <div className="max-w-screen-lg w-full mx-auto h-screen bg-background overflow-hidden">
      <div className="w-full flex flex-col items-start min-h-screen overflow-x-hidden overflow-y-scroll py-3">
        <Navbar />

        <div className="w-full flex items-center mt-10 justify-start">
          <h1 className="font-Raleway px-10 font-bold text-2xl text-text">
            My Events
          </h1>
        </div>

        <div className="w-full px-10 mt-6">
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 font-semibold text-bilbao-950 hidden md:block animate-spin"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17ZM22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11H21C21.5523 11 22 11.4477 22 12ZM7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12ZM19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6569 19.0711L15.5355 16.9497C15.145 16.5592 15.145 15.9261 15.5355 15.5355C15.9261 15.145 16.5592 15.145 16.9497 15.5355L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711ZM8.46447 8.46447C8.07394 8.85499 7.44078 8.85499 7.05025 8.46447L4.92893 6.34315C4.53841 5.95262 4.53841 5.31946 4.92893 4.92893C5.31946 4.53841 5.95262 4.53841 6.34315 4.92893L8.46447 7.05025C8.85499 7.44078 8.85499 8.07394 8.46447 8.46447ZM4.92893 19.0711C4.53841 18.6805 4.53841 18.0474 4.92893 17.6569L7.05025 15.5355C7.44078 15.145 8.07394 15.145 8.46447 15.5355C8.85499 15.9261 8.85499 16.5592 8.46447 16.9497L6.34315 19.0711C5.95262 19.4616 5.31946 19.4616 4.92893 19.0711ZM15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025L17.6569 4.92893C18.0474 4.53841 18.6805 4.53841 19.0711 4.92893C19.4616 5.31946 19.4616 5.95262 19.0711 6.34315L16.9497 8.46447C16.5592 8.85499 15.9261 8.85499 15.5355 8.46447Z"></path>
              </svg>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center py-8">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded font-Raleway">
                {error}
                <button
                  onClick={() => window.location.reload()}
                  className="ml-4 underline hover:no-underline"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : events.length === 0 ? (
            <div className="flex flex-col justify-center items-center py-16">
              <svg
                className="w-16 h-16 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="font-raleway text-gray-500 text-lg">
                No events found
              </p>
              <p className="font-Raleway text-gray-400 text-sm mt-2">
                Create your first event to get started!
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {events &&
                events.map((event, index) => {
                  return (
                    <div
                      className="flex flex-col gap-1 w-full h-auto px-4 py-2  bg-background border-[1px] border-bilbao-200 rounded-lg  items-start justify-start"
                      key={event._id}
                    >
                      <h1 className="w-full font-Raleway text-xl font-semibold text-bilbao-900 capitalize">
                        Title: {event.title}
                      </h1>
                      <h2 className="w-full font-Raleway font-semibold text-bilbao-700 capitalize">
                        Description: {event.description}
                      </h2>
                      <h3 className="w-full font-Montserrat font-semibold text-bilbao-600 capitalize">
                        Date: {new Date(event.date).toLocaleDateString("en-IN")}
                      </h3>
                      <h3 className="w-full font-Montserrat font-semibold text-bilbao-600 capitalize">
                        Time: {event.time}
                      </h3>
                      <h3 className="w-full font-Montserrat font-semibold text-bilbao-600 capitalize">
                        Location: {event.location}
                      </h3>
                      <h3 className="w-full font-Montserrat font-semibold text-bilbao-600 capitalize">
                        Volunteers Needed: {event.volunteers_size}
                      </h3>
                      <h3 className="w-full font-Montserrat font-semibold text-bilbao-600 capitalize">
                        Contact Number: {event.contact_number}
                      </h3>
                      {event.tags && event.tags.length > 0 && (
                        <div className="w-full flex gap-3 items-center justify-start ">
                          <span className="font-Montserrat text-bilbao-600 font-semibold">
                            Tags:{" "}
                          </span>
                          <p className="font-Raleway font-extrabold text-xs flex items-center justify-center border-[1px] border-x-bilbao-500 border-y-bilbao-500 bg-de-york-100 text-bilbao-600 px-2 h-5 text-center rounded-full w-auto">
                            {event.tags.map((tag: any, tagindex: number) => {
                              return (
                                <span key={tagindex} className="mr-1">
                                  # {tag}
                                </span>
                              );
                            })}
                          </p>
                        </div>
                      )}
                      {event.date > new Date().toISOString() ? (
                        <p className="font-Raleway font-extrabold text-xs flex items-center justify-center border-[1px] border-x-yellow-500 border-y-yellow-500 bg-de-york-100 text-yellow-600 px-2 h-5 text-center rounded-full w-auto">
                          Upcoming
                        </p>
                      ) : (
                        <p className="font-Raleway font-extrabold text-xs flex items-center justify-center border-[1px] border-x-bilbao-500 border-y-bilbao-500 bg-de-york-100 text-bilbao-600 px-2 h-5 text-center rounded-full w-auto">
                          Completed
                        </p>
                      )}
                      {event.PreEventPhotos &&
                        event.PreEventPhotos.length > 0 && (
                          <div className="w-full flex flex-col flex-wrap gap-2 mt-2">
                            <h3 className="font-Montserrat font-semibold text-bilbao-600 capitalize">
                              Pre-Event Photos:
                            </h3>
                            {event.PreEventPhotos.map(
                              (photo: string, photoIndex: number) => (
                                <img
                                  key={photoIndex}
                                  src={photo}
                                  alt={`Event Photo ${photoIndex + 1}`}
                                  className="w-24 h-24 object-cover rounded-md"
                                />
                              )
                            )}
                          </div>
                        )}

                      {event.PostEventPhotos.length > 0 ? (
                        <div className="w-full flex flex-col flex-wrap gap-2 mt-2">
                          <h3 className="font-Raleway font-semibold text-bilbao-600 capitalize">
                            Post-Event Photos:
                          </h3>
                          {event.PostEventPhotos.map(
                            (photo: string, photoIndex: number) => (
                              <img
                                key={photoIndex}
                                src={photo}
                                alt={`Event Photo ${photoIndex + 1}`}
                                className="w-24 h-24 object-cover rounded-md"
                              />
                            )
                          )}
                        </div>
                      ) : (
                        <div className="w-full flex gap-3 items-center justify-start mt-2">
                          <p className="font-Raleway font-medium text-bilbao-600">
                            No post-event photos available
                          </p>
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M15 14L14.8834 14.0067C14.4243 14.0601 14.0601 14.4243 14.0067 14.8834L14 15V21H3.99826C3.44694 21 3 20.5551 3 20.0066V3.9934C3 3.44476 3.44495 3 3.9934 3H20.0066C20.5552 3 21 3.44749 21 3.9985V14H15ZM21 16L16 20.997V16H21Z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
