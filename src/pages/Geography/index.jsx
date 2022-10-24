import React, { Suspense } from 'react'


const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Grography = () => {
  return (
    <div style={{height:'100%'}}>
       <Suspense fallback={<div>Loading...</div>}>
       <Spline scene="https://prod.spline.design/6gayS6vGcoQYkRHL/scene.splinecode" />
       </Suspense>
  </div>
  )
}

export default Grography