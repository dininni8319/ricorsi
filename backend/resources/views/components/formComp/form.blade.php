
<div>
  <form action="{{-- {{url("/$/* .(isset($ricorso) ? $ricorso->id : '')."" */path/")}} --}}" method="POST" class="container-fluid d-md-flex justify-content-center col-11 col-md-9 form">
    {{ $slot }}
  
  </form>
</div>