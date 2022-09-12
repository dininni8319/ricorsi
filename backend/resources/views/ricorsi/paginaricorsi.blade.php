@extends('layouts.app')
  @section('content')
    <x-layoutComp.searchbar />
    
    <section class="d-flex justify-content-center">
        <section class="col-11 col-md-8">
          <a class="navbar-brand" href="{{ url('/work_flow') }}"><h5 class="text-dark text-decoration-underline text-center my-3"> Crea un nuovo Ricorso</h5></a>
          @if($ricorsi && sizeof($ricorsi) > 0)
              <h1 class="text-center fw-bolder py-2">Ricorsi</h1>
              <x-layoutComp.card :ricorsi="$ricorsi"></x-layoutComp.card>
          @else
          <div class="row justify-content-center pb-5">
            <h3 class="text-center mb-3">Non è stato creato nessun Ricorso!</h3>
            <img src="photos\icon-done.png" alt="done" class="icon-done"/>
          </div>
          @endif
        </section>
    </section> 

@endsection