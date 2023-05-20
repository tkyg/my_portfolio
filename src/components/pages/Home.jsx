import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h1 className='name'>HI, I'M TENZIN</h1>
        <div>
          <p>Full-Stack Web Developer</p>
          <p>JavaScript | React | Ruby | Ruby on Rails</p>
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
      <div>
        <h1>ABOUT ME</h1>
        <p></p>
      </div>
      <div>
        <h1 className='skills'>SKILLS</h1>
        <ol className='list'>
          <li className='item'>
            <h2>LANGUAGES</h2>
            <span>
              JavaScript, Ruby, HTML, CSS
            </span>
          </li>
          <li className='item'>
            <h2>LIBRARIES AND FRAMEWORKS</h2>
            <span>
              ReactJS, Redux, Thunk, Ruby on Rails, ActiveRecord, StyledComponents
            </span>
          </li>
          <li className='item'>
            <h2>TOOLS AND PLATFORM</h2>
            <span>
              Postman, SQLite, Postgres, Bcrypt, GitHub
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home