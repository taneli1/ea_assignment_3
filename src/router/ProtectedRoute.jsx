import React from "react"
import PropTypes from "prop-types"
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const Props = {
  children: PropTypes.node.isRequired,
}

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

ProtectedRoute.propTypes = Props
