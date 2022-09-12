<section class="d-md-flex align-items-center justify-content-between mb-5 py-md-3 col-12 wrapper">
  <div class="col-12 col-md-5">
      <h3 class="text-start mb-3 fw-bold text-decoration-underline">
     Esiti 
      </h3>
  </div>

  <div class="mb-3 col-12 col-md-3">
        
    <label
          class="form-check-label mb-1"
          for="exampleCheck1"
    >
     Esito 
      
    </label>
  <select name="esito" class="form-control">
      <option value="accolto">Accolto</option>
      <option value="accolto parz">Accolto parz</option>
      <option value="rigettato">Rigettato</option>
      <option value="cessata materia del contendere">Cessata materia del contendere</option>
  </select>

  </div>
  
      <div class="mb-3 col-12 col-md-4">
          <label
              class="form-check-label mb-1"
              for="exampleCheck1" 
          >Esito definitivo </label>
      <select name="esito_definitivo" id="" class="form-control">
          <option value="Accoglimento totale">Accoglimento totale di quanto richiesto dal contribuente</option>
          <option value="Accoglimento parziale">Accoglimento parziale di quanto richiesto dal contribuente</option>
          <option value="Rigetto">Rigetto di quanto richiesto dal contribuente</option>
          <option value="Proposta convocazione">Proposta convocazione</option>
        </select>

      </div>

  </div>

</section>

<section class="d-md-flex align-items-center justify-content-between mb-5 col-12 wrapper">

  <div class="mb-3 col-12 col-md-4">
      <label for="exampleInputTitle1" class="form-label">
          Motivazione 
      </label>
      <input
          type="text"
          class="form-control"
          id="exampleInputTitle1"
          aria-describedby="emailHelp"
          name="motivazione"
      />

  </div>
  <div class="mb-3 col-12 col-md-4">
      <label for="exampleInputTitle1" class="form-label">
          Spese legali 
      </label>
      <input
          type="text"
          class="form-control"
          id="exampleInputTitle1"
          aria-describedby="emailHelp"
          name="spese"/>
  </div>

</section>

<section class="d-md-flex align-items-center justify-content-between mb-5 py-md-3 col-12 wrapper">
  
  <div class="mb-2 col-12 col-md-6">

      <button class="btn btn-dark px-3 w-20"onclick=" myFunction ()">Inserisci</button>
      <script>
          function myFunction() {
               alert("Hai inserito correttamente questo id ricorso")
          }
      </script>
  </div>
</section> 