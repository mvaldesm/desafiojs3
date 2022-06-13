/* 

    Desafío 3: Incorporar Arrays
    Alumno: Marco Valdés

*/

// Array de objetos con los datos de cada país - 12 por ahora:
const paises = [
    {
        id: 1,
        pais: "Argentina",
        bandera: "🇦🇷",
        permiso: "no requerirás",
        estadiasimple: 90,
        costosimple: 0,
        estadiamultiple: 90,
        costomultiple: 0,
        costoresidencia: 250
    },
    {
        id: 2,
        pais: "Bolivia",
        bandera:"🇧🇴",
        permiso: "no requerirás",
        estadiasimple: 90,
        costosimple: 0,
        estadiamultiple: 90,
        costomultiple: 0,
        costoresidencia: 149
    },
    {
        id: 3,
        pais: "Brasil",
        bandera: "🇧🇷",
        permiso: "no requerirás",
        estadiasimple: 90,
        costosimple: 0,
        estadiamultiple: 90,
        costomultiple: 0,
        costoresidencia: 100
    },
    {
        id: 4,
        pais: "Colombia",
        bandera: "🇨🇴",
        permiso: "no requerirás",
        estadiasimple: 90,
        costosimple: 0,
        estadiamultiple: 90,
        costomultiple: 0,
        costoresidencia: 282
    },
    {
        id: 5,
        pais: "Ecuador",
        bandera: "🇪🇨",
        permiso: "no requerirás",
        estadiasimple: 90,
        costosimple: 0,
        estadiamultiple: 90,
        costomultiple: 0,
        costoresidencia: 450
    },
    {
        id: 6,
        pais: "Guyana",
        bandera: "🇬🇾",
        permiso: "no requerirás",
        estadiasimple: 90,
        costosimple: 0,
        estadiamultiple: 90,
        costomultiple: 0,
        costoresidencia: 140
    },
    {
        id: 7,
        pais: "Paraguay",
        bandera: "🇵🇾",
        permiso: "no requerirás",
        estadiasimple: 90,
        costosimple: 0,
        estadiamultiple: 90,
        costomultiple: 0,
        costoresidencia: 288
    },
    {
        id: 8,
        pais: "Perú",
        bandera: "🇵🇪",
        permiso: "no requerirás",
        estadiasimple: 90,
        costosimple: 0,
        estadiamultiple: 90,
        costomultiple: 0,
        costoresidencia: 80
    },
    {
        id: 9,
        pais: "Surinam",
        bandera: "🇸🇷",
        permiso: "requerirás", /* Exento del requisito VISTUR para ingresar a Chile de nacionales de Surinam con residencia permanente en países de la Alianza del Pacífico (Colombia-México-Perú) a contar del 30 junio 2016 */
        estadiasimple: 90,
        costosimple: 40,
        estadiamultiple: 90,
        costomultiple: 60,
        costoresidencia: 210
    },
    {
        id: 10,
        pais: "Trinidad y Tobago",
        bandera: "🇹🇹",
        permiso: "no requerirás",
        estadiasimple: 90,
        costosimple: 0,
        estadiamultiple: 90,
        costomultiple: 0,
        costoresidencia: 160
    },
    {
        id: 11,
        pais: "Uruguay",
        bandera: "🇺🇾",
        permiso: "no requerirás",
        estadiasimple: 90,
        costosimple: 0,
        estadiamultiple: 90,
        costomultiple: 0,
        costoresidencia: 65
    },
    {
        id: 12,
        pais: "Venezuela",
        bandera: "🇻🇪",
        permiso: "requerirás", /* Exento del requisito VISTUR para ingresar a Chile si se es titular de Residencia Definitiva en Argentina */
        estadiasimple: 90,
        costosimple: 50,
        estadiamultiple: "N/A",
        costomultiple: "N/A",
        costoresidencia: 60
    }
    
]

function costo(valor) {
    return valor * 861; // CLP$861 = USD$1
}

function entrada() {
    // Solicita ingresar número asociado a la nacionalidad del usuario:
    let pais = prompt("Ingresa el número asociado a tu nacionalidad:\n[1] ARGENTINA\n[2] BOLIVIA\n[3] BRASIL\n[4] COLOMBIA\n[5] ECUADOR\n[6] GUYANA\n[7] PARAGUAY\n[8] PERÚ\n[9] SURINAM\n[10] TRINIDAD Y TOBAGO\n[11]URUGUAY\n[12] VENEZUELA");
    // Verifica que el prompto no este vacío, sea un número, y que el número no sea menor a 1 o mayor a 12:
    while (pais === "" || isNaN(pais) || pais == 0 || pais > 12) {
        alert("¡Debes ingresar un número! (del 1 al 12)");
        pais = prompt("Ingresa el número asociado a tu nacionalidad:\n[1] ARGENTINA\n[2] BOLIVIA\n[3] BRASIL\n[4] COLOMBIA\n[5] ECUADOR\n[6] GUYANA\n[7] PARAGUAY\n[8] PERÚ\n[9] SURINAM\n[10] TRINIDAD Y TOBAGO\n[11]URUGUAY\n[12] VENEZUELA");
    }
    // El número asociado a cada nacionalidad corresponde a la propiedad id en cada objeto.
    // Se define una constante que busque el objeto según el Id
    const buscarId = paises.find((elpais) => elpais.id == pais);
    // Si el país es Surinam - id 9 - (casos de excepción) muestra un texto específico
    if(pais == 9)
    {
        alert("Si deseas viajar a Chile con pasaporte de " + buscarId.pais + " " + buscarId.bandera + " " + buscarId.permiso.toUpperCase() + " de autorización previa o visa para ingresar al país, salvo que seas titular de residencia permanente vigente en Colombia, México o Perú, en cuyo caso estarás exento del requisito de autorización previa o visa (Alianza del Pacífico).\n\nEl costo de un permiso de residencia en Chile es de CLP$" + costo(buscarId.costoresidencia) + ".");
    }
    // Si el país es Venezuela - id 12 - (casos de excepción) muestra un texto específico
    else if(pais == 12){
        alert("Si deseas viajar a Chile con pasaporte de " + buscarId.pais + " " + buscarId.bandera + " " + buscarId.permiso.toUpperCase() + " de autorización previa o visa para ingresar al país, salvo que seas titular de residencia permanente vigente en Argentina, en cuyo caso estarás exento del requisito de autorización previa o visa.\n\nEl costo de un permiso de residencia en Chile es de CLP$" + costo(buscarId.costoresidencia) + ".");
    }
    // Si se trata de cualquier otro país, muestra el siguiente texto:
    else {
        alert("Si deseas viajar a Chile con pasaporte de " + buscarId.pais + " " + buscarId.bandera + " " + buscarId.permiso.toUpperCase() + " de autorización previa o visa para ingresar al país.\n\nEl costo de un permiso de residencia en Chile es de CLP$" + costo(buscarId.costoresidencia) + ".");
    }
}
// Ejecuta la función:
entrada();
