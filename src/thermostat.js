'use strict';

function Thermostat() {
  this.MAXIMUM_TEMPERATURE = 32;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMP_PS = 25;
  this.temperature = 20;
  this.powerSave = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.powerSave === false) {
    return this.temperature === this.MAXIMUM_TEMPERATURE;
  }
  return this.temperature === this.MAX_TEMP_PS;
};

Thermostat.prototype.powerSavingModeOff = function() {
  this.powerSave = false
};

Thermostat.prototype.powerSavingModeOn = function() {
  this.powerSave = true
};
