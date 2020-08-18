import { useMemo, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function getPopupOffsets(markerHeight = 30, markerRadius = 0) {
  const linearOffset = 25;
  return {
    top: [0, 0],
    'top-left': [0, 0],
    'top-right': [0, 0],
    bottom: [0, -markerHeight],
    'bottom-left': [
      linearOffset,
      (markerHeight - markerRadius + linearOffset) * -1,
    ],
    'bottom-right': [
      -linearOffset,
      (markerHeight - markerRadius + linearOffset) * -1,
    ],
    left: [markerRadius, (markerHeight - markerRadius) * -1],
    right: [-markerRadius, (markerHeight - markerRadius) * -1],
  };
}

const defaultOptions = { height: 30, radius: 0 };
export default function usePopover(
  uniqueId,
  placeIds = [],
  map,
  opts = defaultOptions
) {
  const options = useMemo(() => ({ ...defaultOptions, ...opts }), [opts]);

  useEffect(() => {
    let popover;
    let removeClickListeners;
    let removePointerStyles;

    function addPopup(e) {
      const feat = e.features[0] || {};
      const props = { offset: getPopupOffsets(options.height, options.radius) };
      popover = new mapboxgl.Popup(props);
      const {
        geometry: { coordinates },
        properties: { residents, number, zipcode },
      } = feat;
      if (popover) {
        popover
          .setLngLat(coordinates)
          .setHTML(
            `
            <strong>PROPERTY INFO</strong><br />
            <strong>Residents:</strong> ${residents}<br />
            <strong>Number:</strong> ${number}<br />
            <strong>ZipCode:</strong> ${zipcode}<br />
            <br />
            <strong>Longitude:</strong> ${coordinates[0]}<br />
            <strong>Latitude:</strong> ${coordinates[1]}
            `
          )
          .addTo(map);
      }
    }

    if (uniqueId && Array.isArray(placeIds) && placeIds.length > 0 && map.U) {
      removeClickListeners = map.U.clickLayer(placeIds, addPopup);
      removePointerStyles = map.U.hoverPointer(placeIds);
    }

    return () => {
      if (uniqueId && Array.isArray(placeIds) && placeIds.length > 0) {
        placeIds.forEach((_, idx) => {
          removeClickListeners[idx]();
          removePointerStyles[idx]();
        });

        if (popover) {
          popover.remove();
          popover = null;
        }
      }
    };
  }, [map, options, placeIds, uniqueId]);

  return null;
}
