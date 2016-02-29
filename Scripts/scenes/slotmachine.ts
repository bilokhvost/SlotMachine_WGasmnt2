// MENU SCENE
module scenes {
    export class SlotMachine extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _bet5Button: objects.Button;
        private _bet10Button: objects.Button;
        private _bet25Button: objects.Button;
        private _bet50Button: objects.Button;
        private _bet100Button: objects.Button;
        private _spinButton: objects.Button;
        private _exitButton: objects.Button;
        private _resetButton: objects.Button;
        private _reels: createjs.Bitmap[];
        private _jackpotText: objects.Label;
        private _creditText: objects.Label;
        private _betText: objects.Label;
        private _resultText: objects.Label;
        private playerMoney: number;
        private winnings: number;
        private jackpot: number;
        private playerBet: number;

        private _grapes = 0;
        private _bananas = 0;
        private _oranges = 0;
        private _cherries = 0;
        private _bet = 0;
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
            //reset the game to initial
            this._resetAll();
         
            //add background image to scene 
            this._backgroundImage = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage);
            
            //add bet buttons to the scene
            this._bet5Button = new objects.Button("Bet5Button", 178, 307, false);
            this.addChild(this._bet5Button);
            this._bet5Button.on("click", this._bet5ButtonClick, this);

            this._bet10Button = new objects.Button("Bet10Button", 237, 307, false);
            this.addChild(this._bet10Button);
            this._bet10Button.on("click", this._bet10ButtonClick, this);

            this._bet25Button = new objects.Button("Bet25Button", 298, 307, false);
            this.addChild(this._bet25Button);
            this._bet25Button.on("click", this._bet25ButtonClick, this);

            this._bet50Button = new objects.Button("Bet50Button", 357, 307, false);
            this.addChild(this._bet50Button);
            this._bet50Button.on("click", this._bet50ButtonClick, this);

            this._bet100Button = new objects.Button("Bet100Button", 417, 307, false);
            this.addChild(this._bet100Button);
            this._bet100Button.on("click", this._bet100ButtonClick, this);
            
            //add spin button
            this._spinButton = new objects.Button("SpinButton", 265, 412, false);
            this.addChild(this._spinButton);
            this._spinButton.on("click", this._spinButtonClick, this);
            
            //add JackPot Text to the scene
            this._jackpotText = new objects.Label(
                 this.jackpot.toString(),
                "16px Consolas",
                "#ff0000",
               350,
                99,
                false);
            this._jackpotText.textAlign = "right";
            this.addChild(this._jackpotText);
            
            //add creditText Text to the scene
            this._creditText = new objects.Label(
                this.playerMoney.toString(),
                "16px Consolas",
                "#ff0000",
                280,
                249,
                false);
            this._creditText.textAlign = "right";
            this.addChild(this._creditText);
            
            //add _betText Text to the scene
            this._betText = new objects.Label(
                this.playerBet.toString(),
                "16px Consolas",
                "#ff0000",
                348,
                249,
                false);
            this._betText.textAlign = "right";
            this.addChild(this._betText);
            
            //add _resultText Text to the scene
            this._resultText = new objects.Label(
                this.winnings.toString(),
                "16px Consolas",
                "#ff0000",
                416,
                249,
                false
            );
            this._resultText.textAlign = "right";
            this.addChild(this._resultText);
            
          
            
            //Initialize Array of Bitmaps
            this._initializeBitmapArray();
            
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
        
        /* Utility function to reset the player stats */
        private _resetAll() {
            this.playerMoney = 1000;
            this.winnings = 0;
            this.jackpot = 5000;
            this.playerBet = 0;
        }
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        private _checkRange(value: number, lowerBounds: number, upperBounds: number) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }
        
        
        /* When this function is called it determines the betLine results.
e.g. Bar - Orange - Banana */
        private _spinReels(): string[] {
            var betLine = [" ", " ", " "];
            var outCome = [0, 0, 0];

            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 27):  // 41.5% probability
                        betLine[spin] = "Blank";
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
                        betLine[spin] = "Bet";
                        this._bet++;
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

        
        //calculate winnings
        private _determineWinnings() {
            if (this._blanks == 0) {
                if (this._grapes == 3) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this._bananas == 3) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this._oranges == 3) {
                    this.winnings = this.playerBet * 30;
                }
                else if (this._cherries == 3) {
                    this.winnings = this.playerBet * 40;
                }
                else if (this._bet == 3) {
                    this.winnings = this.playerBet * 50;
                }
                else if (this._bells == 3) {
                    this.winnings = this.playerBet * 75;
                }
                else if (this._sevens == 3) {
                    this.winnings = this.playerBet * 100;
                }
                else if (this._grapes == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this._bananas == 2) {
                    this.winnings = this.playerBet * 2;
                }
                else if (this._oranges == 2) {
                    this.winnings = this.playerBet * 3;
                }
                else if (this._cherries == 2) {
                    this.winnings = this.playerBet * 4;
                }
                else if (this._bet == 2) {
                    this.winnings = this.playerBet * 5;
                }
                else if (this._bells == 2) {
                    this.winnings = this.playerBet * 10;
                }
                else if (this._sevens == 2) {
                    this.winnings = this.playerBet * 20;
                }
                else if (this._sevens == 1) {
                    this.winnings = this.playerBet * 5;
                }
                else {
                    this.winnings = this.playerBet * 1;
                }
                console.log("Win!!!")

            }
            else {
                console.log("Loss!!!");
            }
            this._resultText.text = this.winnings.toString();
            this.playerMoney += this.winnings;
            this._creditText.text = this.playerMoney.toString();
            this._resetFruitTally();


        }

        private _resetFruitTally(): void {
            this._grapes = 0;
            this._bananas = 0;
            this._oranges = 0;
            this._cherries = 0;
            this._bet = 0;
            this._bells = 0;
            this._sevens = 0;
            this._blanks = 0;
        }
        private _initializeBitmapArray() {
            this._reels = new Array<createjs.Bitmap>();
            for (var reel: number = 0; reel < 3; reel++) {
                this._reels[reel] = new createjs.Bitmap(assets.getResult("Blank"));
                this._reels[reel].x = 243 + (reel * 54);
                this._reels[reel].y = 146;
                this.addChild(this._reels[reel]);
                console.log(this._reels[reel]);
            }
        }

        private _placeBet(playerBet: number) {
            //ensure the player's bet is less than player money
            if (playerBet <= this.playerMoney) {
                this.playerBet += playerBet;
                this.playerMoney -= playerBet;
                this._creditText.text = this.playerMoney.toString();
                this._betText.text = this.playerBet.toString();
            }

        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _bet5ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 5 credits");
            this._placeBet(5);

        }

        private _bet10ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 10 credits");
            this._placeBet(10);
        }

        private _bet25ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 25 credits");
            this._placeBet(25);

        }

        private _bet50ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 50 credits");
            this._placeBet(50);
        }

        private _bet100ButtonClick(event: createjs.MouseEvent): void {
            console.log("bet 100 credits");
            this._placeBet(100);
        }

        private _spinButtonClick(event: createjs.MouseEvent): void {
            //ensure player has enough money to play
            if (this.playerBet > 0) {
                var bitmap: string[] = this._spinReels();
                for (var reel: number = 0; reel < 3; reel++) {
                    this._reels[reel].image = assets.getResult(bitmap[reel]);
                }
                this._determineWinnings();
                //reser player bet to 0
                this.playerBet = 0;
                this._betText.text = this.playerBet.toString();
            }
        }

        private _resetButtonClick(event: createjs.MouseEvent): void {
            console.log("reset the game");
            this._resetAll();

        }

        private _exitButtonClick(event: createjs.MouseEvent): void {
            console.log("exit the game");
            // Switch to the menu Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}