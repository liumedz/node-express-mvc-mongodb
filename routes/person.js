
/*
 * GET person.
 */

module.exports = function(){

    index = function(req, res){
        res.render("person/index", {title: 'Persons'});
    };

    create = function(req, res){
        res.render("person/index", {title: 'Create Person'});
    };

    edit = function(req, res){
        res.render("person/index", {title: 'Edit Person'});
    };

    del = function(req, res){
        res.render("person/index", {title: 'Delete Person'});
    };

    return{
         index: index
        ,create: create
        ,edit: edit
        ,delete: del
    }
};