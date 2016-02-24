var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var SlotMachine = (function (_super) {
        __extends(SlotMachine, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SlotMachine() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SlotMachine.prototype.start = function () {
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
        };
        // SLOT_MACHINE Scene updates here
        SlotMachine.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        SlotMachine.prototype._bet5ButtonClick = function (event) {
            console.log("bet 5 credits");
        };
        SlotMachine.prototype._bet10ButtonClick = function (event) {
            console.log("bet 10 credits");
        };
        SlotMachine.prototype._bet100ButtonClick = function (event) {
            console.log("bet 100 credits");
        };
        SlotMachine.prototype._spinButtonClick = function (event) {
            console.log("spin");
        };
        SlotMachine.prototype._resetButtonClick = function (event) {
            console.log("reset");
        };
        SlotMachine.prototype._exitButtonClick = function (event) {
            console.log("exit");
        };
        return SlotMachine;
    })(objects.Scene);
    scenes.SlotMachine = SlotMachine;
})(scenes || (scenes = {}));
//# sourceMappingURL=slotmachine.js.map