@extends('layouts.app')

@section('content')
   <h2 class="text-center">Hai cercato {{ $query }}</h2>
   <section class="justify-content-center table-responsive p-5 col-md-10 ">
    @foreach ($cartoline as $cartolina)
      
        <div class="card-header-custom d-flex py-2 fw-bold px-2 justify-content-center">Cartolina</div>
        <section class="shadow mb-3 bg-white p-2 border border-2 ">
            <div class="row">
              <div class="col"><b>Mandante:</b> <p> {{$cartolina->descrizione_mandante}} </p></div>
              <div class="col"> <b>Nome e cognome :</b> <p> {{$cartolina->nome_cognome_debitore}} </p></div>
              <div class="col"><b>C.F/P.I:</b> <p> {{$cartolina->cf_piva_debitore}} </p></div>
              <div class="col"><b>Data Notifica:</b> <p>{{$cartolina->data_notifica}} </p></div>
              <div class="col"><b>NDG</b> <p> {{$cartolina->ndg}} </p></div>
              <div class="col"><b>Esito:</b><p>{{$cartolina->esito_notifica}} </p></div>
              <div class="col"><b>Dettaglio file:</b><p><a href="{{Storage::url($cartolina->path_file)}}" target="blank"> {{Str::limit($cartolina->nome_file , 10)}}</a></p></div>
            </div>
            <div class="row pt-2 wrapper">
              
                <form method="POST" action="{{-- {{ route('delete.ricorso', [$ricorso->id]) }} --}}" class="mb-2 col-12 col-md-6">
                  {{ csrf_field() }}
                  {{ method_field('DELETE') }}
                  <div class="col">
                </form>

                   
                  </div>

                  <div class="row">
                    <div class="col">
                      <a class="px-2 text-primary" href="{{  url('/cartolineForm/'.$cartolina->id) }}">Aggiorna la Cartolina</a>
                    </div>
                    <div class="col-6">
                      <a class="px-2 text-primary" href="{{ url('/detailCartoline/'.$cartolina->id) }}">Vai ai dettagli</a>
                    </div>
                    <div class="col">
                      <a href="{{ url()->previous() }}"
                        class="btn btn-dark md-3">
                        Torna indietro      
                    </a>
                    </div>
                </div>

            </div>
            
        </section>  
           
        @endforeach
</section>
@endsection

