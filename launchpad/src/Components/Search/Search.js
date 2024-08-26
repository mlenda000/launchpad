import { searchEngineData } from "../../Data/Data";
import { useState } from "react";

const Search = () => {
  const [searchTopic, setSearchTopic] = useState("");
  const [site, setSite] = useState("https://www.google.com/search?q=");

  const handleSearch = (value, website) => {
    window.open(`${website}${value}`, "_blank");
  };
  return (
    <>
      <h1>Search</h1>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search the web"
          onChange={(e) => setSearchTopic(e.target.value)}
        />
        <select
          className="search-engine"
          onChange={(e) => setSite(e.target.value)}
        >
          {searchEngineData.map((searchEngine) => (
            <option key={searchEngine.id} value={searchEngine.link}>
              {searchEngine.display}
            </option>
          ))}
        </select>
        <button
          className="search-button"
          onClick={() => {
            handleSearch(searchTopic, site);
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};
export default Search;
