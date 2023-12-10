// import React, { useState, useEffect } from 'react';
// import "../index.css"
// const TableDetails = () => {
//   const [employees, setEmployees] = useState([]);
//     const fetchData = async () => {
//       try {
//           const response = await fetch("http://localhost:5000/display");
//           const data = await response.json();
//           setEmployees(data)
//           console.log(data)
//           console.log(employees)
//         } 
//        catch (err) {
//         console.error(err);
//       }
//     }
//       useEffect(() =>{
//         fetchData();
//         }, []);
//         console.log(employees,"details")
    
//   return (
//     <>
//       <h1 className='inputHeader'>Employee Details</h1>
//       <button onClick={()=>(console.log(employees))}>
//         dddd
//       </button>
//       <table>
//         <thead>
//           <tr>
//             <th>Employee ID</th>
//             <th>Name</th>
//             <th>Department</th>
//             <th>Designation</th>
//             <th>Salary</th>
//             <th>Date of Birth</th>
//             <th>Address</th>
//             <th>Date of Joining</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr>
//               <td>{employee.employee_id}</td>
//               <td>{employee._name}</td>
//               <td>{employee._dept}</td>
//               <td>{employee._designation}</td>
//               <td>{employee._salary}</td>
//               <td>{employee._dob}</td>
//               <td>{employee._address}</td>
//               <td>{employee._doj}</td>
//             </tr>
//         ))}
//         </tbody>
//       </table>
//     </>
//   );
// };



import React, { useEffect, useState } from "react";
import "../index.css";

 function TableDetails() {
  const [emps, setEmp] = useState([]);
  const getemp = async () => {
    try {
      const response = await fetch("http://localhost:5000/display");
      console.log(response);
      const jsonData = await response.json();
      setEmp(jsonData);
    } catch (error) {}
  };
  useEffect(() => {
    getemp();
  }, []);
  console.log(emps);
  return (
    <>
      <div className="table">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Date of birth</th>
              <th>Salary</th>
              <th>/</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
              <td>john@example.com</td>
            </tr> */}
            {emps.map((emp) => (
              <tr>
                <td>{emp._name}</td>
                <td>{emp._dept}</td>
                <td>{emp._designation}</td>
                <td>{emp._dob}</td>
                <td>{emp._salary}</td>
                <td>{emp._address}</td>
                <td>
                  <button className="del">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableDetails;