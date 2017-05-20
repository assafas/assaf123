Puzzle16 = window.Puzzle16 || {};
Puzzle16.Logic = function() {
let tiles = [];
    let freeRow, freeCol;
    const ROWS = 4, COLS = 4, FREE = -1, SIZE = 15;
    const HORIZONTAL = 350, VERTICAL = 200;
    
    let initModule = function() {
        for(let i = 1; i <= SIZE; i++)
            tiles.push(i);
        
        freeRow = freeCol = 3;
        newMemory();
    
    setTimeout(function() {runMemory = setInterval(playMemory, 1000);}, 1000);
    };
    

    
    let printBoard = function() {
        let res = "";
        for(let i = 0; i < ROWS; i++) {
            for(let j = 0; j < COLS; j++)
                res += tiles[i * COLS + j] + "\t";
            res += "\n";
        }
        return res;
    };
    
    let getRows = () => ROWS;
    let getCols = () => COLS;
    let getCell = (row, col) => tiles[toInd(row, col)];  //give the number cube
    
let toInd = (row, col) => row * COLS + col;
    
    let inRange = (row, col) => row >= 0 && row < ROWS && col >= 0 && col < COLS;
    
    
                            
/////////////////// ////////////////////////
    
    
var power = "off";
var strict = "off";
var running = false;
var memoryArray = [];
var memoryArrayCounter = 0;
var userArray = [];
var userArrayCounter = 0;
var levelCount = 1;
var tempColor;
var runMemory;
var matchingArrays = true;
var tempo;
    
    //Effects when the page load first
    let onload = function() {
    running = true;
    userArray = [];
    memoryArray = [];
    memoryArrayCounter = 0;
    userArrayCounter = 0;
    levelCount = 1;
    matchingArrays = true;
    clearInterval(runMemory);
    console.log(memoryArray);
        
    setTimeout(function() {runMemory = setInterval(playMemory, 1000);}, 1000);
    };
    
    let move = function(row, col) {
        
  
   
      userArray.push(getCell(row,col)); //return cubeNumber
      userArrayCounter++;
      
      for (i = 0; i < userArray.length; i++) {
        if (memoryArray[i] != userArray[i]) {
          matchingArrays = false;
        }
      }
      if (!matchingArrays) {    // when false!!
        
        userArray = [];
        memoryArrayCounter = 0;
        userArrayCounter = 0;
        matchingArrays = true;
        
      
          setTimeout(function() {runMemory = setInterval(playMemory, tempo);}, 1000);
        
      }
      else {   /// true
          
        if (userArrayCounter == memoryArrayCounter) {
            
          if (matchingArrays) {
            
            
              userArray = [];
              memoryArrayCounter = 0;
              userArrayCounter = 0;
              newMemory();
              levelCount++;
              

              switch(levelCount) {
                case 1:
                case 2:
                case 3:
                case 4:
                  tempo = 1000;
                    break;
                case 5:
                  tempo = 700;
                  break;
                case 9:
                  tempo = 500;
                  break;
                case 13:
                  tempo = 300;
                  break;
              }
              setTimeout(function() {runMemory = setInterval(playMemory, tempo);}, 1000);
              
            
          }
        }
      }
    
  
    };
    
    //Randomly selects a number for each level count and
//Adds it to the memoryArray.  Numbers correspond to 
//colors depending on the color's object.id
function newMemory() {
  var temp = Math.floor((Math.random() * 16) + 1);
  memoryArray.push(temp);
   console.log(memoryArray);
    
}
    
    
    function playMemory() {
 
  tempColor = memoryArray[memoryArrayCounter];
        
         var tempCol = tempColor % 4;
        if(tempCol==0)
            tempCol = 3;
        else
            tempCol -=1;
        var tempRow = (tempColor - tempCol )/ 4;
        
        tempRow=Math.floor(tempRow);
       
        drawOneQubeV2(tempRow, tempCol);
        
  
  memoryArrayCounter++;
  if (memoryArrayCounter == memoryArray.length) {
    clearInterval(runMemory);
   
  }
}
    
    let drawOneQubeV2 = function(row, col) {
        let context = this.canvas.getContext('2d');
        w = this.canvas.width;
        h = this.canvas.height;
        
        const TILE_W = (w - 2 * HORIZONTAL) / COLS;
        const TILE_H = (h - 2 * VERTICAL) / ROWS;
        
        context.fillStyle = "White";
        context.fillRect(HORIZONTAL + col * TILE_W, VERTICAL + row * TILE_H, TILE_W - 2, TILE_H - 2);
        
         context.fillStyle = "blue";
        
        
         setTimeout(function(){ context.fillRect(HORIZONTAL + col * TILE_W, VERTICAL + row * TILE_H, TILE_W - 2, TILE_H - 2); }, 150);
        
        
        };
   
    
    return {FREE, initModule, printBoard, move, getRows, getCols, getCell};
    
}();