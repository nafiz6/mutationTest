


function DNA(len){
    this.phrase='';
    this.fitness;
    this.len = len;
    
    for (i=0;i<len;i++){
        var c =floor(random(63,122));
        if (c==63){c=32;}
        if (c==64){c=46;}
        this.phrase+=String.fromCharCode(c);
    }

    this.calcFitness = function(target){
        var fit = 0;
        for (var i=0;i<this.len;i++){
            if (this.phrase[i]==target[i]){fit++;}
        }
        return fit*20;
    }

    this.combine = function(second){            //combines best two
        var child = new DNA(this.len)
        var mid = floor(random(this.len-1));
        
        child.phrase = this.phrase.substr(0,mid) + second.phrase.substr(mid);
       
        
        //console.log(this.phrase + ' ' + second.phrase + ' ' + mid + ' ' +child.phrase);
        return child;
    }

    this.mutate = function(mutationRate){       //adds mutation
        for(var i=0;i<this.len;i++){
            if (random(1)<mutationRate){
                var c =floor(random(63,122));
                if (c==63){c=32;}
                if (c==64){c=46;}
                //console.log(this.phrase);
                this.phrase = this.phrase.substr(0,i) + String.fromCharCode(c) + this.phrase.substr(i+1);
               // console.log(2+" "+this.phrase);    
                //this.phrase[i]=String.fromCharCode(c);
            }
        }        
    }
    
    this.getPhrase = function(){
        return this.phrase;
    }

    this.getFitness = function(){
        return this.fitness;
    }



    

}