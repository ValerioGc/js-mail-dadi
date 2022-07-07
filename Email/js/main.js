const mail_auth = ['prova@mail.it', 'prova2@mail.it', 'prova3@mail.it', 'prova4@mail.it', 'prova5@mail.it'];
const btn = document.getElementById('submit');
btn.addEventListener('click',
    function () {
        let value_l = mail_auth.length;
        for (let i = 0; i < value_l; i++) {
            console.log('Mail Autorizzata:' + mail_auth[i]);
        }
        let us_in = document.getElementById('user_input');
        let user_input = us_in.value;
        if (!isNaN(user_input)) {
            alert('Inserisci correttamente la mail');
            location.reload();
        } else {
            console.log('La mail inserita è:' + ' ' + user_input);
            let message = document.querySelector('header h1');
            let messagecont = document.querySelector('header');
            let label = document.querySelector('label');

            if (mail_auth.indexOf(user_input) >= 0) {
                console.log('Mail autorizzata.');
                message.innerHTML = 'Mail autorizzata. Benvenuto';
                message.style.color = 'Green';
                message.style.padding = ' 50px 0';
            } else {
                message.innerHTML = 'Nessun Riscontro! <br> <p>Reinserisci la tua mail e clicca sul bottone per registrarti.</p>';
                messagecont.innerHTML = 
                `
                <h1>Nessun Riscontro!</h1> <br> 
                <p>Clicca sul bottone per registrarti.</p>
                <button id="register">Registrati</button>
                `;
                message.style.color = 'red';
                let register = document.getElementById('register');
                register.addEventListener ('click',
                    function () {
                        messagecont.innerHTML =
                        `
                            <h1 style="color:red" >Registrati</h1> 
                            <label for="usr_re">Reinserisci la tua mail e clicca ivia.</label>
                            <input type="text" id="usr_re">
                            <button id="send">Invia</button>
                        `;
                        let sendt = document.getElementById('send');
                        sendt.addEventListener ('click', 
                        function () {
                            messagecont.innerHTML =
                            `
                            <h1>Mail autorizzata. Benvenuto</h1>
                            `;
                        });
                });
                label.innerHTML = "";
            }
        }
    });