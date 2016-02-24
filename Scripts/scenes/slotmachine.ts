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
        private _grapes = 0;
        private _bananas = 0;
        private _oranges = 0;
        private _cherries = 0;
        private _bars = 0;
        private _bells = 0;
        private _sevens = 0;
        private _blanks = 0;
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
            this._spinButton = new objects.Button("SpinButton", 257, 314, false);
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
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        private _checkRange(value: number, lowerBounds: number, upperBounds: number) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }
        
        /* When this function is called it determines the betLine results.
e.g. Bar - Orange - Banana */
        private _reels(): string[] {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];

            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):  // 41.5% probability
                        betLine[spin] = "blank";
                        this._blanks++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37): // 15.4% probability
                        betLine[spin] = "Grapes";
                        this._grapes++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46): // 13.8% probability
                        betLine[spin] = "Banana";
                        this._bananas++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54): // 12.3% probability
                        betLine[spin] = "Orange";
                        this._oranges++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59): //  7.7% probability
                        betLine[spin] = "Cherry";
                        this._cherries++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62): //  4.6% probability
                        betLine[spin] = "Bar";
                        this._bars++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64): //  3.1% probability
                        betLine[spin] = "Bell";
                        this._bells++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65): //  1.5% probability
                        betLine[spin] = "Seven";
                        this._sevens++;
                        break;
                }
            }
            return betLine;
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
            console.log("spin the reels");
            console.log(this._reels());
        }

        private _resetButtonClick(event: createjs.MouseEvent): void {
            console.log("reset the game");
            
        }

        private _exitButtonClick(event: createjs.MouseEvent): void {
            console.log("exit the game");
            // Switch to the menu Scene
            scene = config.Scene.MENU;
            changeScene();
        
        }


    }
}