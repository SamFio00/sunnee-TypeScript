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