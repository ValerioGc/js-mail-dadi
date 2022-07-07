const mail_auth = ['prova@mail.it', 'prova2@mail.it', 'prova3@mail.it', 'prova3@mail.it', 'prova5@mail.it', 'prova6@mail.it'];

const btn = document.getElementById('submit');
btn.addEventListener('click',
    function () {
        let value_l = parseInt(mail_auth.length);
        for (let i = 0; i < value_l; i++) {
            console.log('Le mail autorizzate sono le seguenti:');
            console.log(mail_auth[i]);
        }
        let us_in = document.getElementById('user_input');
        let user_input = us_in.value;
        if (!isNaN(user_input)) {
            alert('Inserisci correttamente la mail');
            location.reload();
        }
        console.log('La mail inserita è:' + ' ' + user_input);
        if ((user_input == mail_auth[0]) || (user_input == mail_auth[0]) || (user_input == mail_auth[0]) ) {
            alert('La tua mail è autorizzata');
        }
        else {

        }
        
    });
