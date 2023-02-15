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
    UpdateFase,
    UpdateEnte, 
    UpdateServizio
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
                path="/ente"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <EntePage />
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
                path="/detail_ente/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <EnteDetail />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/detail_servizio/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <DettaglioEnteDetail />
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
                path="/form_ente/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <EnteForm />
                        </ProtectedRoute>
                    </Suspense>
                }
            />

            <Route
                path="/form_ente"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <EnteForm />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
             <Route
                path="/form_dettaglio_ente/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <DettaglioEnte />
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
                path="/update_fase/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateFase />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
             <Route
                path="/update_cartolina/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateCartolina />
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
                path="/update_riconciliazione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateRiconciliazione />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/update_ente/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateEnte />
                        </ProtectedRoute>
                    </Suspense>
                }
            />
            <Route
                path="/update_servizio/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <UpdateServizio />
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
                path="/detail_riconciliazione/:slug"
                element={
                    <Suspense fallback={<Loader3 />}>
                        <ProtectedRoute>
                            <RiconciliazioneDetail />
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
            <Route path="/send_email" element={
                <Suspense fallback={<Loader3 />}>
                   <ResetLinkView />
                </Suspense>
            } />
            <Route
                path="/register"
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
