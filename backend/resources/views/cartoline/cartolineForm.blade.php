@extends('layouts.app')

@section('content')

<h1 class="text-center fw-bold">Nuova Cartolina</h1>
<form action="{{url("/create_cartolina/".(isset($cartolina) ? $cartolina->id : '')."")}}" method="POST" class="container-fluid d-md-flex justify-content-center col-11 col-md-9 form" enctype="multipart/form-data" >
    @csrf
    <section class="border border-1 p-4 my-5 bg-white shadow mb-5 row wrapper d-flex justify-content-between w-100">
        <h3 class="text-start mb-3 fw-bold text-decoration-underline">
           Informazioni varie
        </h3>

        <section class="d-md-flex justify-content-between">
            <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2" id="child-class">
                <label for="name" class="form-label">
                   Descrizione della Mandante 
                </label>
                <input
                    type="text"
                    class="form-control input"
                    name="descrizione_mandante"
                    value="{{$cartolina->descrizione_mandante ?? ''}}"
                    required
                />
            </div>

            <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                <label for="exampleInputTitle1" class="form-label">
                Codice della mandante
                </label>
                <input
                    type="text"
                    class="form-control input"
                    aria-describedby="emailHelp"
                    name="codice_mandate"
                    value="{{$cartolina->codice_mandate ?? ''}}"
                    required
                />
                
            </div>

            <div class="mb-3 col-12 col-md-3 pe-2">
                <label for="text" class="form-label">
                    Nome e cognome del debitore
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="text"
                    name="nome_cognome_debitore"
                    value="{{$cartolina->nome_cognome_debitore ?? ''}}"
                />
            </div>

            <div class="mb-3 col-12 col-md-3">
                <label for="name" class="form-label">
                    Codice Fiscale/P.I del debitore
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="text"
                    name="cf_piva_debitore"
                    value="{{$cartolina->cf_piva_debitore ?? ''}}"
                    required 
            />
        </section>

        <section class="d-md-flex justify-content-between align-items-center w-100">
            <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                <label for="exampleInputTitle1" class="form-label">
                   NDG
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputTitle1"
                    name="ndg"
                    value="{{$cartolina->ndg ?? ''}}"
                />
            </div>

            <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                <label for="exampleInputTitle1" class="form-label">
                    Data comunicazione/Data spedizione
                </label>
                <input
                    type="date"
                    class="form-control"
                    id="numbercap"
                    name="data_spedizione"
                    value="{{$cartolina->data_spedizione ?? ''}}"
                    required
                />
            </div>

            <div class="mb-3 col-12 col-md-2 col-lg-3">
                <label
                    class="form-check-label mb-1"
                    for="exampleCheck1">
                    Data notifica
                </label>
                <input
                    type="date"
                    class="form-control"
                    name="data_notifica"
                    value="{{$cartolina->data_notifica ?? ''}}"
                    required 
                />
            </div>

            <div class="mb-3 col-12 col-md-2 col-lg-3 ms-md-2">
                <label for="exampleCheck1">Numero Raccomandata</label>
                <input
                    type="text"
                    class="form-control mt-1"
                    name="numero_raccomandata"
                    value="{{$cartolina->numero_raccomandata ?? ''}}"
                    required
                />
            </div> 

        </section>
        <hr>

        <section class="d-md-flex justify-content-start align-items-center w-100">
            <div class="mb-3 col-12 col-md-2 col-lg-3 me-2">
                <label for="exampleCheck1">Chiave pratica</label>
                <input
                    type="text"
                    class="form-control mt-1"
                    name="numero_raccomandata"
                    value="{{$cartolina->chiave_pratica ?? ''}}"
                    required
                />
            </div> 

            <div class="mb-2 col-12 col-md-3 me-2">
                Esito Positivo 
                <select
                    name="esito_notifica"
                    id="Esito"
                    class="form-control"
                    required
                    >
                    <option value="ricevuto_destinatario">Ricevuto-Destinatario</option>
                    <option value="ricevuto_familiare_conveniente">Ricevuto-Familiare Convivente</option>
                    <option value="ricevuto_addetto_alla_casa_ufficio_o_azienda"> Ricevuto-Addetto all'Immobile</option>
                    <option value="ricevuto_portiere_dello_stabile">Ricevuto-Portiere</option>
                    <option value="ritirato">Ritirato</option>
                    <option value="compiuta_giacenza">Compiuta Giacenza</option>
                    <option value="rifiutato">Rifiutato</option>
                    <option value="destinatario_irreperibile">Destinatario irreperibile</option>
                    <option value="destinatario_deceduto">Destinatario deceduto</option>
                    <option value="destinatario_sconosciuto">Destinatario sconosciuto</option>
                    <option value="destinatario_trasferito">Destinatario trasferito</option>
                    <option value="indirizzo_inesatto">Indirizzo inesatto</option>
                    <option value="indirizzo_insufficiente"> Indirizzo insufficiente</option>
                    <option value="indirizzo_inesistente">Indirizzo inesistente</option>
                   <option value="CAD">CAD</option>
                </select>
            </div>

            <div class="mb-3 col-12 col-md-2 col-lg-3 pe-2">
                <label for="exampleInputTitle1" class="form-label">
                Fase
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputTitle1"
                    name="fase"
                    value="{{$cartolina->fase ?? ''}}"
                />
            </div>

            <div class="col-12 col-md-3 my-3 ">       
                <input type="file" class="form-control" id="customFile" name="nome_file"/>
            </div> 
        </section>

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


