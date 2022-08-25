import Form from 'react-bootstrap/Form';
import React from "react";

 class Forms extends React.Component {
    testClick =(ele)=>{
        this.props.testForm(ele.target.value)
    }

    render() {
        return (
            <div>
    <Form className="mb-3">
<Form.Label><h5>Choose the horn you want</h5></Form.Label>
    <Form.Select id="option" onChange ={this.testClick}>
    <option value='0'>Select Number of Horns</option>
    <option value='1'>One Horn</option>
    <option value='2'>Two Horn</option>
    <option value='3'>Three Horns</option>
    <option value='100'>One Hundred Horns</option>
    </Form.Select>
    </Form>
    </div>
    )
    }
}
export default Forms;