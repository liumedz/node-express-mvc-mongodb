
/*
 * WebApi.
 */

module.exports = function(app, services){

    app.get('/data', function(req, res){
        if(services !== undefined){
            res.send("Jee " + services.getData(5, 3));
        }
    });

};

