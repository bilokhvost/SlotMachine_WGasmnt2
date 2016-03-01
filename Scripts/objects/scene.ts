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
    // Scene Class
    export class Scene extends createjs.Container {
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }
        
        // Add game objects to my scene in this method
        public start():void {
            stage.addChild(this);
        }
        
        // update game objects in my scene
        public update():void {
            
        }
    }
}