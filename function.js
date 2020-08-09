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

  exports.login = function(req, res) {
    
    var username = req.query.username;
    var password = req.query.password;

    connection.query('SELECT * FROM user where username = ? and password = ?',
    [ username,password ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            if(rows.length>0) {
                response.ok(rows, "Success Login", res)
            }
            else {
                response.failure(rows, "Login Failed", res)
            }
            
        }
    });
};


exports.register = function(req, res) {
    
    var username = req.body.username;
    var fullName = req.body.fullname;
    var password = req.body.password;
    var email = req.body.email;
    var location = req.body.location;
    var createdAt = Date.now();
    var updatedAt = Date.now();
    connection.query('INSERT INTO user (username,fullName, email,password,location,createdAt,updatedAt) values (?,?,?,?,?,?,?)',
    [ username,fullName,email,password,location,createdAt,updatedAt ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, "Success add User!", res)
        }
    });
};

exports.getSympImageId = function(req, res) {
    
    var kode = req.params.kode;
    connection.query("SELECT kodepenyakit, penyakit, gambar, deskripsi, solusi, group_concat(kodegejala) as kodegejala, group_concat(gejala SEPARATOR '--') as namagejala FROM gejalapenyakit gp join penyakit p on gp.kodepenyakit = p.kode join gejala g on gp.kodegejala = g.kode where kodepenyakit = ? group by penyakit", [ kode],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, "Success Get Penyakit dan Gejala", res)
        }
    });
};

exports.getSympbyDisease = function(req, res) {

    var kode = req.params.kode
    connection.query("SELECT kodepenyakit, penyakit, group_concat(kodegejala) as kodegejala, group_concat(gejala SEPARATOR '--') as namagejala FROM gejalapenyakit gp join penyakit p on gp.kodepenyakit = p.kode join gejala g on gp.kodegejala = g.kode where kodepenyakit = ? group by penyakit", [ kode],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, "Success Get Penyakit dan Gejala", res)
        }
    });
};