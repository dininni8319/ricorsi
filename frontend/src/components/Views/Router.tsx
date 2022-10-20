import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader3,Frame } from "../UI/index";
import ProtectedRoute from "../Utilities/ProtectedRoutes";

const Router = () => {
  const Homepage = lazy(() => import("./Home/Homepage"));
  const Ricorsi = lazy(() => import("./RicorsiWorkflow"));
  const Cartoline = lazy(() => import("./Cartoline"));
  const Fase = lazy(() => import("./Fase"));
  const RicorsiDetail = lazy(() => import("./RicorsiDetail"));
  const FaseDetail = lazy(() => import("./FaseDetail"));
  const CartolineDetail = lazy(() => import("./CartolineDetail"));
  const CartolinePage = lazy(() => import("./CartolinePage"));
  const LottiSpedizioneDetail = lazy(() => import("./LottiSpedizioneDetail"));
  const LottiSpedizione = lazy(() => import("./LottiSpedizione"));
  const RiscossionePage = lazy(() => import("./RiscossionePage"));
  const Login = lazy(() => import("./Login"));
  const Register = lazy(() => import("./Register"));


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
