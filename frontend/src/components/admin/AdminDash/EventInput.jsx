import React from "react";
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import { Form, Button,InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
class MyEventInput extends React.Component {

    componentDidMount(){
        $('#inputdate').datepicker();
    }
    render() {
        return (
            <div>
                <Form className="p-3">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <InputGroup className="mb-2">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Event"
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item href="#">Event</Dropdown.Item>
                                <Dropdown.Item href="#">Meeting</Dropdown.Item>
                            </DropdownButton>
                            <FormControl placeholder="Event or Meeting Name" aria-label="Event or Meeting Name" aria-describedby="basic-addon1" />
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <FormControl
                                placeholder=""  id="inputdate"                          
                            />
                            <InputGroup.Append>
                                <InputGroup.Text><i class="far fa-calendar-alt"></i></InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control placeholder="Enter Description" as="textarea" rows="7" />
                    </Form.Group>
                </Form>
                <Button variant="primary" size="lg" block>POST</Button>
            </div>
        );
    }
} export default MyEventInput;