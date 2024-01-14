import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes/index';
import { GlobalStyles } from './styles/globalstyles.js';

function App() {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
    </>
    
  )
}
export default App;
