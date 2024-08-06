const list = document.querySelectorAll(".nav-item");
list.forEach((item) => {
  item.addEventListener("click", () => {
    list.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

const apiUrl = 'https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayData(data) {
    const itemList = document.getElementById('item-list');

    // Clear the existing content
    itemList.innerHTML = '';

    data.forEach(items => {
        // Create a container div for each item
        const itemli = document.createElement('li');
        itemli.className = `item ${items.id}`;
        const itemdiv = document.createElement('div')
        // Create an image element
        const img = document.createElement('div');
        img.className = "img";

        // Create a paragraph element for the item name
        const itemName = document.createElement('p');
        itemName.textContent = items.item;

        const itemPrice = document.createElement('p');
        itemName.textContent = `$ ${items.price}`;

        // Append the image and item name to the item div
        itemdiv.appendChild(itemName);
        itemdiv.appendChild(itemPrice);
        itemli.appendChild(img)
        itemli.appendChild(itemdiv);
        itemList.appendChild(itemli);
    });
}

window.onload = fetchData;