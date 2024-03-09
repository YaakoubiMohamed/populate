# Projet Express.js avec Mongoose

L'objectif de cet exemple est de démontrer comment utiliser `populate` avec `Express` et `Mongoose`.


## Installation

1. Cloner ce dépôt :

    ```
    git clone https://github.com/YaakoubiMohamed/populate
    ```

2. Installer les dépendances :

    ```
    cd <project_folder>
    npm install
    ```

3. Lancer l'application :

    ```
    npm start
    ```

## Utilisation

- L'application fournit des opérations CRUD pour les participant et les evennements.
- Les points de terminaison sont définis dans les fichiers de route respectifs.

## Points de Terminaison


### Participant

- `GET /participants` : Récupérer tous les participants
- `POST /participants` : Créer un nouveau participant
- `GET /participants/:id` : Récupérer un participant par son identifiant
- `PUT /participants/:id` : Mettre à jour un participant existant
- `DELETE /participants/:id` : Supprimer un participant

### Evennements

- `GET /events` : Récupérer tous les événements
- `GET /events/search` : cherche  un événement par son nom
- `POST /events` : Créer un nouvel événement
- `GET /events/:id` : Récupérer un événement par son identifiant
- `PUT /events/:id` : Mettre à jour un événement existant
- `DELETE /events/:id` : Supprimer un événement

## Auteur

[Yaakoubi Mohamed](https://github.com/YaakoubiMohamed)