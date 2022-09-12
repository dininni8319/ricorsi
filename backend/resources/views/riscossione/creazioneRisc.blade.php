@extends('layouts.app')

@section('content')

<h1 class="text-center fw-bold">Nuova Riscossione</h1>
 
<form action="{{url("/creazione_riscossione/".(isset($riscossione) ? $riscossione->id : '')."")}}" method="POST" class="container-fluid d-md-flex justify-content-center col-11 col-md-8 form" enctype="multipart/form-data">
    @csrf
    <section class="border border-1 p-4 my-5 bg-white shadow mb-5 row wrapper d-flex justify-content-between w-100">
       {{--  <h3 class="text-start mb-3 fw-bold text-decoration-underline">
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
         </section> --}}

    {{--      <section class="d-md-flex justify-content-between">
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
        </section> --}}

        <h3 class="text-start mb-3 fw-bold text-decoration-underline">
           Informazioni Varie
        </h3>

        <section class="d-md-flex align-items-center">
         
            <div class="mb-3 col-12 col-md-3 col-lg-4 pe-2">
                <label for="exampleInputTitle1" class="form-label">
                Descrizione Spedizioni
                </label>
                <input
                    type="text"
                    class="form-control input"
                    aria-describedby="emailHelp"
                    name="descrizione_spedizione"
                    value="{{$riscossione->descrizione_spedizione ?? ''}}"
                    required
                />

            </div>
            <div class="mb-3 col-12 col-md-3 col-lg-4 pe-2">
                <label for="exampleInputTitle1" class="form-label">
                   Tipologia Spedizione
                </label>
                <select
                name="tipologia_spedizioni"
                id="spedizioni"
                class="form-control"
                required
                >
                <option value="Posta ordinaria">Posta ordinaria</option>
                <option value="Raccomandata">Raccomandata</option>
                <option value="Atto giudiziario">Atto giudiziario</option>
                <option value="Posta Ordinaria">Posta Ordinaria</option>
            </select>
            </div>
       
            <div class="mb-3 col-12 col-md-4 me-2">
                <label for="exampleInputTitle1" class="form-label">
                    Tipologia Documenti
                 </label>
               
                <select
                    name="tipologia_documenti"
                    id="tipologia"
                    class="form-control"
                    required
                    >
                    <option value="Avviso Bonario">Avviso Bonario</option>
                    <option value="Ingiunzioni">Ingiunzioni</option>
                    <option value="Accertamenti">Accertamenti</option>
                    <option value="Atti giudiziari">Atti giudiziari</option>
                    <option value="Solleciti">Solleciti</option>
                    <option value="Avvisi Bonari">Avvisi Bonari</option>
                    <option value="Rateizzazioni">Rateizzazioni</option>
                    <option value="Altro">Altro</option>
                </select>
            
             </div>
        </section>

        <section class="d-md-flex align-items-end w-100">
         
            <div class="mb-3 col-12 col-md-4 me-2">
                <label for="exampleInputTitle1" class="form-label">
                    Entrata Tributo
                 </label>
               
                <select
                    name="entrata_tributo"
                    id="entrta"
                    class="form-control"
                    required
                >
                    <option value="Canone unico Patrimoniale">Canone unico Patrimoniale</option>
                    <option value="Imu">Imu</option>
                    <option value="Tasi">Tasi</option>
                    <option value="Rsu">Rsu</option>
                    <option value="Icp">Icp</option>
                    <option value="Osap">Osap</option>
                    <option value="Dpa">Dpa</option>
                    <option value="Osap">Osap</option>
                    <option value="Canone unico">Canone unico</option>
                    <option value="Lvo">Lvo</option>
                    <option value="Cds">Cds</option>
                    <option value="Mense">Mense</option>
                    <option value="Trasporti">Trasporti</option>
                    <option value="Imposta di soggiorno">Imposta di soggiorno</option>
                   <option value="Numerazione civica">Numerazione civica</option>
                   <option value="Riscossione coattiva">Riscossione coattiva</option>
                </select>
            </div>
         
            <div class="mb-3 col-12 col-md-4 pe-2">
                <label for="exampleInputTitle1" class="form-label">
                    Data Consegna al Service
                </label>
                <input
                    type="date"
                    class="form-control"
                    id="numbercap"
                    name="data_consegna_service"
                    value="{{$riscossione->data_consegna_service ?? ''}}"
                    required
                />
            </div>

            <div class="mb-3 col-12 col-md-4">
                <label
                    class="form-check-label mb-2"
                    for="exampleCheck1">
                    Data Conferma Anteprime
                </label>
                <input
                    type="date"
                    class="form-control"
                    name="data_conferma_anteprime"
                    value="{{$riscossione->data_conferma_anteprime ?? ''}}"
                />
            </div>
          {{--   <a class="px-2 text-primary text-end" href="{{  url('/enteRiscossione/') }}">Inserisci i dati dell'ente</a> --}}
        </section>
        <hr>
        <div class="row">
            <h3 class="text-start mb-3 fw-bold text-decoration-underline">Notifiche</h3>
        </div>
            <section class="d-md-flex align-items-center w-100">
                <div class="mb-3 col-12 col-md-4 pe-2">
                    <label
                        class="form-check-label mb-1"
                        for="exampleCheck1">
                        Notifiche positive
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        name="notifiche_positive"
                        value="{{$riscossione->notifiche_positive ?? ''}}"
                    />
                </div>
                <div class="mb-3 col-12 col-md-4 pe-2">
                    <label
                        class="form-check-label mb-1"
                        for="exampleCheck1">
                        Notifiche negative
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        name="notifiche_negative"
                        value="{{$riscossione->notifiche_negative ?? ''}}"
                    />
                </div>
                <div class="mb-3 col-12 col-md-4">
                    <label
                        class="form-check-label mb-1"
                        for="exampleCheck1">
                        Notifiche da rinotificare
                    </label>
                    <input
                        type="number"
                        class="form-control"
                        name="numero_atti_rinotificare"
                        value="{{$riscossione->numero_atti_rinotificare ?? ''}}"
                    />
                </div>

            </section>
        <hr>
        <h3 class="text-start mb-3 fw-bold text-decoration-underline">
            Dettaglio atti
         </h3>
        <section class="d-md-flex align-items-center w-100">
         
         <div class="mb-3 col-12 col-md-4 pe-2">
                <label for="exampleCheck1">Nr Cartoline di Ritorno Inserite</label>
                <input
                    type="number"
                    class="form-control mt-1"
                    name="cartoline_ritorno_inserite"
                    value="{{$riscossione->cartoline_ritorno_inserite ?? ''}}"
                />
            </div>
            <div class="mb-3 col-12 col-md-4 pe-2">
                <label
                    class="form-check-label mb-1"
                    for="exampleCheck1">
                    Numero atti annullati
                </label>
                <input
                    type="number"
                    class="form-control"
                    name="nr_atti_annullati"
                    value="{{$riscossione->nr_atti_annullati ?? ''}}"
                />
            </div>
            <div class="mb-3 col-12 col-md-4">
                <label
                    class="form-check-label mb-1"
                    for="exampleCheck1">
                   Importo atti annullati
                </label>
                <input
                    type="number"
                    class="form-control"
                    name="importo_atti_annullati"
                    value="{{$riscossione->importo_atti_annullati ?? ''}}"
                />
            </div>
            
        </section>
        <section class="d-md-flex align-items-center w-100">
         
            <div class="mb-3 col-12 col-md-4 pe-2">
                <label
                    class="form-check-label mb-2"
                    for="exampleCheck1">
                    Numero atti spediti
                </label>
                <input
                    type="number"
                    class="form-control"
                    name="nr_atti_spediti"
                    value="{{$riscossione->nr_atti_spediti ?? ''}}"
                />
            </div>

            <div class="mb-3 col-12 col-md-4 pe-2">
                <label for="exampleInputTitle1" class="form-label">
                   Numero atti rettificati
                </label>
                <input
                    type="number"
                    class="form-control"
                    id="numbercap"
                    name="atti_rettificati"
                    value="{{$riscossione->atti_rettificati ?? ''}}"
                />
            </div>
         
            <div class="mb-3 col-12 col-md-4">
                <label for="exampleInputTitle1" class="form-label">
                   Importo atti rettificati
                </label>
                <input
                    type="number"
                    class="form-control"
                    id="numbercap"
                    name="importo_atti_rettificati"
                    value="{{$riscossione->importo_atti_rettificati ?? ''}}"
                />
            </div>

        </section>
        <hr>

        <section class="row py-md-2 justify-content-evenly">
            <div class="col-12 d-md-flex w-80">            
                <button
                    type="submit"
                    class="btn btn-dark col-12 col-md-3 me-md-3 mb-md-0 mb-3">
                    Salva
                </button>
                <a href=""
                class="btn btn-light border border-1 border-dark col-12 col-md-3 me-md-3">
                    Annulla      
                </a>
           </div>

            <span id="errorElement"></span>
        </section>
       
    </section> 
</form>
@endsection 


