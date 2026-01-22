// console.log("loaded")
const divContenu = document.getElementById("contenu")
const divContenuRetard = document.getElementById("contenuRetard");
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
// const dateRetour = new Date(emprunt.dateRetourPrevue);
// const date2 = new Date();
// const calculJoursRetard = date2 - dateRetour;
// const joursEnRetard = Math.floor(calculJoursRetard / (1000 * 60 * 60 * 24));

document.getElementById("Button3").addEventListener("click" , function() {
    divContenuRetard.textContent = ""
    if (divContenu.textContent != "") {
        divContenu.textContent = ""
    } 
    
    // Button pour afficher les emprunts en retard
function showhide(){
    let retard = document.getElementsByClassName("retard");
    let length = retard.length;
    
    if (divContenuRetard.textContent != ""){
    divContenuRetard.textContent = "";
    }
    else {
        for (let i = 0; i < length; i++) {
        divContenuRetard.appendChild(retard[i].cloneNode(true));
        }  
    }   
}


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
        console.log(emprunt.dateRetourPrevue)
        console.log(new Date())
        if (new Date (emprunt.dateRetourPrevue) < new Date() ) {
            empruntElement.classList.add("retard")
        } else {
            empruntElement.classList.add("enCours")
        } 

        const dateRetour = new Date(emprunt.dateRetourPrevue);
        const date2 = new Date();
        const calculJoursRetard = date2 - dateRetour;
        const joursEnRetard = Math.floor(calculJoursRetard / (1000 * 60 * 60 * 24));
        
        dateEmpruntP.textContent = "Date de l'emprunt" + " " + emprunt.dateEmprunt + " " + "Par : " + " " + emprunt.membre.nom + " " + joursEnRetard
        // let empruntP = document.createElement("p")
        // empruntP.textContent = "Date de l'emprunt" + " " + emprunt.membre.nom;
        empruntElement.appendChild(dateEmpruntP);
        // empruntElement.appendChild(empruntP);
        divContenu.appendChild(empruntElement);
        // divContenu.appenChild(empruntElement.classList(retard))
    }
//      affiche les retards
    const newButton = document.createElement("button");
    newButton.textContent = "Emprunts en retard";   
    newButton.setAttribute("id", "buttonRetard");
    divContenu.appendChild(newButton);
    document.getElementById("buttonRetard").addEventListener("click",showhide);
})


