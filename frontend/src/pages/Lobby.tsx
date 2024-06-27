const Lobby = () => {
  return (
    <main className="relative mx-auto max-w-screen-xl pt-16 z-10">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg bg-orange-500 p-4 shadow">
          Liste von Gruppen
          
        </div>
        <div className="flex flex-col px-4">
          <div className="mb-4 w-full rounded-lg bg-red-600 p-4 shadow">
            Gruppen-Aktion
            
            beitreten / verlassen
          </div>
          <div className="w-full rounded-lg bg-cyan-700 p-4 shadow sm:block">Gruppen-Info</div>
        </div>
      </div>
    </main>
  );
};

export default Lobby;
