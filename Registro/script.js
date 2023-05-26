document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm-password').value;
    var passwordError = document.getElementById('password-error');

    if (password !== confirm) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';

        let formulario = new FormData(document.getElementById('formulario'));

        fetch('registrar.php', {
            method: 'POST',
            body: formulario
        })
        .then(res => res.json())
        .then(data => {
            if(data == 'true') {
                document.getElementById('username').value = '';
                document.getElementById('userID').value = '';
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
                document.getElementById('confirm-password').value = '';
                
                alert('The user was inserted successfully.');
                window.location.href = "../Login/index.html";
            } else {
                console.log(data);
            }
        });
    }
});
