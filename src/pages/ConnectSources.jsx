import { useState } from 'react'
import { PlugZap, ShieldCheck } from 'lucide-react'
import { sources as initialSources } from '../data/mockData.js'
import { Badge, Card, statusTone, Switch } from '../components/ui.jsx'

export default function ConnectSources({ showToast }) {
  const [sources, setSources] = useState(initialSources)
  const toggle = (id) => setSources((list) => list.map((source) => source.id === id ? { ...source, status: source.status === 'Conectado' ? 'No conectado' : 'Conectado' } : source))
  return <div className="smooth-enter space-y-6">
    <Card className="bg-gradient-to-r from-navy to-ocean text-white">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-bold uppercase tracking-widest text-mint">Sincronización segura</p><h2 className="mt-2 text-4xl font-black">Conecta tus fuentes de forma segura</h2><p className="mt-3 max-w-3xl text-white/75">Simbiosis solo organiza información. No mueve fondos ni solicita claves privadas.</p></div><div className="rounded-3xl bg-white/10 p-5"><ShieldCheck size={42}/></div></div>
    </Card>
    <div className="rounded-3xl border border-teal/20 bg-mint p-5 text-teal"><strong>Conexión simulada en modo lectura.</strong> Tus fondos permanecen en tus plataformas originales.</div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {sources.map((source) => <Card key={source.id}>
        <div className="flex items-start justify-between gap-4"><div className="flex gap-3"><div className="rounded-2xl bg-slate-100 p-3 text-teal"><PlugZap/></div><div><h3 className="text-lg font-bold text-navy">{source.name}</h3><p className="text-sm text-slate-500">{source.type} · modo lectura</p></div></div><Switch checked={source.status === 'Conectado'} onChange={() => toggle(source.id)} /></div>
        <div className="mt-6 flex items-center justify-between"><Badge tone={statusTone(source.status)}>{source.status}</Badge><span className="text-sm font-bold text-slate-500">{source.balance.toLocaleString()} {source.currency}</span></div>
      </Card>)}
    </div>
    <button onClick={() => showToast('Información demo sincronizada en modo lectura')} className="rounded-2xl bg-teal px-6 py-3 font-bold text-white shadow-lg">Sincronizar información demo</button>
  </div>
}
