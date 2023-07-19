import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Legales from "./pages/Legales";
import Licences from "./pages/Licences";
import Contact from "./pages/Contact";


const App = () => {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/legales" element={<Legales />} />
          <Route path="/licences" element={<Licences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
