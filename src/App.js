import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./componets/Navbar";
import ElementList from "./componets/elementList";
import Form from "./componets/Form";

function App() {

  const [element, setElement] = useState([]);

  useEffect(() => {
    const getElements = () => {
      fetch("http://localhost:5000/api/stars")
      .then(res => res.json())
      .then(res => setElement(res))
    }
    getElements();
  }, []);
  
  // const checks = Form.data;

  // console.log(checks.rank);

  return (
    <Fragment>
      <Navbar brand="Wayru Challenge" />
      <br/>
      <div className="container">
        <div className="column">
        <div className="col-5">
          <h2 stlye={{
              textAlign: "center",
            }}
            >
              Elements Form
            </h2>
            <br/>
            <Form />
          </div>
          <br/>
          <br/>
          <div className="col-7">
            <h2 stlye={{
              textAlign: "center",
            }}
            >
              Elements List
            </h2>
            <ElementList elements={element}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
