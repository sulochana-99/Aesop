import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
        <footer>
        <div className="footer-container">
            <div  className="footer-section">
                <h6>Subscribe to Aesop communications</h6><hr></hr>
                <input type="email"  className = "email"placeholder='Email Address'/><br></br>
                <input type="checkbox"/>
                <span>Subscribe to receive communications from Aesop. 
                By subscribing, you confirm you have read and understood our privacy policy.</span>
            </div>
            <div  className="footer-section">
                <h6>Orders and support</h6><hr></hr>
                <ul>
                    <li>Contact us</li>
                    <li>FAQs </li>
                    <li>Shipping </li>
                     <li> Returns </li>
                    <li> Order history</li>
                    <li>Check gift card balance</li>
                    <li>Terms and conditions</li>
                 </ul>
            </div>
            <div  className="footer-section">
                <h6>Services</h6><hr></hr>
                 <ul>
                     <li>Live assistance</li>
                      <li> Corporate gifts</li>
                            <li> Facial Appointments</li>
                        <li> Click and Collect</li>
                        <li> Video consultation</li>
                </ul>
            </div>
            <div  className="footer-section">
                    <h6>Location preferences</h6><hr></hr>
                    <ul>
                            <li>Shipping:</li>
                            <li>Hong Kong SAR, China</li>
                            <li> Language:</li>
                            <li>繁體中文</li>
                    </ul>
            </div>
        <div className='footer-container-second'>
            <div className="footer-section sustainability-section">
        <h6>Sustainability</h6><hr></hr>
                <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.
                    <a href="https://www.aesop.com/hk/en/r/sustainability/"> Learn more</a>
                </p>
        </div>
        <div className="footer-section about-section">
            <h6>About</h6><hr></hr>
            <ul>
                <li>Our story</li>
                   <li> Foundation</li>
                   <li> Careers</li>
                   <li> Privacy policy</li>
                   <li> Accessibility</li>
                   <li> Cookie Policy</li>
            </ul>
        </div>
        <div className="footer-section about-section">
            <h6>Socail media</h6><hr></hr>
            <ul>
                <li>Instagram</li>
                    <li>Twitter </li>
                    <li>LinkedIn </li>
                    <li>WeChat</li>
                   <li> Weibo </li>
            </ul>
        </div>
        
        </div></div><hr></hr>
        <h5>© Aesop</h5></footer>
        </div>
       
  
  )
}

export default Footer;