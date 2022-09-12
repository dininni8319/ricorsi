@extends('layouts.app')
    @section('content')
        <x-layoutComp.searchbar />

        <section class= "container justify-content-center">
            <section class="row"> 
               <h1 class="text-center my-3">Crea una nuova Fase</h1>
            </section>
        </section>

        <form action='{{url ('/fase_create/'.$id)}}' method="POST" class="d-md-flex justify-content-center">
            @csrf
            <section class="d-md-flex flex-column justify-content-center mb-5 class-custom-form-edit bg-white col-12 col-md-9 p-5 shadow">
                <h3 class="text-start mb-3 fw-bold text-decoration-underline">Dati relativi a Tax unit </h3>
                <x-faseFormCreateComp.datiTaxUnit />
                <x-faseFormCreateComp.esitiFormInputs />
                <a class="px-2" href="/taxunitlegalePage">Aggiungi dati relativi all'ufficio legale</a>
            </section> 
        </form>       
    @endsection