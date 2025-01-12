import { createRegion, createAirport } from "../util/Factory";

const Alavega = createRegion({
  id: "region.r.alavega",
  airports: [
    createAirport({
      coordinates: [
        -75.85,
        53.83
      ],
      icao: "TTHC",
      name: "airport.cabana",
      location: {
        region: "region.r.alavega"
      },
      elevation: 2,
      runway: "34",
      runway_length: 257,
      marker_icon: "hidden_airport",
      trello_card: "https://trello.com/c/AYOZ9kKG",
      image_url: "/aeromap-assets/cabana_totalmente.png"
    })
  ]
});

export default Alavega;