@foreach ($ricorsi as $ricorso)

<section class="card-header-custom d-flex py-2 fw-bold px-3 justify-content-center custom-card-class">Ricorsi</section>
  <section class="shadow mb-3 bg-white p-2 border border-1">
      <div class="row">
        <div class="col"><b>Numero del Ricorso</b></div>
        <div class="col"> <b>Tipologia dell'atto</b></div>
        <div class="col"><b>Nominativo</b> </div>
        <div class="col"><b>Oggetto del ricorso</b></div>
        <div class="col"><b>Tributo</b></div>
        <div class="col"><b> Data presentazione ricorso </b></div>
        <div class="col"> <b> Creato il </b></div>
      </div>

      <div class="row">
        <div class="col">{{$ricorso->numero_ricorso}}</div>
        <div class="col">{{$ricorso->tipologia_atto}}</div>
        <div class="col">{{$ricorso->nominativo}}</div>
        <div class="col">{{$ricorso->oggetto_ricorso}}</div>
        <div class="col">{{$ricorso->tributo}}</div>
        <div class="col">{{date('d-m-Y', strtotime($ricorso->data_presentazione_ricorso))}}</div>
        <div class="col">{{date('d-m-Y', strtotime($ricorso->created_at))}}</div>
      </div>

      <div class="row justify-content-between pt-2">
            
            <div class="col-12 col-md-5">
              <a class="px-1 text-primary" href="{{ url('/work_flow/'.$ricorso->id) }}">Aggiorna il Ricorso</a>
              <a class="px-1 text-primary" href="{{ route('detail.ricorso', compact('ricorso')) }}">Vai ai dettagli</a>
            </div>

            <div class="col-md-5">
              <form method="POST" action="{{ route('delete.ricorso', [$ricorso->id]) }}" class="py-1 mb-4">
                {{ csrf_field() }}
                {{ method_field('DELETE') }}
                <div class="col">
                <button type="submit" class="btn-darkerre justify-content-end "style="12px"><i class="fa-solid fa-trash-can icon-custom pe-1 text-white" style="12px"></i>Cancella questo Ricorso</button>
  
                <script>
                    function myFunction() {
                        alert("Hai cancellato questo workflow")
                    }
                </script>
              </form> 
            </div>

      </div>
      @if ($ricorso->fasi->last()->fase ?? '')
      <div class="alert alert-success col-11 w-80 mx-2" id="inserita"> 
      
          <span style="" class="text-center">Fase inserita : 

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
              <div class="col-12"> 
                <div class="alert alert-danger" role="alert" id="nonInserita">
                  <span style="">Attenzione! Ricordati di assegnare una fase!</span>  
                </div> 
              </div>
            
          </div>
      @endif 
  </section>     
@endforeach 
                             
                                