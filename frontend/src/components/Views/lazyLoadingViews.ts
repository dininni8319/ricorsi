import { lazy } from 'react';

export const Homepage = lazy(() => import('./Home/Homepage'));
export const EntePage = lazy(() => import('./Ente/Ente'));
export const Ricorsi = lazy(() => import('./FormViews/RicorsiWorkflow'));
export const Cartoline = lazy(() => import('./FormViews/Cartoline'));
export const Fase = lazy(() => import('./FormViews/Fase'));
export const RicorsiDetail = lazy(() => import('./RicorsiDetail'));
export const FaseDetail = lazy(() => import('./FaseDetail'));
export const CartolineDetail = lazy(() => import('./CartolineDetail'));
export const EnteDetail = lazy(() => import('./EnteDetail'));
export const DettaglioEnte = lazy(() => import('./FormViews/DettaglioEnte'));
export const ResetPassword = lazy(() => import('./ResetPassword'));
export const CartolinePage = lazy(() => import('./CartolinePage'));
// export const ResetLinkView = lazy(() => import('./ResetLinkView'));
export const LottiSpedizioneDetail = lazy(
    () => import('./LottiSpedizioneDetail')
);
export const RiconciliazioneDetail = lazy(
    () => import('./RiconciliazioneDetail')
);

export const LottiSpedizione = lazy(
    () => import('./FormViews/LottiSpedizione')
);
export const RiscossionePage = lazy(() => import('./RiscossionePage'));
export const Riconciliazione = lazy(
    () => import('./FormViews/Riconciliazione')
);
export const EnteForm = lazy(
    () => import('./FormViews/Ente')
);
export const Login = lazy(() => import('./Login'));
export const Register = lazy(() => import('./Register'));
export const UpdateRicorso = lazy(() => import('./UpdateForms/UpdateRicorso'));
export const UpdateRiscossione = lazy(
    () => import('./UpdateForms/UpdateRiscossione')
);
export const UpdateRiconciliazione = lazy(
    () => import('./UpdateForms/UpdateRiconciliazione')
);
