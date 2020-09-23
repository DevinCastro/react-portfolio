import React from 'react'
import '../../index.css'
import { Button } from 'reactstrap'



const Home = () => {
  return (
    <>
      <section>
        <h1 id="intro">
          Hello, I'm <span className="devincastro">Devin Castro</span> and I am a full-stack web developer.
          <br />
          <Button className='button'>
            <a target="_blank" href="https://www.linkedin.com/in/devin-castro-17a62bba/">
              <img className="logo" src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="linkedin"/>
            </a>
          </Button>
          <Button className='button'>
            <a target="_blank" href="https://github.com/DevinCastro">
              <img className="logo" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" alt="github" />
            </a>
          </Button>
        </h1>
        
      </section>
    </>
  )
}

export default Home
