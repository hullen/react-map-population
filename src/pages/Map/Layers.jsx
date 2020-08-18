import React from 'react';
import PropertiesLayer from './PropertiesLayer';
import HeatMapLayer from './HeatMapLayer';

const layersComponent = {
  heatmap: HeatMapLayer,
  marker: PropertiesLayer,
};

// Load Layers Component
export default function Layers({ type, dataSource = [], map }) {
  const Component = layersComponent[type || 'heatmap'];
  return <Component dataSource={dataSource} map={map} />;
}
