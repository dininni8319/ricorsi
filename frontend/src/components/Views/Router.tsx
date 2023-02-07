import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader3 } from '../UI/index';
import { ResetLinkView } from "./index";
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
    ResetPassword,
    RiconciliazioneDetail,
    UpdateRiconciliazione,
    EnteForm,
    EntePage,
    EnteDetail,
    DettaglioEnte,
    DettaglioEnteDetail,
    UpdateCartolina,
    UpdateFase
} from './lazyLoadingViews';
import ProtectedRoute from '../Utilities/ProtectedRoutes';

const Router = () => {
    return (
        <Routes>
            <Route
                path="/ricorsi"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Homepage />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/ente"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <EntePage />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
             <Route
                path="/ricorsi/ricorsi"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Ricorsi />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/ricorsi/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Ricorsi />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/cartoline"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <CartolinePage />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/work_flow/"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Cartoline />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/form_fase/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Fase />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/ricorsi_detail/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <RicorsiDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/fase_detail/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <FaseDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/detail_cartoline/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <CartolineDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/detail_ente/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <EnteDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/detail_servizio/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <DettaglioEnteDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            
            <Route
                path="/ricorsi/riscossione/"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <RiscossionePage />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/form_riscossione/"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <LottiSpedizione />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/form_riscossione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <LottiSpedizione />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/form_ente/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <EnteForm />
                        </ProtectedRoute>
                    </Suspense>
                }
            />

            <Route
                path="/ricorsi/form_ente"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <EnteForm />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
             <Route
                path="/ricorsi/form_dettaglio_ente/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <DettaglioEnte />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/form_rendicondazione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <Riconciliazione />
                        </ProtectedRoute>
                    </Suspense>
                }
            />            
            <Route
                path="/ricorsi/update_ricorso/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateRicorso />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
             <Route
                path="/ricorsi/update_fase/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateFase />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
             <Route
                path="/ricorsi/update_cartolina/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateCartolina />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/update_riscossione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateRiscossione />
                        </ProtectedRoute>
                    </Suspense>
                }
            />

           <Route
                path="/ricorsi/update_riconciliazione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateRiconciliazione />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/detail_riscossione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <LottiSpedizioneDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
             <Route
                path="/ricorsi/detail_riconciliazione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <RiconciliazioneDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/ricorsi/login"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <Login />
                    </Suspense>
                }
            />
            <Route path="/ricorsi/reset/:token" element={
                <Suspense fallback={<Loader3 />}>
                   <ResetPassword />
                </Suspense>
            } />

            <Route path="/ricorsi/send_email" element={
                <Suspense fallback={<Loader3 />}>
                   <ResetLinkView />
                </Suspense>
            } />
        
            <Route
                path="/ricorsi/register"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <Register />
                    </Suspense>
                }
            /> 
        </Routes>
    );
};

export default Router;
