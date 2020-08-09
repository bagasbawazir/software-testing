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

exports.insertDiagnosa = function(req, res) {
    
    var username = req.body.username;
    var location = req.body.lokasi;
    var hasil = req.body.hasil;
    var createdAt = Date.now();

    connection.query('INSERT INTO diagnosa (username, hasil,location,createdAt) values (?,?,?,?)',
    [ username,hasil,location,createdAt ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows,"Success add diagnosa!", res)
        }
    });
};

exports.delete = function(req, res) {
    
    var id = req.params.id;

    connection.query('DELETE FROM diagnosa WHERE id = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, "Success delete diagnosa at id : " + id, res)
        }
    });