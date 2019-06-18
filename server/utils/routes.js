const Dashboards = require('../controllers/dashboards');

module.exports = function(app){
    app.get('/', Dashboards.index);
    app.get('/animals/:_id', Dashboards.single);
    app.post('/create', Dashboards.create);
    app.get('/new', Dashboards.new);
    app.get('/animals/edit/:_id', Dashboards.edit);
    app.post('/update/:_id', Dashboards.update);
    app.get('/animals/destroy/:_id', Dashboards.destroy);
}