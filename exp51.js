function calculateTotal() {
    const rainbowQty = parseInt(document.getElementById("rainbow").value) || 0;
    const chocolateQty = parseInt(document.getElementById("chocolate").value) || 0;
    const redvelvetQty = parseInt(document.getElementById("redvelvet").value) || 0;
    const blackforestQty = parseInt(document.getElementById("blackforest").value) || 0;

    const prices = {
        rainbow: 300,
        chocolate: 200,
        redvelvet: 250,
        blackforest: 350
    };

    const total = (rainbowQty * prices.rainbow) +
                  (chocolateQty * prices.chocolate) +
                  (redvelvetQty * prices.redvelvet) +
                  (blackforestQty * prices.blackforest);

    document.getElementById("totalPrice").innerHTML = 
        total > 0 ? `Total Price: Rs. ${total}` : "Please select at least 1 cake.";
}
