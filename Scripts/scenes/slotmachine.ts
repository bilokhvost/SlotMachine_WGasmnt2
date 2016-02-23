// MENU SCENE
module scenes {
    export class SlotMachine extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _bet5Button:objects.Button;
        private _bet10Button:objects.Button;
        private _bet100Button:objects.Button;
        private _spinButton:objects.Button;
        private _exitButton:objects.Button;
        private _resetButton:objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {   
            //add background image to scene 
            this._backgroundImage = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage);
            
            //add bet buttons to the scene
            this._bet5Button = new objects.Button("Bet5Button",228, 224, false);
            this._bet10Button = new objects.Button("Bet10Button",294, 224, false);
            this._bet100Button = new objects.Button("Bet100Button",360, 224, false);
            this._spinButton = new objects.Button("SpinButton",260, 311, false);
            this._exitButton = new objects.Button("ExitButton",413, 15, false);
            this._resetButton = new objects.Button("ResetButton",182, 15, false);
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // SLOT_MACHINE Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}