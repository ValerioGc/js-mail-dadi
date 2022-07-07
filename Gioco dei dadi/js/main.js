const btn = document.getElementById('sub');
let user_points = document.getElementById('user_points');
let pc_points = document.getElementById('pc_points');
btn.addEventListener ('click',
    function() {
        let pc_try = Math.ceil(Math.random() * 5) + 1;
        let user_try = Math.ceil(Math.random() * 5) + 1;
        user_points.innerHTML = `Il punteggio dell'utente é  ${user_try} `;
        pc_points.innerHTML = `Il punteggio dell'utente é  ${pc_try} `;
        let result;
        if (pc_try > user_try) {
            result = "Hai perso!"
        } else if (pc_try < user_try) {
            result = "Hai Vinto!"
        } else {
            result = "Pareggio!"
        }
        let risultato = document.getElementById('risultato');
        risultato.innerHTML = result;
        risultato.style.backgroundColor = "LightGrey";
        risultato.style.fontSize = "20px";
        risultato.style.fontWeight = "bold";
        console.log(result)
    });