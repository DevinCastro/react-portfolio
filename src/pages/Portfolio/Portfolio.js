import React from 'react'
import Project from '../../components/Project'
import { Container } from 'reactstrap';
import busks from '../../photos/busks.png'
import budget from '../../photos/budget.png'
import fitness from '../../photos/fitness.png'
import portfolio from '../../photos/portfolio.png'
import notetaker from '../../photos/notetaker.png'
import pokemonImg from '../../photos/pokemonImg.png'

const Portfolio = () => {
  return (
    <>
      <Container>

        <h1 className="myWork">My Work</h1>
        <Project
          name={'Busks in Town'}
          technology={'This application uses node and express to set up the server and utilizes a mySQL database. '}
          description={'Busks in town allows a user to create an artist account filled with their photo, bio, genre, bio, and social media links.  Then that artist can create upcoming concerts and post when and where those concerts will be held!'}
          link={'https://guarded-crag-60613.herokuapp.com/'}
          repo={'https://github.com/datrimboli/BusksInTown'}
          image={busks}

        />

        <Project
          name={'Fitness Tracker'}
          technology={'This full stack application uses, node.js and express to create the server. We are using mongoDB and mongoose for our database. The application is deployed with heroku.'}
          description={'This application allows a user to log their workouts everyday. They can create new workouts and add which exercises they include in that workout. They can pick up a workout where they left off, and lastly they can view their stats from all of the previous workouts organized by some graphs and pie charts.'}
          link={'https://thawing-bayou-03032.herokuapp.com/'}
          repo={'https://github.com/DevinCastro/workout-tracker'}
          image={fitness}

        />

        <Project
          name={'Online - offline budget tracker'}
          technology={'This full stack application uses, node.js and express to create the server. We are using mongoDB and mongoose for our database. We also use a manifest.json file, a service-worker, and an indexDB file to allow us to cache all our data and use the application offline.'}
          description={'This application allows a user to log and track their expensives. This is also a progressive web application and still mantains functionality if you are using it offline.'}
          link={'https://glacial-bastion-76923.herokuapp.com/'}
          repo={'https://github.com/DevinCastro/Online-offline-budget-tracker'}
          image={budget}

        />

        <Project
          name={'React Portfolio'}
          technology={'This is a React application.'}
          description={'This is the current application you are looking at right now.  Using react to render everything on the front end and reactstrap to sytle everything'}
          link={'http://DevinCastro.github.io/react-portfolio'}
          repo={'https://github.com/DevinCastro/react-portfolio'}
          image={portfolio}

        />

        <Project
          name={'Note Taker'}
          technology={'This application uses an express server and Node.'}
          description={'This is a simple note taking application. The User can add any number of notes organized by a title and save it. They can view previously written notes and then they can delete them.'}
          link={'https://desolate-ravine-80676.herokuapp.com/'}
          repo={'https://github.com/DevinCastro/note-taker'}
          image={notetaker}

        />


        <Project
          name={'Poke Project'}
          technology={'This is a purely front end web application.'}
          description={'This application allows a user to find pokemon data based on the search of any pokemon name.  Then the user can find pokemon cards based on a name or type search.  Lastly we are able to play a pokemon trivia where you guess the name of a hidden pokemon.'}
          link={'https://kalynbsimms.github.io/pokeProject/'}
          repo={'https://github.com/Kalynbsimms/pokeProject'}
          image={pokemonImg}

        />



      </Container>
    </>
  )
}

export default Portfolio
