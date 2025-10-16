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
    <div className="p-4 flex justify-center flex-col sm:flex-row sm:items-center gap-4">
      
      <div>
        <label htmlFor="categoria" className="mr-2 font-semibold">Filtra per squadra:</label>
        <select
          id="categoria"
          value={categoriaSelezionata}
          onChange={(e) => setCategoriaSelezionata(e.target.value)}
          className="cursor-pointer text-gray-700"
        >
          <option value="all">Tutte le squadre</option>
          {categorie.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="nazione" className="mr-2 font-semibold">Filtra per nazione:</label>
        <select
          id="nazione"
          value={nazioneSelezionata}
          onChange={(e) => setNazioneSelezionata(e.target.value)}
          className="text-gray-700 cursor-pointer"
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
        className="cursor-pointer transition-transform hover:bg-teal-700 ml-0 sm:ml-4 bg-teal-600 text-white px-5 py-2 rounded-md hover:bg-teal-700"
      >
        Reset
      </button>
    </div>
  )
}

export default Filtro
