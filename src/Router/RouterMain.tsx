import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import {Layout} from '../Layout/Layout'
import {lazy} from 'react'

const Home = lazy(() => import('../page/Home'))

export const RouterMain = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to={'/'} replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
