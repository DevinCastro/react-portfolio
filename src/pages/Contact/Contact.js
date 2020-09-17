import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from 'reactstrap'

const Contact = () => {
  return (
    <Container>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="test" name="name" placeholder="Kenny Yang" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="text" name="message" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
    </Container>
  )
}

export default Contact