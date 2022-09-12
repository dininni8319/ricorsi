<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

            <!-- CSRF Token -->
            <meta name="csrf-token" content="{{ csrf_token() }}">
            
{{--  <img src="/photos/logo_piccolo.png" alt="logo cienneffe"> --}}
            <title>{{ config('Credit network and finance',) }} Credit Network & finance</title>
          
            <!-- add icon link -->
        
            <link rel="shortcut icon" href="https://www.cienneffe.com/wp-content/uploads/2017/02/favicon.png" type="image/x-icon">
              
            <!-- Fonts -->
            <link rel="dns-prefetch" href="//fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    
    <body>
        <div id="app">
            <x-layoutComp.navbar></x-layoutComp.navbar>

            <main class="custom-height py-3">
                @yield('content')
            </main>
            @extends('components.layoutComp.footer')
            
        </div>

            <!-- Scripts -->
            <script src="{{ asset('js/app.js') }}" defer></script>
            {{-- <script src="js/chartsCustom.js"></script> --}}
        </body>
</html>
