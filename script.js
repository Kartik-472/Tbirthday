document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('birthday-message');
    const changeMessageButton = document.getElementById('change-message');
    
    const messages = [
        "Happy Birthday! 🎉 May your day be as exciting as a reaction between acids and bases! ⚗️",
        "Wishing you a year as dynamic as the discovery of new elements in the periodic table! 🧪✨",
        "May your birthday be filled with as much joy as the discovery of the periodic table! 🌟🔬",
        "Here's to a year as dynamic as the kinetics of chemical reactions! ⏳💥",
        "Hope your special day has the perfect equilibrium, just like a well-balanced chemical reaction! ⚖️🎂",
        "May your year be as rewarding as understanding the intricate bonds of organic chemistry! 🔍💡",
        "Wishing you happiness that’s as abundant as Avogadro's number! 🎈📚",
        "May your birthday be filled with as much excitement as a redox reaction! 🔄🎊",
        "Here's to a year where everything compounds into success and joy! 🧬🎉",
        "Happy Birthday! 🎂 May your year be as precise as a well-conducted molarity calculation! 📏🔬"
    ];
    
    let currentIndex = 0;

    changeMessageButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % messages.length;
        messageElement.textContent = messages[currentIndex];
    });
});
