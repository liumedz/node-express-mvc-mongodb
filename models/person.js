module.exports = function(mongoose){

    var PersonSchema = new mongoose.Schema({
        FirstName:  { type: String},
        LastName: { type: String}
    });

    Person = mongoose.model('Person', PersonSchema);

    return {
        Person: Person
    }
};
