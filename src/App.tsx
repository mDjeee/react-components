import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './containers/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import ErrorPage from './components/Error-page/Error-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
