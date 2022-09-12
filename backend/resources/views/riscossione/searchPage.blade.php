@extends('layouts.app')

@section('content')
<div class="row justify-content-center">
   <h2 class="text-center">Hai cercato {{ $query }}</h2>
    
      @foreach ($riscossioni as $riscossione)
         <section class="shadow bg-white border border-1 col-12 col-md-6 mt-3 mx-0 px-0">
            <section class="card-header-custom py-2 fw-bold custom-card-class text-center">Riscossioni</section>
            <div class="container">
            <div class="row">
               {{-- <div class="col"><b>Ente:</b> <p><a class="col">{{$riscossione->ente}}</a> </p></div>
               <div class="col"> <b>Nome e cognome:</b><p><a class="col">{{$riscossione->nome_cognome}}</a> </p></div>
               <div class="col"><b>Oggetto dell'affadimento:</b> <a class="col">{{$riscossione->oggetto_affidamento}}</a></div> --}}
               <div class="col"><b>Descrizione spedizione:</b><p><a class="col">{{$riscossione->descrizione_spedizione}}</a></p></div>
               <div class="col"><b>Entrata tributo:</b><p><a class="col">{{$riscossione->entrata_tributo}}</a></p></div>
               <div class="col"><b>Tipologia spedizione:</b><p><a class="col">{{$riscossione->tipologia_spedizioni}}</a></p></div>
               <div class="col"><b> Data consegna al service</b><p><a class="col">{{$riscossione->data_consegna_service}}</a></p></div>
               <div class="col"><b>Tipologia documenti:</b><p><a class="col">{{$riscossione->tipologia_documenti}}</a></p></div>
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
           
             </div>
            </div>

            <div class="row pt-2 wrapper">
            
               <div class="col-12 col-md-6">
                  <a class="px-2 text-primary" href="{{ url('/form_ricossione/'.$riscossione->id) }}">Aggiorna la Riscossione</a>
                  <a class="px-2 text-primary" href="{{ url('/detail_riscossione/'.$riscossione->id) }}">Vai ai dettagli</a>
               </div>

            </div>
      
         </section>   
      @endforeach 
   </div>
   <div>

   </div>
@endsection