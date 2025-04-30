import * as L from 'leaflet';

export const crateMarker = L.icon({
  iconUrl: "/aeromap-assets/crate-marker.png",
  iconSize: [26/1.5, 38/1.5],
  iconAnchor: [(26/2)/1.5, 38/1.5],
  popupAnchor: [0, -38/1.5],
});
    
export const airportMarker = L.icon({
  iconUrl: "/aeromap-assets/airport-marker.png",
  iconSize: [26, 38],
  iconAnchor: [26/2, 38],
  popupAnchor: [0, -38],
});

export const smallAirportMarker = L.icon({
  iconUrl: "/aeromap-assets/small-airport-marker.png",
  iconSize: [23, 34],
  iconAnchor: [23/2, 34],
  popupAnchor: [0, -34],
});

export const airbaseMarker = L.icon({
  iconUrl: "/aeromap-assets/airbase-marker.png",
  iconSize: [23, 34],
  iconAnchor: [23/2, 34],
  popupAnchor: [0, -34],
});

export const hiddenAirportMarker = L.icon({
  iconUrl: "/aeromap-assets/hidden-marker.png",
  iconSize: [20, 29],
  iconAnchor: [20/2, 29],
  popupAnchor: [0, -29],
});

export const majorAirportMarker = L.icon({
  iconUrl: "/aeromap-assets/major-airport-marker.png",
  iconSize: [30, 38],
  iconAnchor: [15, 38],
  popupAnchor: [0, -38],
});

export const nodataAirportMarker = L.icon({
  iconUrl: "/aeromap-assets/nodata-marker.png",
  iconSize: [23, 34],
  iconAnchor: [11.5, 34],
  popupAnchor: [0, -34],
});

export const markerMap = {
  airport: airportMarker,
  major_airport: majorAirportMarker,
  small_airport: smallAirportMarker,
  airbase: airbaseMarker,
  crate: crateMarker,
  hidden_airport: hiddenAirportMarker,
  nodata: nodataAirportMarker
}