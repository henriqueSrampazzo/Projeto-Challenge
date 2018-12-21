var conclui3 = false;

var theFase3 = function () {

    this.bg = null;

    this.player3 = null;
    this.aliens;

    this.stationary = null;
    this.clouds = null;
    this.fim = null;
    this.passafase = null;
    this.sobes = null;
    this.inimigos = null;

    this.facing = 'left';
    this.jumpTimer = 0;
    this.cursors;
    this.locked = false;
    this.lockedTo = null;
    this.wasLocked = false;
    this.willJump = false;

    this.coins = null;
    this.checkpoints1 = null;

    this.scorelvl3 = 0;
    this.scorelvl32 = 0;
    this.scoreText;

    this.menuMorte;
    this.botum;
    this.menu;
    this.menu2;
    this.voltar;
    this.pausado;
    this.botaoVolumeOn;
    this.botaoVolumeOff;

    this.resetaSempre;
    this.resetaSempre2;

    this.txtMorreu;
    this.txtMorreu2;
    this.resetaMorre;
    this.confere = false;
    this.conferemata = true;
    this.conferemata2 = false;
    
    this.conquista1;
    this.conquista2;
    this.conquista3;

    this.lvl3music;
    this.jump;
    this.walk;
    this.coinsound;
    this.checksound;
    this.mortesound;

    this.trofeu;
    this.passoulvl;
    this.passoulvl2;

    this.boundimage;
    this.boundimage2;
}

