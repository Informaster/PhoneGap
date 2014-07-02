/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
     $("body").html("Zahlencode : <input id='code' type='text' size='13'/><br>");
$("body").append("Liniendicke : <input id='line' type='text' value='2'/><br>");
$("body").append("<input id='start' type='button' value='Code zeichnen' /><p>");
$("body").append("<canvas id='barcode' height='110' width='210'/>");
$("body").append("<div id='codeAusgabe' />");
$("body").append("<div id='testausgabe' />");
$("body").append("<p><div id='ausgabe' />");

var zo=$("#barcode")[0].getContext("2d");



$("#start").click(function(){

  zo.beginPath();
  zo.moveTo(0,0);
  zo.lineTo(200,0);
  zo.lineTo(200,100);
  zo.lineTo(0,100);
  zo.closePath();
  
  zo.fillStyle="#ffffff";
  zo.fill();
  
  
  var width=$("#line").val();
      width=parseInt(width,10);
  
  
  var code=$("#code").val();
  var ziffer=code.split("");
  var rightCode=[];
  
  for (i=0; i<13; i++){
      ziffer[i]=parseInt(ziffer[i],10);
    
    if(i>6){
      rightCode[i-7]=zifferToRight(ziffer[i]);
    }
      
      
  }
  
  if (code.length!=13){
    $("#ausgabe").html("Der Zahlencode muss 13 Zahlen beinhalten!!!!");
    $("#ausgabe").css("color","red");
  }
  
   var pruefZahl=parseInt(ziffer[0],10);  
   var pruefCode=prfMuster(pruefZahl);
   var prfCdZeichen=pruefCode.split("");
  
  var leftOneCode=new Array(6);
   var leftZeroCode=new Array(6);
   var leftCode="";
  
  for(i=0;i<6;i++){
    leftOneCode[i]=0;
    leftZeroCode[i]=0;
    
    if(prfCdZeichen[i]==1){
          leftOneCode[i]=zifferToRight(ziffer[i+1]).split("").reverse().join("");
      
    } else if(prfCdZeichen[i]==0){
      
      leftZeroCode[i]=zifferToLeft(ziffer[i+1]);
      
    
    }
   
  }
    
 
  
  var leftZero=leftZeroCode.join("");  
  var leftOne=leftOneCode.join("");
  var right=rightCode.join(""); 
  
  

  var leftArray=new Array(6);
  
  
  for(i=0;i<6;i++){
    
     leftArray[i]=0;
    
    if(leftZeroCode[i]!=0){
      leftArray[i]=leftZeroCode[i];
    }
    else{
      leftArray[i]=leftOneCode[i];
    }
  }
  var left=leftArray.join("");
  
  
  

  var codeGesamt="101"+left+"01010"+right+"101";
  var codeString="000000"+codeGesamt;
  
  
  var codeZeichen=codeString.split("");
  
  for(i=0; i<=codeZeichen.length;i++){
    
    var height=0;
    
    if(i==6 || i==8 || i==52 || i==54 || i==98 || i==100){
      height=110;
    }
    else{
      height=100;
    }
    
    
    if(codeZeichen[i]==1){
      codeZeichnen(i*width,width,height);
    }
    
  }
  

  $("#codeAusgabe").html(code);
  $("#testausgabe").html(codeGesamt);
  
});






function codeZeichnen(l,width,height){
 
  zo.beginPath();
  zo.moveTo(l,0);
  zo.lineTo(l,height);
  zo.closePath();
  
  zo.strokeStyle="";
  zo.stroke();
  
  zo.lineWidth=width;

}





function prfMuster(ziffer){
 
  var pruefCode="";
  
  switch(ziffer){
    case 0:
        pruefCode="000000";
      break;
    case 1:
        pruefCode="001001";
      break;
    case 2:
        pruefCode="001101";
      break;
    case 3:
        pruefCode="001110";
      break;
    case 4:
        pruefCode="010011";
      break;
    case 5:
        pruefCode="011001";
      break;
    case 6:
        pruefCode="011100";
      break;
    case 7:
        pruefCode="010101";
      break;
    case 8:
        pruefCode="010110";
      break;
    case 9:
        pruefCode="011010";
      break;
   default: 
        pruefCode="hallo";
      break;
       
  } 
      return pruefCode;
  
}



function zifferToRight(ziffer){
  
  var Code="";
  
  switch(ziffer){
      
    case 0:
        Code="1110010";
      break;
    case 1:
        Code="1100110";
      break;
    case 2:
        Code="1101100";
      break;
    case 3:
        Code="1000010";
      break;
    case 4:
        Code="1011100";
      break;
    case 5:
        Code="1001110";
      break;
    case 6:
        Code="1010000";
      break;
    case 7:
        Code="1000100";
      break;
    case 8:
        Code="1001000";
      break;
    case 9:
        Code="1110100";
      break;
   default: 
        Code="hallo";
      break;
       
  }
  return Code;
  
  
}

function zifferToLeft(ziffer){
  
  var Code="";
  
  switch(ziffer){
      
    case 0:
        Code="0001101";
      break;
    case 1:
        Code="0011001";
      break;
    case 2:
        Code="0010011";
      break;
    case 3:
        Code="0111101";
      break;
    case 4:
        Code="0100011";
      break;
    case 5:
        Code="0110001";
      break;
    case 6:
        Code="0101111";
      break;
    case 7:
        Code="0111011";
      break;
    case 8:
        Code="0110111";
      break;
    case 9:
        Code="0001011";
      break;
   default: 
        Code="hallo";
      break;
       
  }
  return Code;
  
  
}

    
/*function invertNumber(ziffer){
  
  
  var zeichenCode=ziffer.split("");
      
      for(i=0;i<zeichenCode.length;i++){
        
        if(zeichenCode[i]==0){
          zeichenCode[i]=1;
        }
        else if(zeichenCode[i]==1){
          zeichenCode[i]=0;
        }
      }
  var zeichenKette=zeichenCode.join("");
        
        return zeichenKette;
}*/
      
});
  
