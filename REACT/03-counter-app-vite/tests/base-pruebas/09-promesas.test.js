import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import { heroes } from "../../src/base-pruebas/heroes";

describe("prueba en 09-promesas", (done) => {
  test("getHeroeByIdAsync debe reornar un Héroe", () => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual(heroes[0]);
    });
  });
  test("getHeroeByIdAsync debe reornar un error si el heroe no existe", (done) => {
    const id = 100;
    if(id >heroes.length && id < 1) getHeroeByIdAsync(id)
        .then(hero => {
            expext(hero).toBeFalsy()

            done();
        })
        .catch((error) => {
      console.log(erro);
      done();
    });
  });
});
