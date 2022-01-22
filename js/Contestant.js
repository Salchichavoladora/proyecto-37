class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }


  getCount(){
    // revisa en la base de datos lo que se solicita en el parentesis
    var contestantCountRef = database.ref('contestantCount');
    //oyente para cada vez que surge un cambio
    contestantCountRef.on("value",(data)=>{
//obtiene el valor
      contestantCount = data.val();
    })
  }

  updateCount(count){
    //actualiza el numero de usuarios
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    //indice de numero de usuarios
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}
