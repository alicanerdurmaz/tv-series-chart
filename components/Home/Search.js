import React, { useState, useEffect, useRef } from 'react';
import useDebounce from '../helpers/useDebounce';
import tvTitles from './tv-titles';

function Search() {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 200);

  useEffect(() => {
    if (searchTerm.length < 3) {
      setSuggestions([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchInTitles();
    }
  }, [debouncedSearchTerm]);

  function searchInTitles() {
    if (searchTerm.length < 3) return;

    function sortBy(a, b) {
      return a.length - b.length;
    }
    const tempSuggestions = tvTitles.sort(sortBy).filter((e) => {
      if (e.toLowerCase().includes(searchTerm.toLowerCase())) {
        return e;
      }
    });

    if (tempSuggestions.length < 15) {
      if (tempSuggestions[0] === searchTerm) {
        {
          setSuggestions([]);
          return;
        }
      }
      setSuggestions(tempSuggestions);
    } else {
      setSuggestions([]);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      <form className='container' onSubmit={(e) => submitHandler(e)}>
        <input
          ref={inputRef}
          value={searchTerm}
          type='search'
          aria-label='search'
          placeholder='Search Tv Series'
          autoComplete='off'
          required
          onChange={(e) => setSearchTerm(e.target.value)}></input>

        {suggestions.length >= 1 ? (
          <ul className='list'>
            {suggestions.map((e) => (
              <li
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSearchTerm(e.target.innerHTML);
                    setSuggestions([]);
                    inputRef.current.focus();
                  }
                }}
                tabIndex='0'
                className='list-item'
                key={e}
                onClick={(e) => {
                  setSearchTerm(e.target.innerHTML);
                  setSuggestions([]);
                }}>
                {e}
              </li>
            ))}
          </ul>
        ) : null}
        <button>SEARCH</button>
      </form>

      <style jsx>{`
        .container {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .list {
          background: var(--bg-color);
          position: absolute;
          z-index: 2;
          top: 4.5rem;
          width: 90%;
          display: flex;
          flex-direction: column;
          border: 1px solid black;
        }
        .list-item {
          color: var(--text-color);
          cursor: pointer;
          user-select: none;
          padding: 0.5rem 1rem;
          border-bottom: 1px solid var(--bg-color-secondary);
        }
        .list-item:hover {
          background: var(--bg-color-secondary);
        }
        input {
          width: 90%;
          background: var(--bg-color-secondary);
          border: none;
          padding: 0.5rem;
          outline: none;
          border-radius: 4px;
          font-size: 1.5rem;
          color: var(--text-color);
          border: 1px solid black;
          margin: 1rem 0;
        }
        input:focus,
        input:active {
          border: 1px solid var(--secondary-color);
        }
        button {
          width: 70%;
          color: var(--text-color);
          padding: 0.5rem;
          cursor: pointer;
          user-select: none;
          border: none;
          border-radius: 2px;
          font-weight: 600;
          background: -webkit-linear-gradient(to left, #c06c84, #6c5b7b, #355c7d); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #c06c84,
            #6c5b7b,
            #355c7d
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      `}</style>
    </>
  );
}

export default Search;
