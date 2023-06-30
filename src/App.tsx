import { NavLink, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import SlickPage from './pages/SlickPage';
import DndPage from './pages/DndPage';
import ModalPage from './pages/ModalPage';
import DaypickerPage from './pages/DaypickerPage';
import TimepickerPage from './pages/TimepickerPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 32px;
    }

    nav {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;

      a.active {
        font-weight: 700;
      }
    }
  }
`;

function App() {
  return (
    <Container>
      <div className="navigation">
        <h1>React Libraries</h1>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/slick"
          >
            slick
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/beutiful-dnd"
          >
            beutiful-dnd
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/modal"
          >
            modal
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/timepicker"
          >
            timepicker
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/daypicker"
          >
            daypicker
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route
          path="/slick"
          element={<SlickPage />}
        />
        <Route
          path="/beutiful-dnd"
          element={<DndPage />}
        />
        <Route
          path="/modal"
          element={<ModalPage />}
        />
        <Route
          path="/timepicker"
          element={<TimepickerPage />}
        />
        <Route
          path="/daypicker"
          element={<DaypickerPage />}
        />
      </Routes>
    </Container>
  );
}

export default App;
