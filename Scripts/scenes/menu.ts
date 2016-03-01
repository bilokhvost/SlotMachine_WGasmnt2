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
// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _startButton:objects.Button;
        private _welcomeLabel:objects.Label;
        private _canvasMenuImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void { 
             //add game over image to the screen
            this._canvasMenuImage = new createjs.Bitmap("../../Assets/images/canvasMenu.png");
            this.addChild(this._canvasMenuImage);  
            // add the WELCOME Label to the MENU scene
            this._welcomeLabel = new objects.Label(
                "SLOT MACHINE", 
                "60px Consolas", 
                "#FFFFFF",  
                config.Screen.CENTER_X, 
                config.Screen.CENTER_Y,
                true);
            this.addChild(this._welcomeLabel);
                   
            // add the START button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 140, true);
            this.addChild(this._startButton);
            
            // START Button event listener
            this._startButton.on("click", this._startButtonClick, this);
           
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the SLOT MACHINE Scene
            scene = config.Scene.SLOT_MACHINE;
            changeScene();
        }
        
    }
}