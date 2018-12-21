var gameTitle = function(game){}

gameTitle.prototype = {
	create: function(){

		this.menumusic;
		this.menumusic = game.add.audio('menumusic', 0.3, true, true);
		this.menumusic.play();
		this.verificaacao = false;
		
		comestrela = game.add.sprite(0, 0, 'comestrela');
  		//var comestrela = this.game.add.sprite(0,0,"comestrela");
  		var gameTitle = this.game.add.sprite(350,20,"gametitle");
  		texto = game.add.text(310, 340, '*TODOS OS NÍVEIS DESBLOQUEADOS ATRAVÉS DE CHEAT!*', { fontSize: '14px', fill: '#ffffff'});
  		credit = this.game.add.sprite(1120,120,"creditos");
  		credit.inputEnabled = true;


  		credit.stroke = '#000000';
  		credit.strokeThickness = 6;
  		credit.fill = '#ffffff';

  		texto.visible = false;
  		texto.font = 'Press Start 2P';
  		texto.fontSize = '12px';
  		texto.fontWeight = 'bold';

  		texto.stroke = '#000000';
  		texto.strokeThickness = 2;
  		texto.fill = '#ffffff';
  		gameTitle.scale.setTo(0.7,0.7);
  		gameTitle.inputEnabled = true;
  		gameTitle.events.onInputUp.add(function () {
  			this.chetar();
  			this.menumusic.destroy();
  		},this);

  		credit.events.onInputUp.add(function () {
  			this.acessacreditos();
  			this.menumusic.destroy();
  		},this);


  		var playButton = this.game.add.button(100,370,"lvl1",this.playTheGame,this);

  		game.add.sprite(450, 370, 'basefase');
  		var playButton2 = this.game.add.button(450,370,"lvl2",this.playTheGame2,this);
  		playButton2.visible = false;

  		game.add.sprite(800, 370, 'basefase');
  		var playButton3 = this.game.add.button(800,370,"lvl3",this.playTheGame3,this);
  		playButton3.visible = false;

  		if (conclui == true) {
  			playButton2.visible = true;
  		}
  		if (conclui2 == true) {
  			playButton3.visible = true;
  		}



  		if ((cliqueS == true)&&(cliqueE == true)&&(cliqueN == true)&&(cliqueA == true)&&(cliqueI == true)) {
  			clicouTodos = true;
  		}

  		if (clicouTodos == true) {
  			playButton3.visible = true;
  			playButton2.visible = true;
  			texto.visible = true;
  			
		//game.time.events.add(Phaser.Timer.SECOND * 4, this.acessaMnu, this);
	}



	game.time.events.repeat(2000,999999, function() {    
		game.add.tween(comestrela).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
		game.add.tween(comestrela).to({y: 10}, 4000, Phaser.Easing.Linear.None, true);

	}, this);
	game.time.events.repeat(4000,999999, function() {    
		game.add.tween(comestrela).to({alpha: 1}, 1500, Phaser.Easing.Linear.None, true); 
		game.add.tween(comestrela).to({y: -10}, 4000, Phaser.Easing.Linear.None, true);   
	}, this);
		//this.game.time.events.add(Phaser.Timer.SECOND * 1, this.fadePicture, this);

		LetraS = game.input.keyboard.addKey(Phaser.Keyboard.S);
		LetraE = game.input.keyboard.addKey(Phaser.Keyboard.E);
		LetraN = game.input.keyboard.addKey(Phaser.Keyboard.N);
		LetraA = game.input.keyboard.addKey(Phaser.Keyboard.A);
		LetraI = game.input.keyboard.addKey(Phaser.Keyboard.I);


		LetraS.onDown.add(this.clicaS, this);
		LetraE.onDown.add(this.clicaE, this);
		LetraN.onDown.add(this.clicaN, this);
		LetraA.onDown.add(this.clicaA, this);
		LetraI.onDown.add(this.clicaI, this);

	},

	clicaS: function(){
	//this.game.state.start("Game1");
	cliqueS = true;

},
clicaE: function(){
	//this.game.state.start("Game1");
	cliqueE = true;

},
clicaN: function(){
	//this.game.state.start("Game1");
	cliqueN = true;

},
clicaA: function(){
	//this.game.state.start("Game1");
	cliqueA = true;

},
clicaI: function(){
	//this.game.state.start("Game1");
	cliqueI = true;

},



chetar: function(){
	this.game.state.start("Menu");
},

acessacreditos: function(){
	this.game.state.start("creditos");
},

playTheGame: function(){
	this.menumusic.destroy();
	if (passouText1 == false) {
		this.game.state.start("text1");
	}
	if (passouText1 == true) {
		this.game.state.start("Game1");
	}
},
playTheGame2: function(){
	this.menumusic.destroy();
	if (passouText2 == false) {
		this.game.state.start("text2");
	}
	if (passouText2 == true) {
		this.game.state.start("Game");
	}
},
playTheGame3: function(){
	this.menumusic.destroy();
	if (passouText3 == false) {
		this.game.state.start("text3");
	}
	if (passouText3 == true) {
		this.game.state.start("Game3");
	}
}



}

