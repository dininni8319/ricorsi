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
                border: 3px solid #79c09c;
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
                    <h3>Questa è una email di notifica per ricordarle della scadenza del compito!</h3>
                    
                   {{--  <img src="{{ $message->embed(public_path().'/photos/logo.jpg"') }}"> --}}
                    <p><strong>Numero Protocollo del ricorso:</strong><span>{{ $ricorso->numero_protocollo_interno }}</span></p>
                    <p class="pl-0 text-danger"><strong>Scadenza della compito:</strong><span>{{$task->scadenza_del_compito}}</span></p>
                    <p class="pl-0"><strong>Numero protocollo del ricorso:</strong> <span>{{ $ricorso->numero_protocollo_interno }}</span>Nominativo:</strong><span>{{$ricorso->nominativo}}</span></p>
                    <p class="pl-0 "><strong>Email:</strong><span>{{$ricorso->mail}}</span></p>
                    <p class="pl-0 "><strong>Indirizzo:</strong><span>{{$ricorso->indirizzo}}</span></p>
                    <p class="pl-0 "><strong>Partita iva:</strong><span>{{$ricorso->cf_piva}}</span></p>
                    <p class="pl-0 "><strong>Telefono:</strong><span>{{$ricorso->telefono}}</span></p>
                    <p class="pl-0 "><strong>Cap:</strong><span>{{$ricorso->cap}}</span></p>
                    <p class="pl-0 "><strong>citta:</strong><span>{{$ricorso->citta}}</span></p>
                    <p class="pl-0 "><strong>Pec:</strong><span>{{$ricorso->pec}}</span></p>
                    <p class="pl-0 "><strong>Esito:</strong><span>{{$ricorso->esito}}</span></p>
                    <p class="pl-0 "><strong>Importo Atto:</strong><span>{{$ricorso->importo_atto}}</span></p>
                    <p class="pl-0 "><strong>Legale della controparte:</strong><span>{{$ricorso->legale_controparte}}</span></p>
                </section>
                <section class="wrapper">
                    <h5>Si prega di non rispondere a questa email in quanto inoltrata da una casella di posta di servizio, non abilitata a ricevere messaggi!</h5>
                </section>
            </section>
        </main>
    </body>
</html>
