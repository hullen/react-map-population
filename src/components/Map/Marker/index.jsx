import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export default function Marker({ map, center, draggable = false, onDragEnd }) {
  useEffect(() => {
    if (map) {
      const marker = new mapboxgl.Marker({ draggable })
        .setLngLat(center)
        .addTo(map);

      if (onDragEnd) {
        marker.on('dragend', () => {
          onDragEnd(marker.getLngLat());
        });
      }

      map.flyTo({ center, zoom: 16 });
      return () => {
        marker.remove();
      };
    }
    return () => {};
  }, [center, draggable, map, onDragEnd]);

  return null;
}
