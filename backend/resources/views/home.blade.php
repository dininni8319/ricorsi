@extends('layouts.app')

@section('content')
    @if (session('message')) 
        <div class="alert alert-success"> 
            {{ session('message') }} 
        </div> 
    @endif 

    @if (session('access.denied.revisor.only')) 
        <div class="alert alert-danger"> 
            Accesso consentito solo ai revisori 
        </div> 
    @endif 
    
    <section class="row h-50 align-items-center justify-content-center">
        <div class="col-12 col-md-6 text-black text-center">
            <h1 class="display-3 fw-bold">
                Benvenuti in  <span class="tc-main d-block">Credit Network&Finance</span>
            </h1>
            <h5 class="fw-bold"> Siamo un servicer specializzato nella gestione di crediti problematici attivo su tutto il territorio italiano. Con questo sito potrai attivare diversi workflow e visionare tutte le pratiche trattate da te e i tuoi colleghi</h5>
        </div>
         
        <div class="col-12 text-center">
            <img class="mansuite" src="{{asset("photos\computer.jpg")}} "alt=""> 
        </div>
    </section>
  
@endsection
