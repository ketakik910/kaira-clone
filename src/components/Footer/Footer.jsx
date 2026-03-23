import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer display-flex">
      <div className="footer-part1 display-flex">
        <div className="main-part1">
          <div className="footer-box">
            <h1 className="small-para font-400">KAIRA</h1>
            <p className="main-para">
              Gravida massa volutpat aenean odio. Amet, turpis erat nullam
              fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit
              ac sit suscipit hendrerit.
            </p>
            <div className="social-media-icons"></div>
          </div>
          <div className="footer-box f-box">
            <h2 className="small-para font-400">QUICK LINKS</h2>
            <p>
              <span className="jost-font font-400 an">HOME</span>
            </p>
            <p>
              <span className="jost-font font-400 an">ABOUT</span>
            </p>
            <p>
              <span className="jost-font font-400 an">SERVICES</span>
            </p>
            <p>
              <span className="jost-font font-400 an">SINGLE ITEM</span>
            </p>
            <p>
              <span className="jost-font font-400 an">CONTACT</span>
            </p>
          </div>
          <div className="footer-box f-box">
            <h2 className="small-para font-400">HELP & INFO</h2>
            <p>
              <span className="jost-font font-400 an">TRACK YOUR ORDER</span>
            </p>
            <p>
              <span className="jost-font font-400 an">RETURNS + EXCHANGES</span>
            </p>
            <p>
              <span className="jost-font font-400 an">SHIPING + DILIVERY</span>
            </p>
            <p>
              <span className="jost-font font-400 an">CONTACT US</span>
            </p>
            <p>
              <span className="jost-font font-400 an">FIND US EASY</span>
            </p>
            <p>
              <span className="jost-font font-400 an">FAQS</span>
            </p>
          </div>
          <div className="footer-box">
            <h2 className="small-para font-400">CONTACT US</h2>
            <p className="main-para" style={{marginTop:"-0.2vw"}}>Do you have any questions or suggestions?<br /><span className="jost-font font-400 an">contact@yourcompany.com</span></p>
            <p className="main-para" style={{marginTop:"-0.2vw"}}>Do you need support? Give us a call.<br/><span className="jost-font font-400 an">+43 720 11 52 78</span></p>
          </div>
        </div>
      </div>
      <div className="footer-part2 display-flex">
        <div className="display-flex" style={{gap:"0.3vw"}}>
          <p className="main-para">We ship with:</p>
          <img src="https://themewagon.github.io/kaira/images/arct-icon.png" alt="" />
          <img src="https://themewagon.github.io/kaira/images/dhl-logo.png" alt="" />
          <p className="main-para">Payment Option:</p>
          <img src="https://themewagon.github.io/kaira/images/visa-card.png" alt="" />
          <img src="https://themewagon.github.io/kaira/images/visa-card.png" alt="" />
          <img src="https://themewagon.github.io/kaira/images/master-card.png" alt="" />
        </div>
        <div className="main-para">
          <p>© Copyright 2022 Kaira. All rights reserved. Design by TemplatesJungle</p>
          <p className="right">Distribution By ThemeWagon</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
