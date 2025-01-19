import React, { useState } from 'react';
import type {DeckProps} from '@deck.gl/core';
import { MapboxOverlay } from '@deck.gl/mapbox';
import { TileLayer, type TileLayerProps } from '@deck.gl/geo-layers';
import { BitmapLayer } from '@deck.gl/layers';
import { PMTLayer } from '@maticoapp/deck.gl-pmtiles';
import { Map, Layer, useControl, Source, Marker } from '@vis.gl/react-maplibre';

const INITIAL_VIEW = {
  longitude: 0,
  latitude: 0,
  zoom: 0,
};

function DeckGLOverlay(props: DeckProps) {
  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));
  overlay.setProps(props);
  return null;
}

function createAeroLayer(props: TileLayerProps) {
  return new TileLayer({
    ...props,
    renderSubLayers: (subProps) => {
      const { boundingBox } = subProps.tile;

      return new BitmapLayer(subProps, {
        data: null as any,
        image: subProps.data,
        bounds: [boundingBox[0][0], boundingBox[0][1], boundingBox[1][0], boundingBox[1][1]]
      });
    },
    pickable: true,
  });
}

const layers = [
  new PMTLayer({
    id: 'basemap',
    data: "https://r2.knownsh.cc/basemap.pmtiles",
    maxZoom: 10,
    minZoom: 7,
    tileSize: 1024,
  }),
  /*
  createAeroLayer({
    id: 'Basemap',
    data: "/aeromap-assets/full_map_tiles/{z}/{x}/{y}.jpg",
    maxZoom: 7,
    minZoom: 0,
    tileSize: 256,
    onClick(pickingInfo, event) {
      console.log(pickingInfo.coordinate)
    },
  }),*/
  createAeroLayer({
    id: 'Enoksen',
    data: "/aeromap-assets/enoksen_tiles/{z}/{x}/{y}.avif",
    maxZoom: 10,
    minZoom: 7,
    tileSize: 1024,
  })
];

const AeroMap = () => {
  return <Map 
    initialView={INITIAL_VIEW}
    style={{height: "80%"}}
    //renderWorldCopies={false}
    attributionControl={false}
  >
    <DeckGLOverlay layers={layers}/>
  </Map>;
};

export default AeroMap;