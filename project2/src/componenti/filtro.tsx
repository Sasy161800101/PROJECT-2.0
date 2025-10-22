import { useSearchParams } from "react-router-dom"
import SearchBar from "./searchBar"

type FiltroProps = {
  categoriaSelezionata: string
  setCategoriaSelezionata: (categoria: string) => void

  nazioneSelezionata: string
  setNazioneSelezionata: (nazione: string) => void

  categorie: string[]
  nazioni: string[]
}

const Filtro = ({
  categoriaSelezionata,
  setCategoriaSelezionata,
  nazioneSelezionata,
  setNazioneSelezionata,
  categorie,
  nazioni
}: FiltroProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const nome = searchParams.get("nome") || ""
  return (
    <div className="w-full py-4 flex justify-center flex-col lg:flex-row lg:items-center gap-4">
      
      <div className="w-full flex justify-between">
        <label htmlFor="categoria" className="mr-2 text-start font-semibold w-full">Filtra per squadra:</label>
        <select
          id="categoria"
          value={categoriaSelezionata}
          onChange={(e) => setCategoriaSelezionata(e.target.value)}
          className="cursor-pointer text-gray-700 w-full"
        >
          <option value="all">Tutte le squadre</option>
          {categorie.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="w-full flex justify-between">
        <label htmlFor="nazione" className="mr-2 text-start font-semibold w-full">Filtra per nazione:</label>
        <select
          id="nazione"
          value={nazioneSelezionata}
          onChange={(e) => setNazioneSelezionata(e.target.value)}
          className="text-gray-700 cursor-pointer w-full"
        >
          <option value="all">Tutte le nazioni</option>
          {nazioni.map((naz) => (
            <option key={naz} value={naz}>{naz}</option>
          ))}
        </select>
      </div>
      <SearchBar></SearchBar>
      <button
        onClick={() => {
          setCategoriaSelezionata("all")
          setNazioneSelezionata("all")
          setSearchParams("")
        }}
        className="cursor-pointer transition-transform hover:bg-teal-700 ml-0 bg-teal-600 text-white px-5 py-2 rounded-md hover:bg-teal-700"
      >
        Reset
      </button>
    </div>
  )
}

export default Filtro
