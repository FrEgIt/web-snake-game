window.onload = function() {
    
    var canvasWidth = 900;
    var canvasHeight = 600;
    var ctx;
    var delay = 1000/35;
    var xCoord = 0;
    var yCoord = 0;
    var blockSize = 30;
    var snakee;
    
    init();
    
    function init()
    {
        var canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        
        ctx = canvas.getContext('2d');
        var positions = [[6,4], [5,4], [4,4]]; 
        snakee = new Snake(positions);
        refreshCanvas();
    }
    
    function refreshCanvas() 
    {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        console.log("test");
        snakee.advance(1,0);
        snakee.draw();
        setInterval(refreshCanvas, delay);
    }
    
    function drawBlock(ctx, position)
    {
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
    }
    
    function Snake(body){
        this.body = body;
        this.draw = function() 
        {
            ctx.save();
            ctx.fillStyle = "#ff0000";
            console.log(this.body);
            for(var i = 0; i < this.body.length; i++)
            {
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();  
        };
        this.advance = function(xDirection, yDirection)
        {
            var nextPosition = this.body[0].slice();
            nextPosition[0] += xDirection;
            nextPosition[1] += yDirection;
            this.body.unshift(nextPosition);
            this.body.pop();
        };
              
    }
    
}