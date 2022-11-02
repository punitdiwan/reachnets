import React, {useState} from 'react'
import Footer from './Footer'
import Header from './Header'

const Mediabuying = () => {

    const[show,setShow] = useState(false)

  return (
    <>
      <Header/>

    {/* <div className="dia-img">
      <div className="svg"></div>
    </div> */}


{/* 
    <div className="dia-header">
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
            <li><a href="/">Home</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Join Us</a></li>
            <li><a href="/">Contact</a></li>
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
    


    <div className="header-con">
          <h1 className="ser-font">SERVICES</h1>
          <h2 className="col-white">Media Buying</h2>
          <p>Strategically planned, implemented & managed.</p>
        </div>


        <div className="growth">
          <div className="growth-flex">
            <p>
                An effective marketing strategy is built on several tactics, all of which must be supported by media buys that get the right message to the right person at the right time. At Diablo, we create and execute paid media campaigns measured on, and tailored to, your objectives.
            </p>
          </div>
        </div>


      <div className="digital">
        <div className="digital-row strategy-row">
          <div className="digital-col strategy-col">
            <h1>We drive successful business results with our advanced technology, in-house media buying, and access to premium inventory.</h1>
            <p>
                Not only do we gain actionable insights from the right data, but we also work with our clients to get feedback on both what is and isn’t working to ensure our strategy stays aligned with their goals.
            </p>
          </div>
          <div className="digital-col strategy-col" >
            <img src="img/Media-Strategy.svg" alt="" />
          </div>
        </div>
      </div>


      <div className="data-monitor">
        <div className="data-monitor-row">
          <div className="data-monitor-col">
            <img src="img/Media-Transparency.svg" alt="" />
          </div>
          <div className="data-monitor-col">

            <div className="affiliates-h">
              <h1>
                Transparency in our service is extremely important to us.
              </h1>
              <p>
                How do we do this? Our clients receive a dashboard with spend reporting directly from Facebook. These reports reflect how every dollar was spent. No hidden costs. No secrets.
              </p>
            </div>

            <div className="affiliates-h aff-f">
              <p>
                Our team of experts ensures quick campaign builds while still allowing for them to be entirely customizable with the landing pages, form questions, ad copy, and imagery to fit the client’s needs. Finally, we can generate both leads and calls by adding a phone number to the form for no additional cost.
              </p>
            </div>
          </div>
        </div>
      </div>




    <div className="our-process">
        <h1>OUR PROCESS</h1>
        <div className="our-process-row">
          <div className="our-process-col">
            <div className="our-flex">
              <h3>01.</h3>
              <p>Identify target audience</p>
            </div>
            <div className="our-flex">
              <h3>02.</h3>
              <p>Research competitors</p>
            </div>
            <div className="our-flex">
              <h3>03.</h3>
              <p>Design buying strategy</p>
            </div>
            <div className="our-flex">
              <h3>04.</h3>
              <p>Allocate budget</p>
            </div>
          </div>
          <div className="our-process-col our-process-col-2">
            <div className="our-flex">
              <h3>05.</h3>
              <p>Launch campaign</p>
            </div>
            <div className="our-flex">
              <h3>06.</h3>
              <p>Monitor & respond</p>
            </div>
            <div className="our-flex">
              <h3>07.</h3>
              <p>Analyze effectiveness</p>
            </div>
            <div className="our-flex">
              <h3>08.</h3>
              <p>Optimize</p>
            </div>
          </div>
        </div>
      </div>



    <div className="touch-today">
        <div className="btn-touch">
          <a href="/">GET IN TOUCH TODAY</a>
        </div>
        <div className="touch-content">
          <h2>Learn What Other Services Diablo Has to Offer</h2>
        </div>
        <div className="touch-row">
          <div className="touch-col">
            <a href="/"> <img src="img/Data-Management.svg" alt="" /></a>
            <a href="/"><h3>Data Management</h3></a>
          </div>
          <div className="touch-col">
            <a href="/"> <img src="img/affiliate-services.svg" alt="" /></a>
            <a  href="/"><h3>Affiliate Services</h3> </a>
          </div>
          <div className="touch-col">
            <a href="/"> <img src="img/Service-Legal-Services.svg" alt="" /> </a>
            <a href="/"><h3>Legal Marketing</h3> </a>
          </div>
          <div className="touch-col">
            <a href="/"> <img src="img/Service-Lead-Generation.svg" alt="" /></a>
            <a  href="/"><h3>Lead Generation</h3> </a>
          </div>
          <div className="touch-col">
            <a href="/"> <img src="img/Service-Media-Buying.svg" alt="" /></a>
            <a href="/"><h3>Media Buying</h3> </a>
          </div>
        </div>
      </div>
  
  
    <Footer/>
     
    </>
  )
}

export default Mediabuying