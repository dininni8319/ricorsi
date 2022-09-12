@extends('layouts.app')

@section('content')
<div class="container">
  <section class="mb-3">
    <div class="row justify-content-end mb-4">
      <div class="col-md-9">
          <form class="form-inline my-2 my-lg-0" action=" {{ route('search.cartoline') }}" method="GET">
              <input class="form-controller mr-sm-2 bg-white" name="query" type="text" placeholder="Ricerca" aria-label="Ricerca" required>
              <button class="my-2 py-2 my-sm-0 btn-serch" type="submit">Ricerca</button>
          </form>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-11 col-md-5 bg-white p-2 shadow mb-4">
        <h3>Carica il file Csv</h3> 
        <p> {{ session('status')}}</p>
        <form action="{{route('import.cartolina')}}" method="post" enctype="multipart/form-data" >
            @csrf
           <label for="csv_file">File Csv</label>
          
           <input type="file" name="csv_file" id="csv_file" class="btn my-2" />
           <button type="submit" class="btn btn-green"  >Caricamento</button>
  
           @error('csv_file')
               <p class="text-danger">{{ $message }}</p>
           @enderror
         
          </form>

    </div>
    <div class="row">
      </div>
    </div>

  </section>
  <div>
    Esporta in formato CSV
    <a class="btn btn-dark float-center" href="{{ route('export.cartolina') }}">Export</a>
  </div>
    <h1 class="text-center fw-bold py-1">Esiti cartoline</h1>
    @if ($cartoline && sizeof($cartoline) > 0)
    @foreach ($cartoline as $cartolina)
      <section class="card-header-custom d-flex py-2 fw-bold px-3 justify-content-center custom-card-class">Cartoline</section>
        <section class="shadow mb-3 bg-white p-2 border border-2">
            <div class="row">
              <div class="col"><b>Mandante:</b> <p> {{$cartolina->descrizione_mandante}} </p></div>
              <div class="col"> <b>Nome e cognome :</b> <p> {{$cartolina->nome_cognome_debitore}} </p></div>
              <div class="col"><b>C.F/P.I:</b> <p> {{$cartolina->cf_piva_debitore}} </p></div>
              <div class="col"><b>Data Notifica:</b> <p>{{$cartolina->data_notifica}} </p></div>
              <div class="col"><b>NDG</b> <p> {{$cartolina->ndg}} </p></div>
              <div class="col"><b>Esito:</b><p>{{$cartolina->esito_notifica}} </p></div>
              <div class="col"><b>Chiave Pratica:</b><p>{{$cartolina->chiave_pratica}} </p></div>
              <div class="col"><b>Dettaglio file:</b><p><a href="{{Storage::url($cartolina->path_file)}}" target="blank"> {{Str::limit($cartolina->nome_file , 10)}}</a></p></div>
            </div>
            <div class="row pt-2 wrapper">
              
                <form method="POST" action="{{-- {{ route('delete.ricorso', [$ricorso->id]) }} --}}" class="mb-2 col-12 col-md-6">
                  {{ csrf_field() }}
                  {{ method_field('DELETE') }}
                  <div class="col">
                </form>

                <div class="col-12 col-md-6">
              
                  <a class="px-2 text-primary" href="{{  url('/cartolineForm/'.$cartolina->id) }}">Aggiorna la Cartolina</a>
                  <a class="px-2 text-primary" href="{{ url('/detailCartoline/'.$cartolina->id) }}">Vai ai dettagli</a>
                </div>

            </div>
            
      </section>     
    @endforeach 

    @else
      <div class="row justify-content-center py-3">
        <h3 class="text-center mb-2 text-dark">Non è stata creata nessuna Cartolina!</h3>
        <img src="photos\icon-done.png" alt="done" class="icon-done"/>
      </div>
    @endif
</div>
@endsection 