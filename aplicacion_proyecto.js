function comprarFrutas() {

let total = 0;
let seguir = "si";

while (seguir == "si") {

    let producto = prompt(
        "Escriba el número de la fruta:" + "1. Maracuya" + "2. Naranjas" +"3. Limones" + "4. Mangos" + "5. Piñas"
    );

    let precio = 0;

    switch (producto) {
        case "1":
            precio = 4000;
            break;

        case "2":
            precio = 2500;
            break;

        case "3":
            precio = 3000;
            break;

        case "4":
            precio = 5000;
            break;

        case "5":
            precio = 3500;
            break;

        default:
            alert("Producto no valido");
            continue;
    }

    let cantidad = Number(
        prompt("¿Cuantos kilos desea comprar?")
    );

    let subtotal = precio * cantidad;

    total = total + subtotal;

    alert("El precio de la compra es: $" + subtotal);

    seguir = prompt("¿Desea comprar otra fruta? si o no");
}

for (let i = 1; i <= 1; i++) {
    alert("El total a pagar es: $" + total);
}

}

comprarFrutas();