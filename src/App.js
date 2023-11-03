import './App.css';
import Login from './screens/signin';
import HomePage from './screens/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieDashboard from './screens/Dashboard';
import { browsePattern, indexPattern, loginPattern } from './routes';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path={indexPattern} element={<HomePage/>} />
      </Routes>
      <Routes>
        <Route exact path={loginPattern} element={<Login/>} />
      </Routes>
      <Routes>
        <Route exact path={browsePattern} element={<MovieDashboard/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
