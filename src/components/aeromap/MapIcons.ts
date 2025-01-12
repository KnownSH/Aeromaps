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

export const hiddenAirportMarker = L.icon({
  iconUrl: "/aeromap-assets/hidden-marker.png",
  iconSize: [20, 29],
  iconAnchor: [20/2, 29],
  popupAnchor: [0, -29],
});