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

/* hamburguer effect script */

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Porto Alegre Brazil",
        location: "Porto Alegre, Brazil",
        dedicated: "2000, December, 17",
        area: 13325,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-6697.jpg"
    },
    {
        templeName: "Campinas Brazil",
        location: "Campinas, Brazil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5206.jpg"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho, United States",
        dedicated: "2008, February, 10",
        area: 57504,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-1057-main.jpg"
    },

];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section")
        let name = document.createElement("h3")
        let location = document.createElement("p")
        let dedication = document.createElement("p")
        let area = document.createElement("p")
        let img = document.createElement("img")

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: </span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("height", 200)
        img.setAttribute("width", 300)
 
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    })
}

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
    createTempleCard(temples)
})

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const date = new Date(temple.dedicated);
        return date.getFullYear() < 1900;
    }));
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const date = new Date(temple.dedicated);
        return date.getFullYear() > 2000;
    }));
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area<10000));
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area >90000));
});