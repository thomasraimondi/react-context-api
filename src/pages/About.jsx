export default function About() {
  return (
    <>
      <div className="relative jumbotron bg-blue-500 text-white h-30">
        <img src="https://img.freepik.com/free-vector/gradient-minimalist-background_23-2149974334.jpg" alt="Logo" className="w-full h-full object-cover" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">About</span>
      </div>
      <section className="my-5 container mx-auto flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Cosa puoi fare su Thomas's Blog?</h2>
        <p>
          Benvenuto nel sito dei post! Qui puoi leggere, creare e condividere i tuoi pensieri con gli altri utenti. Esplora i post pubblicati dalla nostra community, lasciati ispirare dalle idee degli
          altri e partecipa anche tu condividendo le tue opinioni. Registrati o accedi per iniziare a scrivere, commentare e interagire con gli altri membri. Il nostro obiettivo è creare uno spazio
          aperto dove tutti possano esprimersi liberamente e trovare nuovi spunti ogni giorno. Buona navigazione!
        </p>
      </section>
    </>
  );
}
