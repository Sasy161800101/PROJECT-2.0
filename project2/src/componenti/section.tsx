type SectionProps = {
  ordine: {
    id: string;
    nome: string;
    cognome: string;
    stato: string;
    totale: number;
    prodotti: {
      image: string;
      title: string;
      taglia: string;
      price: number;
    }[];
  };
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

export function Section({ ordine, children, isOpen, onToggle }: SectionProps) {
  return (
    <div
      key={ordine.id}
      className="flex-col flex items-center bg-white p-4 rounded-lg shadow-sm w-full gap-3"
    >
      <div className="grid grid-cols-3 md:grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr] items-center bg-white w-full">
        <img
          src={ordine.prodotti[0].image}
          alt={ordine.nome}
          className="hidden md:block w-16 h-16 object-cover rounded-md mr-5"
        />
        <div className="flex-1">
          <div className="hidden md:block text-lg text-start font-medium text-gray-900">Destinatario: {ordine.nome} {ordine.cognome}</div>
          <div className="text-gray-500 text-start"><span className="hidden md:inline">Numero d'ordine: </span><span className="inline md:hidden">Nr. </span>{ordine.id}</div>
        </div>
        <div className="text-start hidden md:block">Stato: {ordine.stato}</div>
        <div className="font-semibold text-teal-700 text-lg">
          {ordine.totale.toFixed(2)} €
        </div>
        <button
          className="text-teal-600 cursor-pointer pl-3"
          onClick={onToggle}
        >
          Dettagli
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col justify-between w-full">
          <hr className="text-gray-300 py-2" />
          {children}
        </div>
      )}
    </div>
  );
}