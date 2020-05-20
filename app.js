
$('.year-toggle').click(function () {
  var target = $(event.target);
  console.log(target.hasClass('open'));
  var slides = target.next()
    .children()

  if (!target.hasClass('open')) {
    target.addClass('open');
    slides.addClass('js-visible');
    var count = slides.length;
    var time = 0 / count;
    slides.each((index, slide) => {
      setTimeout(()=> {
          $(slide).fadeTo(index * time, 1);
      }, time);
    })
  } else {
    console.log('CLOSING');
    slides.removeClass('js-visible')
    slides.fadeTo(10, 0);
    target.removeClass('open');
  }
})

var space = 10;
var speed = 3;
var direction = "left";

// no need to change anything below this line
/* --------------------------------- */

//var modifier = (direction === "left") ? -1 : 1;


// create a ticker div
var tickerdiv = $("<div>").attr("id","ticker");
tickerdiv.css({
    "display":"inline-block",
    "white-space": "nowrap",
    "position":"relative"
});

// add it to the container
$("#ticker-container").append(tickerdiv);
$("#ticker-container").css("overflow","hidden");

// move the ticker-text to the tickerdiv
$("#ticker-text").css({
    "display":"inline-block",
    "position":"absolute"
});
tickerdiv.append(  $("#ticker-text") );


// add ticker-texts untill the ticker-container is filled
//var i = 1;
var xpos    = $("#ticker-text").width() + space;
var totalw  = $("#ticker-text").width() + $("#ticker-container").width();
while (xpos < totalw ) {
    var clone = $("#ticker-text").clone();
    //clone.addClass("class-" + i);
    clone.css({
        "left":xpos,
      //  "color": '#'+Math.floor(Math.random()*16777215).toString(16)
    });
    tickerdiv.append( clone );

    xpos += clone.width() + space;
   // i++;
}
//$("#ticker-text").addClass("class-0");
