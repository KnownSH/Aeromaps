import * as L from 'leaflet';

export type MarkerNames =
  | 'airport'
  | 'major_airport'
  | 'small_airport'
  | 'airbase'
  | 'crate'
  | 'hidden_airport'
  | 'helipad';

export const markerMapHumanReadable: Record<MarkerNames, string> = {
  airport: "Airport",
  major_airport: "Major Airport (Star Icon)",
  small_airport: "Small Airport",
  airbase: "Airbase",
  crate: "Crate",
  hidden_airport: "Hidden Airport",
  helipad: "Helipad",
};

export interface MarkerInteractions {
  on_click?: {
    zoom_in?: boolean,
    highlight?: number[][] | L.LatLngExpression[],
  }
}

export interface Runway {
  number: string,
  length: number,
}

export interface LocationData {
  town?: string,
  subregion?: string,
  region: string,
}

export interface AirportData extends MarkerInteractions {
  logo?: string,
  unofficial_logo?: boolean,
  icao: string,
  name: string,
  elevation: number,
  runway?: string,
  nodata?: boolean,
  runway_length: number,
  location: LocationData,
  coordinates: number[] | L.LatLngExpression,
  marker_icon: MarkerNames | string,
  trello_card: string,
  image_url: string,
  based_on?: string,
  based_on_url?: string,
}

export interface CrateData extends MarkerInteractions {
  coordinates: number[] | L.LatLngExpression,
  image_url?: string,
  alt?: string,
  description?: string,
  resolve?: number,
}

export interface CrateDataGroup {
  group: string,
  resolve?: number,
  link?: string,
  crates: CrateData[];
}

export interface RegionData {
  id: string,
  airports?: AirportData[],
  crates?: (CrateData | CrateDataGroup)[],
}