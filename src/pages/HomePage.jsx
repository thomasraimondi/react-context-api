export default function HomePage() {
  return (
    <>
      <div className="relative jumbotron bg-blue-500 text-white h-30">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQcM1E5wXkHOZniSj04yCCC3KsPMLsSnP2A&s" alt="Logo" className="w-full h-full object-cover" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">Thomas's Blog</span>
      </div>
      <div className="my-5 container mx-auto flex flex-col gap-4">
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Benvenuto nel sito dei post!</h2>
          <p>
            Benvenuto nel sito dei post! Qui puoi leggere, creare e condividere i tuoi pensieri con gli altri utenti. Esplora i post pubblicati dalla nostra community, lasciati ispirare dalle idee
            degli altri e partecipa anche tu condividendo le tue opinioni. Registrati o accedi per iniziare a scrivere, commentare e interagire con gli altri membri. Il nostro obiettivo è creare uno
            spazio aperto dove tutti possano esprimersi liberamente e trovare nuovi spunti ogni giorno. Buona navigazione!
          </p>
        </section>
      </div>
    </>
  );
}
