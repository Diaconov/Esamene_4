type TypeUtente = {
    nome: string;
    cognome: string;
    dataNascita: number;
    sesso: number;
    password: string;
    codiceFiscale?: string;
    idStato?: number;
    idRuoloUtente?: number;
    user?: string
}
//--------------------------------------------------
interface InterfaceUtente {
    nome: string;
    cognome: string;
    dataNascita: number;
    sesso: number;
    email: string;
    password: string
}