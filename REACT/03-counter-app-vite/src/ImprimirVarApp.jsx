const getName = (a, b) => {
  return a + b;
};
/* Se recomienda colocar las funciones que no tienen dependecia con la App
fuera de la App. Esto le da mas velocidad a la ejecucion y ocupa menos
espacio de memoria en la renderizacion
 */
export const ImprimirVarApp = () => {
  return (
    <>
      <h1> {getName(2, 5)} </h1>
      {/*La llave del codigo anterior nos permite imprimirle al html pero medio
       de la renderizacion cualquier cosa menos objetos. Si quisieramos imprimir
       un objeto tendriamos que usar el siguiente codigo: 
       <code>{JSON.stringify( el objeto)}</code>  .Segun el codigo
       anterior, no significa que se pueda imprimir una funcion.
       Lo que se esta haciendo en este caso es decirle al html que vaya a la
       funcion y tome el return o el resultado de dicha funcion. 
       Tampoco admite una funcion async ya que una funcion async 
       devuelve una promesa y basicamente una promesa es un objeto
      */}
      <p>Imprimiendo una funcion </p>
    </>
  );
};
