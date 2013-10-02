"use strict";

(function(exports, Howl, ko){

  function SoundBus(){
    var self = this;

    self.loading = ko.observable(true);

    var sounds = {};
    var halo4Loaded = false;
    var halo3Loaded = false;
    var haloReachLoaded = false;
    var halo2Loaded = false;
    var haloCELoaded = false;

    sounds['Halo 4'] = getHalo4(function(){
      halo4Loaded = true;
      self.loading(!halo4Loaded && !halo3Loaded && !haloReachLoaded && !halo2Loaded && !haloCELoaded);
    });

    sounds['Halo 2'] = getHalo2(function(){
      halo2Loaded = true;
      self.loading(!halo4Loaded && !halo3Loaded && !haloReachLoaded && !halo2Loaded && !haloCELoaded);
    });

    sounds['Halo 3'] = getHalo3(function(){
      halo3Loaded = true;
      self.loading(!halo4Loaded && !halo3Loaded && !haloReachLoaded && !halo2Loaded && !haloCELoaded);
    });

    sounds['Halo CE'] = getHaloCE(function(){
      haloCELoaded = true;
      self.loading(!halo4Loaded && !halo3Loaded && !haloReachLoaded && !halo2Loaded && !haloCELoaded);
    });

    sounds['Halo Reach'] = getHaloReach(function(){
      haloReachLoaded = true;
      self.loading(!halo4Loaded && !halo3Loaded && !haloReachLoaded && !halo2Loaded && !haloCELoaded);
    });

    self.playSound = function(game, weapon){
      var name = weapon.replace(' ', '').replace(' ', '').toLowerCase();
      sounds[game].stop();
      sounds[game].play(name);
    }
  }

  function getHalo4(callback){
    var howl = new Howl(
      {
        onload: callback,
        urls: ['/sounds/halo4.appended.mp3'],
        sprite: {
          assaultrifle: [0, 3857],
          battlerifle: [3857, 2142],
          beamrifle: [6000, 2142],
          boltshotcharged: [8142, 5142],
          boltshot: [13285, 1714],
          concussionrifle: [15000, 2142],
          covenantcarbine: [17142, 2142],
          dmr: [19285, 2142],
          fraggrenade: [21428, 3857],
          fuelrodgun: [25285, 3000],
          hammer: [28285, 3000],
          incineratorcannon: [31285, 3428],
          lightrifle: [34714, 1714],
          machinegunturret: [36428, 3857],
          magnum: [40285, 1285],
          needler: [41571, 3000],
          plasmagrenade: [44571, 4285],
          plasmapistolcharged: [48857, 5142],
          plasmapistol: [54000, 1285],
          plasmaturret: [55285, 3857],
          pulsegrenade: [59142, 6857],
          railgun: [66000, 4285],
          rocketlauncher: [70285, 2571],
          saw: [72857, 2571],
          scattershot: [75428, 2571],
          shotgun: [78000, 2142],
          sniperrifle: [80142, 3000],
          spartanlaser: [83142, 5142],
          stormrifle: [88285, 3428],
          sword: [91714, 1714],
          stickydetonator: [93429, 7286],
          suppressor: [100714, 4286]

        }
      });
      return howl;
  }

  function getHalo3(callback){
    var howl = new Howl(
      {
        onload: callback,
        urls: ['/sounds/halo3.appended.mp3'],
        sprite: {
          assaultrifle: [0, 2571],
          battlerifle: [2571, 2142],
          beamrifle: [4714, 2142],
          bruteshot: [6857, 1714],
          firegrenade: [8571, 6000],
          fraggrenade: [14571, 3857],
          hammer: [18428, 2571],
          machinegunturret: [21000, 5142],
          magnum: [26142, 1285],
          misslepod: [27428, 2142],
          needler: [29571, 3428],
          plasmagrenade: [33000, 5142],
          plasmapistolcharged: [38142, 3428],
          plasmapistol: [41571, 857],
          rocketlauncher: [42428, 2142],
          sentinelbeam: [44571, 3000],
          shotgun: [47571, 1714],
          smg: [49285, 2571],
          sniperrifle: [51857, 3000],
          spartanlaser: [54857, 5571],
          spikegrenade: [60428, 3000],
          spiker: [63428, 3428],
          sword: [66857, 1285]
        }
      });
      return howl;
  }

  function getHaloReach(callback){
    var howl = new Howl(
      {
        onload: callback,
        urls: ['/sounds/haloreach.appended.mp3'],
        sprite: {
          assaultrifle: [0, 3428],
          concussionrifle: [3428, 2142],
          dmr: [5571, 1714],
          fraggrenade: [7285, 3428],
          fuelrodgun: [10714, 2571],
          grenadelauncher: [13285, 3857],
          hammer: [17142, 2571],
          machinegunturret: [19714, 4714],
          magnum: [24428, 1714],
          focusrifle: [26142, 2571],
          needler: [28714, 3857],
          needlerifle: [32571, 1714],
          plasmagrenade: [34285, 3857],
          plasmalauncher: [38142, 6428],
          plasmapistol: [44571, 1714],
          plasmapistolcharged: [46285, 5571],
          plasmarepeater: [51857, 3857],
          plasmarifle: [55714, 4714],
          plasmaturret: [60428, 4285],
          shotgun: [64714, 1714],
          sniperrifle: [66428, 3000],
          spartanlaser: [69428, 6000],
          spiker: [75428, 4285],
          sword: [79714, 1714],
          rocketlauncher: [81429, 2571]
        }
      });
      return howl;
  }

  function getHalo2(callback){
    var howl = new Howl(
      {
        onload: callback,
        urls: ['/sounds/halo2.appended.mp3'],
        sprite: {
          battlerifle: [0, 1714],
          bruteshot: [1714, 2571],
          covenantcarbine: [4285, 1285],
          fraggrenade: [5571, 3000],
          machinegunturret: [8571, 3000],
          magnum: [11571, 1285],
          needler: [12857, 3428],
          plasmagrenade: [16285, 4285],
          plasmapistolcharged: [20571, 3428],
          plasmapistol: [24000, 1285],
          plasmarifle: [25285, 2571],
          rocketlauncher: [27857, 1285],
          sentinelbeam: [29142, 2571],
          shotgun: [31714, 1714],
          smg: [33428, 2142],
          sniperrifle: [35571, 2142],
          sword: [37714, 857]
        }
      });
      return howl;
  }

  function getHaloCE(callback){
    var howl = new Howl(
      {
        onload: callback,
        urls: ['/sounds/haloce.appended.mp3'],
        sprite: {
          assaultrifle: [0, 2571],
          fraggrenade: [2571, 4285],
          magnum: [6857, 1285],
          needler: [8142, 3000],
          plasmagrenade: [11142, 4714],
          plasmapistolcharged: [15857, 3000],
          plasmapistol: [18857, 857],
          plasmarifle: [19714, 2571],
          rocketlauncher: [22285, 1714],
          shotgun: [24000, 2142],
          sniperrifle: [26142, 3000]
        }
      });
      return howl;
  }

  exports.SoundBus = new SoundBus();


})(this, this.Howl, this.ko);