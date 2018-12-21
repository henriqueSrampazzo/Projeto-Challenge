var conclui = false;

var theFase1 = function () {

    this.bg = null;
    this.montanha = null;
    this.moita = null;
    this.bgcave = null;

    this.player1 = null;

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
    this.checkpoints2 = null;
    

    this.scorelvl1 = 0;
    this.scorelvl12 = 0;
    this.scoreText;

    this.menuMorte;
    this.passoulvl;
    this.botum;
    this.trofeu;
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
    this.resetaMorre2;
    this.resetaMorre;
    this.confere = false;
    this.confere2 = false;

    this.conquista1;
    this.conquista2;
    this.conquista3;

    this.lvl1music;
    this.jump;
    this.walk;
    this.coinsound;
    this.checksound;
    this.mortesound;

}

theFase1.prototype = {

    init: function () {

        this.game.renderer.renderSession.roundPixels = true;

        this.world.resize(1220*2, 480*8);

        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.physics.arcade.gravity.y = 600;

    },


    create: function () {


        this.background = this.add.tileSprite(0, 0, 1220, 480*7, 'cavebg');
        this.background.fixedToCamera = true;
        bgcave = game.add.image(0,0, 'bgcave5');
        this.moita = this.add.tileSprite(0, 3740,480*9, 100, 'chaocave');

            //  Platforms that don't move
            this.stationary = this.add.physicsGroup();
            this.fim = this.add.physicsGroup();
            this.passafase = this.add.physicsGroup();
            this.coins = game.add.group();
            this.checkpoints1 = game.add.group();
            this.checkpoints2 = game.add.group();

            this.coins.enableBody = true;
            this.checkpoints1.enableBody = true;
            this.checkpoints2.enableBody = true;

            this.lvl1music = game.add.audio('lvl1music');
            this.lvl1music.play('', 0, 0.5, true, false);



            this.jump = game.add.audio('jump');
            this.walk = game.add.audio('walk');
            this.coinsound = game.add.audio('coinsound');
            this.checksound = game.add.audio('checksound');
            this.mortesound = game.add.audio('mortesound');

            var coin = this.coins.create(450, 3130, 'coin');
            var coin2 = this.coins.create(2305, 3290, 'coin');
            var coin3 = this.coins.create(310, 2160, 'coin');
            var coin20 = this.coins.create(260, 2160, 'coin');
            var coin21 = this.coins.create(210, 2160, 'coin');
            var coin4 = this.coins.create(360, 1620, 'coin');
            var coin5 = this.coins.create(2150, 1760, 'coin');
            var coin6 = this.coins.create(1750, 1700, 'coin');
            var coin7 = this.coins.create(1350, 1760, 'coin');
            var coin8 = this.coins.create(950, 1700, 'coin');
            var coin9 = this.coins.create(550, 1760, 'coin');
            var coin10 = this.coins.create(1460, 950, 'coin');
            var coin11 = this.coins.create(320, 1160, 'coin');
            var coin12 = this.coins.create(2350, 750, 'coin');

            var coin13 = this.coins.create(2050, 2620, 'coin');
            var coin14 = this.coins.create(1850, 2550, 'coin');
            var coin15 = this.coins.create(1650, 2620, 'coin');
            var coin16 = this.coins.create(1450, 2550, 'coin');
            var coin17 = this.coins.create(1250, 2620, 'coin');
            var coin18 = this.coins.create(1050, 2550, 'coin');
            var coin19 = this.coins.create(850, 2620, 'coin');
            var coin22 = this.coins.create(770, 3680, 'coin');

            //var coin13 = this.coins.create(220, 3750, 'coin');
            

            var check1 = this.checkpoints1.create(2220, 2670, 'checkpoint');
            var check2 = this.checkpoints2.create(2340, 1840, 'checkpoint');

            game.add.image(1290, 2900, 'setadireita');
            game.add.image(1240, 2900, 'setaesquerda');
            game.add.image(330, 1750, 'setabaixo');
            game.add.image(1460, 900, 'setaesquerda');
            game.add.image(1550, 450, 'setacima');
            game.add.image(1575, 475, 'setadireita');
            
            game.add.image(1350, 3350, 'elevator');
            game.add.image(2100, 3000, 'elevator');
            game.add.image(910, 2380, 'elevator');
            game.add.image(110, 2150, 'elevator');
            game.add.image(340, 1450, 'elevator');
            game.add.image(380, 1140, 'elevator');

            this.stationary.create(0, 3800, 'inicio');
            this.stationary.create(1220, 3800, 'inicio');

            this.stationary.create(300, 3730, 'plataformagrande2');
            this.stationary.create(750, 3720, 'platform22');
            this.stationary.create(950, 3710, 'platform33');
            this.stationary.create(1135, 3700, 'plataformagrande2');
            this.stationary.create(1600, 3690, 'platform22');
            this.stationary.create(1800, 3680, 'plataformanormal2');
            this.stationary.create(2075, 3670, 'plataformanormal2');
            this.stationary.create(2275, 3600, 'platform22');

            this.stationary.create(2075, 3530, 'plataformanormal2');
            this.stationary.create(1850, 3460, 'plataformanormal2');
            this.stationary.create(1435, 3390, 'plataformagrande2');

            this.stationary.create(800, 3040, 'plataformagrande2');
            this.stationary.create(650, 3110, 'platform22');
            this.stationary.create(420, 3180, 'plataformanormal2');

            this.stationary.create(1450, 3040, 'platform33');
            this.stationary.create(1630, 3040, 'platform33');
            this.stationary.create(1810, 3040, 'platform33');
            this.stationary.create(1990, 3040, 'platform33');

            this.stationary.create(2250, 3340, 'plataformanormal2');

            this.stationary.create(1990, 2650, 'plataformanormal2');
            this.stationary.create(1790, 2580, 'plataformanormal2');
            this.stationary.create(1590, 2650, 'plataformanormal2');
            this.stationary.create(1390, 2580, 'plataformanormal2');
            this.stationary.create(1190, 2650, 'plataformanormal2');
            this.stationary.create(990, 2580, 'plataformanormal2');
            this.stationary.create(790, 2650, 'plataformanormal2');
            this.stationary.create(590, 2580, 'plataformanormal2');

            this.stationary.create(710, 2510, 'platform22');

            this.stationary.create(810, 2440, 'platform22');

            this.stationary.create(2200, 2040, 'platform22');

            this.stationary.create(2300, 1970, 'platform22');

            this.stationary.create(2000, 1800, 'plataformagrande2');
            this.stationary.create(1600, 1730, 'plataformagrande2');
            this.stationary.create(1200, 1800, 'plataformagrande2');
            this.stationary.create(800, 1730, 'plataformagrande2');
            this.stationary.create(400, 1800, 'plataformagrande2');

            this.stationary.create(400, 1870, 'plataformagigante2');

            this.stationary.create(250, 2200, 'plataformanormal2');

            this.stationary.create(170, 2200, 'platform33');

            this.stationary.create(200, 1660, 'plataformagrande2');
            this.stationary.create(600, 1590, 'plataformagrande2');

            this.stationary.create(2200, 1340, 'platform22');
            this.stationary.create(2050, 1270, 'platform22');
            this.stationary.create(1900, 1200, 'platform22');
            this.stationary.create(1750, 1130, 'platform22');
            this.stationary.create(1600, 1060, 'platform22');
            this.stationary.create(1450, 990, 'platform22');
            this.stationary.create(1300, 1060, 'platform22');
            this.stationary.create(1150, 1130, 'platform22');
            this.stationary.create(1000, 1200, 'platform22');
            this.stationary.create(850, 1270, 'platform22');
            this.stationary.create(700, 1340, 'platform22');
            this.stationary.create(550, 1410, 'platform22');
            this.stationary.create(400, 1480, 'platform22');
            this.stationary.create(300, 1200, 'platform22');

            this.stationary.create(1400, 500, 'plataformanormal2');
            this.stationary.create(1600, 570, 'platform22');
            this.stationary.create(1750, 640, 'platform22');
            this.stationary.create(1900, 710, 'platform22');
            this.stationary.create(2050, 780, 'platform22');
            this.stationary.create(2200, 780, 'platform33');
            this.stationary.create(2350, 780, 'platform33');

            this.stationary.create(1500, 430, 'platform33');
            this.stationary.create(1400, 360, 'platform33');
            this.stationary.create(1300, 290, 'platform33');
            this.stationary.create(1150, 220, 'platform22');

            this.stationary.create(2150, 3400, 'platform22');
            

            this.passafase.create(1150, 135, 'flag');
            //this.passafase.create(300, 3700, 'flag');
            
            

            //this.stationary.create(2150, 2700, 'platform22');

            this.stationary.create(1700, 3730, 'platform22');
            

            this.stationary.create(0, 2720, 'plataformagigante2');
            this.stationary.create(-2020, 2200, 'plataformagigante2');
            
            this.stationary.create(400, 1875, 'vertical2');
            


            this.stationary.setAll('body.allowGravity', false);
            this.stationary.setAll('body.immovable', true);

            this.passafase.setAll('body.allowGravity', false);
            this.passafase.setAll('body.immovable', true);

            //  Platforms that move
            this.clouds = this.add.physicsGroup();
            this.sobes = this.add.physicsGroup();
            this.inimigos = this.add.physicsGroup();

            rato1 = new inimigo(this.game, 1200, 3675, 'rato', this.inimigos);

            rato1.addMotionPath([
                { x: "0", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-0", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            rato2 = new inimigo(this.game, 1870, 3660, 'rato2', this.inimigos);

            rato2.addMotionPath([
                { x: "0", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-0", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            rato3 = new inimigo(this.game, 1675, 3365, 'rato2', this.inimigos);

            rato3.addMotionPath([
                { x: "0", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-0", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            rato3 = new inimigo(this.game, 1600, 3365, 'rato2', this.inimigos);

            rato3.addMotionPath([
                { x: "0", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-0", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            rato3 = new inimigo(this.game, 1500, 3365, 'rato', this.inimigos);

            rato3.addMotionPath([
                { x: "0", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-0", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]); 
            fantasma1 = new inimigo(this.game, 800, 2990, 'ghost3', this.inimigos);

            fantasma1.addMotionPath([
                { x: "+300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);        
            fantasma2 = new inimigo(this.game, 410, 3130, 'ghost2', this.inimigos);

            fantasma2.addMotionPath([
                { x: "+130", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-130", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma3 = new inimigo(this.game, 2250, 3290, 'ghost1', this.inimigos);

            fantasma3.addMotionPath([
                { x: "+110", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-110", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma4 = new inimigo(this.game, 1990, 2600, 'ghost4', this.inimigos);

            fantasma4.addMotionPath([
                { x: "+110", xSpeed: 3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-110", xSpeed:3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma5 = new inimigo(this.game, 1790, 2530, 'ghost1', this.inimigos);

            fantasma5.addMotionPath([
                { x: "+110", xSpeed: 3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-110", xSpeed:3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma6 = new inimigo(this.game, 1590, 2600, 'ghost3', this.inimigos);

            fantasma6.addMotionPath([
                { x: "+110", xSpeed: 2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-110", xSpeed:2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma7 = new inimigo(this.game, 1390, 2530, 'ghost2', this.inimigos);

            fantasma7.addMotionPath([
                { x: "+110", xSpeed: 1500, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-110", xSpeed:1500, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma8 = new inimigo(this.game, 1190, 2600, 'ghost1', this.inimigos);

            fantasma8.addMotionPath([
                { x: "+110", xSpeed: 1000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-110", xSpeed:1000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma9 = new inimigo(this.game, 990, 2530, 'ghost4', this.inimigos);

            fantasma9.addMotionPath([
                { x: "+110", xSpeed: 3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-110", xSpeed:3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]); 
            fantasma9 = new inimigo(this.game, 790, 2600, 'ghost3', this.inimigos);

            fantasma9.addMotionPath([
                { x: "+110", xSpeed: 2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-110", xSpeed:2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]); 
            fantasma10 = new inimigo(this.game, 2000, 1750, 'ghost3', this.inimigos);

            fantasma10.addMotionPath([
                { x: "+300", xSpeed: 2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-300", xSpeed:2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);

            fantasma11 = new inimigo(this.game, 1600, 1680, 'ghost4', this.inimigos);

            fantasma11.addMotionPath([
                { x: "+300", xSpeed: 1500, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-300", xSpeed:1500, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma12 = new inimigo(this.game, 1200, 1750, 'ghost1', this.inimigos);

            fantasma12.addMotionPath([
                { x: "+300", xSpeed: 3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-300", xSpeed:3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma12b = new inimigo(this.game, 1500, 1750, 'ghost2', this.inimigos);

            fantasma12b.addMotionPath([
                { x: "-300", xSpeed: 1500, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "+300", xSpeed:1500, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma13 = new inimigo(this.game, 800, 1680, 'ghost3', this.inimigos);

            fantasma13.addMotionPath([
                { x: "+300", xSpeed: 2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-300", xSpeed:2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma13b = new inimigo(this.game, 1100, 1680, 'ghost4', this.inimigos);

            fantasma13b.addMotionPath([
                { x: "-300", xSpeed: 3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "+300", xSpeed:3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma14 = new inimigo(this.game, 400, 1750, 'ghost1', this.inimigos);

            fantasma14.addMotionPath([
                { x: "+300", xSpeed: 2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "-300", xSpeed:2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);
            fantasma14b = new inimigo(this.game, 700, 1750, 'ghost2', this.inimigos);

            fantasma14b.addMotionPath([
                { x: "-300", xSpeed: 1500, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "+300", xSpeed:1500, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);

            



            game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista01Visible, this);
            game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista03Visible, this);
            game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista03Visible, this);


            var elevador1 = new CloudPlatform(this.game, 1250, 3390, 'platform22', this.clouds);

            elevador1.addMotionPath([
                { x: "0", xSpeed: 2000, xEase: "Linear", y: "-350", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 2000, xEase: "Linear", y: "+350", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);

            var elevador2 = new CloudPlatform(this.game, 2150, 2720, 'platform22', this.clouds);

            elevador2.addMotionPath([
                { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+680", ySpeed: 3000, yEase: "Sine.easeIn" },
                { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-680", ySpeed: 3000, yEase: "Sine.easeOut" }
                ]);

            var elevador3 = new CloudPlatform(this.game, 890, 2440, 'plataformanormal2', this.clouds);

            elevador3.addMotionPath([
                { x: "+1300", xSpeed: 4000, xEase: "Linear", y: "-400", ySpeed: 4000, yEase: "Sine.easeIn" },
                { x: "-1300", xSpeed: 4000, xEase: "Linear", y: "+400", ySpeed: 4000, yEase: "Sine.easeOut" }
                ]);

            var elevador4 = new CloudPlatform(this.game, 2400, 1970, 'platform33', this.clouds);

            elevador4.addMotionPath([
                { x: "0", xSpeed: 2000, xEase: "Linear", y: "-100", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 2000, xEase: "Linear", y: "+100", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);

            var elevador5 = new CloudPlatform(this.game, 50, 2150, 'platform22', this.clouds);

            elevador5.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-500", ySpeed: 3000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+500", ySpeed: 3000, yEase: "Sine.easeOut" }
                ]);

            var elevador6 = new CloudPlatform(this.game, 1000, 1590, 'platform33', this.clouds);

            elevador6.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-90", ySpeed: 3000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+90", ySpeed: 3000, yEase: "Sine.easeOut" }
                ]);

            var elevador7 = new CloudPlatform(this.game, 1150, 1590, 'platform33', this.clouds);

            elevador7.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-90", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+90", ySpeed: 3000, yEase: "Sine.easeOut" }
                ]);

            var elevador8 = new CloudPlatform(this.game, 1300, 1590, 'platform33', this.clouds);

            elevador8.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-90", ySpeed: 3000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+90", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);

            var elevador9 = new CloudPlatform(this.game, 1450, 1590, 'platform33', this.clouds);

            elevador9.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-90", ySpeed: 1000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+90", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);

            var elevador10 = new CloudPlatform(this.game, 1600, 1590, 'platform33', this.clouds);

            elevador10.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-90", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+90", ySpeed: 1000, yEase: "Sine.easeOut" }
                ]);
            var elevador11 = new CloudPlatform(this.game, 1750, 1590, 'platform33', this.clouds);

            elevador11.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-90", ySpeed: 500, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+90", ySpeed: 1000, yEase: "Sine.easeOut" }
                ]);
            var elevador12 = new CloudPlatform(this.game, 1900, 1590, 'platform33', this.clouds);

            elevador12.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-90", ySpeed: 1000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+90", ySpeed: 500, yEase: "Sine.easeOut" }
                ]);
            var elevador13 = new CloudPlatform(this.game, 2050, 1590, 'platform33', this.clouds);

            elevador13.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-90", ySpeed: 500, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+90", ySpeed: 1000, yEase: "Sine.easeOut" }
                ]);
            var elevador14 = new CloudPlatform(this.game, 2200, 1590, 'platform33', this.clouds);

            elevador14.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-90", ySpeed: 1000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+90", ySpeed: 500, yEase: "Sine.easeOut" }
                ]);
            var elevador15 = new CloudPlatform(this.game, 2350, 1590, 'platform33', this.clouds);

            elevador15.addMotionPath([
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "-200", ySpeed: 1500, yEase: "Linear" },
                { x: "0", xSpeed: 3000, xEase: "Linear", y: "+200", ySpeed: 1500, yEase: "Sine.easeOut" }
                ]);

            var elevador16 = new CloudPlatform(this.game, 400, 1200, 'plataformanormal2', this.clouds);

            elevador16.addMotionPath([
                { x: "+1000", xSpeed: 5000, xEase: "Linear", y: "-700", ySpeed: 5000, yEase: "Sine.easeIn" },
                { x: "-1000", xSpeed: 5000, xEase: "Linear", y: "+700", ySpeed: 5000, yEase: "Sine.easeOut" }
                ]);

            var elevador17 = new CloudPlatform(this.game, 300, 1480, 'platform22', this.clouds);

            elevador17.addMotionPath([
                { x: "0", xSpeed: 4000, xEase: "Linear", y: "-280", ySpeed: 2000, yEase: "Sine.easeIn" },
                { x: "0", xSpeed: 4000, xEase: "Linear", y: "+280", ySpeed: 2000, yEase: "Sine.easeOut" }
                ]);

            //  The Player

            this.player1 = this.add.sprite(0, 3750, 'dude');
            //this.player1 = this.add.sprite(2320, 1925, 'dude');

            this.physics.arcade.enable(this.player1);

            this.player1.body.collideWorldBounds = true;
            this.player1.body.setSize(20, 32, 5, 16);

            this.player1.animations.add('left', [1, 2, 3], 10, true);
            this.player1.animations.add('turn', [4], 20, true);
            this.player1.animations.add('right', [5, 6, 7], 10, true);

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
            coin10.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin10.play('gira');
            coin11.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin11.play('gira');
            coin12.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin12.play('gira');
            coin13.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin13.play('gira');
            coin14.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin14.play('gira');
            coin15.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin15.play('gira');
            coin16.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin16.play('gira');
            coin17.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin17.play('gira');
            coin18.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin18.play('gira');
            coin19.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin19.play('gira');
            coin20.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin20.play('gira');
            coin21.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin21.play('gira');
            coin22.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            coin22.play('gira');

            check1.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            check1.play('gira');
            check2.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            check2.play('gira');

            this.camera.follow(this.player1);

            this.cursors = this.input.keyboard.createCursorKeys();

            this.clouds.callAll('start');
            this.sobes.callAll('start');
            this.inimigos.callAll('start');


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
            passoulvl = game.add.text(230, 540, '>Clique em qualquer lugar para ir para a segunda fase<', { fontSize: '32px', fill: '#ffffff'});
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
            txtMorreu2.text = 'SEU SCORE: ' + this.scorelvl12;

            txtMorreu.fixedToCamera = true;
            txtMorreu.visible = false;
            txtMorreu2.fixedToCamera = true;
            txtMorreu2.visible = false;

            resetaMorre.font = 'Press Start 2P';
            resetaMorre.fontSize = '14px';
            resetaMorre.fontWeight = 'bold';

            resetaMorre.stroke = '#000000';
            resetaMorre.strokeThickness = 6;
            resetaMorre.fill = '#ffffff';


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

            trofeu = game.add.sprite(580, 350, 'trofeu');
            trofeu.fixedToCamera = true;
            trofeu.visible = false;

            botaoVolumeOn.events.onInputUp.add(function () {
                this.lvl1music.pause();
        //this.game.sound.mute = true;
        botaoVolumeOff.visible = true;
        botaoVolumeOn.visible = false;
    },this);

            botaoVolumeOff.events.onInputUp.add(function () {
        // this.game.sound.mute = false;
        this.lvl1music.resume();
        botaoVolumeOn.visible = true;
        botaoVolumeOff.visible = false;
    },this);

            resetaSempre.events.onInputUp.add(function () {
                this.game.state.restart();
                this.scorelvl1 = 0;
                this.scorelvl12 = 0;
                this.confere = false;
                this.confere2 = false;
                this.lvl1music.destroy();

            },this);

            resetaSempre2.events.onInputUp.add(function () {
                this.game.state.restart();
                this.scorelvl1 = 0;
                this.scorelvl12 = 0;
                this.confere = false;
                this.confere2 = false;
                this.lvl1music.destroy();

            },this);
            menu.events.onInputUp.add(function () {
                this.game.state.start("Menu");
                this.scorelvl1 = 0;
                this.scorelvl12 = 0;
                this.confere = false;
                this.confere2 = false;
                this.lvl1music.destroy();
            },this);
            menu2.events.onInputUp.add(function () {
                this.game.state.start("Menu");
                this.scorelvl1 = 0;
                this.scorelvl12 = 0;
                this.confere = false;
                this.confere2 = false;
                this.lvl1music.destroy();
            },this);
            resetaMorre.events.onInputUp.add(function () {


             if (this.confere==true) {

                this.player1.reset(2220, 2660);
                menuMorte.visible = false;
                resetaMorre.visible = false;
                txtMorreu2.visible = false;
                txtMorreu.visible = false;
                resetaSempre2.visible = false;
                menu2.visible = false;
            }

            if (this.confere2==true) {

              this.player1.reset(2340, 1820);
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
},

customSep: function (player1, platform) {

    if (!this.locked && player1.body.velocity.y > 0)
    {
        this.locked = true;
        this.lockedTo = platform;
        platform.player1Locked = true;

        player1.body.velocity.y = 0;
    }

},


checkLock: function () {

    this.player1.body.velocity.y = 0;

            //  If the player has walked off either side of the platform then they're no longer locked to it
            if (this.player1.body.right < this.lockedTo.body.x || this.player1.body.x > this.lockedTo.body.right)
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
                this.player1.x += this.lockedTo.deltaX;
                this.player1.y = this.lockedTo.y - 48;

                if (this.player1.body.velocity.x !== 0)
                {
                    this.player1.body.velocity.y = 0;
                }
            }

            if (this.willJump)
            {
                this.willJump = false;

                if (this.lockedTo && this.lockedTo.deltaY < 0 && this.wasLocked)
                {
                    //  If the platform is moving up we add its velocity to the players jump
                    this.player1.body.velocity.y = -300 + (this.lockedTo.deltaY * 10);
                }
                else
                {
                    this.player1.body.velocity.y = -300;
                }

                this.jumpTimer = this.time.time + 750;
            }

            if (this.wasLocked)
            {
                this.wasLocked = false;
                this.lockedTo.player1Locked = false;
                this.lockedTo = null;
            }

        },

        mata: function(){
            this.player1.kill();
            this.mortesound.play();
           // this.player.reset(0, 850);
          // this.score = 0;
         //  this.score2 = 0;
         if (this.confere==true) {
            resetaMorre.visible = true;
        } 
        if (this.confere2==true) {
            resetaMorre.visible = true;
        } 
        menu2.visible = true;
        menuMorte.visible = true;
        txtMorreu.visible = true;
        txtMorreu2.visible = true;
        resetaSempre2.visible = true;

    },

    passa: function(){
        trofeu.visible = true;
        passoulvl.visible = true;
        passoulvl2.visible = true;
        menuMorte.visible = true;
        txtMorreu2.visible = true;
        this.game.paused = true;
        this.game.state.start("text2");
        conclui = true;
        this.lvl1music.destroy();
        this.confere2 = false;
        this.confere = false;
        this.scorelvl1 = 0;
        this.scorelvl12 = 0;
    },
    pegamoeda: function(player1, coin){
     coin.kill();
     this.scorelvl1 += 10;
     this.scorelvl12 +=10;
     scoreText.text = 'SCORE: ' + this.scorelvl1;
     txtMorreu2.text = 'SEU SCORE: ' + this.scorelvl12;
     this.coinsound.play();
       this.conquista01();
       this.conquista02();
       this.conquista03();
 },

 pegacheck: function(player1, check1){
    check1.kill();
    this.checksound.play();
            //this.score += 10;
            this.confere = true;
        },
        pegacheck2: function(player1, check2){
            check2.kill();
            this.checksound.play();
            //this.score += 10;
            this.confere2 = true;
            this.confere = false;
        },

        conquista01: function(){
          if (this.scorelvl1 == 10) {
            conquista1.visible = true;

          }
          this.conquista01Some();

        },
                conquista02: function(){
          if (this.scorelvl1 == 30) {
            conquista2.visible = true;

          }
          this.conquista02Some();

        },
                conquista03: function(){
          if (this.scorelvl1 == 220) {
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

    this.physics.arcade.collide(this.coins, this.stationary);
    this.physics.arcade.collide(this.player1, this.coins, this.pegamoeda, null, this);
    this.physics.arcade.collide(this.player1, this.stationary);
    this.physics.arcade.collide(this.player1, this.clouds, this.customSep, null, this);
    this.physics.arcade.collide(this.player1, this.passafase, this.passa, null, this);
    this.physics.arcade.collide(this.player1, this.inimigos, this.mata, null, this);
    this.physics.arcade.collide(this.checkpoints1, this.stationary);
    this.physics.arcade.collide(this.checkpoints2, this.stationary);
    this.physics.arcade.collide(this.player1, this.checkpoints1, this.pegacheck, null, this);
    this.physics.arcade.collide(this.player1, this.checkpoints2, this.pegacheck2, null, this);

            //  Do this AFTER the collide check, or we won't have blocked/touching set
            var standing = this.player1.body.blocked.down || this.player1.body.touching.down || this.locked;

            this.player1.body.velocity.x = 0;

            if (this.cursors.left.isDown)
            {
                if (this.player1.body.touching.down) {
                   this.walk.play('',0,1,false, false);
               }
               this.player1.body.velocity.x = -150;

             //////////BUG DE ANIMAÇÃO
             // if (this.facing !== 'left')
             // {
                this.player1.play('left');
                this.facing = 'left';
            // }
        }
        else if (this.cursors.right.isDown)
        {
            if (this.player1.body.touching.down) {
                this.walk.play('',0,1,false, false);
            }
            this.player1.body.velocity.x = 150;
            //////////BUG DE ANIMAÇÃO
            //if (this.facing !== 'right')
            //{
                this.player1.play('right');
                this.facing = 'right';
           // }
       }
       else
       {
        this.player1.frame = 4;
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

    this.player1Locked = false;

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

    this.player1Locked = false;

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

    this.player1Locked = false;

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