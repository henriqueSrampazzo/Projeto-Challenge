var passouText1 = false;
var text1 = function(game){}

var content = [
"Após pesquisas e experimentos governamentais com a gravidade algo deu muito",
"errado, anomalias aconteceram, fazendo com que a gravidade fosse alterada",
"modificando o planeta Terra, levando a quase a extinção da humanidade.",
"",
" Depois do acontecimento, pessoas foram evacuadas para colônias experimentais",
"em Marte. Você está na pele do Astronauta Will, o qual busca alcançar a última",
"esperança: o Planeta Vermelho.",
"",
" Após os desastres ocorridos, o solitário Will refugiou-se em uma caverna. Porém,",
"o lugar não é completamente seguro para sobreviver. Ratos estão ocupando o espaço,",
"e com eles, doenças que se tornaram mais fortes com a tragédia. Aconselho evitá-los.",
"",
" Várias pessoas que estavam na caverna tentaram a sorte. Porém a sorte não estava",
"do lado delas. Cuidado com os fantasmas desses azarados, eles não possuem bom humor",
"mas são pacíficos se você os deixar passar.",
"",
"-Moedas douradas são legais, aumentam seu score!",
"-Moedas roxas são checkpoints!",
"",
"",
"Boa sorte!                                               >Clique para continuar<"
];

var line = [];

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 120;
var lineDelay = 400;

text1.prototype = {

    create: function(){

        this.textmusic1;
        this.textmusic1 = game.add.audio('textmusic', 0.5, true, true);
        this.textmusic1.play();

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
            passouText1 = true;
            this.game.state.start("Game1");
            this.textmusic1.destroy();
        }, this);

    },

    nextLine: function() {

        if (lineIndex === content.length)
        {
        //  We're finished
        return;
    }

    //  Split the current line on spaces, so one word per array element
    line = content[lineIndex].split(' ');

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