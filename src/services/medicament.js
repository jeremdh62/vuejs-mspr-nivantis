export class Medicament {

    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

export function medicamentList(repository = () => []) {
    return repository();
}