
const RemainderForm: React.FC = () => {

   return (

        <form className="p-3 bg-white mt-3">
          <section className="mb-3 flex flex-col mx-3" id="div-select-input"> 
              <h5 className="fw-bold text-dark">Invia una notifica</h5>
              <div className="col-12 md:flex flex-col w-96 mb-2">
                  <label htmlFor="exampleInputCalender1" className="form-check-label">
                      Scadenza del compito:
                  </label>
                  <input
                      type="date"
                      id="inputEndDate"
                      name="scadenza_del_compito"
                  />
              </div>
              
              <div className="d-md-flex flex-column col-12 mb-2">
                  <label htmlFor="exampleInputCalender1" className="form-check-label">
                      Descrizione del compito:
                  </label>
                  <input
                      type="text"
                      id="inputDescrizione"
                      aria-describedby="emailHelp"
                      name="descrizione_compito"
                  />
              </div>

              <select name="reminder" id="selectReminder">
                  <option value="uno">Un giorno prima</option>
                  <option value="due">Due giorni prima</option>
                  <option value="tre">Tre giorni prima</option>
                  <option value="cinque">Cinque giorni prima</option>
                  <option value="settimana">Una Settimana prima</option>
              </select>

              <section className="flex flex-col justify-between mb-5">
                <button title="Inserisci" className="btn-send border-solid bg-orange-500 text-white mt-5 py-2 w-full">Inserisci</button>
                <button type="submit" className="btn border border-1 border-dark my-1">Annulla</button>
              </section>

                  <div className="p-2">
                      <h6 className="font-bold">Scadenza impostata:</h6>
              
                      {/* @foreach ($tasks as $task)
                          <p> {{$task->scadenza_del_compito}} </p>
                      @endforeach */}
                  </div>
                  <div className="p-2 mt-2">
                      <h6 className="font-bold">Descrizione del compito:</h6>
                      {/* @foreach ($tasks as $task)
                        {/* <p> {{$task->descrizione_compito}} </p> */}
                      {/* @endforeach */} 
                  </div>
        
          </section>
        
        </form>
   );
}

export default RemainderForm;