// Tipi per il prodotto, cliente e processo di produzione
type TipoProdotto = "costume da bagno" | "pareo" | "cappello";
type StatoProdotto = "disponibile" | "esaurito" | "ordinato";
type TagliaProdotto = "XS" | "S" | "M" | "L" | "XL" | "XXL";

// Interfaccia per il prodotto
interface IProdotto {
    tipo: TipoProdotto;
    taglia: TagliaProdotto;
    colore: string;
    stato: StatoProdotto;
    id: string;

    assegnaCliente(cliente: ICliente): void;
}

type MetodoPagamento = "carta" | "paypal" | "bonifico";

// Interfaccia per il cliente
interface ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamento: MetodoPagamento;

    ordinaProdotto(prodotto: IProdotto): void;
}

// Interfaccia per il processo di produzione
interface IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

    aggiungiProdotto(prodotto: IProdotto): void;
}

// Implementazione della classe Prodotto
class Prodotto implements IProdotto {
    constructor(
        public tipo: TipoProdotto,
        public taglia: TagliaProdotto,
        public colore: string,
        public stato: StatoProdotto,
        public id: string
    ) {}

    // Metodo per assegnare un cliente al prodotto
    assegnaCliente(cliente: ICliente): void {
        if (this.stato !== "disponibile") {
            console.log(
                `Il prodotto ${this.id} non è disponibile per l'assegnazione al cliente ${cliente.nome} ${cliente.cognome}.`
            );
            return;
        }

        this.stato = "ordinato"; // Cambia lo stato del prodotto a "ordinato" quando viene assegnato a un cliente
        console.log(`Il prodotto ${this.id} è stato assegnato al cliente ${cliente.nome} ${cliente.cognome}.`);
    }
}

// Implementazione della classe Cliente
class Cliente implements ICliente {
    constructor(
        public nome: string,
        public cognome: string,
        public email: string,
        public metodoPagamento: MetodoPagamento
    ) {}

    ordinaProdotto(prodotto: IProdotto): void { // Verifica se il prodotto è disponibile prima di ordinarlo
        if (prodotto.stato === "disponibile") {
            prodotto.assegnaCliente(this);
            console.log(`Il cliente ${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.id}.`);
        } else {
            console.log(`Il prodotto ${prodotto.id} non è disponibile per l'ordine.`);
        }
    }
}

// Implementazione della classe ProcessoProduzione
class ProcessoProduzione implements IProcessoProduzione {
    constructor(
        public nomeProcesso: string,
        public descrizione: string,
        public prodottiInProduzione: IProdotto[] = []
    ) {}

    aggiungiProdotto(prodotto: IProdotto): void {
        this.prodottiInProduzione.push(prodotto); // Aggiunge il prodotto all'array dei prodotti in produzione
        console.log(`Il prodotto ${prodotto.id} è stato aggiunto al processo di produzione ${this.nomeProcesso}.`);
    }
}

// Esempio di utilizzo delle classi e interfacce
const prodotto1 = new Prodotto(
    "costume da bagno", 
    "M", 
    "rosso", 
    "disponibile", 
    "SUN001"
);
const prodotto2 = new Prodotto(
    "pareo", 
    "L", 
    "blu", 
    "disponibile", 
    "SUN002"
);
const prodotto3 = new Prodotto(
    "cappello", 
    "S", 
    "giallo", 
    "disponibile", 
    "SUN003"
);


const cliente1 = new Cliente(
    "Mario", 
    "Rossi", 
    "Mrossi@gmail.com", 
    "carta"
);
const cliente2 = new Cliente(
    "Gino", 
    "Panevino", 
    "gpane@gmail.com", 
    "bonifico"
);

const processo1 = new ProcessoProduzione(
    "Riciclo plastica marina",
    "Trasformazione di reti da pesca dismesse in filato tessile sostenibile per la produzione di costumi da bagno e accessori."
);

processo1.aggiungiProdotto(prodotto1); // Il prodotto SUN001 è stato aggiunto al processo di produzione Riciclo plastica marina.
processo1.aggiungiProdotto(prodotto2); // Il prodotto SUN002 è stato aggiunto al processo di produzione Riciclo plastica marina.
processo1.aggiungiProdotto(prodotto3); // Il prodotto SUN003 è stato aggiunto al processo di produzione Riciclo plastica marina.

cliente1.ordinaProdotto(prodotto1); // Prodotto ordinato con successo da cliente1
cliente2.ordinaProdotto(prodotto2); // Prodotto ordinato con successo da cliente2
cliente2.ordinaProdotto(prodotto1); // Prodotto già ordinato da cliente1, non disponibile per cliente2

export {};