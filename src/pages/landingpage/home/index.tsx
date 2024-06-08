import { Outlet } from 'react-router-dom';
import Hero from './hero';
import Menu1 from './menu';
import Offert from './offert';
import Restaurant from './restarurants';

const Home = () => {
  return (
    <>
      <Hero />
			<Outlet />
      <Menu1 />
      <Offert />
      <Restaurant />
    </>
  );
};

export default Home;
