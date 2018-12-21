var creditos = function(game){}

var content4 = [
"       Músicas por:",
"Omnigrad (YouTube)",
"404 (YouTube)",
"Timthehuman (YouTube)",
"Maikon Souza (YouTube) - Mochila de Criança (SoundCloud)",
"Axel del Grey (YouTube)",
"",
"       Efeitos sonoros por:",
"freesound.org",
"",
"       Imagens por:",
"phaser.io",
"hipwallpaper.com",
"wallpaper-house.com",
"iconfinder.com",
"itch.io",
"pjcr16 (wordpress.com)",
"",
"Grande parte da arte audiovisual do jogo é de autoria dos",
"desenvolvedores do jogo:",  
"-Henrique S. Rampazzo",  
"-Mateus Petry",  
"-Matheus Pratto               >Clique para voltar ao menu<" 

];

var line = [];

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 120;
var lineDelay = 400;

creditos.prototype = {

    create: function(){

        this.creditmusic;
        this.creditmusic = game.add.audio('creditmusic', 0.5, true, true);
        this.creditmusic.play();
        
        comestrela = game.add.sprite(0, 0, 'pixelart');

        game.time.events.repeat(2000,999999, function() {    
            game.add.tween(comestrela).to({alpha: 1}, 1500, Phaser.Easing.Linear.None, true);
            game.add.tween(comestrela).to({y: -50}, 4000, Phaser.Easing.Linear.None, true);

        }, this);
        game.time.events.repeat(4000,999999, function() {    
            game.add.tween(comestrela).to({alpha: 0.7}, 1500, Phaser.Easing.Linear.None, true); 
            game.add.tween(comestrela).to({y: -20}, 4000, Phaser.Easing.Linear.None, true);   
        }, this);

        text = game.add.text(32, 32, '', { font: "15px Arial", fill: "#19de65" });

        text.font = 'Press Start 2P';
        text.fontSize = '11px';
        text.fontWeight = 'bold';

        text.stroke = '#000000';
        text.strokeThickness = 6;
        text.fill = '#ffffff';

        this.nextLine();

        game.input.onDown.add(function () {
            wordIndex = 0;
            lineIndex = 0;
            passouText3 = true;
            this.creditmusic.destroy();
            this.game.state.start("Menu");

        }, this);

    },

    nextLine: function() {

        if (lineIndex === content4.length)
        {
        //  We're finished
        return;
    }

    //  Split the current line on spaces, so one word per array element
    line = content4[lineIndex].split(' ');

    //  Reset the word index to zero (the first word in the line)
    wordIndex = 0;

    //  Call the 'nextWord' function once for each word in the line (line.length)
    game.time.events.repeat(wordDelay, line.length, this.nextWord, this);

    //  Advance to the next line
    lineIndex++;

},

nextWord: function() {

    //  Add the next word onto the text string, followed by a space
    text.text = text.text.concat(line[wordIndex] + " ");

    //  Advance the word index to the next word in the line
    wordIndex++;

    //  Last word?
    if (wordIndex === line.length)
    {
        //  Add a carriage return
        text.text = text.text.concat("\n");

        //  Get the next line after the lineDelay amount of ms has elapsed
        game.time.events.add(lineDelay, this.nextLine, this);

    }

}

}