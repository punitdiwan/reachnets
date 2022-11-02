import React from 'react'
// import { Link } from 'react-router-dom'
import Header from './Header'

const Contactus = () => {
    // const[show,setShow] = useState(false)
  return (
    <>
       <Header/>

      {/* <div className="dia-img">
        <div className="svg"></div>
      </div> */}


     {/* <div className="dia-header">
      <div className="logo">
        <img src="img/diablo-logo-removebg-preview.png" alt="logo not found" />
        <span><b>diablo</b>media</span>
        </div>
      </div>


       <div className='navbar'>
       <i className="menu-icon ri-menu-3-line" onClick={()=>setShow(true)}></i>
       </div>


     {
        show ?  (<div className="navbar" id="nav-bar">
        <div className="menu-bar">
          <div>
            <h4>NAVIGATE</h4>
            <br />
            <br />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/joinus">Join Us</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
          </div>
        </div>
        <div className="connect-bar">
          <div>
            <h4>CONNECT</h4>
            <br />
            <br />
            <p>
              3001 Bringhton Blvd.<br />
              Suite 769<br />Denver, CO 80216<br />USA
            </p>
            <br />
            <p>+1 3033054052</p>
            <br />
            <p>hello@diablomedia.com</p>
            <br />

            <div className="contact-icon">
              <i className="ri-linkedin-box-fill"></i>
              <i className="ri-facebook-box-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-twitter-fill"></i>
            </div>
            <br />
            <button>PUBLISHERS</button>
          </div>
        </div>
        <i className="close-icon ri-close-line" onClick={()=>setShow(false)}></i>
      </div>) : ''
     } */}
   
    
    
    <div className="header-con m-top">
      <h1 className="ser-font">CONTACT</h1>
      <h2 className="col-white">Get In Touch</h2>
      <p>
        It’s a big data digital world out there, we can help you find  your
        place in it.
      </p>
    </div>
   



    <div className="growth">
      <div className="growth-flex">
        <p>
          Want to learn more about our services? Interested in joining our team?
          Ready to start working together to achieve your goals? Call or fill
          out the form below—we’re excited to hear from you!
        </p>
      </div>
    </div>

    <div className="contact">
      <div className="contact-row">
        <div className="contact-col-1">
          <div>
            <h4>MAILING ADDRESS</h4>
            <br />
            <p>
              3001 Bringhton Blvd.<br />
              Suite 769<br />Denver, CO 80216<br />USA
            </p>
            <br />
            <h4>CONNECT</h4>
            <br />
            <p>+1 3033054052</p>
            <p>hello@diablomedia.com</p>
            <br />

            <h4>SOCIAL</h4>
            <br />
            <i className="ri-linkedin-box-fill"></i>
            <i className="ri-facebook-box-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-twitter-fill"></i>
            <br />
            <br />
          </div>
        </div>

        <div className="contact-col-2">
          <form>
            <div className="input-row">
              <div className="input-col">
                <div><label for="">COMPANY NAME</label></div>
                <input type="text" />
              </div>
              <div className="input-col">
               <div> <label for="">YOUR NAME</label></div>
                <input type="text" />
              </div>
            </div>

            <div className="input-row">
              <div className="input-col">
                <div><label for="">YOUR EMAIL</label></div>
                <input type="text" />
              </div>
              <div className="input-col">
                <div><label for="">YOUR PHONE</label></div>
                <input type="text" />
              </div>
            </div>

            <div className="input-col">
             <div> <label for="">WHAT CAN WE HELP YOU WITH?</label></div>
              <textarea rows="10"></textarea>
            </div>
            <div className="btn-send">
              <button>SEND MESSAGE</button>
            </div>
          </form>
         
        </div>
      </div>
    </div>

    <div className="policy">
      <div className="policy-row">
        <div className="policy-col">
          <p>© 2021 Reach MBN. All rights reserved.</p>
        </div>
        <div className="policy-col">
          <p>Privacy Policy • Anti-Spam</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contactus