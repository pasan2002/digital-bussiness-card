import React from "react";
import MailIcon from "../assets/Mail.png"
import LinkedIn from "../assets/linkedin.png"
import PersonImage from "../assets/ulindu.jpg";

export default function Info() {
  return (
    <div className="Info">
      <img src={PersonImage} alt="person image" className="personimg" />
      <h2>Pasan Hewavitharana</h2>
      <h5>Frontend Developer</h5>
      <h6>React,Python,Sqlite,C</h6>
      <div className="infobuttons">
        <a href="mailto: batm31768@gmail.com" className="button" id="mailbutton">
            <img src={MailIcon} alt="Email logo" />
            <p>Email</p>
        </a>
        <a href="https://www.linkedin.com/in/pasan-hewavitharana-319026268" className="button" id="linkedinbtn">
            <img src={LinkedIn} alt="LinkedIn logo" />
            <p>Linkedin</p>
        </a>
      </div>
    </div>
  );
}
