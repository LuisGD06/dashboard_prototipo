import { useMemo, useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { balances, conversionHistory } from '../data/mockData.js'
import { Card } from '../components/ui.jsx'

export default function Converter() {
  const [amount, setAmount] = useState(1000)
  const [source, setSource] = useState('USDC')
  const [target, setTarget] = useState('PEN')
  const rate = target === 'PEN' ? balances.exchangeRatePEN : target === 'EUR' ? 0.92 : 1
  const result = useMemo(() => Number(amount || 0) * rate, [amount, rate])
  const available = balances[source] - Number(amount || 0)
  return <div className="smooth-enter space-y-6">
    <div><p className="text-sm font-bold uppercase tracking-widest text-teal">Sin operar activos</p><h2 className="text-3xl font-black text-navy">Conversor referencial</h2><p className="mt-2 text-slate-500">Estima equivalencias para planificar liquidez. La ejecución ocurre fuera de Simbiosis.</p></div>
    <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]"><Card className="p-7"><div className="grid gap-4 md:grid-cols-3"><label className="md:col-span-1"><span className="text-sm font-bold text-slate-600">Monto</span><input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-lg font-bold"/></label><label><span className="text-sm font-bold text-slate-600">Stablecoin</span><select value={source} onChange={(e) => setSource(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"><option>USDC</option><option>USDT</option></select></label><label><span className="text-sm font-bold text-slate-600">Destino</span><select value={target} onChange={(e) => setTarget(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3"><option>PEN</option><option>USD</option><option>EUR</option></select></label></div><div className="mt-8 rounded-3xl bg-navy p-6 text-white"><p className="text-sm text-white/60">Resultado estimado</p><h3 className="mt-2 text-4xl font-black">{target === 'PEN' ? 'S/ ' : ''}{result.toLocaleString(undefined, { maximumFractionDigits: 2 })} {target !== 'PEN' ? target : ''}</h3><p className="mt-3 text-sm text-white/70">Tipo de cambio referencial simulado: 1 {source} = {rate} {target}</p></div><div className="mt-5 flex gap-3 rounded-2xl bg-amber-50 p-4 text-sm text-amber-700"><AlertTriangle size={20}/><p>Este cálculo es referencial. Simbiosis no recomienda comprar, vender ni convertir activos.</p></div></Card><Card className="bg-gradient-to-br from-mint to-white"><p className="text-sm font-bold uppercase tracking-widest text-teal">Impacto en liquidez</p><h3 className="mt-3 text-3xl font-black text-navy">{Math.max(available, 0).toLocaleString()} {source}</h3><p className="mt-3 text-slate-500">Disponible estimado después de convertir el monto indicado. No se ejecuta ninguna operación real.</p></Card></div>
    <Card><h3 className="text-lg font-bold text-navy">Historial simulado de conversiones</h3><div className="mt-4 grid gap-3 md:grid-cols-3">{conversionHistory.map((item) => <div key={item.id} className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">{item.date}</p><p className="mt-2 font-bold text-navy">{item.amount} {item.from} a {item.to}</p><p className="text-sm text-slate-600">Resultado: {item.result.toLocaleString()} {item.to}</p></div>)}</div></Card>
  </div>
}
