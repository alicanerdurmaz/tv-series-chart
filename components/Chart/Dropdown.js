function Dropdown({ totalSeasons, setSelectedSeason }) {
  function createDropdownItem() {
    const liArray = [];

    liArray.push(
      <option className='dropdown-item' value={0} key={0}>
        All Season
      </option>
    );
    for (let i = 0; i < totalSeasons; i++) {
      liArray.push(
        <option className='dropdown-item' value={i + 1} key={i + 1}>
          {`Season ${i + 1}`}
        </option>
      );
    }

    return liArray;
  }
  return (
    <select className='dropdown' onChange={(e) => setSelectedSeason(e.target.value)}>
      {createDropdownItem()}
    </select>
  );
}

export default Dropdown;
