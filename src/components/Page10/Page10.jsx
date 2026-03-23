import React from "react";
import "./Page10.css";

function Page10() {
  return (
    <div className="page10 display-flex">
      <div className="sign-up-box1 display-flex">
        <h1 className="font-400">SIGN UP FOR OUR NEWSLTTER</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email Address"
        />
        <button className="sign-up">SIGN UP</button>
      </div>
      <div className="image-box1">
        <div className="contain">
          <img
            src="https://images.unsplash.com/photo-1737412358025-160a0c22e6c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </div>
        <div className="contain">
          <img
            src="https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWxzfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="contain">
          <img
            src="https://images.unsplash.com/photo-1736754075212-be39fe100f62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </div>
        <div className="contain">
          <img
            src="https://plus.unsplash.com/premium_photo-1698749344947-3093e1557e36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </div>
        <div className="contain">
          <img
            src="https://images.unsplash.com/photo-1722761742602-6f7186388eaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <div className="contain">
          <img
            src="https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <button className="btn insta">
            Follow us on instagram
        </button>
      </div>
    </div> 
  );
}

export default Page10;
