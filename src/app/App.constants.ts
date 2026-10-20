export const EVENT = {
  bride: "Sarah",
  startTime: "2027-04-24T16:00:00Z",
  endTime: "2027-04-24T19:00:00Z",
  timeZone: "America/New_York",
  venue: "Isola's",
  address: "35 Elm St, Westfield, NJ 07090",
  venueWebsite: "https://www.isolawestfield.com/",
  welcome:
    "Join us for a special afternoon celebrating the bride-to-be, surrounded by the people who love her most.",
  rsvpBy: "[RSVP Deadline]",
  rsvpUrl: "[RSVP Link]",
  registryUrl: "[Registry Link]",
  giftNote:
    "[Add a gift registry link or a personal note about gifts here.]",
  photoUrl: "",
};

 export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    EVENT.address
  )}`;

export const SECTIONS = [
  {
    number: "01",
    title: "Getting here by car",
    description:
      "[Add venue parking instructions, nearby public parking, street parking rules, and any arrival recommendations.]",
    link: "View directions",
    href: MAPS_URL,
  },
  {
    number: "02",
    title: "Coming by train",
    description:
      "NJ Transit's Raritan Valley Line serves Westfield from New York Penn Station with a transfer at Newark Penn Station on applicable itineraries. Check the current schedule before traveling, as connections and weekend service can vary.",
    link: "Plan your train trip",
    href: "https://www.njtransit.com/",
  },
];

export const LOCAL_ACTIVITIES = [
  {
    title: "Explore downtown",
    category: "SHOPPING & CAFÉS",
    description:
      "Take a stroll through downtown Westfield and discover its boutiques, cafés, and local restaurants.",
  },
  {
    title: "Enjoy a little greenery",
    category: "OUTDOORS",
    description:
      "Visit Mindowaskin Park for a peaceful walk and a relaxing break in a lovely neighborhood setting.",
  },
  {
    title: "Stay for a meal",
    category: "FOOD & DRINK",
    description:
      "[Add a favorite local restaurant, brunch spot, or coffee shop recommendation.]",
  },
];
