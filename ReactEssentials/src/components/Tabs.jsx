import React from 'react'

const Tabs = ({children, buttons, buttonsContainer}) => {
  const ButtonsContainer = buttonsContainer; //because we want a custom component to wrapped aroundm {buttons}
  return (
    <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
    {children}
    </>
  )
}

export default Tabs
