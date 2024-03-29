import React from 'react'
import { Carousel } from 'react-bootstrap';
import './services.css';
import './about.css';
import './App.css';
import './js';
import './home.css';
import './form-submission-handler';
import Read from './ReadML';







const Home= () => {
    return (
      <div id="home" className='unselectable'> 
              
{/*slideshow start*/}
<div>
<Carousel fade >

  <Carousel.Item fade>
    <img
      className="slideshow d-block w-100"
      src="./htmlgames.jpg"
      alt="Games"
    />
    <Carousel.Caption>
      <h3>Games Solutions</h3>  
    </Carousel.Caption>
    
  </Carousel.Item>

  
  <Carousel.Item fade>
    <img
      className="slideshow d-block w-100"
      src="./internet.jpg"
      alt="IoT"
    />
    <Carousel.Caption>
      <h3>Internet of Things</h3>  
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item fade >
    <img
      className=" slideshow d-block w-100"
      src="./web.jpg"
      alt="Web"
    />

    <Carousel.Caption>
      <h3>web development</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item fade>
    <img
      className="slideshow d-block w-100"
      src="./Content.jpg"
      alt="videos"
    />

    <Carousel.Caption><h3>Content Solutions</h3></Carousel.Caption>
  </Carousel.Item>

</Carousel>
</div>
{/*slideshow end*/}

{/* Header control */}
<div className="container header">
<div className="inner-header flex">
<h1 className='font font-effect-emboss hoverable' > A L B A T R O S 
    </h1>

 

</div>
<div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(200,150,150,0.7" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(225,225,150,0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
</div>
{/* Welcome message start*/}
 

  <div className='home_welcome  '>
 
  <p className='textalign text_color'>
  Albatros Engineering Co.LTD is one of the pioneering companies in Sudan working  in The field of engineering 
  contracting in addition to distributing digital content through value-added services. <br/>
  <br/>
  <span><i className="fa-solid fa-gem  btn-floating pulse"></i>  </span>Offering the best  valuable services for both local operators  thier customers like:<br/>
  <br/> 

  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
 
  <img src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/64/000000/external-Message-mobile-application-color-line-others-cattaleeya-thongsriphong.png"/>
  <u data-toggle="tooltip" data-placement="bottom"
   title="Short Message Service"><i class="fa-solid fa-message-sms"></i>Short Message Service</u><br/>












   through this service our company tend to provide a range of sms services to customers with different content and valuable meaning.<br/>
<img src="https://img.icons8.com/arcade/64/000000/experimental-medium-volume-arcade.png"/>
<u data-toggle="tooltip" data-placement="top" title="ring back tone">Ring Back Tone</u> <br/>
A Ringback Tone is that ringing sound you hear when you try to call someone. Your carrier network provides this sound to your callers when
 they are trying to connect to you. With LISTEN, you have the option to replace that ringing sound with music or voice status messages.<br/> 
 

<img src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/000000/external-ivr-automation-technology-flaticons-flat-circular-flat-icons.png"/>
<u data-toggle="tooltip" data-placement="top" title="interactive voice response"> interactive Voice Response</u> <br/>
(IVR) is an automated telephony system that interacts with callers, gathers information and routes calls to the appropriate recipients.
<br/> 
<div >
  
  <div class="w3-panel w3-leftbar w3-sand  w3-orange ">
    according to the wide spread of smart phones and since the digital services field is new in Sudan  we has achieved the best on it by providing all needs on videos and games through making partnerships
    inside and outside the country & now entering the world of <u  data-toggle="tooltip" data-placement="top"
     title="the Internet of Things">
    IoT </u>

    find solutions that serving the client and fit his taste and provide the highest quality types of services, increase 
    revenue and reduce costs for our partners.
  </div>
</div>
<br/>

  </p>
</div>

{/* Welcome message end */}


  


{/*end of content*/}
</div>

        
    )
}
  
const Services = () => {
    return (
        <div id="services" className='unselectable' ><div ><br/>
   

<div>
<p className=' animate__animated text-center font-effect-emboss'>Our Services <i class="fa fa-cubes" aria-hidden="true"></i></p>
<div className="text-black  ">
  
  <p >
    <p className='textalign'>
    Your partners for buliding mission driven applications 
    From digital content providing to web development, ecommerce,digital portals through custom development solutions
    we have made it our mission to create and develop bespoke solutions for small and large businesses making them stand out and 
    increase scale.
    </p></p></div>
  {/* Services Images start */}   
  <div>
  <div className="reveal fade-bottom  row img_row_ser text-center servicebgcolor">

  <div className="reveal fade-bottom col-sm-6 col-md-6 col-lg-3">
    <div class="icon-container">
    <i className="servicebgcoloricon large_icon bi-camera-reels myDIV "></i>
    </div>
    <figcaption class="figure-caption text-center colorize ">Video Portals</figcaption>
    </div>

    <div className="reveal fade-bottom col-sm-6 col-md-6 col-lg-3">
    <div class="icon-container"><i className="servicebgcoloricon large_icon bi bi-markdown myDIV"></i></div>
    <figcaption class="figure-caption text-center colorize ">CMS</figcaption>
    </div>

    <div className="reveal fade-bottom col-sm-6 col-md-6 col-lg-3">
    <div class="icon-container"><i className="servicebgcoloricon large_icon bi bi-gem myDIV"></i></div>
    <figcaption class="figure-caption text-center colorize ">VAS</figcaption>
    </div>

    <div className="reveal fade-bottom col-sm-6 col-md-6 col-lg-3">
    <div class="icon-container"><i className="servicebgcoloricon large_icon bi-controller myDIV"></i></div>
    
    <figcaption class="figure-caption text-center colorize ">Games Portals</figcaption>
    </div>

    <div className="reveal fade-bottom col-sm-6 col-md-6 col-lg-3">
    <div class="icon-container"><i className="servicebgcoloricon large_icon bi bi-filetype-html myDIV"></i></div>
    <figcaption class="figure-caption text-center colorize ">HTML 5 Games</figcaption>
    </div>

    <div className="reveal fade-bottom col-sm-6 col-md-6 col-lg-3">
    <div class="icon-container"><i className="servicebgcoloricon large_icon bi  bi-power myDIV"></i></div>
    <figcaption class="figure-caption text-center colorize ">IoT</figcaption>
    </div>
    
    <div className="reveal fade-bottom col-sm-6 col-md-6 col-lg-3">
    <div class="icon-container"><i className="servicebgcoloricon large_icon bi  bi-music-player myDIV"></i></div>
    <figcaption class="figure-caption text-center colorize ">IVR</figcaption>
    </div>

    <div className="reveal fade-bottom col-sm-6 col-md-6 col-lg-3">
    <div class="icon-container"><i className="servicebgcoloricon large_icon bi  bi bi-code-slash myDIV"></i></div>
    <figcaption class="figure-caption text-center colorize ">Web Development</figcaption>
    </div>
    

  </div>
</div>
{/* Services Images end */}  


</div>








  {/*main div end */}</div></div>
    )
}


const About = () => {
  return (
   <div id="about" className='unselectable'><br/><p className='animate__animated font-effect-emboss' >About Us <i class="fa fa-info-circle" aria-hidden="true"></i></p>   
   <p className='textalign'>     
  Albatros 
  Get more infomation and histroy about Albatros engineering co.ltd timeline and it's cooperations with other 
  business inside and outside Sudan.
  Know more about Albatros histroy and development path through time and what's way that our company takes to gain this great result
   </p>
<div className='container'>
<div className="row">
    <div className="div_hover reveal fade-left about_left_div col-sm-6 col-md-6 col-lg-6">
    Albatros Engineering Co.LTD is one of the pioneering companies in Sudan working since 2008 in distributing digital
     content through value-added services. 
    </div>
    <div className="about_right_div col-sm-6 col-md-6 col-lg-6"></div>
  </div>

  <div className="row">
    <div className="about_right_div col-sm-6 col-md-6 col-lg-6"></div>
    <div className="div_hover reveal fade-right about_left_div div_border_shape col-sm-12 col-md-9 col-lg-6">
    working with the biggest mobile network operators  inside Sudan:<br/> Zain, Sudani, MTN.
     
    </div>
   
  </div>


  <div className="row">
    <div className="div_hover reveal fade-left about_left_div div_border_shape2 col-sm-12 col-md-9 col-lg-6">
    providing all needs on videos and games through making partnerships inside and outside the country
Our company has more than 4M subscribers and over 85 clients.  
    </div>
    <div className="about_right_div col-sm-12 col-md-9 col-lg-6"></div>
  </div>

  <div className="row">
    <div className=" about_right_div col-sm-12 col-md-9 col-lg-6"></div>
    <div className="div_hover reveal fade-right about_left_div div_border_shape  col-sm-12 col-md-9 col-lg-6">
    The leading company in domain in digital content providing and new technologies acquring to offer the most important part of applying new ideas.  
    </div>
   
  </div>
 {/* container main div end*/}</div>

 
{/*Partners content start */}
<p className='animate__animated text-center font-effect-emboss'>Our Partners <i class="fa fa-handshake-o" aria-hidden="true"></i></p>
<div className=" text-black ">
  
    <p className=' textalign'>
    Albatros cooperations with local operators and companies has a wide range and dimentions, below is the biggest local operators 
    in Sudan that our company support them with digital content and other services.<br/>
    <br/>Our company tend to has a group of services and solutions by trying to work as a thrid party between operators and other 
    business companies. 
   Below is some cooperations companies we are work with ! take a look 
    </p>

<div className=" reveal fade-bottom  row img_row_ser text-center partnerbgcolor">
<div className="reveal fade-bottom col-sm-12 col-md-6 col-lg-3 ">
<img className="img-fluid imagesize myDIV" src="./ZAIN2.jpg" alt="MTN" /> 
</div>

<div className="reveal fade-bottom col-sm-12 col-md-6 col-lg-3 ">
<img className="img-fluid imagesize  myDIV " src="./MTN.jpg" alt="MTN" />
</div>

<div className="reveal fade-bottom col-sm-12 col-md-6 col-lg-3">
<img className="img-fluid imagesize myDIV" src="./SUDANI.jpg" alt="MTN" /> 

</div>
<div className="reveal fade-bottom col-sm-12 col-md-6 col-lg-3 ">
<img className="img-fluid imagesize  myDIV" src="./canar.jpg" alt="MTN" /> 

</div>
</div> 


</div>
{/*Partners content end */}

<br/>

<p className=' textalign'>


  { <Read />}

  

    </p>
 {/* about main div end*/}</div>
  )
}


const Contact = () => {
  return (
    
      <div id="contact" className='unselectable'><br/>
      <p className='animate__animated text-center contact font-effect-emboss'>Contact Us <i class="fa fa-commenting" aria-hidden="true"></i><br/></p>



<div >
<div >

<p className='textalign'>
Let's be in touch please, your message really can make a different to  us.
so support us with your feedback to bring most out of effort to statisfy your need and demands.
</p>

</div>

 <div className='reveal fade-bottom  container'>
 <div className="row  form">

    <div className="logo_contact chat_font col-sm-12 col-md-6 col-lg-6">
    Let's Talk<br/>
    Messages is an SMS, RCS, and instant messaging application developed by Google for its Android mobile operating system. A web interface is also available. Launched in 2014, it has supported RCS messaging since 2018, marketed as "chat features". Wikipedia
    </div>

    <div className=" logo_contact  col-sm-12 col-md-6 col-lg-6">
    <form  method='POST' class="gform"  target="_self"
   
    
    >
    <div class="mb-3 mt-3">
  
    <input type="text" className="form-control"  placeholder="Enter Name" name="name" required/>
    </div>
    <div>
      
    <input type="email" className="form-control" placeholder="Enter E-mail" id="email" required/>
    </div>
    <textarea  class="form-control" placeholder='Your Message'  name="message"  required ></textarea>
    <button type="submit" className="btn" id='mySubmit'>
    Submit</button>
    
   </form>
    </div>

  </div>
  </div>

 


{/*main div end */}  
</div>




      </div>
  )
}


  
const Layout = () => {
  return (
    <div >
{/*navbar test*/}
<nav class="navbar navbar-expand-lg navbar-gray bg-color fixed-top ">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="./logo.png" className='round_logo' alt="logo" height="70"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
    </button>


  

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" >
          <a class="nav-link " aria-current="page" href="#home">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">SERVICES</a>
        </li>

        <li class="nav-item">
          <a class="nav-link "  href="#about">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">CONTACT US</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
{/*navbar test */}
<br/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>




{/* footer start*/}
    <footer>
        <div class="footer-top">
            <div class="container">
               
                <div class="row">
                    <div class="col-lg-4">
                        
                        <h4>More About us</h4>
                        <p>Value-Added Services (VAS) are performed to meet customer demands. These can be activities performed 
                           on a product before the product is delivered to the customer or a provided service that is performed 
                           at the customer site. VAS is performed in the warehouse on an ad hoc basis. </p>

                    </div>

                    <div class="col-md-4">
                        <h4>More Information</h4>
                        <ul class="address1">
                            <li><i class="fa fa-map-marker"></i>P.O. Box 11111 Khartoum Sudan , Obied Khatim Street </li>
                            <li><i class="fa fa-envelope"></i><a href="mailto:#">ALBATROS@albatros.sd</a></li>
                            <li><i class="fa fa-mobile" aria-hidden="true"></i> <a href="tel:(+249) 9125 07 191">(+249) 9125 07 191</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h4>Follow us</h4>
                        <ul class="social-icon">
                            <li><a href="https://www.facebook.com/Abdehwahab2020" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="https://wa.link/fp8bwq" target="_blank"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                            <li><a href="https://twitter.com/intent/tweet?text=https%3A//twitter.com/AbdelwahabAdam8" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5">
                        <p class="copyright text-uppercase">Copyright © ALBATROS Co.ltd
                         
                        </p>
                        
                    </div>
                    <div class="col-sm-7">
                        <ul >
                           <li class="nav-item "><a  className='below_navbar' href="#home">HOME</a></li>
                           <li class="nav-item "><a   className='below_navbar' href="#services">SERVICES</a></li>
                           <li class="nav-item "><a   className='below_navbar' href="#about">ABOUT US</a></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

{/* footer end*/}

    </div>
  )

  
}
  
export default Layout;