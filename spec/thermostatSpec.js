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

  it('turns down the temperature by 1', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a maximum temperature of 32 when PSM off', function() {
    thermostat.powerSavingModeOff();
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('can turn off power saving mode', function() {
    thermostat.powerSavingModeOff();
    expect(thermostat.powerSave).toBe(false)
  });

  it('can turn on power saving mode', function() {
    thermostat.powerSavingModeOn();
    expect(thermostat.powerSave).toBe(true)
  });

  it('has a max temperature of 25 when PSM on', function() {
    thermostat.powerSavingModeOn();
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('can be reset back to default temperature', function() {
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('shows low energy usage', function() {
    for (var i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.energyUse()).toEqual('low-usage')
  });
  it('shows medium energy usage', function() {
    expect(thermostat.energyUse()).toEqual('medium-usage')
  });
  it('shows high energy usage', function() {
    thermostat.powerSavingModeOff();
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.energyUse()).toEqual('high-usage')
  });
});
