export class Medicament {
    id = 0;
    constructor(nom, prixBrut) {
        this.id++
            this.nom = nom;
        this.prixBrut = prixBrut;
    }
}

export function medicamentList(repository = () => []) {
    return repository();
}