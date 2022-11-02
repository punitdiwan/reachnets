import React, {useState} from 'react'
import Footer from './Footer'
import Header from './Header'
const Leadgeneration = () => {

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
        <h2 className="col-white">Lead Generation
      </h2>
        <p>Get quality leads, not just traffic.</p>
      </div>




      <div className="growth">
        <div className="growth-flex">
          <p>
            At Diablo, we formulate well-planned lead generation programs tailored to your business needs and budget. Utilizing our internal media buying team and network of trusted publishers, we drive traffic to our owned and operated sites generating leads in various verticals.
          </p>
        </div>
      </div>

    

      <div className="digital">
        <div className="digital-row strategy-row">
          <div className="digital-col strategy-col">
            <p>
                We are judged by both quality and volume, and we deliver results. We work with you every step of the process ensuring you are fully informed about how your leads are being generated as well as the effectiveness of our strategy. This proves to be much more cost-effective than just paying to acquire more traffic.
            </p>
            <div className="lead-quantity">
            <h1>Volume isn’t the goal.</h1>
            <h1> Quality is everything.</h1>
            </div>
          </div>
          <div className="digital-col strategy-col" >
            <img src="img/LeadGen-Quality.svg" alt="" />
          </div>
        </div>
      </div>



      <div className="data-monitor">
        <div className="data-monitor-row">
          <div className="data-monitor-col">
            <img src="img/LeadGen-Tailored.svg" alt="" />
          </div>
          <div className="data-monitor-col">
            <div>
              <p>
                While we make it look easy, there is a lot that goes on behind the scenes to make sure that you are getting a steady stream of high-quality leads. Our team works tirelessly to ensure our lead generation strategies are tailored for your exact needs and budgets. In order for our team to bring your business the most qualified leads, we deploy multiple channels:
              </p>
            </div>

            <div className="full-opt">
              <div className="fully-opt-row">
                <i className="ri-checkbox-multiple-line"></i>
                <h2>
                    Customized Landing Pages with Media Buying
                </h2>
              </div>
              <div className="fully-opt-row">
                <i className="ri-checkbox-multiple-line"></i>
                <h2>
                    Our Network of Publishersres
                </h2>
              </div>
              <div className="fully-opt-row">
                <i className="ri-checkbox-multiple-line"></i>
                <h2>
                    Diablo’s Owned & Operated Properties
                </h2>
              </div>
            </div>
            
          </div>
        </div>
      </div>
   
      <div className="imp-great">
        <h1>Clicks and impressions are great—but qualified leads are better.</h1>
      </div>
      
      <div className="digital">
        <div className="digital-row">
          <div className="digital-col">
            <p>
                Targeted lead generation campaigns can make all the difference in bringing your business growth, but it takes a special touch to be able to execute them. So, what makes Diablo different? The trick is realizing that not anyone and everyone is a lead. The mistake too many businesses make is to market to everyone when they should be focusing on just the people who are interested in their offering. We are the performance agency that connects the dots between these leads and your business. We find the holes through auditing, ideal audience identification, and then, target them using the best technologies available to capture these leads.
            </p>
           
          </div>
          <div className="digital-col">
            <img src="img/LeadGen-Sort.svg" alt="" />
          </div>
        </div>
      </div>

    
      <div className="imp-great">
        <h1>Say goodbye to guesswork, and hello to new customers.</h1>
      </div>





      <div className="our-process">
        <h1>OUR PROCESS</h1>
        <div className="our-process-row">
          <div className="our-process-col">
            <div className="our-flex">
              <h3>01.</h3>
              <p>Identify target audience
            </p>
            </div>
            <div className="our-flex">
              <h3>02.</h3>
              <p>Design strategy</p>
            </div>
            <div className="our-flex">
              <h3>03.</h3>
              <p>Allocate budget</p>
            </div>
            <div className="our-flex">
              <h3>04.</h3>
              <p>Launch campaign</p>
            </div>
          </div>
          <div className="our-process-col our-process-col-2">
            <div className="our-flex">
              <h3>05.</h3>
              <p>Monitor & Respond
            </p>
            </div>
            <div className="our-flex">
              <h3>06.</h3>
              <p>Analyze effectiveness</p>
            </div>
            <div className="our-flex">
              <h3>07.</h3>
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

export default Leadgeneration