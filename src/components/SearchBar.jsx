import React, {useState} from 'react';

const SearchBar = ({onSubmit, initialQuery}) => {
    const [query, setQuery] = useState(initialQuery)

    const submitHandler = (e) => {
        e.preventDefault()
        onSubmit(query)
        setQuery('')
    }

    const inputChangeHandler = (e) => {
        setQuery(e.target.value)
    }

    return (
        <form className='flex gap-2 items-center' onSubmit={submitHandler}>
            <input
                className='shadow appearance-none border rounded w-[400px] h-[40px] py-2 px-4 text-gray-700 leading-tight focus:border-blue-700 focus:outline-none focus:shadow-outline'
                value={query}
                placeholder='What are you looking for?'
                type="text"
                onChange={inputChangeHandler}
            />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Search
            </button>
        </form>
    );
};

export default SearchBar;
