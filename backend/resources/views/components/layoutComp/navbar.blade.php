<nav class="navbar navbar-expand-md navbar-dark shadow-sm up-navbar justify-content-center">
    <a href="https://www.cienneffe.com/" target='blank' class=" transparent">
        <img src="/photos/logo_inv2.png" alt="logo cienneffe">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        @auth
            <ul class="navbar-nav fs-5">
                @if (Auth::user()->is_revisor == true)
                    <li class="px-2">
                        <a href="{{url('/paginaricorsi')}}">Ricorsi</a>
                    </li>

                    <li class="px-2">
                        <a href="/work_flow">Avvia nuovo ricorso</a>
                    </li>
                
                    <li class="px-2">
                        <a href="/paginataxunit">Pagina Tax Unit</a>
                    </li>
                    <li class="px-2">
                        <a href="/cartoline">Cartoline</a>
                    </li>
                    <li class="px-2">
                        <a href="/cartolineForm">Registrazione Cartoline</a>
                    </li> 
                @endif
                    <li class="px-2">
                        <a href="/riscossione">Lotti di spedizione</a>
                    </li>
                    <li class="px-2">
                        <a href="/form_ricossione">Creazione Lotto di spedizione</a>
                    </li>
            </ul>
        @endauth

        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ms-auto">
            <!-- Authentication Links -->
            @guest
                @if (Route::has('login'))
                    <li class="nav-item fs-5">
                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                    </li>
                @endif
                
                @if (Route::has('register'))
                    <li class="nav-item fs-5">
                        <a class="nav-link" href="{{ route('register') }}">{{ __('Registrati') }}</a>
                    </li>
                @endif
            @else
                <li class="nav-item dropdown">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle text-white fs-3" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        {{ Auth::user()->name }}
                    </a>
                
                    <a class="dropdown-item px-2 text-white" href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </li>
            @endguest
        </ul>
    </div>
</nav>





