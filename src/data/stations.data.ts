import { Station } from "src/models/station.model";

/**
 * All of the available stations
 * Replace this with your links
 */
export const stations: Station[] = [
  {
    name: "Charming Christmas Radio",
    stream: "http://kathy.torontocast.com:4650/stream",
    lastSongsPath: "http://kathy.torontocast.com:4650/played?type=json",
  },
  {
    name: "Sinterklaasradio",
    stream: "http://kathy.torontocast.com:4650/",
    lastSongsPath: "http://kathy.torontocast.com:4650/played?type=json",
  },
  {
    name: "100% Summer",
    stream: "http://kathy.torontocast.com:3910/stream",
    lastSongsPath: "http://kathy.torontocast.com:3910/played?type=json",
  },
];
