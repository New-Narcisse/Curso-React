import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([""]);
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
    <div>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((categori) => (
        <GiftGrid key={categori} category={categori} />
      ))}
    </div>
  );
};

//setCategories={setCategories}
/* setCategories={setCategories} es una metodologia que oculta 
loque realmente esta sucediendo por lo tanto no es evidente su lectura */
// el prefijo on significa que se esta emitiendo algo es decir, un evento
/* en el siguinete codigo: onNewCategory={ ( event ) => onNewCategory(event) } podemos por ley eliminar la sintaxis del event 
ya que estan en ambos lados de la funcion. */
/* RECURDA QUE EL 'onNewCategory' ES UNA PROPIEDAD DE MI COMPONENTE*/
/* <div key={category}>
  <h3> {category} </h3>
  <li>{category}</li>
</div> */
