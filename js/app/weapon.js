"use strict";

(function(exports, ko, WeaponSound){

  function Weapon(name, species, halo3, haloReach, halo4, halo2, haloce) {
    var self = this;
    self.name = name;
    self.species = species;
    self.sounds = [];

    if (haloce) self.sounds.push(new WeaponSound(self.name, 'Halo CE'));
    if (halo2) self.sounds.push(new WeaponSound(self.name, 'Halo 2'));
    if (halo3) self.sounds.push(new WeaponSound(self.name, 'Halo 3'));
    if (haloReach) self.sounds.push(new WeaponSound(self.name, 'Halo Reach'));
    if (halo4) self.sounds.push(new WeaponSound(self.name, 'Halo 4'));

    self.isHuman = ko.computed(function(){
      return self.species === 'Human';
    });

    self.isCovenant = ko.computed(function(){
      return self.species === 'Covenant';
    });

    self.isForerunner = ko.computed(function(){
      return self.species === 'Forerunner';
    });
  }

  exports.Weapon = Weapon;


})(this, this.ko, this.WeaponSound);