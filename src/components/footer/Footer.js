import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
        <div className="footer">
          <div>
            <h2>LOGO</h2>
            <h6>Lorem ipsum dolor sit amet.</h6>
          </div>
          <div className="footer1">
          <a href="#">Usefull Links</a>
          <a href="#">Content</a>
            <a href="#">How it Works</a>
            <a href="#">Create</a>
            <a href="#">Explore</a>
            <a href="#">Terms & Services</a>
          </div>
          <div className="footer2">
            <a href="#">Community</a>
            <a href="#">Help Center</a>
            <a href="#">Partners</a>
            <a href="#">Suggestions</a>
            <a href="#">Blog</a>
            <a href="#">Newsletters</a>

          </div>
          <div className="footer3">
            <a href="#">Partner</a>
            <a href="#">Our Partner</a>
            <a href="#">Become a Partner</a>

          </div>
        </div>
        <hr />
        <div className="red">
          <div className="red1">
            <span>  Copyright @ 202X EvoFin. All Rights Reserved.</span>
          </div>
          <div className="blek">
        <a href="https://www.instagram.com/azamat_303_/"><i  class="fa-brands fa-square-instagram"></i></a>
        <a href="https://t.me/AZIK_0706"><i class="fa-brands fa-telegram"></i></a>
          <a href="https://mail.google.com/mail/u/0/#sent"> <i class="fa-brands fa-square-twitter"></i></a>
         
          </div>
        </div>
    </footer>
  );
};

export default Footer;
