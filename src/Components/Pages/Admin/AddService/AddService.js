import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo ={...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {

        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
      
        fetch('http://localhost:5000/addService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if(data){
              alert('Service added successfully')
          }
        })
        .catch(error => {
          console.error(error)
        })
        document.getElementById('submitForm').reset();
        e.preventDefault();
    }
    return (
        <main>
            <div className="form-body pt-5 ">

                <form onSubmit={handleSubmit} id="submitForm">
                    <div style={{width:'80%'}} className="row bg-white admin-form p-5">
                        <div className="col-md-5">
                            <h6>Service Title</h6>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" name="title" className="form-control p-3" placeholder="Enter Title" />
                            </div>

                            <h6>Description</h6>
                            <div className="form-group">
                                <textarea onBlur={handleBlur} name="description" className="form-control p-2" rows="5" placeholder="Description"></textarea>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h6>Icon</h6>
                            <div className="form-group">
                                <input onChange={handleFileChange} type="file" className="form-control pb-4" placeholder=" Upload image" />
                            </div>
                        </div>
                    </div>
                    <div className="addServiceBtn"><input className='btn btn-success px-5' type="submit" value="Submit" /></div>
                </form>
            </div>
        </main>
    );
}
export default AddService;