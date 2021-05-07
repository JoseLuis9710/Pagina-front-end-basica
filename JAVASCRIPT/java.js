function comprobar() {
    var valor = document.getElementById("uname").value;
    var valor2 = document.getElementById("psw").value;
    if(valor=="jose" && valor2=="jose"){
        window.location = 'admin.html';
    }
    else if(valor=="darwin" && valor2=="darwin"){
        window.location = 'estudiante.html';
    }
    else if(valor=="truque" && valor2=="truque"){
        window.location = 'profe.html';
    }
    else {
        alert("usuario no encontrado, ingresa bien los datos");
    }
    
    
  }
