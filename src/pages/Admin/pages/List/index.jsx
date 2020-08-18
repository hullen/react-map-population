import React, { useState, useEffect } from 'react';
import { Main } from 'components/Layout';
import { fetchAllProperties } from 'providers/properties';
import { Table } from 'components';

export default function List() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllProperties()
      .then(resp => {
        const result = resp.data || [];
        setData(result);
      })
      // catch errors
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <Main>
      <div style={{ width: '60%' }}>
        <p>
          <strong>Total:</strong> {data.length}
        </p>
        <Table type="striped">
          <thead>
            <tr>
              <th scope="col">Zipcode</th>
              <th scope="col">Number</th>
              <th scope="col">Residents</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, zipcode, number, residents }) => (
              <tr key={id}>
                <td>{zipcode}</td>
                <td>{number}</td>
                <td>{residents}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Main>
  );
}
