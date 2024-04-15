const formulario = document.querySelector("form");
const Inome = document.querySelector(".name");
const Iemail = document.querySelector(".email");

function cadastrar(){
    fetch("http://localhost:8081/users",
    {
        headers: {
            'Accept': 'application/json',
            'content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            name : Inome.value,
            email : Iemail.value
        })
    })
    .then(function(res){console.log(res)})
    .catch(function(res){console.log(res)})
};
function limpar(){
    Inome.value = "";
    Iemail.value = "";
}

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    cadastrar();
    limpar();
    
});
    
