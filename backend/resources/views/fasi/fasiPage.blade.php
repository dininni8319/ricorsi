  @extends('layouts.app')
      @section('content')
      
      <x-layoutComp.searchbar />
      @if ($fasi && sizeof($fasi) > 0)
        <h1 class="text-center my-4">Questa pagina ti fa vedere tutte fasi delle varie pratiche</h1>
      
      @foreach ($fasi as $fase)
          <div class="container mt-3">
            <div class="row col-md-11">
              <div class="card-header-custom w-100 py-2 fw-bold text-center">Informazioni tax unit</div>
              <section class="table-responsive shadow mb-3 bg-white p-2">
                
                <table class="table table-sm table-borderless bg-white w-90 p-5">
                      <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Id Ricorso</th>
                            <th scope="col">Stato Fase</th>
                            <th scope="col">Controded. Tax Unit</th>
                            <th scope="col">Presentato da</th>
                            <th scope="col">Sede</th>
                            <th scope="col">Esito sentenza</th>
                            <th scope="col">Esito Definitivo della sentenza</th>
                          </tr>
                      </thead>

                      <tbody>
                          <tr>
                            <th scope="row"></th>
                            <td>{{$fase->ricorsi_id}}</td>
                            <td>
                                @switch($fase->fase)
                                  @case(1)
                                      Mediazione
                                      @break
                                  @case(2)
                                      Ricorso 1°Grado
                                  @break
                                  @case(3)
                                      Ricorso 2°Grado
                                      @break
                                  @case(4)
                                      Cassazione
                                      @break
                                  @default
                                      Not found
                                @endswitch 
                            </td>
                            <td>{{$fase->contro_deduzioni_tax_unit}}</td>
                            <td>{{$fase->presentato}}</td>
                            <td>{{$fase->sede}}</td>
                            <td>{{$fase->esito}}</td>
                            <td>{{$fase->esito_definitivo}}</td>
                          </tr>
                        </tbody>
                    
                      </table>
                      <section class="d-md-flex justify-content-between">
                        
                          <div class="col-11 col-md-5">
                            <a class="px-1 text-primary text-end"  href=" {{ route('update.fase.page', compact('fase')) }}">Aggiorna lo stato della pratica</a>
                            <a class="px-1 text-primary text-end" href="{{ route('detail.fase', compact('fase')) }}">Dettaglio</a> 
                          </div>
                          <div class="col-11 col-md-5">
                              <form method="POST" action="{{ route('delete.fase', [$fase->id]) }}">
                                {{ csrf_field() }}
                                {{ method_field('DELETE') }}
                          
                                <button class="btn btn-darker px-3 w-20 my-2"onclick=" myFunction ()"><i class="fa-solid fa-trash-can pe-1 text-white"></i>Cancella questa tax unit</button>
                            
                                <script>
                                      function myFunction() {
                                          alert("Hai cancellato questo id ricorso")
                                      }
                                </script>
                          
                              </form>  
                          </div>
                  
                      </section>
                    </section>   
              
          </div>
    
      </div>
          
            @endforeach

          @else
            <div class="row justify-content-center py-3">
              <h3 class="text-center mb-3">Non è stata creata nessuna Fase!</h3>
              <img src="photos\icon-done.png" alt="done" class="icon-done"/>
            </div>
        @endif
  @endsection 