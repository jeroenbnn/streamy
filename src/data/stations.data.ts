import { Station } from "src/models/station.model";

/**
 * All of the available stations
 * Replace this with your links
 */
export const stations: Station[] = [
  {
    name: "Kerst",
    stream: "https://kathy.torontocast.com:4650/stream",
    lastSongsPath: "https://kathy.torontocast.com:4650/played?type=json",
  },
  {
    name: "Sint",
    stream: "https://cast1.torontocast.com:3910/stream",
    lastSongsPath: "https://cast1.torontocast.com:3910/played.html?type=json",
  },
  {
    name: "Summer",
    stream: "https://kathy.torontocast.com:3285/stream",
    lastSongsPath: "https://kathy.torontocast.com:2160/played.html?type=json",
  },
];
