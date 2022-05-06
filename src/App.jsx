import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddPatient from "./Components/Patient/AddPatient";
import AdminVaccinations from "./Components/AdminVaccinations/AdminVaccinations"

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/add-patient" element={<AddPatient />} />
      </Routes>
      <Routes>
        <Route path="/AdminVaccinations" element={<AdminVaccinations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;