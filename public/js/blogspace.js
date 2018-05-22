console.log(sessionStorage.loggedIn);

$(document).ready(() => {

    //delete blogPost
    $(document).on("click", ".delete", (clicked) => {

        event.preventDefault();

        var postID = $(clicked.currentTarget).data("postid");

        console.log("postID " + postID);

        $.ajax({
            url:`/api/delete/${postID}`,
            type: "DELETE",
        }).then((response) => {
            console.log(response);

            $(`#${postID}`).remove();

        });
    });


    $(document).on("click", "#template1", (clicked) => {

        event.preventDefault();

        var userID = $(clicked.currentTarget).data("userid");

        console.log("userID " + userID);

        $.ajax({
            url:`/api/${userID}/template/1">`,
            type: "PUT",
        }).then((response) => {
            console.log(response);
        });
    });

});


