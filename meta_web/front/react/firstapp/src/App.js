import Header from './Header'
import Home from './Home';
import Notes from './Notes';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/notes" element={<Notes />}/>
      </Routes>
    </div>
  );
}

export default App;
