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
      runway_length: 570
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
    }),
    createAirport({
      coordinates: [
        -2.285751,
        1.72608
      ],
      icao: "KHF",
      name: "airport.hampden",
      elevation: 4.27,
      location: {
        region: "region.r.oconia-central",
        subregion: "region.sr.hampden",
      },
      logo: "/aeromap-logos/Hampden.png",
      image_url: "/aeromap-assets/Hampden.png",
      trello_card: "https://trello.com/c/NvkIfEWe/14-hampden-field-khf",
      marker_icon: "small_airport",
      runway_length: 630,
      runway: "N/A",
    }),
    createAirport({
      coordinates: [
        71.833871,
        -7.42923
      ],
      icao: "EKNO",
      name: "airport.enoksen",
      elevation: 53,
      location: {
        region: "region.r.enoksen",
        town: "region.town.enoksen",
      },
      image_url: "/aeromap-assets/enoksen.png",
      trello_card: "https://trello.com/c/ljSqLhfL",
      marker_icon: "airport",
      runway_length: 1902,
      runway: "07/25",
    }),
    createAirport({
      coordinates: [
        -46.882897, 
        -73.215852
      ],
      icao: "WSML",
      name: "airport.udyanapura",
      elevation: 7,
      location: {
        region: "region.r.kyokkou",
        subregion: "region.sr.udyanapura",
        town: "region.town.udyanapura-merlani",
      },
      image_url: "/aeromap-assets/udyanapura.png",
      trello_card: "https://trello.com/c/FdNXj969",
      marker_icon: "airport",
      runway_length: 4000,
      runway: "36R/18L, 36L/18R, 36C/18C",
    }),
    createAirport({
      coordinates: [
        -2.159132,
        -97.3395
      ],
      icao: "VHAL",
      name: "airport.altak",
      elevation: 6,
      location: {
        region: "region.r.kyokkou",
        subregion: "region.sr.zhongjing",
      },
      image_url: "/aeromap-assets/altak.png",
      trello_card: "https://trello.com/c/dPMxRAcg",
      marker_icon: "airport",
      runway_length: 3390,
      runway: "18/36",
    }),
    createAirport({
      coordinates: [
        8.151515, 
        -25.369006
      ],
      icao: "KKBI",
      name: "airport.kitesboro",
      elevation: 3.3,
      location: {
        region: "region.r.oconia-central",
        subregion: "region.sr.kitesboro",
        town: "region.town.kitesboro-city",
      },
      logo: "/aeromap-logos/Kitesboro.svg",
      image_url: "https://trello.com/1/cards/6129057233668d2bb78d68f9/attachments/642cf505c9e9d638e9fe7c52/download/Kitesboro_Remodel.png",
      trello_card: "https://trello.com/c/1XK40PfY",
      marker_icon: "airport",
      runway_length: 2865,
      runway: "12/29",
    }),
    createAirport({
      coordinates: [
        17.790367, 
        1.504955
      ],
      icao: "KNET",
      name: "airport.newengland",
      elevation: 1.2,
      location: {
        region: "region.r.oconia-central",
        town: "region.town.newengland",
      },
      logo: "/aeromap-logos/Englandtown.svg",
      image_url: "/aeromap-assets/englandtown.jpg",
      trello_card: "https://trello.com/c/kJnXBUIy",
      marker_icon: "airport",
      runway_length: 1368.7,
      runway: "06/24",
    }),
    createAirport({
      coordinates: [
        4.623419, 
        -23.7327
      ],
      icao: "KAA",
      name: "airport.ardmore",
      elevation: 3.7,
      location: {
        region: "region.r.oconia-central",
        subregion: "region.sr.kitesboro",
        town: "region.town.ardmore",
      },
      image_url: "/aeromap-assets/ardmore.jpg",
      trello_card: "https://trello.com/c/8DGaq35j",
      marker_icon: "small_airport",
      runway_length: 810,
      runway: "17/35",
    }),
    createAirport({
      coordinates: [
        -14.102988, 
        -0.130271
      ],
      icao: "UHFI",
      name: "airport.fiskar",
      elevation: 2.7,
      location: {
        region: "region.r.oconia-southern",
        subregion: "region.sr.fiskar",
      },
      logo: "/aeromap-logos/Fiskar.svg",
      image_url: "https://trello.com/1/cards/6129057633668d2bb78d6d93/attachments/644359519a9170d297d52895/download/Fiskar_Island_Remodel.png",
      trello_card: "https://trello.com/c/VDCq4Re0",
      marker_icon: "airport",
      runway_length: 4000,
      runway: "08/26",
    }),
    createAirport({
      coordinates: [
        -21.757419, 
        5.939537
      ],
      icao: "NTBA",
      name: "airport.stbaralku",
      elevation: 4,
      location: {
        region: "region.r.oconia-southern",
        subregion: "region.sr.stbaralku",
      },
      logo: "/aeromap-logos/StBaralku.svg",
      image_url: "https://trello.com/1/cards/6172ecf4be58140f7773c038/attachments/61d8ef02c907224e6d100e62/download/Saint_Baralku_Airport.png",
      trello_card: "https://trello.com/c/dlCsErtl",
      marker_icon: "airport",
      runway_length: 615.7,
      runway: "09/27",
    }),
    createAirport({
      coordinates: [
        -30.024634, 
        2.537098
      ],
      icao: "PMEA",
      name: "airport.eagle",
      elevation: 5,
      location: {
        region: "region.r.oconia-southern",
        subregion: "region.sr.eagle",
      },
      image_url: "/aeromap-assets/eagle_island.png",
      trello_card: "https://trello.com/c/Uw00e2zQ",
      marker_icon: "small_airport",
      runway_length: 1628,
      runway: "01/19",
    }),
    createAirport({
      coordinates: [
        -24.161641,
        -18.406872
      ],
      icao: "KLAB",
      name: "airport.lynwood",
      elevation: 6,
      location: {
        region: "region.r.oconia-southern",
        subregion: "region.sr.lynwood",
      },
      image_url: "/aeromap-assets/lynwood.png",
      trello_card: "https://trello.com/c/UMehb9ZV",
      marker_icon: "airport",
      runway_length: 2744,
      runway: "09/27,15/33",
    }),
    createAirport({
      coordinates: [
        -9.631495,
        -109.667983
      ],
      icao: "ZBHM",
      name: "airport.horomoto",
      elevation: 7,
      location: {
        region: "region.r.kyokkou",
        subregion: "region.sr.zhongjing",
      },
      image_url: "/aeromap-assets/horomoto.png",
      trello_card: "https://trello.com/c/4SybVU8a",
      marker_icon: "airport",
      runway_length: 4050,
      runway: "06R/24L,06L/24R",
    }),
    createAirport({
      coordinates: [
        82.864266,
        -171.654015
      ],
      icao: "ATOM",
      name: "airport.tomfoolery",
      elevation: 41,
      location: {
        region: "region.r.aesir",
      },
      image_url: "/aeromap-assets/tomfoolery.png",
      trello_card: "https://trello.com/c/CXwYn3IL",
      marker_icon: "small_airport",
      runway_length: 1853,
      runway: "04/22",
    }),
    createAirport({
      coordinates: [
        -61.073237,
        156.801152
      ],
      icao: "ATOM",
      name: "airport.valois",
      elevation: 7,
      location: {
        region: "region.r.avalon",
        subregion: "region.sr.avalon-southeast",
      },
      image_url: "/aeromap-assets/valois.png",
      trello_card: "https://trello.com/c/gB0fLnBi",
      marker_icon: "airport",
      runway_length: 4000,
      runway: "02/20",
    }),
    createAirport({
      coordinates: [
        -17.590366,
        22.584864
      ],
      icao: "KHIA",
      name: "airport.harden",
      elevation: 8,
      location: {
        region: "region.r.oconia-southern",
        subregion: "region.sr.harden",
      },
      image_url: "/aeromap-assets/harden.png",
      trello_card: "https://trello.com/c/bVDIxnDU",
      marker_icon: "airport",
      runway_length: 9360,
      runway: "04/22,01/19",
    }),
    createAirport({
      coordinates: [
        -16.266538,
        17.512223
      ],
      icao: "KKRA",
      name: "airport.kauwela",
      elevation: 6,
      location: {
        region: "region.r.oconia-southern",
        subregion: "region.sr.harden",
      },
      image_url: "/aeromap-assets/kauwela.png",
      trello_card: "https://trello.com/c/nDznfQJD",
      marker_icon: "small_airport",
      runway_length: 3684,
      runway: "06/24",
    }),
    createAirport({
      coordinates: [
        -8.958459,
        -8.887958
      ],
      icao: "KPPA",
      name: "airport.pembroke",
      elevation: 22,
      location: {
        region: "region.r.oconia-southern",
        subregion: "region.sr.pembroke",
      },
      image_url: "/aeromap-assets/pembroke.png",
      trello_card: "https://trello.com/c/fN91A7R1",
      marker_icon: "small_airport",
      runway_length: 680,
      runway: "25/07",
    }),
    createAirport({
      coordinates: [
        26.485487,
        44.682287
      ],
      icao: "NTRI",
      name: "airport.rawaki",
      elevation: 4,
      location: {
        region: "region.r.rawaki",
      },
      image_url: "/aeromap-assets/rawaki.png",
      trello_card: "https://trello.com/c/5VbLfhJ8",
      marker_icon: "airport",
      runway_length: 2050,
      runway: "09/27",
    }),
    createAirport({
      coordinates: [
        -22.376646,
        -13.443234
      ],
      icao: "KLMA",
      name: "airport.lynwoodmuni",
      elevation: 10,
      location: {
        region: "region.r.oconia-southern",
        subregion: "region.sr.lynwood",
      },
      image_url: "/aeromap-assets/lynwoodmuni.png",
      trello_card: "https://trello.com/c/Au7ZOPbd",
      marker_icon: "small_airport",
      runway_length: 3645,
      runway: "14/32,02/20",
    }),
    createAirport({
      coordinates: [
        -35.13831, 
        -11.705867
      ],
      icao: "NTAA",
      name: "airport.augustus",
      elevation: 10,
      location: {
        region: "region.r.oconia-southern",
        subregion: "region.sr.augustus",
      },
      image_url: "/aeromap-assets/lynwoodmuni.png",
      trello_card: "https://trello.com/c/ugnVivAR",
      marker_icon: "airport",
      runway_length: 3645,
      runway: "16/36",
    }),
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
    },

    {
      "coordinates": [0.186905, 10.374653],
      "image_url": "/crates/clarence1.avif",
    },
    {
      "coordinates": [-1.70224, 8.265832],
      "image_url": "/crates/clarence2.avif",
    },
    {
      "coordinates": [3.395792, 9.230698],
      "image_url": "/crates/clarence3.avif",
    },
    {
      "coordinates": [0.101882, 10.351581],
      "image_url": "/crates/clarence4.avif",
    },
    {
      "coordinates": [-1.413167, 9.021163],
      "image_url": "/crates/clarence5.avif",
    },
    {
      "coordinates": [-1.221517, 8.498577],
      "image_url": "/crates/clarence6.avif",
    },
    {
      "coordinates": [-1.221517, 8.498577],
      "image_url": "/crates/clarence6.avif",
    },
    {
      "coordinates": [-1.713743, 8.248269],
      "image_url": "/crates/clarence7.avif",
    },
    {
      "coordinates": [0.613525, 6.947565],
      "image_url": "/crates/clarence8.avif",
    },
    {
      "coordinates": [0.292622, 5.826908],
      "image_url": "/crates/clarence9.avif",
    },
    {
      "coordinates": [4.477674, 9.483551],
      "image_url": "/crates/clarence10.avif",
    },
  ]
})

export default Oconia;