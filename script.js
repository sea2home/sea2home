function placeOrder() {
    let rohu = document.getElementById("rohu").value || 0;
    let catla = document.getElementById("catla").value || 0;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if (!name || !phone || !address) {
        alert("Please fill all details");
        return;
    }

    let message = 
`New Fish Order 🐟
Name: ${name}
Phone: ${phone}
Address: ${address}

Rohu: ${rohu} kg
Catla: ${catla} kg`;

    let whatsappNumber = "918374379311"; // Replace with your number
    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
