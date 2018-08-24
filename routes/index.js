module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `tbl_Employee` ORDER BY id ASC"; // query database to get all the employees

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome | View Employees"
                ,employees: result
            });
        });
    },
};