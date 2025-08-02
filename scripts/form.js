document.addEventListener('DOMContentLoaded', function () {
    /* footer script */
    const Year = new Date().getFullYear();
    const YearSpan = document.getElementById('currentyear');

    const lastModifiedDate = document.lastModified;
    const lastModifiedParagraph = document.getElementById('lastModified');

    if (YearSpan) {
        YearSpan.textContent = Year;
    }

    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
    }

});

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const select = document.getElementById('selectProduct');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});