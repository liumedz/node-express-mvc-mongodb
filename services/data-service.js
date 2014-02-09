
/*
 * Bussiness services.
 */


module.exports = function(mongoose){


    models = require('../models/person')(mongoose);

    function createPersonCallback(err){
        if(err){
            return console.log(err);
        }
        return console.log('Person was created');
    }

    function createPerson(){
        var person = new models.Person({
            FirstName: "Liutauras",
            LastName: "Medziunas"
        });
        person.save(createPersonCallback);
    }

    function getData(a, b){
        if(mongoose === undefined){
            return 0;
        }
        createPerson();
        return a + b;
    }

    return {
        getData: getData
    };
};