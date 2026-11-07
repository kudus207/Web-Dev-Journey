// Store the football team's information in an object
const footballTeam = {
  team: "Manchester United",
  year: 2026,
  headCoach: "Micheal Carrick",
  players: [
    { name: "Senne Lammens", position: "goalkeeper", isCaptain: false },
    { name: "Altay Bayindir", position: "goalkeeper", isCaptain: false },
    { name: "Noussair Mazraoui", position: "defender", isCaptain: false },
    { name: "Matthijs de Ligt", position: "defender", isCaptain: false },
    { name: "Harry Maguire", position: "defender", isCaptain: false },
    { name: "Lisandro Martínez", position: "defender", isCaptain: false },
    { name: "Leny Yoro", position: "defender", isCaptain: false },
    { name: "Luke Shaw", position: "defender", isCaptain: false },
    { name: "Patrick Dorgu", position: "defender", isCaptain: false },
    { name: "Mason Mount", position: "midfielder", isCaptain: false },
    { name: "Bruno Fernandes", position: "midfielder", isCaptain: true },
    { name: "Andrey Santos", position: "midfielder", isCaptain: false },
    { name: "Youri Tielemans", position: "midfielder", isCaptain: false },
    { name: "Carlos Baleba", position: "midfielder", isCaptain: false },
    { name: "Kobbie Mainoo", position: "midfielder", isCaptain: false },
    { name: "Manuel Ugarte", position: "midfielder", isCaptain: false },
    { name: "Marcus Rashford", position: "forward", isCaptain: false },
    { name: "Matheus Cunha", position: "forward", isCaptain: false },
    { name: "Joshua Zirkzee", position: "forward", isCaptain: false },
    { name: "Amad Diallo", position: "forward", isCaptain: false },
    { name: "Bryan Mbeumo", position: "forward", isCaptain: false },
    { name: "Benjamin Šeško", position: "forward", isCaptain: false },
  ],
};

// Select the HTML elements where team information and player cards will be displayed
const teamName = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersPosition = document.getElementById("players");

// Display the team's information on the page using values from the footballTeam object
teamName.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

// Create a reusable function that displays player cards
// The function accepts an array of players to determine which players should be displayed
function displayPlayers(playersArray) {
  // Create an empty string to store the HTML for all player cards
  let players = "";

  // Loop through the supplied array and generate a card for each player
  playersArray.forEach((player) => {
    // Check whether the current player is the team captain
    if (player.isCaptain) {
      // Add the captain's name with the Captain label to the HTML string
      players += `<div class="player-card">
  <h2>(Captain) ${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`;
    } else {
      // Add a regular player's name and position to the HTML string
      players += `<div class="player-card">
  <h2>${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`;
    }
  });

  // Insert all generated player cards into the player-cards container
  playerCards.innerHTML = players;
}

// Display all players when the page initially loads
displayPlayers(footballTeam.players);

// Listen for changes whenever the user selects an option from the dropdown
playersPosition.addEventListener("change", (e) => {
  // Check whether the user selected the All Players option
  if (e.target.value === "all") {
    // Display the original array containing every player
    displayPlayers(footballTeam.players);
  } else {
    // Create a new array containing only players whose positions match the selected option
    const filteredPlayers = footballTeam.players.filter((player) => {
      return player.position === e.target.value;
    });

    // Display only the players returned by the filter method
    displayPlayers(filteredPlayers);
  }
});
