import { Calculatrice } from '@/services/calculatrice.js'

describe('Calculatrice.js', () => {
    it('Calculer le Taux de remise', () => {
        const leCalcul = new Calculatrice();
        const achatNet = 2
        const achatBrut = 1
        expect(leCalcul.TauxRemise(achatNet, achatBrut)).toBeDefined();
    })
})