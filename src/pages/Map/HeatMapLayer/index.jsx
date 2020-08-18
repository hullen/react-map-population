import { useEffect } from 'react';
import { usePopover } from '../hooks';

const sourceID = 'heat_map-source';

export default function HeatMapLayer({ dataSource, map }) {
  usePopover('heat', ['property-point'], map, {
    height: 15,
  });

  useEffect(() => {
    map.addSource(sourceID, {
      type: 'geojson',
      data: dataSource,
    });

    map.addLayer(
      {
        id: 'property-heat',
        type: 'heatmap',
        source: sourceID,
        maxzoom: 15,
        paint: {
          // increase weight as diameter breast height increases
          'heatmap-weight': {
            property: 'residents',
            type: 'exponential',
            stops: [
              [1, 0],
              [30, 7],
            ],
          },
          // assign color values be applied to points depending on their density
          'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0,
            'rgba(209,229,240,0)',
            0.1,
            '#ffffb2',
            0.3,
            '#feb24c',
            0.5,
            '#fd8d3c',
            0.7,
            '#fc4e2a',
            1,
            '#e31a1c',
          ],
          // increase radius as zoom increases
          'heatmap-radius': {
            stops: [
              [11, 25],
              [15, 50],
            ],
          },
          // decrease opacity to transition into the circle layer
          'heatmap-opacity': {
            default: 1,
            stops: [
              [14, 1],
              [15, 0],
            ],
          },
        },
      },
      'waterway-label'
    );

    map.addLayer(
      {
        id: 'property-point',
        type: 'circle',
        source: sourceID,
        minzoom: 14,
        paint: {
          // Color circle by residents
          'circle-color': [
            'interpolate',
            ['linear'],
            ['get', 'residents'],
            1,
            '#ffffff',
            2,
            '#ffffb2',
            3,
            '#feb24c',
            4,
            '#fc4e2a',
            5,
            '#e31a1c',
            6,
            '#630636',
            7,
            '#350363',
          ],
          'circle-stroke-color': 'white',
          'circle-stroke-width': 0,
          // increase the radius of the circle
          // as the zoom level and residents value increases
          'circle-radius': {
            property: 'residents',
            type: 'exponential',
            stops: [
              [{ zoom: 15, value: 1 }, 5],
              [{ zoom: 15, value: 7 }, 10],
              [{ zoom: 22, value: 1 }, 20],
              [{ zoom: 22, value: 7 }, 50],
            ],
          },
          'circle-opacity': {
            stops: [
              [14, 0],
              [15, 1],
            ],
          },
        },
      },
      'waterway-label'
    );

    return () => {
      map.U.removeSource(sourceID);
      map.U.removeLayer(['property-heat', 'property-point']);
    };
  }, [dataSource, map]);

  return null;
}
