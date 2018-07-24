

function Population(target,mutationRate,popMax){
    this.target=target;
    this.mutationRate = mutationRate;
    this.popMax = popMax;
    this.best = '';
    this.len = this.target.length;
    this.population = [];
    this.accum = [];
    this.generation = 0;
    this.newGen = [];

    for (var i=0;i<this.popMax;i++){
        this.population[i] = new DNA(this.len);
    }

    this.calcFitness = function(){
       // console.log(this.population.length);
        for (var i=0;i<this.popMax;i++){
            this.population[i].fitness =  this.population[i].calcFitness(this.target);
        }
    }

    this.select = function(){
        var ind = 0;
        var max=this.population[0].fitness;
        this.accum = [];
        this.accum[0] = max;
        
        
        for (var i=1;i<this.population.length;i++){
            this.accum[i]= this.accum[i-1]+this.population[i].fitness; 
            
            if (this.population[i].fitness>max){
                max=this.population[i];
                ind=i;
            }
        }
        this.best = this.population[ind].getPhrase();
       // console.log(this.population[ind].fitness+ " " + this.best);

    }

    this.generate = function(){
        for (var i=0;i<this.popMax;i++){
        //console.log(i + " pop " + this.population[i].fitness)
        var first = floor(random(this.accum[this.accum.length-1]));
        var second = floor(random(this.accum[this.accum.length-1]));
        
        var indf=0;
        var indsec=0;
        for (var j=1;j<this.accum.length;j++){
            if (first<=this.accum[j] && first>this.accum[j-1]){indf=j;}
            
            if (second<=this.accum[j] && second>this.accum[j-1]){indsec=j;}
        }
        
        var parentA = this.population[indf];
        var parentB = this.population[indsec];
        //console.log(parentA.fitness + ' ' + parentB.fitness);
        
            var child = parentA.combine(parentB);
            //console.log("chld"+child.calcFitness(this.target));
            child.mutate(this.mutationRate);
            this.newGen[i] = child;
        }
        for (i=0;i<this.popMax;i++){
            this.population[i].phrase =this.newGen[i].getPhrase();
        }
       



        this.generation++;
    }

    this.isFound =function(){
        if (this.best == this.target){return true;}
    }

    this.getGen = function(){
        return this.generation;
    }

    this.getAll= function(){
        var str = '';
        for (var i=0;i<this.popMax;i++)
        {str += this.population[i].getPhrase() + '<br>'}
        return str;
    }


}