
module.exports = {
    addEmployeePage: (req, res) => {
        res.render('add-employee.ejs', {
            title: "Welcome | Add a new Employee"
            ,message: ''
        });
    },
    addEmployee: (req, res) => {
        let message = '';
		console.log(req);
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let designation = req.body.designation;
        let email = req.body.email;
        let phone = req.body.phone;
	    
		let query = "INSERT INTO `tbl_Employee` (`first_name`, `last_name`, `designation`, `email`, `phone`) VALUES ('" +
                            first_name + "', '" + last_name + "', '" + designation + "', '" + email + "', '" + phone + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });

       
    }
};
