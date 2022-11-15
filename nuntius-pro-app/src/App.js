import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import { publicRoutes } from './shared/routes/publicRoutes';
import { authenticatedRoutes } from './shared/routes/authenticatedRoutes';
import { storageService } from './shared/application/services/storageService';
import { Authenticated } from './shared/ui/components/Authenticated/Authenticated';
import Context from './domains/messages/application/contexts/context';
import { useState } from 'react';

storageService.init();
const App = () => {
  const [socketContext, setSocketContext] = useState(undefined);

  return (
    <>
      <Context.Provider value={[socketContext, setSocketContext]}>
        <GlobalStyles />
        <ToastContainer />
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
      </Context.Provider>
    </>
  );
};

export default App;
