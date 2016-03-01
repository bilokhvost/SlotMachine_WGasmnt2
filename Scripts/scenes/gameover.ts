 /*
 Kateryna Bilokhvost
 Last modified by:Kateryna Bilokhvost
 Last Modified date: February 29, 2016
 Description: Slot Machine Game
 Revision History:
  Commit 1: Initial Commit
  Commit 2-9: Logic was added
  Commit 10-11: Design fixes
 */
// GAME_OVER SCENE
module scenes {
    export class GameOver extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _startOverButton:objects.Button;
        private _gameOverLabel:objects.Label;
        private _gameOverImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {    
            //add game over image to the screen
            this._gameOverImage = new createjs.Bitmap("../../Assets/images/canvasGameOver.png");
            this.addChild(this._gameOverImage);
            // add the game over Label to the MENU scene
            this._gameOverLabel = new objects.Label(
                "GAME OVER", 
                "60px Consolas", 
                "#FFFFFF", 
                config.Screen.CENTER_X, 
                config.Screen.CENTER_Y,
                true);
            this.addChild(this._gameOverLabel);      
                   
            // add the START button to the MENU scene
            this._startOverButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y  + 140, true);
            this.addChild(this._startOverButton);
            
            // START Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
           
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the SLOT MACHINE Scene
            scene = config.Scene.SLOT_MACHINE;
            changeScene();
        }
        
    }
}