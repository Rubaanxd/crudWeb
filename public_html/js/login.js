/* 
 * archivo para validcion de Login
 */
var username;
var pass;
function obtenerValores(){
    if(document.getElementById("username").value !== null){
        username = document.getElementById("username").value;
    }else{
        alert("El campo de Usuario es Obligatorio");
    }
    if(document.getElementById("password").value !== null){
        pass = document.getElementById("password").value;
    }else{
        alert("La contraseña esta vacia");
    }
}

