import { createAirport, createRegion } from "../util/Factory";

const Eisenyarsk = createRegion({
  id: "region.r.eisenyarsk",
  airports: [
    createAirport({
      coordinates: [
        30.766556,
        -101.667319
      ],
      logo: "/aeromap-logos/Leotvesk.svg",
      marker_icon: "airport",
      image_url: "/aeromap-assets/leotvesk.png",
      trello_card: "https://trello.com/c/OLTF06my",
      runway_length: 3552,
      runway: "7C/25C,7L/25L,7R/25R",
      elevation: 5,
      location: {
          region: "region.r.eisenyarsk",
          subregion: "region.sr.tselinoyarsk",
          town: "region.town.leovetsk"
      },
      name: "airport.leovetsk",
      icao: "ULIA"
    }),
    createAirport({
      coordinates: [
        34.263188,
        -103.01563
      ],
      marker_icon: "hidden_airport",
      image_url: "/aeromap-assets/varyag.png",
      trello_card: "https://trello.com/c/dE4jOfKI",
      elevation: 19,
      runway_length: 305,
      location: {
        region: "region.r.eisenyarsk",
        subregion: "region.sr.tselinoyarsk",
        town: "region.town.leovetsk"
      },
      name: "airport.varyag",
      icao: "ADMS"
    }),
    createAirport({
      coordinates: [
        56.153582,
        -61.145817
      ],
      marker_icon: "airport",
      image_url: "/aeromap-assets/eisenhardt.png",
      trello_card: "https://trello.com/c/MI3THmEn",
      runway_length: 2800,
      runway: "05/23",
      elevation: 9,
      location: {
        region: "region.r.eisenyarsk",
        subregion: "region.sr.eisenhardt"
      },
      name: "airport.eisenhardt",
      icao: "CNAB"
    })
  ]
});

export default Eisenyarsk;