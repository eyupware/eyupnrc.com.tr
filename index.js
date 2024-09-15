const terminal = document.querySelector('.terminal');
const output = terminal.querySelector('.output');
const inputLine = terminal.querySelector('.input-line');
const commandLine = terminal.querySelector('#command-line');


function outputCommand() {
    const input = commandLine.value;
    const outputString = `\n> ${input}\n`;
    output.innerHTML += outputString;
    commandLine.value = '';
    handleCommand(input);
}
function handleCommand(command) {
    if (command === 'help') {
        const helpText = `Available commands:\n
        help - displays this help message\n
        whoami - displays information about the user\n
        about - displays information about me\n
        projects - displays a list of my projects\n
        contact - displays my contact information\n
        \n`
        output.innerHTML += helpText;
    } else if (command === 'whoami') {
        output.innerHTML += "root"
    } else if (command === 'about') {
        output.innerHTML += "I am EyupNRC, 16 yo developer from Turkey. I code in Java, C#, HTML, CSS. I also like Windows, play games and i know some things about audio. I am currently learning ethical hacking and thats it!"
    } else if (command === 'projects') {
        output.innerHTML += "into see more projects check out my github: https://github.com/eyupware"
    } else if (command === 'contact') {
        output.innerHTML += "for contact you can use:\n\nDiscord: ichbineyup\nİnstagram: eyupnrc  \n\n"
    } else {
        const errorText = `Command '${command}' not found. Type 'help' for a list of available commands.`;
        output.innerHTML += errorText;
    }
}
commandLine.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        outputCommand();
    }
});
commandLine.focus();
