import { useAuth } from "../context/authProvider";
import Card from "../componenti/card";

function Preferiti() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="text-center py-20 text-lg text-gray-700">
        <p>❌ Non sei loggato!</p>
      </div>
    );
  }

  const preferiti = currentUser.preferiti || [];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-teal-700">I tuoi Preferiti</h1>
      </header>

      {preferiti.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Non hai ancora aggiunto nessun preferito ❤️</p>
      ) : (
        <div className="grid gap-5 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {preferiti.map((prod) => (
            <Card
              key={prod.id}
              id={prod.id}
              nomeProdotto={prod.title}
              prezzoProdotto={prod.price}
              imgProdotto={prod.image}
              descrizioneProdotto={prod.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Preferiti;