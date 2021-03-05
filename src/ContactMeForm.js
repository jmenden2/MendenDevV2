import React from 'react';
import { Form, Button } from 'react-bootstrap';

class ContactMeForm extends React.Component {
    render() {
        return (

            <Form className="accent-color2 col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6" style={{padding:"25px", borderRadius:"5px"}}>
                <div style={{width:"90%",marginLeft:"auto", marginRight:"auto"}}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control style={{marginLeft:"auto", marginRight:"auto"}} type="name" placeholder="Enter your Name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{marginLeft:"auto", marginRight:"auto"}} type="email" placeholder="Enter Email" />
                    <Form.Text>
                        I won't share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formNote">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control style={{marginLeft:"auto", marginRight:"auto"}} as="textarea" placeholder="Your Message" />
                </Form.Group>
                <Button variant="submit-button" type="submit">
                    Submit
                </Button>
                </div>
            </Form>


        );
    }
}

export default ContactMeForm;