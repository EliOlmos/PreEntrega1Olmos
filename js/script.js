let savedDNI = "28656220";

function login() {
  let ingresar = false;

  for (let i = 1; i >= 0; i--) {
    let userDNI = prompt("Para comenzar ingresá tu DNI:");
    if (userDNI == savedDNI) {
      alert("Bienvenido/a ahora podrás gestionar tu reserva");
      ingresar = true;
      break;
    } else {
      alert(
        "Tu DNI no se encuntra en nuestro sistema, debés registrarte para comenzar"
      );
    }
  }

  return ingresar;
}

if (login()) {
  let opcion = prompt(
    "Elige una opción para comenzar: \n1- Reservar tu cancha. \n2 - Modificar tu reserva. \n3 - Cancelar tu reserva. \nPresioná S para finalizar."
  );

  while (opcion != "S" && opcion != "s") {
    switch (opcion) {
      case "1":
        alert('A continuación le solicitaremos los datos para gestionar su reserva');
        let dia = parseInt(prompt("Ingrese el día de su reserva dd"));
        let mes = parseInt(prompt("Ingrese el mes de su reserva mm"));
        let anio = parseInt(prompt("Ingrese el año de su reserva aaaa"));
        let hora = parseInt(prompt("Ingrese la hora de su reserva hh"));
        alert(
            "Su reserva se ha realizado para el día " +
              reservar(dia, mes, anio, hora)
          );

        break;
      case "2":
        let nvaReserva = prompt(
          'Indica los datos a modificar de tu reserva \n1 - Día \n2 - Mes \n3 - Año \n4 - Hora'
        );
        switch (nvaReserva) {
          case "1":
            let nvoDia=parseInt(prompt("Ingrese el nuevo día de su reserva (dd)"));
            alert ("Se ha cambiado exitosamente el día de su reserva para el "+ nvoDia);
            break;
          case "2":
            nvoMes = parseInt(prompt("Ingrese el nuevo mes de su reserva (mm)"));
            alert ("Se ha cambiado exitosamente el mes de su reserva para el "+ nvoMes);
            break;
          case "3":
            nvoAnio = parseInt(prompt("Ingrese el nuevo año de su reserva (aaaa)"));
            alert ("Se ha cambiado exitosamente el año de su reserva para el "+ nvoAnio);
            break;
          case "4":
            nvaHora = parseInt(prompt("Ingrese la nueva hora de su reserva (hh)"));
            alert ("Se ha cambiado exitosamente la hora de su reserva para las "+ nvaHora + "hs.");
            break;
            break;
          default:
            alert("Elegiste una opción inválida");
            break;
        }

      case "3":
        alert("Vamos a proceder a la cancelación de su cancha asignada para el usuario con DNI: " + savedDNI);
        let cancela = prompt("¿Estás seguro que desea cancelar su reserva\n 1- Si \n 2- No");
        if (cancela == "1"){
          alert ("Se ha cancelado su reserva exitosamente");
        }
        else if(cancela==2){
          alert("Se mantendrá su reserva actual")
        }

        else{
        alert("Usted ha ingresado una opción incorrecta, le solicitamos reintente con el menú principal");
        }
        break;
      case "4":

      default:
        alert("Elegiste una opción inválida");
        break;
    }

    opcion = prompt(
      "Elige una opción para comenzar: \n1- Reservar tu cancha. \n2 - Modificar tu reserva. \n3 - Cancelar tu reserva. \nPresioná S para finalizar."
    );
  }
  alert("Esperamos volver a verte pronto");
}

function reservar(dia, mes, anio, hora){
  let reserva = "su reserva se registró para el día " + dia + "/" + mes + "/" + anio + " a las " + hora + " hs";
  return reserva;
}