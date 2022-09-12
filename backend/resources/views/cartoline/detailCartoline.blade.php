@extends('layouts.app')
	@section('content')

		<section class="container-fluid">
			<div class="row justify-content-center my-5">
				<div class="col-12 col-md-5 bg-white shadow mx-1 p-4">
					<h3 class="fw-bold text-center">Dati della cartolina</h3>
					<br>
					<p class="pl-0"><strong>Descrizione della mandante:</strong> {{ $cartolina->descrizione_mandante }}  </p>
					<hr>
					<p class="pl-0 "><strong>Codice della mandante:</strong>  {{ $cartolina->codice_mandate }}</p>
					<hr>
					<p class="pl-0 "><strong>Nome e cognome del debitore:</strong>  {{ $cartolina->nome_cognome_debitore }}</p>
					<hr>
					<p class="pl-0 "><strong>Partita iva/Codice Fiscale del debitore</strong> {{ $cartolina->cf_piva_debitore }} </p>
					<hr>
					<p class="pl-0 "><strong>NDG: </strong>   {{ $cartolina->ndg }} </p>
					<hr>
					<p class="pl-0 "><strong>Data spedizione:</strong>   {{ $cartolina->data_spedizione }}</p>
					<hr>
					<p class="pl-0 "><strong>Numero Raccomandata:</strong>       {{ $cartolina->numero_raccomandata }} </p>
					<hr>
					<p class="pl-0 "><strong>Data notifica:</strong>        {{ $cartolina->data_notifica}}  </p>
					<hr>
					<p class="pl-0 "><strong>Esito notifica:</strong>      {{ $cartolina->esito_notifica}}  </p>
					<hr>
					<p class="pl-0 "><strong>Fase:</strong> {{ $cartolina->fase }}</p>
					<hr>
                    <p class="pl-0 "><strong>Chiave  pratica:</strong> {{ $cartolina->chiave_pratica }}</p>
					<hr>
					<p class="pl-0 "><strong>Dettaglio file:</strong>   <a href="{{Storage::url($cartolina->path_file)}}" target="blank"> {{Str:: limit($cartolina->nome_file , 10)}}</a></p>
					<hr>
					</br>

					<div class="col-12 col-md-5">
						@if (session('id'))
							<script>
									function openModal(params) {
										let modal = document.getElementById('simpleModal');
										modal.style.display = 'block';
									}
									
									document.addEventListener('DOMContentLoaded', openModal)
							</script>
						@endif 
					</div>

					<div>
						<a class="px-2 text-primary" href="{{  url('/cartolineForm/'.$cartolina->id) }}">Aggiorna la Cartolina</a>
						<a href="{{ url()->previous() }}"
							class="btn btn-dark md-3">
							Torna indietro      
						</a>
					</div>
				</div>

    @endsection