import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Application from "./components/pages/Application";
import Contacts from "./components/pages/Contacts";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Application />} />
      <Route path="/contact" element={<Contacts/>} />
    </Routes>
  );
};

export default App;
