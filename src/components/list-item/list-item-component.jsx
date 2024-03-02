import { Link } from "react-router-dom";
import './list-item-styles.scss'

// const clickHandler = () => {console.log('hello')}



const ListItem = ({item, clickHandler}) => {
    const { Framing, Description} = item;
    return(
        <div onClick={() => clickHandler(Framing, Description)}>
            <p title={Framing} >{Framing}</p>
        </div>


    )
}

export default ListItem;