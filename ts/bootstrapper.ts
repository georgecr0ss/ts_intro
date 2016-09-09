/// <reference path="vendingMachine.ts" />
/// <reference path="typings/knockout.d.ts" />


var machine = new VendigMacihne();
machine.size = VendigMacihneSize.medium;
ko.applyBindings(machine);