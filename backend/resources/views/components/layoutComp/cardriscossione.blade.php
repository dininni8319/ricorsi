@foreach ($riscossione->riconciliazioni as $riconciliazione)

<section class="card-header-custom d-flex py-2 fw-bold px-3 justify-content-center custom-card-class mt-3">Riconciliazione</section>
  <section class="shadow mb-3 bg-white border border-1">
      <div class="row">
        <div class="col"><b>Mese:</b></div>
        <div class="col"> <b>Anno:</b></div>
        <div class="col"><b>Totale:</b> </div>
        <div class="col"><b>Spese di notifica:</b> </div>
        <div class="col"><b>Diritti vari:</b> </div>
        <div class="col"><b>Oneri di riscossione:</b> </div>
        <div class="col"><b>Data creazione:</b> </div>
      </div>

      <div class="row">
        <div class="col">{{$riconciliazione->mese}}</div>
        <div class="col">{{$riconciliazione->anno}}</div>
        <div class="col">{{$riconciliazione->totale}}</div>
        <div class="col">{{$riconciliazione->spese_notifica}}</div>
        <div class="col">{{$riconciliazione->diritti_vari}}</div>
        <div class="col">{{$riconciliazione->oneri_riscossione}}</div>
       <div class="col">{{date('d-m-Y', strtotime($riconciliazione->created_at))}}</div>
      </div>
     {{--  onclick="event.preventDefault();" --}}
     
     <div class="row d-flex justify-content-evenly align-items-center">
        <div class="col-12 col-md-5">
          <a class="px-2 text-primary" href="{{ route('update.form.rendicontazione', compact('riconciliazione')) }}">Aggiorna la Rendicontazione</a>

        </div>
      {{--   <form method="POST" action="{{ url('/delete_riconciliazione',['id'=> $riconciliazione->id, 'riscossione' => $riscossione->id]) }}" class="mb-2 col-12 col-md-5">
          {{ csrf_field() }}
          {{ method_field('DELETE') }}
          <button type="submit" class="mt-1">
            <i class="fa-solid fa-trash-can icon-custom"></i>
          </button>
        
        </form> --}}
     </div>
  </section>     
@endforeach 
                             
                                