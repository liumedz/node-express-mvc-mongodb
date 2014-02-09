
/*
 * Bussiness services.
 */


module.exports = function(mongoose){

    models = require('../models/person')(mongoose);

    function getPersons(callback){
        models.Person.find({}, function(err, persons){
            callback(persons);
        });
    }

    function createPerson(firstName, lastName, callback){
        var person = new models.Person({
            FirstName: firstName,
            LastName: lastName
        });
        person.save(callback);
    }

    return {
        getPersons: getPersons,
        createPerson: createPerson
    }
};