theFase3.prototype = {

    init: function () {

        this.game.renderer.renderSession.roundPixels = true;

        this.world.resize(1220*9, 600);

        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.physics.arcade.gravity.y = 300;

    },


    create: function () {


        this.background = this.add.tileSprite(0, 0, 1220, 480*7, 'space2');
        this.background.fixedToCamera = true;

            //  Platforms that don't move
            this.stationary = this.add.physicsGroup();
            this.fim = this.add.physicsGroup();
            this.passafase = this.add.physicsGroup();
            this.coins = game.add.group();
            this.checkpoints1 = game.add.group();

            this.coins.enableBody = true;
            this.checkpoints1.enableBody = true;

            this.lvl3music = game.add.audio('lvl3music');
            this.lvl3music.play('', 0, 0.5, true, false);



            this.jump = game.add.audio('jump');
            this.walk = game.add.audio('walk');
            this.coinsound = game.add.audio('coinsound');
            this.checksound = game.add.audio('checksound');
            this.mortesound = game.add.audio('mortesound');

            var terra = this.add.image(300, -150,'earth');
            var lua = this.add.image(4500, -15,'moon');
            var marte = this.add.image(10500, -15,'mars');
            marte.scale.setTo(0.7, 0.7);

            var coin = this.coins.create(2200, 130, 'coin');
            var coin2 = this.coins.create(2600, 130, 'coin');
            var coin3 = this.coins.create(3022, 290, 'coin');
            var coin4 = this.coins.create(4200, 390, 'coin');
            var coin5 = this.coins.create(6600, 280, 'coin');
            var coin6 = this.coins.create(7200, 470, 'coin');
            var coin7 = this.coins.create(8625, 280, 'coin');
            var coin8 = this.coins.create(8675, 280, 'coin');
            var coin9 = this.coins.create(2450, 520, 'coin');

            var check1 = this.checkpoints1.create(5050, 520, 'checkpoint');

            this.stationary.create(150, 560, 'capsula2');
            this.stationary.create(300, 560, 'capsula2');
            this.stationary.create(450, 560, 'capsula2');
            this.stationary.create(1000, 560, 'capsula1');
            this.stationary.create(1400, 430, 'capsula1');

            this.stationary.create(1800, 300, 'capsula1');
            //Moeda
            this.stationary.create(2200, 170, 'capsula3');
            //Moeda
            this.stationary.create(2600, 170, 'capsula3');
            this.stationary.create(2200, 560, 'capsula2');
            this.stationary.create(2400, 560, 'capsula2');
            this.stationary.create(2600, 560, 'capsula2');

            //Moeda
            this.stationary.create(3000, 430, 'capsula1');
            this.stationary.create(3400, 430, 'capsula1');

            this.stationary.create(3800, 430, 'capsula1');
            //Moeda
            this.stationary.create(4200, 430, 'capsula3');
            this.stationary.create(4600, 430, 'capsula3');

            this.stationary.create(5000, 560, 'capsula2');

            this.stationary.create(5400, 430, 'capsula3');
            this.stationary.create(5800, 320, 'capsula3');
            this.stationary.create(6200, 210, 'capsula3');
            //Moeda
            this.stationary.create(6600, 320, 'capsula3');
            this.stationary.create(7000, 210, 'capsula3');
            //Moeda
            this.stationary.create(7200, 500, 'capsula3');

            this.stationary.create(7600, 500, 'capsula1');
            this.stationary.create(8000, 380, 'capsula1');
            this.stationary.create(8400, 260, 'capsula1');
            //2Moedas
            this.stationary.create(8600, 320, 'capsula2');
            this.stationary.create(8990, 440, 'capsula2');
            this.stationary.create(9400, 320, 'capsula1');

            this.stationary.create(9800, 440, 'capsula3');

            this.stationary.create(10800, 560, 'capsula2');
            this.stationary.create(10650, 560, 'capsula2');
            this.stationary.create(10500, 560, 'capsula2');
            this.stationary.create(10350, 560, 'capsula2');
            this.stationary.create(10200, 560, 'capsula2');

            this.stationary.create(10980, 0, 'boundcollide');

            this.passafase.create(10850, 475, 'flag');

            this.stationary.setAll('body.allowGravity', false);
            this.stationary.setAll('body.immovable', true);

            this.passafase.setAll('body.allowGravity', false);
            this.passafase.setAll('body.immovable', true);

            

            //  Platforms that move
            this.clouds = this.add.physicsGroup();
            this.sobes = this.add.physicsGroup();
            this.inimigos = this.add.physicsGroup();
            this.physics.arcade.enable(this.inimigos);

            game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista01Visible, this);
            game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista02Visible, this);
            game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista03Visible, this);


            var meteoro1 = new inimigo(this.game, 2500, -200, 'asteroid', this.inimigos);

            meteoro1.addMotionPath([
                { x: "+900", xSpeed: 2000, xEase: "Linear", y: "+900", ySpeed: 2000, yEase: "Sine.easeIn" }
                ]);

            var meteoro2 = new inimigo(this.game, 5100, 800, 'asteroid', this.inimigos);

            meteoro2.addMotionPath([
                { x: "-900", xSpeed: 2000, xEase: "Linear", y: "-900", ySpeed: 2000, yEase: "Sine.easeIn" }
                ]);
            var meteoro3 = new inimigo(this.game, 5100, -200, 'asteroid', this.inimigos);

            meteoro3.addMotionPath([
                { x: "-900", xSpeed: 2000, xEase: "Linear", y: "+900", ySpeed: 2000, yEase: "Sine.easeIn" }
                ]);
            var buraco1 = new inimigo(this.game, 7100, 300, 'buraco', this.inimigos);

            buraco1.addMotionPath([
                { x: "0", xSpeed: 2000, xEase: "Linear", y: "0", ySpeed: 2000, yEase: "Sine.easeIn" }
                ]);
            var buraco2 = new inimigo(this.game, 9000, 200, 'buraco', this.inimigos);

            buraco2.addMotionPath([
                { x: "0", xSpeed: 2000, xEase: "Linear", y: "0", ySpeed: 2000, yEase: "Sine.easeIn" }
                ]);
            var meteoro4 = new inimigo(this.game, 9800, 800, 'asteroid', this.inimigos);

            meteoro4.addMotionPath([
                { x: "-900", xSpeed: 2000, xEase: "Linear", y: "-900", ySpeed: 2000, yEase: "Sine.easeIn" }
                ]);
            var meteoro5 = new inimigo(this.game, 9800, -200, 'asteroid', this.inimigos);

            meteoro5.addMotionPath([
                { x: "-900", xSpeed: 2000, xEase: "Linear", y: "+900", ySpeed: 2000, yEase: "Sine.easeIn" }
                ]);

            var buraco3 = new inimigo(this.game, 10200, 460, 'buraco', this.inimigos);

            buraco3.addMotionPath([
                { x: "0", xSpeed: 2000, xEase: "Linear", y: "0", ySpeed: 2000, yEase: "Sine.easeIn" }
                ]);

            
            this.boundimage = this.add.sprite(-10, 0, 'boundcollide');
            
            //  The Player
            //this.player3 = this.add.sprite(5050, 500, 'dude');
            this.player3 = this.add.sprite(200, 500, 'dude');

            this.physics.arcade.enable(this.player3);
            this.physics.arcade.enable(this.boundimage);

            //this.player3.body.collideWorldBounds = true;
            this.player3.body.setSize(20, 32, 5, 16);

            this.player3.animations.add('left', [1, 2, 3], 10, true);
            this.player3.animations.add('turn', [4], 20, true);
            this.player3.animations.add('right', [5, 6, 7], 10, true);

            coin.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin.play('gira');
            coin2.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin2.play('gira');
            coin3.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin3.play('gira');
            coin4.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin4.play('gira');
            coin5.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin5.play('gira');
            coin6.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin6.play('gira');
            coin7.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin7.play('gira');
            coin8.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin8.play('gira');
            coin9.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin9.play('gira');

            check1.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            check1.play('gira');

            //this.camera.follow(this.player3);

            this.cursors = this.input.keyboard.createCursorKeys();

            this.clouds.callAll('start');
            this.sobes.callAll('start');
            this.inimigos.callAll('start');

            var capsula1 = game.add.image(10800, 560,'capsula');
            capsula1.angle = -180; 

            botum = game.add.sprite(1150, 16, 'pause');
            menuMorte = game.add.image(350,100,'menuMorte');
            conquista1 = game.add.image(0,500,'conquista01');
            conquista2 = game.add.image(0,500,'conquista02');
            conquista3 = game.add.image(0,500,'conquista03');
            menuMorte.scale.setTo(1.1, 1.1);
            resetaSempre = game.add.sprite(1050, 16, 'reset');
            resetaSempre2 = game.add.sprite(700, 370, 'reset');
            botaoVolumeOn = game.add.sprite(950, 20, 'volumeon');
            botaoVolumeOff = game.add.sprite(950, 20, 'volumeoff');
            botaoVolumeOff.visible = false;

            menuMorte.fixedToCamera = true;
            menuMorte.visible = false;

            conquista1.fixedToCamera = true;
            conquista1.visible = false;
            conquista2.fixedToCamera = true;
            conquista2.visible = false;
            conquista3.fixedToCamera = true;
            conquista3.visible = false;

            botum.fixedToCamera = true;
            botum.inputEnabled = true;

            resetaSempre.fixedToCamera = true;
            resetaSempre.inputEnabled = true;

            resetaSempre2.fixedToCamera = true;
            resetaSempre2.inputEnabled = true;
            resetaSempre2.visible = false;

            botaoVolumeOn.fixedToCamera = true;
            botaoVolumeOn.inputEnabled = true;

            botaoVolumeOff.fixedToCamera = true;
            botaoVolumeOff.inputEnabled = true;

            resetaMorre = game.add.text(510, 450, 'Voltar Checkpoint', { fontSize: '32px', fill: '#000'});
            pausado = game.add.text(450, 140, 'Jogo Pausado', { fontSize: '32px', fill: '#000'});
            voltar = game.add.text(230, 200, '>Clique em qualquer lugar para voltar ao jogo<', { fontSize: '32px', fill: '#ffffff'});
            passoulvl = game.add.text(350, 540, '>Clique em qualquer lugar para finalizar<', { fontSize: '32px', fill: '#ffffff'});
            passoulvl2 = game.add.text(490, 250, 'LEVEL COMPLETO!', { fontSize: '32px', fill: '#ffffff'});
            menu = game.add.sprite(1120, 540, 'menu');
            menu2 = game.add.sprite(550, 370, 'menu');
            menu2.visible = false;
            pausado.fixedToCamera = true;
            pausado.visible = false;
            voltar.fixedToCamera = true;
            voltar.visible = false;

            passoulvl.fixedToCamera = true;
            passoulvl.visible = false;
            passoulvl2.fixedToCamera = true;
            passoulvl2.visible = false;

            resetaMorre.fixedToCamera = true;
            resetaMorre.visible = false;
            resetaMorre.inputEnabled = true;

            menu.fixedToCamera = true;
            menu.inputEnabled = true;
            menu2.fixedToCamera = true;
            menu2.inputEnabled = true;

            botum.font = 'Press Start 2P';
            botum.fontSize = '20px';
            botum.fontWeight = 'bold';

            botum.stroke = '#000000';
            botum.strokeThickness = 6;
            botum.fill = '#ffffff';

            pausado.font = 'Press Start 2P';
            pausado.fontSize = '32px';
            pausado.fontWeight = 'bold';

            pausado.stroke = '#000000';
            pausado.strokeThickness = 6;
            pausado.fill = '#00FF00';

            resetaMorre.font = 'Press Start 2P';
            resetaMorre.fontSize = '14px';
            resetaMorre.fontWeight = 'bold';

            resetaMorre.stroke = '#000000';
            resetaMorre.strokeThickness = 6;
            resetaMorre.fill = '#ffffff';

            voltar.font = 'Press Start 2P';
            voltar.fontSize = '18px';
            voltar.fontWeight = 'bold';

            voltar.stroke = '#000000';
            voltar.strokeThickness = 2;

            passoulvl.font = 'Press Start 2P';
            passoulvl.fontSize = '14px';
            passoulvl.fontWeight = 'bold';

            passoulvl.stroke = '#000000';
            passoulvl.strokeThickness = 6;
            passoulvl.fill = '#ffffff';

            passoulvl2.font = 'Press Start 2P';
            passoulvl2.fontSize = '22px';
            passoulvl2.fontWeight = 'bold';

            passoulvl2.stroke = '#000000';
            passoulvl2.strokeThickness = 6;
            passoulvl2.fill = '#ffffff';

            txtMorreu = game.add.text(490, 250, 'VOCÊ MORREU!', { fontSize: '32px', fill: '#ffffff'});
            txtMorreu2 = game.add.text(530, 300, 'SEU SCORE: ', { fontSize: '32px', fill: '#000'});
            txtMorreu2.text = 'SEU SCORE: ' + this.scorelvl32;

            txtMorreu.fixedToCamera = true;
            txtMorreu.visible = false;
            txtMorreu2.fixedToCamera = true;
            txtMorreu2.visible = false;

            txtMorreu.font = 'Press Start 2P';
            txtMorreu.fontSize = '28px';
            txtMorreu.fontWeight = 'bold';

            txtMorreu.stroke = '#000000';
            txtMorreu.strokeThickness = 6;
            txtMorreu.fill = '#ffffff';

            txtMorreu2.font = 'Press Start 2P';
            txtMorreu2.fontSize = '20px';
            txtMorreu2.fontWeight = 'bold';

            txtMorreu2.stroke = '#000000';
            txtMorreu2.strokeThickness = 6;
            txtMorreu2.fill = '#ffffff';

            botaoVolumeOn.events.onInputUp.add(function () {
                this.lvl3music.pause();
        //this.game.sound.mute = true;
        botaoVolumeOff.visible = true;
        botaoVolumeOn.visible = false;
    },this);

            botaoVolumeOff.events.onInputUp.add(function () {
        // this.game.sound.mute = false;
        this.lvl3music.resume();
        botaoVolumeOn.visible = true;
        botaoVolumeOff.visible = false;
    },this);

            resetaSempre.events.onInputUp.add(function () {
                this.game.state.restart();
                this.scorelvl3 = 0;
                this.scorelvl32 = 0;
                this.confere = false;
                this.conferemata = true;
                this.conferemata2 = false;
                this.lvl3music.destroy();

            },this);

            resetaSempre2.events.onInputUp.add(function () {
                this.game.state.restart();
                this.scorelvl3 = 0;
                this.scorelvl32 = 0;
                this.confere = false;    
                this.conferemata = true;
                this.conferemata2 = false;            
                this.lvl3music.destroy();

            },this);
            menu.events.onInputUp.add(function () {
                this.game.state.start("Menu");
                this.scorelvl3 = 0;
                this.scorelvl32 = 0;
                this.confere = false; 
                this.conferemata = true;
                this.conferemata2 = false;               
                this.lvl3music.destroy();
            },this);
            menu2.events.onInputUp.add(function () {
                this.game.state.start("Menu");
                this.scorelvl3 = 0;
                this.scorelvl32 = 0;
                this.confere = false;    
                this.conferemata = true;
                this.conferemata2 = false;            
                this.lvl3music.destroy();
            },this);

            resetaMorre.events.onInputUp.add(function () {
               if (this.confere==true) {
                this.player3.reset(5050, 500);
                this.conferemata = false;
                this.conferemata2 = true;
                //this.boundimage.visible = false;
                this.boundimage2 = this.add.sprite(this.player3.body.x - 300, 0, 'boundcollide');
                this.physics.arcade.enable(this.boundimage2);
                game.camera.x = this.player3.body.x - 300;
                menuMorte.visible = false;
                resetaMorre.visible = false;
                txtMorreu2.visible = false;
                txtMorreu.visible = false;
                resetaSempre2.visible = false;
                menu2.visible = false;
            }
        },this);

            botum.events.onInputUp.add(function () {
                this.game.paused = true;
                pausado.visible = true;
                voltar.visible=true;
            },this);

