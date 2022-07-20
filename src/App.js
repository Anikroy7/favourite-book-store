import { Routes, Route } from "react-router-dom";
import './App.css';
import AddBooks from "./features/books/AddBooks";
import EditBooks from "./features/books/EditBooks";
import ShowBooks from "./features/books/ShowBooks";
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/addBooks" element={<AddBooks></AddBooks>}></Route>
        <Route path="/showBooks" element={<ShowBooks></ShowBooks>}></Route>
        <Route path="/editBooks" element={<EditBooks></EditBooks>}></Route>
      </Routes>

    </div>
  );
}

export default App;
