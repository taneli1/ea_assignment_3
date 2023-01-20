import React from "react"
import PropTypes from "prop-types"
import { Status } from "../../utils/status"

const Props = {
  status: PropTypes.oneOf([Status.idle, Status.loading, Status.error])
    .isRequired,
}

export const Loading = ({ status }) => {
  if (status === Status.idle) {
    return null
  }

  if (status === Status.error) {
    return <p>An error occured.</p>
  }

  return <p>Loading...</p>
}

Loading.propTypes = Props
