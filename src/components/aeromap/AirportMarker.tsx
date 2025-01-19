import React from "react";
import * as L from 'leaflet';
import type { AirportData, LocationData, RegionData } from "./types/MapTypes";
import { airportMarker, crateMarker, hiddenAirportMarker, smallAirportMarker } from "./MapIcons";
import type { defaultLang, ui } from "@/i18n/ui"

type LanguageToken = keyof typeof ui[typeof defaultLang];

export interface AirportMarkerProps {
  airportMarkers: L.FeatureGroup,
  airport: AirportData,
  openModal: (content: string) => void,
  closeModal: () => void,
  map: L.Map,
  t: (key: keyof typeof ui[typeof defaultLang]) => string,
}

const basedOnLabel = (basedOn: string, basedOnUrl: string, translation: string) => {
  const label = `
    <tr>
      <td class="infobox-label">${translation}</td>
      <td class="infobox-data"><a href=${basedOnUrl}>${basedOn}</td>
    </tr>
  `;
  return label;
}

const logoLabel = (logo: string, name: string, t: AirportMarkerProps['t'], unofficial?: boolean) => {
  const label = `
    <a href=${logo} class="logo-container">
      <img class="infobox-logo" src=${logo} alt="${altTextGenerator(name, t("infobox.alt-text-1"))}">
      ${unofficial == true ? `
        <span class="icon-info" title=" ${t("infobox.info")}">${t("infobox.info_hover")}</span>
      ` : ""}
    </a>
  `;
  return label;
};

const formatCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatLocation = (locationData: LocationData, t: AirportMarkerProps['t']) => {
  const { region, subregion, town } = locationData;
  let formattedString = "";

  if (town) {
    formattedString += t(town as LanguageToken) + ", ";
  }
  if (subregion) {
    formattedString += t(subregion as LanguageToken) + ", ";
  }

  formattedString += t(region as LanguageToken);
  return formattedString;
};

const altTextGenerator = (name: string, altText: string) => {
  const placeholderIndex = altText.indexOf("{}");

  if (placeholderIndex !== -1) {
    return altText.slice(0, placeholderIndex ) + name + altText.slice(placeholderIndex  + 2);
  } else {
    return `${altText} ${name}`;
  }
};

const AirportMarker: React.FC<AirportMarkerProps> = ({ airportMarkers, airport, openModal, closeModal, map, t }) => {
  const { marker_icon, coordinates, name, icao, on_click, trello_card, image_url, elevation, runway, runway_length, location } = airport;

  const createInfoBox = (localizedName: string) => {
    const content = `
      <div class="infobox">
        <h2 class="infobox-title">${localizedName}</h2>
        <section id="gallery">
          ${airport.logo ? logoLabel(airport.logo, localizedName, t, airport.unofficial_logo) : ""}
          <a href=${image_url}>
            <img class="infobox-image" src="${image_url}" alt="${altTextGenerator(localizedName, t("infobox.alt-text-0"))}">
          </a>
        </section>
        <table class="infobox-table">
          <tbody>
            <tr>
              <th class="infobox-header" colspan="2">${t("infobox.information")}</th>
            </tr>
            <tr>
              <td class="infobox-label">${t("infobox.icao")}</td>
              <td class="infobox-data">${icao}</td>
            </tr>
            <tr>
              <td class="infobox-label">${t("infobox.location")}</td>
              <td class="infobox-data">${formatLocation(location, t)}</td>
            </tr>
            <tr>
              <td class="infobox-label">${t("infobox.elevation")}</td>
              <td class="infobox-data">${formatCommas(Number((elevation * 3.281).toFixed(0)))} ft / ${elevation} m</td>
            </tr>
            ${airport.based_on ? basedOnLabel(airport.based_on, airport.based_on_url as string, t("infobox.based")) : ""}
            <tr>
              <th class="infobox-header" colspan="2">${t("infobox.runway_info")}</th>
            </tr>
            <tr>
              <td class="infobox-label">${t("infobox.runway_num")}</td>
              <td class="infobox-data">${runway}</td>
            </tr>
            <tr>
              <td class="infobox-label">${t("infobox.length")}</td>
              <td class="infobox-data">${formatCommas(Number((runway_length * 3.281).toFixed(0)))} ft / ${formatCommas(runway_length)} m</td>
            </tr>
          </tbody>
        </table>
        <br>
        <details>
          <summary>${t("infobox.trello")}</summary>
          <blockquote class="trello-card">
            <a href="${trello_card}">${t("infobox.trello")}</a>
          </blockquote>
        </details>
      </div>
    `;

    return content;
  };

  const localizedName = t(name as LanguageToken);

  const marker = L.marker(coordinates as L.LatLngExpression, {
    icon: marker_icon == "airport" ? airportMarker : marker_icon == "crate" ? crateMarker : marker_icon == "hidden_airport" ? hiddenAirportMarker : smallAirportMarker
  }).bindPopup(`${localizedName} <b>(${icao})</b>`).addTo(airportMarkers);

  marker.on('click', (e) => {
    if (on_click?.zoom_in) {
     //map.setView(e.latlng, 10);
    }
    if (on_click?.highlight) {
      const polygon = L.polygon(on_click.highlight as L.LatLngExpression[]).addTo(map);
      marker.on('popupclose', () => {
        polygon.removeFrom(map);
      });
    }
    openModal(createInfoBox(localizedName));
  });

  marker.on('popupclose', closeModal);

  return null;
}

export default AirportMarker;