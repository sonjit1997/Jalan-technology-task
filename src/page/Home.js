import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { esprsso, capachino, latte } from "../Data";
import "../page/Home.css";

const Home = () => {
  const [esprssoprice, setEspressoPrice] = useState(349);
  const [capachinoprice, setCapachinoprice] = useState(499);
  const [latteprice, setLattePrice] = useState(799);
  const [bill, setBill] = useState([]);
  const [billAmmount, setBillAmmount] = useState(0);

  const addespressotocart = () => {
    setBill((newdata) => [...newdata, esprsso]);
    setBillAmmount(parseInt(esprssoprice) + billAmmount);
  };

  const addcapachinotocart = () => {
    setBill((newdata) => [...newdata, capachino]);
    setBillAmmount(parseInt(capachinoprice) + billAmmount);
  };
  const addlattetocart = () => {
    setBill((newdata) => [...newdata, latte]);
    setBillAmmount(parseInt(latteprice) + billAmmount);
  };

  const latteMilkAdd = () => {
    setLattePrice(parseInt(latteprice) + 60);
    document.getElementById("milkadd3").innerHTML = "Added";
  };
  const latteCreamAdd = () => {
    setLattePrice(parseInt(latteprice) + 75);
    document.getElementById("creamadd3").innerHTML = "Added";
  };
  const latteLatteAdd = () => {
    setLattePrice(parseInt(latteprice) + 100);
    document.getElementById("lateadd3").innerHTML = "Added";
  };

  const esprssoMilkAdd = () => {
    setEspressoPrice(parseInt(esprssoprice) + 60);
    document.getElementById("milkadd").innerHTML = "Added";
  };
  const esprssoCreamAdd = () => {
    setEspressoPrice(parseInt(esprssoprice) + 75);
    document.getElementById("creamadd").innerHTML = "Added";
  };
  const esprssoLatteAdd = () => {
    setEspressoPrice(parseInt(esprssoprice) + 100);
    document.getElementById("lateadd").innerHTML = "Added";
  };

  const capachinoMilkAdd = () => {
    setCapachinoprice(parseInt(capachinoprice) + 60);
    document.getElementById("milkadd2").innerHTML = "Added";
  };
  const capachinocreamAdd = () => {
    setCapachinoprice(parseInt(capachinoprice) + 75);
    document.getElementById("creamadd2").innerHTML = "Added";
  };
  const capachinoLatteAdd = () => {
    setCapachinoprice(parseInt(capachinoprice) + 100);
    document.getElementById("lateadd2").innerHTML = "Added";
  };

  return (
    <>
      <Navbar cart={bill} setCart={setBill} total={billAmmount} />
      <div className="container d-flex mt-5 mb-4 ">
        <div className="col-md-6 ">
          <img src={latte.image} alt={latte.alt} height="350px" width="400px" />
        </div>

        <div className="col-md-6 p-4 ">
          <h1 className="text-uppe mb-1rcase text-danger">{latte.Name}</h1>
          <h4>
            Price: <i className="fa fa-usd" aria-hidden="true"></i> {latteprice}{" "}
          </h4>
          <h6>
            Milk:<i className="fa fa-usd" aria-hidden="true"></i> {latte.milk}{" "}
            <div
              className="btn rounded-pill btn-success ms-2 "
              onClick={latteMilkAdd}
              id="milkadd3"
            >
              Add
            </div>
          </h6>
          <h6>
            Cream: <i className="fa fa-usd" aria-hidden="true"></i>{" "}
            {latte.cream}{" "}
            <div
              className="btn rounded-pill btn-success ms-2 "
              onClick={latteCreamAdd}
              id="creamadd3"
            >
              Add
            </div>
          </h6>
          <h6>
            Latt: <i className="fa fa-usd" aria-hidden="true"></i> {latte.latte}{" "}
            <div
              className="btn rounded-pill btn-success ms-2 "
              onClick={latteLatteAdd}
              id="lateadd3"
            >
              Add
            </div>
          </h6>

          <div className="button mt-4">
            <div
              className="btn btn-outline-danger ms-2 px-4"
              onClick={addlattetocart}
            >
              <i className="fa fa-hand-peace-o me-1" aria-hidden="true"></i>
              BUY NOW
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex mt-5 mb-4 ">
        <div className="col-md-6 ">
          <img
            src={esprsso.image}
            alt={esprsso.alt}
            height="350px"
            width="400px"
          />
        </div>

        <div className="col-md-6 p-4">
          <h1 className="text-uppercase text-danger mb-1">{esprsso.Name}</h1>
          <h4>
            Price: <i className="fa fa-usd" aria-hidden="true"></i>{" "}
            {esprssoprice}
          </h4>
          <h6>
            Milk:<i className="fa fa-usd" aria-hidden="true"></i> {esprsso.milk}{" "}
            <div
              className="btn rounded-pill btn-success ms-2 "
              onClick={esprssoMilkAdd}
              id="milkadd"
            >
              Add
            </div>
          </h6>
          <h6>
            Cream: <i className="fa fa-usd" aria-hidden="true"></i>{" "}
            {esprsso.cream}{" "}
            <div
              className="btn rounded-pill btn-success ms-2 "
              onClick={esprssoCreamAdd}
              id="creamadd"
            >
              Add
            </div>
          </h6>
          <h6>
            Latt: <i className="fa fa-usd" aria-hidden="true"></i>{" "}
            {esprsso.latte}{" "}
            <div
              className="btn rounded-pill btn-success ms-2 "
              onClick={esprssoLatteAdd}
              id="lateadd"
            >
              Add
            </div>
          </h6>

          <div className="button mt-4">
            <div
              className="btn btn-outline-danger ms-2 px-4"
              onClick={addespressotocart}
              id="buy"
            >
              <i className="fa fa-hand-peace-o me-1" aria-hidden="true"></i>
              BUY NOW
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="container d-flex mt-2 mb-4 ">
        <div className="col-md-6 ">
          <img
            src={capachino.image}
            alt={capachino.alt}
            height="350px"
            width="400px"
          />
        </div>

        <div className="col-md-6 p-4">
          <h1 className="text-uppercase text-danger mb-1">{capachino.Name}</h1>
          <h4>
            Price: <i className="fa fa-usd" aria-hidden="true"></i>{" "}
            {capachinoprice}
          </h4>
          <h6>
            Milk:<i className="fa fa-usd" aria-hidden="true"></i>{" "}
            {capachino.milk}{" "}
            <div
              className="btn rounded-pill btn-success ms-2 "
              onClick={capachinoMilkAdd}
              id="milkadd2"
            >
              Add
            </div>
          </h6>
          <h6>
            Cream: <i className="fa fa-usd" aria-hidden="true"></i>{" "}
            {capachino.cream}{" "}
            <div
              className="btn rounded-pill btn-success ms-2 "
              onClick={capachinocreamAdd}
              id="creamadd2"
            >
              Add
            </div>
          </h6>
          <h6>
            Latt: <i className="fa fa-usd" aria-hidden="true"></i>{" "}
            {capachino.latte}{" "}
            <div
              className="btn rounded-pill btn-success ms-2 "
              onClick={capachinoLatteAdd}
              id="lateadd2"
            >
              Add
            </div>
          </h6>

          <div className="button mt-4">
            <div
              className="btn btn-outline-danger ms-2 px-4"
              onClick={addcapachinotocart}
            >
              <i className="fa fa-hand-peace-o me-1" aria-hidden="true"></i>
              BUY NOW
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default Home;
