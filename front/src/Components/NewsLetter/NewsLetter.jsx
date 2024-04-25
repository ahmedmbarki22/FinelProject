import React from "react";
import "./NewsLetter.css";
function NewsLetter() {
  return (
    <div className="newsletter">
      <h1>GET Exclusive Offers On Your Email </h1>
      <p>Subscribe to our newletter an stay update</p>
      <div>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
