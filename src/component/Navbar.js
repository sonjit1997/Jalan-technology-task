import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "../component/Navbar.css";

const Navbar = ({ cart, total }) => {
  const [billModal, setbillModal] = useState(false);

  console.log(total);

  const billDetail = () => {
    setbillModal(true);
  };
  const closeModal = () => {
    setbillModal(false);
  };

  return (
    <>
      <nav>
        <a href="#">home</a>
        <a href="#">account</a>
        <a href="#">contact</a>
        <a href="#">service</a>
        <a href="#" onClick={billDetail}>
          Billing
        </a>
        <div className="animation start-home"></div>
      </nav>

      {billModal ? (
        <Modal show={billModal} onHide={closeModal} backdrop="static" centered>
          <Modal.Header closeButton>
            <Modal.Title>BILL</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {cart.map((item) => (
              <div className="d-flex mt-3  " key={item.id} id="ddd">
                <div className="img">
                  <img
                    src={item.image}
                    alt={item.id}
                    height={"100rem"}
                    width={"120rem"}
                  />
                </div>

                <div className="title mt-4 ms-5">
                  <h6 className="text text-secondary">{item.Name}</h6>
                </div>
              </div>
            ))}
            <hr />
            <div className=" d-flex " id="total">
              <h5 className="total text-danger">Total </h5>
              <h5 className="amount text-danger">₹{total}</h5>
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