//  resetar.events.onInputUp.add(function () {
//     this.player.reset(0, 850);
// },this);

game.input.onDown.add(function () {

    this.game.paused = false;
    pausado.visible = false;
    voltar.visible = false;

}, this);

scoreText = game.add.text(16, 16, 'SCORE: 0', { fontSize: '32px', fill: '#000'});
scoreText.fixedToCamera = true;

scoreText.font = 'Press Start 2P';
scoreText.fontSize = '20px';
scoreText.fontWeight = 'bold';

scoreText.stroke = '#000000';
scoreText.strokeThickness = 6;
scoreText.fill = '#ffffff';

trofeu = game.add.sprite(580, 350, 'trofeu');
trofeu.fixedToCamera = true;
trofeu.visible = false;

 //this.player3.checkWorldBounds = true;
 this.player3.checkWorldBounds = true;
 this.player3.events.onOutOfBounds.add(this.mata, this);

//this.aliens=game.add.physicsGroup(Phaser.Physics.ARCADE);

 //     for (var i = 0; i < 100; i++)
 //    {
 //        var spider = this.aliens.create(game.world.randomX+100, game.world.randomY+100, 'asteroid',i);

 //    }

               //  this.aliens.setAll('body.allowGravity', false);
             //this.aliens.setAll('body.immovable', true);

         },

         customSep: function (player3, platform) {

            if (!this.locked && player3.body.velocity.y > 0)
            {
                this.locked = true;
                this.lockedTo = platform;
                platform.player3Locked = true;

                player3.body.velocity.y = 0;
            }

        },


        /*function (player, chao) {
           
            player.kill();
        },

        customSep: function (player, chao) {
            player.animations.stop();
            player.kill(this.player);
            // Mostra texto informando morte do jogador
        var posicaoJogador = player.body.position.x;
 
        var textoJogo = game.add.text(posicaoJogador - 150, game.camera.height / 2, "VOCÊ MORREU!", {
        font: "48px Arial",
        fill: "#ff0044",
        align: "center"
    });

        },
        */
        checkLock: function () {

            this.player3.body.velocity.y = 0;

            //  If the player has walked off either side of the platform then they're no longer locked to it
            if (this.player3.body.right < this.lockedTo.body.x || this.player3.body.x > this.lockedTo.body.right)
            {
                this.cancelLock();
            }

        },

        cancelLock: function () {

            this.wasLocked = true;
            this.locked = false;

        },

        preRender: function () {

            if (this.game.paused)
            {
                //  Because preRender still runs even if your game pauses!
                return;
            }

            if (this.locked || this.wasLocked)
            {
                this.player3.x += this.lockedTo.deltaX;
                this.player3.y = this.lockedTo.y - 48;

                if (this.player3.body.velocity.x !== 0)
                {
                    this.player3.body.velocity.y = 0;
                }
            }

            if (this.willJump)
            {
                this.willJump = false;

                if (this.lockedTo && this.lockedTo.deltaY < 0 && this.wasLocked)
                {
                    //  If the platform is moving up we add its velocity to the players jump
                    this.player3.body.velocity.y = -300 + (this.lockedTo.deltaY * 10);
                }
                else
                {
                    this.player3.body.velocity.y = -300;
                }

                this.jumpTimer = this.time.time + 750;
            }

            if (this.wasLocked)
            {
                this.wasLocked = false;
                this.lockedTo.player3Locked = false;
                this.lockedTo = null;
            }

        },

        mata: function(){
            this.player3.kill();
            this.mortesound.play();
           // this.player.reset(0, 850);
          // this.score = 0;
         //  this.score2 = 0;
         if (this.confere==true) {
            resetaMorre.visible = true;
        } 
        menu2.visible = true;
        menuMorte.visible = true;
        txtMorreu.visible = true;
        txtMorreu2.visible = true;
        resetaSempre2.visible = true;
        this.passaScore();

    },

    passa: function(){
        trofeu.visible = true;
        passoulvl.visible = true;
        passoulvl2.visible = true;
        menuMorte.visible = true;
        txtMorreu2.visible = true;
        this.game.paused = true;
        this.game.state.start("creditos");
        conclui3 = true;
        this.lvl3music.destroy();
        this.confere = false; 
        this.conferemata = true;
        this.conferemata2 = false;   
        this.scorelvl3 = 0;
        this.scorelvl32 = 0;
        this.passaScore();
    },
    pegamoeda: function(player3, coin){
     coin.kill();
     this.scorelvl3 += 10;
     this.scorelvl32 +=10;
     scoreText.text = 'SCORE: ' + this.scorelvl3;
     txtMorreu2.text = 'SEU SCORE: ' + this.scorelvl32;
     this.coinsound.play();
     this.conquista01();
     this.conquista02();
     this.conquista03();
	 this.passaScore();

 },

 pegacheck: function(player1, check1){
    check1.kill();
    this.checksound.play();
            //this.score += 10;
            this.confere = true;
            this.passaScore();
        },


        passaScore: function(){
            $.ajax({
                url:'/site/score3.php',
                type:'POST',
                data: {'pontos':this.scorelvl3},
                success: resposta=>{
                    console.log(resposta);
                }
            })
        },

        conquista01: function(){
          if (this.scorelvl3 == 10) {
            conquista1.visible = true;

        }
        this.conquista01Some();

    },
    conquista02: function(){
      if (this.scorelvl3 == 30) {
        conquista2.visible = true;

    }
    this.conquista02Some();

},
conquista03: function(){
  if (this.scorelvl3 == 90) {
    conquista3.visible = true;

}
this.conquista03Some();

},
conquista01Visible: function(){
  conquista1.visible = false;
},
conquista02Visible: function(){
  conquista2.visible = false;
},
conquista03Visible: function(){
  conquista3.visible = false;
},
conquista01Some: function(){
  if (conquista1.visible == true) {
    game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista01Visible, this);
}
},
conquista02Some: function(){
  if (conquista2.visible == true) {
    game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista02Visible, this);
}
},
conquista03Some: function(){
  if (conquista3.visible == true) {
    game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista03Visible, this);
}
},

