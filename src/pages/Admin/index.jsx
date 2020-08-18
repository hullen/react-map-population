import React, { useMemo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, Sider, Nav } from 'components/Layout';
import { Register, List } from './pages';

export default function Admin() {
  const { path, url } = useRouteMatch();

  const adminMenu = useMemo(
    () => [
      { to: url, name: 'List' },
      { to: `${url}/register`, name: 'Register' },
    ],
    [url]
  );

  return (
    <Container>
      <Sider>
        <Nav items={adminMenu} />
      </Sider>
      <Switch>
        <Route exact path={path}>
          <List />
        </Route>
        <Route path={`${path}/register`}>
          <Register />
        </Route>
      </Switch>
    </Container>
  );
}
