@extends('layouts.app')
    @section('content')

        @if (session('message2'))

        <div class="alert alert-danger"> 

        {{ session('message2') }} 
        </div> 

        @else 
            <div class="alert alert-success"> 

            {{ session('message') }} 
            </div> 
        @endif

        <section class="container">
            <div class="row">
                        <div class="col-11 col-md-5 bg-white shadow mx-1 p-3">
                            <h1 class="text-center fw-bold">Tax Unit</h1>
                                <strong>Id Ricorso:</strong>                               {{$fase->ricorsi_id}} </p> 
                                <hr />
                                <p class="pl-0 "><strong>Stato Fase:</strong>                                  
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
                                </p>
                                <hr />
                                <p class="pl-0"><strong>Controdeduzione Tax Unit:</strong>                     {{$fase->contro_deduzioni_tax_unit}}</p>  
                                <hr />
                                <p class="pl-0"><strong>Presentato da:</strong>                                {{$fase->presentato}} </p>
                                <hr />
                                <p class="pl-0"><strong>Data presentazione:</strong>                           {{$fase->data_presentazione}}</p>
                                <hr />
                                <p class="pl-0"><strong>Data convocazione:</strong>                            {{$fase->data_convocazione}}</p>
                                <hr />
                                <p class="pl-0"><strong>Data deposito:</strong>                                {{$fase->data_deposito}}  </p>
                                <hr />
                                <p class="pl-0"><strong>Sede:</strong>                                         {{$fase->sede}} </p>
                                <hr />
                                <p class="pl-0"><strong>Esito sentenza:</strong>                                        {{$fase->esito}} </p>
                                <hr />
                                <p class="pl-0"><strong>Esito definitivo della sentenza:</strong>                             {{$fase->esito_definitivo}} </p>
                                <hr />
                                <p class="pl-0"><strong>Motivazione:</strong>                                  {{$fase->motivazione}}<p>  
                                <hr />
                                <p class="pl-0"><strong>Spese:</strong>                                        {{$fase->spese}}</p> 
                                <div class="d-flex py-2">
                                    <a href="{{ url()->previous() }}"
                                    class="btn btn-dark">   
                                        Torna indietro      
                                    </a>
                                </div> 
                            </div>
                            <div class="col-11 col-md-5 bg-white shadow mx-1 pt-3">
                                <div class="card-body">
                                    <h3 class="card-title text-center fw-bold">Documenti relativi alla sentenza e alla pratica in relazione allo stato della fase</h3>
                                        <div class="row justify-content-around py-5">
                                
                                            @if ($documents != null)
                        
                                                @foreach ($documents as $document)
                                            
                                                    <p class="pl-0 "><strong>Tipologia file:</strong> {{$documents[0]->tipologia_file}}</p> 
                                        
                                                    <div class="scroll d-flex flex-column align-items-center class-height-doc py-5">
                                                        @foreach ($document->files as $file) <p></p>
                                                            <div class="card p-1" style="width: 18rem;">
                                                                <div class="card-body">
                                                                    <p class="pl-0 "><strong>Nome File:</strong> 
                                                                    <a href="{{Storage::url($file->path)}}" target="blank"> {{$file->nome_file}}</a>
                                                                    <hr />
                                                                    <p class="pl-0 "><strong>Creato:</strong> {{$file->created_at}}<p>  
                                                                    <hr />
                                                                </div>
                                                                <form method="POST" action="{{ route('delete.file', [$file]) }}" class="mb-2">
                                                                    {{ csrf_field() }}
                                                                    {{ method_field('DELETE') }}
                                                            
                                                                      
                                                                    <div class="d-flex justify-content-center">
                                                                        <button type="submit" class="btn-darker py-2"> <i class="fa-solid fa-trash pe-1"></i>Cancella questo Documento</button>
                                                                    </div>
                                                                </form>
                                                            </div>

                                                        @endforeach 
                                                    </div>

                                                @endforeach
                                            @endif 
                                        </div>
                            
                                </div>
                        </div>
                </div>
            </div>
        </section> 
    @endsection
