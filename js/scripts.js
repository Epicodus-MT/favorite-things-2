$(function(){
  //this code runs when page is ready

  $('#submitButton').click(function(event){
    event.preventDefault(); //this stops the form from submitting
    //array code goes here
    //get value of favoritePlace
    var place = $('#place').val();
    //get value of favoriteFood
    var food = $('#food').val();
    //get value of favoriteActor
    var actor = $('#actor').val();

    //create array the three items
    var favoriteThings = [place, food, actor];
    //this sends our info to the console
    console.log("Our array is equal to ", favoriteThings);

    console.log("The second item is", favoriteThings[1]);
    console.log("The second item is", favoriteThings[0]);
    console.log("The second item is", favoriteThings[2]);

    //create a new array
    var new_array = [];
    new_array.push(favoriteThings[0], favoriteThings[1], favoriteThings[2]);
    console.log(new_array);
  });
});
