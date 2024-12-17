import './App.css';
import About from './components/About';
import Home from './components/Home';
import Recipe from './components/Recipe';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Routes>
        <Route exact path='/'element={<Home />}/>
        <Route exact path='/About'element={<About />}/>
        <Route exact path='/Recipe'element={<Recipe />}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
