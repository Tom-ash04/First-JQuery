$(function(){                                       //  uruchamia kod po wczytaniu DOM
console.log('DOM załadowany - można się bawić'); 

var span = $("span");                               // zmienia kolor co drugiego spana na czerwony
    span.each(function(index, element){
       if (index % 2 == 0){
           $(element).css("color", "red");
       };
    });
// można też napisać: $("span:even").css("color", "red");
var p = $("p");                                     //  dodaje do każdego paragrafu przycisk
    p.each(function(index, element){
        var button = "<button class='btn' data-tmp='" + index + "'>Click me!!</button>"
        $(element).append(button)
    });

$("button").click(function(){                   //  przycisk po kliknięciu ukazuje numer swojego indexu
    alert($(this).attr("data-tmp"));
});
});