import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Card } from '../components/ui.jsx'

const benefits = ['Menos desorden financiero', 'Menos cálculos manuales', 'Mayor control de pagos', 'Mejor planificación', 'Decisiones más claras']

export default function Result({ setPage }) {
  return <div className="smooth-enter space-y-6">
    <section className="rounded-[2rem] bg-gradient-to-br from-navy to-ocean p-8 text-white shadow-soft lg:p-12"><p className="text-sm font-bold uppercase tracking-widest text-mint">Resultado</p><h2 className="mt-3 text-5xl font-black">Claridad, control y tranquilidad</h2><p className="mt-5 max-w-3xl text-lg text-white/75">Ahora el usuario puede ver su tesorería en stablecoins en un solo lugar, controlar pagos pendientes, revisar conversiones y planificar obligaciones futuras.</p><button onClick={() => setPage('dashboard')} className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-teal px-6 py-3 font-bold text-white"><ArrowLeft size={18}/> Volver al dashboard</button></section>
    <div className="grid gap-5 md:grid-cols-5">{benefits.map((benefit) => <Card key={benefit}><CheckCircle2 className="text-teal"/><p className="mt-4 font-black text-navy">{benefit}</p></Card>)}</div>
    <Card><h3 className="text-xl font-black text-navy">Storyboard UX reflejado</h3><p className="mt-3 text-slate-500">El usuario pasa del desorden entre wallets, exchanges, bancos y Excel a una capa organizada de información. Cuando decide convertir o transferir, lo hace fuera de Simbiosis desde su plataforma preferida.</p></Card>
  </div>
}
