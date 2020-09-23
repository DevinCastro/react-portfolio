import React from 'react'
import Card from '../../components/Card'
import { Container } from 'reactstrap';

const Portfolio = () => {
  return (
    <>
      <Container>

        <h1>This is the Portfolio page</h1>
        <Card
          name={'Busks in Town'}
          technology={'This application uses node and express to set up the server and utilizes a mySQL database. '}
          description={'Busks in town allows a user to create an artist account filled with their photo, bio, genre, bio, and social media links.  Then that artist can create upcoming concerts and post when and where those concerts will be held!'}
          link={'https://guarded-crag-60613.herokuapp.com/'}

        />

        <Card
          name={'Fitness Tracker'}
          technology={'This full stack application uses, node.js and express to create the server. We are using mongoDB and mongoose for our database. The application is deployed with heroku.'}
          description={'This application allows a user to log their workouts everyday. They can create new workouts and add which exercises they include in that workout. They can pick up a workout where they left off, and lastly they can view their stats from all of the previous workouts organized by some graphs and pie charts.'}
          link={'https://thawing-bayou-03032.herokuapp.com/'}

        />

        <Card
          name={'Online - offline budget tracker'}
          technology={'This full stack application uses, node.js and express to create the server. We are using mongoDB and mongoose for our database. We also use a manifest.json file, a service-worker, and an indexDB file to allow us to cache all our data and use the application offline.'}
          description={'This application allows a user to log and track their expensives. This is also a progressive web application and still mantains functionality if you are using it offline.'}
          link={'https://glacial-bastion-76923.herokuapp.com/'}

        />

        <Card
          name={'React Portfolio'}
          technology={'This is a React application.'}
          description={'This is the current application you are looking at right now.  Using react to render everything on the front end and reactstrap to sytle everything'}
          link={''}

        />

        <Card
          name={'Note Taker'}
          technology={'This application uses an express server and Node.'}
          description={'This is a simple note taking application. The User can add any number of notes organized by a title and save it. They can view previously written notes and then they can delete them.'}
          link={'https://desolate-ravine-80676.herokuapp.com/'}

        />


        <Card
          name={'Poke Project'}
          technology={'This is a purely front end web application.'}
          description={''}
          link={''}

        />



      </Container>
    </>
  )
}

export default Portfolio
