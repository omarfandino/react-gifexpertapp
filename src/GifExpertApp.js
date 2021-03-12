import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball"]);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {
                categories.map( (category, index) => (
                    <GifGrid 
                        key={ index }
                        category={ category } 
                    />
                ))
            }
        </>
    );
}

export default GifExpertApp;