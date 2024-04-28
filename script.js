const grid = document.getElementById('networkGrid');
const creditsDisplay = document.getElementById('credits');
let credits = 100;
let defenseToPlace = null;

// Initializes the grid for gameplay
function setupGrid() {
    for (let i = 0; i < 100; i++) {
        const node = document.createElement('div');
        node.className = 'networkNode';
        node.dataset.index = i;
        node.onclick = () => placeDefense(i);
        grid.appendChild(node);
    }
}

// Buys a firewall if enough credits are available
function buyFirewall() {
    if (credits >= 50) {
        credits -= 50;
        defenseToPlace = 'firewall';
        updateCredits();
        alert('Firewall purchased! Click on a node to place it.');
    } else {
        alert('Not enough credits!');
    }
}

// Buys an antivirus if enough credits are available
function buyAntivirus() {
    if (credits >= 75) {
        credits -= 75;
        defenseToPlace = 'antivirus';
        updateCredits();
        alert('Antivirus purchased! Click on a node to place it.');
    } else {
        alert('Not enough credits!');
    }
}

// Places a defense on the network grid
function placeDefense(index) {
    const node = document.querySelector(`[data-index="${index}"]`);
    if (defenseToPlace && !node.classList.contains('occupied')) {
        node.classList.add(defenseToPlace, 'occupied');
        node.textContent = defenseToPlace.charAt(0).toUpperCase(); // 'F' for Firewall, 'A' for Antivirus
        defenseToPlace = null; // Reset after placing
    }
}

// Updates the credits display
function updateCredits() {
    creditsDisplay.textContent = credits;
}

window.onload = setupGrid;
