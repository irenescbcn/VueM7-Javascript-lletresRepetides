// //---------- EJERCICIOS NIVEL 1 ----------
//Ejercicio 1
function ejercicio1() {
  let miNombre = ["I", "R", "E", "N", "E"];
  let result1 = [];

  for (let i = 0; i < miNombre.length; i++) {
    result1.push(miNombre[i]);
  }
  document.getElementById("resultadoEjercicio1").innerHTML = result1.join("");
}


//Ejercicio 2
function ejercicio2() {
  let nombre = ["I", "R", "E", "N", "3", "E"];
  let vocal = ["A", "E", "I", "O", "U"];
  let consonante = ["R", "N"];
  let result2 = [];

  function buscarVocal(i) {
    let resultado;
    for (; i < nombre.length; i++) {
      for (let j = 0; j <= vocal.length; j++) {
        if (nombre[i] == vocal[j]) {
          resultado = nombre[i];
          break;
        }
      }
      break;
    }
    return resultado;
  }

  function buscarConsonante(i) {
    let resultado;
    for (; i < nombre.length; i++) {
      for (let z = 0; z <= consonante.length; z++) {
        if (nombre[i] == consonante[z]) {
          resultado = nombre[i];
          break;
        }
      }
      break;
    }
    return resultado;
  }

  console.log("Partim del nom " + nombre.join(""));
  for (let i = 0; i < nombre.length; i++) {
    if (nombre[i] == buscarVocal(i)) {
      let resultVocal = "He trobat la VOCAL: " + nombre[i] + "<br>";
      result2.push(resultVocal);
    } else if (nombre[i] == buscarConsonante(i)) {
      let resultConsonante = "He trobat la CONSONTANT: " + nombre[i] + "<br>";
      result2.push(resultConsonante);
    } else {
      resultNumeros =
        "Els noms de persones no contenen el número: " + nombre[i] + "<br>";
      result2.push(resultNumeros);
    }
  }
  document.getElementById("resultadoEjercicio2").innerHTML = result2.join("");
}



//Ejercicio 3
function ejercicio3() {
  let nombreIrene = ["I", "R", "E", "N", "E"];

  let contadorLetras = nombreIrene.map((x) => [
    x,
    nombreIrene.filter((y) => y === x).length,
  ]);
  document.getElementById("resultadoEjercicio3").innerHTML = contadorLetras;
}



//Ejercicio 4
function ejercicio4() {
  let myName = ["I", "R", "E", "N", "E"];
  let surname = ["S", "A", "N", "T", "O", "S"];
  myName.push(" ");

  let fullName = myName.concat(surname);

  document.getElementById("resultadoEjercicio4").innerHTML=fullName.join("");
}



//---------- EJERCICIO NIVEL 2 ----------
function ejercicioNivel2(){
let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

let myRegex = /([\u00f1\u00d1A-Z\d\.-]+)@([\u00f1\u00d1A-Z\d-]+)\.([A-Z]{2,8})(\.[A-Z]{2,8})?/gim;

let resultNivel2 = [];
let text ="";
str.match(myRegex).forEach(function (email) {
  if (!resultNivel2.includes(email)) {
    resultNivel2.push(email);
    text += email + "<br>";
  }
});

document.getElementById("resultadoNivel2").innerHTML= text;

}
