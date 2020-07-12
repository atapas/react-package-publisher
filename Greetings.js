import React, { useState } from 'react';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './component.scss';

const Greetings = () => {
    moment.locale(navigator.languages[0].toLowerCase());
    const [name, setName] = useState();
    const [showGreeting, setShowGreeting] = useState(false);

    const handleClick = () => {
        console.log(name);
        setShowGreeting(true) ;
    }

    return (
        <>
            <h1>Hello There! How are you doing?</h1>
            <Form inline>
                <Form.Label for="nameField" srOnly>
                    Name
                </Form.Label>
                <Form.Control
                    required
                    className="mb-2 mr-sm-2"
                    id="nameField"
                    placeholder="What's your name?"
                    onChange={e => setName(e.target.value)}
                />
                <Button className="mb-2" onClick={() => handleClick()}>
                    Submit
                </Button>
            </Form>
            { showGreeting && <ShowGreeting userName={name} /> }
        </>
    )
};

export default Greetings;