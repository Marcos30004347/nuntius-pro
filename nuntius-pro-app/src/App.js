import { GlobalStyles } from './GlobalStyles';
import { NavGlobal } from './design-system/components/Navigation';

import io from 'socket.io-client';

const socket = io('http://localhost:8000');
console.log(socket);

function App() {
  // socket.emit('greeting-from-client', {
  //   greeting: 'Hello Server'
  // })
  return (
    <>
      <GlobalStyles />
      <NavGlobal />
    </>
  );
}

export default App;
