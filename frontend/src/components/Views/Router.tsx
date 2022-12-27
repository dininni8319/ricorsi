import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader3 } from '../UI/index';
import {
    Homepage,
    Ricorsi,
    Cartoline,
    Fase,
    RicorsiDetail,
    FaseDetail,
    CartolineDetail,
    CartolinePage,
    LottiSpedizione,
    LottiSpedizioneDetail,
    Login,
    Register,
    UpdateRicorso,
    UpdateRiscossione,
    RiscossionePage,
    Riconciliazione,
    ResetPassword
} from './lazyLoadingViews';
import ProtectedRoute from '../Utilities/ProtectedRoutes';

const Router = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Homepage />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Ricorsi />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Ricorsi />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/cartoline"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <CartolinePage />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/work_flow/"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Cartoline />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/work_flow/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Cartoline />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/form_fase/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Fase />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi_detail/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <RicorsiDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/fase_detail/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <FaseDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/detail_cartoline/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <CartolineDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/riscossione/"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <RiscossionePage />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/form_riscossione/"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <LottiSpedizione />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/form_riscossione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <LottiSpedizione />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/form_rendicondazione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Riconciliazione />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/update_ricorso/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateRicorso />
                        </ProtectedRoute>
                    </Suspense>
                }
            />

            <Route
                path="/update_riscossione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateRiscossione />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/detail_riscossione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <LottiSpedizioneDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/login"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <Login />
                    </Suspense>
                }
            />
            <Route path="/reset/:token" element={
                <Suspense fallback={<Loader3 />}>
                   <ResetPassword />
                </Suspense>
        } />

            {/* <Route
                path="/register"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <Register />
                    </Suspense>
                }
            /> */}
        </Routes>
    );
};

export default Router;
