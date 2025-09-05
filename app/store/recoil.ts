import { atom, selector } from "recoil";
import { getEventStatus } from "../utils/utils";

export const userEvents = atom<any[]>({   //atom for fetching userEvents
  key: "userEvents",
  default: [],
});


export const allEvents = atom<any[]>({   //atom for fetching allEvents
  key: "allEvents",
  default:[]
});


//selector for filter userEvents based on upcoming , ongoing and completed events

export const upcomingEventsSelector = selector({
  key: "upcomingEventsSelector",
  get: ({ get }) => {
    const events = get(allEvents);
    return events.filter((event) => getEventStatus(event.date.toLocaleDateString("en-IN")) === "upcoming");
  },
});

export const completedEventsSelector = selector({
  key: "completedEventsSelector",
  get: ({ get }) => {
    const events = get(allEvents);
    return events.filter((event) => getEventStatus(event.date.toLocaleDateString("en-IN")) === "completed");
  },
});

export const ongoingEventsSelector = selector({
  key: "ongoingEventsSelector",
  get: ({ get }) => {
    const events = get(allEvents);
    return events.filter((event) => getEventStatus(event.date.toLocaleDateString("en-IN")) === "cancelled");
  },  
});



export const userAtom = atom<{} | null>({
  key: "userAtom",
  default: null,
});
