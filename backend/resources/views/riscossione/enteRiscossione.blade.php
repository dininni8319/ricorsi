@extends('layouts.app')

@section('content')
 <div class="container">
    <div class="row">
    <h3 class="text-start mb-3 fw-bold text-decoration-underline">
        Descrizione dell'Ente
     </h3>
    <section class="d-md-flex justify-content-between">
        <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2" id="child-class">
            <label for="name" class="form-label">
              Ente
            </label>
            <input
                type="text"
                class="form-control input"
                name="ente"
                value="{{$riscossione->ente ?? ''}}"
                required
            />
        </div>

        <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
            <label for="exampleInputTitle1" class="form-label">
           Durata Contratto
            </label>
            <input
                type="text"
                class="form-control input"
                aria-describedby="emailHelp"
                name="durata_contratto"
                value="{{$riscossione->durata_contratto ?? ''}}"
                required
            />
            
        </div>

        <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2" id="child-class">
           <label for="name" class="form-label">
            Valore Contratto
           </label>
           <input
               type="text"
               class="form-control input"
               name="valore_contratto"
               value="{{$riscossione->valore_contratto ?? ''}}"
               required
           />
       </div>
       <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2" id="child-class">
           <label for="name" class="form-label">
           Data Affidamento
           </label>
           <input
               type="date"
               class="form-control input"
               name="data_affidamento"
               value="{{$riscossione->data_affidamento ?? ''}}"
               required
           />
       </div>
    </section> 
    <section class="d-md-flex justify-content-between">
        <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2" id="child-class">
            <label for="name" class="form-label">
              Nome e Cognome
            </label>
            <input
                type="text"
                class="form-control input"
                name="nome_cognome"
                value="{{$riscossione->nome_cognome ?? ''}}"
                required
            />
        </div>

        <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
            <label for="exampleInputTitle1" class="form-label">
              Indirizzo Mail
            </label>
            <input
                type="text"
                class="form-control input"
                aria-describedby="emailHelp"
                name="email"
                value="{{$riscossione->email ?? ''}}"
                required
            />
            
        </div>

        <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2" id="child-class">
           <label for="name" class="form-label">
            Oggetto dell'Affidamento
           </label>
           <input
               type="text"
               class="form-control input"
               name="oggetto_affidamento"
               value="{{$riscossione->oggetto_affidamento ?? ''}}"
               required
           />
       </div>
       <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2" id="child-class">
           <label for="name" class="form-label">
            Referente dell'Ente
           </label>
           <input
               type="text"
               class="form-control input"
               name="referente_ente"
               value="{{$riscossione->referente_ente ?? ''}}"
               required
           />
       </div>
    </div>
 </div>
    </section> 
      @endsection