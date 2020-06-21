export class Calculatrice {

    constructor() {}

    TauxRemise(achatNet, achatBrut) {
        let remise = (1 - achatNet / achatBrut) * 100;
        return remise;
    }

    PrixAchatNet(achatBrut, remise) {
        let achatNet = achatBrut * (1 - remise)
        return achatNet;
    }

    PrixVenteNet(achatNet, coefMulti) {
        let venteNet = achatNet * coefMulti
        return venteNet;
    }

    CoefficientMultiplicateur(venteNet, achatNet) {
        let coefMulti = venteNet / achatNet
        return coefMulti;
    }

}