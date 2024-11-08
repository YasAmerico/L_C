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
    }
})