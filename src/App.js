
import './App.css';
import HomePage from './screens/Home';
import { indexPattern } from './routes';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path={indexPattern} element={<HomePage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
