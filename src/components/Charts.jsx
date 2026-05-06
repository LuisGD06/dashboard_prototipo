import { Card } from './ui.jsx'

export function CashFlowChart({ data, title = 'Flujo de caja mensual' }) {
  const max = Math.max(...data.flatMap((d) => [d.income, d.expense]))
  return <Card>
    <div className="mb-5 flex items-center justify-between">
      <div><h3 className="text-lg font-bold text-navy">{title}</h3><p className="text-sm text-slate-500">Ingresos vs egresos simulados</p></div>
      <div className="flex gap-4 text-xs font-semibold"><span className="text-teal">● Ingresos</span><span className="text-violet">● Egresos</span></div>
    </div>
    <div className="flex h-64 items-end gap-4 overflow-x-auto rounded-2xl bg-slate-50 p-4">
      {data.map((item) => <div key={item.month} className="flex min-w-16 flex-1 flex-col items-center gap-2">
        <div className="flex h-44 items-end gap-2">
          <div className="w-5 rounded-t-xl bg-teal" style={{ height: `${(item.income / max) * 100}%` }} title={`Ingresos ${item.income}`} />
          <div className="w-5 rounded-t-xl bg-violet" style={{ height: `${(item.expense / max) * 100}%` }} title={`Egresos ${item.expense}`} />
        </div>
        <span className="text-xs font-bold text-slate-500">{item.month}</span>
      </div>)}
    </div>
  </Card>
}

export function DistributionBars({ title, items }) {
  const total = items.reduce((sum, item) => sum + item.value, 0)
  return <Card>
    <h3 className="text-lg font-bold text-navy">{title}</h3>
    <div className="mt-5 space-y-4">
      {items.map((item) => {
        const pct = Math.round((item.value / total) * 100)
        return <div key={item.label}>
          <div className="mb-2 flex justify-between text-sm"><span className="font-semibold text-slate-700">{item.label}</span><span className="text-slate-500">{pct}%</span></div>
          <div className="h-3 rounded-full bg-slate-100"><div className={`h-3 rounded-full ${item.color}`} style={{ width: `${pct}%` }} /></div>
        </div>
      })}
    </div>
  </Card>
}
