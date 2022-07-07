const mail_auth = ['prova@mail.it', 'prova2@mail.it', 'prova3@mail.it', 'prova4@mail.it', 'prova5@mail.it'];
const btn = document.getElementById('submit');
let value_l = mail_auth.length;
for (let i = 0; i < value_l; i++) {
    console.log('Mail Autorizzata:' + mail_auth[i]);
}
btn.addEventListener('click',
    function () {
        let us_in = document.getElementById('user_input');
        let user_input = us_in.value;
        if (!isNaN(user_input)) {
            alert('Inserisci correttamente la mail');
            location.reload();
        } else {
            console.log('La mail inserita è:' + ' ' + user_input);
            let message = document.querySelector('main h1');
            let messagecont = document.querySelector('main');
            let label = document.querySelector('label');
            if (mail_auth.indexOf(user_input) >= 0) {
                messagecont.classList = "jello";
                console.log('Mail autorizzata.');
                label.innerHTML = "";
                message.innerHTML = 'Mail autorizzata. Benvenuto';
                message.style.color = 'Green';
                message.style.padding = ' 150px 0';
                btn.style.display = "none";
                us_in.style.display = "none";
            } else {
                message.innerHTML = 'Nessun Riscontro! <br> <p>Reinserisci la tua mail e clicca sul bottone per registrarti.</p>';
                messagecont.innerHTML = 
                `
                <h1 style="color:red">Nessun Riscontro!</h1> <br> 
                <p>Clicca sul bottone per registrarti.</p>
                <button id="register">Registrati</button>
                `;
                message.style.color = 'red';
                let register = document.getElementById('register');
                register.addEventListener ('click',
                    function () {
                        messagecont.innerHTML =
                        `
                            <h1>Registrati</h1> 
                            <label for="usr_re">Reinserisci la tua mail e clicca invia.</label>
                            <input type="text" id="usr_re">
                            <button id="send">Invia</button>
                        `;
                        let sendt = document.getElementById('send');
                        sendt.addEventListener ('click', 
                        function () {
                            mail_auth.push(user_input);
                            messagecont.innerHTML =
                            `
                            <h1 style="padding: 130px 0 20px; color: green;"> Mail Registrata. <br> Benvenuto</h1>
                            <p>La seguente mail: <span id="int">${user_input}</span> è stata aggiunta nel sistema</p>
                            `;
                            messagecont.classList = "jello";
                            document.getElementById('int').classList = "jello t_und";
                            for (let i = 0; i < (value_l + 1); i++) {
                                console.log('Mail Autorizzata:' + mail_auth[i]);
                            }
                        });
                });
            }
        }
    });