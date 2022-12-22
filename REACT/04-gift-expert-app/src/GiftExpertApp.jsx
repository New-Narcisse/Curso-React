import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
  // console.log(categories);
  const onAddCategory = (newCategory) => {
    /* esta funcion es para agregar lo que se me antoje a travez del boton de agregar o enter*/
    if (categories.includes(newCategory)) return;
    //    console.log('Kimetsu no yaiba')
    setCategories([newCategory, ...categories]);
    //setCategories((cat) => [...cat, newCategory]);
    /* cualquiera de las dos opciones son validas */
  };

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* input */}
      <AddCategory
        //setCategories={setCategories}
        // setCategories={setCategories}
        /* setCategories={setCategories} es una metodologia que oculta 
      loque realmente esta sucediendo por lo tanto no es evidente su lectura */
        onNewCategory={(event) => onAddCategory(event)} // el prefijo on significa que se esta emitiendo algo es decir, un evento
        /* en el siguinete codigo: onNewCategory={ ( event ) => onNewCategory(event) } podemos por ley eliminar la sitxis del event 
       ya que estan en ambos lados de la funcion. */
        /* RECURDA QUE EL 'onNewCategory' ES UNA PROPIEDAD DE MI COMPONENTE*/
      />
      {/*     <button onClick={onAddCategory} >Agregar</button>
       */}

      {/* listado de gifts */}

      <ol>
        {categories.map((category) => (
          <GiftGrid 
          key={category}
          category = { category }
          />
        ))}
      </ol>
    </>
  );
};

{
  /* <div key={category}>
  <h3> {category} </h3>
  <li>{category}</li>
</div> */
}
