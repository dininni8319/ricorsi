<form action="{{ route('update.fase', compact('fase')) }}" method="post">
    @csrf
    <div class="mb-3 col-12 col-md-3">
        <label>
        Stato fase 
        </label>
        <select name="fase" id="" class="form-control">
            <option value="mediazione">Mediazione</option>
            <option value="ricorso_1g">Ricorso 1°Grado</option>
            <option value="ricorso_2g">Ricorso 2°Grado</option>
            <option value="cassazione">Cassazione</option>
        </select>
    </div>
    <div class="col-12 col-md-4 mb-3">
        <button type="submit" class="btn btn-dark">Aggiorna</button>
    </div>
</form>