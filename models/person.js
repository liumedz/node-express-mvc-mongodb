module.exports = function(mongoose){

    var PeopleSchema = new mongoose.Schema({
        FirstName:  { type: String},
        LastName: { type: String}
    });

    People = mongoose.model('People', PeopleSchema);

    return {
        People: People
    }
};
