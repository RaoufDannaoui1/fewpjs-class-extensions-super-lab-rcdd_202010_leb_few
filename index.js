// Write your classes here
class tree{
  constructor(species){
    this.species=species;
  }

  static definition(){
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
  }
  
}

class  Deciduous extend Tree {
  constructor(species, name) {
    super(species)=species;
    this.name=name
  }

  static definition(){
    return (
      super.definition() + ' Deciduous trees shed their leaves annually.'
    );
  }
  }
}