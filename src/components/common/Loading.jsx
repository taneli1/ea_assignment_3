import React from "react"
import PropTypes from "prop-types"
import { Status } from "../../utils/status"
import BeatLoader from "react-spinners/BeatLoader"

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

  return <BeatLoader size={10} color="#1DBB84" />
}

Loading.propTypes = Props
