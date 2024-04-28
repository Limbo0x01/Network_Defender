const grid = document.getElementById('networkGrid');
const creditsDisplay = document.getElementById('credits');
let credits = 100;

function setupGrid() {
    for (let i = 0; i < 100; i++) {
        const node = document.createElement('div');
        node.className = 'networkNode';
        node.onclick = () => placeDefense(i);
        grid.appendChild(node);
    }
}

function buyFirewall() {
    if (credits >= 50) {
        credits -= 50;
        updateCredits();
        // Additional logic to enable placing a firewall
        alert('Firewall purchased! Click on a node to place it.');
    } else {
        alert('Not enough credits!');
    }
}

function buyAntivirus() {
    if (credits >= 75) {
        credits -= 75;
        updateCredits();
        // Additional logic to enable placing an antivirus
        alert('Antivirus purchased! Click on a node to place it.');
    } else {
        alert('Not enough credits!');
    }
}

function placeDefense(index) {
    // Logic to place defenses on the network grid
    console.log(`Defense placed at position ${index}`);
}

function updateCredits() {
    creditsDisplay.textContent = credits;
}

window.onload = setupGrid;
