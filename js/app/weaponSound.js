"use strict";

(function(exports, SoundBus){

  function WeaponSound(weaponName, gameTitle) {
    var self = this;
    self.game = gameTitle;
    self.weaponName = weaponName;
    self.play = function(){
      console.log('playing ' + self.game + ' ' + self.weaponName);
      SoundBus.playSound(self.game, self.weaponName)
    };

    self.loaded = ko.computed(function(){
      return SoundBus.loaded[gameTitle]();
    });

    self.text = ko.computed(function(){
      if (self.loaded()){
        return self.game;
      }
      return 'Loading...';
    });

  }

  exports.WeaponSound = WeaponSound;


})(this, this.SoundBus);