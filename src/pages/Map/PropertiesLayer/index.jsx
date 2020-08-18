import { useEffect } from 'react';
import { usePopover } from '../hooks';

const layerID = 'property_points-source';
const iconImage = 'property-icon';

export default function PropertiesLayer({ dataSource, map }) {
  usePopover('marker', ['property-symbol', 'property-text'], map, {
    height: 15,
  });

  useEffect(() => {
    map.U.addGeoJSON(layerID, undefined, { promoteId: 'id' });

    map.U.addSymbol('property-symbol', layerID, {
      'icon-image': iconImage,
      'icon-ignore-placement': true,
      'icon-offset': [0, -5],
      'icon-size': 0.7,
    });

    map.U.addSymbol('property-text', layerID, {
      'icon-image': iconImage,
      'icon-size': 0.9,
      'icon-offset': [0, -5],
      'text-field': [
        'format',
        ['upcase', ['get', 'title']],
        { 'font-scale': 1 },
        '\n ZipCode: ',
        {},
        ['concat', ['get', 'zipcode']],
        {
          'font-scale': 0.9,
        },
      ],
      'text-font': ['DIN Pro Medium', 'Arial Unicode MS Regular'],
      'text-offset': [0, 1.5],
      'text-anchor': 'top',
      'text-size': 11,
      'text-halo-color': 'hsl(0, 0%, 100%)',
      'text-halo-width': 0.5,
      'text-halo-blur': 0.5,
      'text-color': '#0257ac',
      minzoom: 14,
    });

    return () => {
      map.U.removeSource(layerID);
    };
  }, [map]);

  useEffect(() => {
    if (dataSource) {
      map.U.setData(layerID, dataSource);
    }
  }, [dataSource, map.U]);

  return null;
}
