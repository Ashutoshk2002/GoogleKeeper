import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import Footer from "./Footer";
import Note from "./Note";
import card from "./Cards";

ReactDom.render(
  <div>
    <App />
    {/* <Note /> */}


    {/* {card.map((card) => {
      return <Note 
      key={card.id} 
      title={card.title}  
      content={card.content} />;
    })} */}


    <Footer />
  </div>,
  document.getElementById("root")
);
