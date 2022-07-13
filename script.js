let producto=prompt("Ingresa el número correspondiente al producto que quieras añadir a tu lista de compras: \n1-Vegetales \n2-Carne \n3-Pescado \n4-Leche \n5-Café \nCuando hayas finalizado escribe LISTO")
let lista=""

while (producto!="LISTO"&&producto!="listo"&&producto!="Listo") {

        switch (producto) {
        case "1":
            alert("Haz añadido Vegetales a tu lista")
            lista+="-Vegetales"+"\n"
            
            break
        case "2":
            alert("Haz añadido Carne a tu lista") 
            lista+="-Carne"+"\n"
             
            break 

        case "3":
             alert("Haz añadido Pescado a tu lista")
             lista+="-Pescado"+"\n"
                
             break
        case "4":
            alert("Haz añadido Leche a tu lista")
            lista+="-Leche"+"\n"
           
            break
         case "5":
            alert("Haz añadido Café a tu lista")
            lista+="-Café"+"\n"
            
            break   
                
        default:
            alert("Por favor elige el número correspondiente a tu producto")
            break
        }
    
        producto=prompt("Ingresa el número correspondiente al producto que quieras añadir a tu lista de compras: \n1-Vegetales \n2-Carne \n3-Pescado \n4-Leche \n5-Café \nCuando hayas finalizado escribe LISTO") 
    
}


    alert("Tu lista de compras es:\n"+lista)
