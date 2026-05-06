import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import { payments as initialPayments } from '../data/mockData.js'
import { Badge, Card, Modal, StatCard, statusTone } from '../components/ui.jsx'

const states = ['Todos', 'Pendiente', 'Recibido', 'Conciliado', 'Por revisar']

export default function Payments() {
  const [payments, setPayments] = useState(initialPayments)
  const [filter, setFilter] = useState('Todos')
  const [modal, setModal] = useState(false)
  const [updated, setUpdated] = useState(null)
  const visible = filter === 'Todos' ? payments : payments.filter((p) => p.status === filter)
  const totals = useMemo(() => ({
    received: payments.filter((p) => p.status === 'Recibido').reduce((s, p) => s + p.amount, 0),
    pending: payments.filter((p) => p.status === 'Pendiente').reduce((s, p) => s + p.amount, 0),
    reconciled: payments.filter((p) => p.status === 'Conciliado').reduce((s, p) => s + p.amount, 0),
  }), [payments])
  const cycleStatus = (payment) => {
    const order = ['Pendiente', 'Recibido', 'Conciliado', 'Por revisar']
    const next = order[(order.indexOf(payment.status) + 1) % order.length]
    setPayments((list) => list.map((p) => p.id === payment.id ? { ...p, status: next } : p)); setUpdated(payment.id); setTimeout(() => setUpdated(null), 600)
  }
  const addPayment = () => { setPayments((list) => [...list, { id: Date.now(), client: 'Cliente demo', project: 'Nuevo proyecto', amount: 450, currency: 'USDC', dueDate: '15 May 2026', status: 'Pendiente' }]); setModal(false) }
  return <div className="smooth-enter space-y-6">
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-widest text-teal">Control de cobranza</p><h2 className="text-3xl font-black text-navy">Seguimiento de pagos</h2><p className="mt-2 text-slate-500">Cambia estados para simular conciliación. Cada cambio tiene una microinteracción visual.</p></div><button onClick={() => setModal(true)} className="inline-flex items-center gap-2 rounded-2xl bg-teal px-5 py-3 font-bold text-white"><Plus size={18}/> Registrar pago manual</button></div>
    <div className="grid gap-5 md:grid-cols-3"><StatCard label="Total recibido" value={`${totals.received.toLocaleString()} USDC`} detail="Pagos marcados como recibidos" /><StatCard label="Total pendiente" value={`${totals.pending.toLocaleString()} USDT`} detail="Cobros por vencer" tone="violet" /><StatCard label="Total conciliado" value={`${totals.reconciled.toLocaleString()} USDC`} detail="Pagos cruzados con movimientos" /></div>
    <Card><div className="mb-5 flex flex-wrap gap-2">{states.map((state) => <button key={state} onClick={() => setFilter(state)} className={`rounded-full px-4 py-2 text-sm font-bold ${filter === state ? 'bg-navy text-white' : 'bg-slate-100 text-slate-600'}`}>{state}</button>)}</div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr>{['Cliente','Proyecto','Monto','Moneda','Fecha esperada','Estado','Acción'].map((h) => <th key={h} className="px-4 py-3">{h}</th>)}</tr></thead><tbody className="divide-y divide-slate-100">{visible.map((p) => <tr key={p.id} className={`${updated === p.id ? 'pulse-update bg-teal-50' : ''}`}><td className="px-4 py-4 font-bold text-navy">{p.client}</td><td className="px-4 py-4">{p.project}</td><td className="px-4 py-4 font-bold">{p.amount.toLocaleString()}</td><td className="px-4 py-4">{p.currency}</td><td className="px-4 py-4 text-slate-500">{p.dueDate}</td><td className="px-4 py-4"><Badge tone={statusTone(p.status)}>{p.status}</Badge></td><td className="px-4 py-4"><button onClick={() => cycleStatus(p)} className="rounded-xl bg-slate-100 px-3 py-2 font-bold text-slate-600">Cambiar estado</button></td></tr>)}</tbody></table></div></Card>
    {modal && <Modal title="Registrar pago manual" onClose={() => setModal(false)}><div className="grid gap-4"><input className="rounded-2xl border border-slate-200 px-4 py-3" defaultValue="Cliente demo"/><input className="rounded-2xl border border-slate-200 px-4 py-3" defaultValue="450 USDC"/><button onClick={addPayment} className="rounded-2xl bg-teal px-5 py-3 font-bold text-white">Agregar pago demo</button></div></Modal>}
  </div>
}
