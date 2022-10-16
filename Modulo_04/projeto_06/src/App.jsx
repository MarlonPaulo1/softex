import { BrowserRouter , Routes, Route } from 'react-router-dom'
import BlackFriday from './pages/BlackFriday';

import Login from './pages/Login';

import './styles/global.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/black_friday' element={<BlackFriday />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
