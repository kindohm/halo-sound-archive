"use strict";

(function(exports, SoundBus){

  function WeaponSound(weaponName, gameTitle) {
    var self = this;
    self.game = gameTitle;
    self.weaponName = weaponName;
    self.play = function(){
      SoundBus.playSound(self.game, self.weaponName)

    };
  }

  exports.WeaponSound = WeaponSound;


})(this, this.SoundBus);