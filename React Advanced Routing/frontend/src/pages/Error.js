import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
//  error.status // if we have thrown an object in the problematic area then it is directly seen as an error but for 
    let title= 'An error occured'
    let message = 'Something Went wrong'

    if(error.status === 500){
        // message = JSON.parse(error.data).message
        message = error.data.message // since in events file we have passed json from react-router-dom we need not use parse here like abovve
    }
  return (
    <PageContent title={title} message={message}><p>Something Went Wrong</p></PageContent>
  )
}

export default ErrorPage
