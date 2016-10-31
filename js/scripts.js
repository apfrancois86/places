function Place(city, country, landmarks, timeOfYear, notes, imageURL) {
  this.city = city;
  this.country = country;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.imageURL = imageURL;
}

Place.prototype.locations = function () {
  return this.city + ", " + this.country;
};

$(function() {
  $("form#addPlace").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#city").val();
    var inputtedCountry = $("input#country").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedTimeOfYear = $("input#timeOfYear").val();
    var inputtedNotes = $("input#notes").val();
    var inputtedImageURL = $("input#image").val();

    var newPlace = new Place(inputtedCity, inputtedCountry, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes, inputtedImageURL);

    $(".locationsList ul").append("<li>" + newPlace.locations() + "</li>");
    $(".locationsList li").last().click(function(){
      $("#showLocation").show();
      $("#showLocation h2").text(newPlace.locations());
      $(".showLandmark").text(newPlace.landmarks);
      $(".showTime").text(newPlace.timeOfYear);
      $('.showNotes').text(newPlace.notes);
      $(".showImage").html("<img src=" + newPlace.imageURL + " alt='image of place'>");
    });

    $("input#city").val("");
    $("input#country").val("");
    $("input#landmarks").val("");
    $("input#timeOfYear").val("");
    $("input#notes").val("");
    $("input#image").val("");

  });
});
