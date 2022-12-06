const prompt = require("prompt-sync")()

let name = prompt("input name:")




if(name.length > 0){
    function runintro(name){
        console.log(`Welcome ${name}`)
    }
    runintro(name)
}

console.log("........List of products.......")
console.log("1.........Laptop($1500)")
console.log("2.........iPhone($1150)")
console.log("3.........T-Shirt($45)")
console.log("4.........Television($350)")
console.log("5.........Speaker($89)")
console.log("6.........Keyboard($23)")
console.log("7.........Mouse($12)")



const cart = []
const totalPrice = []



function SelectProduct(){

    const product = prompt("select your number:")
    

    
        if(product == 1){
            console.log("You picked Laptop")
            let quantity = prompt("how many laptop you want? :")
            let total = quantity * 1500
            totalPrice.push(parseInt( total))
            cart.push("Laptop")

            
            

            console.log("press Y for Yes and N for No")
            let pick = prompt("")
            if(pick.toString() == "Y"){
                const again = prompt("Want to buy again? YES or NO: ")
                if(again.toString()== "YES"){
                    SelectProduct()
                }else{
                    console.log(`Your products` )
                    let totalCart;
                    let allTotalPrice;
                    for(let i=0; i < totalPrice.length;i++){
                        allTotalPrice =+ totalPrice[i] 
                        
                    }
                   
                    for(let i=0; i < cart.length;i++){
                        totalCart += cart[i]
                        
                    }
                    let resTotalCart = totalCart.slice(9,15) 
                    console.log(`Products: ${resTotalCart}`)
                    console.log(`Total Price:$ ${parseInt(allTotalPrice)}`)
                }

            }
            

        }
        if(product == 2){
            console.log("You picked iPhone")
            let quantity = prompt("how many iPhone you want? :")
            let total = quantity * 1550
            totalPrice.push(parseInt( total))
            cart.push("iPhone")


            console.log("press Y for Yes and N for No")
            let pick = prompt("")
            if(pick.toString() == "Y"){
                const again = prompt("Want to buy again? YES or NO: ")
                if(again.toString()== "YES"){
                    SelectProduct()
                }else{
                    console.log(`Your products` )
                    let totalCart;
                    let allTotalPrice;
                    for(let i=0; i < totalPrice.length;i++){
                        allTotalPrice += totalPrice[i] 
                        
                    }
                   
                    for(let i=0; i < cart.length;i++){
                        totalCart += cart[i]
                        
                    }
                    let resTotalCart = totalCart.slice(9,15) 
                    console.log(`Products: ${resTotalCart}`)
                    console.log(`Total Price:$ ${parseInt(allTotalPrice)}`)
                }

            }
            

        }
        if(product == 3){
            console.log("You picked T-Shirt")
            let quantity = prompt("how many T-Shirt you want? :")
            let total = quantity * 45
            totalPrice.push(parseInt( total))
            cart.push("T-Shirt")

            
            

            console.log("press Y for Yes and N for No")
            let pick = prompt("")
            if(pick.toString() == "Y"){
                const again = prompt("Want to buy again? YES or NO: ")
                if(again.toString()== "YES"){
                    SelectProduct()
                }else{
                    console.log(`Your products` )
                    let totalCart;
                    let allTotalPrice;
                    for(let i=0; i < totalPrice.length;i++){
                        allTotalPrice =+ totalPrice[i] 
                    }
                   
                    for(let i=0; i < cart.length;i++){
                        totalCart += cart[i]
                    }
                    let resTotalCart = totalCart.slice(9,15) 
                    console.log(`Products: ${resTotalCart}`)
                    console.log(`Total Price:$ ${parseInt(allTotalPrice)}`)
                }

            }
            

        }
        if(product == 4){
            console.log("You picked Television")
            let quantity = prompt("how many Television you want? :")
            let total = quantity * 350
            totalPrice.push(parseInt( total))
            cart.push("Television")

            
            

            console.log("press Y for Yes and N for No")
            let pick = prompt("")
            if(pick.toString() == "Y"){
                const again = prompt("Want to buy again? YES or NO: ")
                if(again.toString()== "YES"){
                    SelectProduct()
                }else{
                    console.log(`Your products` )
                    let totalCart;
                    let allTotalPrice;
                    for(let i=0; i < totalPrice.length;i++){
                        allTotalPrice =+ totalPrice[i] 
                    }
                   
                    for(let i=0; i < cart.length;i++){
                        totalCart += cart[i]
                    }
                    let resTotalCart = totalCart.slice(9,15) 
                    console.log(`Products: ${resTotalCart}`)
                    console.log(`Total Price:$ ${parseInt(allTotalPrice)}`)
                }

            }
            

        }
        if(product == 5){
            console.log("You picked Speaker")
            let quantity = prompt("how many Speaker you want? :")
            let total = quantity * 89
            totalPrice.push(parseInt( total))
            cart.push("Speaker")

            
            

            console.log("press Y for Yes and N for No")
            let pick = prompt("")
            if(pick.toString() == "Y"){
                const again = prompt("Want to buy again? YES or NO: ")
                if(again.toString()== "YES"){
                    SelectProduct()
                }else{
                    console.log(`Your products` )
                    let totalCart;
                    let allTotalPrice;
                    for(let i=0; i < totalPrice.length;i++){
                        allTotalPrice =+ totalPrice[i] 
                    }
                   
                    for(let i=0; i < cart.length;i++){
                        totalCart += cart[i]
                    }
                    let resTotalCart = totalCart.slice(9,15) 
                    console.log(`Products: ${resTotalCart}`)
                    console.log(`Total Price:$ ${parseInt(allTotalPrice)}`)
                }

            }
            

        }
        if(product == 6){
            console.log("You picked Keyboard")
            let quantity = prompt("how many Keyboard you want? :")
            let total = quantity * 23
            totalPrice.push(parseInt( total))
            cart.push("Keyboard")

            
            

            console.log("press Y for Yes and N for No")
            let pick = prompt("")
            if(pick.toString() == "Y"){
                const again = prompt("Want to buy again? YES or NO: ")
                if(again.toString()== "YES"){
                    SelectProduct()
                }else{
                    console.log(`Your products` )
                    let totalCart;
                    let allTotalPrice;
                    for(let i=0; i < totalPrice.length;i++){
                        allTotalPrice =+ totalPrice[i] 
                    }
                   
                    for(let i=0; i < cart.length;i++){
                        totalCart += cart[i]
                    }
                    let resTotalCart = totalCart.slice(9,15) 
                    console.log(`Products: ${resTotalCart}`)
                    console.log(`Total Price:$ ${parseInt(allTotalPrice)}`)
                }

            }
            

        }
        if(product == 7){
            console.log("You picked Mouse")
            let quantity = prompt("how many Mouse you want? :")
            let total = quantity * 12
            totalPrice.push(parseInt( total))
            cart.push("Mouse")

            
            

            console.log("press Y for Yes and N for No")
            let pick = prompt("")
            if(pick.toString() == "Y"){
                const again = prompt("Want to buy again? YES or NO: ")
                if(again.toString()== "YES"){
                    SelectProduct()
                }else{
                    console.log(`Your products` )
                    let totalCart;
                    let allTotalPrice;
                    for(let i=0; i < totalPrice.length;i++){
                        allTotalPrice =+ totalPrice[i] 
                    }
                   
                    for(let i=0; i < cart.length;i++){
                        totalCart += cart[i]
                    }
                    let resTotalCart = totalCart.slice(9,15) 
                    console.log(`Products: ${resTotalCart}`)
                    console.log(`Total Price:$ ${parseInt(allTotalPrice)}`)
                }

            }
            

        }
        
}

SelectProduct()
