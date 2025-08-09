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


    /* hamburguer effect script */

    // Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    const superstitions = [
        "If someone sweeps your feet with a broom, you will never get married.",
        "Breaking a mirror will give you seven years of bad luck.",
        "If you step in dog poop, it's good luck.",
        "Never open an umbrella indoors. You will never get married.",
        "If you find a four-leaf clover, it will bring you good luck.",
        "If a black cat crosses your path, it is bad luck.",
        "Walking under a ladder is bad luck.",
        "knocking 3 times on wood will ward off bad luck.",
        "If you eat mango with milk, you will die.",
        "If you leave your shoes upside down, your mother dies.",
        "If you touch a frog it will cause warts on your hands.",
        "If you let the guests open the door to leave your house, they will never return.",
        "If your ears are burning, someone is talking about you.",
        "August is the month of 'disgust', nothing good comes from it.",
    ];

    function getRandomSuperstition() {
        return superstitions[Math.floor(Math.random() * superstitions.length)];
    }

    const superstitionButton = document.getElementById('superstitionButton');
    const superstitionDisplay = document.getElementById('superstitionDisplay');

    if (superstitionButton && superstitionDisplay) {
        superstitionButton.addEventListener('click', function () {
            superstitionDisplay.textContent = getRandomSuperstition();
        });
    }


    const tales = [
        {
            taleName: "Saci-pererê, the trickster",
            level: 1,
            text1: "Saci-pererê, or simply Saci, is a mischievous Black boy who smokes a pipe and wears a red cap that grants him magical powers.Saci - pererê is a very playful character who enjoys playing tricks on both animals and people.",
            text2: "According to the stories, his main pranks include: Braiding the tails of animals at night, Whistling loudly to scare travelers, Distracting cooks so they burn the food",
            text3: "To capture Saci, one must throw a net over him while he is spinning in circles. Once captured, he can be forced to grant three wishes.",
            text4: "It's believed that Saci is born from a bamboo shoot, stays there until the age of seven, and then spends seventy-seven years causing mischief among humans and animals.Finally, upon death, Saci becomes a poisonous mushroom.",
            image: "images/saci.webp"
        },
        {
            taleName: "Boitatá, the forest protector",
            level: 2,
            text1: "Boitatá is as a giant serpent of fire.",
            text2: "He defends the animals and forest from people who do them harm, especially those who set the forest ablaze.",
            text3: "This serpent can transform into a flaming log to deceive and burn the invaders and destroyers of the woods. It is believed that anyone who looks directly at Boitatá becomes blind and insane.",
            text4: "To protect oneself from Boitatá, it is said that one should avoid setting fires in the forest and always respect nature.",
            image: "images/boi-tata.webp"
        },
        {
            taleName: "Curupira, the guardian of the forest",
            level: 1,
            text1: "The Curupira is known as the guardian of the forest. He is a small boy with bright red hair and backward-facing feet, which he uses to confuse those who try to follow him.",
            text2: "Curupira is said to protect the animals and plants of the forest, punishing anyone who harms them.",
            text3: "According to the legends, he can create illusions and make himself invisible, making it difficult for hunters and loggers to find their way in the forest. He is also known for his mischievous nature, often playing tricks on those who disrespect the environment.",
            text4: "To avoid the wrath of the Curupira, it is said that one should always respect the forest and its creatures, leaving no trace behind when visiting natural areas.",
            image: "images/boi-tata.webp"
        },
        {
            taleName: "Cuca, the witch in the cave",
            level: 1,
            text1: "Cuca is a fearsome witch with the ability to transform into a giant alligator. She is known for her long, flowing hair and her terrifying laugh, which echoes through the forests at night.",
            text2: "Cuca kidnaps children who misbehave, taking them to her lair deep in the jungle.",
            text3: "o protect oneself from Cuca, it is said that one should always behave well and avoid wandering alone in the forest at night.",
            text4: "Legend has it that the witch Cuca sleeps only once every seven years. During this time, she is vulnerable, and some brave souls attempt to confront her.",
            image: "images/boi-tata.webp"
        },
        {
            taleName: "Pink Dolphin, the Ladie's Man",
            level: 2,
            text1: "The Boto Cor-de-Rosa, or Pink Dolphin, is a legendary creature that inhabits the Amazon River. Boto is a dolphin who transforms into a handsome young man to seduce women and lure them into the water.",
            text2: "It is said that the Boto can take on human form during the night. He goes to the party dressed in white and wearing a hat to hide the little hole on top of his head that the boto uses to breathe.",
            text3: "However, the Boto is also known for his mischievous nature, and he can be quite dangerous if angered. It is believed that the Boto can cause floods and other natural disasters if he feels disrespected.",
            text4: "To avoid the wrath of the Boto, it is said that one should always respect the river and its creatures, avoiding swimming alone at night.",
            image: "images/boi-tata.webp"
        },
        {
            taleName: "Mula sem cabeça, the wanderer",
            level: 2,
            text1: "It is believed that the woman who transforms into the Headless Mule is cursed",
            text2: "The mule, instead of a head, has a torch of fire. She wears steel or silver horseshoes and neighs so loudly that it can be heard from many meters away. t’s also common to hear the creature sobbing like a human.",
            text3: "It is said that the mule runs through forests and fields, frightening people and animals and destroying everything in her path.",
            text4: "To break the curse, it is necessary to find a way to make the mule cry real tears. Some say that the only way to break the curse is to find a priest who can perform an exorcism. Others say that the curse can be broken by finding a special flower that only blooms once every hundred years. Regardless of the method, it is said that once the curse is broken, the woman can return to her human form.",
            image: "images/boi-tata.webp"
        }
    ];

    CreateTaleCard(tales);
    function CreateTaleCard(filteredTales) {
        document.querySelector(".tales-container").innerHTML = "";
        filteredTales.forEach(element => {
            let card = document.createElement("section")
            let title = document.createElement("h2")
            let description1 = document.createElement("p")
            let description2 = document.createElement("p")
            let description3 = document.createElement("p")
            let description4 = document.createElement("p")
            let img = document.createElement("img")

            title.textContent = element.taleName;
            description1.innerHTML = element.text1;
            description2.innerHTML = element.text2;
            description3.innerHTML = element.text3;
            description4.innerHTML = element.text4;
            img.setAttribute("src", element.image);
            img.setAttribute("alt", `${element.taleName} img`);
            img.setAttribute("width", 350);
            img.setAttribute("loading", "lazy");

            card.append(title);
            card.append(img);
            card.append(description1);
            card.append(description2);
            card.append(description3);
            card.append(description4);

            document.querySelector(".tales-container").appendChild(card);
        })
    }

    const all = document.querySelector("#all");
    const family = document.querySelector("#family");
    const scary = document.querySelector("#scary");

    all.addEventListener("click", () => {
        CreateTaleCard(tales)
    })

    scary.addEventListener("click", () => {
        CreateTaleCard(tales.filter(element => element.level >= 2));
    });

    family.addEventListener("click", () => {
        CreateTaleCard(tales.filter(element => element.level <= 1));
    });


    const emailForm = document.getElementById('.subscribe-form');
    const emailInput = document.getElementById('email');

    emailForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        const email = emailInput.value.trim();
        if (email) {
            localStorage.setItem('userEmail', email);
        }
    });


});
