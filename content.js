// Écoute les messages envoyés par d'autres scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "changeColor") {
      // Cherche un élément <h1> sur la page
      const h1 = document.querySelector("h1");
      if (h1) {
        // Change la couleur du titre
        h1.style.color = "green";
        sendResponse({ status: "success" }); // Réponse au popup.js
      } else {
        sendResponse({ status: "no_h1_found" });
      }
    }
  });
  