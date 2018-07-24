
var population;
var t;
var s;
function setup(){
    var target = 'This is the target phrase';
    var mutationRate = 0.003;
    var maxPop = 1000;
    t = createP("BEST: ");
    t.addClass("best");
    s = createP("SOMETHING");
    s.addClass("Ntho");
   
   
  /*  var p = createP('I learn in this Letter, that Don Peter of Aragon').addClass('text');
   
    p.html('hi');
*/

    population =  new Population(target,mutationRate,maxPop);

    //createCanvas(600,900)
    

}

function draw()
{
    
   population.calcFitness();
    population.select(); //selects best ones
    population.generate(); //generate next gen
    //noLoop();
   // if (population.generation == 10){noLoop();}
    if (population.isFound()){
        noLoop();
    }
    disp();
    
}

function disp()
{
    t.html(population.best);
    s.html("Generation: " + population.generation + "<br><br>" +population.getAll());
   
}




