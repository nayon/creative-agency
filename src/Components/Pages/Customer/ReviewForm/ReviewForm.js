import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { userContext } from "../../../../App";


const ReviewForm = () => {
    const { value1 } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const { photo } = loggedInUser;
    // console.log(photo);

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const review = { data: data, photo:photo }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('You have send your review successfully')
                history.push('/home')
            }
        })
       
    }
    return (
        <div className="form-body pt-5">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    className='field-input'
                    name="name"
                    defaultValue={loggedInUser.name}
                    ref={register({ required: true })}
                    placeholder="Your name" />
                    {errors.name && <span className='error'> Name is required</span>}
                    <br />


                <input
                    className='field-input' 
                    name="companyName"
                    ref={register({ required: true })} placeholder="Company's name, designation" /> 
                    {errors.companyName && <span className='error'> This is required</span>}
                    <br />
                
                <textarea
                    className='field-input'
                    rows="5"
                    name="details"
                    ref={register({ required: true })}
                    placeholder='Details' /> 
                    {errors.details && <span className='error'>This field is required</span>}
                    <br />

                <input className='btn-brand' type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default ReviewForm;