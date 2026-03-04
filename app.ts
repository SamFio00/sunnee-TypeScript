type TipoProdotto = "costume da bagno" | "pareo" | "cappello";
type StatoProdotto = "disponibile" | "esaurito" | "ordinato";
type TagliaProdotto = "XS" | "S" | "M" | "L" | "XL" | "XXL";

interface IProdotto {
    tipo: TipoProdotto;
    taglia: TagliaProdotto;
    colore: string;
    stato: StatoProdotto;
    id: string;

    assegnaCliente(cliente: ICliente): void;
}

type MetodoPagamento = "carta" | "paypal" | "bonifico";

interface ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: MetodoPagamento;

    ordinaProdotto(prodotto: IProdotto):void;
}

interface IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

    aggiungiProdotto(prodotto: IProdotto): void;
}

class Prodotto implements IProdotto {
    constructor(
        public tipo: TipoProdotto,
        public taglia: TagliaProdotto,
        public colore: string,
        public stato: StatoProdotto,
        public id: string
    ) {}

    assegnaCliente(cliente: ICliente): void {
        this.stato = "ordinato";
        console.log(`Il prodotto ${this.id} è stato assegnato al cliente ${cliente.nome} ${cliente.cognome}.`);
    }
}

class Cliente implements ICliente {
    constructor(
        public nome: string,
        public cognome: string,
        public email: string,
        public metodoPagamento: MetodoPagamento
    ) {}

    ordinaProdotto(prodotto: IProdotto): void {
        if (prodotto.stato === "disponibile") {
            prodotto.assegnaCliente(this);
            console.log(`Il cliente ${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.id}.`); 
        } else {
            console.log(`Il prodotto ${prodotto.id} non è disponibile per l'ordine.`);
        }
        }
}

class ProcessoProduzione implements IProcessoProduzione {
    constructor(
        public nomeProcesso: string,
        public descrizione: string,
        public prodottiInProduzione: IProdotto[] = []
    ) {}

    aggiungiProdotto(prodotto: IProdotto): void {
        this.prodottiInProduzione.push(prodotto);
        console.log(`Il prodotto ${prodotto.id} è stato aggiunto al processo di produzione ${this.nomeProcesso}.`);
    }

}

const prodotto1 = new Prodotto("costume da bagno", "M", "rosso", "disponibile", "SUN001");
const prodotto2 = new Prodotto("pareo", "L", "blu", "disponibile", "SUN002");
const prodotto3 = new Prodotto("cappello", "S", "giallo", "disponibile", "SUN003");

const cliente1 = new Cliente("Mario", "Rossi", "Mrossi@gmail.com", "carta");
const cliente2 = new Cliente("Gino", "Panevino", "gpane@gmail.com", "bonifico");

const processo1 = new ProcessoProduzione("Riciclo plastica marina", "Trasformazione di reti da pesca dismesse in filato tessile sostenibile per la produzione di costumi da bagno e accessori.");

processo1.aggiungiProdotto(prodotto1);
processo1.aggiungiProdotto(prodotto2);
processo1.aggiungiProdotto(prodotto3);

cliente1.ordinaProdotto(prodotto1);
cliente2.ordinaProdotto(prodotto2);

export{}