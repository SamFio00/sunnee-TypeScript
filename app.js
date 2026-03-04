"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prodotto = /** @class */ (function () {
    function Prodotto(tipo, taglia, colore, stato, id) {
        this.tipo = tipo;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
        this.id = id;
    }
    Prodotto.prototype.assegnaCliente = function (cliente) {
        this.stato = "ordinato";
        console.log("Il prodotto ".concat(this.id, " \u00E8 stato assegnato al cliente ").concat(cliente.nome, " ").concat(cliente.cognome, "."));
    };
    return Prodotto;
}());
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
var ProcessoProduzione = /** @class */ (function () {
    function ProcessoProduzione(nomeProcesso, descrizione, prodottiInProduzione) {
        if (prodottiInProduzione === void 0) { prodottiInProduzione = []; }
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = prodottiInProduzione;
    }
    ProcessoProduzione.prototype.aggiungiProdotto = function (prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log("Il prodotto ".concat(prodotto.id, " \u00E8 stato aggiunto al processo di produzione ").concat(this.nomeProcesso, "."));
    };
    return ProcessoProduzione;
}());
var prodotto1 = new Prodotto("costume da bagno", "M", "rosso", "disponibile", "SUN001");
var prodotto2 = new Prodotto("pareo", "L", "blu", "disponibile", "SUN002");
var prodotto3 = new Prodotto("cappello", "S", "giallo", "disponibile", "SUN003");
var cliente1 = new Cliente("Mario", "Rossi", "Mrossi@gmail.com", "carta");
var cliente2 = new Cliente("Gino", "Panevino", "gpane@gmail.com", "bonifico");
