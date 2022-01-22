class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    background("yellow");
    fill("black");
    textSize(30); 
    text("Resultado del Cuestionario",250,50);
    // Contestant.getPlayerInfo();
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })

    if(allContestants !== undefined){
       var index = 0;
      fill("Blue");
      textSize(15);
      text("*NOTA : ¡El concursante que respondio correctamente, esta resaltado en color verde!", 30,230);
    for(var plr in allContestants){
       index = index+1;
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer){

        fill("Green");
        text("el ganador es: "+allContestants[plr].name, 230,300);

              }else{

              fill("red");  
              text("Respuesta incorrecta: "+allContestants[plr].name,230, 330)
        }
    
        }
      }
    }
  }


