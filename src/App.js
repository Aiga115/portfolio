import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Index';
import AboutPage from "./pages/about-me/Index"
import ExperiencePage from "./pages/experience/Index"
import ApplicationPage from "./pages/applications/Index"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="my-experience" element={<ExperiencePage />} />
          <Route path="my-applications" element={<ApplicationPage />} />
        </Route>
    </Routes>
  );
}

export default App;
