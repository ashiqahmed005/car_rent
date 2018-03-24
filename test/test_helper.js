const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/car_rent')
before((done) =>{
    mongoose.connection
        .once('open', () => done())
        .on('error',(error) => {
            console.error('error happening here', error)
        });
})

beforeEach((done) =>{
    mongoose.connection.collections.fuel_options.drop(function(){
        done();
    });
});