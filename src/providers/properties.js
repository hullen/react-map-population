import api from './api';

export function fetchAllProperties() {
  return api.get(`/properties`);
}

export function createProperty(data) {
  return api.post(`/properties`, data);
}
