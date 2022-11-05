import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { NavGlobal } from './design-system/components/Navigation';
import { messagesPageRoutes } from './domains/messages/application/routes';
import { authenticatedRoutes } from './shared/routes/authenticatedRoutes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <NavGlobal homeRoute={messagesPageRoutes.HOME} />
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
