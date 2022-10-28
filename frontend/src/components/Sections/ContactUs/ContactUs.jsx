import React from 'react'

import './ContactUs.css'
//images
import img14 from '../../../images/img14.png'

const ContactUs = () => (
  <div className="contactus" id="contactus">
    {/* <div className="title" style={{marginBottom: "30px"}}> */}

    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
    {/* </div> */}
   <br></br> <h2 className="title">
      <center>Contact Us</center>
    </h2><br></br>

    <div className="contact">
      <div className="imgBx">
        <img src={img14} alt="img14"></img>
      </div>
      <div className="contentBx">
        <div className="formBx">
          <h2>Send a Message</h2>
          <form>
            <div className="inputBx">
              <span>Username</span>
              <input type="text" placeholder="Your name here" name=""></input>
            </div>
            <div className="inputBx">
              <span>Email</span>
              <input type="text" placeholder="mail@example.com" name=""></input>
            </div>
            <div className="inputBx">
              <span>Message</span>
              <textarea placeholder="Message" className="inputBx"></textarea>
            </div>
            <div className="inputBx">
              <input type="submit" value="Send" name=""></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default ContactUs
