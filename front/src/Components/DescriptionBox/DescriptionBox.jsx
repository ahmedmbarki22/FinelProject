import React from "react";
import "./DescriptionBox.css";
function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade"> Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to [E-commerce Site Name], your premier destination for online
          shopping! Our website offers a vast selection of products from top
          brands across numerous categories, providing customers with a
          convenient and enjoyable shopping experience from the comfort of their
          homes.Explore our user-friendly interface, designed to make navigating
          our extensive product catalog a breeze. Whether you're searching for
          electronics, fashion, home goods, beauty products, or more, our
          intuitive website layout and powerful search functionality ensure you
          can easily find what you're looking for.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
