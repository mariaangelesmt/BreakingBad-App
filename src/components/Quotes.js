import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import './quotes.css';

export const Quotes = () => {

    const { counter, increment } = useCounter();

    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote, author } = !!data && data[0];


    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading 
                ?
                (
                    <div className="alert alert-info text-center">
                    Loading...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }
        
            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                Next Quote
            </button>
        </div>
    )
}
