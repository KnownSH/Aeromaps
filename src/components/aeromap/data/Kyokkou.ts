import { createRegion, createAirport } from "../util/Factory";

const Kyokkou= createRegion({
  id: "region.r.kyokkou",
  airports: [
    createAirport({
      coordinates: [
        -54.472694,
        -117.879849
      ],
      icao: "RKUB",
      logo: "/aeromap-logos/Umibutsu.png",
      name: "airport.umibutsu",
      location: {
        region: "region.r.kyokkou",
        subregion: "region.sr.eiko"
      },
      runway: "06L/24R,06R/24L",
      runway_length: 3500,
      marker_icon: "airport",
      trello_card: "https://trello.com/c/j13OIVgV",
      based_on: "Kansai International Airport",
      based_on_url: "https://en.wikipedia.org/wiki/Kansai_International_Airport",
      elevation: 6,
      image_url: "/aeromap-assets/umibutsu_airport.png",
      on_click: {
        zoom_in: true
      }
    }),
    createAirport({
      coordinates: [-55.579496, -95.781209],
      icao: "RJKP",
      logo: "/aeromap-logos/Kapa.svg",
      unofficial_logo: true,
      name: "airport.kapa",
      location: {
        region: "region.r.kyokkou",
        subregion: "region.sr.kapa"
      },
      runway: "N/A",
      runway_length: 625,
      marker_icon: "airport",
      trello_card: "https://trello.com/c/kM4bGon8",
      based_on: "Satsuma Iōjima Airport",
      based_on_url: "https://en.wikipedia.org/wiki/Satsuma_I%C5%8Djima_Airport",
      elevation: 180,
      image_url: "/aeromap-assets/kapa-airport.jpg",
      on_click: {
        zoom_in: true
      }
    }),
     createAirport({
      coordinates: [
        -25.067281,
        -130.120176
      ],
      marker_icon: "airport",
      logo: "",
      image_url: "/aeromap-assets/jepo.png",
      trello_card: "https://trello.com/c/CWFGLXKi",
      runway_length: 3180,
      runway: "04/22,11/29",
      elevation: 6,
      location: {
        region: "region.r.kyokkou",
        town: "region.town.jepo"
      },
      name: "airport.jepo",
      icao: "RKJP"
    }),
     createAirport({
      coordinates: [
        -52.045933, 
        -117.453628
      ],
      icao: "RKBO",
      name: "airport.kibospace",
      location: {
        region: "region.r.kyokkou",
        subregion: "main.none"
      },
      runway: "11/29",
      runway_length: 2936.25,
      trello_card: "https://trello.com/c/F6Pwjwtf",
      image_url: "https://trello.com/1/cards/62fc40b9cf987368e4789696/attachments/6624e2fd691d5b85980194f3/download/image.png",
      elevation: 10,
      marker_icon: "airport"
    })
  ]
});

export default Kyokkou;