import * as L from 'leaflet';

export type MarkerNames =
  | 'airport'
  | 'small_airport'
  | 'crate'
  | 'hidden_airport';

export interface MarkerInteractions {
  on_click?: {
    zoom_in?: boolean,
    highlight?: number[][] | L.LatLngExpression[],
  }
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
}

export interface RegionData {
  id: string,
  airports?: AirportData[],
  crates?: CrateData[],
}