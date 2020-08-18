import React from 'react';
import { Layout } from '../components';

const menuOptions = [
  { to: '/', name: 'Home' },
  { to: '/map', name: 'Map' },
  { to: '/admin', name: 'Admin' },
];

export default function Header() {
  return (
    <Layout.Header>
      <Layout.Nav items={menuOptions} />
    </Layout.Header>
  );
}
