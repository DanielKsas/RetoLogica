function tresPreciosMasAltos(precios){
let top1 = -1
let top2 = -1
let top3 = -1
    for(let i = 0; i < precios.length; i ++){

        let precio = precios[i]

        if(precio > top1){
            top3 = top2
            top2 = top1
            top1 = precio
 } else if (precio > top2){
    top3 = top2
    top2 = precio
 }else if(precio > top3) {
    top3 = precio
 }
}

let resultado = []

if(precios.length >= 1)
    resultado.push(top1)
if(precios.length >=2)
    resultado.push(top2)
if(precios.length >= 3)
    resultado.push(top3)

return resultado
}
    

console.log(tresPreciosMasAltos([3,8, 17, 28, 84, 65, 85]))

// 2.

function calcularFactura(n, precios, cupon, envio){

    let subtotal = 0

    for(let i = 0; i < n; i++){
        subtotal += precios[i]
    }

    let descuento = 0; 

    if (cupon === "DESC10") {
        descuento = Math.round(subtotal * 0.10) //El math.round es un metodo que nos ayuda a redondear el numero mas cercano
    }

    else if (cupon === "DESC20" && subtotal >= 20000) {
        descuento = Math.round(subtotal * 0.20)
    }
    else if (cupon === "FREESHIP"){
        envio = 0
    }

    let base = subtotal - descuento

    let iva = Math.round(base * 0.19)

    let total = base + iva + envio

    console.log("Subtotatl " + subtotal)
    console.log("Descuento " + descuento)
    console.log("IVA " + iva)
    console.log("Total " + total)
}

calcularFactura(3, [100000, 5000, 60000], "FREESHIP", 15000)