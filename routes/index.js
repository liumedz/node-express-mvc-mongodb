
/*
 * GET home page.
 */

module.exports = function(){

    index = function(req, res){
        res.render('index', { title: 'Express' });
    };

    return{
        index: index
    }
}

