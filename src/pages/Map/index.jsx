import React, { useState, useEffect } from 'react';
import { fetchAllProperties } from 'providers/properties';
import { convertGeoJson } from 'utils/geo';
import { Map as MapComponent, Layout, Button, Spin } from 'components';
import Layers from './Layers';
import { StyledMapContainer } from './styled';

const { Container, Sider } = Layout;

const layerTypes = {
  HEATMAP: 'heatmap',
  MARKER: 'marker',
};

// Layers
export default function Map() {
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState();
  const [data, setData] = useState();
  const [type, setType] = useState(layerTypes.HEATMAP);

  useEffect(() => {
    fetchAllProperties()
      .then(resp => {
        const result = resp.data || [];
        const geoJsonFormated = convertGeoJson(result);
        setData(geoJsonFormated);
      })
      // catch erros
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <>
      <Spin spinning={loading}>
        <Container>
          <Sider>
            <h3>Change View</h3>
            <Button
              active={type === layerTypes.HEATMAP || undefined}
              onClick={() => setType(layerTypes.HEATMAP)}
              style={{ marginBottom: 10 }}>
              Heatmap
            </Button>
            <Button
              active={type === layerTypes.MARKER || undefined}
              onClick={() => setType(layerTypes.MARKER)}>
              Markers
            </Button>
          </Sider>
          <StyledMapContainer>
            {map && <Layers type={type} dataSource={data} map={map} />}
            <MapComponent setMapRef={setMap} />
          </StyledMapContainer>
        </Container>
      </Spin>
    </>
  );
}
