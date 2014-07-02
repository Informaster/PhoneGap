/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
      $("body").html("<div class='ueberschrift'>Hallo</div>, dies ist mein Spiel");
      $("body").append("<br> Dies ist eine weitere Zeile zur Demonstration der funktionierenden Funktionsweise dieser Unternehmung");
      $("body").append("<br> BMI-Rechner  <p> Grösse (m) : <input id='groesse' type='text'/> ");
      $("body").append("<br> Gewicht : <input id='gewicht' type='text' />");
      $("body").append("<p> <input id='start' type='button' value='Berechnen'/>");
      $("body").append("<div id='ausgabe' />");
      
      $("#start").click(function(){
          
          var groesse=parseFloat($("#groesse").val(),10);
          var gewicht=parseFloat($("#gewicht").val(),10);
          var BMI=gewicht/(groesse*groesse);    
          
          $("#ausgabe").html("Dein BMI ist "+BMI);
          
            
      });
      
      
});
  
