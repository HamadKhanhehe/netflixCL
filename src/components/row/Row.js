import axios from "axios";
import Movie from "../movie/Movie";
import { useEffect, useState } from "react"


export default function Row({title,fetchURL}) {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
        setMovies(response.data.results);
        })
        },[fetchURL]
        )

    return (
        <>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center ">
<div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
{movies.map((item,id) => (
 <Movie key={item.id} item={item} />
)
)}
</div>
        </div>
        </>
    )
}