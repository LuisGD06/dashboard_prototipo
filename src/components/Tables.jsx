import { Badge, statusTone } from './ui.jsx'

export function MovementTable({ movements }) {
  return <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
    <div className="border-b border-slate-100 p-5"><h3 className="text-lg font-bold text-navy">Últimos movimientos</h3><p className="text-sm text-slate-500">Registro consolidado de ingresos, conversiones, egresos y reservas.</p></div>
    <div className="overflow-x-auto"><table className="w-full text-left text-sm">
      <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-3">Fecha</th><th className="px-5 py-3">Movimiento</th><th className="px-5 py-3">Categoría</th><th className="px-5 py-3">Monto</th><th className="px-5 py-3">Estado</th></tr></thead>
      <tbody className="divide-y divide-slate-100">{movements.map((m) => <tr key={m.id} className="hover:bg-slate-50"><td className="px-5 py-4 text-slate-500">{m.date}</td><td className="px-5 py-4 font-semibold text-navy">{m.description}</td><td className="px-5 py-4">{m.category}</td><td className="px-5 py-4 font-bold">{m.amount.toLocaleString()} {m.currency}</td><td className="px-5 py-4"><Badge tone={statusTone(m.status)}>{m.status}</Badge></td></tr>)}</tbody>
    </table></div>
  </div>
}

export function ReportTable({ reports }) {
  return <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
    <div className="border-b border-slate-100 p-5"><h3 className="text-lg font-bold text-navy">Reporte mensual</h3></div>
    <div className="overflow-x-auto"><table className="w-full text-left text-sm">
      <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr>{['Mes','Ingresos','Egresos','Conversiones','Reservas','Saldo final'].map((h) => <th key={h} className="px-5 py-3">{h}</th>)}</tr></thead>
      <tbody className="divide-y divide-slate-100">{reports.map((r) => <tr key={r.month}><td className="px-5 py-4 font-semibold text-navy">{r.month}</td><td className="px-5 py-4">{r.income.toLocaleString()} USDC</td><td className="px-5 py-4">{r.expense.toLocaleString()} USDC</td><td className="px-5 py-4">{r.conversions.toLocaleString()} USDC</td><td className="px-5 py-4">{r.reserves.toLocaleString()} USDC</td><td className="px-5 py-4 font-bold">{r.finalBalance.toLocaleString()} USDC</td></tr>)}</tbody>
    </table></div>
  </div>
}
