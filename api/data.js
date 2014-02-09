
/*
 * WebApi.
 */

module.exports = function(app, services){

    app.post('/person/create', function(req, res){

        services.createPerson(req.body.firstname, req.body.lastname, function(err){
            if(err){
                console.log(err);
                res.send(400);

            }
            console.log('Person was created');
            res.redirect('person/index');
        });

    });
};

