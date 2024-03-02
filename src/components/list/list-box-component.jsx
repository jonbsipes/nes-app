
import './list-box-styles.scss'
import ListItem from "../list-item/list-item-component";


const ListBox = ({framing, clickHandler}) =>{



    return(
        <div>
            <div className="list-container">
                {framing.map((items) =>
                    <ListItem  clickHandler={clickHandler} key={items.ID} item={items} />
                )}
            </div>
        </div>
    )
}

export default ListBox;