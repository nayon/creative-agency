import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdminForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/adminEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Added email successfully');
            }
        })
        document.getElementById('email').reset();
    }
    return (
        <div className="form-body pt-5">
        <form id="email" style={{borderRadius:'15px', padding:'20px 0 100px 50px'}} className='bg-white w-75' onSubmit={handleSubmit(onSubmit)}>
            <h6>Email</h6>
          <div className="row">
          <input
                style={{width:'60%', marginLeft:'10px', marginRight:'10px'}}
                className='form-control'
                name="email"
                ref={register({ required: true })}
                placeholder="john@gmail.com" /> <br />
            {errors.email && <span className='error'>Name is required</span>}
            <input className='btn btn-success px-4' type="submit" value="Submit" />
          </div>
        </form>
    </div>
    );
};

export default MakeAdminForm;