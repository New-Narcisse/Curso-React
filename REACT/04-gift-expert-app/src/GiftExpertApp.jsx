import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ])
    console.log(categories)
    const onAddCategory = () => {
    //    console.log('Kimetsu no yaiba')
       //setCategories([ ...categories, 'Kimetsu no yaiba' ])
       setCategories( cat =>[ ...cat, 'Kimetsu no yaiba' ])
       /* cualquiera de las dos opciones son validas */
    }
  return (
    <>
    {/* titulo */}
    <h1>GiftExpertApp</h1>

    {/* input */}
    <AddCategory />
    <button onClick={onAddCategory} >Agregar</button>

    {/* listado de gifts */}
    <ol>
        {
            categories.map(category =>{
                return <li key={category}>{category}</li>

            }  )
        }
    </ol>
    </>
  )
}
