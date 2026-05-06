import { useState } from 'react'
import { Card } from '../components/ui.jsx'

export default function Onboarding({ setPage }) {
  const [form, setForm] = useState({ name: 'Luis García', type: 'Freelancer', localCurrency: 'PEN', stable: 'USDC' })
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))
  return <div className="smooth-enter mx-auto max-w-4xl">
    <Card className="p-8 lg:p-10">
      <p className="text-sm font-bold uppercase tracking-widest text-teal">Crear cuenta demo</p>
      <h2 className="mt-2 text-4xl font-black text-navy">Simula tu ingreso a Simbiosis</h2>
      <p className="mt-3 text-slate-500">No hay autenticación real. Solo usamos estos datos para personalizar la demo.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="space-y-2"><span className="text-sm font-bold text-slate-600">Nombre del usuario</span><input value={form.name} onChange={(e) => update('name', e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-teal" /></label>
        <label className="space-y-2"><span className="text-sm font-bold text-slate-600">Tipo de usuario</span><select value={form.type} onChange={(e) => update('type', e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3"><option>Freelancer</option><option>Profesional independiente</option><option>Microempresa</option></select></label>
        <label className="space-y-2"><span className="text-sm font-bold text-slate-600">Moneda local preferida</span><select value={form.localCurrency} onChange={(e) => update('localCurrency', e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3"><option>PEN</option><option>USD</option><option>EUR</option></select></label>
        <label className="space-y-2"><span className="text-sm font-bold text-slate-600">Stablecoin principal</span><select value={form.stable} onChange={(e) => update('stable', e.target.value)} className="w-full rounded-2xl border border-slate-200 px-4 py-3"><option>USDC</option><option>USDT</option></select></label>
      </div>
      <button onClick={() => setPage('dashboard')} className="mt-8 w-full rounded-2xl bg-teal px-6 py-4 font-black text-white shadow-lg transition hover:bg-teal/90 md:w-auto">Ingresar al dashboard</button>
    </Card>
  </div>
}
