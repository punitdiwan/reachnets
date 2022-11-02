import React, {useState} from 'react'
import Footer from './Footer'
import Header from './Header'

const Affiliateservices = () => {

    const[show,setShow] = useState(false)
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
        <h2 className="col-white">Advertiser Affiliate Services
      </h2>
        <p>Connect to new audiences at scale.</p>
      </div>

    


      <div className="growth">
        <div className="growth-flex">
          <p>
            We drive net new customers for our advertisers by generating leads and customer acquisition through our owned and operated sites as well as direct-to-consumer internal and third-party publishers. This includes email, social, display, native, push, & SMS channels, to name a few.
          </p>
        </div>
      </div>


      <div className="digital">
        <div className="digital-row strategy-row">
          <div className="digital-col strategy-col">
            <h1>We offer data-driven strategy and proprietary affiliate management tools all on a performance basis.</h1>
            <p>
              As data goes through our infrastructure in real-time, we can append
              additional information to that record, increasing its value to you.
              Not only do we provide the data to each client, but our services are
              completely tailored to the needs of the buyer. Our team of experts
              analyzes the data in-depth ensuring the best results for our
              clients.
            </p>
          </div>
          <div className="digital-col strategy-col" >
            <img src="img/Affiliate-Strategy.svg" alt="" />
          </div>
        </div>
      </div>
   
      <div className="publish-ser">
        <div className="publish-row">
            <div className="publish-col">
                <h2>Want to work with us as a publisher instead?</h2>
                <p>Learn more about how you can become part of our publisher network.</p>
            </div>
            <div className="publish-col">
                <a href="/">PUBLISHER SERVICES
                </a>
            </div>
        </div>
      </div>


          
    <div className="data-monitor">
        <div className="data-monitor-row">
          <div className="data-monitor-col">
            <img src="img/Affiliate-Meeting.svg" alt="" />
          </div>
          <div className="data-monitor-col">

            <div className="affiliates-h">
              <h1>
                Here’s how we make it happen.
              </h1>
              <p>
                We offer a strategic approach to affiliate marketing by introducing you to new customers and providing a vote of confidence for your brand. Our team of experts takes on all the heavy lifting of managing your affiliate program, providing best practices and insights, and connecting you to new audiences.
              </p>
            </div>

            <div className="affiliates-h aff-f">
              <p>
                Whether providing click to conversion data, landing page optimizations, creative recommendations, growth strategies, or even simply making sure affiliates are paid on time, Diablo handles the day-to-day activities of managing your affiliate program.
              </p>
              <p>We have spent years developing trusted relationships with our network partners. This virtually eliminates fraud and reduces the cost of customer acquisition due to the efficiencies we’ve built. This is why so many of our partnerships last for years and years.</p>
              <h1>
                We stand behind our high-converting network of top-quality affiliates.
              </h1>
            </div>
          </div>
        </div>
      </div>

     
      <div className="our-promise">
        <p>At Diablo Media, we promise our advertisers:</p>
  
        <div className="promise-row">
          <div className="promise-col">
            <div className="promise-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Access to Hundreds of Quality Publishers</h2>
            </div>
            <div className="promise-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Owned & Operated Internal Ad Property Inventory</h2>
            </div>
            <div className="promise-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Top-Performing Campaigns hosted on Proprietary Tracking Platform</h2>
            </div>
            <div className="promise-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Technology Resources</h2>
            </div>
            <div className="promise-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Transparent Data</h2>
            </div>
          </div>
          <p>Our performance marketing group of experts helps brands and companies grow and accelerate their digital business. We combine strong expertise in performance tactics, data analytics, and creativity under one roof.</p>
        </div>      
      </div>
  


      <div className="testimonial">
        <div className="testimonial-row">
          <div className="testimonial-col">
            <div className="test-img">
              <img src="img/testimonial-quote-sm.png" alt="" />
            </div>
          </div>
          <div className="testimonial-col">
            <div className="test-content">
              <em>The Team at Diablo has helped us build successful six figure campaigns for top brands and in addition to being great to work with, being able to drive traffic they have helped us innovate and create new offers that have been very successful for us and our publishers.</em>
              <p>Bill R.</p>
            </div>
          </div>
        </div>
      </div>
      

      <div className="digital">
        <div className="digital-row">
          <div className="digital-col strategy-col">
            <h1>What makes Diablo Media different?</h1>
            <p>
              Built from the ground up, we have continually evolved with the industry. Our proprietary tracking platform offers accurate real-time analytics and reporting, as well as a full API for accessing important data and marketing assets. With total control over our proprietary technologies, we provide greater stability and zero restrictions on campaign integration. We can publish and test multiple campaign iterations side by side without limiting custom tracking and reporting.
            </p>
          </div>
          <div className="digital-col " >
            <img src="img/Affiliate-UI.svg" alt="" />
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

export default Affiliateservices