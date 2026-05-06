import { useState } from 'react'
import { Plus } from 'lucide-react'
import { balances, reserves as initialReserves } from '../data/mockData.js'
import { Card, Modal } from '../components/ui.jsx'

export default function Reserves() {
  const [reserves, setReserves] = useState(initialReserves)
  const [modal, setModal] = useState(false)
  const total = balances.USDC + balances.USDT
  const addReserve = () => { setReserves((list) => [...list, { id: Date.now(), name: 'Reserva demo', amount: 250, target: 800, color: 'violet' }]); setModal(false) }
  return <div className="smooth-enter space-y-6">
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-widest text-violet">Planificación</p><h2 className="text-3xl font-black text-navy">Reservas y obligaciones</h2><p className="mt-2 text-slate-500">Separa mentalmente fondos para compromisos futuros sin moverlos de tus plataformas.</p></div><button onClick={() => setModal(true)} className="inline-flex items-center gap-2 rounded-2xl bg-violet px-5 py-3 font-bold text-white"><Plus size={18}/> Crear reserva</button></div>
    <div className="rounded-3xl border border-violet/20 bg-violet-50 p-5 text-violet"><strong>Advertencia:</strong> Esta función ayuda a organizar fondos, pero no reemplaza asesoría tributaria o contable.</div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{reserves.map((reserve) => { const pctTotal = Math.round((reserve.amount / total) * 100); const pctTarget = Math.min(100, Math.round((reserve.amount / reserve.target) * 100)); return <Card key={reserve.id}><p className="text-sm font-bold uppercase tracking-widest text-slate-400">Reserva</p><h3 className="mt-2 text-2xl font-black text-navy">{reserve.name}</h3><p className="mt-4 text-3xl font-black text-violet">{reserve.amount.toLocaleString()} USDC</p><p className="mt-1 text-sm text-slate-500">{pctTotal}% del saldo total</p><div className="mt-5 h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full bg-violet" style={{ width: `${pctTarget}%` }}/></div><p className="mt-2 text-xs font-semibold text-slate-500">{pctTarget}% del objetivo: {reserve.target.toLocaleString()} USDC</p></Card>})}</div>
    {modal && <Modal title="Crear reserva" onClose={() => setModal(false)}><div className="grid gap-4"><input className="rounded-2xl border border-slate-200 px-4 py-3" defaultValue="Reserva demo"/><input className="rounded-2xl border border-slate-200 px-4 py-3" defaultValue="10% sugerido"/><input className="rounded-2xl border border-slate-200 px-4 py-3" defaultValue="800 USDC"/><button onClick={addReserve} className="rounded-2xl bg-violet px-5 py-3 font-bold text-white">Crear reserva demo</button></div></Modal>}
  </div>
}
