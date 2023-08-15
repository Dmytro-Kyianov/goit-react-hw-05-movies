import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from '../Loader/Loader';
import { Container, Link, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </Nav>
      <Container>
        <Suspense fallback={<Spinner />}>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
