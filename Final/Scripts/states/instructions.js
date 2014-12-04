/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/pig.ts" />
/// <reference path="../objects/egg.ts" />
/// <reference path="../objects/sky.ts" />
/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/button.ts" />
var states;
(function (states) {
    function infoState() {
        sky.update();
    }
    states.infoState = infoState;

    function info() {
        var instructionText;

        game = new createjs.Container();

        sky = new objects.sky(game);

        instructionText = new createjs.Text("Instructions: The object of this game is to move The Angry Bird Up or Down to avoid the Pig King and collect the eggs!", constants.GAME_FONT, constants.FONT_COLOUR);
        instructionText.regY = instructionText.getBounds().height * 0.5;
        instructionText.regX = instructionText.getBounds().width * 0.5;
        instructionText.y = stage.canvas.height * 0.5;
        instructionText.x = stage.canvas.width * 0.5;
        game.addChild(instructionText);

        instructionText.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }
    states.info = info;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map
