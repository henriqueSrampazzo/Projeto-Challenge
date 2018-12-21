var preload = function(game){}

preload.prototype = {
	preload: function(){ 

          var loadingBar = this.add.sprite(360,250,"loading");

            this.load.setPreloadSprite(loadingBar);
            this.load.crossOrigin = 'anonymous';
            this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
            this.load.image("comestrela", "assets/comestrela.jpg");
            this.load.image("basefase", "assets/basefase.png");
            this.load.image("trofeu", "assets/trofeu.png");
            this.load.image("lvl1", "assets/lvl1.png");
            this.load.image("lvl2", "assets/lvl2.png");
            this.load.image("lvl3", "assets/lvl3.png");
            this.game.load.image("gametitle","assets/gametitle.png");
            this.load.image('trees', 'assets/trees-h.png');
            this.load.image('menuMorte', 'assets/menuMorte.png');
            this.load.image('conquista01', 'assets/conquista01.png');
            this.load.image('conquista02', 'assets/conquista02.png');
            this.load.image('conquista03', 'assets/conquista03.png');
            this.load.image('layer3', 'assets/layer3.png');
            this.load.image('layer4', 'assets/layer4.png');
            this.load.image('montanha', 'assets/montanha.png');
            this.load.image('moita', 'assets/moita.png');
            this.load.image('background', 'assets/clouds-h.png');
            this.load.image('cavebg', 'assets/cavebg.png');
            this.load.image('boundcollide', 'assets/boundcollide.png');
         
            this.load.image('bgcave5', 'assets/bgcave5.png');
            this.load.image('space2', 'assets/space2.jpg');
            this.load.image('chaocave', 'assets/chaocave.png');
            this.load.image('platform', 'assets/platform.png');
            this.load.image('platform2', 'assets/platform2.png');
            this.load.image('platform3', 'assets/platform3.png');
            this.load.image('plataformanormal2', 'assets/platformnormal2.png');
            this.load.image('plataformagigante2', 'assets/plataformagigante2.png');
            this.load.image('platform22', 'assets/platform22.png');
            this.load.image('platform33', 'assets/platform33.png');
            this.load.image('cloud-platform', 'assets/cloud-platform.png');
            this.load.image('nuvemesquerda', 'assets/nuvemesquerda.png');
            this.load.image('nuvemdireita', 'assets/nuvemdireita.png');
            this.load.image('nuvemmeio', 'assets/nuvemmeio.png');
            this.load.image('nuvemgrande', 'assets/nuvemgrande.png');
            this.load.image('balao', 'assets/balao.png');
            this.load.image('asteroid', 'assets/asteroid.png');
        
            this.load.image('chao', 'assets/chao.png');
            this.load.image('flag', 'assets/flag.png');
            this.load.image('menu', 'assets/menu.png');
            this.load.image('inicio', 'assets/inicio.png');
            this.load.spritesheet('traco', 'assets/traco.png', 1220, 9);
            this.load.spritesheet('traco2', 'assets/traco2.png', 1220*2, 9);
            this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
            this.load.image('ghost1', 'assets/ghost1.png');
            this.load.image('ghost2', 'assets/ghost2.png');
            this.load.image('ghost3', 'assets/ghost3.png');
            this.load.image('ghost4', 'assets/ghost4.png');
            this.load.image('rato', 'assets/rato.png');
            this.load.image('rato2', 'assets/rato2.png');

            this.load.spritesheet('coin', 'assets/coin.png', 32, 32);
            this.load.spritesheet('checkpoint', 'assets/checkpoint.png', 32, 32);
            this.load.image('reset', 'assets/reset.png');
            this.load.image('plataformagrande', 'assets/plataformagrande.png');
            this.load.image('plataformagrande2', 'assets/plataformagrande2.png');
            this.load.image('vertical2', 'assets/vertical2.png');
            this.load.image('pause', 'assets/pause.png');
            this.load.image('volumeon', 'assets/volumeon.png');
            this.load.image('volumeoff', 'assets/volumeoff.png');
            
            this.load.image('setadireita', 'assets/setadireita.png');
            this.load.image('setaesquerda', 'assets/setaesquerda.png');
            this.load.image('setabaixo', 'assets/setabaixo.png');
            this.load.image('setacima', 'assets/setacima.png');
            this.load.image('elevator', 'assets/elevator.png');

            this.load.audio('menumusic', 'assets/music/menumusic.ogg');
            this.load.audio('lvl1music', 'assets/music/lvl1music.ogg');
            this.load.audio('starman', 'assets/music/lvl2music.ogg');
            this.load.audio('lvl3music', 'assets/music/lvl3music.ogg');
            this.load.audio('creditmusic', 'assets/music/creditmusic.ogg');
            this.load.audio('textmusic', 'assets/music/textmusic.ogg');
            this.load.audio('jump', 'assets/audio/jump.ogg');
            this.load.audio('walk', 'assets/audio/walk.ogg');
            this.load.audio('coinsound', 'assets/audio/coinsound.ogg');
            this.load.audio('checksound', 'assets/audio/checksound.ogg');
            this.load.audio('mortesound', 'assets/audio/mortesound.ogg');

            this.load.image('creditos', 'assets/creditos.png');
            this.load.image('capsula', 'assets/capsula.png');
            this.load.image('capsula1', 'assets/capsula1.png');
            this.load.image('capsula2', 'assets/capsula2.png');
            this.load.image('capsula3', 'assets/capsula3.png');
            this.load.image('buraco', 'assets/buraco.png');
            this.load.image('earth', 'assets/earth.png');
            this.load.image('moon', 'assets/moon.png');
            this.load.image('mars', 'assets/mars.png');  

            this.load.image('pixelart', 'assets/pixelart.jpg');           
	},
  	create: function(){
		this.game.state.start("Menu");
	}
}