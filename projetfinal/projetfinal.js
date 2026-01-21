console.log("loaded")
const divContenu = document.getElementById("contenu")
let mesLivres;

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
    
    divContenu.appendChild(livreElement);
}