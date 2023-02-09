import React, {useState} from 'react';

const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState('')

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
                className='py-2 px-4 rounded-md w-[300px]'
                value={query}
                placeholder='What are you looking for?'
                type="text"
                onChange={inputChangeHandler}
            />
            <button className='py-2 px-4 bg-violet-600 rounded-md text-white hover:bg-violet-500'>
                Search
            </button>
        </form>
    );
};

export default SearchBar;
