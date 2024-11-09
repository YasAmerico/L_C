let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome =false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario =false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha =false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha =false

let msgError =document.querySelector('#msgError')
let msgSuccess =document.querySelector('#msgSuccess')

//----------------------------------//

nome.addEventListener('keyup',( ) =>{
    if (nome.value.length <= 2){
        labelNome.setAttribute('style','color:red')
        labelNome.innerHTML = 'Nome *Insira um nome válido'
        nome.setAttribute('style','border-color:red')
        validNome = false
    }else{
        labelNome.setAttribute('style','color:green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style','border-color:green')
        validNome=true
    }
})

usuario.addEventListener('keyup',() =>{
    if (usuario.value.length <= 4){
        labelUsuario.setAttribute('style','color:red')
        labelUsuario.innerHTML = 'Usuario *Insira no minimo 5 caracters '
        usuario.setAttribute('style','border-color:red')
        validUsuario = false
    }else{
        labelUsuario.setAttribute('style','color:green')
        labelUsuario.innerHTML = 'Usuario'
        usuario.setAttribute('style','border-color:green')
        validUsuario=true
    }
})

senha.addEventListener('keyup',()=>{
    if (senha.value.length <= 7){
        labelSenha.setAttribute('style','color:red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 8 caracters'
        senha.setAttribute('style','border-color:red')
        validSenha= false
    } else if (!/[A-Z]/.test(senha.value)){
            labelSenha.setAttribute('style','color:red')
            labelSenha.innerHTML = 'Senha *Insira no minimo 1 caracters Maisculo '
            senha.setAttribute('style','border-color:red')
            validSenha = false
    } else if (!/[\W_]/.test(senha.value)){
            labelSenha.setAttribute('style','color:red')
            labelSenha.innerHTML = 'Senha *Insira no minimo 1 simbolo '
            senha.setAttribute('style','border-color:red')
            validSenha = false
    } else {
        labelSenha.setAttribute('style','color:green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style','border-color:green')
        validSenha=true 
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){ // Verifica se as senhas digitas são iguais, se não forem avisa que são diferentes.
      labelConfirmSenha.setAttribute('style', 'color: red')
      labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
      confirmSenha.setAttribute('style', 'border-color: red')
      validConfirmSenha = false
    } else {
      labelConfirmSenha.setAttribute('style', 'color: green')
      labelConfirmSenha.innerHTML = 'Confirmar Senha'
      confirmSenha.setAttribute('style', 'border-color: green')
      validConfirmSenha = true
    }
  })

function cadastrar(){
    if (validNome && validUsuario && validSenha &&  validConfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem['listaUser']||'[]')

        let senhaCriptografada = CryptoJS.SHA512(senha.value).toString()

        listaUser.push(
            {
                nomeCad:nome.value,
                userCad:usuario.value,
                senhaCad:senhaCriptografada
            }
        )

    }
    localStorage.setItem('listaUser',JSON.stringify(listaUser))
}
