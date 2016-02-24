// MENU SCENE
module scenes {
    export class SlotMachine extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _bet5Button: objects.Button;
        private _bet10Button: objects.Button;
        private _bet100Button: objects.Button;
        private _spinButton: objects.Button;
        private _exitButton: objects.Button;
        private _resetButton: objects.Button;
        
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
            this._bet5Button = new objects.Button("Bet5Button", 228, 224, false);
            this.addChild(this._bet5Button);
            this._bet5Button.on("click", this._bet5ButtonClick, this);
            this._bet10Button = new objects.Button("Bet10Button", 294, 224, false);
            this.addChild(this._bet10Button);
            this._bet10Button.on("click", this._bet10ButtonClick, this);
            this._bet100Button = new objects.Button("Bet100Button", 360, 224, false);
            this.addChild(this._bet100Button);
            this._bet100Button.on("click", this._bet100ButtonClick, this);
            
            //add spin button
            this._spinButton = new objects.Button("SpinButton", 260, 311, false);
            this.addChild(this._spinButton);
            this._spinButton.on("click", this._spinButtonClick, this);
            
            //add exit and reset buttons
            this._exitButton = new objects.Button("ExitButton", 413, 15, false);
            this.addChild(this._exitButton);
            this._exitButton.on("click", this._exitButtonClick, this);
            this._resetButton = new objects.Button("ResetButton", 182, 15, false);
            this.addChild(this._resetButton);
            this._resetButton.on("click", this._resetButtonClick, this);
             
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // SLOT_MACHINE Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _bet5ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 5 credits");
        }

        private _bet10ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 10 credits");
        }

        private _bet100ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 100 credits");
        }

        private _spinButtonClick(event: createjs.MouseEvent): void {
            console.log("spin");
        }

        private _resetButtonClick(event: createjs.MouseEvent): void {
            console.log("reset");
        }

        private _exitButtonClick(event: createjs.MouseEvent): void {
            console.log("exit");
        }


    }
}