import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import './quotes.css';

export const Quotes = () => {

    const { counter, increment } = useCounter();

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote, author } = !!data && data[0];

    console.log({ data, quote });

    return (
        <div>
            <h1>Quotes Breaking Bad</h1>
            <hr/>

            <p>{ author }</p>
            <p>{ quote }</p>

            <button
                onClick={ increment }
            >
                Next Quote
            </button>


        </div>
    )
}
