Puzzle16 = window.Puzzle16 || {};
Puzzle16.GUI = function() {
    let canvas;
    let w, h;
    const HORIZONTAL = 350, VERTICAL = 200;
    let initModule = function() {
        this.canvas = document.getElementById("canvas");
		this.canvas.width = window.innerWidth - 30;
		this.canvas.height = window.innerHeight - 30;
        w = this.canvas.width;
        h = this.canvas.height;
        
        Puzzle16.Logic.initModule();
      
        drawBoard();
        
        this.canvas.onclick = clickBoard;
    };
    
    let clearScreen = function() {
		let context = this.canvas.getContext('2d');
		context.clearRect(0, 0, w, h);
    };
    
    let clickBoard = function(e) {
        const TILE_W = (w - 2 * HORIZONTAL) / Puzzle16.Logic.getCols();
        const TILE_H = (h - 2 * VERTICAL) / Puzzle16.Logic.getRows();
        let x = e.clientX, y = e.clientY;
        
        
        if(x < HORIZONTAL || x > w - HORIZONTAL || y < VERTICAL || y > h - VERTICAL)
            return;
        
        let col = parseInt((x - HORIZONTAL) / (TILE_W + 4));
        let row = parseInt((y - VERTICAL) / (TILE_H + 4));
        //alert("row= "+row +"  col= "+col);
       
        drawOneQube(row, col);
        console.log(((4)*row+col)+1);
        Puzzle16.Logic.move(row, col);     //// when clicking buttons
        
        
    };

    let drawBoard = function() {
        let context = this.canvas.getContext('2d');
        const TILE_W = (w - 2 * HORIZONTAL) / Puzzle16.Logic.getCols();
        const TILE_H = (h - 2 * VERTICAL) / Puzzle16.Logic.getRows();
        
        for(let i = 0; i < Puzzle16.Logic.getRows(); i++)
            for(let j = 0; j < Puzzle16.Logic.getCols(); j++) {
                context.fillStyle = "blue";
                context.fillRect(HORIZONTAL + j * TILE_W, VERTICAL + i * TILE_H, TILE_W - 2, TILE_H - 2);
                let val = Puzzle16.Logic.getCell(i, j);
               
                if(val != Puzzle16.Logic.FREE) {
                 
                }
            }
    };
    
    
     let drawOneQube = function(row, col) {
        const TILE_W = (w - 2 * HORIZONTAL) / Puzzle16.Logic.getCols();
        const TILE_H = (h - 2 * VERTICAL) / Puzzle16.Logic.getRows();
        let context = this.canvas.getContext('2d');
        context.fillStyle = "White";
        context.fillRect(HORIZONTAL + col * TILE_W, VERTICAL + row * TILE_H, TILE_W - 2, TILE_H - 2);
        
         context.fillStyle = "blue";
         setTimeout(function(){ context.fillRect(HORIZONTAL + col * TILE_W, VERTICAL + row * TILE_H, TILE_W - 2, TILE_H - 2); }, 55);
         
        };
    
    
    
    
    return {initModule};
}();

