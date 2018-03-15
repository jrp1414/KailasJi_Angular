abstract class Animal{
    abstract makeSound():void;
    move():void{
        console.log();
    }
}

class Cow extends Animal {
    makeSound(): void {
        throw new Error("Method not implemented.");
    }    
}

class someClass{
    constructor(){
        let cow:Cow = new Cow();
        
    }
}

