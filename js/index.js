
// Update Cost Function
function updateCost(costId, price) {
    const updateCost = document.getElementById(costId);
    updateCost.innerText = price;
}

//Best Price Function
function currentPriceCost() {
    const bestPrice = document.getElementById('best-price');
    const currentBestPrice = parseFloat(bestPrice.innerText);
    return currentBestPrice;
}

//Function for Memory Cost
function memoryCost() {
    const memoryCostPrice = document.getElementById('extra-memory-cost');
    memoryCostText = memoryCostPrice.innerText;
    const memoryCost = parseInt(memoryCostText);

    return memoryCost;
}

//Function for Storage Cost
function storageCost() {
    const storageCostPrice = document.getElementById('extra-storage-cost');
    storageCostText = storageCostPrice.innerText;
    const storageCost = parseInt(storageCostText);

    return storageCost;
}

//Function for Storage Cost
function deliveryCost() {
    const deliveryCostPrice = document.getElementById('delivary-charge');
    deliveryCostText = deliveryCostPrice.innerText;
    const deliveryCost = parseInt(deliveryCostText);

    return deliveryCost;
}

//Total Calculation
function totalAmount() {
    const bestPriceAmount = currentPriceCost();
    const memoryCostAmount = memoryCost();
    const storageCostAmount = storageCost();
    const deiveryCostAmount = deliveryCost();

    const totalPrice = bestPriceAmount + memoryCostAmount + storageCostAmount + deiveryCostAmount;

    document.getElementById('total-price').innerText = totalPrice;

    document.getElementById('final-total').innerText = totalPrice;

    return totalPrice;

}

// Memory section start
document.getElementById('eight-gb-memory').addEventListener('click', function () {
    updateCost('extra-memory-cost', 0);

    totalAmount();

});

document.getElementById('sixteen-gb-memory').addEventListener('click', function () {
    updateCost('extra-memory-cost', 180);

    totalAmount();

});

//Storage selection part

document.getElementById('third-storage-btn').addEventListener('click', function () {
    updateCost('extra-storage-cost', 180);
    // update memory total

    totalAmount();
});

document.getElementById('second-storage-btn').addEventListener('click', function () {
    updateCost('extra-storage-cost', 100);

    // update memory total

    totalAmount();
});

document.getElementById('first-storage-btn').addEventListener('click', function () {
    updateCost('extra-storage-cost', 0);


    // update memory total

    totalAmount();

});

//Fnction selection part

//Free Delivery Option
document.getElementById('first-delivaray-btn').addEventListener('click', function () {
    updateCost('delivary-charge', 0);


    // update Delivery Charge total

    totalAmount();
});

//Paid Delivery Option
document.getElementById('second-delivaray-btn').addEventListener('click', function () {
    updateCost('delivary-charge', 20);


    // update Delivery Charge total

    totalAmount();

});


// promo code matching
document.getElementById('promo-code-button').addEventListener('click', function () {
    const promoCodeText = document.getElementById('promo-code');
    const promoCodeInput = promoCodeText.value;
    if (promoCodeInput == "stevekaku") {
        const totalPrice = totalAmount();
        const reducedValue = (totalPrice * 20) / 100;
        const finalTotalPrice = document.getElementById('final-total');
        finalTotalPrice.innerText = totalPrice - reducedValue;

    }
    else {
        console.log('Promo Code Error!!');
    }
});

