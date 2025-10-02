import { useEffect, useState } from 'react'

type FiltroProps = {
  categoriaSelezionata: string
  setCategoriaSelezionata: (categoria: string) => void
}

const Filtro = ({ categoriaSelezionata, setCategoriaSelezionata }: FiltroProps) => {
  const [categorie, setCategorie] = useState<string[]>([])

  useEffect(() => {
    async function fetchCategorie() {
      const res = await fetch("https://fakestoreapi.com/products/categories")
      const data = await res.json()
      setCategorie(data)
    }
    fetchCategorie()
  }, [])

  return (
    <div className="p-4">
      <label htmlFor="categoria" className="mr-2 font-semibold">Filtra per categoria:</label>
      <select
        id="categoria"
        value={categoriaSelezionata}
        onChange={(e) => setCategoriaSelezionata(e.target.value)}
        className="border rounded p-2"
      >
        <option value="all">Tutte le categorie</option>
        {categorie.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button
        onClick={() => setCategoriaSelezionata("all")}
        className="ml-4 bg-teal-600 text-white px-5 py-2 rounded hover:bg-teal-700"
      >
        Reset
      </button>
    </div>
  )
}

export default Filtro