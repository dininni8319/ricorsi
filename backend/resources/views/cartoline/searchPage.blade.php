@extends('layouts.app')

@section('content')
   <div class="row justify-content-center">
      <h2 class="text-center">Hai cercato {{ $query }}</h2>
      @foreach ($riscossioni as $riscossione)
         <section class="shadow bg-white border border-1 col-12 col-md-8 mt-3 mx-0 px-0">
            <section class="card-header-custom py-2 fw-bold custom-card-class text-center">Ricorsi</section>
            <div class="row px-2">
               <div class="col"><b>Descrizione della Spedizione</b></div>
               <div class="col"> <b>Entrata Tributo</b></div>
               <div class="col"><b>Tipologia Documenti</b> </div>
               <div class="col"><b>Notifiche Negative</b></div>
               <div class="col"><b>Data Conferma Anteprime</b></div>
               <div class="col"><b>Data di Creazione</b></div>
               <div class="col"> <b> Creato il </b></div>
            </div>

            <div class="row px-2">
               <div class="col">{{$riscossione->descrizione_spedizione}}</div>
               <div class="col">{{$riscossione->entrata_tributo}}</div>
               <div class="col">{{$riscossione->tipologia_documenti}}</div>
               <div class="col">{{$riscossione->notifiche_negative}}</div>
               <div class="col">{{date('d-m-Y', strtotime($riscossione->data_conferma_anteprime))}}</div>
               <div class="col">{{date('d-m-Y', strtotime($riscossione->created_at))}}</div>
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
@endsection