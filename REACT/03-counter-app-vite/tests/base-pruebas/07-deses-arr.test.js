import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas en 07-deses-arr', () => { 
    test('should return a string and a number ', () => { 
        const [letters, numbers] = retornaArreglo();
        expect(typeof(letters)).toBe('string');
        expect(typeof(numbers)).toBe('number');
        expect(typeof(letters)).toEqual(expect.any(String));
     })
 })