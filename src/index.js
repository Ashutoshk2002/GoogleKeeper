import React from "react";
import ReactDom from "react-dom";
import App from './App';
// import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";


ReactDom.render(
  <div>

    <App/>
    <Note />
    <Footer />
  </div>,
  document.getElementById("root")
);
