'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('turns up the temperature by 1', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
});
