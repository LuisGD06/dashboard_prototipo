import { useState } from 'react'
import { Bell } from 'lucide-react'
import { alerts as initialAlerts } from '../data/mockData.js'
import { Badge, Card, Switch } from '../components/ui.jsx'

export default function Alerts() {
  const [alerts, setAlerts] = useState(initialAlerts)
  const toggle = (id) => setAlerts((list) => list.map((alert) => alert.id === id ? { ...alert, active: !alert.active } : alert))
  return <div className="smooth-enter space-y-6"><div><p className="text-sm font-bold uppercase tracking-widest text-teal">Inteligencia financiera simple</p><h2 className="text-3xl font-black text-navy">Alertas</h2><p className="mt-2 text-slate-500">Configura solo las alertas que realmente necesitas.</p></div><div className="grid gap-4">{alerts.map((alert) => <Card key={alert.id} className="flex items-center justify-between gap-4"><div className="flex items-center gap-4"><div className="rounded-2xl bg-teal-50 p-3 text-teal"><Bell/></div><div><Badge tone={alert.type === 'Reserva' ? 'violet' : alert.type === 'Pago' ? 'amber' : 'blue'}>{alert.type}</Badge><p className="mt-2 font-bold text-navy">{alert.text}</p></div></div><Switch checked={alert.active} onChange={() => toggle(alert.id)} /></Card>)}</div></div>
}
