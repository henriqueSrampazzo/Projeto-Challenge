var conclui2 = false;

var cliqueS = false;
var cliqueE = false;
var cliqueN = false;
var cliqueA = false;
var cliqueI = false;
var cliqueSx = false;
var cliqueEx = false;
var cliqueNx = false;
var cliqueAx = false;
var cliqueIx = false;
var clicouTodos = false;

var theGame = function () {

  this.bg = null;
  this.trees = null;
  this.trees2 = null;
  this.montanha = null;
  this.moita = null;

  this.player = null;

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

  this.score = 0;
  this.score2 = 0;
  this.scoreText;

  this.trofeu;
  this.passoulvl;
  this.passoulvl2;

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
  this.resetaMorre2;
  this.resetaMorre;
  this.confere = false;
  this.confere2 = false;

  this.conquista1;
  this.conquista2;
  this.conquista3;

  this.starman;
  this.jump;
  this.walk;
  this.coinsound;
  this.checksound;
  this.mortesound;

  this.conferealtofuncao = true;
  this.conferealtofuncao2 = true;
  this.conferealtofuncao3 = false;
  this.conferealtofuncao4 = false;
  this.conferealtofuncao5 = false;
  this.conferealtofuncao6 = false;
  this.chao1 = null;
  this.chao2 = null;
  this.chao3 = null;


}

