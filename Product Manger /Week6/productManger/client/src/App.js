
import './App.css';
//import Create from './components/Create';
//import DisplayAll from './components/DisplayAll';
import Single from './components/Single';
import Main from './views/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product/:id" element={<Single/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
