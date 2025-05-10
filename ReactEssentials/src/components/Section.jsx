import React from 'react'

const Section = ({children,title, ...props}) => {
  return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}

export default Section
