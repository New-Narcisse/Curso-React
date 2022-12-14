import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(testUser).toEqual(user);
  });

  test("should return an object", () => {
    const nombre = "Sony";
    const usuario = getUsuarioActivo(nombre);
    const testUsuario = {
      uid: "ABC567",
      username: nombre,
    };
    expect(testUsuario).toEqual(usuario);
  });
});
