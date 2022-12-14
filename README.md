

## Introduction :


 Bienvenue sur mon dépôt Groupomania !
 
 Le projet Groupomania a été réalisé dans le cadre de la formation OpenClassRoom "parcours développeur web".
 
 Pour ce septième et dernier projet du parcours, nous avions à réaliser un réseau social interne pour les employés de la société Groupomania (côté server et côté client).
 
 Vous trouverez la mission du projet dans ce document pdf :
 https://course.oc-static.com/projects/DWJ_FR_P7/DW+P7+28-09-2022+Sce%CC%81nario.pdf
 
 Quant au cahier des charge, vous le trouverez dans cet autre pdf :
 https://course.oc-static.com/projects/DWJ_FR_P7/Cahier+des+charges+Groupomania.pdf
 
 
 ## Technologies utilisées :
 NodeJs, React, Express, MongoDB, Sass.
 
 
 ## Dépendences installées :
 ### Backend :
 Bcrypt, cookie-parser, cors, dotenv, express, jsonwebtoken, mongoose, multer, nodemon et validator.
 ### Frontend :
 Axios, dotenv, js-cookie, node-sass, react, react-dom, react-redux, react-router-dom, react-scripts, redux, redux-devtools-extension, redux-thunk et web-vitals.
 
 
 ## Installation :

  Pour ne pas avoir de problème avec les images, veuillez installer: 
   Node.js 15.4.0

 Clonez le projet puis ouvrez un premier terminal pour le **backend** :

Dans le repertoire Groupomania, entrez la ligne : 
 >cd backend
 
 Dans le repertoire backend, entrez la ligne : 
 >npm install
 
 pour installer toutes les dépendences du back,
 puis 
 >npm start
 
 pour executer le serveur (qui sera sur le port 5000)

*Gardez ce terminal ouvert.*

 ## explication fichier .env du backend

   Dans le dossier backend, il doit y avoir un fichier .env qui comporte:
    
    PORT=5000
    CLIENT_URL=http://localhost:3000
    DB_USER= utilisateur du mongodb server
    DB_PASSWORD= mot de passe du mongodb server
    TOKEN_SECRET= ajoutez votre token
 
 A présent ourez un second terminal pour le **frontend** :
 Dans le repertoire Groupomania, entrez la ligne : 
 >cd frontend
 
 pour vous placer dans le repertoire du frontend, puis
 >npm install
 
 pour installer toutes les dépendences du front,
 et enfin
  >npm start

 pour executer l'application (qui sera sur le port 3000)
 
 *Gardez ce terminal ouvert.*
 
 ## explication fichier .env du frontend
    Dans le dossier frontend, il doit y avoir un fichier .env qui comporte:
    REACT_APP_API_URL= URL du de l'API
    REACT_APP_ADMIN_RIGHT= l'ID de l'administrateur
 
 ## Tout est bon ! 
 Vous pouvez dès à présent vous rendre à l'adresse "http://localhost:3000" 
 pour vous créer un compte Groupomania, créer des posts et les modifier !
 
 Amusez-vous bien !
