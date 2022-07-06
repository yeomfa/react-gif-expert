import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
  const [ categories, setCategories ] = useState([ 'Demon Slayer' ]);
  // console.log(categories);
  
  const onAddCategory = ( newCategory ) => {
    // setCategories( categories.concat('One Piece') ); No se rompe la referencia con el array retornado
    // setCategories( [ ...categories, 'One Piece' ] );
    // console.log(newCategory);
    if( categories.includes(newCategory) ) return;
    setCategories( categories => [ newCategory, ...categories ] );
  }

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory={ event => onAddCategory(event) }/>

      { categories.map( category =>
          <GifGrid
            key={ category }
            category={ category } />
      ) }

    </>
  )
}
