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

function clearForm() {
    document.getElementById("messageInput").value = "";
    document.getElementById("orgInput").value = "";
    document.getElementById("SecondNameInput").value = "";
    document.getElementById("firstNameInput").value = "";
    document.getElementById("emailInput").value = "";
}

$('#submitButton').on('click', function () {
    var email = document.getElementById("emailInput").value;
    var firstName = document.getElementById("firstNameInput").value;
    var secondName = document.getElementById("SecondNameInput").value;
    var org = document.getElementById("orgInput").value;
    var message = document.getElementById("messageInput").value;
    var date = Date.now();

    if (firstName == "" | firstName == null) {
        firstName = "No name"
    }
    if (secondName == "" | secondName == null) {
        secondName = "No name"
    }
    if (org == "" | org == null) {
        org = "No org"
    }

    let JSONfile =
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

    sendToAPI(JSONfile);
    clearForm();
    return false;
});

