import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Homepage, Ricorsi, Cartoline, Fase, RicorsiDetail, FaseDetail } from '../index';
import { Navbar, Footer, Header, Loader3 } from '../../UI/index';

const App = () => {
    const Homepage = lazy(() => import('../Home/Homepage'));
    const Ricorsi = lazy(() => import('../RicorsiWorkflow'));
    const Cartoline = lazy(() => import('../Cartoline'));
    const Fase = lazy(() => import('../Fase'));
    const RicorsiDetail = lazy(() => import('../RicorsiDetail'));
    const FaseDetail = lazy(() => import('../FaseDetail'));
    const CartolineDetail = lazy(() => import('../CartolineDetail'));
    const CartolinePage = lazy(() => import('../CartolinePage'));

    return (
        <BrowserRouter>
            <Navbar />
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loader3 />}>
                            <Homepage />
                        </Suspense>
                    }
                />

                <Route
                    path="/ricorsi"
                    element={
                        <Suspense fallback={<Loader3 />}>
                            <Ricorsi />
                        </Suspense>
                    }
                />

                <Route
                    path="/ricorsi/:slug"
                    element={
                        <Suspense fallback={<Loader3 />}>
                            <Ricorsi />
                        </Suspense>
                    }
                />

                <Route
                    path="/cartoline"
                    element={
                        <Suspense fallback={<Loader3 />}>
                            <CartolinePage />
                        </Suspense>
                    }
                />
                <Route
                    path="/work_flow/"
                    element={
                        <Suspense fallback={<Loader3 />}>
                            <Cartoline />
                        </Suspense>
                    }
                />

                <Route
                    path="/work_flow/:slug"
                    element={
                        <Suspense fallback={<Loader3 />}>
                            <Cartoline />
                        </Suspense>
                    }
                />

                <Route
                    path="/form_fase/:slug"
                    element={
                        <Suspense fallback={<Loader3 />}>
                            <Fase />
                        </Suspense>
                    }
                />

                <Route
                    path="/ricorsi_detail/:slug"
                    element={
                        <Suspense fallback={<Loader3 />}>
                            <RicorsiDetail />
                        </Suspense>
                    }
                />

                <Route
                    path="/fase_detail/:slug"
                    element={
                        <Suspense fallback={<Loader3 />}>
                            <FaseDetail />
                        </Suspense>
                    }
                />

                <Route
                    path="/detail_cartoline/:slug"
                    element={
                        <Suspense fallback={<Loader3 />}>
                            <CartolineDetail />
                        </Suspense>
                    }
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
