export function convertGeoJson(data = []) {
  const featurePoints = data.map(d => {
    const { latitude, longitude, ...props } = d;
    return {
      // feature Point
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
      properties: {
        title: `Residents ${d.residents}`,
        ...props,
      },
    };
  });

  return {
    type: 'FeatureCollection',
    features: featurePoints,
  };
}
