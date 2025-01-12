import React, { useEffect } from "react";
import * as L from 'leaflet';
import { crateMarker} from "./MapIcons";
import AirportMarker from "./AirportMarker";
import { AllRegions } from "./MapData";
import lightGallery from 'lightgallery';
import type { LightGallery } from "lightgallery/lightgallery";
import { useTranslation } from "../../i18n/utils";
import type { ui } from "../../i18n/ui";

const AeroMapConfig = {
  crs: L.CRS.EPSG3857,
  minZoom: 1,
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
    const t = useTranslation(lang);

    const map = L.map('map', {
      crs: AeroMapConfig.crs,
      minZoom: AeroMapConfig.minZoom,
      zoomSnap: 0,
      zoomDelta: 0.25,
      layers: [
        new L.TileLayer("/aeromap-assets/full_map_tiles/{z}/{x}/{y}.jpg", {
          maxNativeZoom: 7, 
          maxZoom: 11, 
          minZoom: 1, 
          noWrap: true,
          bounds: [[85.020879, -179.67041], [-84.92382, 178.066406]],
          attribution: "2025. Assets by Aeronautica Developers",
        }),
        new L.TileLayer("/aeromap-assets/clarence_island_tiles/{z}/{x}/{y}.jpg", {
          maxNativeZoom: 11, 
          maxZoom: 15, 
          minZoom: 8, 
          noWrap: true, 
          bounds: [[5.257627, 5.415454], [-2.036203, 10.83252]],
        }),
        new L.TileLayer("/aeromap-assets/webley_island_tiles/{z}/{x}/{y}.png", {
          maxNativeZoom: 11, 
          maxZoom: 15, 
          minZoom: 8, 
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
      ]
    }).setView([0, 0], 2);
    
    var modal = document.getElementById("modal");
    var modalContent = document.getElementById("modal-content");
    
    if (modal) {
      L.DomEvent.disableClickPropagation(modal);
    }

    var gallery: LightGallery;
    
    function openModal(content: string) {
      if (modalContent != null && modal != null) {
        if (gallery) {
          gallery.destroy();
        }
        modalContent.innerHTML = content;
        modal.classList.add("open");
        loadTrelloEmbed();

        gallery = lightGallery(document.getElementById("lightgallery") as HTMLElement, {
          speed: 0,
        });
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

    for (const region of AllRegions) {
      if (region.airports && region.airports.length > 0) {
        for (const airport of region.airports) {
          AirportMarker({
            airport,
            openModal,
            closeModal,
            map,
            t,
          });
        }
      }

      if (region.crates && region.crates.length > 0) {
        for (const crate of region.crates) {
          const marker = L.marker(crate.coordinates as L.LatLngExpression, {
            icon: crateMarker,
          }).bindPopup(`<img width="400px" src=${crate.image_url} alt=${crate.alt}>${crate.alt ? crate.alt : ""}</img>`).addTo(crateMarkers);
        }
      }
    }
    
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