var passouText3 = false;
var text3 = function(game){}

var content3 = [
"'Ufa! Por pouco a radiação não me alcança.. Estou certo de que logo chegarei",
"à nave que está me esperando. Já estou tão alto que posso sentir meu traje de",
"astronauta congelar... Esse é mais um dos motivos para me apressar. Quando chegar",
"na termosfera, não devo dar mole, pois minha proteção não vai aguentar por muito",
"tempo. E como se não bastasse, pequenos asteroides estão invadindo a órbita da",
"Terra. Tenho que desviá-los. E se a atmosfera estiver do jeito que conheço, devem",
"existir vários lixos espaciais orbitando o planeta. Tentarei usá-los para me",
"impulsionar até chegar na nave, tomando cuidado para desviar de possíveis buracos",
"negros.'",
"",
"",
"",
"-Apresse-se! O traje não aguentará por muito tempo.",
"-Moedas douradas são legais, aumentam seu score!",
"-Moedas roxas são checkpoints!",
"                                                           >Clique para continuar<"
];

var line = [];

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 120;
var lineDelay = 400;

text3.prototype = {

    create: function(){

        this.textmusic3;
        this.textmusic3 = game.add.audio('textmusic', 0.5, true, true);
        this.textmusic3.play();
        
        comestrela = game.add.sprite(0, 0, 'comestrela');

        game.time.events.repeat(2000,999999, function() {    
            game.add.tween(comestrela).to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);
            game.add.tween(comestrela).to({y: 10}, 4000, Phaser.Easing.Linear.None, true);

        }, this);
        game.time.events.repeat(4000,999999, function() {    
            game.add.tween(comestrela).to({alpha: 1}, 1500, Phaser.Easing.Linear.None, true); 
            game.add.tween(comestrela).to({y: -10}, 4000, Phaser.Easing.Linear.None, true);   
        }, this);

        text = game.add.text(32, 32, '', { font: "15px Arial", fill: "#19de65" });

        text.font = 'Press Start 2P';
        text.fontSize = '14px';
        text.fontWeight = 'bold';

        text.stroke = '#000000';
        text.strokeThickness = 6;
        text.fill = '#ffffff';

        this.nextLine();
        game.input.onDown.add(function () {
            wordIndex = 0;
            lineIndex = 0;
            passouText3 = true;
            this.game.state.start("Game3");
            this.textmusic3.destroy();
        }, this);

    },

    nextLine: function() {

        if (lineIndex === content3.length)
        {
        //  We're finished
        return;
    }

    //  Split the current line on spaces, so one word per array element
    line = content3[lineIndex].split(' ');

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