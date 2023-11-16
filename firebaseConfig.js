import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const locations = [
  {
    id: 0,
    name: "Stevens Insitute of Technology",
    latitude: 40.7448,
    longitude: -74.0256,
    latitudeDelta: 0.04,
    longitudeDelta: 0.02,
    description: "cheap college",
    visited: false,
  },
  {
    id: 1,
    name: "Benny Tudinos",
    latitude: 40.74424,
    longitude: -74.02912,
    latitudeDelta: 0.04,
    longitudeDelta: 0.02,
    description: "pizza meme",
    visited: false,
  },
  {
    id: 2,
    name: "Hoboken Terminal",
    latitude: 40.7349,
    longitude: -74.0291,
    latitudeDelta: 0.04,
    longitudeDelta: 0.02,
    description: "fun times...",
    visited: false,
  },
];

const badges = [
  {
    id: 0,
    name: "Noobie",
    description: "Awarded for your first location visited!",
  },
  {
    id: 1,
    name: "Explorer",
    description: "Awarded for visiting three locations!",
  },
  {
    id: 2,
    name: "Adventurer",
    description: "Awarded for visiting 10 locations!",
  },
  {
    id: 3,
    name: "Foodie Adventurer",
    description: "Awarded for visiting 5 food locations!",
  },
  {
    id: 4,
    name: "Time Traveler",
    description: "Awarded for visiting 5 hisorical sites!",
  },
];

function writeLocationData(locations) {
  for (const location of locations) {
    const reference = ref(db, `locations/${location.id}`);
    set(reference, location);
  }
}

function writeBadgeData(badges) {
  for (const badge of badges) {
    const reference = ref(db, `badges/${badge.id}`);
    set(reference, badge);
  }
}

writeLocationData(locations);
writeBadgeData(badges);

export { app, db };
