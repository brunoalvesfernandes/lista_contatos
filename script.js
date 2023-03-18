const addContatoStyle = document.getElementById('add-contato');
const formAdd = document.getElementById('form-add');
const tel = document.getElementById('telefone');
const addContatosContainer = document.getElementById('add_contatos_container');
addContatosContainer.style.height = "0px";

let listaTelefonica = [];
let listaTelefonicaComp = [];

addContatoStyle.addEventListener('click', function(){

    if(addContatosContainer.style.height == "0px") {
        addContatosContainer.style.height = "100px";
        addContatoStyle.innerHTML = "-";
        addContatoStyle.style.backgroundColor = "red";
    }else {
        addContatosContainer.style.height = "0px";
        addContatoStyle.innerHTML = "add +";
        addContatoStyle.style.backgroundColor = "rgb(0, 202, 0)";
    }
})


formAdd.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const erro = document.getElementById('error');

    const data = new Date();
    let usuarioTel =
    `<tr>
        <td>${nome.value}</td>
        <td>${email.value}</td>
        <td>${tel.value}</td>
        <td>${data.toLocaleString('pt-BR', { timezone: 'UTC' })}</td>
    </tr>`;
    let usuarioTelComp = tel.value;
        
    if(comparaTel(tel.value)){
        erro.style.height = '30px';
    }else {
        erro.style.height = '0';
        listaTelefonica.push(usuarioTel);
        listaTelefonicaComp.push(usuarioTelComp);

        nome.value = '';
        email.value = '';
        tel.value = '';

        document.getElementById('lista-telefonica').innerHTML = listaTelefonica.toString().replace(/,/g, '');
        document.getElementById('qtd-contatos').innerHTML = `Total de <b>${listaTelefonicaComp.length}</b> Contato(s)`

    }

})

function comparaTel(tel) {
    for (const key in listaTelefonicaComp) {
        if (listaTelefonicaComp[key] == tel) {
            return true
        }else {
            return false
        }
    }
}