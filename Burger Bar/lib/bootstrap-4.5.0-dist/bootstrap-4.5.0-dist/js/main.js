function calcAmount () {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    
    if ( amountNumber > 10 ) {
        alert("Maximum 10 db terméket vásárolhat!");
    } 
    
    else if ( amountNumber < 1 ) {
        alert("Minimum 1 db terméket kell vásárolnia!");
    } 

        let amount = parseInt(amountInput.value) * price;
        showAmount.innerHTML = amount;
        
}


