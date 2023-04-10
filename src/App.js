import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </>
  );
}

export default App;
