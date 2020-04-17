// jshint esversion: 6

let main = function(){

    // let prefixURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
    // let suffixURL = "&format=json&jsoncallback=?";
    // //get value entered by user from textbox
    // let flickrTag = $("input").???();

    let requestURL = "https://thejsway-server.herokuapp.com/api/articles";

    //clear old photos
    // $(".photos").???("");

  $.getJSON(requestURL, function(response) {

    console.log(response);

    console.log(`Article ${response[0].id} 
      Title: ${response[0].title} 
      Content: ${response[0].content}`)
    
    response.forEach(function(article, index) {
      let newDiv = document.createElement("div");
      document.querySelector(".articles").appendChild(newDiv);

      let header = document.createElement("h3");
      header.textContent = `Article ${article.id}`;
      newDiv.append(header);


      let titlePar = document.createElement("p");
      titlePar.textContent = article.title;
      newDiv.append(titlePar);

      let contentPar = document.createElement("p");
      contentPar.textContent = article.content;
      newDiv.appendChild(contentPar);

      // //Flickr returns 20 images by default
      // //We need only six images for the Gallery
      // if (index < 6) {
      //   // create a new JQuery element to hold the image
      //   // but hide it so we can fade it in
      //   let $img = $("<img>").hide();

      //   // set the attribute to the url
      //   // contained in the response
      //   $img.attr("src", item.media.m);
      //   $img.attr("width", "100");

      //   // attach the img tag to the main
      //   // photos element and then fade it in
      //   $(".photos").append($img);
      //   $img.fadeIn();
      // }
    });

  });
};


$(document).ready(main);
