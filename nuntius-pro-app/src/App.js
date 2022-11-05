import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { authenticatedRoutes } from './shared/routes/authenticatedRoutes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
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
