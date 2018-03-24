const assert  = require('assert');
//const Fuel_Option = require('../src/fuel_optionModel');
const Fuel_Option = require('../models/fuel_optionModel.js');
describe('creating fuel_option record test', () => {
    it('save a fuel option', (done) =>{
        let option = new Fuel_Option({description: 'Full Tank Fill'});
        //console.log(IT);
        option.save()
            .then(() =>{
                assert(!option.isNew);
                done();
            })
    })
});