const express = require('express');
const router = express.Router();


router.post("/empCreate",async (req,res) => {
    try{
        const {_name} = await req.body;
        const {_dept} = await req.body;
        const {_designation} = await req.body;
        const {_salary} =  await req.body;
        const {_dob} = await  req.body;
        const {_address} = await req.body;
        const {_doj } = await req.body;
        const newdetails = await pool.query("INSERT INTO details (_name,_dept,_designation,_salary,_dob,_address,_doj) VALUES($1,$2,$3,$4,$5,$6,$7)",[_name,_dept,_designation,_salary,_dob,_address,_doj]);
        res.status(200).json(newdetails);
    }catch(err){
        res.status(404).json({ message: "Employee not found" });
    }
})


module.exports=  router;