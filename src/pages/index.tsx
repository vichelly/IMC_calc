import React, { useEffect, useState } from 'react'
import Logo from 'components/Logo'
import Content from 'components/Content'

export default function Home() {
  //alterar cor do menu ao scrollar

  const [escureceMenu, setEscureceMenu] = useState(false)

  useEffect(function () {
    function ScrollY() {
      if (window.scrollY > 10) {
        setEscureceMenu(true)
      } else {
        setEscureceMenu(false)
      }
    }
    window.addEventListener('scroll', ScrollY)
  }, [])

  return (
    <>
      <Logo />
      <Content />
    </>
  )
}
