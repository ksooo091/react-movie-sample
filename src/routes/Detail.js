import { useEffect } from "react";
import {useParams} from "react-router-dom";
import { useState } from "react/cjs/react.development";
function Detail() {
    const {id} = useParams();
    const [movDetail, setMovDetail] = useState([]);
    useEffect(() => {
        getMovDetail();
    },[])
    const getMovDetail = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

        setMovDetail(json.data.movie);
    }
    return (
        <div>
            <h1>상세</h1>
       <img src={movDetail.large_cover_image}/>
    </div>
    )
    
}

export default Detail;