// create the module and name it scotchApp
var myapp = angular.module('myapp', ['ngRoute']);


// configure our routes
myapp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/show', {
            templateUrl : 'show.html',
            controller  : 'showController'
        });
});
/////////////////////////////////////////////////////////////////////////////////////////////
// create the controller and inject Angular's $scope


myapp.controller('showController', function($scope) {

    showfunc();
    $scope.message ="";

});


/////////////////////////////////////////////////////////////////////////////////////////////

myapp.controller('mainController', function($scope) {

    $scope.message = "Canvas size : 700 X 500 px";
    hidefunc();
    var temp =" hello";
    $scope.user = {
        Ax: "0", Ay: "0",
        Bx: "0", By: "0",
        Cx: "0", Cy: "0",


        getA: function () {

           
            flag1 = 0;
            var userObject = $scope.user;
            if(isNaN(userObject.Ax)||isNaN(userObject.Ay))
                return "only numbers!"
            if (userObject.Ax == 0 && userObject.Ay == 0)
                return "insert numbers";
            if (userObject.Ax == userObject.Ay) {
                return "Error: Equal numbers ";
            }
            if (userObject.Ax > 700)
                return "Error: width (X) Max numer - 700";
            if (userObject.Ay > 500)
                return "Error: height (Y) Max numer - 500";


            //  var mybutton = document.getElementById("clickMe").style.visibility= "visible";
            flag1 = 1;
            return "";

        },
        getB: function () {
        flag2=0;
        var userObject = $scope.user;
            if(isNaN(userObject.Bx)||isNaN(userObject.By))
                return "only numbers!"
        if(userObject.Bx ==0 && userObject.By==0)
            return "insert numbers";
        if(userObject.Bx == userObject.By)
        {return "Error: Equal numbers ";}
        if(userObject.Bx>700)
            return "Error: width (X) Max numer - 700";
        if(userObject.By>500)
            return "Error: height (Y) Max numer - 500";


        flag2 =1;
        return "";

    },

    getC: function () {
        flag3=0;
        var userObject = $scope.user;
        if(isNaN(userObject.Cx)||isNaN(userObject.Cy))
                return "only numbers!"
        if(userObject.Cx ==0 && userObject.Cy==0)
            return "insert numbers";
        if(userObject.Cx == userObject.Cy)
        {return "Error: Equal numbers ";}
        if(userObject.Cx>700)
            return "Error: width (X) Max numer - 700";
        if(userObject.Cy>500)
            return "Error: height (Y) Max numer - 500";


        flag3 =1;
        return "";

    },
        
        fixerror: function () {
            var userObject = $scope.user;
        if(flag1==0 || flag2==0 || flag3==0) {
            $("#show_temp").hide(0); 
            return "fix errors please";
        }
            
       $("#show_temp").show(250); 
    
        return "";
        
    },

    myresult: function () {



        var userObject = $scope.user;
        var AC;
        var AB;
        var BC;


        AC = Math.pow(Math.pow(Math.abs(userObject.Ax-userObject.Cx),2)+Math.pow(Math.abs(userObject.Ay-userObject.Cy),2), 0.5);
        AB = Math.pow(Math.pow(Math.abs(userObject.Ax-userObject.Bx),2)+Math.pow(Math.abs(userObject.Ay-userObject.By),2), 0.5);
        BC = Math.pow(Math.pow(Math.abs(userObject.Bx-userObject.Cx),2)+Math.pow(Math.abs(userObject.By-userObject.Cy),2), 0.5);



        var tempA = ((Math.acos((Math.pow(AC,2)+Math.pow(AB,2)-Math.pow(BC,2))/(2*AC*AB)))*180)/Math.PI;
        var tempB = ((Math.acos((Math.pow(AB,2)+Math.pow(BC,2)-Math.pow(AC,2))/(2*BC*AB)))*180)/Math.PI;
        var tempC = ((Math.acos((Math.pow(AC,2)+Math.pow(BC,2)-Math.pow(AB,2))/(2*BC*AC)))*180)/Math.PI;


        return "AC = "+ Math.ceil(AC) +" AB = " +Math.ceil(AB) + " BC = " + Math.ceil(BC)
            + "  Angle:  A = " +parseFloat(tempA).toFixed(2)+" B = "+ parseFloat(tempB).toFixed(2) +" C = " +parseFloat(tempC).toFixed(2)  ;
            
    }
    };
    //$scope.message =  temp;//'Contact us! mosheeee11. This is just a demo.';

});


////////////////////////////////////////

document.getElementById("tempcanvas").style.marginLeft = "20%";
document.getElementById("tempcanvas").style.marginTop="0%";
document.getElementById("tempcanvas").style.backgroundColor="#ff4341";







