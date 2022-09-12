@extends('layouts.app')
	@section('content')
		<section class="container-fluid">
			<div class="row justify-content-center my-5">
				<div class="col-11 col-md-4 bg-white shadow mx-1 p-3">
					<h3 class="fw-bold mb-4">Dati del contribuente e del legale</h3>
					<p class="pl-0"><strong>Nominativo:</strong>   <span>{{$ricorso->nominativo}}</span></p>
					<p class="pl-0"><strong>Email:</strong>        <span>{{$ricorso->mail}}</span></p>
					<p class="pl-0"><strong>Indirizzo:</strong>    <span>{{$ricorso->indirizzo}}</span></p>
					<p class="pl-0"><strong>Partita iva/Codice Fiscale:</strong>  <span>{{$ricorso->cf_piva}}</span></p>
					<p class="pl-0"><strong>Telefono: </strong>     <span>{{$ricorso->telefono}}</span></p>
					<p class="pl-0"><strong>Cap:</strong>          <span>{{$ricorso->cap}}</span></p>
					<p class="pl-0"><strong>citta:</strong>        <span>{{$ricorso->citta}}</span></p>
					<p class="pl-0"><strong>Pec:</strong>          <span>{{$ricorso->pec}}</span></p>
					<p class="pl-0"><strong>Esito:</strong>        <span>{{$ricorso->esito}}</span></p>
					<p class="pl-0"><strong>Importo Atto: €</strong> <span>{{$ricorso->importo_atto}}</span></p>
					<p class="pl-0"><strong>Legale della controparte:</strong> <span>{{$ricorso->legale_controparte}}</span></p>
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
						<a href="{{ url()->previous() }}"
							class="btn btn-dark md-3">
							Torna Indietro      
						</a>
					</div>
				</div>
							
				<div class="col-11 col-md-4 bg-white shadow p-3">
					<h3 class="fw-bold mb-4">Tutti gli altri dati</h3>
					<p class="pl-0"><strong>Numero protocollo interno:</strong>   <span>{{$ricorso->numero_protocollo_interno}}</span></p>
					<p class="pl-0"><strong>Numero ricorso:</strong>              <span>{{$ricorso->numero_ricorso}}</span></p>
					<p class="pl-0"><strong>Ente:</strong>                        <span>{{$ricorso->ente}}</span></p>
					<p class="pl-0"><strong>Data presentazione ricorso :</strong> <span>{{$ricorso->data_presentazione_ricorso}}</span></p>
					<p class="pl-0"><strong>Data ricezione ricorso :</strong>     <span>{{$ricorso->data_ricezione_ricorso}}</span></p>
					<p class="pl-0"><strong>Oggetto ricorso:</strong>             <span>{{$ricorso->oggetto_ricorso}}</span></p>
					<p class="pl-0"><strong>Tributo:</strong>                     <span>{{$ricorso->tributo}}</span></p>
					<p class="pl-0"><strong>Anno imposta:</strong>                <span>{{$ricorso->anno_imposta}}</span></p>
					<p class="pl-0"><strong>Tipologia atto:</strong>              <span>{{$ricorso->tipologia_atto}}</span></p>
					<p class="pl-0"><strong>Informazioni aggiuntive:</strong>     <span>{{$ricorso->informazioni_aggiuntive}}</span></p>

					<div class="d-flex mt-3">
						
						<a class="px-2 likede" href="{{ url('/work_flow/'.$ricorso->id) }}"><p>Aggiorna il Ricorso</p></a>
						<a class="px-2 likede" href="{{ route('taxunit') }}"> <p>Fasi correnti</p></a>
					</div>

					<div class="d-md-flex justify-content-end px-2 py-3">
						<x-layoutComp.modal :id="$ricorso->id" :ricorso="$ricorso" :existes="$faseCurrent ?? null"></x-layoutComp.modal>
					</div>

				</div>
				<br/>
				<p></p>
				<div class="col"></div>

			</div>
		</section>
		<h3 class="mx-5 py-3 text-center fw-bold">Ecco tutti gli aggiornamenti di questa pratica</h3>
		<br/>

		<div class="container col-12 col-md-8">
			<!--start card-->
			<div class="card-wrapper">
				<div class="card">
					<div class="card-body">
						<h4 class="text-center">Storico delle fasi</h4>
							
							@if(isset($currentFases))

								@foreach ($currentFases as $current)
								<div class="table-responsive">
									<section class="card-header-custom d-flex py-2 fw-bold px-2 justify-content-center w-100">Storico delle Fasi</section>
									<table class="table table-sm table-borderless bg-white p-4 shadow ">
										<thead>
											<tr>				
											<th scope="col">Aggiornamento fase</th>
												<th scope="col">Data presentazione ricorso:</th>
												<th scope="col">Data convocazione</th>
												<th scope="col"> Esito </th>
												<th scope="col">Esito definitivo </th>
												<th scope="col"> Sede </th>
												<th scope="col"> Spese </th>
												<th scope="col"> Aggiornamento pratica </th>
												{{-- <th scope="col">Data presentazione:</th> --}}
											</tr>
										</thead>
											
										<tbody>
											<tr>
												<td><a href="{{url('/detail_fase/'.$current->id)}}"> {{
														$current->fase == 1 ? "Mediazione" : (
														$current->fase == 2 ? "Ricorso 1° Grado" : (
														$current->fase == 3 ? "Ricorso 2° Grado" : (
														$current->fase == 4 ? "Cassazione" : 
														"Nessuna fase inserita"
														)))
												}}		
												</td></a> 
												<td>{{$current->data_presentazione}}</td>
												<td>{{$current->data_convocazione}}</td>
												<td>{{$current->esito}}</td>
												<td>{{$current->esito_definitivo}}</td>
												<td>{{$current->sede}}</td>
												<td>{{$current->spese}}</td>
											
												<td><a class="px-2 text-primary text-end fs-6" href="{{ url('/taxunit_form__update_page/' . $current->id) }}">Aggiorna questa Pratica</a></td>
											</tr>
											
										</tbody>			
									</table>	

								</div>
								@endforeach
							@endif
						</div>
					</div>
				</div>				
			</div>
				<br/>	
			<h3 class="mx-5 py-1 text-center fw-bold">File e notifiche relativi la pratica</h3>
		
			<div class="row justify-content-center py-3 w-60 ">
				<div class="card col-11 col-md-3">
					<div class="card-body">
						<h3 class="card-title text-center fw-bold">Documenti relativi la pratica</h3>
						<h5 class="card-title text-center"> I file accettati sono: Excel, PDF e Word</h5>
				
						<div class="row">
							<div class="col-sm">
							</div>
							<div class="col-sm">
								<i class="fa-solid fa-file-excel grend fs-1"></i>
							</div>
							<div class="col-sm">
								<i class="fa-regular fs-1 fa-file-pdf text-danger"></i>
							</div>
							<div class="col-sm">
								<i class="fa-solid fa-file-word fs-1 bluex"></i>
							</div>
							<div class="col-sm">
							</div>
						
							@if ($documents != null)
								@foreach ($documents as $document)
										<h6>Tipologia</h6>
										<a> {{$documents[0]->tipologia_file}}</a>  
										@foreach ($document->files as $file)
												<a href="{{Storage::url($file->path)}}" target="blank" class="mb-2"><h6 class="fw-bold py-2">File relativi questa pratica:</h6>{{substr($file->nome_file, 0, -4)}}</a>
												<hr class="pk-0">
										@endforeach
				
								@endforeach
						    @endif 
						</div>
					</div>
				</div>
				
				<div class="col-md-4 mx-2">
					<x-layoutComp.formReminderDate :id="$ricorso->id" :tasks="$tasks ?? ''"/>
				</div>
			</div>
	@endsection
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
