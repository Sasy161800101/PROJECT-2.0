type ProdottoProps = {
  prodotti: {
    image: string;
    title: string;
    taglia: string;
    price: number;
  }[];
};

export function Prodotto({ prodotti = [] }: ProdottoProps) {
  return (
    <div className="flex flex-col gap-5">
      {prodotti.map((prodotto, index) => (
        <div
          key={index}
          className="grid grid-cols-3 md:grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr] justify-between w-full items-center"
        >
          <img
            className="w-16 h-16 object-fill md:object-cover rounded-md"
            src={prodotto.image}
            alt={prodotto.title}
          />
          <div className="hidden md:block justify-self-start"><p className="text-start">{prodotto.title}</p></div>
          <div><p>Taglia: {prodotto.taglia}</p></div>
          <div><p>{prodotto.price.toFixed(2)} €</p></div>
        </div>
      ))}
    </div>
  );
}