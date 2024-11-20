// Client data


const clients = [
        {
        id: 1,
        name: "Aqua",
        price: "15€",
        tags: ["Blatant", "Paid"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Holy Moly its Aqua A Realy nice Blatant/legit client and it get rigt now a recode",
        cover: "https://i.imgur.com/hBsjZHy.jpeg",
        screenshots: ["https://i.imgur.com/SpAxx1M.png"],
        downloadLink: "https://minecraft-clients.de/products/aqua-client-1",
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    {
        id: 2,
        name: "Vigor internal cheat",
        price: "Free",
        tags: ["Free", "Internal"],
        game: "Other Games",
        update: "08.10.24",
        description: "Last update : 2.10.2024ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ Funtions :ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ Aimbot, Magic Bullet, Infinit Ammoy, Infinity Stamina  ㅤㅤㅤㅤㅤㅤㅤESP : Player Box, Skeleton, Healthbar, show player distance,ㅤㅤ player name, player Tracers",
        cover: "https://i.imgur.com/7xa1LJU.png",
        screenshots: ["https://i.imgur.com/8qwdwnx.jpeg", "https://i.imgur.com/4PSVF5i.jpeg"],
        downloadLink: "https://lootdest.org/s?8b4dadc5",
        otherButtons:[["https://sourceforge.net/projects/processhacker/", "Process Hacker 2"]],
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    {
        id: 3,
        name: "LiquidBounce",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        update: "08.10.24",
        description: "LiquidBounce is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, LiquidBounce is completely free, open source and compatible with Fabric.", // Stolen from official LiquidBounce website xd
        cover: "https://liquidbounce.net/img/logos/favicon.png",
        screenshots: ["https://liquidbounce.net/img/screenshots/clickgui-large.png", "https://liquidbounce.net/img/screenshots/hud-large.png", "https://liquidbounce.net/img/screenshots/xray-large.png", "https://liquidbounce.net/img/screenshots/main-menu-large.png"],
        downloadLink: "https://lootdest.org/s?9b96f488",
        otherButtons:[["https://loot-link.com/s?55a3ed27", "SimpleBounce Theme"], ["https://www.youtube.com/watch?v=e2XqIRHpVOY", "Download Tutorial For Lunar"], ["https://liquidbounce.net/proxy", "LiquidProxy"]],
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    {
        id: 4,
        name: "FDP",
        price: "Free",
        tags: ["Free", "Forge"],
        game: "Minecraft",
        update: "08.10.24",
        description: "FDP is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, FDP is completely free, open source and compatible with Forge. FDP is a fork of liquidbounce so you get the benefits of liquidbounce while still getting updates and support.",
        cover: "https://user-images.githubusercontent.com/105464811/177683437-8b768dcf-0e15-4ac4-85f0-2b673c2e8540.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/08/FDP-Client-Screenshots-2.jpg", "https://www.9minecraft.net/wp-content/uploads/2022/08/FDP-Client-Screenshots-9.jpg"],
        downloadLink: "https://loot-link.com/s?bd40bca5",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    {
        id: 5,
        name: "Aristois",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Easy to use, powerful, and frequently updated. Millions of downloads and counting. Aristois offers over 100 in-game modules to extend and enhance your Minecraft gameplay. With a focus on PvE, we offer a modern and personlised experience — get it today! In addition to many unique modules and features, Aristois contains a worldwide in-game chat. Plan your next adventure and coordinate with players on other servers, right from the chat. The Aristois UI is designed with customisation in mind, so it can look exactly how you want it. We've also created two additional UIs to enhance speed and smoothness of enabling mods.",
        cover: "https://aristois.net/logo.webp",
        screenshots: ["https://aristois.net/features.webp"],
        downloadLink: "https://lootdest.org/s?395bc7ea",
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    {
        id: 6,
        name: "Meteor",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Based Minecraft utility mod.",
        cover: "https://meteorclient.com/icon.png",
        screenshots: ["https://www.9minecraft.net/wp-content/uploads/2022/06/Meteor-Client-Mod-Screenshots-10.jpg"],
        downloadLink: "https://lootdest.org/s?1acd68d3",
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    {
        id: 7,
        name: "Sigma Jello",
        price: "Free",
        tags: ["Free", "outdated"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Discover the Sigma and Jello merge , Sigma 5.0 including Jello for Sigma  for FREE , 1.16 to 1.8",
        cover: "https://avatars.githubusercontent.com/u/83773282?s=280&v=4",
        screenshots: ["https://i.ytimg.com/vi/0GwkNzz6wFc/maxresdefault.jpg", "https://cheater.fun/uploads/posts/2020-09/1600299856_prev.jpg"],
        downloadLink: "https://lootdest.org/s?6e7c93d9",
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    {
        id: 11,
        name: "Raven B+",
        price: "Free",
        tags: ["Free"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Raven B3 but better. No updates but still works on Hypixel with decent settings",
        cover: "https://avatars.githubusercontent.com/u/88325435?s=280&v=4",
        screenshots: ["https://i.ytimg.com/vi/J-MQASXPh9k/hqdefault.jpg"],
        downloadLink: "https://lootdest.org/s?6288ac6a",
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    {
        id: 12,
        name: "BlockOverlay",
        price: "Free",
        tags: ["Free", "Forge"],
        game: "Minecraft",
        update: "08.10.24",
        description: "Minecraft blockoverlay forge mod 1.8.9. Command: /blockoverlay",
        cover: "https://i.imgur.com/kCOTuHg.png",
        screenshots: ["https://i.imgur.com/6RGRgvc.png"],
        downloadLink: "https://lootdest.org/s?327e0b6a",
        otherButtons:[["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Get Forge"]],
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    // GTA and shit
    {
        id: 13,
        name: 'Kiddions',
        price: 'Free',
        tags: ['Free'],
        game: "GTA V",
        update: "08.10.24",
        description: "GTA Cheat",
        cover: 'https://i.pinimg.com/originals/5b/ec/47/5bec474d275dbdf8fdb071f30fc978f4.png',
        screenshots: ["https://www.kiddionsmodmenu.com/img/12.jpg"],
        downloadLink: 'https://lootdest.org/s?abf9416d',
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
    {
        id: 14,
        name: 'AmongUsMenu',
        price: 'Free',
        tags: ['Free'],
        game: "Other Games",
        update: "08.10.24",
        description: "AmongUS Cheat",
        cover: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
        screenshots: ["https://data.exloader.net/webp_images/AmongUsMenu/replay.webp"],
        downloadLink: 'https://lootdest.org/s?3a4fc08e',
        colors: {
            text: "#000000", // Text
            accent: "#000000", // Accent
            header: "#000000" // Header
        }
    },
];
// Boolean flag to hide clients with "outdated" tag
let hideOutdated = false;

// Populate clients and filter options
document.addEventListener("DOMContentLoaded", () => {
    populateClients();
    populateTagFilter();
    populateGameFilter();
});

// Function to populate clients
function populateClients(filteredTag = "all") {
    const selectedTag = document.getElementById('tagFilter').value;
    const selectedGame = document.getElementById('gameFilter').value;
    const clientList = document.getElementById('clientList');
    clientList.innerHTML = '';

    clients.forEach(client => {
        // Skip clients with "hidden" tag
        if (client.tags.includes("hidden")) {
            return;
        }

        // Skip clients with "outdated" tag if hideOutdated is true
        if (hideOutdated && client.tags.includes("outdated")) {
            return;
        }

        if ((selectedTag === "all" || client.tags.includes(selectedTag)) &&
            (selectedGame === "all" || client.game === selectedGame)) {
            const clientDiv = document.createElement('div');
            clientDiv.className = 'client';

            // Apply rainbow border if client is recommended
            if (client.tags.includes("recommended")) {
                clientDiv.classList.add('recommended');
            }

            clientDiv.innerHTML = `
                <img src="${client.cover}" alt="if you see this DysLex Fuck somting up${client.name}">
                <h2>${client.name}</h2>
                <p>${client.game}</p>
                <p>${client.update}</p>
                <p>${client.price}</p>
                <a href="client.html?id=${client.id}">Download</a>
            `;
            clientList.appendChild(clientDiv);
        }
    });
}


// Function to populate tag filter options
function populateTagFilter() {
    const tagFilter = document.getElementById('tagFilter');
    let allTags = new Set();
    clients.forEach(client => {
        client.tags.forEach(tag => {
            if (tag !== 'hidden') {
                allTags.add(tag);
            }
        });
    });

    allTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        tagFilter.appendChild(option);
    });
}

// Function to populate game filter options
function populateGameFilter() {
    const gameFilter = document.getElementById('gameFilter');
    let allGames = new Set();
    clients.forEach(client => {
        allGames.add(client.game);
    });

    allGames.forEach(game => {
        const option = document.createElement('option');
        option.value = game;
        option.textContent = game;
        gameFilter.appendChild(option);
    });
}

// Function to toggle outdated clients visibility
function toggleOutdatedClients() {
    hideOutdated = !hideOutdated;
    document.getElementById('toggleOutdated').textContent = hideOutdated ? "Show Outdated" : "Hide Outdated";
    filterClients();
}

// Function to filter clients based on selected tag and game
function filterClients() {
    populateClients();
}
