var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
Kateryna Bilokhvost
Last modified by:Kateryna Bilokhvost
Last Modified date: February 29, 2016
Description: Slot Machine Game
Revision History:
 Commit 1: Initial Commit
 Commit 2-9: Logic was added
  Commit 10-11: Design and logic errors fixes
 Commit 12: Added sounds
*/
// GAME_OVER SCENE
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function GameOver() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        GameOver.prototype.start = function () {
            //add game over image to the screen
            this._gameOverImage = new createjs.Bitmap("../../Assets/images/canvasGameOver.png");
            this.addChild(this._gameOverImage);
            // add the game over Label to the MENU scene
            this._gameOverLabel = new objects.Label("GAME OVER", "60px Consolas", "#FFFFFF", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._gameOverLabel);
            // add the START button to the MENU scene
            this._startOverButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 140, true);
            this.addChild(this._startOverButton);
            // START Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // GAME OVER Scene updates here
        GameOver.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        GameOver.prototype._startOverButtonClick = function (event) {
            // Switch to the SLOT MACHINE Scene
            scene = config.Scene.SLOT_MACHINE;
            changeScene();
        };
        return GameOver;
    })(objects.Scene);
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map