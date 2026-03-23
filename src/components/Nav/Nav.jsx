import React, { useRef } from "react";
import "./Nav.css";
import gsap from "gsap";

function Nav() {
 const menuBox = useRef();
 const txt = useRef();
 const close = useRef();

 const show_box = () => {
    let tl = gsap.timeline();
    tl.to(".menu-block", {
      width: "90%",
      duration: 0.7,
    });
    tl.to(".text", {
      display: "flex",
    });
    tl.to(".text h4", {
      opacity: 1,
      stagger: 0.2,
      x: -50,
    });
    tl.to(".close", {
      opacity: 1,
      display: "block",
    });
  };
  const hide_box = () => {
    let tl = gsap.timeline();
    tl.to(".menu-block", {
      width: "0%",
      duration: 0.7,
    });
    txt.current.style.display = "none";
    close.current.style.display = "none";
  };
  return (
    <div className="nav">
      <h1 className="font-400 font-size">KAIRA</h1>
      <ul>
        <li>HOME</li>
        <li>SHOP</li>
        <li>BLOG</li>
        <li>PAGES</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
      <div className="menu-cart display-flex">
        <div className="wishlist display-flex">
          <p>
            WISHLIST <span>(0)</span>
          </p>
          <p>
            CART <span>(0)</span>
          </p>
          <i className="ri-search-line"></i>
        </div>
        <div className="wishlist1 display-flex">
          <i className="ri-heart-line"></i>
          <i className="ri-shopping-cart-2-line"></i>
          <i className="ri-search-line "></i>
        </div>
        <div className="menu">
          <i className="ri-menu-3-line" onClick={show_box}></i>
          <div className="menu-block" ref={menuBox}>
            <i
              className="ri-close-large-line close"
              onClick={hide_box}
              ref={close}
            ></i>
            <div className="text" ref={txt}>
              <h4>HOME</h4>
              <h4>SHOP</h4>
              <h4>BLOG</h4>
              <h4>PAGES</h4>
              <h4>BLOG</h4>
              <h4>CONTACT</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
