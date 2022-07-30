const fs = require('fs')
function writeHTML (roster) {
    console.log(roster)
fs.writeFileSync("teamRoster.html", `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Engineering Team </title>
    <!-- FontAwesome Icons -->
    <script src="https://kit.fontawesome.com/b923619c5f.js" crossorigin="anonymous"></script>
    <!-- Importing Bulma -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <!-- Linking my style sheet -->
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <!-- The following code generates a banner at the top of the page -->
    <div id="top-banner" class="columns">
        <div class="column">
            <h1 class="is-size-1">Engineering Team Roster </h1>
        </div>
    </div>


    <!-- The following code will generate the card holder in the middle of the page -->
    <div class='columns'>
        ${roster.map(
            function (element) {
                switch(element.getRole()) {
                case 'Engineer':
                return engineerCard(element);
                
                case 'Intern':
                return internCard(element)

                default:
                return managerCard(element)

                }
            
            }
        )}
        
    </div>


    <!-- The following code will generate the footer at the bottom of the page -->
    <footer>
        <p class="is-size-4">Made by Adam Wagh</p>
        <h5 class="is-size-5">Check me out on <a href="https://github.com/adamwagh512">Github!</a> </h5>
    </footer>

    
</body>
</html>`)
}

function engineerCard (engineer) {
    return `<div id="engineer-card" class="column">
    <div class="card">
        <div class="roleHeader">
            <i class="fa-solid fa-gears"> Engineer</i>
        </div>
        <div class="card-content">
            <div class="content">
                <p>Name: ${engineer.getName()}</p>
                <p>ID: ${engineer.getId()} </p>
                <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p>Github: <a href="https://www.github.com/${engineer.getGithubUsername()}"target="_blank"> ${engineer.getGithubUsername()}</a></p>
            </div>
        </div>
    </div>
</div>`

}

function internCard (intern) {
    return `<div id="intern-card" class="column">
    <div class="card">
        <div class="roleHeader">
        <i class="fa-solid fa-book-open"> Intern </i>
        </div>
        <div class="card-content">
            <div class="content">
                <p>Name: ${intern.getName()}</p>
                <p>ID: ${intern.getId()} </p>
                <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p>School:${intern.getSchool()}</p>
            </div>
        </div>
    </div>
</div>`
}

function managerCard (manager) {
    return `<div id="manager-card" class="column">
    <div class="card">
        <div class="roleHeader">
        <i class="fa-solid fa-user-tie"> Manager</i>
        </div>
        <div class="card-content">
            <div class="content">
                <p>Name: ${manager.getName()}</p>
                <p>ID: ${manager.getId()} </p>
                <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p>Office Number:${manager.getOfficeNumber()}</p>
            </div>
        </div>
    </div>
</div>`
}


module.exports = {writeHTML}