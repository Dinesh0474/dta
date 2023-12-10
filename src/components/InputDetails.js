import React,{useState} from 'react'
import "../index.css";

const InputDetails = () => {

const [name,setName] = useState('');
const [dob,setDob] = useState('');
const [salary,setSalary] = useState('');
const [designation,setDesignation] = useState('');
const [dept,setDept] = useState('');
const [doj,setDoj] = useState('');
const [address,setAddress] = useState('');


const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const formData = {
            _name:name,
            _salary:salary,
            _dob:dob,
            _address:address,
            _doj:doj,
            _dept:dept,
            _designation:designation,
        };
        const response = await fetch("http://localhost:5000/create",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(formData),
        });
        console.log(response);    
    } catch(err){
        console.error(err)
    }
};

  return (
    <>
    <h1 className='inputHeader'>Employee Details</h1>
    <form className='form'>
        <div>
        <label className='label'>
            Employee Name  
            <input id="input-form"
                autoFocus
                placeholder='Enter Name'
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </label>
        <label className='label' >
            Employee DOB
            <input id="input-form"
                placeholder='Enter DOB'
                required
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
            />
        </label>
        </div>
        <div>
            <label className='label'>
                Employee Salary
                <input id="input-form"
                    placeholder='Enter salary'
                    required
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
            </label>
            <label className='label'>
                Employee Dept
                <input id="input-form"
                    placeholder='Enter Department'
                    required
                    type="text"
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                />
            </label>
        </div>
        <div>
            <label className='label'>
                Employee Designation
                <input id="input-form"
                    placeholder='Enter Designation'
                    required
                    type="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                />
            </label>
            <label className='label'>
                Employee Address
                <input id="input-form"
                    placeholder='Enter Address'
                    required
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
        </div>
       
    
        
        
       
        <label className="label">
            Employee DOJ
            <input 
                placeholder='Enter Date of Joining'
                required
                type="number"
                value={doj}
                onChange={(e) => setDoj(e.target.value)}
            />
        </label>
        <button type="submit"
        onClick={handleSubmit} className='submit'>Submit</button>
    </form>
    
    
    </>
  )
}

export default InputDetails