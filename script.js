document.getElementById("changeColor").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "changeColor" }, (response) => {
            if (response?.status === "success") {
                console.log("Couleur du titre changée !");
            } else {
                console.error("Erreur : Aucun élément H1 trouvé.");
            }
        });
    });
});




