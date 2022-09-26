const find = require('./comandos/find');

const action = process.argv[2];

if(!action) {
    console.log("Acción inválida");
    return;

}


switch(action) {

    case "find" : {
        const title = process.argv[3];

        if(!title) {
            console.log("Olvidaste introducir el título");
            break;
        }
        const exist = find(title);
        console.log("Título: ", title);
        console.log("Existe:", exists);

        break;

    }
    default: {
        console.log("Acciín no definida");
        break;
    }
}