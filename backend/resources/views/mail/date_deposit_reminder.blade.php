<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Email di Notifica</title> 
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
        <style>
            .mail-body {
                margin: 0;
                padding: 5px;
                box-sizing: border-box;
                font-family: sans-serif;
                min-width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .wrapper {
                border-top: 1px solid #e1e1e1;
                padding-top: 3px;
            }

            .mail-mail {
                padding: 20px;
                width: 90%;
                border: 1px solid #272D36;
                border-radius: 5px;
            }

            h3, h4 {
                color: #ed9133;
            }

            span {
                text-align: end;
                font-size: 14px;
                color: #888;
                float: right;
            }

        </style>
    </head>
   
    <body class="mail-body">
        <main class="mail-mail">
            <section>
                <section>
                    
                    <h3>Questa è una email di notifica per ricordarle che la Data di Deposito della Sentenza sta per scadere!</h3>
                    <img src="{{ $message->embed(public_path().'/photos/logo.jpg"') }}">
                    <p><strong>Numero Protocollo del Ricorso:</strong><span>{{ $ricorso->numero_protocollo_interno }}</span></p>
                    <p class="pl-0 text-danger">Data di Deposito della Sentenza:<strong>:</strong><span>{{ $fase->data_deposito_sentenza }}</span></p>
                    <p class="pl-0"><strong>Nominativo:</strong><span>{{$ricorso->nominativo}}</span></p>
                    <p class="pl-0 "><strong>Email:</strong><span>{{$fase->mail}}</span></p>
                    <p class="pl-0 "><strong>Indirizzo:</strong><span>{{$fase->indirizzo}}</span></p>
                    <p class="pl-0 "><strong>Partita iva:</strong><span>{{$fase->cf_piva}}</span></p>
                    <p class="pl-0 "><strong>Telefono:</strong><span>{{$fase->telefono}}</span></p>
                    <p class="pl-0 "><strong>Cap:</strong><span>{{$fase->cap}}</span></p>
                    <p class="pl-0 "><strong>citta:</strong><span>{{$fase->citta}}</span></p>
                    <p class="pl-0 "><strong>Pec:</strong><span>{{$fase->pec}}</span></p>
                    <p class="pl-0 "><strong>Esito:</strong><span>{{$fase->esito}}</span></p>
                    <p class="pl-0 "><strong>Importo Atto:</strong><span>{{$fase->importo_atto}}</span></p>
                    <p class="pl-0 "><strong>Legale della controparte:</strong><span>{{$fase->legale_controparte}}</span></p>
                </section>
                <section class="wrapper">
                    <h5>Si prega di non rispondere a questa email in quanto inoltrata da una casella di posta di servizio, non abilitata a ricevere messaggi!</h5>
                </section>
            </section>
        </main>
    </body>
</html>
