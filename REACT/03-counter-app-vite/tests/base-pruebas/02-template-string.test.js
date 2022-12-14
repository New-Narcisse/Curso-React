import { getSaludo } from "../../src/base-pruebas/02-template-string"


describe('Pruebas en 02-template-string', () => { 

    test('Debe retornar "Hola Sony"', () => { 

        const nombre = 'Sony';
        
        const message = getSaludo( nombre );

        expect(message).toBe(`Hola ${ nombre }`)
     })
 })