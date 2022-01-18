import PropTypes  from "prop-types";
import {Link} from "react-router-dom";

function Movie({title,img,summary,genres,id}){
  
    return (<div>
    <h2>{title}</h2>
   <Link to={`/movie/${id}`}> <img src={img} alt={title}/></Link>
    <p>{summary}</p>
    <ul>{genres.map((genre) => (
    <li key={genre}>{genre}</li>)
    )}</ul>
    </div>);
}


export default Movie;