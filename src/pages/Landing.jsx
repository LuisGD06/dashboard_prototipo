import { ArrowRight, Calculator, LayoutDashboard, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import { Card } from '../components/ui.jsx'

const modules = [
  ['Panel principal', LayoutDashboard, 'Saldo total, fuentes, monedas y movimientos recientes.'],
  ['Seguimiento de pagos', ReceiptText, 'Controla clientes, vencimientos y conciliación.'],
  ['Conversor referencial', Calculator, 'Calcula equivalencias sin recomendar operaciones.'],
  ['Reservas y obligaciones', PiggyBank, 'Separa fondos para metas y compromisos futuros.'],
]

export default function Landing({ setPage }) {
  return <div className="smooth-enter space-y-8">
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[2rem] bg-navy p-8 text-white shadow-soft lg:p-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold"><ShieldCheck size={17}/> Modo lectura · no custodial · sin mover fondos</div>
        <h1 className="max-w-4xl text-4xl font-black tracking-tight lg:text-6xl">Tu tesorería en stablecoins, clara y bajo control</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/75">Centraliza saldos, pagos, conversiones y reservas sin custodiar tus fondos.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => setPage('dashboard')} className="rounded-2xl bg-teal px-6 py-3 font-bold text-white shadow-lg transition hover:bg-teal/90">Ver demo</button>
          <button onClick={() => setPage('onboarding')} className="rounded-2xl bg-white px-6 py-3 font-bold text-navy transition hover:bg-mint">Crear cuenta demo</button>
        </div>
      </div>
      <Card className="flex flex-col justify-between bg-gradient-to-br from-white to-mint">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-teal">El problema comienza</p>
          <h2 className="mt-3 text-3xl font-black text-navy">Fondos dispersos, decisiones lentas.</h2>
          <p className="mt-4 text-slate-600">Freelancers que reciben USDT o USDC suelen revisar wallets, exchanges, cuentas bancarias y Excel para entender cuánto tienen disponible.</p>
        </div>
        <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-600">
          {['Wallets y exchanges separados', 'Pagos pendientes sin seguimiento claro', 'Conversiones a PEN calculadas a mano', 'Reservas para impuestos mezcladas con saldo disponible'].map((x) => <div key={x} className="rounded-2xl bg-white/80 p-4">{x}</div>)}
        </div>
      </Card>
    </section>

    <section className="grid gap-5 md:grid-cols-4">
      {['Ver todo en un solo lugar', 'Reducir cálculos manuales', 'Controlar pagos pendientes', 'Planificar flujo de caja'].map((value, index) => <Card key={value} className="bg-white">
        <p className="text-3xl font-black text-teal">0{index + 1}</p><p className="mt-4 font-bold text-navy">{value}</p>
      </Card>)}
    </section>

    <section>
      <div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-widest text-teal">Propuesta de valor</p><h2 className="text-3xl font-black text-navy">Una capa de organización financiera</h2></div><button onClick={() => setPage('connect')} className="hidden items-center gap-2 rounded-2xl bg-navy px-5 py-3 font-bold text-white md:flex">Conectar fuentes <ArrowRight size={18}/></button></div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{modules.map(([title, Icon, text]) => <Card key={title} className="transition hover:-translate-y-1 hover:shadow-xl"><div className="mb-5 inline-flex rounded-2xl bg-teal-50 p-3 text-teal"><Icon/></div><h3 className="text-xl font-bold text-navy">{title}</h3><p className="mt-3 text-sm text-slate-500">{text}</p></Card>)}</div>
    </section>
  </div>
}
