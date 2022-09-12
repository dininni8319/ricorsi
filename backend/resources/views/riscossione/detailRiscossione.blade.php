@extends('layouts.app')
@section('content')
	<section class="container-fluid d-md-flex aligm-items-center">
			
			<div class="row justify-content-center my-5">
				<div class="col-11 col-md-8 bg-white shadow mx-1 p-5">
					<h3 class="fw-bold text-center">Dati della Riscossione</h3>
					<br>
					<div class="row">
					{{-- 	<div class="col">
							<p class="pl-0"><strong>Ente:</strong> {{ $riscossione->ente }}  </p>
							<hr>
							<p class="pl-0 "><strong>Durata Contratto:</strong>  {{ $riscossione->durata_contratto }}</p>
							<hr>
							<p class="pl-0 "><strong>Valore del contratto:</strong>  {{ $riscossione->valore_contratto }}</p>
							<hr>
							<p class="pl-0 "><strong>Data Affidamento:</strong> {{ $riscossione->data_affidamento }} </p>
							<hr>
							<p class="pl-0 "><strong>Nome e cognome:</strong> {{ $riscossione->nome_cognome }} </p>
							<hr>
							<p class="pl-0 "><strong> Indirizzo mail:</strong> {{ $riscossione->email }} </p>
							<hr>
							<p class="pl-0 "><strong>Referente dell'ente:</strong> {{ $riscossione->referente_ente }} </p>
							
						</div> --}}
						<div class="col mb-5">
							<p class="pl-0 "><strong>Descrizione spedizione: </strong>   {{ $riscossione->descrizione_spedizione }} </p>
							<hr>
							<p class="pl-0 "><strong>Entrata tributo:</strong>   {{ $riscossione->entrata_tributo }}</p>
							<hr>
							<p class="pl-0 "><strong>Tipologia documenti:</strong>       {{ $riscossione->tipologia_documenti }} </p>
							<hr>
							<p class="pl-0 "><strong>Tipologia spedizione:</strong>        {{ $riscossione->tipologia_spedizioni}}  </p>
							<hr>
							<p class="pl-0 "><strong>Data consegna al service:</strong>      {{ $riscossione->data_consegna_service}}  </p>
							<hr>
							<h5 class="fw-bold text-center">Notifiche</h5>
							<p class="pl-0 "><strong>Notifiche positve:</strong> {{ ($riscossione->notifiche_positive)  }}</p>
							<p class="pl-0 "><strong>Notifiche negative:</strong> {{ $riscossione->notifiche_negative }}</p>
							<p class="pl-0 "><strong>Notifica da rinotificare:</strong> {{ $riscossione->numero_atti_rinotificare }}</p>
							<hr>
							<h5 class="fw-bold text-center">Dettaglio atti</h5>
							<p class="pl-0 "><strong>Cartoline di ritorno inserite:</strong> {{ ($riscossione->cartoline_ritorno_inserite)  }}</p>
							<p class="pl-0 "><strong>Numero atti annullati:</strong> {{ $riscossione->nr_atti_annullati }}</p>
							<p class="pl-0 "><strong>Importo atti annullati:</strong> {{ $riscossione->importo_atti_annullati }}</p>
							<p class="pl-0 "><strong>Numero atti spediti:</strong> {{ $riscossione->nr_atti_spediti }}</p>
							<p class="pl-0 "><strong>Numero atti rettificati:</strong> {{ $riscossione->atti_rettificati }}</p>
							<p class="pl-0 "><strong>Importo atti rettificati:</strong> {{ $riscossione->importo_atti_rettificati }}</p>
							<hr>
						</div>

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
						<div class="mt-2 d-flex align-items-center justify-content-evenly">
							<x-layoutComp.modalRiconciliazione :id="$riscossione->id" />
							<a class="px-2 text-primary" href="{{  url('/form_ricossione/'.$riscossione->id) }}">Aggiorna la Riscossione</a>
							<a href="{{ url()->previous() }}"
								class="btn btn-dark md-3">
								Torna Indietro      
							</a>
						</div>
				        <x-layoutComp.cardriscossione :riscossione="$riscossione"/>
		            </div>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<canvas id="chart-js" width="500r" height="400"></canvas>
			 </div>
    </section> 
@endsection