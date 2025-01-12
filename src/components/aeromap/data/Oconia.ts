import { createAirport, createRegion } from "../util/Factory";

const Oconia = createRegion({
  id: "region.r.oconia-central",
  airports: [
    createAirport({
      coordinates: [0.581987, -0.913019],
      logo: "/aeromap-logos/Oconee.png",
      icao: "KOIA",
      name: "airport.oconee",
      location: {
        region: "region.r.oconia-central",
        subregion: "region.sr.oconee"
      },
      runway: "05/23",
      runway_length: 1150,
      marker_icon: "airport",
      trello_card: "https://trello.com/c/e6IcX2eM",
      elevation: 1,
      image_url: "/aeromap-assets/oconee_airport.jpg",
      on_click: {
        "zoom_in": true
      }
    }),
    createAirport({
      coordinates: [
        6.155336,
        4.055268
      ],
      icao: "KMEA",
      name: "airport.millsho",
      elevation: 3.96,
      location: {
        region: "region.r.oconia-central",
        subregion: "region.sr.milsho"
      },
      image_url: "/aeromap-assets/milsho.png",
      runway: "07/25",
      marker_icon: "small_airport",
      trello_card: "https://trello.com/c/RJ2LgDbC/36-millsho-estate-kmea",
      runway_length: 0
    }),
    createAirport({
      coordinates: [
        1.081321,
        9.863526
      ],
      logo: "/aeromap-logos/Clarence.png",
      icao: "KCIA",
      name: "airport.clarence",
      location: {
        region: "region.r.oconia-central",
        subregion: "region.sr.clarence"
      },
      elevation: 2.7,
      runway: "6/27,18/36",
      runway_length: 2135,
      marker_icon: "airport",
      trello_card: "https://trello.com/c/vtI1Emqw",
      image_url: "https://trello.com/1/cards/6129057233668d2bb78d68fb/attachments/6301ef7c4577606a5bb629db/download/IMG_20220821_113744.png",
      based_on: "LaGuardia International Airport",
      based_on_url: "https://en.wikipedia.org/wiki/LaGuardia_Airport",
      on_click: {
        zoom_in: true,
        highlight: [
          [0.990319, 9.120732],
          [0.965832, 9.121148],
          [0.965832, 10.012588],
          [0.63007, 10.012747],
          [0.629033, 10.037038],
          [0.965832, 10.038166],
          [0.965832, 10.227504],
          [0.994672, 10.228335],
          [0.994879, 10.039824],
          [1.741664, 10.040463],
          [1.741872, 10.017833],
          [0.996596, 10.012217]
        ]
      }
    }),
    createAirport({
      coordinates: [
        4.219562,
        9.794877
      ],
      icao: "KGA",
      logo: "/aeromap-logos/Gaston.png",
      name: "airport.gaston",
      location: {
        region: "region.r.oconia-central",
        subregion: "region.sr.clarence",
        town: "region.town.gaston"
      },
      elevation: 3.7,
      runway: "N/A",
      runway_length: 590,
      marker_icon: "small_airport",
      trello_card: "https://trello.com/c/E0AvaBmQ",
      image_url: "/aeromap-assets/gaston_airfield.jpg",
      on_click: {
        zoom_in: true
      }
    }),
    createAirport({
      icao: "MUWI",
      logo: "/aeromap-logos/Webley.png",
      name: "airport.webley",
      elevation: 45,
      runway: "12/30",
      runway_length: 640,
      location: {
        subregion: "region.sr.webley",
        region: "region.r.oconia-central"
      },
      coordinates: [7.589975, -10.749435],
      marker_icon: "small_airport",
      trello_card: "https://trello.com/c/Nvjfrc9i",
      image_url: "/Webley_Island.png",
      on_click: {
        zoom_in: true,
        highlight: [
          [7.678528, -10.950621],
          [7.689357, -10.94529],
          [7.536294, -10.645368],
          [7.52626, -10.649758]
        ]
      }
    })
  ],
  crates: [
    {
      "coordinates": [7.710332, -10.491943],
      "image_url": "/aeromap-assets/webley-island/crateloc1.jpg"
    },
    {
      "coordinates": [7.969496, -10.0978093],
      "image_url": "/aeromap-assets/webley-island/crateloc2.jpg"
    },
    {
      "coordinates": [7.702528, -10.119438],
      "image_url": "/aeromap-assets/webley-island/crateloc3.jpg"
    }
  ]
})

export default Oconia;