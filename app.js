"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Implementazione della classe Prodotto
var Prodotto = /** @class */ (function () {
    function Prodotto(tipo, taglia, colore, stato, id) {
        this.tipo = tipo;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
        this.id = id;
    }
    // Metodo per assegnare un cliente al prodotto
    Prodotto.prototype.assegnaCliente = function (cliente) {
        if (this.stato !== "disponibile") {
            console.log("Il prodotto ".concat(this.id, " non \u00E8 disponibile per l'assegnazione al cliente ").concat(cliente.nome, " ").concat(cliente.cognome, "."));
            return;
        }
        this.stato = "ordinato"; // Cambia lo stato del prodotto a "ordinato" quando viene assegnato a un cliente
        console.log("Il prodotto ".concat(this.id, " \u00E8 stato assegnato al cliente ").concat(cliente.nome, " ").concat(cliente.cognome, "."));
    };
    return Prodotto;
}());
// Implementazione della classe Cliente
var Cliente = /** @class */ (function () {
    function Cliente(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    Cliente.prototype.ordinaProdotto = function (prodotto) {
        if (prodotto.stato === "disponibile") {
            prodotto.assegnaCliente(this);
            console.log("Il cliente ".concat(this.nome, " ").concat(this.cognome, " ha ordinato il prodotto ").concat(prodotto.id, "."));
        }
        else {
            console.log("Il prodotto ".concat(prodotto.id, " non \u00E8 disponibile per l'ordine."));
        }
    };
    return Cliente;
}());
// Implementazione della classe ProcessoProduzione
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nomeProcesso, descrizione, prodottiInProduzione) {
        if (prodottiInProduzione === void 0) { prodottiInProduzione = []; }
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = prodottiInProduzione;
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodottiInProduzione.push(prodotto); // Aggiunge il prodotto all'array dei prodotti in produzione
        console.log("Il prodotto ".concat(prodotto.id, " \u00E8 stato aggiunto al processo di produzione ").concat(this.nomeProcesso, "."));
    };
    return ProcessoProduzione;
}());
// Esempio di utilizzo delle classi e interfacce
var prodotto1 = new Prodotto("costume da bagno", "M", "rosso", "disponibile", "SUN001");
var prodotto2 = new Prodotto("pareo", "L", "blu", "disponibile", "SUN002");
var prodotto3 = new Prodotto("cappello", "S", "giallo", "disponibile", "SUN003");
var cliente1 = new Cliente("Mario", "Rossi", "Mrossi@gmail.com", "carta");
var cliente2 = new Cliente("Gino", "Panevino", "gpane@gmail.com", "bonifico");
var processo1 = new ProcessoProduzione("Riciclo plastica marina", "Trasformazione di reti da pesca dismesse in filato tessile sostenibile per la produzione di costumi da bagno e accessori.");
processo1.aggiungiProdotto(prodotto1); // Il prodotto SUN001 è stato aggiunto al processo di produzione Riciclo plastica marina.
processo1.aggiungiProdotto(prodotto2); // Il prodotto SUN002 è stato aggiunto al processo di produzione Riciclo plastica marina.
processo1.aggiungiProdotto(prodotto3); // Il prodotto SUN003 è stato aggiunto al processo di produzione Riciclo plastica marina.
cliente1.ordinaProdotto(prodotto1); // Prodotto ordinato con successo da cliente1
cliente2.ordinaProdotto(prodotto2); // Prodotto ordinato con successo da cliente2
cliente2.ordinaProdotto(prodotto1); // Prodotto già ordinato da cliente1, non disponibile per cliente2
