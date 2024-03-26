import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'var(--background-color-two)',
        border: '2px solid var(--border-color-eight)',
        padding: '3rem',
      };
    
      const headingStyle = {
        fontSize: '3rem',
        color: 'var(--logo-text-one)',
      };
    
      const paragraphStyle = {
        fontSize: '2rem',
        color: 'var(--background-text)',
      };


  return (
    <>
        <div style={containerStyle}>
            <h2 style={headingStyle}>Ooops!</h2>
            <p style={paragraphStyle}>The page you are looking for does not exist</p>
        </div>
    </>
  )
}

export default ErrorPage


 