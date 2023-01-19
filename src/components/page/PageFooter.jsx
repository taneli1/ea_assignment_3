import React from "react"
import { useLocation } from "react-router"
import logo from "../../assets/img/logo.png"
import question from "../../assets/img/logo_question.png"
import { PATHS } from "../../router/AppRouter"

export const PageFooter = () => {
  const path = useLocation().pathname
  const notFound = is404(path)

  return (
    <div className="bg-gradient-to-r from-primary to-secondary h-4 align-bottom">
      {notFound ? renderImage(question) : renderImage(logo)}
    </div>
  )
}

const is404 = (path) => {
  return !Object.values(PATHS).includes(path)
}

const renderImage = (src) => (
  <img className="absolute bottom-1 h-32 left-[-2rem]" src={src} alt="" />
)
