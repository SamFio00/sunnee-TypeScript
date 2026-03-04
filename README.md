# Sunnee – TypeScript Project

## Descrizione

Questo progetto modella la struttura operativa di **Sunnee**, un brand ipotetico di beachwear sostenibile realizzato con plastica riciclata proveniente dall’ambiente marino.

L'obiettivo del progetto è dimostrare come **TypeScript** possa essere utilizzato per modellare un sistema software attraverso l'uso di:

- tipi personalizzati
- interfacce
- classi
- interazioni tra oggetti

Il sistema simula l'interazione tra **clienti**, **prodotti beachwear** e **processi di produzione sostenibile**.

---

# Struttura del progetto

Il progetto è sviluppato interamente in **TypeScript** e comprende tre principali entità:

### Prodotto
Rappresenta un articolo di beachwear prodotto dal brand.

Proprietà principali:
- tipo
- taglia
- colore
- stato
- id univoco

Metodo:
- `assegnaCliente(cliente)`  
assegna il prodotto a un cliente e cambia lo stato del prodotto in **ordinato**.

---

### Cliente

Rappresenta un cliente del brand.

Proprietà principali:
- nome
- cognome
- email
- metodo di pagamento

Metodo:
- `ordinaProdotto(prodotto)`  
permette al cliente di ordinare un prodotto se questo è **disponibile**.

---

### ProcessoProduzione

Rappresenta un processo produttivo sostenibile utilizzato dal brand.

Proprietà principali:
- nome del processo
- descrizione
- lista dei prodotti in produzione

Metodo:
- `aggiungiProdotto(prodotto)`  
aggiunge un prodotto al processo produttivo.

---

# Tecnologie utilizzate

- **TypeScript**
- **JavaScript (compilato da TypeScript)**
- **Node.js** per eseguire il codice

---

# Esempio di funzionamento

Nel codice vengono creati:

- 3 prodotti
- 2 clienti
- 1 processo di produzione

Successivamente:

1. I prodotti vengono aggiunti al processo produttivo
2. I clienti ordinano alcuni prodotti
3. Il sistema impedisce di ordinare un prodotto già assegnato

---

# Obiettivo del progetto

Dimostrare come **TypeScript** possa essere utilizzato per modellare un sistema reale attraverso:

- tipizzazione forte
- programmazione orientata agli oggetti
- separazione delle responsabilità tra le classi

---

# Autore

Samuele Fiorini  
- GitHub: https://github.com/SamFio00  
- LinkedIn: https://www.linkedin.com/in/samuele-fiorini-38bba9325  
- Instagram: https://www.instagram.com/fiorini_sam_00
