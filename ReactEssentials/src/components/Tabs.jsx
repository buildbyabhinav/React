import React from 'react'

const Tabs = ({children, buttons, buttonsContainer = 'menu'}) => { // default prop value then we need not pass it in where used
  const ButtonsContainer = buttonsContainer; //because we want a custom component to wrapped aroundm {buttons}
  return (
    <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
    {children}
    </>
  )
}

export default Tabs
