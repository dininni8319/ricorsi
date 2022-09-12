@extends('layouts.app')

@section('content')
   <div class="row justify-content-center">
      <h2 class="text-center">Hai cercato {{ $query }}</h2>
      <x-layoutComp.searchCard :ricorsi="$ricorsi"></x-layoutComp.searchCard>
   </div>
@endsection