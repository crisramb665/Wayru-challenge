import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./componets/Navbar";
import ElementList from "./componets/elementList";
import Form from "./componets/Form";

function App() {

  const [fetchdata, setFetchdata] = useState({
    number: 1,
    language: "JavaScript"
  }); //Tengo que almacenar un objeto
  const [element, setElement] = useState([]);

  useEffect(() => {
    const getElements = () => {
      fetch("http://localhost:5000/api/stars")
      .then(res => res.json())
      .then(res => setElement(res))
    }
    getElements();
  }, []);

  const updater = (args) => {
    setFetchdata(args);
  }

  const handleData = element.filter((d) => {
    return d.language === fetchdata.language
  });

  const handleQuantity = handleData.filter((d, i) => {
    return i <= fetchdata.number - 1
  });

  const handleStars = handleQuantity.sort((a, b) => 
    b.stars - a.stars
  );

  console.log("Resultado: ", handleData);
  console.log("Resultado del filtro del filtro", handleQuantity);
  console.log("Filtro Final: ", handleStars)

  console.log("Test de fetchdata: ", fetchdata)
  // console.log("Test de API data: ", element[1])

  return (
    <Fragment>
      <Navbar brand="Wayru Challenge" />
      <br/>
      <div className="container">
        <div className="column">
        <div className="col-5">
          <h2 style={{
              textAlign: "center",
            }}
            >
              Elements Form
            </h2>
            <br/>
            <p>
              Please indicate how many elements you want to observe and indicate the language.
            </p>
            <Form updater={updater} />
          </div>
          <br/>
          <br/>
          <div className="col-20">
            <h2 style={{
              textAlign: "center",
            }}
            >
              Elements List
            </h2>
            <ElementList elements={handleStars}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