update: function () {
            //this.aliens.angle += 1;



            this.boundimage.body.x +=3;

            game.camera.x += 3;

            if (this.conferemata == true) {
                if (this.boundimage.body.x-16 > this.player3.body.x) {
                    this.mata();
                }
                if (this.boundimage.body.x>=8540) {
                    this.boundimage.visible = false;
                }
            }

            if (this.conferemata2 == true) {
                this.boundimage2.body.x +=3;
                if (this.boundimage2.body.x-16 > this.player3.body.x) {
                    this.mata();
                }
                if (this.boundimage2.body.x>=8540) {
                    this.boundimage2.visible = false;
                }
            }



            ///////////////////////////////////////////////////////////
            if (botum.input.pointerOver())
            {
                botum.alpha = 1;
                botum.scale.setTo(1.1, 1.1);
            }
            else
            {
                botum.alpha = 0.5;
                botum.scale.setTo(1, 1);

            }

/////////////////////////////////////////////////////////
if (resetaSempre.input.pointerOver())
{
    resetaSempre.alpha = 1;
    resetaSempre.scale.setTo(1.1, 1.1);
}
else
{
    resetaSempre.alpha = 0.5;
    resetaSempre.scale.setTo(1, 1);
}
/////////////////////////////////////////////////////////
if (botaoVolumeOn.input.pointerOver())
{
    botaoVolumeOn.alpha = 1;
    botaoVolumeOn.scale.setTo(1.1, 1.1);
}
else
{
    botaoVolumeOn.alpha = 0.5;
    botaoVolumeOn.scale.setTo(1, 1);
}
    ////////////////////////////////////////////////////
    if (resetaMorre.input.pointerOver())
    {
        resetaMorre.alpha = 1;
        resetaMorre.scale.setTo(1.1, 1.1);
    }
    else
    {
        resetaMorre.alpha = 0.5;
        resetaMorre.scale.setTo(1, 1);
    }

///////////////////////////////////////////////////////

if (botaoVolumeOff.input.pointerOver())
{
    botaoVolumeOff.alpha = 1;
    botaoVolumeOff.scale.setTo(1.1, 1.1);
}
else
{
    botaoVolumeOff.alpha = 0.5;
    botaoVolumeOff.scale.setTo(1, 1);
}


    ////////////////////////////////////////////////////
    if (resetaSempre2.input.pointerOver())
    {
        resetaSempre2.alpha = 1;
        resetaSempre2.scale.setTo(1.1, 1.1);
    }
    else
    {
        resetaSempre2.alpha = 0.5;
        resetaSempre2.scale.setTo(1, 1);
    }
    ////////////////////////////////////////////////////
    if (menu.input.pointerOver())
    {
        menu.alpha = 1;
        menu.scale.setTo(1.1, 1.1);
    }
    else
    {
        menu.alpha = 0.5;
        menu.scale.setTo(1, 1);
    }
    ////////////////////////////////////////////////////
    if (menu2.input.pointerOver())
    {
        menu2.alpha = 1;
        menu2.scale.setTo(1.1, 1.1);
    }
    else
    {
        menu2.alpha = 0.5;
        menu2.scale.setTo(1, 1);
    }
    ////////////////////////////////////////////////////

    this.background.tilePosition.x = -(this.camera.x * 0.7);

    this.physics.arcade.collide(this.player3, this.stationary);
    this.physics.arcade.collide(this.player3, this.aliens, this.mata, null, this);
    this.physics.arcade.collide(this.player3, this.clouds, this.customSep, null, this);
    this.physics.arcade.collide(this.player3, this.inimigos, this.mata, null, this);
    this.physics.arcade.collide(this.player3, this.passafase, this.passa, null, this);
    this.physics.arcade.collide(this.coins, this.stationary);
    this.physics.arcade.collide(this.player3, this.coins, this.pegamoeda, null, this);
    this.physics.arcade.collide(this.checkpoints1, this.stationary);
    this.physics.arcade.collide(this.player3, this.checkpoints1, this.pegacheck, null, this);

            //  Do this AFTER the collide check, or we won't have blocked/touching set
            var standing = this.player3.body.blocked.down || this.player3.body.touching.down || this.locked;

            this.player3.body.velocity.x = 0;

            if (this.cursors.left.isDown)
            {
                if (this.player3.body.touching.down) {
                   this.walk.play('',0,1,false, false);
               }
               this.player3.body.velocity.x = -150;

             //////////BUG DE ANIMAÇÃO
             // if (this.facing !== 'left')
             // {
                this.player3.play('left');
                this.facing = 'left';
            // }
        }
        else if (this.cursors.right.isDown)
        {

            if (this.player3.body.touching.down) {
                this.walk.play('',0,1,false, false);
            }
            this.player3.body.velocity.x = 250;
            //////////BUG DE ANIMAÇÃO
            //if (this.facing !== 'right')
            //{
                this.player3.play('right');
                this.facing = 'right';
           // }
       }
       else
       {
        this.player3.frame = 4;
    }

    if (standing && this.cursors.up.isDown && this.time.time > this.jumpTimer)
    {
        this.jump.play();
        if (this.locked)
        {
            this.cancelLock();
        }

        this.willJump = true;
    }

    if (this.locked)
    {
            /////////////////////////BUGGGGGGGGGGGG
            // this.checkLock();
            this.cancelLock();
        }

    }

};

