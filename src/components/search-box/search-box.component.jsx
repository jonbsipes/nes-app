import './search-box.styles.scss'


const SearchBox = ({onSearchChange}) => {
    return(
        <input 
        className="search-box"
        type="search"
        onChange={onSearchChange}
        placeholder="enter framing"
        />
    )
} 

export default SearchBox;