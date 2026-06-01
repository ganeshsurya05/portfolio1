import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ganeshsurya2805@gmail.com" data-cursor="disable">
                ganeshsurya2805@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Thiruvallur, Tamil Nadu, India</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-surya5?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Developed by <br /> <span>Ganesh Surya E</span>
            </h2>
            <p style={{ fontSize: '12px', marginTop: '10px' }}>
              Powered by <strong>GIGZ Tech</strong>
            </p>
            <h5 style={{ marginTop: '20px' }}>
              <MdCopyright /> 2025 GIGZ Technologies. All rights reserved.<br/>
              Made with 💜 in India.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
