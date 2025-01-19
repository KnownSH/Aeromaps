import React, { useEffect } from "react";
import * as L from 'leaflet';
import { crateMarker} from "./MapIcons";
import AirportMarker from "./AirportMarker";
import { AllRegions } from "./MapData";
import { useTranslation } from "../../i18n/utils";
import type { ui } from "../../i18n/ui";
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import pswpModule from 'photoswipe';
import '@luomus/leaflet-smooth-wheel-zoom';
import 'photoswipe/style.css';

const AeroMapConfig = {
  crs: L.CRS.EPSG3857,
  minZoom: 2.5,
  initialView: {
    latLng: [0, 0] as L.LatLngExpression,
    zoom: 1,
  },
  bounds: [[0, 0], [10000, 10000]] as L.LatLngBoundsExpression,
};

export interface Params {
  lang: keyof typeof ui,
}

const loadTrelloEmbed = () => {
  if (!document.querySelector('script[src="https://p.trellocdn.com/embed.min.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://p.trellocdn.com/embed.min.js';
    script.async = true;
    document.body.appendChild(script);
  }

  const checkTrelloCards = () => {
    if (window.TrelloCards) {
      window.TrelloCards.load();
    } else {
      setTimeout(checkTrelloCards, 250);
    }
  };
  checkTrelloCards();
};

const AeroMap = ({ lang }: Params) => {
  useEffect(() => {
    const t: any = useTranslation(lang);

    const map = L.map('map', {
      scrollWheelZoom: false,
      smoothWheelZoom: true,
      smoothSensitivity: 1,
      zoomSnap: 0.1,
      zoomDelta: 0,
      attributionControl: false,
      crs: AeroMapConfig.crs,
      minZoom: AeroMapConfig.minZoom,
      layers: [
        new L.TileLayer("/aeromap-assets/tiles/{z}/{x}/{y}.avif", {
          maxNativeZoom: 7, 
          maxZoom: 11, 
          minNativeZoom: 1,
          minZoom: 1,
          tileSize: 1024,
          noWrap: true,
          bounds: [[85.020879, -179.67041], [-84.92382, 178.066406]],
          attribution: "2025. Assets by Aeronautica Developers",
          zoomOffset: -2
        }),
        new L.TileLayer("/aeromap-assets/clarence_island_tiles/{z}/{x}/{y}.jpg", {
          maxNativeZoom: 11, 
          maxZoom: 15, 
          minNativeZoom: 8,
          minZoom: 4, 
          noWrap: true, 
          bounds: [[5.257627, 5.415454], [-2.036203, 10.83252]],
        }),
        new L.TileLayer("/aeromap-assets/webley_island_tiles/{z}/{x}/{y}.png", {
          maxNativeZoom: 11, 
          maxZoom: 15, 
          minNativeZoom: 8,
          minZoom: 4, 
          noWrap: true, 
          bounds: [[8.008968, -11.164856], [7.373445, -9.901428]],
        }),
        new L.TileLayer("/aeromap-assets/oconee_region_tiles/{z}/{x}/{y}.png", {
          maxNativeZoom: 11,
          maxZoom: 15,
          minNativeZoom: 7,
          minZoom: 4,
          noWrap: true,
          bounds: [[1.577601, -1.850357], [-2.478022, 2.03165]],
        }),
        new L.TileLayer("/aeromap-assets/new_englandtown_tiles/{z}/{x}/{y}.png", {
          maxNativeZoom: 12,
          maxZoom: 15,
          minNativeZoom: 7,
          minZoom: 4,
          noWrap: true,
          bounds: [[18.082101, 0.385158], [15.386117, 3.912884]],
        }),
        new L.TileLayer("/aeromap-assets/eagle_island_tiles/{z}/{x}/{y}.png", {
          maxNativeZoom: 12,
          maxZoom: 15,
          minNativeZoom: 7,
          minZoom: 4,
          noWrap: true,
          bounds: [[-28.749232, 1.514607], [-30.721923, 3.061636]],
        }),
        new L.TileLayer("/aeromap-assets/kitesboros_tiles/{z}/{x}/{y}.jpg", {
          maxNativeZoom: 12,
          maxZoom: 15,
          minNativeZoom: 7,
          minZoom: 4,
          noWrap: true,
          bounds: [[12.411103, -26.161945], [2.453799, -21.541447]],
        }),
      ]
    }).setView([0, 0], 3);

    const imageTemp = new L.ImageOverlay("/Udyanapuraplaceholder.png", [[-57.232541, -95.954311], [-39.665297, -70.740984]]).addTo(map);
    
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    
    if (modal) {
      L.DomEvent.disableClickPropagation(modal);
    }

    let lightbox: PhotoSwipeLightbox;
    
    function openModal(content: string) {
      if (modalContent != null && modal != null) {
        if (lightbox) {
          lightbox.destroy();
        }

        modalContent.innerHTML = content;
        modal.classList.add("open");
        loadTrelloEmbed();

        lightbox = new PhotoSwipeLightbox({
          gallery: "#gallery",
          children: 'a',
          showHideAnimationType: 'zoom',
          pswpModule,
        });
        lightbox.init();
      }
    }
    
    function closeModal() {
      if (modal == null) { return null };
      modal.classList.remove("open");
    }
    
    var clickpopup = L.popup()
    
    function onMapClick(e) { 
      clickpopup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
    }

    const crateMarkers = new L.FeatureGroup();
    const airportMarkers = new L.FeatureGroup();

    for (const region of AllRegions) {
      if (region.airports && region.airports.length > 0) {
        for (const airport of region.airports) {
          AirportMarker({
            airportMarkers,
            airport,
            openModal,
            closeModal,
            map,
            t
          });
        }
      }

      if (region.crates && region.crates.length > 0) {
        for (const crate of region.crates) {
          const marker = L.marker(crate.coordinates as L.LatLngExpression, {
            icon: crateMarker,
          }).bindPopup(`<div id="gallery"><img width="400px" src=${crate.image_url} alt=${crate.alt}>${crate.alt ? crate.alt : ""}</img></div>`).addTo(crateMarkers);
        }
      }
    }

    map.addLayer(airportMarkers);
    
    map.on('zoomend', (e) => {
      if (map.getZoom() < 6) {
        map.removeLayer(crateMarkers);
      } else {
        map.addLayer(crateMarkers);
      }
    });
    map.on('click', onMapClick);
  })
  
  return (
    <>
      <div id="map">
        <div id="modal">
          <div id="modal-content"></div>
        </div>
      </div>
    </>
  )
};

export default AeroMap;