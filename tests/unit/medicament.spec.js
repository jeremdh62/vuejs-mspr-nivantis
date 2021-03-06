import { Medicament } from '@/services/medicament.js'
import { medicamentList } from '@/services/medicament.js'

describe('Medicament.js', () => {

    it('should exist', () => {

        expect(Medicament).toBeDefined();
    })

    it('should return list', () => {
        expect(medicamentList()).toBeInstanceOf(Array)
    })

    it('should return array of medicaments', () =>{
        const result = [{nom:'doliprane',prixBrut:3,remise:4,coefMulti:5}]
        const repo = jest.fn()
        repo.mockReturnValueOnce(result);
        expect(medicamentList(repo)).toEqual(result)
    })
})