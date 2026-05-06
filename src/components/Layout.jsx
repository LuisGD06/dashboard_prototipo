import { BarChart3, Bell, Calculator, CheckCircle2, Home, LayoutDashboard, PiggyBank, PlugZap, ReceiptText, ShieldCheck, Sparkles } from 'lucide-react'
import { Badge } from './ui.jsx'

const nav = [
  { id: 'landing', label: 'Inicio', icon: Home },
  { id: 'onboarding', label: 'Cuenta demo', icon: CheckCircle2 },
  { id: 'connect', label: 'Conectar fuentes', icon: PlugZap },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'payments', label: 'Pagos', icon: ReceiptText },
  { id: 'converter', label: 'Conversor', icon: Calculator },
  { id: 'reserves', label: 'Reservas', icon: PiggyBank },
  { id: 'alerts', label: 'Alertas', icon: Bell },
  { id: 'reports', label: 'Reportes', icon: BarChart3 },
  { id: 'result', label: 'Resultado', icon: Sparkles },
]

export default function Layout({ page, setPage, children, user }) {
  return <div className="min-h-screen bg-[#f4f7fb] text-slate-800">
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-white/60 bg-navy p-5 text-white lg:flex">
      <button onClick={() => setPage('landing')} className="flex items-center gap-3 text-left">
        <div className="rounded-2xl bg-teal p-3"><ShieldCheck size={24} /></div>
        <div>
          <p className="text-xl font-black tracking-tight">Simbiosis</p>
          <p className="text-xs text-white/60">Tesorería no custodial</p>
        </div>
      </button>
      <div className="mt-6 rounded-3xl bg-white/10 p-4 text-sm text-white/80">
        <Badge tone="green">Modo demo</Badge>
        <p className="mt-3">Organiza información en modo lectura. Sin mover fondos ni pedir claves privadas.</p>
      </div>
      <nav className="mt-6 space-y-1 overflow-auto pr-1">
        {nav.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => setPage(id)} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${page === id ? 'bg-white text-navy shadow-lg' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
          <Icon size={18} /> {label}
        </button>)}
      </nav>
      <div className="mt-auto rounded-3xl bg-white/10 p-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-mint font-bold text-teal">LG</div>
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-xs text-white/60">{user.type} · {user.localCurrency}</p>
          </div>
        </div>
      </div>
    </aside>
    <main className="lg:pl-72">
      <header className="sticky top-0 z-20 border-b border-white/80 bg-white/85 px-5 py-4 backdrop-blur lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">Laboratorio 04 · prototipo académico</p>
            <h1 className="text-2xl font-black text-navy">Simbiosis</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="green">No custodial</Badge><Badge tone="blue">Datos simulados</Badge><Badge tone="violet">Sin transferencias reales</Badge>
          </div>
        </div>
        <div className="mt-4 flex gap-2 overflow-auto lg:hidden">
          {nav.map(({ id, label }) => <button key={id} onClick={() => setPage(id)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${page === id ? 'bg-navy text-white' : 'bg-slate-100 text-slate-600'}`}>{label}</button>)}
        </div>
      </header>
      <div className="p-5 lg:p-8">{children}</div>
    </main>
  </div>
}
