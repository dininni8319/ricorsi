@extends('layouts.app')

@section('content')
    <section>
        <div class="col-12 col-md-5">
            @if ('riconciliazione')
                <script>
                        function openModal(params) {
                            let modal = document.getElementById('simpleModal');
                            modal.style.display = 'block';
                        }
                        
                        document.addEventListener('DOMContentLoaded', openModal)
                </script>
            @endif 
        </div>
        <div class= "d-flex justify-content-center"> <button id="modalBtn" class="btn-green p-2"> {{-- {{ $riconciliazione ? 'Avvia' : 'Aggiorna'}} --}}Aggiorna una Rendicontazione</button></div>   
        <div id="simpleModal" class="modal-form">
            <div class="modal-form-content ">
                <div class="modal-header p-4">
                    <h2>Rendicontazione</h2>
                    <span id="closeBtn">&times;</span>
                </div>
                <div class="modal-body">
                
                <form action='{{ url('/update_riconciliazione/'.$riconciliazione->id)}}' method="POST" class="d-md-flex flex-md-column px-3" enctype="multipart/form-data">
                    @csrf
                        <section class="d-md-flex justify-content-between wrapper col-12 mt-2">
                        
                        <div class="mb-3 col-12 col-md-3">
                            <label for="exampleInputTitle1" class="form-label">
                                Mese
                            </label>
                            <select
                                name="mese"
                                id="Esito"
                                class="form-control"
                                required
                                >
                                <option value="Gennaio">Gennaio</option>
                                <option value="Febbraio">Febbraio</option>
                                <option value="Marzo"> Marzo</option>
                                <option value="Aprile">Aprile</option>
                                <option value="Maggio">Maggio</option>
                                <option value="Giugno"> Giugno</option>
                                <option value="Luglio">Luglio</option>
                                <option value="Agosto">Agosto</option>
                                <option value="Settembre">Settembre</option>
                                <option value="Ottobre">Ottobre</option>
                                <option value="Novembre">Novembre</option>
                                <option value="Dicembre">Dicembre</option>
                            </select>
                            
                        </div>
                    
                            <div class="mb-3 col-12 col-md-3">
                            <label for="exampleInputTitle1" class="form-label">
                                Anno 
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="exampleInputTitle1"
                                aria-describedby="emailHelp"
                                name="anno"
                                value="{{$riconciliazione->anno}}"
                                required
                            />
                            </div>
                            <div class="mb-3 col-12 col-md-3">
                            <label for="exampleInputTitle1" class="form-label">
                                Totale
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="exampleInputTitle1"
                                aria-describedby="emailHelp"
                                name="totale"
                                value="{{$riconciliazione->totale}}"
                                required
                            />
                            </div>
                        </section>
                        <section class="d-md-flex justify-content-between wrapper col-12 mt-2">
                        
                            <div class="mb-3 col-12 col-md-3">
                            <label for="exampleInputTitle1" class="form-label">
                                Oneri di riscossione
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="exampleInputTitle1"
                                aria-describedby="text"
                                name='oneri_riscossione'
                                value="{{$riconciliazione->oneri_riscossione}}"
                                required
                            />
                            </div>
                    
                            <div class="mb-3 col-12 col-md-3">
                            <label for="exampleInputTitle1" class="form-label">
                                Spese notifica
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="exampleInputTitle1"
                                aria-describedby="emailHelp"
                                name="spese_notifica"
                                value="{{$riconciliazione->spese_notifica}}"
                                required
                            />
                            </div>
                            <div class="mb-3 col-12 col-md-3">
                            <label for="exampleInputTitle1" class="form-label">
                                Diritti vari
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="exampleInputTitle1"
                                aria-describedby="emailHelp"
                                name="diritti_vari"
                                value="{{$riconciliazione->diritti_vari}}"
                                required
                            />
                            </div>
                        </section>
        
                    <section class="d-md-flex align-items-center col-12 wrapper">
                        
                        <div class="mb-2 col-12 col-md-6">
                        
                            <button class="btn btn-green  px-3 w-20 mb-1" onclick="myFunction()" type="submit">Inserisci</button>
                            <script>
                                function myFunction() {
                                    alert("Hai inserito correttamente questa riconciliazione")
                                }
    
                            </script>
                        </div>
                    </section> 
                </form>    
                </div>
            </div>
        </div>
    </section>
@endsection