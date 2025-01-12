import { createRegion, createAirport } from "../util/Factory";

const Avalon = createRegion({
  id: "region.r.avalon",
  airports: [
    createAirport({
      coordinates: [
        0.599848,
        121.132203
      ],
      marker_icon: "airport",
      logo: "/aeromap-logos/Anhedral-Intl.svg",
      image_url: "/aeromap-assets/anhedral.png",
      trello_card: "https://trello.com/c/RRMNSbOh",
      runway_length: 12001,
      runway: "03R/21R,03L/21L",
      elevation: 10,
      location: {
        region: "region.r.avalon",
        subregion: "region.sr.avalon-northern",
        town: "region.town.anhedral"
      },
      name: "airport.anhedral",
      icao: "EGAI",
      on_click: {
        zoom_in: true
      }
    })
  ]
});

export default Avalon;