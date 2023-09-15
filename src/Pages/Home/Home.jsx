import React from "react";
import "./Home.css";
import { FaTruckMoving } from "react-icons/fa";
function Home() {
  document.title = "Home";
  return (
    <>
      <div className="navbar">
        <div className="navhead">
          <FaTruckMoving className="nav-icon" />
        </div>
        <div className="wallet-button">Connect Wallet &gt;</div>
      </div>
      <div id="home" className="homepage">
        <div className="functions">
          <div className="function_child">
            <div className="txt">USER PROFILE</div>
          </div>
          <div className="function_child">
            <div className="txt">START SHIPMENT</div>
          </div>
          <div className="function_child">
            <div className="txt">SEND SHIPMENT</div>
          </div>
          <div className="function_child">
            <div className="txt">COMPLETE SHIPMENT</div>
          </div>
          <div className="function_child">
            <div className="txt">GET SHIPMENT</div>
          </div>
          <div className="function_child">
            <div className="txt">SHIPMENT COUNT</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
