class Utility {

    constructor() {
        this.passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        this.regexp = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;
    }

    validaNome(nome) {
        let rit = 0;
        if ((nome == '')) {
            alert("Il nome è obbligatorio")
            rit++;
        }
        return (rit == 0);
    }

    //------------------------------------------------------------

    verificaCognome() {
        let rit = 0;
        if ((cognome == '')) {
            alert("Il cognome è obbligatorio")
        }
        return (rit == 0);
    }

    //------------------------------------------------------------
    verificaNascita(dataNascita) {
        let rit = 0;


        if (dataNascita == '') {
            alert("La data di nascita è obbligatoria")
        }

        const dataParts = dataNascita.split('/');
        if (dataParts.length !== 3) {
            // alert("La data di nascita non è corretta, inserisci il formato gg/mm/aaaa");
        }

        const day = parseInt(dataParts[0], 10);
        const month = parseInt(dataParts[1], 10);
        const year = parseInt(dataParts[2], 10);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            alert("La data di nascita non è corretta, inserisci il formato gg/mm/aaaa");
        }



        return (rit == 0);
    }


    dataValida(dataNascita) {
        let rit = 0;
        // Verifica il formato gg/mm/aaaa
        const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!dateRegex.test(dataNascita)) {
            return false;
        }

        // Divide la data in giorno, mese e anno
        const [day, month, year] = dataNascita.split('/').map(Number);

        // Verifica che il mese sia compreso tra 1 e 12
        if (month < 1 || month > 12) {
            return false;
        }

        // Verifica che il giorno sia valido per il mese specificato
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day < 1 || day > daysInMonth) {
            return false;
        }

        // Verifica che l'anno sia un numero positivo
        if ((year < 0) && (year <= 1930)) {
            return false;
        }

        // Se tutte le verifiche hanno successo, la data è valida
        return (rit == 0);
    }


    //------------------------------------------------------------
    verificaScelta() {
        let rit = 0;


        if (sesso === "") {
            alert("Seleziona un'opzione valida.");
        }
        return (rit == 0);
    }

    //------------------------------------------------------------
    /**
     * funzione che verifica la password
     * @returns 
     */
    validaPassword(password) {
        let rit = 0;
        //verifica password
        if (password != 0) {
            if (!this.passwordRegex.test(password)) {
                //verifica se ha 8 caratteri
                if (password.length < 8) {
                    console.log("La password deve contenere almeno 8 caratteri.");
                }
                //verifica se ha una lettera maiuscola
                if (!/(?=.*[A-Z])/.test(password)) {
                    console.log("La password deve contenere almeno una lettera maiuscola.");
                }
                //verifica se ha una lettera minuscola
                if (!/(?=.*[a-z])/.test(password)) {
                    console.log("La password deve contenere almeno una lettera minuscola.");
                }
                //verifica se ha un numero
                if (!/(?=.*\d)/.test(password)) {
                    console.log("La password deve contenere almeno un numero.");
                }
                //verifica se ha un carattere speciale
                if (!/(?=.*[@$!%*?&])/.test(password)) {
                    console.log("La password deve contenere almeno un carattere speciale tra @$!%*?&.");
                }
                alert("La password deve contenere 8 caratteri, almeno una maiuscola, almeno una minuscola, almeno un numero ed un carattere speciale (tra @$!%*?&.).")
            }
        }
        return (rit == 0);
    }

    //------------------------------------------------------------------------------
    /**
     * 
     * Controlla se e una email valido
     * 
     * @param {string} mail Email da controllare
     * @return {boolean}
     */
    validaEMail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)) {
            return true
        } else {
            return false;
        }
    }

    //-----------------------------------------------------------------------------------
    //controllo se ha 16 elementi 
    ValidoCodiceFiscale(codice) {
        let rit = 0;
        //verifica password
        if (codice != '' && codice != null) {
            if (!this.regexp.test(codice)) {
                //verifica se ha 16 caratteri
                if (codice.length !== 16) {
                    console.log("il codice fiscale non ha correttamente 16 caracteri");
                    rit++;
                }
                //verifica se ha una lettera maiuscola
                if (!/(?=.*[a-zA-Z])/.test(codice)) {
                    caratteri = codice.substring(0, 6);
                    console.log("I primi 6 caracteri del codice fiscale  sono carrettamente delle lettere");
                    rit++;
                }
                //verifica se ha una lettera minuscola
                if (!/(?=.*[0-9])/.test(codice)) {
                    caratteri = codice.substring(6, 8);
                    console.log("I caratteri 7 e 8 caracteri del codice fiscale  sono carrettamente dei numeri");
                    rit++;
                }
                //verifica se ha un numero
                if (!/(?=.*[a-zA-Z])/.test(codice)) {
                    caratteri = codice.substring(8, 9);
                    console.log("Il nono caracteri del codice fiscale  carrettamente una lettera");
                    rit++;
                }
                //verifica se ha un carattere speciale
                if (!/(?=.*[0-9])/.test(codice)) {
                    caratteri = codice.substring(9, 11);
                    console.log("Il caracteri 10 e 11 del codice fiscale  carrettamente una numeri");
                    rit++;
                }
                //verifica se ha un carattere speciale
                if (!/(?=.*[a-zA-Z])/.test(codice)) {
                    caratteri = codice.substring(11, 12);
                    console.log("Il dodicesimo del codice fiscale  carrettamente una lettera");
                    rit++;
                }
                //verifica se ha un carattere speciale
                if (!/(?=.*[0-9])/.test(codice)) {
                    caratteri = codice.substring(12, 15);
                    console.log("Il caratteri dal 13 al 15 del codice fiscale  carrettamente una numeri");
                    rit++;
                }
                //verifica se ha un carattere speciale
                if (!/(?=.*[a-zA-Z])/.test(codice)) {
                    caratteri = codice.substring(15, 16);
                    console.log("L'ultimo carattere del codice fiscale  e correttamente una lettera");
                    rit++;
                }
                console.log("Errore Password")
            }
        }
        if (rit == 0) {
            return true;
        } else {
            return false;
        }
    }
}
