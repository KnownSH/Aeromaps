import type { defaultLang, ui } from "../../../i18n/ui";
import type { AirportData, RegionData } from "../types/MapTypes";

type LanguageToken = keyof typeof ui[typeof defaultLang];

export const createAirport = (data: Omit<AirportData, 'name' | 'location'> & {
  name: LanguageToken,
  location: {
    region: LanguageToken,
    subregion?: LanguageToken,
    town?: LanguageToken,
  }
}): AirportData => {
  const { name, location, ...rest } = data;
  return {
    ...rest,
    name: name,
    location: {
      region: location.region,
      subregion: location.subregion,
      town: location.town,
    }
  } 
}

export const createRegion = (data: Omit<RegionData, 'id'> & { id: LanguageToken }): Readonly<RegionData> => {
  const { id, ...rest } = data;
  return {
    ...rest,
    id: id,
  }
}

