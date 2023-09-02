import React, { useRef, useState } from 'react'
import '../styles/home.css'
import TenzinTenkyongResume from '../public/TenzinTenkyongResume.pdf'
import TenzinResume from '../public/TenzinResume.pdf'
import emailjs from '@emailjs/browser';

const Home = () => {

  const [showContactForm, setShowContactForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qigqb4c', 'template_6z0ywdx', form.current, 'Rvy3D87jWtgL53MtZ')
      .then((result) => {
        console.log(result.text);
        setShowContactForm(false);
        setShowThankYou(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactForm((prevShowContactForm) => !prevShowContactForm);;
    setShowThankYou(false);
  };
 
  return (
    <div className='home'>
      <div className='intro'>
        <h1 className='name'>TENZIN TENKYONG</h1>
        <div>
          <p style={{ fontWeight:200, color:'grey'}}>Full-Stack Web Developer</p>
          <p style={{ fontWeight:200, color:'grey'}}>JavaScript | React | Ruby | Ruby on Rails</p>
          <div className='prompt'>
            <a href="https://www.linkedin.com/in/tenzintenkyong/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
              <p>LINKEDIN</p>
            </a>
            <a href="https://github.com/tkyg" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-github"></i>
              <p>GITHUB</p>
            </a>
            <a href="https://medium.com/@ttenkyong" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-medium"></i>
              <p>MEDIUM</p>
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className='aboutme'>
          <div>
            <h1>ABOUT ME</h1>
            <br/>
            <h3>Hi, I'm Tenzin!</h3>
            <br/>
            <p>I'm a passionate Full Stack Web Developer specializing in JavaScript, React, Ruby, and Ruby on Rails. With over 525 hours of hands-on experience from Flatiron School, I bring a wealth of technical expertise to the table.</p>
            <br/>
            <p>Driven by a desire for continuous growth and staying ahead of industry trends, I'm committed to delivering impactful results through my strong work ethic, attention to detail, and problem-solving abilities. My goal is to provide high-quality solutions that meet the needs of clients and end-users.</p>
            <br/>
            <p>Let's connect and explore how we can collaborate to create innovative and engaging web applications. I'm excited to embark on this journey together.</p>
            <br/>
            <a href={TenzinTenkyongResume} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "black"}}>View Résumé <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1 className='skills'>SKILLS</h1>
          <br/>
          <ol className='list'>
            <li className='item'>
              <h2>PROGRAMMING LANGUAGES</h2>
              <span>
                JavaScript, Ruby, HTML, CSS
              </span>
            </li>
            <br/>
            <li className='item'>
              <h2>LIBRARIES AND FRAMEWORKS</h2>
              <span>
                ReactJS, Redux, Thunk, Ruby on Rails, ActiveRecord, StyledComponents
              </span>
            </li>
            <br/>
            <li className='item'>
              <h2>TOOLS AND PLATFORM</h2>
              <span>
                Postman, SQLite, Postgres, Bcrypt, GitHub
              </span>
            </li>
            <br/>
            <li className='item'>
              <h2>ADDITIONAL LANGUAGES</h2>
              <span>
                Tibetan, Hindi, Nepali
              </span>
            </li>
            <br/>
          </ol>
        </div>
      </section>

      <div>
        {!showThankYou && (
          <div className='contact-me'>
            <p onClick={handleContactClick}>
            CONTACT ME
            <i className="fa fa-envelope"></i>
            </p>
            {showContactForm && (
              <form ref={form} onSubmit={sendEmail}>
                <label htmlFor='user_name'>Name</label>
                <input type="text" id="user_name" name="user_name" />
                <label htmlFor='user_email'>Email</label>
                <input type="email" id="user_email" name="user_email" />
                <label htmlFor='message'>Message</label>
                <textarea id="message" name="message" />
                <input type="submit" value="Send" />
              </form>
            )}
          </div>
        )}
        {showThankYou && <p>Thank you for your message!</p> }
      </div>

    </div>
  )
}

export default Home