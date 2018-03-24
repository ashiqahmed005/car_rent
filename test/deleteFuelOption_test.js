const assert  = require('assert');
//const Fuel_Option = require('../src/fuel_optionModel');
const Fuel_Option = require('../models/fuel_optionModel.js');
describe('Delete fuel_option record test', () => {
    let fuel;
    beforeEach((done) => {
        fuel = new Fuel_Option({description: 'Full Tank Fill'});
        fuel.save()
            .then(() => done())
    });


    it('Remove method on Department class', (done) => {
        Fuel_Option.remove({description: 'Full Tank Fill'})
            .then(() => {
                Fuel_Option.findOne({description: 'Full Tank Fill'})
            }).then((fuel_option) =>{
                console.log(fuel_option)
               assert(fuel_option === undefined)
                done();
            });

    });
});