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
              <div>
                Questo è il link per risettare la password: <a href="http://172.16.6.43//reset/{{$token}}">here</a>
              </div>
                <section class="wrapper">
                    <h5>Si prega di non rispondere a questa email in quanto inoltrata da una casella di posta di servizio, non abilitata a ricevere messaggi!</h5>
                </section>
            </section>
        </main>
    </body>
</html>
