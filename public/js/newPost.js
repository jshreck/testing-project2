$(document).ready(() => {


$(document).on("click", "#createPostSubmit", (clicked) => {


    event.preventDefault();

    var userID = $(clicked.currentTarget).data("userid");
    var username = $("#username").data("username");

    console.log("userID " + userID);

     var data = $("#createPostForm").serializeArray();

    

     //sends form data
     $.post(`/api/newPost/${userID}`, data)
     .then((response) => {
         console.log(response);
         window.location.replace("/blogspace/" + username);
     })
         .catch((err) => {
             alert(err.responseText);
         });


});
});