CloudPlatform = function (game, x, y, key, group) {

    if (typeof group === 'undefined') { group = game.world; }

    Phaser.Sprite.call(this, game, x, y, key);

    game.physics.arcade.enable(this);

    this.anchor.x = 0.5;

    this.body.customSeparateX = true;
    this.body.customSeparateY = true;
    this.body.allowGravity = false;
    this.body.immovable = true;

    this.player3Locked = false;

    group.add(this);

};
sobe = function (game, x, y, key, group) {

    if (typeof group === 'undefined') { group = game.world; }

    Phaser.Sprite.call(this, game, x, y, key);

    game.physics.arcade.enable(this);

    this.anchor.x = 0.5;

    this.body.customSeparateX = true;
    this.body.customSeparateY = true;
    this.body.allowGravity = false;
    this.body.immovable = true;

    this.player3Locked = false;

    group.add(this);

};

inimigo = function (game, x, y, key, group) {

    if (typeof group === 'undefined') { group = game.world; }

    Phaser.Sprite.call(this, game, x, y, key);

    game.physics.arcade.enable(this);

    this.anchor.x = 0.5;

    this.body.customSeparateX = true;
    this.body.customSeparateY = true;
    this.body.allowGravity = false;
    this.body.immovable = true;

    this.player3Locked = false;

    group.add(this);

};

