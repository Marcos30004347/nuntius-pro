import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { publicRoutes } from './shared/routes/publicRoutes';
import { authenticatedRoutes } from './shared/routes/authenticatedRoutes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          {authenticatedRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route element={<>404! page not found!</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
