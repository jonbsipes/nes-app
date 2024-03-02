import './category-item.styles.scss'
import nes from '../../assets/nes.png'
import { Link } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return(
        <Link  to={`/${title}`}>
    <div className="category-container">
        <div 
        className="background-image" 
        style={{
          backgroundImage: `url(${nes})`
          }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
        </div>
    </div>
        </Link>
    )
}

export default CategoryItem