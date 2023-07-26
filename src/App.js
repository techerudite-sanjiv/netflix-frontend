
import './App.css';
import HomePage from './screens/Home';
import { browsePattern, indexPattern, loginPattern } from './routes';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Login from './screens/signin';



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
        <Route exact path={browsePattern} element={<Login/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
