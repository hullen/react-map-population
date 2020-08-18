import mapboxgl from 'mapbox-gl';
import U from 'mapbox-gl-utils';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useCallback, useEffect, useRef } from 'react';
import Marker from './Marker';

const styles = {
  height: '100%',
};

mapboxgl.accessToken =
  'pk.eyJ1IjoiaHVsbGVuIiwiYSI6ImNrZHg4M2tkeTE4MGkycmtqa2RybWxnNGEifQ.gRckSr-z_wMCgsbcg2EJ_A';

const Map = ({ onClick, setMapRef }) => {
  const mapContainer = useRef(null);

  const handleClick = useCallback(
    e => {
      if (onClick) {
        onClick(e);
      }
    },
    [onClick]
  );

  useEffect(() => {
    const mapboxMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/hullen/ckdx86csk38kp19oa1ydn30hd/draft',
      center: [0, 0],
      zoom: 5,
    });

    mapboxMap.addControl(new mapboxgl.NavigationControl());

    mapboxMap.fitBounds([
      -48.55228833138952,
      -27.543060933168843,
      -48.55228833138952,
      -27.633060933168843,
    ]);
    U.init(mapboxMap, mapboxgl);

    mapboxMap.on('load', () => {
      mapboxMap.resize();
      setMapRef && setMapRef(mapboxMap);
    });

    mapboxMap.on('click', handleClick);

    return () => {
      mapboxMap.off('click', handleClick);
      mapboxMap.remove();
    };
  }, [handleClick, setMapRef]);

  return (
    <div
      ref={el => {
        mapContainer.current = el;
      }}
      style={styles}
    />
  );
};

Map.Marker = Marker;

export default Map;
