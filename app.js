// Fonction pour récupérer les informations de l'utilisateur depuis le stockage local
const obtenirInfoUtilisateurDepuisLocalStorage = () => {
    const userInfo = localStorage.getItem("userInfo");

    return userInfo ? JSON.parse(userInfo) : {
        nomComplet: "Haddari Aya",
        email: "haddari_aya@gmail.com",
        telephone: "0601020304"
    };
};

// Fonction pour mettre à jour les informations de l'utilisateur dans le stockage local
const mettreAJourInfoUtilisateurDansLocalStorage = (userInfo) => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

// Obtenir les informations de l'utilisateur depuis le stockage local
const userInfo = obtenirInfoUtilisateurDepuisLocalStorage();

// Sélectionner les éléments d'entrée
const nomInput = document.getElementById("nom-complet");
const emailInput = document.getElementById("email");
const telephoneInput = document.getElementById("telephone");

// Remplir les champs d'entrée avec les informations de l'utilisateur
nomInput.value = userInfo.nomComplet;
emailInput.value = userInfo.email;
telephoneInput.value = userInfo.telephone;

// Écouteur d'événements pour la soumission du formulaire
document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Mettre à jour l'objet des informations de l'utilisateur avec les valeurs d'entrée
    userInfo.nomComplet = nomInput.value;
    userInfo.email = emailInput.value;
    userInfo.telephone = telephoneInput.value;

    // Mettre à jour les informations de l'utilisateur dans le stockage local
    mettreAJourInfoUtilisateurDansLocalStorage(userInfo);
});
