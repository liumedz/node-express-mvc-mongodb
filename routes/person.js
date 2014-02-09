
/*
 * GET people.
 */

module.exports = function(servies){

    index = function(req, res){
        servies.getPeople(function(people){
            res.render("people/index", {title: 'people', people: people});
        });
    };

    create = function(req, res){
        res.render("people/create", {title: 'Create people'});
    };

    edit = function(req, res){
        res.render("people/edit", {title: 'Edit people'});
    };

    del = function(req, res){
        res.render("people/delete", {title: 'Delete people'});
    };

    return{
         index: index
        ,create: create
        ,edit: edit
        ,delete: del
    }
};