function  myFunction() {

/*
    if(flag1==0 || flag2==0 || flag3==0) {
        alert("fix errors please");

        return;
    }
    */
    //showfunc();
 $("#tempcanvas").hide(0); 
    var temp = document.getElementById("tempcanvas");
    var cts = temp.getContext("2d");


    cts.font = "20px Georgia";

    // window.location.href = "#show";
  //  $("#result").hide(300);
    var _Ax = document.getElementById("user.Ax").value;
    var _Ay = document.getElementById("user.Ay").value;
    var _Bx = document.getElementById("user.Bx").value;
    var _By = document.getElementById("user.By").value;
    var _Cx = document.getElementById("user.Cx").value;
    var _Cy = document.getElementById("user.Cy").value;
    cts.beginPath();
    cts.clearRect (0, 0, temp.width, temp.height);


    cts.strokeStyle = "#f5faff";
    cts.moveTo(_Ax,_Ay);
    cts.lineTo(_Bx,_By);
    cts.lineTo(_Cx,_Cy);
    cts.lineTo(_Ax,_Ay);
    cts.lineWidth = 5;
    cts.fillText("A", _Ax-15,_Ay-25);

    cts.fillText("B", _Bx-20,_By-20);
    cts.fillText("C", _Cx,_Cy-5);
    cts.stroke();
    $("#tempcanvas").show(2000); 

   // $("#result").show(2000);

};

////////////////////////////////////////

function hidefunc() {

    document.getElementById("tempcanvas").width="0";
    document.getElementById("tempcanvas").height="0";

   $("#temp1").show(1000); 


};

function showfunc() {

    document.getElementById("tempcanvas").width="700";
    document.getElementById("tempcanvas").height="500";

    document.getElementById("tempcanvas").style.visibility="visible";

new_myFunction();
$("#temp1").hide(900); //document.getElementById("temp1").style.visibility="hidden";
    

};

function new_myFunction() {
    $("#tempcanvas").hide(0); 
    var temp = document.getElementById("tempcanvas");
    var cts = temp.getContext("2d");


    cts.font = "20px Georgia";

    
        var _Ax = document.getElementById("user.Ax").value;
        var _Ay = document.getElementById("user.Ay").value;
        var _Bx = document.getElementById("user.Bx").value;
        var _By = document.getElementById("user.By").value;
        var _Cx = document.getElementById("user.Cx").value;
        var _Cy = document.getElementById("user.Cy").value;
        cts.beginPath();
        cts.clearRect (0, 0, temp.width, temp.height);

        drawTriangle(_Ax,_Ay,_Bx,_By,_Cx,_Cy);
        // ctx is the canvas context

// function to get distance
        function distance(x, y, xx, yy) {
            return Math.sqrt(Math.pow(x - xx, 2) + Math.pow(y - yy, 2) );
        }

// function gets the direction of a line
        function direction(x, y, xx, yy) {
            var angV = Math.acos( (xx - x) / Math.sqrt( Math.pow(x - xx, 2) + Math.pow(y - yy, 2) ) );

            if (y - yy > 0) angV = - angV; // check the sign

            return (angV + Math.PI * 2) % (Math.PI * 2); // makes the angle positive.
                                                         // Not needed but for this
                                                         // makes it easier to understand
        }

// function to draw a triangle with angle marks
// pass it the 3 points at the corners of the triangle.
// will handle any triangle
        function drawTriangle(x1,y1,x2,y2,x3,y3) {
            // function to draw angle
            function drawAngle(x, y, dirA, dirB) {
                dirB += Math.PI;              // revers second direction
                var sweepAng = dirB - dirA;   // angle between lines
                var startAng = dirA;          // angle to start the sweep of the arc
                if (Math.abs(sweepAng) > Math.PI) {  // if the angle us greater the 180
                    sweepAng = Math.PI * 2 - sweepAng;  // get the smaller angle
                    startAng = dirB;          // and change the start angle
                }
                cts.beginPath();
                if (sweepAng < 0) {                  // if the angle is sweeping anticlockwise
                    cts.arc(x, y, minDist, startAng + sweepAng, startAng);
                } else {                        // draw clockwise angle
                    cts.arc(x, y, minDist, startAng, startAng + sweepAng);
                }
                cts.stroke();                 // all done
            }

            cts.lineWidth = 3;               // draw the lines of the triangle
            cts.strokeStyle = "white";
            cts.beginPath();
            cts.moveTo(x1, y1);
            cts.lineTo(x2, y2);
            cts.lineTo(x3, y3);
            cts.closePath();
            cts.fillText("A", _Ax-15,_Ay-25);

    cts.fillText("B", _Bx-20,_By-20);
    cts.fillText("C", _Cx,_Cy-5);
            cts.stroke();
$("#tempcanvas").show(2000); 

            // now work out the radius of the angle stroke
            var dist1 = distance(x1, y1, x2, y2);  // get the 3 distance of the lines
            var dist2 = distance(x2, y2, x3, y3);
            var dist3 = distance(x3, y3, x1, y1);
            var minDist = Math.min(dist1, dist2, dist3); // get the min dist;
            if (minDist === 0) {
                return; // there are no angles to draw and exit
                        // to avoid divide by zero in direction function
            }
            minDist /= 5; // get the amgle arc radius 1/5th

            var dir1 = direction(x1, y1, x2, y2);  // get the 3 directions of the lines
            var dir2 = direction(x2, y2, x3, y3);
            var dir3 = direction(x3, y3, x1, y1);

            drawAngle(x1, y1, dir1, dir3); // draw the angle stoke first corner;
            drawAngle(x2, y2, dir2, dir1); // draw the angle stoke second corner;
            drawAngle(x3, y3, dir3, dir2); // draw the angle stoke third;
        }
    };





