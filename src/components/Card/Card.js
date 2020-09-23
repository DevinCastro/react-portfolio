import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

const Card = props => {
  return (
    <>
      <div>
        <Jumbotron>
          <h1 className="display-3">{[props.name]}</h1>
          <p className="lead">{props.technology}</p>
          <hr className="my-2" />
          <p>{props.description}</p>
          <p className="lead">
            <Button color="primary">
              <a className="deployedLink" href={props.link} target='_blank'>Link to App</a>
            </Button>
          </p>
        </Jumbotron>
      </div>
    </>
  )
}

export default Card