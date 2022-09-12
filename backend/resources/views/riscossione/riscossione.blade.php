  @extends('layouts.app')
  @section('content')
  
  <div class="container">
  <div class="row">
    
    {{-- <div class="col-8 justify-content-center"><div id="reactapp" class="line-chart"></div></div> --}}
    <div><div id="AreaChart" class="line-chart"></div></div>
  
  </div>
  </div>
  <div class="container">
    Esporta in formato CSV
    <a class="btn btn-dark float-center" href="{{ route('export.lotti') }}">Export</a>
  </div>
</div>
  <div class="row p-2 d-md-flex justify-content-evenly">
    <section>
      <div class="row justify-content-end">
        <div class="col-md-9 mb-3">
            <form class="form-inline my-2 my-lg-0" action=" {{ route('search.riscossione') }}" method="GET">
                <input class="form-controller mr-sm-2 bg-white" name="query" type="text" placeholder="Ricerca" aria-label="Ricerca" required>
                <button class="my-2 py-2 my-sm-0 btn-serch" type="submit">Ricerca</button>
            </form>
        </div>
      </div>
    </section>

      <div class="col-12 col-md-2 p-4 ">
        <div class="bg-backgroud-3 ">

          <div class="b-radius-card card-category d-flex flex-column align-items-center pt-2">
            
            <h6 class=>Notifiche positive </h6>

            <p id="sum" class="p-category">{{-- {{$riscossione->$notifiche_positive}} --}}</p>

            <p id="cartoline" class="p-category">{{ $notifichePositive }}</p>

          </div>
          <div class="b-radius-card card-category d-flex flex-column align-items-center">
            
            <h6 class=>Notifiche negative </h6>
            <p id="cartoline" class="p-category">{{$notificheNegative}}</p>
          
          </div>
          <div class="b-radius-card card-category d-flex flex-column align-items-center">
          
            <h6 class=>Notifiche da rinotificare </h6>
            <p id="cartoline" class="p-category">{{$notificheNotificare}}</p>
          </div>

          <div class="b-radius-card card-category d-flex flex-column align-items-center">
            
            <h6 class=>Cartoline di ritorno </h6>
            <p id="cartoline" class="p-category">{{$notificheRitorno}}</p>
          </div>
    
            <div class="b-radius-card card-category d-flex flex-column align-items-center">            
              <h6>Atti annullati</h6>
              <p  id="sport" class="p-category">{{$notificheAnnullati}}</p>
            </div>
        
            <div class="b-radius-card card-category d-flex flex-column align-items-center">
              
              <h6>Atti rettificati</h5>
              <p id="elettronica" class="p-category">{{$notificheRettificati}}</p>
            </div>  
        </div>

      </div>

    
      <div class="col-12 col-md-9">

        <h1 class="fw-bold text-center my-2">Lotti di spedizione</h1>
        <div class="row">

          
        </div>
     
        @if ($riscossioni && sizeof($riscossioni) > 0)
     
          @foreach ($riscossioni as $riscossione)
              <section class="card-header-custom d-flex py-2 fw-bold px-3 justify-content-center custom-card-class">Riscossioni</section>
           
              <section class="shadow mb-3 bg-white p-2 border border-1">
                  <div class="row">
                    {{-- <div class="col"><b>Ente:</b> <p><a class="col">{{$riscossione->ente}}</a> </p></div>
                    <div class="col"> <b>Nome e cognome:</b><p><a class="col">{{$riscossione->nome_cognome}}</a> </p></div>
                    <div class="col"><b>Oggetto dell'affadimento:</b> <a class="col">{{$riscossione->oggetto_affidamento}}</a></div> --}}
                    <div class="col"><b>Descrizione spedizione:</b><p><a class="col">{{$riscossione->descrizione_spedizione}}</a></p></div>
                    <div class="col"><b>Entrata tributo:</b><p><a class="col">{{$riscossione->entrata_tributo}}</a></p></div>
                    <div class="col"><b>Tipologia spedizione:</b><p><a class="col">{{$riscossione->tipologia_spedizioni}}</a></p></div>
                    <div class="col"><b> Data consegna al service</b><p><a class="col">{{$riscossione->data_consegna_service}}</a></p></div>
                    <div class="col"><b>Tipologia documenti:</b><p><a class="col">{{$riscossione->tipologia_documenti}}</a></p></div>
                    
                
                  </div>
                  <section ><h5 class="text-center fw-bold">Notifiche </h5></section>
                  <div class="row">
                    {{-- <div class="col"><b>Ente:</b> <p><a class="col">{{$riscossione->ente}}</a> </p></div>
                    <div class="col"> <b>Nome e cognome:</b><p><a class="col">{{$riscossione->nome_cognome}}</a> </p></div>
                    <div class="col"><b>Oggetto dell'affadimento:</b> <a class="col">{{$riscossione->oggetto_affidamento}}</a></div> --}}
                    <div class="col"><b>Notifiche positive:</b><p><a class="col">{{$riscossione->notifiche_positive}}</a></p></div>
                    <div class="col"><b>Notifiche negative:</b><p><a class="col">{{$riscossione->notifiche_negative}}</a></p></div>
                    <div class="col"><b>Notifiche da rinotificare:</b><p><a class="col">{{$riscossione->numero_atti_rinotificare}}</a></p></div>
                    <div class="col"><b> Cartoline di ritorno</b><p><a class="col">{{$riscossione->cartoline_ritorno_inserite}}</a></p></div>
                    <div class="col"><b>Atti Annullati:</b><p><a class="col">{{$riscossione->nr_atti_annullati}}</a></p></div>
                    <div class="col"><b>Atti rettificati:</b><p><a class="col">{{$riscossione->atti_rettificati}}</a></p></div>
                
                  </div>
                  <div class="row pt-2 wrapper">
                    {{--  <form method="POST" action="{{ route('delete.ricorso', [$riscossione->id]) }}" class="mb-2 col-12 col-md-6">
                        {{ csrf_field() }}
                        {{ method_field('DELETE') }}
                        <div class="col">
                      </form> --}}
                      <div class="col-12 col-md-6">
                        <a class="px-2 text-primary" href="{{ url('/form_ricossione/'.$riscossione->id) }}">Aggiorna la Riscossione</a>
                        <a class="px-2 text-primary" href="{{ url('/detail_riscossione/'.$riscossione->id) }}">Vai ai dettagli</a>
                      </div>
            
                  </div>
              </section>     
          @endforeach  
        @else
          <div class="row justify-content-center py-2">
            <h3 class="text-center mb-3 text-dark">Non è stata creata nessuna Riscossione!</h3>
            <img src="photos\icon-done.png" alt="done" class="icon-done"/>
          </div>
            
        @endif
     </div>

  </div>

      {{--  <div class="container">
      <div class="row">
            <h1 class="text-center fw-bolder .tc-dark-white">Riscossioni</h1>
            <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title text-center fw-bold">Notifiche positive</h5>
                      <p class="card-text">Qui puoi vedere tutte le notifiche andate a buon fine </p>
                      <a href="#" class="btn btn-green ">Vai alle notifiche positive</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-center fw-bold">Notifiche negative</h5>
                      <p class="card-text">Queste riscossioni non sono andate a buon fine</p>
                      <a href="#" class="btn btn-green">Vai alle notifiche negative</a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        
    </div> --}}

{{--     <div class="container">
        <div class="row">
          
              <h1 class="text-center fw-bolder">Atti:numero atti</h1>
              <div class="row">
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title text-center fw-bold">Atti da notificare</h5>
                        <p class="card-text">
                          Qui puoi vedere gli atti da notificare
                              </p>
                        <a href="#" class="btn btn-green ">Vai agli atti</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                          <h5 class="card-title text-center fw-bold">Atti rettificati</h5>
                        <p class="card-text">Qui ci sono gli atti già notificati</p>
                        <a href="#" class="btn btn-green">Vai agli atti rettificati</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                          <h5 class="card-title text-center fw-bold">Atti Annullati</h5>
                        <p class="card-text">Qui puoi vedere gli atti annullati</p>
                        <a href="#" class="btn btn-green">Vai agli atti annullati</a>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        
      </div> --}}
    @endsection