@extends('layouts.app')
@section('content')
        
        <form action="{{url("/crea_ricorso/".(isset($ricorso) ? $ricorso->id : '')."")}}" method="POST" class="container-fluid d-md-flex justify-content-center col-11 col-md-9 form">
            @csrf
            <section class="border border-1 p-4 my-5 bg-white shadow mb-5 row wrapper d-flex justify-content-between w-100">
                <h3 class="text-start mb-3 fw-bold text-decoration-underline">
                    Dati Contribuente
                </h3>

                <section class="d-md-flex justify-content-between">
                    <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2" id="child-class">
                        <label for="name" class="form-label">
                            Nominativo 
                        </label>
                        <input
                            type="text"
                            class="form-control input"
                            name="nominativo"
                            value="{{$ricorso->nominativo ?? ''}}"
                            required
                        />
                    </div>

                    <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                        <label for="exampleInputTitle1" class="form-label">
                        E-mail
                        </label>
                        <input
                            type="email"
                            class="form-control input"
                            aria-describedby="emailHelp"
                            name="mail"
                            value="{{$ricorso->mail ?? ''}}"
                            required
                        />
                        
                    </div>

                    <div class="mb-3 col-12 col-md-3 pe-2">
                        <label for="text" class="form-label">
                            Indirizzo
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="text"
                            name="indirizzo"
                            value="{{$ricorso->indirizzo ?? ''}}"
                        />
                    </div>

                    <div class="mb-3 col-12 col-md-3">
                        <label for="name" class="form-label">
                            Codice Fiscale o Partita Iva
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="text"
                            name="cf_piva"
                            value="{{$ricorso->cf_piva ?? ''}}"
                            required 
                    </div>
                </section>

                <section class="d-md-flex justify-content-between align-items-center w-100">
                    <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                        <label for="exampleInputTitle1" class="form-label">
                            Telefono
                        </label>
                        <input
                            type="number"
                            class="form-control"
                            id="exampleInputTitle1"
                            name="telefono"
                            value="{{$ricorso->telefono ?? ''}}"
                        />
                    </div>

                    <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                        <label for="exampleInputTitle1" class="form-label">
                            Cap
                        </label>
                        <input
                            type="number"
                            class="form-control"
                            id="numbercap"
                            name="cap"
                            value="{{$ricorso->cap ?? ''}}"
                            required
                        />
                    </div>

                    <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                        <label for="exampleCheck1">Città</label>
                        <input
                            type="text"
                            class="form-control mt-1"
                            name="citta"
                            value="{{$ricorso->citta ?? ''}}"
                            required
                        />
                    </div> 

                    <div class="mb-3 col-12 col-md-2 col-lg-3">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1">
                            Numero Ricorso Numero Registro (N.R.G.R)
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            name="numero_ricorso"
                            value="{{$ricorso->numero_ricorso ?? ''}}"
                            required 
                        />
                    </div>

                </section>

                <section class="d-md-flex justify-content-between align-items-center w-100">

                    <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1">
                        Numero di Protocollo Interno 
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            name="numero_protocollo_interno"
                            value="{{$ricorso->numero_protocollo_interno ?? ''}}"
                            required
                        />
                    </div>
                    <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"
                        >
                            Ente
                        </label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="ente"
                            value= "{{$ricorso->ente ?? ''}}"
                            required 
                        />
                    </div>

                    <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1">
                           {{--  Data ricezione ricorso --}}
                           Data Ricezione Ricorso
                        </label>
                        <input
                            type="date"
                            class="form-control"
                            name="data_ricezione_ricorso"
                            value="{{$ricorso->data_ricezione_ricorso ?? ''}}"
                            required
                        />
                    </div>

                    <div class="mb-2 col-12 col-md-2 col-lg-3">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"
                        >
                            Data Presentazione Ricorso
                        </label>
                        <input
                            type="date"
                            class="form-control"
                            name="data_presentazione_ricorso"
                            value="{{$ricorso->data_presentazione_ricorso ?? ''}}"
                            required
                        />
                    </div>
                </section>

                <section class="mb-3 row align-items-start justify-content-between px-0 mx-0">
                   
                    <h3 class="fw-bold text-decoration-underline my-3">
                            Dati del legale della Controparte ( Difensore)
                    </h3>
                    <div class="mb-2 col-12 col-md-6 w-60">
                        <label
                            for="exampleInputAssegnee1"
                            class="form-label">
                            Legale Controparte ( Nominativo, Fax Obbligatori )
                        </label>
                        <textarea
                            type="text-area"
                            class="form-control"
                            id="exampleInputAssegnee1"
                            name="legale_controparte">{{$ricorso->legale_controparte ?? ''}}
                         </textarea>
                    </div>
                    <div class="mb-3 col-12 col-md-5">
                        <label  for="exampleInputTitle1" class="form-label">
                            Pec
                        </label> 
                        <input
                            type="text"
                            class="form-control" 
                            id="exampleInputTitle1" 
                            name="pec"
                            value="{{$ricorso->pec ?? ''}}"
                            required
                        />  
                    </div>
                </section>
                
                <section class="mb-3 row flex-column justify-content-between align-items-center px-0 mx-0">
                    <h3 class="fw-bold text-decoration-underline">Oggetto Ricorso</h3>
                    <div class="col-12 py-2 mx-0 w-100">
                        <textarea
                            class="form-control "
                            rows="2"
                            name="oggetto_ricorso"
                            required> {{$ricorso->oggetto_ricorso ?? ''}}
                        </textarea>
                    </div>
                </section>
                
                <div>
                    <h3 class="text-start mb-3 fw-bold text-decoration-underline mx-0 px-0">Dati Relativi all'Atto</h3>
                </div>
                <section class="row d-md-flex justify-content-between align-items-center px-0 mx-0">
                    <div class="mb-2 col-12 col-md-2">
                        Tributo
                        <select
                            name="tributo"
                            id="Esito"
                            class="form-control"
                            required>
                            <option value="Imu">Imu</option>
                            <option value="Tari">Tari</option>
                            <option value="Tarsu"> Tarsu</option>
                            <option value="Tassa rifiuti">Tassa rifiuti</option>
                            <option value="Pubblicità">Pubblicità</option>
                            <option value="Occ. suolo">Occ. suolo</option>
                            <option value="C.u.patr">C.u.patr</option>
                            <option value="Trasporti">Trasporti</option>
                            <option value="Cod.stradale">Cod.stradale</option>
                            <option value="Mensa">Mensa</option>
                            <option value="Tasi">Tasi</option>
                        </select>
                    </div>
                    
                    <div class="mb-2 col-12 col-md-2">
                        Tipologia dell'Atto
                        <select
                            id="Esito"
                            class="form-control"
                            name="tipologia_atto"
                            required>
                            <option value="Accertamento">Accertamento</option>
                            <option value="Fermo amministrativo">
                                Fermo Amministrativo
                            </option>
                            <option value="Ingiunzione">Ingiunzione</option>
                            <option value="Intimazione">Intimazione</option>
                            <option value="Liquidazione">Liquidazione</option>
                            <option value="Pignoramento">Pignoramento</option>
                            <option value="Preavviso"> Preavviso</option>
                            <option value="Preavviso fermo">Preavviso fermo</option>
                            <option value="Rimborso">Rimborso</option>
                            <option value="Riscossione">Riscossione</option>
                            <option value="Sollecito">Sollecito</option>
                        </select>
                    </div>
                    
                    <div class="mb-2 col-12 col-md-2 input-background-custom">
                        Esito
                        <select   
                        class="form-control col-12 col-md-3"
                        name="esito"
                        >
                            <option value="Aperto">Aperto</option>
                            <option value="Vinto">Vinto</option>
                            <option value="Perso">Perso</option>
                            <option value="Chiuso">Chiuso</option>
                        </select>
                    </div>

                    <div class="mb-2 col-12 col-md-2">
                        <label
                            class="form-check-label"
                            for="exampleCheck6">
                            Anno Imposta
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleCheck11"
                            name="anno_imposta"
                            value="{{$ricorso->anno_imposta ?? ''}}"
                            required
                        />
                    </div> 

                    <div class="mb-3 col-12 col-md-2">
                        <label  for="exampleInputTitle1" class="form-label">
                            Importo Atto €
                        </label> 
                        <input
                            type="number"
                            class="form-control" 
                            id="exampleInputTitle1" 
                            name="importo_atto"
                            value="{{$ricorso->importo_atto ?? ''}}"                          
                            required
                        />  
                    </div>
                </section>

                <section class="row mb-5 d-flex align-items-center justify-content-start px-0 mx-0">
           
                    <div class="col-12 mt-2">
                        <textarea
                            class="form-control"
                            rows="4"
                            placeholder="Altre informazioni Aggiuntive Relative all'Atto"
                            name="informazioni_aggiuntive"
                        ></textarea>
                    </div>
                  
                </section>

                <section class="row py-md-2 justify-content-evenly">
                    <div class="col-12 d-md-flex w-80">            
                        <button
                            type="submit"
                            class="btn btn-dark col-12 col-md-3 me-md-3 mb-md-0 mb-3">
                            Salva
                        </button>
                        <a href="{{ route('paginataxunit') }}"
                        class="btn btn-light border border-1 border-dark col-12 col-md-3 me-md-3">
                            Annulla      
                        </a>
                   </div>
                    <div class="mb-3 col-12 mt-3">
                        <label            
                        class="form-check-label fw-bolder me-3 text-primary"
                        for="exampleCheck9">
                                Notifica tramite Email
                        </label>
                            <input
                                type="checkbox"
                             {{--    class="form-check-input" --}}
                                id="exampleCheck13"
                                name="email_notification"
                            />
                    </div>
                    <span id="errorElement"></span>
                </section>
            </section>
        </form>
    @endsection