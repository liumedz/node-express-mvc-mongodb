
/*
 * GET people.
 */

module.exports = function(services){

    index = function(req, res){
        services.getPersons(function(persons){
            res.render("person/index", {title: 'Persons', persons: persons});
        });
    };

    create = function(req, res){

        if(req.method === 'POST'){
            services.createPerson({FirstName: req.body.firstname, LastName: req.body.lastname}, function(err){
                if(err){
                    console.log(err);
                    res.send(400);

                }
                console.log('Person was created');
                res.redirect('person/index');
            });
        }
        else{
            res.render("person/create", {title: 'Create person'});
        }

    };

    edit = function(req, res){

        if(req.method === 'PUT'){
            services.editPerson(req.params.id, {FirstName: req.body.firstname, LastName: req.body.lastname}, function(err){
                    if(err){
                        console.log(err);
                    }
                    res.redirect('person/index');
                }
            );
        }
        else{
            services.getPerson(req.params.id, function(person){
                    res.render("person/edit", {title: 'Edit person', person: person});
                }
            );
        }
    };

    del = function(req, res){

        if(req.method === 'DELETE'){
            services.deletePerson(req.params.id, function(err){
                    if(err){
                        console.log(err);
                    }
                    res.redirect('person/index');
                }
            );
        }
        else{
            services.getPerson(req.params.id, function(person){
                    res.render("person/delete", {title: 'Delete person', person: person});
                }
            );
        }

    };

    return{
         index: index
        ,create: create
        ,edit: edit
        ,delete: del
    }
};