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
module objects {
    // LABEL CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    export class Label extends createjs.Text {
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++++++++++++
        constructor(labelString: string, labelFont: string, labelColour: string, x: number, y: number, isCentered:boolean) {
            super(labelString, labelFont, labelColour);
            
            if (isCentered){
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
            
        }
    }
} 