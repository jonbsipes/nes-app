import { Link } from "react-router-dom";
import Directory from "../directory/directory.component";

const categories = [
    {
        "id" : 'C1',
        "title": "OVERHEAD PLATE BOOK",
        "imageUrl" : ''
    },
    {
        "id" : 'C2',
        "title": "UNDERGROUND PLATE BOOK",
        "imageUrl" : ''
    },
    {
        "id" : 'C3',
        "title": "DESIGN MANUAL",
        "imageUrl" : ''
    },
]

const Home = () => {
    return(
        <div>
            <Directory categories={categories} />
        </div>
    )
};

export default Home;