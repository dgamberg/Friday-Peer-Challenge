/**
 * Created by scottbromander on 10/23/15.
 */
var peopleArray = ["Dave", "Dana", "Laryssa", "Kelly", "Zeeshan", "Paige", "Jason", "Natalie", "John", "Jake", "Colin", "Heather", "Andy", "Danny", "Thomas", "Dane", "Aron", "Pui", "Mike", "Paul", "Karl", "Sam"];

var indexTracker = 0;

$(document).ready(function(){
    createCarousel(peopleArray);

    updateIndexPoints();

    $("#next").on('click', nextSlide);
    $("#prev").on('click', prevSlide);

});

function createCarousel(array){
    $("#lecture").append("<div class='main'></div>");
    var $el = $("#lecture").children().last();
    createNavButtons($el);
    createIndexPoints(array, $el);
}

function nextSlide(){
    indexTracker++;
    if(indexTracker >= peopleArray.length){
        indexTracker = 0;
    }

    updateIndexPoints();
}

function prevSlide(){
    indexTracker--;
    if(indexTracker < 0){
        indexTracker = peopleArray.length - 1;
    }

    updateIndexPoints();
}

function createNavButtons($el){
    $el.append("<div id='prev' class='nav-button'>Prev</div>");
    $el.append("<div id='next' class='nav-button'>Next</div>");
}

function createIndexPoints(array, $el){
    $el.append("<div class='controls'>");
    $el = $el.children().last();

    for(var i = 0; i < array.length; i++){
        $el.append("<div class='index-point' id='index" + i + "'></div>")
    }

    //$('.index-point').append('</div>').children().last();
}

function updateIndexPoints(){
    for(var i = 0; i < peopleArray.length; i++){
        $("#index" + i).removeClass("index-point-active");


        if(i == indexTracker){
            $("#index" + i).addClass("index-point-active");
            $('#mainContent').html("<div class='name'>" + peopleArray[i] + "</div>" );
        }
    }
}
