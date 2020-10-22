import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../../../App";
import './OrderForm.css'

const OrderForm = () => {

    const { value1 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value1;

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const orderDetails = { data: data }
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Your order placed successfully')
            }
        })
        document.getElementById('orderForm').reset();
    }

    return (
        <div className="form-body pt-5">
            <form id="orderForm" onSubmit={handleSubmit(onSubmit)}>

                <input
                    className='field-input'
                    name="name"
                    defaultValue={loggedInUser.name}
                    ref={register({ required: true })}
                    placeholder="Your name / company's name" />
                {errors.name && <span className='error'> Name is required</span>}
                <br />


                <input
                    className='field-input' name="email"
                    defaultValue={loggedInUser.email}
                    ref={register({ required: true })} placeholder='Your email' />
                {errors.email && <span className='error'> Email is required</span>}
                <br />


                <input
                    className='field-input'
                    name="title"
                    type="text"
                    ref={register({ required: true })}
                    placeholder='Service title' /> 
                {errors.title && <span className='error'> This fieldis required</span>}
                <br />


                <textarea
                    className='field-input'
                    rows="5"
                    name="details"
                    ref={register({ required: true })}
                    placeholder='Project details' /> 
                {errors.details && <span className='error'> This field is required</span>}
                <br />

                <input
                    className='field-input'
                    name="price"
                    // defaultValue={cardTitle}
                    ref={register({ required: true })}
                    placeholder='price' />
                    {errors.price && <span className='error'> This field is required</span>} <br />

                <input className='btn-brand' type="submit" value="Send" />
            </form>
        </div>
    );
}
export default OrderForm;