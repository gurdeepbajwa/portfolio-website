var API_URL = 'https://d03bvwc3u9.execute-api.ap-southeast-2.amazonaws.com/default/entries';

function sendToAPI(obj) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(obj);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://d03bvwc3u9.execute-api.ap-southeast-2.amazonaws.com/default/entries", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function readyJSON(date, message, email, firstName, secondName, org) {
    let obj =
    {
        "message": [
            {
                "date": date,
                "message": message,
                "email": email,
                "firstName": firstName,
                "secondName": secondName,
                "org": org
            }
        ]
    };

    sendToAPI(obj);
}

function clearForm() {
    document.getElementById("messageInput").value = "";
    document.getElementById("orgInput").value = "";
    document.getElementById("SecondNameInput").value = "";
    document.getElementById("firstNameInput").value = "";
    document.getElementById("emailInput").value = "";
}

$('#submitButton').on('click', function () {

    // --- Validate Inputs -----------------------------------------------
    var email = document.getElementById("emailInput").value;
    var firstName = document.getElementById("firstNameInput").value;
    var secondName = document.getElementById("SecondNameInput").value;
    var org = document.getElementById("orgInput").value;
    var message = document.getElementById("messageInput").value;
    var date = Date.now();

    let isInvalid = false;
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailRegExp = new RegExp(emailPattern);

    // Reset error messages to empty
    document.getElementById("emailErrorOutput").innerText = "";
    document.getElementById("messageErrorOutput").innerText = "";

    // Validation checks
    if (email == null || email == "") {
        isInvalid = true;
        document.getElementById("emailErrorOutput").innerText = "Email address is mandatory";
    } else if (!emailRegExp.test(email)) {
        isInvalid = true;
        document.getElementById("emailErrorOutput").innerText = "Email address is not valid";
    }
    if (message == null || message == "") {
        isInvalid = true;
        document.getElementById("messageErrorOutput").innerText = "Message is mandatory";
    }

    // Valid  Inputs function
    if (isInvalid == false) {
        readyJSON(date, message, email, firstName, secondName, org);
        clearForm();
    }

    // Prevent page reload
    return false;
});

