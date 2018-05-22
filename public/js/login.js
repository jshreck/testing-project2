function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

}

$(document).ready(() => {
    // Get the element with id="defaultOpen" and click on it
    $("#defaultOpen").click();

    //On signup
    $("#signupSubmit").on("click", function () {

        event.preventDefault();

        //gets form info
        var data = $("#signupForm").serializeArray();

        //check to make sure passwords match
        if (data[2].value.trim() != data[3].value.trim()) {
            alert("Passwords do not match, try again!");
        }

        //check to make sure username not blank
        else if (data[0].value === "") {
            alert("Invalid username");
        }

        //sends form data
        $.post("/api/newUser", data).then((response) => {
            console.log(response);
            $("#defaultOpen").click();
        })
            .catch((err) => {
                alert(err.responseText);
            });
    });

    //On signin
    $("#signinSubmit").on("click", function () {

        event.preventDefault();

        //gets form info
        var data = $("#signinForm").serializeArray();
        var username = data[0].value;
        //sends form data
        $.post("/api/login", data).then((response) => {
            //if successful, redirects to blogspace
            console.log(response);
                sessionStorage.loggedIn = username;
                window.location.replace("/blogspace/" + sessionStorage.loggedIn);
        })
            .catch((err) => {
                alert(err.responseText);
            });
    });


});

 