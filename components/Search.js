import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Suggestions from './Suggestions';
import useSarchInTitles from './helpers/useSearchInTitles';

function Search({ styleName, positionTop, refresh }) {
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
    if (searchTerm.length < 1) {
      return;
    }
    router.push('/search/' + searchTerm);
  }

  return (
    <form className={`${styleName}-form`} onSubmit={(e) => submitHandler(e)}>
      <input
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            e.currentTarget.nextSibling.firstChild.firstChild.focus();
          }
        }}
        className={`${styleName}-input`}
        value={searchTerm}
        type='search'
        placeholder='Search Tv Series'
        aria-label='search'
        autoComplete='off'
        onChange={(e) => setSearchTerm(e.target.value)}></input>
      <Suggestions array={suggestions} width='90%' positionTop={positionTop} refresh={refresh}></Suggestions>
    </form>
  );
}

export default Search;
