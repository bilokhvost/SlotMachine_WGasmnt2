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
// GAME SCENE
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
        private winningsTotal: number;
        private winnings: number;
        private jackpot: number;
        private playerBet: number;

        private _grapes = 0;
        private _strawberries = 0;
        private _oranges = 0;
        private _cherries = 0;
        private _diamonds = 0;
        private _hearts = 0;
        private _sevens = 0;
        private _blank = 0;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void { 
            //reset the game to initial
            this._resetAll();
            //trying to add sound effects
         createjs.Sound.registerSound ({id:"jackpotSound", src: "../../Assets/sounds/jackpot.mp3" });
         createjs.Sound.registerSound ({id:"spinSound", src: "../../Assets/sounds/spin.mp3" });
         createjs.Sound.registerSound ({id:"loseSound", src: "../../Assets/sounds/lose.mp3" });
         createjs.Sound.registerSound ({id:"winSound", src: "../../Assets/sounds/win.mp3" });
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
            this._spinButton = new objects.Button("SpinButton", 270, 412, false);
            this.addChild(this._spinButton);
            this._spinButton.on("click", this._spinButtonClick, this);
            
            //add JackPot Text to the scene
            this._jackpotText = new objects.Label(
                this.jackpot.toString(),
                "18px Consolas",
                "#ff0000",
                350,
                99,
                false);
            this._jackpotText.textAlign = "right";
            this.addChild(this._jackpotText);
            
            //add creditText Text to the scene
            this._creditText = new objects.Label(
                this.playerMoney.toString(),
                "18px Consolas",
                "#ffffff",
                280,
                249,
                false);
            this._creditText.textAlign = "right";
            this.addChild(this._creditText);
            
            //add _betText Text to the scene
            this._betText = new objects.Label(
                this.playerBet.toString(),
                "18px Consolas",
                "#ffffff",
                348,
                249,
                false);
            this._betText.textAlign = "right";
            this.addChild(this._betText);
            
            //add _resultText Text to the scene
            this._resultText = new objects.Label(
                this.winnings.toString(),
                "18px Consolas",
                "#ffffff",
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
            this.winningsTotal = 0;
            this.jackpot = 5000;
            this.playerBet = 0;
        }
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        private _checkRange(value: number, lowerBounds: number, upperBounds: number) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }

        private _resetScreen() {

            this._creditText.text = this.playerMoney.toString();
            this._resultText.text = this.winningsTotal.toString();
            this._jackpotText.text = this.jackpot.toString();
            this._betText.text = this.playerBet.toString();
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
                        this._blank++;
                        break;
                    case this._checkRange(outCome[spin], 28, 37): // 15.4% probability
                        betLine[spin] = "Grape";
                        this._grapes++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46): // 13.8% probability
                        betLine[spin] = "Strawberry";
                        this._strawberries++;
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
                        betLine[spin] = "Diamond";
                        this._diamonds++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64): //  3.1% probability
                        betLine[spin] = "Heart";
                        this._hearts++;
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
            if (this._blank == 0) {
                if (this._grapes == 3) {
                    this.winnings = this.playerBet * 10;
                    createjs.Sound.play("winSound");
                }
                else if (this._strawberries == 3) {
                    this.winnings = this.playerBet * 20;
                     createjs.Sound.play("winSound");
                }
                else if (this._oranges == 3) {
                    this.winnings = this.playerBet * 30;
                     createjs.Sound.play("winSound");
                }
                else if (this._cherries == 3) {
                    this.winnings = this.playerBet * 40;
                }
                else if (this._diamonds == 3) {
                    this.winnings = this.playerBet * 50+this.jackpot;
                    createjs.Sound.play("jackpotSound");
                    this.jackpot=5000;
                    this._jackpotText.text=this.jackpot.toString();
                                       
                }
                else if (this._hearts == 3) {
                    this.winnings = this.playerBet * 75;
                     createjs.Sound.play("winSound");
                }
                else if (this._sevens == 3) {
                    this.winnings = this.playerBet * 100;
                     createjs.Sound.play("winSound");
                    
                }
                else if (this._grapes == 2) {
                    this.winnings = this.playerBet * 2;
                     createjs.Sound.play("winSound");
                }
                else if (this._strawberries == 2) {
                    this.winnings = this.playerBet * 2;
                     createjs.Sound.play("winSound");
                }
                else if (this._oranges == 2) {
                    this.winnings = this.playerBet * 3;
                     createjs.Sound.play("winSound");
                }
                else if (this._cherries == 2) {
                    this.winnings = this.playerBet * 4;
                     createjs.Sound.play("winSound");
                }
                else if (this._diamonds == 2) {
                    this.winnings = this.playerBet * 5;
                     createjs.Sound.play("winSound");
                }
                else if (this._hearts == 2) {
                    this.winnings = this.playerBet * 10;
                     createjs.Sound.play("winSound");
                }
                else if (this._sevens == 2) {
                    this.winnings = this.playerBet * 20;
                     createjs.Sound.play("winSound");
                }
                else if (this._sevens == 1) {
                    this.winnings = this.playerBet * 5; 
                    createjs.Sound.play("winSound");
                }
                else {
                    this.winnings = this.playerBet * 1;
                     createjs.Sound.play("winSound");
                }
                console.log("Win!!!")

            }
            else {
                console.log("Loss!!!");
                if (this.playerMoney == 0) {
                     createjs.Sound.play("loseSound");
                    console.log("You loose all your money!");
                    // Switch to the Game Over Scene
                    scene = config.Scene.GAME_OVER;
                    changeScene();
                }
            }
            this.winningsTotal += this.winnings;
            this._resultText.text = this.winningsTotal.toString();
            this.playerMoney += this.winnings;
            if (this.winnings == 0) {
                this.jackpot += this.playerBet * 2;
                this._jackpotText.text = this.jackpot.toString();
            }
            this._creditText.text = this.playerMoney.toString();
            this.winnings = 0;
            this._resetFruitTally();


        }

        private _resetFruitTally(): void {
            this._grapes = 0;
            this._strawberries = 0;
            this._oranges = 0;
            this._cherries = 0;
            this._diamonds = 0;
            this._hearts = 0;
            this._sevens = 0;
            this._blank = 0;
        }
        private _initializeBitmapArray() {
            this._reels = new Array<createjs.Bitmap>();
            for (var reel: number = 0; reel < 3; reel++) {
                this._reels[reel] = new createjs.Bitmap(assets.getResult("Blank"));
                this._reels[reel].x = 244 + (reel * 54);
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
        //placing bids
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
        //spinning the button        
        private _spinButtonClick(event: createjs.MouseEvent): void {
            //ensure player has enough money to play
            if (this.playerBet > 0) {
                createjs.Sound.play("spinSound");
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
        //reset the game
        private _resetButtonClick(event: createjs.MouseEvent): void {
            console.log("reset the game");
            this._resetAll();
            this._resetScreen();
            this._resetFruitTally();

        }
        //exit to the Menu screen
        private _exitButtonClick(event: createjs.MouseEvent): void {
            console.log("exit the game");
            // Switch to the menu Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}