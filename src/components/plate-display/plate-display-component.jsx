import framing from "../../assets/json-files/framing";
import ListBox from "../list/list-box-component";
import { useEffect, useState } from "react";
import './plate-display-styles.scss'
import SearchBox from "../search-box/search-box.component";



const PlateDisplay = () =>{

    const [ title, setTitle] = useState('NES FRAMING');
    const [ description, setDescription] = useState('SELECT FRAMING');
    const [ filteredItems, setFilteredItems] = useState(framing);
    const [ searchField, setSearchField] = useState('')


    const clickHandler = (title,description) => {
        return (
            setTitle(title),
            setDescription(description)
        )}

    const onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();

        return (setSearchField(searchField));
    }

    

    useEffect (() => {
        const newFilteredItems = framing.filter((item) =>{
            return item.Framing.toLocaleLowerCase().includes(searchField);
        });

        setFilteredItems(newFilteredItems);
    },[framing, searchField]);


    return(
        <div className="display-box">
             <h1>List Component</h1>
            <div className="display-container">
                <div>
                    <div className="search-box-container">
                        <SearchBox onSearchChange={onSearchChange}/>
                    </div>
                    <div>
                        <ListBox clickHandler={clickHandler} framing={filteredItems} />
                    </div>
                   
                </div>
                <div className="description-container">
                    <div>
                        <h1 className="framing-title">{title}</h1>
                    </div>
                    <div>
                        <h2 className="framing-title">{description}</h2>
                    </div> 
                </div>
            </div>           
        </div>
    )
}

export default PlateDisplay;