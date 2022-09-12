@extends('layouts.app')
@section('content')
    
    <x-layoutComp.searchbar />
      
    <div class="row py-3"> 
        <h1 class="text-center">Aggiorna la Fase</h1>
    </div>
     
    <form action='{{route('update.fase', compact('fase'))}}' method="POST" class="d-md-flex justify-content-center"  enctype="multipart/form-data">
        @csrf
            <section class="d-md-flex flex-column justify-content-center mb-5 class-custom-form-edit bg-white col-12 col-md-9 p-5 shadow">
                
                <div class="co-12 text-start">
                    <h3 class="mb-3 fw-bold text-decoration-underline">Dati relativi a Tax unit 
                    </h3>
                </div>
                <section class="d-md-flex justify-content-between wrapper col-12">
                
                    <div class="mb-3 col-12 col-md-3 pe-2">
                        <label>Stato fase</label>
                        <select name="fase" id="" class="form-control mt-2">
                            <option value="mediazione">Mediazione</option>
                            <option value="ricorso_1g">Ricorso 1°Grado</option>
                            <option value="ricorso_2g">Ricorso 2°Grado</option>
                            <option value="cassazione">Cassazione</option>
                        </select>
                    </div>
                
                    <div class="mb-3 col-12 col-md-3 pe-2">
                        <label for="exampleInputTitle1" class="form-label">
                        Controdeduzione Tax Unit
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputTitle1"
                            aria-describedby="emailHelp"
                            name='contro_deduzioni_tax_unit'
                            value="{{$fase->contro_deduzioni_tax_unit}}" 
                            required
                        />
                    </div>
                
                    <div class="mb-3 col-12 col-md-3 pe-2">
                        <label for="exampleInputTitle1" class="form-label">
                            Presentato da 
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputTitle1"
                            aria-describedby="emailHelp"
                            name="presentato"
                            value="{{$fase->presentato}}"
                            required
                        />
                    </div>
                    <div class="mb-3 col-12 col-md-3">
                        <label for="exampleInputTitle1" class="form-label">
                            Controdeduzione ufficio legale
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputTitle1"
                            aria-describedby="emailHelp"
                            name="contro_deduzioni_uff_legale"
                            value="{{$fase->contro_deduzioni_uff_legale}}"
                            required
                        />
                    </div>
                
            </section>
                
            <section class="d-md-flex justify-content-between align-items-center col-12 wrapper ">
                    <div class="mb-3 col-12 col-md-3 pe-2">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"
                        >
                            Data presentazione Ricorso 
                        </label>
                        <input
                            type="date"
                            class="form-control"
                            name="data_presentazione"
                            value="{{$fase->data_presentazione}}" 
                            required
                    />
                    </div>

                    <div class="mb-3 col-12 col-md-3 pe-2">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"
                        >
                            Data Convocazione
                        </label>
                        <input
                            type="date"
                            class="form-control"
                            name="data_convocazione"
                            value="{{$fase->data_convocazione}}"
                            required
                        />
                    </div>

                    <div class="mb-3 col-12 col-md-3 pe-2">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"
                        >
                            Data Deposito
                        </label>
                        <input
                            type="date"
                            class="form-control"
                            name="data_deposito"
                            value="{{$fase->data_deposito}}"
                            required
                        />
                    </div>
                        
                    <div class="mb-3 col-12 col-md-3">
                        <label for="exampleInputTitle1" class="form-label">
                            Sede
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputTitle1"
                            aria-describedby="emailHelp"
                            name="sede"
                            value="{{$fase->sede}}"
                            required
                        />
                    </div>

                </section>
                <section class="d-md-flex align-items-center justify-content-between mb-5 py-md-3 col-12 wrapper">
                    <div class="col-12 col-md-5">
                        <h3 class="text-start mb-3 fw-bold text-decoration-underline">Esiti della Sentenza</h3>
                    </div>
    
                    <div class="mb-3 col-12 col-md-3 pe-3"> 
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"
                        >
                            Esito Sentenza
                        </label>
                        <select name="esito" class="form-control" required>
                            <option value="accolto">Accolto</option>
                            <option value="accolto parz">Accolto Parz</option>
                            <option value="rigettato">Rigettato</option>
                            <option value="cessata materia del contendere">Cessata materia del contendere</option>
                        </select>
                    </div>
                    
                    <div class="mb-3 col-12 col-md-4">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"   
                        >Esito Definitivo Relativo alla Sentenza</label>
                        <select name="esito_definitivo" class="form-control" required>
                            <option value="Accoglimento totale">Accoglimento totale di quanto richiesto dal contribuente</option>
                            <option value="Accoglimento parziale">Accoglimento parziale di quanto richiesto dal contribuente</option>
                            <option value="Rigetto">Rigetto di quanto richiesto dal contribuente</option>
                            <option value="Proposta Convocazione">Proposta convocazione</option>
                        </select>

                    </div>
                </section>

                <section class="d-md-flex justify-content-between align-items-start mb-5 py-md-3 col-12 wrapper"> 
                    <div class="col-12 col-md-3">
                        <h3 class="text-start mb-3 fw-bold text-decoration-underline">
                          Documenti della sentenza 
                        </h3>
                    </div> 

                    <div class="mb-3 col-12 col-md-2">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"
                        >
                            Data Deposito Sentenza
                        </label>
                        <input
                            type="date"
                            class="form-control"
                            name="data_deposito_sentenza"
                            value="{{$fase->data_deposito_sentenza}}"
                            required
                        />
                    </div>
                
                    <div class="mb-3 col-12 col-md-2">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"
                        >
                            Data Notifica Sentenza
                        </label>
                        <input
                            type="date"
                            class="form-control"
                            name="data_notifica_sentenza"
                            value="{{$fase->data_notifica_sentenza}}"
                            required
                        />
                    </div>

                    <div class="col-12 col-md-3 me-2">
                        
                        <input type="file" class="form-control" id="customFile" name="nome_file[]" multiple/>
                        <select id="Esito" class="form-control" name="tipologia_file" required>
                          
                      {{--     @if (!$existes)
                           
                             <x-layoutComp.modalComponent1 />
                          @else --}}
                              <x-layoutComp.modalComponent1 />
                              <option value="Sentenza_I_Grado">Sentenza di 1° grado</option>
                              <option value="01_Ricorso">Documento Sentenza</option>
                              <option value="19_Varie">Varie</option>
                          {{-- @endif --}}
                        </select>
    
                    </div>
                </section>

                <section class="d-md-flex align-items-end justify-content-start col-12">

                    <div class="col-12 col-md-3 me-2 pe-2">
                        <label for="exampleInputTitle1" class="form-label">
                            Motivazione 
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputTitle1"
                            aria-describedby="emailHelp"
                            name="motivazione"
                            value="{{$fase->motivazione}}"
                            required
                        />
                    </div>

                    <div class="col-12 col-md-3 pe-2">
                        <label for="exampleInputTitle1" class="form-label">
                            Spese Legali €
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputTitle1"
                            aria-describedby="emailHelp"
                            name="spese"
                            value="{{$fase->spese}}"
                            required
                        />
                    </div>
                    
                    <div class="col-12 col-md-6 d-md-flex justify-content-end">
    
                        <button class="btn btn-dark px-5"onclick="myFunction()">Inserisci</button>
                        <script>
                            function myFunction() {
                                alert("Hai inserito correttamente questo id fase")
                            }
                        </script>
                    </div>
                </section>
                
                
            </section>
        </form>          
    @endsection
