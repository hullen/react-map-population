import React from 'react';

export default function Spin({ spinning = false, children }) {
  if (!spinning) return children;

  return <>Loading</>;
}
