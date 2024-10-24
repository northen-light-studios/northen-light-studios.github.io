document.addEventListener('DOMContentLoaded', () => {
    createSnow();
    renderGames();
    renderTeam();
    renderSocialLinks(); // For website's social links
    setupSmoothScroll();
});

function createSnow() {
    const snowContainer = document.querySelector('.snow');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = Math.random();
        snowflake.style.width = `${Math.random() * 3 + 1}px`;
        snowflake.style.height = snowflake.style.width;
        snowContainer.appendChild(snowflake);
    }
}

function renderGames() {
    const gamesGrid = document.getElementById('games-grid');
    content.games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <div class="game-tags">
                    <span class="tag">${game.status}</span>
                    ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${renderGameLinks(game.links)}
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

function renderGameLinks(links) {
    return Object.entries(links)
        .map(([platform, url]) => {
            const template = content.socialTemplates[platform];
            return `<a href="${url}" target="_blank" class="social-link">
                ${template.icon} ${template.label}
            </a>`;
        })
        .join('');
}

function renderTeam() {
    const teamGrid = document.getElementById('team-grid');
    content.team.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-card';
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p class="role">${member.role}</p>
            <div class="role-tags">
                ${member.roles.map(role => `<span class="tag">${role}</span>`).join('')}
            </div>
            <p>${member.bio}</p>
            <div class="member-links">
                ${renderMemberLinks(member.links)}
            </div>
        `;
        teamGrid.appendChild(memberCard);
    });
}

function renderMemberLinks(links) {
    return Object.entries(links)
        .map(([platform, url]) => {
            const template = content.socialTemplates[platform];
            return `
                <a href="${url}" target="_blank" class="member-social-link">
                    ${template.icon} ${template.label}
                </a>`;
        })
        .join('');
}

function renderSocialLinks() {
    const socialLinks = document.getElementById('social-links');
    const websiteLinks = {
        github: "https://github.com/yourusername",
        twitter: "https://twitter.com/yourusername",
        youtube: "https://youtube.com/@yourchannel",
        email: "mailto:your.email@example.com"
    };

    Object.entries(websiteLinks).forEach(([platform, url]) => {
        const template = content.socialTemplates[platform];
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.className = 'social-link';
        link.innerHTML = `${template.icon} ${template.label}`;
        socialLinks.appendChild(link);
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
