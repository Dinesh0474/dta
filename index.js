const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const PORT = 5000;
app.use(cors());
app.use(express.json());


app.post("/create",async (req,res) => {
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

app.get("/display", async (req,res)=>{
    try{
       const allDetails = await pool.query("SELECT * FROM details");
        res.status(200).json(allDetails.rows);
    }catch(err){
        res.status(404).json({ message: "Employee not found" });
    }
})

app.get("/display/:id",async (req,res) => {
    try{
        const {id} =  req.params;
        const e_detail = await pool.query("SELECT * FROM details WHERE employee_id = $1",[id]);
         res.status(200).json(e_detail.rows[0]);
    }catch(err){
        res.status(404).json({ message: "Employee not found" });
    }
})

app.put("/display/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { _name, _dept, _designation, _salary, _dob, _address, _doj } = req.body;

        const checkEmployee = await pool.query("SELECT * FROM details WHERE employee_id = $1", [id]);

        if (checkEmployee.rows.length === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }

    
        const updateDetails = await pool.query(
            "UPDATE details SET _name=$1, _dept=$2, _designation=$3, _salary=$4, _dob=$5, _address=$6, _doj=$7 WHERE employee_id = $8",
            [_name, _dept, _designation, _salary, _dob, _address, _doj, id]
        );

        
        if (updateDetails.rowCount > 0) {
            res.status(200).json({ message: "Details updated successfully" });
        } else {
            res.status(500).json({ message: "Failed to update employee details" });
        }
    } catch (err) {
        console.error("Error updating employee details:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.delete("/delete/:id",async (req,res) => {
    try{
        const {id} = req.params;
        const deleteDetails = await pool.query("DELETE FROM details WHERE employee_id = $1",[id]);
        res.json("Suceesfully deleted").status(200);
    }catch(err){
        console.error("Error Deleting the employee detail",err);
        res.status(404).json({message:"Employee not Found"})
    }

})


app.listen(PORT,() =>{
    console.log(`server running on port number ${PORT}`);
})