CloudPlatform.prototype = Object.create(Phaser.Sprite.prototype);
CloudPlatform.prototype.constructor = CloudPlatform;

sobe.prototype = Object.create(Phaser.Sprite.prototype);
sobe.prototype.constructor = sobe;

inimigo.prototype = Object.create(Phaser.Sprite.prototype);
inimigo.prototype.constructor = sobe;

CloudPlatform.prototype.addMotionPath = function (motionPath) {

    this.tweenX = this.game.add.tween(this.body);
    this.tweenY = this.game.add.tween(this.body);

        //  motionPath is an array containing objects with this structure
        //  [
        //   { x: "+200", xSpeed: 2000, xEase: "Linear", y: "-200", ySpeed: 2000, yEase: "Sine.easeIn" }
        //  ]

        for (var i = 0; i < motionPath.length; i++)
        {
            this.tweenX.to( { x: motionPath[i].x }, motionPath[i].xSpeed, motionPath[i].xEase);
            this.tweenY.to( { y: motionPath[i].y }, motionPath[i].ySpeed, motionPath[i].yEase);
        }

        this.tweenX.loop();
        this.tweenY.loop();

    };

    sobe.prototype.addMotionPath = function (motionPath) {

        this.tweenX = this.game.add.tween(this.body);
        this.tweenY = this.game.add.tween(this.body);

        //  motionPath is an array containing objects with this structure
        //  [
        //   { x: "+200", xSpeed: 2000, xEase: "Linear", y: "-200", ySpeed: 2000, yEase: "Sine.easeIn" }
        //  ]

        for (var i = 0; i < motionPath.length; i++)
        {
            this.tweenX.to( { x: motionPath[i].x }, motionPath[i].xSpeed, motionPath[i].xEase);
            this.tweenY.to( { y: motionPath[i].y }, motionPath[i].ySpeed, motionPath[i].yEase);
        }

        this.tweenX.loop();
        this.tweenY.loop();

    };

    inimigo.prototype.addMotionPath = function (motionPath) {

        this.tweenX = this.game.add.tween(this.body);
        this.tweenY = this.game.add.tween(this.body);

        //  motionPath is an array containing objects with this structure
        //  [
        //   { x: "+200", xSpeed: 2000, xEase: "Linear", y: "-200", ySpeed: 2000, yEase: "Sine.easeIn" }
        //  ]

        for (var i = 0; i < motionPath.length; i++)
        {
            this.tweenX.to( { x: motionPath[i].x }, motionPath[i].xSpeed, motionPath[i].xEase);
            this.tweenY.to( { y: motionPath[i].y }, motionPath[i].ySpeed, motionPath[i].yEase);
        }

        this.tweenX.loop();
        this.tweenY.loop();

    };

    CloudPlatform.prototype.start = function () {

        this.tweenX.start();
        this.tweenY.start();

    };

    sobe.prototype.start = function () {

        this.tweenX.start();
        this.tweenY.start();

    };

    inimigo.prototype.start = function () {

        this.tweenX.start();
        this.tweenY.start();

    };

    CloudPlatform.prototype.stop = function () {

        this.tweenX.stop();
        this.tweenY.stop();

    };

    sobe.prototype.stop = function () {

        this.tweenX.stop();
        this.tweenY.stop();

    };

    inimigo.prototype.stop = function () {

        this.tweenX.stop();
        this.tweenY.stop();

    };