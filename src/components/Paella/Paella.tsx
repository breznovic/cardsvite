import React from 'react';

const Paella = () => {

    let ingridients = [
        'Onion',
        'Bell pepper',
        'Garlic',
        'Tomatoes',
        'Parsley',
        'Frozen peas',
        'Bay leaf',
        'Paprika',
        'Saffron',
        'Salt',
        'Pepper',
        'Shrimp',
        'Mussels',
        'Calamari',
        'Olive oil',
        'White wine',
        'Rice'
    ]

    let recipe = ingridients.map((i) => {
        return <ol>
            {i}
        </ol>
    })

    return (
        <div>
            {recipe}
        </div>
    )
}

export default Paella;
