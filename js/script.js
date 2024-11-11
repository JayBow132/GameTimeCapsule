document.addEventListener("DOMContentLoaded", function() {
    const timelineData = [
        { year: 1958, event: "The first video game, 'Tennis for Two', is created by William Higinbotham." },
        { year: 1972, event: "Atari releases 'Pong', one of the first commercially successful arcade games." },
        { year: 1977, event: "The Atari 2600, one of the first home video game consoles, is released." },
        { year: 1980, event: "'Space Invaders' becomes a global sensation, introducing the idea of high score competition." },
        { year: 1983, event: "The video game crash of 1983 leads to a temporary decline in the gaming industry." },
        { year: 1985, event: "The Nintendo Entertainment System (NES) is released, reviving the gaming industry." },
        { year: 1986, event: "The release of 'The Legend of Zelda' introduces open-world gameplay." },
        { year: 1991, event: "Sega releases 'Sonic the Hedgehog', setting up the console wars between Sega and Nintendo." },
        { year: 1993, event: "'Doom' is released, pioneering the first-person shooter genre." },
        { year: 1996, event: "Nintendo releases 'Super Mario 64', defining the 3D platforming genre." },
        { year: 2001, event: "The launch of the original Xbox introduces the world to the 'Halo' franchise." },
        { year: 2004, event: "'World of Warcraft' is released, revolutionizing the MMORPG genre and gaining millions of players worldwide." },
        { year: 2007, event: "Apple releases the iPhone, paving the way for mobile gaming with touch interfaces." },
        { year: 2013, event: "'The Last of Us' redefines storytelling in video games with its deep narrative and character-driven plot." },
        { year: 2020, event: "The rise of battle royale games like 'Fortnite' and 'Apex Legends' dominates the gaming industry." }
    ];

    const timelineContainer = document.getElementById("timeline-container");

    // Create a timeline item for each event
    timelineData.forEach(item => {
        const timelineItem = document.createElement("div");
        timelineItem.classList.add("timeline-item");

        const year = document.createElement("div");
        year.classList.add("timeline-year");
        year.textContent = item.year;

        const event = document.createElement("div");
        event.classList.add("timeline-event");
        event.textContent = item.event;

        timelineItem.appendChild(year);
        timelineItem.appendChild(event);
        timelineContainer.appendChild(timelineItem);
    });
});
