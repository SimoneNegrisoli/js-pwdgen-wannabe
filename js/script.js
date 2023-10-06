// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


const fixedNumber = 21;

let nome = prompt("Qual è il tuo nome?");
let cognome = prompt("Qual è il tuo cognome?");
let colore = prompt("Qual è il tuo colore preferito?");

let pwdEasy = document.getElementById('pwd')

pwdEasy.innerHTML = `

    ${nome}${cognome}${colore}${fixedNumber}
`



