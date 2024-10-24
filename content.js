// content.js
const content = {
    games: [
        {
            title: "The Pandora Project",
            description: "'The Pandora Project' is a game where you play as a scientist aboard a rocket ship. Use the 'Eye' scanner to capture stunning images of planets and cosmic anomalies. Navigate a shifting space station to gather data, adapting to new layouts every two days. Experience sequences where you explore landscapes and solve puzzles.",
            image: "https://media.moddb.com/images/games/1/85/84922/Control-V.png",
            status: "In Development",
            tags: ["Puzzle", "Adventure"],
            links: {
                //steam: "https://store.steampowered.com/...",
                itch: "https://itzkorin.itch.io/the-pandora-project"
            }
        }
        // Add more games here...
    ],
    
    team: [
        {
            name: "Korin",
            role: "Founder",
            image: "assets/korin_pfp.png",
            roles: ["Game Dev", "Software Dev", "Music", "Pixel Art", "3D Modeling"],
            bio: "A passionate developer wearing multiple hats!",
            links: {
                github: "https://github.com/itskorin",
                email: "korin@itskorin.online",
                youtube: "https://youtube.com/@korin_dev",
                twitter: "https://twitter.com/korin_dev"
            }
        }
        // Template for adding new team members:
        /*
        {
            name: "Team Member Name",
            role: "Their Role",
            image: "their-image-url",
            roles: ["Role 1", "Role 2"],
            bio: "Short bio",
            links: {
                github: "github-url",
                email: "email@example.com"
                // Add any other relevant links
            }
        }
        */
    ],

    // Social/Contact link templates
    socialTemplates: {
        github: {
            icon: "🔗",
            label: "GitHub"
        },
        youtube: {
            icon: "▶️",
            label: "YouTube"
        },
        email: {
            icon: "📧",
            label: "Email"
        },
        twitter: {
            icon: "🐦",
            label: "Twitter"
        },
        steam: {
            icon: "🎮",
            label: "Steam"
        },
        itch: {
            icon: "🎲",
            label: "Itch.io"
        }
    }
};