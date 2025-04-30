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
      marker_icon: "major_airport",
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
        region: "region.town.enoksen",
        town: "region.r.enoksen",
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
      marker_icon: "major_airport",
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
      marker_icon: "airbase",
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
      icao: "LFVI",
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
      image_url: "/aeromap-assets/augustus.jpg",
      trello_card: "https://trello.com/c/ugnVivAR",
      marker_icon: "airport",
      runway_length: 3645,
      runway: "16/36",
    }),
    createAirport({
      coordinates: [
        50.454483,
        114.391705
      ],
      icao: "CTIK",
      name: "airport.tikaranto",
      elevation: 5,
      location: {
        region: "region.r.aesir",
        subregion: "region.sr.abbostland-south",
        town: "region.town.tikaranto"
      },
      image_url: "/aeromap-assets/tikaranto.png",
      trello_card: "https://trello.com/c/6WwMjCq4",
      marker_icon: "major_airport",
      runway: "16R/34L, 07C/25C, 07L/25R, 16L/34R, 07R/25L",
      runway_length: 3390
    }),
    createAirport({
      coordinates: [
        49.812692, 
        112.538673
      ],
      icao: "CTCA",
      name: "airport.tikaranto-city",
      elevation: 5,
      location: {
        region: "region.r.aesir",
        subregion: "region.sr.abbostland-south",
        town: "region.town.tikaranto"
      },
      image_url: "/aeromap-assets/tikaranto-city.jpg",
      trello_card: "https://trello.com/c/D3TcxZhe",
      marker_icon: "airport",
      runway: "13/31, 15/33",
      runway_length: 1388
    }),
    createAirport({
      coordinates: [
        54.910269, 
        112.099075
      ],
      icao: "ESRB",
      name: "airport.base23",
      elevation: 6.4,
      location: {
        region: "region.r.aesir",
        subregion: "region.sr.abbostland-south"
      },
      image_url: "/aeromap-assets/base23.jpg",
      trello_card: "https://trello.com/c/KYBoC561",
      marker_icon: "hidden_airport",
      runway: "N/A",
      runway_length: 810,
    }),
    createAirport({
      coordinates: [
        55.760259, 
        110.028011
      ],
      icao: "CNJO",
      name: "airport.sunrise",
      elevation: 8.8,
      location: {
        region: "region.r.aesir",
        subregion: "region.sr.abbostland-south"
      },
      image_url: "/aeromap-assets/sunrise.jpg",
      trello_card: "https://trello.com/c/JXeu9BT7",
      marker_icon: "hidden_airport",
      runway: "N/A",
      runway_length: 300,
    }),
    createAirport({
      coordinates: [
        51.969981, 
        114.535249
      ],
      icao: "N/A",
      name: "airport.tikaranto-abandoned",
      elevation: 6,
      nodata: true,
      location: {
        region: "region.r.aesir",
        subregion: "region.sr.abbostland-south",
        town: "region.town.tikaranto"
      },
      image_url: "/aeromap-assets/tikabandoned.png",
      trello_card: "https://trello.com/c/JXeu9BT7",
      marker_icon: "hidden_airport",
      runway: "07/25",
      runway_length: 490,
    }),
    createAirport({
      coordinates: [
        56.646397, 
        113.493956
      ],
      icao: "ESID",
      name: "airport.idea",
      elevation: 5.8,
      location: {
        region: "region.r.aesir",
        subregion: "region.sr.abbostland-south"
      },
      image_url: "/aeromap-assets/idea.jpg",
      trello_card: "https://trello.com/c/x3ikaKaX",
      marker_icon: "hidden_airport",
      runway: "18",
      runway_length: 440,
    }),
    createAirport({
      coordinates: [
        59.531334, 
        108.308456
      ],
      icao: "CFFL",
      name: "airport.kerfuffle",
      elevation: 990,
      location: {
        region: "region.r.aesir",
        subregion: "region.sr.abbostland-south"
      },
      image_url: "/aeromap-assets/kerfuffle.jpg",
      trello_card: "https://trello.com/c/uj8zVKoY",
      marker_icon: "hidden_airport",
      runway: "N/A",
      runway_length: 200,
    }),
    createAirport({
      coordinates: [
        57.537067, 
        103.277322
      ],
      icao: "CMJA",
      name: "airport.brunswick",
      elevation: 5.8,
      location: {
        region: "region.r.aesir",
        subregion: "region.sr.abbostland-south"
      },
      image_url: "/aeromap-assets/brunswick.jpg",
      trello_card: "https://trello.com/c/Ak6UerrQ",
      marker_icon: "hidden_airport",
      runway: "N/A",
      runway_length: 250,
    }),
  ],
  crates: [
    {
      coordinates: [7.710332, -10.491943],
      image_url: "/aeromap-assets/webley-island/crateloc1.jpg"
    },
    {
      coordinates: [7.969496, -10.0978093],
      image_url: "/aeromap-assets/webley-island/crateloc2.jpg"
    },
    {
      coordinates: [7.702528, -10.119438],
      image_url: "/aeromap-assets/webley-island/crateloc3.jpg"
    },
    {
      group: "clarence",
      resolve: 5,
      crates: [
        {
          coordinates: [0.186905, 10.374653],
          image_url: "/crates/clarence1.avif",
        },
        {
          coordinates: [-1.70224, 8.265832],
          image_url: "/crates/clarence2.avif",
        },
        {
          coordinates: [3.395792, 9.230698],
          image_url: "/crates/clarence3.avif",
        },
        {
          coordinates: [0.101882, 10.351581],
          image_url: "/crates/clarence4.avif",
        },
        {
          coordinates: [-1.413167, 9.021163],
          image_url: "/crates/clarence5.avif",
        },
        {
          coordinates: [-1.221517, 8.498577],
          image_url: "/crates/clarence6.avif",
        },
        {
          coordinates: [-1.221517, 8.498577],
          image_url: "/crates/clarence6.avif",
        },
        {
          coordinates: [-1.713743, 8.248269],
          image_url: "/crates/clarence7.avif",
        },
        {
          coordinates: [0.613525, 6.947565],
          image_url: "/crates/clarence8.avif",
        },
        {
          coordinates: [0.292622, 5.826908],
          image_url: "/crates/clarence9.avif",
        },
        {
          coordinates: [4.477674, 9.483551],
          image_url: "/crates/clarence10.avif",
        }
      ]
    },
    {
      group: "aesir",
      resolve: 3,
      link: "/crates/",
      crates: [
        {
          coordinates: [48.704641, 112.547055],
          image_url: "aesir1.avif",
        },
        {
          coordinates: [73.459971, 87.874302],
          image_url: "aesir2.avif",
        },
        {
          coordinates: [61.737472, 117.052019],
          image_url: "aesir3.avif",
        },
        {
          coordinates: [50.022627, 113.093486],
          image_url: "aesir4.avif"
        },
        {
          coordinates: [50.319246, 112.962922],
          image_url: "aesir5.avif",
        },
        {
          coordinates: [74.661292, 66.265285],
          image_url: "aesir6.avif",
        },
        {
          coordinates: [78.379522, 60.629126],
          image_url: "aesir7.avif",
        },
        {
          coordinates: [76.62863, 82.929422],
          image_url: "aesir8.avif",
        },
        {
          coordinates: [78.668373, 63.370615],
          image_url: "aesir9.avif",
        },
        {
          coordinates: [76.230786, 25.430893],
          image_url: "aesir10.avif",
        },
        {
          coordinates: [51.667743, 113.609628],
          image_url: "aesir11.avif",
        },
        {
          coordinates: [61.613046, 115.171223],
          image_url: "aesir12.avif",
        },
        {
          coordinates: [61.525179, 97.914817],
          image_url: "aesir13.avif",
        },
        {
          coordinates: [70.163564, 82.849487],
          image_url: "aesir14.avif",
          description: "<font color='red'><b>IMPORTANT:</b> This crate cannot be obtained without glitching</font>",
        },
        {
          coordinates: [78.270844, 59.620046],
          image_url: "aesir15.avif",
          alt: "Added by: FlyingTankersYT",
        },
        {
          coordinates: [76.818278, 21.806171],
          image_url: "aesir16.avif",
          alt: "Added by: VastAttorney822",
        },
        {
          coordinates: [51.94048, 114.58492],
          image_url: "aesir17.avif",
        }
      ]
    },
    {
      group: "enoksen",
      resolve: 3,
      link: "/crates/enoksen/",
      crates: [
        {
          coordinates: [74.217329, -2.419337],
          image_url: "1.avif"
        },
        {
          coordinates: [73.702831, 5.715526],
          image_url: "2.avif",
        },
        {
          coordinates: [74.406628, -0.05807],
          image_url: "3.avif",
        },
        {
          coordinates: [74.758153, -9.509069],
          image_url: "4.avif",
        },
        {
          coordinates: [74.712382, -10.685005],
          image_url: "5.avif"
        }
      ],
    }
  ]
})

export default Oconia;