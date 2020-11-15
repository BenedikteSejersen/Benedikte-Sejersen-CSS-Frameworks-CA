import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from'react-bootstrap/Button'

export default function ContactForm() {
    return (
        <div className="contact-flex mb-md-5">
                <h1 className="my-5">Submit your details</h1>
                <Form className="contact__form py-md-5">

                    <Form.Group className="my-4">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" required className="contact__input" />
                    </Form.Group>

                    <Form.Group className="my-4">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required className="contact__input" />
                        <Form.Text>
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="my-4">
                    <Form.Label>Website</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend className="d-none d-md-inline-block">
                        <InputGroup.Text id="inputGroupPrepend">https://</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                        type="text"
                        aria-describedby="inputGroupPrepend"
                        required
                        className="contact__input contact__input--website"
                        />
                        <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>

                    <Form.Group className="my-4">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} required className="contact__input" />
                    </Form.Group>

                    <Form.Group>
                        <div className="form__check-container">
                            <Form.Check
                            required
                            label="Allow us to sell your personal details to whomever we want"
                            feedback="You must agree before submitting."
                            />
                            <span className="form__check"></span>
                        </div>
                    </Form.Group>
                    <Button type="submit" className="w-100 py-2 py-md-3 form__submit">Submit</Button>

                </Form>
        </div>
    )
}
