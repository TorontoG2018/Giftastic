$("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    var animal = $(this).attr("data-animal");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=uatmWwoWvkLd5PCazPTE8spc6YIPmjOw";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];
        function renderButtons() {

            // Deleting the movies prior to adding new movies
            // (this is necessary otherwise you will have repeat buttons)
            $("#buttons-view").empty();
    
            // Looping through the array of movies
            for (var i = 0; i < movies.length; i++) {
    
              // Then dynamicaly generating buttons for each movie in the array
              // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
              var a = $("<button>");
              // Adding a class of movie-btn to our button
              a.addClass("movie-btn");
              // Adding a data-attribute
              a.attr("data-name", movies[i]);
              // Providing the initial button text
              a.text(movies[i]);
              // Adding the button to the buttons-view div
              $("#buttons-view").append(a);
            }
          }





        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var animalDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var animalImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          animalImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          animalDiv.append(p);
          animalDiv.append(animalImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(animalDiv);
        }
      });
  });