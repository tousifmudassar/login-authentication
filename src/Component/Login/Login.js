import React from 'react';
import {Container,Row,Col,Form,FormGroup,Label,Input,Button } from 'reactstrap';

const Login = () =>{
    
 return( <Container>
        <Row>
            <Col md={6} className="column">
                <Form>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="text" name="email" id="email" placeholder="Enter Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" >Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter Password" />
                    </FormGroup>
                    <Button className="float-right" color="primary">Login</Button>
                </Form>
            </Col>
        </Row>
    </Container>)
}

export default Login;