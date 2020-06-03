// eslint-disable-next-line no-unused-vars
function TauxRemise(achatNet, achatBrut) {
    let remise = (1 - achatNet / achatBrut) * 100;
    return remise;
}

// eslint-disable-next-line no-unused-vars
function PrixAchatNet(achatBrut, remise) {
    let achatNet = achatBrut * (1 - remise)
    return achatNet;
}

// eslint-disable-next-line no-unused-vars
function PrixVenteNet(achatNet, coefMulti) {
    let venteNet = achatNet * coefMulti
    return venteNet;
}

// eslint-disable-next-line no-unused-vars
function CoefficientMultiplicateur(venteNet, achatNet) {
    let coefMulti = venteNet / achatNet
    return coefMulti;
}