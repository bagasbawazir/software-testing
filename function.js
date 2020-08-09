exports.getAll = function(req, res) {
    
    connection.query('SELECT * FROM diagnosa',
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, "Success Get Diagnosa", res)
        }
    });
};

exports.getAllQuestion = function(req, res) {
    
    connection.query('SELECT * FROM pertanyaan',
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, "Success Get Penyakit", res)
        }
    });
};

exports.getById = function(req, res) {
    
    var username = req.params.username
    connection.query('SELECT * FROM diagnosa WHERE username = ?',
    [ username],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, "Success Get Diagnosa", res)
        }
    });
};