theGame.prototype = {

  init: function () {

    this.game.renderer.renderSession.roundPixels = true;

    this.world.resize(1220, 480*10);

    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.physics.arcade.gravity.y = 600;

  },


  create: function () {


    this.background = this.add.tileSprite(0, 0, 1220, 480*10, 'background');
    this.background.fixedToCamera = true;
    this.montanha = this.add.tileSprite(0, 3940, 1220, 800, 'montanha');
    this.moita = this.add.tileSprite(0, 4635, 480*9, 100, 'moita');

    this.trees2 = this.add.tileSprite(0, 4700, 1220, 116, 'layer4');

    this.trees = this.add.tileSprite(0, 4700, 1220, 116, 'layer3');




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



            this.starman = game.add.audio('starman');
            this.starman.play('', 0, 0.5, true, false);



            this.jump = game.add.audio('jump');
            this.walk = game.add.audio('walk');
            this.coinsound = game.add.audio('coinsound');
            this.checksound = game.add.audio('checksound');
            this.mortesound = game.add.audio('mortesound');

         //CRIA VÁRIAS MOEDAS COM FOR
         

        //for (var i = 0; i < 112; i++){
        //  Create a star inside of the 'stars' group
        //var coin = this.coins.create(i * 70, 0, 'coin');

        //  Let gravity do its thing
        //coin.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value

    //}
    var check1 = this.checkpoints1.create(340, 2990, 'checkpoint');
    var check2 = this.checkpoints2.create(300, 1400, 'checkpoint');


    var coin = this.coins.create(1190, 4050, 'coin');
    var coin2 = this.coins.create(150, 4050, 'coin');
    var coin3 = this.coins.create(500, 300, 'coin');
    var coin4 = this.coins.create(1000, 230, 'coin');

    var coin5 = this.coins.create(200, 2780, 'coin');

    var coin6 = this.coins.create(1100, 2710, 'coin');

    var coin7 = this.coins.create(1100, 2520, 'coin');
    var coin8 = this.coins.create(100, 2520, 'coin');

    var coin9 = this.coins.create(10, 2305, 'coin');

    this.passafase.create(675, 40, 'flag');
    this.stationary.create(0, 4737, 'inicio');
    this.stationary.create(300, 1240, 'platform2');
    this.stationary.create(200, 1310, 'platform2');
    this.stationary.create(400, 1170, 'platform2');
    this.stationary.create(500, 1100, 'platform2');
    this.stationary.create(540, 610, 'balao');


    this.stationary.create(0, 330, 'nuvemesquerda');
    this.stationary.create(321, 330, 'nuvemmeio');
    this.stationary.create(612, 330, 'nuvemmeio');
    this.stationary.create(850, 330, 'nuvemdireita');

    this.stationary.create(0, 190, 'nuvemesquerda');
    this.stationary.create(700, 190, 'nuvemesquerda');
    this.stationary.create(1020, 190, 'nuvemdireita');
            //this.stationary.create(321, 190, 'nuvemmeio');
            // this.stationary.create(612, 330, 'nuvemmeio');
            this.stationary.create(320, 190, 'nuvemdireita');

            this.stationary.create(610, 120, 'cloud-platform');

            this.stationary.create(0, 260, 'nuvemesquerda');
            this.stationary.create(600, 260, 'nuvemesquerda');
            this.stationary.create(900, 260, 'nuvemdireita');
            //this.stationary.create(321, 260, 'nuvemmeio');
            // this.stationary.create(612, 330, 'nuvemmeio');
            this.stationary.create(200, 260, 'nuvemdireita');


            this.stationary.create(900, 1050, 'platform');
            this.stationary.create(1000, 1000, 'platform2');
            //this.stationary.create(900, 950, 'platform2');
            this.stationary.create(400, 650, 'platform');
           // this.stationary.create(632, 220, 'platform');
           this.stationary.create(1150, 400, 'cloud-platform');


           this.stationary.create(300, 4700, 'platform3');
           this.stationary.create(425, 4650, 'platform3');
           this.stationary.create(550, 4600, 'platform3');
           this.stationary.create(675, 4550, 'platform3');
           this.stationary.create(800, 4500, 'platform3');
           this.stationary.create(925, 4450, 'plataformagrande');
           this.stationary.create(1150, 4380, 'platform');
           this.stationary.create(1000, 4350, 'platform3');
           this.stationary.create(875, 4300, 'platform3');
           this.stationary.create(750, 4250, 'platform3');
           this.stationary.create(725, 4200, 'platform3');
           this.stationary.create(800, 4150, 'platform3');
           this.stationary.create(925, 4100, 'plataformagrande');

           this.stationary.create(1200, 4070, 'platform3');
           this.stationary.create(1100, 4000, 'platform3');
           this.stationary.create(1000, 3930, 'platform3');
           this.stationary.create(900, 3860, 'platform3');
           this.stationary.create(800, 3790, 'platform3');

           this.stationary.create(-15, 4070, 'platform3');
           this.stationary.create(100, 4000, 'platform3');
           this.stationary.create(200, 3930, 'platform3');
           this.stationary.create(300, 3860, 'platform3');
           this.stationary.create(400, 3790, 'platform3');

           this.stationary.create(600, 3720, 'platform2');
           this.stationary.create(700, 3650, 'platform3');
           this.stationary.create(600, 3580, 'platform3');
           this.stationary.create(700, 3510, 'platform3');
           this.stationary.create(600, 3460, 'platform3');
           this.stationary.create(700, 3390, 'platform3');
           this.stationary.create(600, 3320, 'platform3');
           this.stationary.create(700, 3250, 'platform3');
           this.stationary.create(600, 3180, 'platform3');
           this.stationary.create(700, 3110, 'platform3');


           this.stationary.create(0, 3040, 'nuvemesquerda');
           this.stationary.create(319, 3040, 'nuvemdireita');

           this.stationary.create(-5, 2970, 'nuvemdireita');
           this.stationary.create(400, 2970, 'nuvemesquerda');  
           this.stationary.create(720, 2970, 'nuvemmeio'); 
           this.stationary.create(1009, 2970, 'nuvemdireita'); 

           this.stationary.create(-400, 2900, 'nuvemgrande'); 
           this.stationary.create(900, 2900, 'nuvemgrande');

           this.stationary.create(-800, 2830, 'nuvemgrande');
           this.stationary.create(500, 2830, 'nuvemgrande');

           this.stationary.create(-600, 2760, 'nuvemgrande');
           this.stationary.create(700, 2760, 'nuvemgrande');

           this.stationary.create(-1000, 2690, 'nuvemgrande');
           this.stationary.create(300, 2690, 'nuvemgrande');

           this.stationary.create(-5, 2620, 'nuvemdireita');
           this.stationary.create(400, 2620, 'nuvemesquerda');  
           this.stationary.create(720, 2620, 'nuvemmeio'); 
           this.stationary.create(1009, 2620, 'nuvemdireita'); 

           this.stationary.create(-400, 2550, 'nuvemgrande'); 
           this.stationary.create(900, 2550, 'nuvemgrande');

           this.stationary.create(-800, 2480, 'nuvemgrande');
           this.stationary.create(500, 2480, 'nuvemgrande');

           this.stationary.create(-600, 2410, 'nuvemgrande');
           this.stationary.create(700, 2410, 'nuvemgrande');

           this.stationary.create(-1000, 2340, 'nuvemgrande');
           this.stationary.create(300, 2340, 'nuvemgrande');

           this.stationary.create(300, 2240, 'cloud-platform');
           this.stationary.create(600, 2240, 'cloud-platform');
           this.stationary.create(300, 2040, 'cloud-platform');
           this.stationary.create(600, 2040, 'cloud-platform');
           this.stationary.create(300, 1840, 'cloud-platform');
           this.stationary.create(600, 1840, 'cloud-platform');
           this.stationary.create(300, 1640, 'cloud-platform');
           this.stationary.create(600, 1640, 'cloud-platform');
           this.stationary.create(-800, 1440, 'nuvemgrande');
           this.stationary.create(600, 1440, 'cloud-platform');

           this.stationary.create(100, 1380, 'platform2');


           this.stationary.create(0, 4100, 'plataformagrande');


           this.stationary.setAll('body.allowGravity', false);
           this.stationary.setAll('body.immovable', true);

           this.fim.setAll('body.allowGravity', false);
           this.fim.setAll('body.immovable', true);




           this.passafase.setAll('body.allowGravity', false);
           this.passafase.setAll('body.immovable', true);


            // Adiciona a função add no objeto animations e cria animação giraMoeda em todos as moedas
           // this.coins.callAll('animations.add', 'animations', 'giraMoeda', [0, 1, 2, 3, 4, 5], 10, true);
            // Chama animação recém criada (giraMoeda) em todas as moedas
            //this.coins.callAll('animations.play', 'animations', 'giraMoeda');

            //  Platforms that move
            this.clouds = this.add.physicsGroup();
            this.sobes = this.add.physicsGroup();
            this.inimigos = this.add.physicsGroup();



            chao1 = new sobe(this.game, 0, 5000, 'traco', this.sobes);

            ghost1 = new inimigo(this.game, 925, 4395, 'ghost1', this.inimigos);
            ghost2= new inimigo(this.game, 925, 4050, 'ghost2', this.inimigos);
            ghost3 = new inimigo(this.game, 0, 4055, 'ghost3', this.inimigos);
            ghost4 = new inimigo(this.game, 300, 4055, 'ghost4', this.inimigos);

            ghost5 = new inimigo(this.game, 500, 2920, 'ghost1', this.inimigos);
            ghost6= new inimigo(this.game, 525, 2790, 'ghost2', this.inimigos);
            ghost7 = new inimigo(this.game, 0, 2790, 'ghost3', this.inimigos);
            ghost8 = new inimigo(this.game, 300, 2720, 'ghost4', this.inimigos);
            ghost9 = new inimigo(this.game, 1000, 2710, 'ghost1', this.inimigos);
            ghost10 = new inimigo(this.game, 300, 2510, 'ghost2', this.inimigos);
            ghost11 = new inimigo(this.game, 500, 2510, 'ghost3', this.inimigos);
            ghost12 = new inimigo(this.game, 300, 2510, 'ghost4', this.inimigos);
            ghost13 = new inimigo(this.game, 300, 2360, 'ghost1', this.inimigos);
            ghost14 = new inimigo(this.game, 600, 2370, 'ghost2', this.inimigos);
            ghost15 = new inimigo(this.game, 600, 2370, 'ghost3', this.inimigos);
            ghost16 = new inimigo(this.game, 1000, 220, 'ghost4', this.inimigos);
            ghost17 = new inimigo(this.game, 600, 280, 'ghost1', this.inimigos);



            game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista01Visible, this);
            game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista02Visible, this);
            game.time.events.add(Phaser.Timer.SECOND * 4, this.conquista03Visible, this);

            chao1.animations.add('anima', [0, 1], 10, true);
            chao1.play('anima');

            chao1.addMotionPath([
              { x: "-0", xSpeed: 2000, xEase: "Linear", y: -5000, ySpeed: 450000}
              ]);


            ghost1.addMotionPath([
              { x: "+300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "-300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost2.addMotionPath([
              { x: "+300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "-300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost3.addMotionPath([
              { x: "+300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "-300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost4.addMotionPath([
              { x: "-300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost5.addMotionPath([
              { x: "+600", xSpeed: 5000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "-600", xSpeed:5000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost6.addMotionPath([
              { x: "+200", xSpeed: 3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "-200", xSpeed:3000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost7.addMotionPath([
              { x: "+300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "-300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost8.addMotionPath([
              { x: "-300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost9.addMotionPath([
              { x: "-300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost10.addMotionPath([
              { x: "-300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost11.addMotionPath([
              { x: "-400", xSpeed: 2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+400", xSpeed:2000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost12.addMotionPath([
              { x: "-300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost13.addMotionPath([
              { x: "-300", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+300", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost14.addMotionPath([
              { x: "-500", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+500", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]); 
            ghost15.addMotionPath([
              { x: "-200", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+200", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);
            ghost16.addMotionPath([
              { x: "-400", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+400", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]); 
            ghost17.addMotionPath([
              { x: "-200", xSpeed: 4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
              { x: "+200", xSpeed:4000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
              ]);

            

   // chao2 = new sobe(this.game, 500, 1000, 'traco', this.sobes);
   // //chao2.visible = false;


   //              chao2.addMotionPath([
   //              { x: "-0", xSpeed: 2000, xEase: "Linear", y: -480*3, ySpeed: 20000}
   //              ]);

   //              paraAnimacao();


   var cloud1 = new CloudPlatform(this.game, 600, 1100, 'cloud-platform', this.clouds);

   cloud1.addMotionPath([
    { x: "+200", xSpeed: 1000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeIn" },
    { x: "-200", xSpeed: 1000, xEase: "Linear", y: "-0", ySpeed: 2000, yEase: "Sine.easeOut" }
    ]);
   

   var cloud2 = new CloudPlatform(this.game, 300, 700, 'cloud-platform', this.clouds);

   cloud2.addMotionPath([
    { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+300", ySpeed: 2000, yEase: "Sine.easeIn" },
    { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-300", ySpeed: 2000, yEase: "Sine.easeOut" }
    ]);

   var cloud3 = new CloudPlatform(this.game, 1300, 1000, 'cloud-platform', this.clouds);

   cloud3.addMotionPath([
    { x: "-1400", xSpeed: 4000, xEase: "Linear", y: "-340", ySpeed: 4000, yEase: "Sine.easeIn" }
    ]);

   var cloud4 = new CloudPlatform(this.game, 700, 3790, 'cloud-platform', this.clouds);

   cloud4.addMotionPath([
    { x: "-300", xSpeed: 3000, xEase: "Linear", y: "0", ySpeed: 4000, yEase: "Sine.easeIn" },
    { x: "+300", xSpeed: 3000, xEase: "Linear", y: "0", ySpeed: 4000, yEase: "Sine.easeIn" }
    
    ]);
   var cloud5 = new CloudPlatform(this.game, 450, 2350, 'cloud-platform', this.clouds);

   cloud5.addMotionPath([
    { x: "-0", xSpeed: 3000, xEase: "Linear", y: "-900", ySpeed: 4000, yEase: "Sine.easeIn" },
    { x: "+0", xSpeed: 3000, xEase: "Linear", y: "0", ySpeed: 4000, yEase: "Sine.easeIn" }
    
    ]);




   var balao1 = new CloudPlatform(this.game, 640, 560, 'balao', this.clouds);

   balao1.addMotionPath([
    { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+10", ySpeed: 1000, yEase: "Linear" },
    { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-10", ySpeed: 1000, yEase: "Linear" }
    ]);

   var balao2 = new CloudPlatform(this.game, 740, 510, 'balao', this.clouds);

   balao2.addMotionPath([
    { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+10", ySpeed: 1000, yEase: "Linear" },
    { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-10", ySpeed: 1000, yEase: "Linear" }
    ]);

   var balao3 = new CloudPlatform(this.game, 840, 460, 'balao', this.clouds);

   balao3.addMotionPath([
    // { x: "0", xSpeed: 1000, xEase: "Linear", y: "+150", ySpeed: 1000, yEase: "Linear" },
    // { x: "0", xSpeed: 1000, xEase: "Linear", y: "-150", ySpeed: 1000, yEase: "Linear" },
    { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+10", ySpeed: 1000, yEase: "Linear" },
    { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-10", ySpeed: 1000, yEase: "Linear" }
    ]);
   var balao4 = new CloudPlatform(this.game, 940, 410, 'balao', this.clouds);

   balao4.addMotionPath([
    // { x: "0", xSpeed: 1000, xEase: "Linear", y: "+150", ySpeed: 1000, yEase: "Linear" },
    // { x: "0", xSpeed: 1000, xEase: "Linear", y: "-150", ySpeed: 1000, yEase: "Linear" },
    { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+10", ySpeed: 1000, yEase: "Linear" },
    { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-10", ySpeed: 1000, yEase: "Linear" }
    ]);
   var balao5 = new CloudPlatform(this.game, 1000, 410, 'balao', this.clouds);

   balao5.addMotionPath([
    // { x: "0", xSpeed: 1000, xEase: "Linear", y: "+150", ySpeed: 1000, yEase: "Linear" },
    // { x: "0", xSpeed: 1000, xEase: "Linear", y: "-150", ySpeed: 1000, yEase: "Linear" },
    { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+10", ySpeed: 1000, yEase: "Linear" },
    { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-10", ySpeed: 1000, yEase: "Linear" }
    ]);
   var balao6 = new CloudPlatform(this.game, 1060, 410, 'balao', this.clouds);

   balao6.addMotionPath([
    // { x: "0", xSpeed: 1000, xEase: "Linear", y: "+150", ySpeed: 1000, yEase: "Linear" },
    // { x: "0", xSpeed: 1000, xEase: "Linear", y: "-150", ySpeed: 1000, yEase: "Linear" },
    { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+10", ySpeed: 1000, yEase: "Linear" },
    { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-10", ySpeed: 1000, yEase: "Linear" }
    ]);
   var balao7 = new CloudPlatform(this.game, 1120, 410, 'balao', this.clouds);

   balao7.addMotionPath([
    // { x: "0", xSpeed: 1000, xEase: "Linear", y: "+150", ySpeed: 1000, yEase: "Linear" },
    // { x: "0", xSpeed: 1000, xEase: "Linear", y: "-150", ySpeed: 1000, yEase: "Linear" },
    { x: "+0", xSpeed: 2000, xEase: "Linear", y: "+10", ySpeed: 1000, yEase: "Linear" },
    { x: "-0", xSpeed: 2000, xEase: "Linear", y: "-10", ySpeed: 1000, yEase: "Linear" }
    ]);

            //  The Player
            //this.player = this.add.sprite(340, 2990, 'dude');
            this.player = this.add.sprite(0, 4690, 'dude');
            //this.player = this.add.sprite(200, 0, 'dude');

            this.physics.arcade.enable(this.player);


            this.player.body.collideWorldBounds = true;
            this.player.body.setSize(20, 32, 5, 16);

            this.player.animations.add('left', [1, 2, 3], 10, true);
            this.player.animations.add('turn', [4], 20, true);
            this.player.animations.add('right', [5, 6, 7], 10, true);

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
            check2.animations.add('gira', [0, 1, 2, 3, 4, 5], 10, true);
            check2.play('gira');




            this.camera.follow(this.player);

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
            passoulvl = game.add.text(230, 550, '>Clique em qualquer lugar para ir para a terceira fase<', { fontSize: '32px', fill: '#ffffff'});
            passoulvl2 = game.add.text(490, 240, 'LEVEL COMPLETO!', { fontSize: '32px', fill: '#ffffff'});
            passoulvl.fixedToCamera = true;
            passoulvl.visible = false;
            passoulvl2.fixedToCamera = true;
            passoulvl2.visible = false;
            menu = game.add.sprite(1120, 540, 'menu');
            menu2 = game.add.sprite(550, 370, 'menu');
            menu2.visible = false;
            pausado.fixedToCamera = true;
            pausado.visible = false;
            voltar.fixedToCamera = true;
            voltar.visible = false;
            resetaMorre.fixedToCamera = true;
            resetaMorre.visible = false;
            resetaMorre.inputEnabled = true;

            menu.fixedToCamera = true;
            menu.inputEnabled = true;
            menu2.fixedToCamera = true;
            menu2.inputEnabled = true;

    // resetaSempre.font = 'Press Start 2P';
    // resetaSempre.fontSize = '20px';
    // resetaSempre.fontWeight = 'bold';

    // resetaSempre.stroke = '#000000';
    // resetaSempre.strokeThickness = 6;
    // resetaSempre.fill = '#ffffff';

    // menu.font = 'Press Start 2P';
    // menu.fontSize = '20px';
    // menu.fontWeight = 'bold';

    // menu.stroke = '#000000';
    // menu.strokeThickness = 6;
    // menu.fill = '#ffffff';

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

    txtMorreu = game.add.text(490, 250, 'VOCÊ MORREU!', { fontSize: '32px', fill: '#ffffff'});
    txtMorreu2 = game.add.text(530, 300, 'SEU SCORE: ', { fontSize: '32px', fill: '#000'});
    txtMorreu2.text = 'SEU SCORE: ' + this.score2;

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

    trofeu = game.add.sprite(580, 350, 'trofeu');
    trofeu.fixedToCamera = true;
    trofeu.visible = false;

    botaoVolumeOn.events.onInputUp.add(function () {
      this.starman.pause();
        //this.game.sound.mute = true;
        botaoVolumeOff.visible = true;
        botaoVolumeOn.visible = false;
      },this);

    botaoVolumeOff.events.onInputUp.add(function () {
        // this.game.sound.mute = false;
        this.starman.resume();
        botaoVolumeOn.visible = true;
        botaoVolumeOff.visible = false;
      },this);

    resetaSempre.events.onInputUp.add(function () {
      this.game.state.restart();
      this.score = 0;
      this.score2 = 0;
      this.confere = false;
      this.confere2 = false;
      this.conferealtofuncao = true;        
      this.conferealtofuncao2 = true;
      this.conferealtofuncao3 = false;        
      this.conferealtofuncao4 = false;
      this.conferealtofuncao5 = false;        
      this.conferealtofuncao6 = false;
      this.starman.destroy();

    },this);

    resetaSempre2.events.onInputUp.add(function () {
      this.game.state.restart();
      this.score = 0;
      this.score2 = 0;
      this.confere = false;
      this.confere2 = false;
      this.conferealtofuncao = true;        
      this.conferealtofuncao2 = true;
      this.conferealtofuncao3 = false;        
      this.conferealtofuncao4 = false;
      this.conferealtofuncao5 = false;        
      this.conferealtofuncao6 = false;
      this.starman.destroy();

    },this);
    menu.events.onInputUp.add(function () {
      this.game.state.start("Menu");
      this.score = 0;
      this.score2 = 0;
      this.confere = false;
      this.confere2 = false;
      this.starman.destroy();
      this.conferealtofuncao = true;        
      this.conferealtofuncao2 = true;
      this.conferealtofuncao3 = false;        
      this.conferealtofuncao4 = false;
      this.conferealtofuncao5 = false;        
      this.conferealtofuncao6 = false;
    },this);
    menu2.events.onInputUp.add(function () {
      this.game.state.start("Menu");
      this.score = 0;
      this.score2 = 0;
      this.confere = false;
      this.confere2 = false;
      this.starman.destroy();
      this.conferealtofuncao = true;        
      this.conferealtofuncao2 = true;
      this.conferealtofuncao3 = false;        
      this.conferealtofuncao4 = false;
      this.conferealtofuncao5 = false;        
      this.conferealtofuncao6 = false;
    },this);

    resetaMorre.events.onInputUp.add(function () {

     chao1.kill();
     if (this.confere==true) {

      chao2 = new sobe(this.game, 0, 4070, 'traco', this.sobes);
      chao2.visible = true;
      chao2.animations.add('anima', [0, 1], 10, true);
      chao2.play('anima');

      chao2.addMotionPath([
        { x: "-0", xSpeed: 2000, xEase: "Linear", y: -5000, ySpeed: 200000}
        ]);

      chao2.stop();
      this.player.reset(340, 2990);
      menuMorte.visible = false;
      resetaMorre.visible = false;
      txtMorreu2.visible = false;
      txtMorreu.visible = false;
      resetaSempre2.visible = false;
      menu2.visible = false;

      this.conferealtofuncao = false;        
      this.conferealtofuncao2 = false;
      this.conferealtofuncao3 = true;
      this.conferealtofuncao4 = true;
      this.conferealtofuncao5 = false;        
      this.conferealtofuncao6 = false;
      chao2.start();

      chao2.visible = true;

            //this.carregaMotion();
            // this.starman.destroy();
          }
          if (this.confere2==true) {
           chao3 = new sobe(this.game, 0, 3500, 'traco', this.sobes);
           chao3.visible = true;
           chao3.animations.add('anima', [0, 1], 10, true);
           chao3.play('anima');

           chao3.addMotionPath([
            { x: "-0", xSpeed: 2000, xEase: "Linear", y: -5000, ySpeed: 100000}
            ]);
           chao3.stop();

           this.player.reset(300, 1390);
           menuMorte.visible = false;
           resetaMorre.visible = false;
           txtMorreu2.visible = false;
           txtMorreu.visible = false;
           resetaSempre2.visible = false;
           menu2.visible = false;
           this.conferealtofuncao = false;  
           this.conferealtofuncao2 = false;
           this.conferealtofuncao3 = false;  
           this.conferealtofuncao4 = false;
           this.conferealtofuncao5 = true;
           this.conferealtofuncao6 = true;
           chao3.start();
            //chao1.kill();
            //chao2.kill();

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


    //this.game.state.start("Menu");


    scoreText = game.add.text(16, 16, 'SCORE: 0', { fontSize: '32px', fill: '#000'});
    scoreText.fixedToCamera = true;

    scoreText.font = 'Press Start 2P';
    scoreText.fontSize = '20px';
    scoreText.fontWeight = 'bold';

    scoreText.stroke = '#000000';
    scoreText.strokeThickness = 6;
    scoreText.fill = '#ffffff';

  },



  customSep: function (player, platform) {

    if (!this.locked && player.body.velocity.y > 0)
    {
      this.locked = true;
      this.lockedTo = platform;
      platform.playerLocked = true;

      player.body.velocity.y = 0;
    }

  },


  checkLock: function () {

    this.player.body.velocity.y = 0;

            //  If the player has walked off either side of the platform then they're no longer locked to it
            if (this.player.body.right < this.lockedTo.body.x || this.player.body.x > this.lockedTo.body.right)
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
                this.player.x += this.lockedTo.deltaX;
                this.player.y = this.lockedTo.y - 48;

                if (this.player.body.velocity.x !== 0)
                {
                  this.player.body.velocity.y = 0;
                }
              }

              if (this.willJump)
              {
                this.willJump = false;

                if (this.lockedTo && this.lockedTo.deltaY < 0 && this.wasLocked)
                {
                    //  If the platform is moving up we add its velocity to the players jump
                    this.player.body.velocity.y = -300 + (this.lockedTo.deltaY * 10);
                  }
                  else
                  {
                    this.player.body.velocity.y = -300;
                  }

                  this.jumpTimer = this.time.time + 750;
                }

                if (this.wasLocked)
                {
                  this.wasLocked = false;
                  this.lockedTo.playerLocked = false;
                  this.lockedTo = null;
                }

              },




              mata: function(){
                this.player.kill();
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
        this.game.state.start("text3");
        conclui2 = true;
        this.starman.destroy();
        this.score = 0;
        this.score2 = 0;
        this.confere2 = false;
        this.confere = false;
        this.conferealtofuncao = true;
        this.conferealtofuncao2 = true;
        this.conferealtofuncao3 = false;
        this.conferealtofuncao4 = false;
        this.conferealtofuncao5 = false;
        this.conferealtofuncao6 = false;
      },

      pegamoeda: function(player, coin){
       coin.kill();
       this.score += 10;
       this.score2 +=10;
       scoreText.text = 'SCORE: ' + this.score;
       txtMorreu2.text = 'SEU SCORE: ' + this.score2;
       this.coinsound.play();
       this.conquista01();
       this.conquista02();
       this.conquista03();
     },

     pegacheck: function(player, check1){
      check1.kill();
      this.checksound.play();
      this.confere = true;
    },
    pegacheck2: function(player, check2){
      check2.kill();
      this.checksound.play();
            //this.score += 10;
            this.confere2 = true;
            this.confere = false;
          },


          confereAlto: function(){
           if (this.conferealtofuncao==true) {
            if(chao1.body.y < this.player.body.y) {
              this.mata();
            }

          }
          if (this.conferealtofuncao2==true) {
            if(chao1.body.y < this.player.body.y) {
              this.mata();
            }

          }
        },

        confereAlto2: function(){
         if (this.conferealtofuncao3==true) {
          if (chao2.body.y < this.player.body.y) {
            this.mata();
          }
        }
        if (this.conferealtofuncao4==true) {
          if (chao2.body.y < this.player.body.y) {
            this.mata();
          }
        }
      },

      confereAlto3: function(){
       if (this.conferealtofuncao5==true) {
        if (chao3.body.y < this.player.body.y) {
          this.mata();
        }
      }
      if (this.conferealtofuncao6==true) {
        if (chao3.body.y < this.player.body.y) {
          this.mata();
        }
      }
    },



        // carregaMotion: function(){
        // chao2 = new sobe(this.game, 500, 1000, 'traco', this.sobes);

        //                chao2.animations.add('anima', [0, 1, 2, 3], 10, true);
        //     chao2.play('anima');
        //         chao2.addMotionPath([
        //         { x: "-0", xSpeed: 2000, xEase: "Linear", y: -480*3, ySpeed: 20000}
        //         ]);

        // },


        paraAnimacao: function(){
          chao2.stop();
        },

        conquista01: function(){
          if (this.score == 10) {
            conquista1.visible = true;

          }
          this.conquista01Some();

        },
                conquista02: function(){
          if (this.score == 30) {
            conquista2.visible = true;

          }
          this.conquista02Some();

        },
                conquista03: function(){
          if (this.score == 90) {
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

          var myGlobalVar = this.score2;
          document.getElementById("valor").innerHTML = myGlobalVar;
            //alert(myGlobalVar);
            this.confereAlto();
            this.confereAlto2();
            this.confereAlto3();
            
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


    this.background.tilePosition.x = -(this.camera.x * 0.7);
    this.trees.tilePosition.x = -(this.camera.x * 0.9);

    this.physics.arcade.collide(this.coins, this.stationary);
    this.physics.arcade.collide(this.checkpoints1, this.stationary);
    this.physics.arcade.collide(this.checkpoints2, this.stationary);
    this.physics.arcade.collide(this.player, this.coins, this.pegamoeda, null, this);
    this.physics.arcade.collide(this.player, this.checkpoints1, this.pegacheck, null, this);
    this.physics.arcade.collide(this.player, this.checkpoints2, this.pegacheck2, null, this);
    this.physics.arcade.collide(this.player, this.stationary);

            //this.physics.arcade.collide(this.player, this.sobes, this.mata, null, this);
            this.physics.arcade.collide(this.player, this.inimigos, this.mata, null, this);
            this.physics.arcade.collide(this.player, this.fim, this.mata, null, this);
           // this.physics.arcade.collide(this.player, this.sobes, this.customSep, null, this);
           this.physics.arcade.collide(this.player, this.passafase, this.passa, null, this);
           this.physics.arcade.collide(this.player, this.clouds, this.customSep, null, this);


            //  Do this AFTER the collide check, or we won't have blocked/touching set
            var standing = this.player.body.blocked.down || this.player.body.touching.down || this.locked;


            //***CRIA O CHÃO2 E ADICIONA SUA ANIMAÇÃO, INVISÍVEL E PARADO***//
            // chao2 = new sobe(this.game, 0, 1000, 'traco', this.sobes);
            // chao2.animations.add('anima', [0, 1, 2, 3], 10, true);
            // chao2.play('anima');
            // chao2.visible = true;


            // chao2.addMotionPath([
            //     { x: "-0", xSpeed: 2000, xEase: "Linear", y: -480*3, ySpeed: 20000}
            //     ]);

            // chao2.stop();

            //**************************************************************//

            this.player.body.velocity.x = 0;

            if (this.cursors.left.isDown)
            {
              if (this.player.body.touching.down) {
               this.walk.play('',0,1,false, false);
             }
             this.player.body.velocity.x = -150;

             //////////BUG DE ANIMAÇÃO
             // if (this.facing !== 'left')
             // {
              this.player.play('left');
              this.facing = 'left';
            // }
          }
          else if (this.cursors.right.isDown)
          {
            if (this.player.body.touching.down) {
              this.walk.play('',0,1,false, false);
            }
            this.player.body.velocity.x = 150;
            //////////BUG DE ANIMAÇÃO
            //if (this.facing !== 'right')
            //{
              this.player.play('right');
              this.facing = 'right';
           // }
         }
         else
         {
          this.player.frame = 4;
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

        this.playerLocked = false;

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

        this.playerLocked = false;

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

        this.playerLocked = false;

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