// @ts-nocheck
import * as React from 'react';
import Map, { Source, Layer, NavigationControl, ScaleControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import maplibregl from 'maplibre-gl';
import DrawControl from './DrawControl';

// NRW DOP WMS URL (Satellite)
const WMS_DOP_URL = 'https://www.wms.nrw.de/geobasis/wms_nw_dop';
// NRW DTK WMS URL (Labels/Hybrid)
const WMS_DTK_URL = 'https://www.wms.nrw.de/geobasis/wms_nw_dtk';

interface MapComponentProps {
    showSatellite?: boolean;
    showLabels?: boolean;
}

export default function MapComponent({ showSatellite = true, showLabels = true }: MapComponentProps) {
    return (
        <div className="w-full h-full relative">
            <Map
                mapLib={maplibregl as any}
                initialViewState={{
                    longitude: 7.4653,
                    latitude: 51.5136,
                    zoom: 14
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle={{
                    version: 8,
                    sources: {},
                    layers: [
                        {
                            id: 'background',
                            type: 'background',
                            paint: {
                                'background-color': '#f0f0f0'
                            }
                        }
                    ]
                }}
            >
                {/* Satellite Layer (NRW DOP) */}
                {showSatellite && (
                    <Source
                        id="wms-dop-source"
                        type="raster"
                        tiles={[
                            `${WMS_DOP_URL}?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=nw_dop_rgb`
                        ]}
                        tileSize={256}
                    >
                        <Layer
                            id="wms-dop-layer"
                            type="raster"
                            paint={{}}
                        />
                    </Source>
                )}

                {/* Labels Layer (NRW DTK) */}
                {showLabels && (
                    <Source
                        id="wms-dtk-source"
                        type="raster"
                        tiles={[
                            `${WMS_DTK_URL}?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=nw_dtk_col`
                        ]}
                        tileSize={256}
                    >
                        <Layer
                            id="wms-dtk-layer"
                            type="raster"
                            paint={{ "raster-opacity": 0.6 }}
                        />
                    </Source>
                )}

                <NavigationControl position="top-right" />
                <ScaleControl position="bottom-right" />
                <DrawControl
                    position="top-left"
                    displayControlsDefault={false}
                    controls={{
                        polygon: true,
                        trash: true
                    }}
                />
            </Map>
        </div>
    );
}
