function consultarprecio(){
            let elementoFruta = document.getElementById("textoFruta");
            let fruta = elementoFruta.value;

            switch (fruta)
            {
                case "Manzana":
                    alert("El precio de la manzana es de $15")
                    break
                    
                case "Naranja":
                    alert("El precio de la manzana es de $20")
                    break
                    
                case "Banana":
                    alert("El precio de la manzana es de $25")
                    break
            }

        }
   