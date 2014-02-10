
/*
 * Business services.
 */


module.exports = function(models){

    function getPersons(callback){
        models.Person.find({}, function(err, persons){
            callback(persons);
        });
    }

    function getPerson(id, callback){
        models.Person.findOne({_id: id}, function(err, person){
            callback(person);
        });
    }

    function deletePerson(id, callback){
        models.Person.remove({_id: id}, function(err){
            callback(err);
        });
    }

    function editPerson(id, person, callback){
        models.Person.findOne({_id: id}, function(err, personModel){
            personModel.FirstName = person.FirstName;
            personModel.LastName = person.LastName;
            personModel.save(callback);
        });
    }

    function createPerson(person, callback){
        var personModel = new models.Person({
            FirstName: person.FirstName,
            LastName: person.LastName
        });
        personModel.save(callback);
    }

    return {
        getPersons: getPersons,
        getPerson: getPerson,
        deletePerson: deletePerson,
        createPerson: createPerson,
        editPerson: editPerson
    }
};