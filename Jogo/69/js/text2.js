var passouText2 = false;
var text2 = function(game){}

var content2 = [
"'Enfim saí desse lugar asqueroso... não consigo imaginar o que me espera lá",
"em cima... mas sei que não será nada fácil. Tudo o que acabei de ver foi",
"assustador. O mundo está completamente diferente... ou o tempo que fiquei",
"nessa caverna me fez esquecer de como tudo era. Para mim, é como nascer de novo.",
"Dói pensar que tantas pessoas que estavam em condições parecidas com a minha não",
"conseguiram buscar sua salvação. Não faz muito tempo em que eu estava em minha casa",
"assistindo TV, sem noção da tamanha proporção da catástrofe. Tudo mudou quando",
"noticiaram uma colônia em Marte e que quem quisesse se salvar, teria que se virar...",
"isso é totalmente desumano. Porém, o instinto de sobrevivência fala mais alto. Minha",
"sorte é que já fiz várias viagens espaciais, as quais me proporcionaram experiência",
"e também essa roupa de astronauta. Tenho pouco tempo. Já posso sentir a radiação",
"chegando. Não posso deixar que ela me ultrapasse. O que me motiva é saber que estão",
"me esperando no céu.'",
"",
"",
"",
"-Apresse-se! A radiação está subindo.",
"-Moedas douradas são legais, aumentam seu score!",
"-Moedas roxas são checkpoints!",
"                                                           >Clique para continuar<"
];

var line = [];

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 120;
var lineDelay = 400;

text2.prototype = {

    create: function(){

        this.textmusic2;
        this.textmusic2 = game.add.audio('textmusic', 0.5, true, true);
        this.textmusic2.play();

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
            passouText2 = true;
            this.game.state.start("Game");
            this.textmusic2.destroy();
        }, this);

    },

    nextLine: function() {

        if (lineIndex === content2.length)
        {
        //  We're finished
        return;
    }

    //  Split the current line on spaces, so one word per array element
    line = content2[lineIndex].split(' ');

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