# Progetto: "Event Space"
Realizzazione di un portale web per la prenotazione di eventi, manifestazioni sportive, musicali e teatrali. Il portale prevede il login di due categorie di utenti:
- **Utente finale:** può prenotare uno o più eventi e visualizzare l’elenco degli eventi prenotati
- **Admin:** può inserire , modificare ed eliminare eventi e gestire gli utenti.

L’applicazione presenta una home page con slider eventi della settimana ed un elenco di tutti gli eventi suddivisi per tipologia con la possibilità di filtrare gli eventi per data, luogo e nome evento.
## Tecnologie utilizzate:
- Angular 12 per la parte front-end;
- Spring boot per la realizzazione di servizi rest:
    - Login;
    - Registrazione utente;
    - Gestione utenti;
    - Gestione eventi;
    - Servizio di invio mail per confermare la prenotazione dell’utente.
- Mysql e hybernate per la realizzazione delle operazioni di CRUD
