import { lazy } from "react";

export const Homepage = lazy(() => import("./Home/Homepage"));
export const Ricorsi = lazy(() => import("./FormViews/RicorsiWorkflow"));
export const Cartoline = lazy(() => import("./FormViews/Cartoline"));
export const Fase = lazy(() => import("./FormViews/Fase"));
export const RicorsiDetail = lazy(() => import("./RicorsiDetail"));
export const FaseDetail = lazy(() => import("./FaseDetail"));
export const CartolineDetail = lazy(() => import("./CartolineDetail"));
export const CartolinePage = lazy(() => import("./CartolinePage"));
export const LottiSpedizioneDetail = lazy(() => import("./LottiSpedizioneDetail"));
export const LottiSpedizione = lazy(() => import("./FormViews/LottiSpedizione"));
export const RiscossionePage = lazy(() => import("./RiscossionePage"));
export const Riconciliazione = lazy(() => import("./FormViews/Riconciliazione"));
export const Login = lazy(() => import("./Login"));
export const Register = lazy(() => import("./Register"));
export const UpdateRicorso = lazy(() => import('./UpdateForms/UpdateRicorso'))
export const UpdateRiscossione = lazy(() => import('./UpdateForms/UpdateRiscossione'))