import './App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img2 from './images/img2.png';
import img1 from './images/img1.jpg';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        <Navbar className="bg-body-tertiary" style={{ backgroundColor: isDarkTheme ? "black" : "white", color: isDarkTheme ? "white" : "black", height: "40px", position: "fixed", top: "0", width: "100%" }}>
          <Container>
            <Navbar.Brand style={{ fontSize: "26px", padding: "20px", color: isDarkTheme ? "white" : "black" }}>Portfolio</Navbar.Brand>
            <Navbar.Brand href="#home" style={{ fontSize: "24px", padding: "20px 10px 20px 700px", color: isDarkTheme ? "white" : "black", textDecoration: "none" }}>Home</Navbar.Brand>
            <Navbar.Brand href="#about" style={{ fontSize: "24px", padding: "20px 10px 20px 30px", color: isDarkTheme ? "white" : "black", textDecoration: "none" }}>About Us</Navbar.Brand>
            <Navbar.Brand href="#contact" style={{ fontSize: "24px", padding: "20px 10px 20px 30px", color: isDarkTheme ? "white" : "black", textDecoration: "none" }}>Contact</Navbar.Brand>
            <button style={{ backgroundColor: "transparent", border: "0", paddingRight: "20px" }} onClick={toggleTheme}>
              <i className="fa-solid fa-circle-half-stroke" style={{ color: isDarkTheme ? "white" : "black" }}></i>
            </button>
          </Container>
        </Navbar>

        <div style={{ display: "flex" }}>
          <div style={{ backgroundColor: isDarkTheme ? "black" : "white", width: "20%", height: "1000px" }}></div>
          <div className="profile">
            <img src={img2} className="image" style={{ height: "1000px" }} />
          </div>
          <div style={{ backgroundColor: isDarkTheme ? "black" : "white", width: "20%", height: "1000px" }}></div>
        </div>

        <div className="profile_details">
          <div className="about">
            <h1 style={{ color: isDarkTheme ? "white" : "black" }}>ABOUT</h1>
            <p>Shraddha Kapoor (born 3 March 1987)[1] is an Indian actress who primarily works in Hindi films. One of India's highest-paid actresses, Kapoor has been featured in Forbes India's Celebrity 100 list since 2014 and was featured by Forbes Asia in their 30 Under 30 list of 2016.The daughter of actor Shakti Kapoor, she began her acting career with a brief role in the 2010 heist film Teen Patti, and followed it with her first leading role in the teen drama Luv Ka The End (2011). Kapoor had her breakthrough playing a singer in the commercially successful romantic musical Aashiqui 2 (2013), for which she received a nomination for the Filmfare Award for Best Actress. The following year, she portrayed a character based on Ophelia in Vishal Bhardwaj's acclaimed drama Haider (2014).</p>
          </div>
          <div className="pic">
            <img src={img1} alt="" style={{ height: "500px" }} />
          </div>
        </div>

        <div className="job_catogery">
          <div className="acting">
            <h3 style={{ color: isDarkTheme ? "white" : "black" }}>ACTING</h3>
            <p>Shraddha Kapoor has captured hearts with her versatile acting across various genres. From intense drama to light-hearted romance, she brings depth and authenticity to her characters. Whether it's portraying a strong, independent woman or someone vulnerable and emotional, Shraddha’s performances are always engaging and memorable. Her ability to connect with the audience through her expressions and sincerity makes her one of the most talented and beloved actors in the industry today.</p>
          </div>
          <div className="Modeling">
            <h3 style={{ color: isDarkTheme ? "white" : "black" }}>MODELING</h3>
            <p>Shraddha Kapoor is not just known for her acting but also for her captivating presence in the modeling world. With her striking looks, elegant style, and effortless grace, she has become a fashion icon. Shraddha's ability to carry diverse fashion trends, from traditional Indian wear to contemporary chic, highlights her versatility as a model. Her poise, charm, and confidence make her a favorite choice for top designers and brands, adding to her multifaceted appeal.</p>
          </div>
          <div className="Ads">
            <h3 style={{ color: isDarkTheme ? "white" : "black" }}>ADS</h3>
            <p>Known for her natural beauty and authentic personality, she has been the brand ambassador for various top-tier brands. Whether endorsing beauty products, fashion labels, or lifestyle brands, Shraddha's presence brings a fresh and engaging appeal to every advertisement. Her ability to connect with audiences on-screen makes her an ideal choice for brands looking to inspire trust and build strong connections.</p>
          </div>
        </div>

        <MDBFooter className="text-center text-white" style={{ backgroundColor: isDarkTheme ? "#1b2021" : "#e1e1e1" }}>
          <MDBContainer className="p-4 pb-0">
            <section className="mb-4">
              <MDBBtn outline color={isDarkTheme ? "light" : "dark"} floating className="m-1" href="#!" role="button">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>
              <MDBBtn outline color={isDarkTheme ? "light" : "dark"} floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color={isDarkTheme ? "light" : "dark"} floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color={isDarkTheme ? "light" : "dark"} floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color={isDarkTheme ? "light" : "dark"} floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color={isDarkTheme ? "light" : "dark"} floating className="m-1" href="#!" role="button">
            <MDBIcon fab icon='github' />
          </MDBBtn>
            </section>
          </MDBContainer>
          <div className="text-center p-3" style={{ backgroundColor: isDarkTheme ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)' ,color:isDarkTheme ? 'white' : 'black'}}>
            © 2020 Copyright:
            <a href="https://mdbootstrap.com/" style={{color:isDarkTheme ? 'white' : 'black'}}>MDBootstrap.com</a>
          </div>
        </MDBFooter>
      </div>
    </>
  );
}

export default App;
