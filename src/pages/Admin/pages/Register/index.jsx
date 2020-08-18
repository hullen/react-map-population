import React, { useState, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Button, Map, Form, Layout } from 'components';
import { createProperty } from 'providers/properties';

const { Marker } = Map;
const { Main } = Layout;

export default function Register() {
  const history = useHistory();
  const [loading, setLoading] = useState();
  const [map, setMap] = useState();

  const { errors, register, handleSubmit, setValue, watch } = useForm({
    mode: 'onChange',
    nativeValidation: true,
  });

  const { latitude, longitude } = watch();

  const geolocalizacao = useMemo(
    () => longitude && latitude && { lng: longitude, lat: latitude },
    [latitude, longitude]
  );

  const onSubmit = useCallback(
    data => {
      setLoading(true);
      createProperty(data)
        .then(() => {
          setLoading(false);
          history.push(`/admin`);
        })
        .catch(e => console.log('e', e))
        .finally(() => setLoading(false));
    },
    [history]
  );

  const handleSetCoords = useCallback(
    lngLat => {
      setValue('latitude', lngLat.lat);
      setValue('longitude', lngLat.lng);
    },
    [setValue]
  );

  const handleClickMap = useCallback(
    e => {
      const { lngLat } = e;
      handleSetCoords(lngLat);
    },
    [handleSetCoords]
  );

  return (
    <>
      <Main>
        <div style={{ width: '30%', marginRight: '5%' }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Register new</h1>
            <label htmlFor="zipcode">
              Zip Code
              <br />
              <input
                id="zipcode"
                name="zipcode"
                type="text"
                className={errors.zipcode && 'error'}
                ref={register({ required: true })}
              />
              {errors.zipcode && (
                <span className="error">This is required</span>
              )}
            </label>

            <label htmlFor="number">
              Number
              <br />
              <input
                id="number"
                name="number"
                type="text"
                className={errors.number && 'error'}
                ref={register({ required: true })}
              />
              {errors.number && <span className="error">This is required</span>}
            </label>

            <label htmlFor="latitude">
              Latitude
              <br />
              <input
                id="latitude"
                name="latitude"
                placeholder="Click on the map"
                title="Click on the map"
                type="text"
                pattern="[0-9]*"
                className={errors.latitude && 'error'}
                ref={register({ required: true })}
                readOnly
              />
              {errors.latitude && (
                <span className="error">
                  This is required, just click on the map
                </span>
              )}
            </label>

            <label htmlFor="longitude">
              Longitude
              <br />
              <input
                id="longitude"
                name="longitude"
                placeholder="Click on the map"
                title="Click on the map"
                type="text"
                pattern="[0-9]*"
                className={errors.longitude && 'error'}
                ref={register({ required: true })}
                readOnly
              />
              {errors.longitude && (
                <span className="error">
                  This is required, just click on the map
                </span>
              )}
            </label>

            <label htmlFor="residents">
              Residents
              <br />
              <input
                id="residents"
                name="residents"
                type="number"
                pattern="[0-9]*"
                className={errors.residents && 'error'}
                ref={register({ required: true })}
              />
              {errors.residents && (
                <span className="error">This is required</span>
              )}
            </label>

            <Button type="primary" htmlType="submit" isLoading={loading}>
              Register
            </Button>
          </Form>
        </div>
        <div style={{ width: '50%', height: '100%' }}>
          <Map onClick={handleClickMap} setMapRef={setMap} />
          {geolocalizacao && (
            <Marker
              center={geolocalizacao}
              map={map}
              draggable
              onDragEnd={handleSetCoords}
            />
          )}
        </div>
      </Main>
    </>
  );
}
