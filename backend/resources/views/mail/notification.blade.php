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
                box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);
                font-family: sans-serif;
                min-width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .mail-mail {
              padding: 20px;
              width: 90%;
              border: 1px solid #272D36;
              border-radius: 5px;
            }

            .wrapper {
                border-top: 1px solid #e1e1e1;
                padding-top: 3px;
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
                    <h3>Questa è un email di notifica per ricordale che le è stato assegnato questo Ricorso!</h3>
{{--                     <img src="{{ $message->embed(public_path().'/photos/logo.jpg"') }} ">
 --}}                    <h4>Ricorso: <span>{{ $ricorso->numero_protocollo_interno }}</span></h4>
                    <p class="pl-0"><strong>Nominativo:</strong>  <span>{{$ricorso->nominativo}}</span></p>
                    <p class="pl-0 "><strong>Email:</strong>       <span>{{$ricorso->mail}}</span></p>
                    <p class="pl-0 "><strong>Indirizzo:</strong>    <span>{{$ricorso->indirizzo}}</span></p>
                    <p class="pl-0 "><strong>Partita iva:</strong>  <span>{{$ricorso->cf_piva}}</span></p>
                    <p class="pl-0 "><strong>Telefono:</strong>     <span>{{$ricorso->telefono}}</span></p>
                    <p class="pl-0 "><strong>Cap:</strong>          <span>{{$ricorso->cap}}</span></p>
                    <p class="pl-0 "><strong>citta:</strong>        <span>{{$ricorso->citta}}</span></p>
                    <p class="pl-0 "><strong>Pec:</strong>          <span>{{$ricorso->pec}}</span></p>
                    <p class="pl-0 "><strong>Esito:</strong>        <span>{{$ricorso->esito}}</span></p>
                    <p class="pl-0 "><strong>Importo Atto:</strong> <span>{{$ricorso->importo_atto}}</span></p>
                    <p class="pl-0 "><strong>Legale della controparte:</strong><span>{{$ricorso->legale_controparte}}</span></p>
                </section>
                <section class="wrapper">
                    <h5>Si prega di non rispondere a questa email in quanto inoltrata da una casella di posta di servizio, non abilitata a ricevere messaggi!</h5>
                </section>
            </section>
        </main>
    </body>
</html>