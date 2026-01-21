// console.log("loaded")
const divContenu = document.getElementById("contenu")
// console.log(divContenu.textContent == "");
let mesLivres;

document.getElementById("Button1").addEventListener("click" , function() {
if (divContenu.textContent != "") {
        divContenu.textContent = ""
    }
// Fetch pour le livre
fetch("http://localhost:8080/livres/")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error serveur");
        }
        return response.json();
    })
    .then(json => {
        mesLivres = json;
        console.log(json)
        for (let livre of json) {
            afficherLivres(livre);
        }
    })
    .catch(error => {
        console.error(error);
    })

    // Function pour les livres pour tout afficher
function afficherLivres(livre) {
    let livreElement = document.createElement("div")
    let titreP = document.createElement("p")
    titreP.textContent = livre.titre;
    let auteurP = document.createElement("p")
    auteurP.textContent = livre.auteur;
    let isbnP = document.createElement("p")
    isbnP.textContent = livre.isbn;
    // livreElement.textContent = livre.titre + " ISBN: " + livre.isbn;
    // isbnP.classList.add("titre")
    let anneePublicationP = document.createElement("p")
    anneePublicationP.textContent = livre.anneePublication;
    let categorieP = document.createElement("p")
    categorieP.textContent = livre.categorie;
    let exemplairesTotalP = document.createElement("p")
    exemplairesTotalP.textContent = livre.exemplairesTotal;
    let exemplairesDisponiblesP = document.createElement("p")
    exemplairesDisponiblesP.textContent = livre.exemplairesDisponibles;
    // let empruntsP = document.createElement("p")
    // empruntsP.textContent = "Date de l'emprunt : " + livre.emprunts[0].dateEmprunt + " " + "Date de retour prévue : " + livre.emprunts[0].dateRetourEffective ;
    livreElement.appendChild(titreP);
    livreElement.appendChild(auteurP);
    livreElement.appendChild(isbnP);
    livreElement.appendChild(anneePublicationP);
    livreElement.appendChild(categorieP);
    livreElement.appendChild(exemplairesTotalP);
    livreElement.appendChild(exemplairesDisponiblesP);
    // livreElement.appendChild(empruntsP);
    
    // Afichage dans le body html
    divContenu.appendChild(livreElement);
    }
})

let membres;

document.getElementById("Button2").addEventListener("click" , function() {
    if (divContenu.textContent != "") {
        divContenu.textContent = ""
    }
// Fetch pour membre
fetch("http://localhost:8080/membres/")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error serveur");
        }
        return response.json();
    })
    .then(json => {
        membres = json;
        console.log(json)
        for (let membre of json) {
            afficherMembres(membre);
        }
    })
    .catch(error => {
        console.error(error);
    })

    // Function pour afficher les membres et ses attributs
function afficherMembres(membre) {
    let membreElement = document.createElement("div")
    let nomP = document.createElement("p")
    nomP.textContent = membre.nom;
    let prenomP = document.createElement("p")
    prenomP.textContent = membre.prenom;
    let emailP = document.createElement("p")
    emailP.textContent = membre.email;
    let telephoneP = document.createElement("p")
    telephoneP.textContent = membre.telephone;
    let dateInscriptionP = document.createElement("p")
    dateInscriptionP.textContent = membre.dateInscription;
    let actifP = document.createElement("p")
    actifP.textContent = membre.actif;
    membreElement.appendChild(nomP);
    membreElement.appendChild(prenomP);
    membreElement.appendChild(emailP);
    membreElement.appendChild(telephoneP);
    membreElement.appendChild(dateInscriptionP);
    membreElement.appendChild(actifP);
    

    divContenu.appendChild(membreElement);
    }
})

let emprunts;

document.getElementById("Button3").addEventListener("click" , function() {
    if (divContenu.textContent != "") {
        divContenu.textContent = ""
    } 
    const newButton = document.createElement("button");
newButton.textContent = "Emprunts en retard";
document.body.appendChild(newButton);
// Fetch pour emprunt
fetch("http://localhost:8080/emprunts/en-cours")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error serveur");
        }
        return response.json();
    })
    .then(json => {
        emprunts = json;
        console.log(json)
        for (let emprunt of json) {
            afficherEmprunt(emprunt);
        }
    })
    .catch(error => {
        console.error(error);
    })

     // Function pour afficher les emprunts avec l'emprunteur
function afficherEmprunt(emprunt) {
    let empruntElement = document.createElement("div")
    let dateEmpruntP = document.createElement("p")
    dateEmpruntP.textContent = "Date de l'emprunt" + " " + emprunt.dateEmprunt + " " + "Par : " + " " + emprunt.membre.nom;
    // let empruntP = document.createElement("p")
    // empruntP.textContent = "Date de l'emprunt" + " " + emprunt.membre.nom;
    empruntElement.appendChild(dateEmpruntP);
    // empruntElement.appendChild(empruntP);
    divContenu.appendChild(empruntElement);
    }
})


// if element == null
// afficher element

// if element == element
// ne rien faire

// sinon si element != null
// remove puis afficher element
