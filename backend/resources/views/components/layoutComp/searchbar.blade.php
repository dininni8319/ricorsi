<section>
  <div class="row justify-content-end">
    <div class="col-md-9 mb-3">
        <form class="form-inline my-2 my-lg-0" action=" {{ route('search') }}" method="GET">
            <input class="form-controller mr-sm-2 bg-white" name="query" type="text" placeholder="Ricerca" aria-label="Ricerca" required>
            <button class="my-2 py-2 my-sm-0 btn-serch" type="submit">Ricerca</button>
        </form>
    </div>
  </div>
</section>