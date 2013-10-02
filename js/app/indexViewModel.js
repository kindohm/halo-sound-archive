"use strict";

(function(exports, ko, $, Weapon, SoundBus){

  function IndexViewModel() {
    var self = this;
    self.weapons = ko.observableArray([]);
    self.filteredWeapons = ko.observableArray();
    self.showHuman = ko.observable(true);
    self.showCovenant = ko.observable(true);
    self.showForerunner = ko.observable(true);
    self.weapons(getWeapons());
    self.soundBus = SoundBus;
    self.filteredWeapons = ko.computed(function(){
      return ko.utils.arrayFilter(self.weapons(), function(item) {
        return (self.showHuman() && item.isHuman())
          || (self.showCovenant() && item.isCovenant())
          || (self.showForerunner() && item.isForerunner());
      });
    });

  }

  function getWeapons(){
    var human = 'Human';
    var cov = 'Covenant';
    var fore = 'Forerunner';
    var weapons = [];
    weapons.push(new Weapon('Magnum', human, true, true, true, true, true));
    weapons.push(new Weapon('Assault Rifle', human, true, true, true, false, true));
    weapons.push(new Weapon('Battle Rifle', human, true, false, true, true, false));
    weapons.push(new Weapon('Rocket Launcher', human, true, true, true, true, true));
    weapons.push(new Weapon('Beam Rifle', human, true, false, true, false, false));
    weapons.push(new Weapon('Grenade Launcher', human, false, true, false, false, false));
    weapons.push(new Weapon('Bolt Shot', fore, false, false, true, false, false));
    weapons.push(new Weapon('Bolt Shot Charged', fore, false, false, true, false, false));
    weapons.push(new Weapon('Brute Shot', cov, true, false, false, true, false));
    weapons.push(new Weapon('Concussion Rifle', cov, false, true, true, false, false));
    weapons.push(new Weapon('DMR', human, false, true, true, false, false));
    weapons.push(new Weapon('Fire Grenade', cov, true, false, false, false, false));
    weapons.push(new Weapon('Frag Grenade', human, true, true, true, true, true));
    weapons.push(new Weapon('Plasma Grenade', cov, true, true, true, true, true));
    weapons.push(new Weapon('Fuel Rod Gun', cov, false, true, true, false, false));
    weapons.push(new Weapon('Hammer', cov, true, true, true, false, false));
    weapons.push(new Weapon('Incinerator Cannon', fore, false, false, true, false, false));
    weapons.push(new Weapon('Light Rifle', fore, false, false, true, false, false));
    weapons.push(new Weapon('Machine Gun Turret', human, true, true, true, true, false));
    weapons.push(new Weapon('Focus Rifle', cov, false, true, false, false, false));
    weapons.push(new Weapon('Missle Pod', human, true, false, false, false, false));
    weapons.push(new Weapon('Needler', cov, true, true, true, true, true));
    weapons.push(new Weapon('Needle Rifle', cov, false, true, false, false, false));
    weapons.push(new Weapon('Plasma Pistol', cov, true, true, true, true, true));
    weapons.push(new Weapon('Plasma Pistol Charged', cov, true, true, true, true, true));
    weapons.push(new Weapon('Plasma Repeater', cov, false, true, false, false, false));
    weapons.push(new Weapon('Plasma Rifle', cov, false, true, false, true, true));
    weapons.push(new Weapon('Plasma Turret', cov, false, true, true, false, false));
    weapons.push(new Weapon('Pulse Grenade', fore, false, false, true, false, false));
    weapons.push(new Weapon('Rail Gun', human, false, false, true, false, false));
    weapons.push(new Weapon('Saw', human, false, false, true, false, false));
    weapons.push(new Weapon('Scattershot', fore, false, false, true, false, false));
    weapons.push(new Weapon('Sentinel Beam', fore, true, false, false, true, false));
    weapons.push(new Weapon('Shotgun', human, true, true, true, true, true));
    weapons.push(new Weapon('SMG', human, true, false, false, true, false));
    weapons.push(new Weapon('Sniper Rifle', human, true, true, true, true, true));
    weapons.push(new Weapon('Spartan Laser', human, true, true, true, false, false));
    weapons.push(new Weapon('Spike Grenade', cov, true, false, false, false, false));
    weapons.push(new Weapon('Spiker', true, true, false, false, false));
    weapons.push(new Weapon('Sticky Detonator', human, false, false, true, false, false));
    weapons.push(new Weapon('Storm Rifle', cov, false, false, true, false, false));
    weapons.push(new Weapon('Suppressor', fore, false, false, true, false, false));
    weapons.push(new Weapon('Sword', cov, true, true, true, true, false));
    return weapons;
  }

  ko.applyBindings(new IndexViewModel());


})(this, this.ko, this.jQuery, this.Weapon, this.SoundBus);