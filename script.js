let producto=prompt("Ingresa el número correspondiente al producto que quieras añadir a tu lista de compras: \n1-Vegetales $8 \n2-Carne $25 \n3-Pescado $25 \n4-Leche $5 \nCuando hayas finalizado escribe LISTO")
let lista=""
let precioV=""
let precioC=""
let precioP=""
let precioL=""

function sumarTotal(precioV, precioC, precioP, precioL) {
    return precioV+ precioC+ precioP+ precioL
    
}

while (producto!="LISTO"&&producto!="listo"&&producto!="Listo") {

        switch (producto) {
        case "1":
            precioV=8
            lista+="-Vegetales"+"\n"
            alert("Haz añadido Vegetales a tu lista")
                        
            break
        case "2":
            precioC=25
            alert("Haz añadido Carne a tu lista") 
            lista+="-Carne"+"\n"
            break 

        case "3":
            precioP=25
            alert("Haz añadido Pescado a tu lista") 
            lista+="-Pescado"+"\n"

             break
        case "4":
           precioL=5
            alert("Haz añadido Leche a tu lista") 
            lista+="-Leche"+"\n"
           
            break                
        default:
            alert("Por favor elige el número correspondiente a tu producto")
            break
        }
    
        producto=prompt("Ingresa el número correspondiente al producto que quieras añadir a tu lista de compras: \n1-Vegetales $8 \n2-Carne $25 \n3-Pescado $25 \n4-Leche $5 \nCuando hayas finalizado escribe LISTO") 
    
}

    


    alert("Tu lista de compras es:\n"+lista)
    sumarTotal(precioV, precioC, precioP, precioL)
    alert("El total es " + sumarTotal(precioV, precioC, precioP, precioL))
