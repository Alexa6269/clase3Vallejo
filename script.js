let producto=prompt("Ingresa el número correspondiente al producto que quieras añadir a tu lista de compras: \n1-Vegetales $8 \n2-Carne $25 \n3-Pescado $25 \n4-Leche $5 \nCuando hayas finalizado escribe LISTO")
let lista=""
let precioV=8
let precioP=25
let precioC=25 
let precioL=5
let precioTotal=""

while (producto!="LISTO"&&producto!="listo"&&producto!="Listo") {

        switch (producto) {
        case "1":
            function sumar(precioTotal, precioV) {
                precioTotal=sumar(precioTotal,precioV)
                return(precioTotal+precioV)
            }
            lista+="-Vegetales"+"\n"
            alert("Haz añadido Vegetales a tu lista")
            console.log(precioTotal)
                        
            break
        case "2":

            function sumar(precioTotal, precioC) {
                precioTotal=sumar(precioTotal,precioC)
                return(precioTotal+precioC)
            }
            alert("Haz añadido Carne a tu lista") 
            lista+="-Carne"+"\n"
            console.log(precioTotal)
            break 

        case "3":
            function sumar(precioTotal, precioP) {
                precioTotal=sumar(precioTotal,precioP)
                return(precioTotal+precioP)
            }
            alert("Haz añadido Pescado a tu lista") 
            lista+="-Pescado"+"\n"
            console.log(precioTotal)
             break
        case "4":
            function sumar(precioTotal, precioL) {
                precioTotal=sumar(precioTotal,precioL)
                return(precioTotal+precioL)
            }
            console.log(precioTotal)
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
    sumar(precioTotal)
    alert("El total es " + precioTotal)
