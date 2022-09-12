<form action="{{route('reminder', compact('id'))}}" method="POST" enctype="multipart/form-data" class="row ms-3 p-3 bg-white col-11 col-md-8 mt-3">
    @csrf

    <section class="mb-3 d-flex flex-column mx-3" id="div-select-input"> 
        <h5 class="fw-bold text-dark">Invia una notifica</h5>
        <div class="col-12 d-md-flex flex-column  w-100 mb-2">
            <label htmlFor="exampleInputCalender1" className="form-check-label">
                Scadenza del compito:
            </label>
            <br>
            <input
                type="date"
                className="form-control"
                id="inputEndDate"
                name="scadenza_del_compito"
            />
        </div>
        
        <div class="d-md-flex flex-column col-12 mb-2">
            <label htmlFor="exampleInputCalender1" className="form-check-label">
                Descrizione del compito:
            </label>
            <input
                type="text"
                className="form-control"
                id="inputDescrizione"
                aria-describedby="emailHelp"
                name="descrizione_compito"
            />
        </div>

        <select name="reminder" id="selectReminder" class="form-control">
            <option value="uno">Un giorno prima</option>
            <option value="due">Due giorni prima</option>
            <option value="tre">Tre giorni prima</option>
            <option value="cinque">Cinque giorni prima</option>
            <option value="settimana">Una Settimana prima</option>
        </select>

        <section class="d-flex flex-column justify-content-between mb-5">
          <x-button :title="__('Inserisci')"></x-button>
          <button type="submit" class="btn btn-light border border-1 border-dark my-1">Annulla</button>
        </section>

        @if ($tasks ?? '')
            <div class="cardin p-2">
                <h6 class="fw-bold">Scadenza impostata:</h6>
        
                @foreach ($tasks as $task)
                    <p> {{$task->scadenza_del_compito}} </p>
                @endforeach
            </div>
            <div class="cardin p-2 mt-2">
                <h6 class="fw-bold">Descrizione del compito:</h6>
                @foreach ($tasks as $task)
                   <p> {{$task->descrizione_compito}} </p>
                @endforeach
            </div>
    
        @endif    

    </section>
    
</form>