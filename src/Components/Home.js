import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Home = () => {
    const[show,setShow] = useState(false)

  return (
    <>
    <Header/>
    
     {/* <div className="dia-img">
        <div className="svg"></div>
     </div>    */}



      {/* <div className="dia-header">
       <div className="logo">
        <img src="img/logo.png" alt="logo not found" />
        </div> 
    </div>

    <div className='navbar'>
       <i className="menu-icon ri-menu-3-line" onClick={()=>setShow(true)}></i>
       </div>

      {
        show ? (<div className="navbar">
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
            <br/>
            <p>+1 3033054052</p>
            <br/>
            <p>hello@diablomedia.com</p>
            <br/>

            <div className="contact-icon">
              <i className="ri-linkedin-box-fill"></i>
              <i className="ri-facebook-box-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-twitter-fill"></i>
            </div>
            <br/>
            <button>PUBLISHERS</button>
          </div>
        </div>
        <div className='navbar'> <i className="close-icon ri-close-line" onClick={()=>setShow(false)}  ></i>
       </div>
      </div>) : '' 
      } */}
    




    <div className="header-con">
      <h1>Making Connections</h1>
      <h2 className="col-white">Delivering Results</h2>
      <p>
        We are <em>ReachMBN,</em> a no-lomt data & technology-driven performance marketing agency.
      </p>
    </div>

    <div className="bottom-logo">
      <div className="bottom-row">
        <div className="img-2">
         <img src="img/award-1.png" alt=""  />
        </div>
        <div className="img-1">
          <img src="img/Awards-2.svg" alt="" />
        </div>
        <div className="img-1">
         <img src="img/award-3.svg" alt="" />
        </div>
     </div>
   </div>

    

    <div className="row">
      <div className="create-value">
        <div className="create-col">
          <h1>Here to create value</h1>
          <p>
            To run an effective performance marketing campaign you need to
            deliver the right message across the right channels. Whether you
            need to acquire new customers, generate leads, or drive other
            customer actions—we have the tools, the people, and the expertise to
            get the job done.
          </p>
        </div>
        <div className="create-col">
          <img src="img/legal-col.svg" alt="" />
        </div>
      </div>
    </div>


    <section className="capabilities">
      <p>CAPABILITIES</p>
      <h1>
        Delivering effective, data and technology-driven marketing services.
        Period.
      </h1>

      <div className="capabilities-row">
        <div className="capabilities-col">
          <img src="img/Data-Management.svg" alt="" />
          <h1>Data Management</h1>
        </div>
        <div className="capabilities-col">
          <img src="img/affiliate-services.svg" alt="" />
          <h1>Affiliate Services</h1>
        </div>

        <div className="capabilities-col">
          <img src="img/Service-Legal-Services.svg" alt="" />
          <h1>Legal Marketing</h1>
        </div>

        <div className="capabilities-col">
          <img src="img/Service-Lead-Generation.svg" alt="" />
          <h1>Lead Generation</h1>
        </div>

        <div className="capabilities-col">
          <img src="img/Service-Media-Buying.svg" alt="" />
          <h1>Media Buying</h1>
        </div>
      </div>
      <button className="cap-btn">SEE THE REACH MBN DIFFERENCE</button>
    </section>

    <div className="about">
    <div className="about-row">
      <div className="about-col">
        <h1>
          We are more than typical, we
          genuinely care
        </h1>
        <p>
          Learn more about our values and history, get to know the people
          behind Reach MBN, and discover how you can join our team!
        </p>
        <a href=''>MORE ABOUT US</a>
      </div>
      <div className="about-col">
        <img src="https://pbs.twimg.com/media/FdmeQxcWYAUdi1Q?format=jpg&name=large" alt="" />
      </div>
    </div>
  </div>
 
      <Footer/>

    </>
  )
}

export default Home