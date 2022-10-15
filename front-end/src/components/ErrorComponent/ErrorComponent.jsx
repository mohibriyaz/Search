import React from 'react'

const ErrorComponent = ({error}) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Something went wrong!</strong> {error}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  
  )
}
export default ErrorComponent