import { searchEngineData } from "../../Data/Data";

const Search = () => {
  return (
    <div className="search-container">
      <select key={searchEngine.id} className="search-engine">
        {searchEngineData.map((searchEngine) => (
          <option value={searchEngine.link}>{searchEngine.display}</option>
        ))}
      </select>
    </div>
  );
};
export default Search;
