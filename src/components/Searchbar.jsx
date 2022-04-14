// import search from '../../assets/search.svg';
export const SearchBar = ({ requestSearch }) => {
    
    // Change Employee state when changing input
    const handleChange = (e) => {
        requestSearch(e.target.value)
     };

  return (
    <div>
      <input
        input="search"
        type="search"
        placeholder="Search"
        onChange={handleChange}
      />
      <img  alt="" />
    </div>
  );
};