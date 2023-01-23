import React from "react"
import { Outlet, Route, Routes } from "react-router"
import { Login } from "../views/Login"
import { Profile } from "../views/Profile"
import { Translation } from "../views/Translation"
import { PageFooter } from "../components/page/PageFooter"
import { PageBackground } from "../components/page/PageBackground"
import { Center } from "../components/common/Center"
import { ProtectedRoute } from "./ProtectedRoute"
import { PageEmpty } from "../components/page/PageEmpty"

export const PATHS = {
  translate: "/",
  login: "/login",
  profile: "/profile",
}

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<RouteWrapper />}>
        <Route
          path={PATHS.translate}
          element={
            <ProtectedRoute>
              <Translation />
            </ProtectedRoute>
          }
        />
        <Route path={PATHS.login} element={<Login />} />
        <Route
          path={PATHS.profile}
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageEmpty />} />
      </Route>
    </Routes>
  )
}

const RouteWrapper = () => {
  return (
    <PageBackground>
      <Center className="lg:px-72 md:px-32 px-16 py-24">
        <Outlet />
      </Center>
      <PageFooter />
    </PageBackground>
  )
}
