import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StyledNav from './styled';

export default function Nav({ items = [], ...props }) {
  const location = useLocation();
  const { pathname } = location;
  const menuMemo = useMemo(() => {
    if (Array.isArray(items) && items.length > 0) {
      const menuItems = items.map(({ to, name }) => (
        <li key={name}>
          <Link to={to} className={pathname === to ? 'active' : ''}>
            {name}
          </Link>
        </li>
      ));
      return <ul>{menuItems}</ul>;
    }
    return null;
  }, [items, pathname]);
  return <StyledNav {...props}>{menuMemo}</StyledNav>;
}
