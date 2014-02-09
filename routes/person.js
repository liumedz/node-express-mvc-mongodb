
/*
 * GET people.
 */

module.exports = function(servies){

    index = function(req, res){
        servies.getPersons(function(persons){
            res.render("person/index", {title: 'person', persons: persons});
        });
    };

    create = function(req, res){
        res.render("person/create", {title: 'Create person'});
    };

    edit = function(req, res){
        res.render("person/edit", {title: 'Edit person'});
    };

    del = function(req, res){
        res.render("person/delete", {title: 'Delete person'});
    };

    return{
         index: index
        ,create: create
        ,edit: edit
        ,delete: del
    }
};