import tvTitles from './tv-titles.json';

export default function useSarchInTitles(searchTerm) {
  function sortBy(a, b) {
    return a.length - b.length;
  }
  const tempSuggestions = tvTitles.sort(sortBy).filter((e) => {
    if (e.toLowerCase().includes(searchTerm.toLowerCase())) {
      return e;
    }
  });

  if (tempSuggestions.length < 30) {
    if (tempSuggestions[0] === searchTerm) {
      {
        return [];
      }
    }
    return tempSuggestions;
  } else {
    return [];
  }
}
