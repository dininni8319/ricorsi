  <section>
      <button id="modalBtn" class="btn-serch">Avvia una nuova fase</button>
      <div id="simpleModal" class="modal-form">
          <div class="modal-form-content ">
              <div class="modal-header p-4">
                <h2>Avvia una Fase</h2>
                <span id="closeBtn">&times;</span>
              </div>
              <div class="modal-body">
            
                @if (session('message')) 

                  <div class="alert alert-danger"> 

                    {{ session('message') }} 
                  </div> 

                @endif 
                <form action='{{url ('/fase_create/'.$id)}}' method="POST" class="d-md-flex flex-md-column px-3" enctype="multipart/form-data">
                  @csrf
                    <section class="d-md-flex justify-content-between wrapper col-12 mt-2">
                        <div class="mb-3 col-12 col-md-3">
                          <label class="my-1">Stato fase</label>
                          <select name="fase"  class="form-control" required>
                              @if ($ricorso->importo_atto >= 50000)
                                <option value="ricorso_1g">Ricorso 1°Grado</option>     
                                <option value="ricorso_1g">Mediazione</option>
                                <option value="ricorso_2g">Ricorso 2°Grado</option>
                                <option value="cassazione">Cassazione</option>
                              @else
                              <option value="mediazione">Mediazione</option>
                                <option value="ricorso_1g">Ricorso 1°Grado</option>     
                                <option value="ricorso_2g">Ricorso 2°Grado</option>
                                <option value="cassazione">Cassazione</option>
                              @endif
                          </select>
              
                        </div>
                  
                        <div class="mb-3 col-12 col-md-3">
                          <label for="exampleInputTitle1" class="form-label">
                            Controdeduzione Tax Unit
                          </label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputTitle1"
                              aria-describedby="emailHelp"
                              name='contro_deduzioni_tax_unit'
                              value="{{old('name')}}"
                              required
                          />
                        </div>
                  
                        <div class="mb-3 col-12 col-md-3">
                          <label for="exampleInputTitle1" class="form-label">
                              Presentato da 
                          </label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputTitle1"
                              aria-describedby="emailHelp"
                              name="presentato"
                              value="{{old('name')}}"
                              required
                          />
                        </div>
                        <div class="mb-3 col-12 col-md-2">
                          <label for="exampleInputTitle1" class="form-label">
                              Contro Deduzioni Uff. Legale
                          </label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputTitle1"
                              aria-describedby="emailHelp"
                              name="contro_deduzioni_uff_legale"
                              value="{{old('name')}}"
                              required
                          />
                        </div>
                    </section>
                  
                    <section class="d-md-flex justify-content-between align-items-center col-12 wrapper">
                        <div class="mb-3 col-12 col-md-3">
                          <label
                              class="form-check-label mb-1"
                              for="exampleCheck1"
                          >
                              Data Presentazione Ricorso 
                          </label>
                          <input
                              type="date"
                              class="form-control"
                              name="data_presentazione"
                              value="{{old('name')}}"
                              required
                          />
                        </div>
                  
                        <div class="mb-3 col-12 col-md-3">
                          <label
                              class="form-check-label mb-1"
                              for="exampleCheck1"
                          >
                              Data Convocazione
                          </label>
                          <input
                              type="date"
                              class="form-control"
                              name="data_convocazione"
                              value="{{old('name')}}"
                              required
                          />
                        </div>
                  
                        <div class="mb-2 col-12 col-md-3">
                          <label
                              class="form-check-label mb-1"
                              for="exampleCheck1"
                          >
                              Data Deposito
                          </label>
                          <input
                              type="date"
                              class="form-control"
                              name="data_deposito"
                              value="{{old('name')}}"
                              required
                          />
                        </div>
                          
                        <div class="mb-2 col-12 col-md-2">
                          <label for="exampleInputTitle1" class="form-label">
                              Sede
                          </label>
                          <input
                              type="text"
                              class="form-control"
                              id="exampleInputTitle1"
                              aria-describedby="emailHelp"
                              name="sede"
                              value="{{old('name')}}"
                              required
                          />
                        </div>
                    </section>

                    <section class="d-md-flex align-items-center justify-content-between mb-3 py-md-2 col-12 wrapper">
                      <div class="col-12 col-md-4">
                          <h3 class="text-start mb-3 fw-bold text-decoration-underline">
                            Esiti della Sentenza
                          </h3>
                      </div>
                    
                      <div class="mb-2 col-12 col-md-3">    
                        <label
                              class="form-check-label mb-1"
                              for="exampleCheck1"
                        >
                          Esito Sentenza
                          
                        </label>
                        <select name="esito" class="form-control" required>
                            <option value=""></option>
                            <option value="accolto">Accolto</option>
                            <option value="accolto parz">Accolto Parz</option>
                            <option value="rigettato">Rigettato</option>
                            <option value="cessata materia del contendere">Cessata materia del contendere</option>
                        </select>
                      </div>
                      
                      <div class="mb-2 col-12 col-md-3">
                          <label
                                class="form-check-label mb-1"
                                for="exampleCheck1" 
                              >
                            Esito Definitivo Relativo la Sentenza
                              
                          </label>
                          <select name="esito_definitivo" class="form-control" required>
                              <option value=""></option>
                              <option value="Accoglimento totale">Accoglimento totale di quanto richiesto dal contribuente</option>
                              <option value="Accoglimento parziale">Accoglimento parziale di quanto richiesto dal contribuente</option>
                              <option value="Rigetto">Rigetto di quanto richiesto dal contribuente</option>
                              <option value="Proposta convocazione">Proposta convocazione</option>
                          </select>
                      </div>
                    
                    </section> 
                      
                    <section class="d-md-flex align-items-end justify-content-between mb-5 py-md-3 col-12 wrapper">
                      
                      <div class="col-12 col-md-3">
                          <h3 class="text-start mb-3 fw-bold text-decoration-underline">
                            Documenti della sentenza 
                          </h3>
                      </div> 

                      <div class="mb-3 col-12 col-md-2">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"
                        >
                            Data Deposito Sentenza
                        </label>
                        <input
                            type="date"
                            class="form-control"
                            name="data_deposito_sentenza"
                            value="{{old('name')}}"
                            required
                        />
                      </div>
                
                      <div class="mb-3 col-12 col-md-2">
                        <label
                            class="form-check-label mb-1"
                            for="exampleCheck1"
                        >
                            Data Notifica Sentenza
                        </label>
                        <input
                            type="date"
                            class="form-control"
                            name="data_notifica_sentenza"
                            value="{{old('name')}}"
                            required
                        />
                      </div>

                      <div class="col-12 col-md-3">
                        
                        <input type="file" class="form-control" id="customFile" name="nome_file[]" multiple/>
                        <select id="Esito" class="form-control" name="tipologia_file" required>
                          
                          @if (!$existes)
                           
                             <x-layoutComp.modalComponent1 />
                          @else
                              <x-layoutComp.modalComponent1 />
                              <option value="Sentenza_I_Grado">Sentenza di 1° grado</option>
                              <option value="01_Ricorso">Documento Sentenza</option>
                              <option value="19_Varie">Varie</option>
                          @endif
                        </select>
    
                     </div> 
                    </section> 

                      <section class="d-md-flex wrapper">
                    
                      <div class="mb-3 col-12 col-md-3 pe-3">
                            <label for="exampleInputTitle1" class="form-label">
                                Motivazione 
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputTitle1"
                                aria-describedby="emailHelp"
                                name="motivazione"
                                required
                            />
                      
                        </div>
                        <div class="mb-3 col-12 col-md-3">
                            <label for="exampleInputTitle1" class="form-label">
                                Spese Legali 
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id="exampleInputTitle1"
                                aria-describedby="emailHelp"
                                name="spese"
                                required
                            />
                        </div>
                    
                    </section>
                    
                    <section class="d-md-flex align-items-center col-12 wrapper">
                      
                      <div class="mb-2 col-12 col-md-6">
                    
                          <button class="btn btn-dark px-3 w-20 mb-1" onclick="myFunction()" type="submit">Inserisci</button>
                          <script>
                              function myFunction() {
                                  alert("Hai inserito correttamente questo id ricorso")
                              }
                          </script>
                      </div>
                    </section> 
              </form>    
            </div>
          </div>
      </div>
</section>

