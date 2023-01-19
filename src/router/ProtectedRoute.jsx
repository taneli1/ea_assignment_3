import React from "react"
import PropTypes from "prop-types"
import { Navigate } from "react-router-dom"

const Props = {
  children: PropTypes.node.isRequired,
}

export const ProtectedRoute = ({ children }) => {
  // if (true) {
  //   return <Navigate to="/login" replace />
  // }

  return children
}

ProtectedRoute.propTypes = Props
