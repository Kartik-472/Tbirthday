document.addEventListener('DOMContentLoaded', () => {
  const messageElement = document.getElementById('wish');
  const changeMessageButton = document.getElementById('change-message');

  const messages = [
    "Catalyst chizein banane mein help karta hai waise hi 🎉 Chemistry class ke catalyst aap ho! ⚗️ jo chemistry ko aasaan banate ho",
    "Aap se padhke hi knowledge ka equilibrium stable hua hai jahan pe rate of learning directly proportional to rate of enjoyment hua hai⚖️✨",
    "Aapki energy hamesha exothermic hi rahe! 🔥 taki students ki stability badhne mein dikkat na ho",
    "Aapka teaching style bhi resonanating structures jaisa hai – sabko samajh aata hai 📖",
    "🎊 Aap hamare liye Avogadro number se bhi zyada valuable ho! 🧮",
    "Aapke guidance ke bina Chemistry incomplete hai, jaise equation toh likh di par balance nahi kiye. ⚖️",
    "Aap jaise teacher rare elements ki tarah priceless hote hain. 🧪",
    "Knowledge ka periodic table tabhi complete hota hai jab usme aap jaise teachers ho. 📚",
    "Bas jaise strong covalent bonds tut te nahi waise hi aapke padhane ka asar jaata nahi",  // ← comma here
    "Ma’am, aapka birthday ek new discovery ki tarah special hai. Wishing you happiness & success always! ✨"
  ];

  let currentIndex = 0;

  changeMessageButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % messages.length;

    // Fade out
    messageElement.style.opacity = 0;

    setTimeout(() => {
      // Change text after fade out
      messageElement.textContent = messages[currentIndex];
      console.log("Message changed to:", messages[currentIndex]);

      // Fade in
      messageElement.style.opacity = 1;
    }, 400); // delay matches transition duration
  });
});