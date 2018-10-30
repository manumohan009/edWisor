// defining a class
class AnimalGen {

    constructor(public limbs: number, public typeOfAnimal: string, public diet: string) {
        this.limbs = limbs;
        this.typeOfAnimal = typeOfAnimal;
        this.diet = diet;

    }// end constructor

    getDietType = () => {
        return this.diet
    }
    


}// end class 

class Dog extends AnimalGen{

    canBark=() =>{
        return true;
    }


}


