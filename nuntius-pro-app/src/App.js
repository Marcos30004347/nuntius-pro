import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { publicRoutes } from './shared/routes/publicRoutes';
import { authenticatedRoutes } from './shared/routes/authenticatedRoutes';
import { storageService } from './shared/application/services/storageService';
import { Authenticated } from './shared/ui/components/Authenticated/Authenticated';

storageService.init();
const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route exact path="/" element={<Authenticated />}>
            {authenticatedRoutes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Route>
          <Route element={<>404! page not found!</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
