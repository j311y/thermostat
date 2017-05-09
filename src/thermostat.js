'use strict';

function Thermostat() {
  Thermostat.prototype.temperature = 20
}
Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};
