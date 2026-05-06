import { Bell, Coins, CreditCard, DollarSign, PiggyBank, ReceiptText } from 'lucide-react'
import { balances, cashFlow, movements, reserves, sources } from '../data/mockData.js'
import { CashFlowChart, DistributionBars } from '../components/Charts.jsx'
import { MovementTable } from '../components/Tables.jsx'
import { Card, StatCard } from '../components/ui.jsx'

export default function Dashboard() {
  const stableTotal = balances.USDC + balances.USDT
  const penEquivalent = stableTotal * balances.exchangeRatePEN
  return <div className="smooth-enter space-y-6">
    <div className="flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-soft lg:flex-row lg:items-center">
      <div><p className="text-sm font-bold uppercase tracking-widest text-teal">Todo el dinero en una sola vista</p><h2 className="text-3xl font-black text-navy">Panel principal de tesorería</h2><p className="mt-2 text-slate-500">Saldos, fuentes, pagos, reservas y movimientos con datos simulados para Perú.</p></div>
      <div className="rounded-2xl bg-mint px-5 py-3 text-sm font-bold text-teal">No custodial · sin transferencias reales</div>
    </div>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <StatCard label="Saldo total en stablecoins" value={`${stableTotal.toLocaleString()} USDC`} detail="USDC + USDT normalizados para la demo" icon={Coins} />
      <StatCard label="Equivalente aproximado en PEN" value={`S/ ${penEquivalent.toLocaleString(undefined, { maximumFractionDigits: 2 })}`} detail={`TC referencial ${balances.exchangeRatePEN} PEN`} icon={DollarSign} />
      <StatCard label="Ingresos del mes" value="4,550 USDC" detail="Pagos recibidos y conciliados" icon={CreditCard} />
      <StatCard label="Egresos del mes" value="1,900 USDC" detail="Retiros y conversiones registradas" icon={ReceiptText} tone="navy" />
      <StatCard label="Reservas activas" value={`${reserves.length} reservas`} detail="Impuestos, ahorro y obligaciones" icon={PiggyBank} tone="violet" />
      <StatCard label="Pagos pendientes" value="1,200 USDT" detail="Cliente B vence mañana" icon={Bell} tone="violet" />
    </div>
    <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]"><CashFlowChart data={cashFlow} /><div className="space-y-6"><DistributionBars title="Distribución por fuente" items={sources.slice(0,4).map((s, i) => ({ label: s.name, value: s.balance, color: ['bg-teal','bg-violet','bg-sky-500','bg-emerald-500'][i] }))} /><DistributionBars title="Distribución por moneda" items={[{label:'USDC', value: balances.USDC, color:'bg-teal'}, {label:'USDT', value: balances.USDT, color:'bg-sky-500'}, {label:'PEN', value: balances.PEN, color:'bg-violet'}]} /></div></div>
    <MovementTable movements={movements} />
  </div>
}
