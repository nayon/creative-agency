import React, { useState } from 'react';

const Status = () => {
    const [status, setStatus] = useState([]);

    const handleSelectChange = (e) => {
        let elem = document.getElementById("inlineFormCustomSelect"),
        selectedNode = elem.options[elem.selectedIndex];
        // console.log(selectedNode.value);
        // const newStatus = e.options[e.selectedIndex].text;
        // setStatus(newStatus);
        setStatus(selectedNode.value);
       
    }


    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('value', status.text);

        fetch('http://localhost:5000/status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('done')
            }
        })
    }
console.log(status);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-row align-items-center">
                    <div style={{ width: '120px' }} class="col-auto my-1">
                        <select onChange={handleSelectChange} class="custom-select mr-sm-2 " id="inlineFormCustomSelect">
                            <option className="bg-success text-white " value="1">Choose</option>
                            <option className="bg-success text-white " value="Done">Done</option>
                            <option className="bg-warning text-white" value="Ongoing">Ongoing</option>
                            <option className="bg-danger text-white" value="Pending">Pending</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Status;