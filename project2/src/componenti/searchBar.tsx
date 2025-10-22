import { useSearchParams } from "react-router-dom"

function SearchBar(){
    const [searchParams, setSearchParams] = useSearchParams()
    const nome = searchParams.get("nome") || ""
    function handleCerca(e){
        const value = e.target.value
        if(value){
            setSearchParams({nome: value})
        }else{
            setSearchParams({})
        }
    } 
    return(
        <>
        <input className="w-full p-2 text-center rounded border border-teal-300 focus:outline-none focus:border-teal-500"
        type="text" placeholder="cerca prodotto" onChange={handleCerca} value={nome} />
        </>
    )

}
export default SearchBar