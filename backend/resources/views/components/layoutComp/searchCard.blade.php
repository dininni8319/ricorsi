@foreach ($ricorsi as $ricorso)
<section class="shadow bg-white border border-1 col-12 col-md-8 mt-3 mx-0 px-0">
        <section class="card-header-custom py-2 fw-bold custom-card-class text-center">Ricorsi</section>
      <div class="row px-2">
        <div class="col"><b>Numero del Ricorso</b></div>
        <div class="col"> <b>Tipologia dell'atto</b></div>
        <div class="col"><b>Nominativo</b> </div>
        <div class="col"><b>Oggetto del ricorso</b></div>
        <div class="col"><b>Tributo</b></div>
        <div class="col"><b> Data presentazione ricorso </b></div>
        <div class="col"> <b> Creato il </b></div>
      </div>

      <div class="row px-2">
        <div class="col">{{$ricorso->numero_ricorso}}</div>
        <div class="col">{{$ricorso->tipologia_atto}}</div>
        <div class="col">{{$ricorso->nominativo}}</div>
        <div class="col">{{$ricorso->oggetto_ricorso}}</div>
        <div class="col">{{$ricorso->tributo}}</div>
        <div class="col">{{date('d-m-Y', strtotime($ricorso->data_presentazione_ricorso))}}</div>
        <div class="col">{{date('d-m-Y', strtotime($ricorso->created_at))}}</div>
      </div>

      <div class="row pt-2 wrapper">
        
          <form method="POST" action="{{ route('delete.ricorso', [$ricorso->id]) }}" class="mb-2 col-12 col-md-6">
            {{ csrf_field() }}
            {{ method_field('DELETE') }}
            <div class="col">
          </form>

          <div class="col-12 col-md-6">
        
            <a class="px-2 text-primary" href="{{ url('/work_flow/'.$ricorso->id) }}">Aggiorna il Ricorso</a>
            <a class="px-2 text-primary" href="{{ route('detail.ricorso', compact('ricorso')) }}">Vai ai dettagli</a>
          </div>

      </div>
      @if ($ricorso->fasi->last()->fase ?? '')
      
        <div class="alert alert-success col-12 col-md-5" id="inserita"> 
          <span style="font-size:14px" class="text-center">Fase inserita : 

            @switch($ricorso->fasi->last()->fase ?? '')
            @case(1)
            <span class="faseAttiva">Mediazione</span>
            @break

            @case(2)
            <span class="faseAttiva">Ricorso 1° Grado</span>
            @break

            @case(3)
            <span class="faseAttiva">Ricorso 2° Grado</span>
            @break

            @case(4)
            <span class="faseAttiva">Cassazione</span>
            @break 

            @default
            <span id="nessuna_mediazione">Nessuna Fase inserita!</span> 
            @endswitch
          
          </span> 
        </div>

      @else   

          <div class="row">
              <div class="col-8"> 
                <div class="alert alert-danger" role="alert" id="nonInserita">
                  <span style="font-size:14px">Attenzione! Ricordati di assegnare una fase!</span>  
                </div> 
                </div>
                <div class="col-3">  <form method="POST" action="{{ route('delete.ricorso', [$ricorso->id]) }}" class=" py-2 mb-4">
                  {{ csrf_field() }}
                  {{ method_field('DELETE') }}
                  <div class="col">
                  <button type="submit" class="btn-darkerre justify-content-end">Cancella questo ricorso</button>

                  <script>
                      function myFunction() {
                          alert("Hai cancellato questo workflow")
                      }
                  </script>
                </form> 
              </div>
          </div>
      @endif 
      @endforeach 
  </section>     
                        