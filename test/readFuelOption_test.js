const assert  = require('assert');
//const Fuel_Option = require('../src/fuel_optionModel');
const Fuel_Option = require('../models/fuel_optionModel.js');
describe('Read fuel_option record test', () => {
    let fuel;
    beforeEach((done) => {
        fuel = new Fuel_Option({description: 'Full Tank Fill'});
        fuel.save()
            .then(() => done())
    });


    it('find a particular option', (done) => {
        Fuel_Option.findOne({_id: fuel._id})
            .then((fuel_option) => {
                //console.log(fuel_option);
                assert(fuel_option.description === 'Full Tank Fill');
                done();
            });
    });

    it('find all options', (done) =>{
        Fuel_Option.find({description: 'Full Tank Fill'})
            .then((fuel_options) =>{
                //console.log(departments[0]._id);
                //console.log(IT._id);
                assert(fuel_options[0]._id.toString() === fuel._id.toString());
                done();
            });

    });
});