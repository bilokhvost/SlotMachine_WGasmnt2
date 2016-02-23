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
            this._bet10Button = new objects.Button("Bet10Button", 294, 224, false);
            this._bet100Button = new objects.Button("Bet100Button", 360, 224, false);
            this._spinButton = new objects.Button("SpinButton", 260, 311, false);
            this._exitButton = new objects.Button("ExitButton", 413, 15, false);
            this._resetButton = new objects.Button("ResetButton", 182, 15, false);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SLOT_MACHINE Scene updates here
        SlotMachine.prototype.update = function () {
        };
        return SlotMachine;
    })(objects.Scene);
    scenes.SlotMachine = SlotMachine;
})(scenes || (scenes = {}));
//# sourceMappingURL=slotmachine.js.map