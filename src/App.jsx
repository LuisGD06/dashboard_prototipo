import { useEffect, useState } from 'react'
import Layout from './components/Layout.jsx'
import { Toast } from './components/ui.jsx'
import { user } from './data/mockData.js'
import Alerts from './pages/Alerts.jsx'
import ConnectSources from './pages/ConnectSources.jsx'
import Converter from './pages/Converter.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Landing from './pages/Landing.jsx'
import Onboarding from './pages/Onboarding.jsx'
import Payments from './pages/Payments.jsx'
import Reports from './pages/Reports.jsx'
import Reserves from './pages/Reserves.jsx'
import Result from './pages/Result.jsx'

const pages = {
  landing: Landing,
  onboarding: Onboarding,
  connect: ConnectSources,
  dashboard: Dashboard,
  payments: Payments,
  converter: Converter,
  reserves: Reserves,
  alerts: Alerts,
  reports: Reports,
  result: Result,
}

export default function App() {
  const [page, setPage] = useState('landing')
  const [toast, setToast] = useState('')
  const Page = pages[page]
  const showToast = (message) => setToast(message)

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 2600)
    return () => clearTimeout(timer)
  }, [toast])

  return <>
    <Layout page={page} setPage={setPage} user={user}>
      <Page setPage={setPage} showToast={showToast} />
    </Layout>
    <Toast message={toast} />
  </>
}
