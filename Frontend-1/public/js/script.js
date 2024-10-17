function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Application-Key': "{{API_KEY}}",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "UserName": username,
            "PassWord": password
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.type == "student") {
                document.getElementById('message').innerHTML = `Welcome, ${data.displayname_th}<br> ${data.faculty}<br> ${data.department}`;
            } else if (data.type == "employee") {
                document.getElementById('message').innerHTML = `Welcome, ${data.displayname_th}<br> ${data.organization}<br> ${data.department}`;
            } else {
                document.getElementById('message').innerHTML = "Invalid username or password. Please try again.";
            }
        })
        .catch(error => {
            console.error('Error:', error)
        });
}