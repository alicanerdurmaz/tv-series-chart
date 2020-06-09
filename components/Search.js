import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Suggestions from './Suggestions';
import useSarchInTitles from './helpers/useSearchInTitles';

function Search({ styleName, positionTop }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm.length <= 2) {
      setSuggestions([]);
      return;
    }

    setSuggestions(useSarchInTitles(searchTerm));
  }, [searchTerm]);

  function submitHandler(e) {
    e.preventDefault();
    router.push('/search/' + searchTerm);
  }

  return (
    <form className={`${styleName}-form`} onSubmit={(e) => submitHandler(e)}>
      <input
        className={`${styleName}-input`}
        value={searchTerm}
        type='search'
        placeholder='Search Tv Series'
        aria-label='search'
        autoComplete='off'
        required
        onChange={(e) => setSearchTerm(e.target.value)}></input>
      <Suggestions array={suggestions} width='90%' positionTop={positionTop}></Suggestions>
    </form>
  );
}

export default Search;
