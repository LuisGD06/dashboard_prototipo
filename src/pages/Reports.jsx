import { Download } from 'lucide-react'
import { cashFlow, monthlyReports } from '../data/mockData.js'
import { CashFlowChart, DistributionBars } from '../components/Charts.jsx'
import { ReportTable } from '../components/Tables.jsx'
import { Card, StatCard } from '../components/ui.jsx'

export default function Reports({ showToast }) {
  return <div className="smooth-enter space-y-6">
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-widest text-teal">Reportes y planificación</p><h2 className="text-3xl font-black text-navy">Análisis financiero simple</h2><p className="mt-2 text-slate-500">Entiende ingresos, egresos, conversiones, reservas y proyecciones.</p></div><button onClick={() => showToast('Función simulada para el prototipo')} className="inline-flex items-center gap-2 rounded-2xl bg-navy px-5 py-3 font-bold text-white"><Download size={18}/> Exportar reporte PDF</button></div>
    <div className="grid gap-5 md:grid-cols-4"><StatCard label="Ingresos proyectados" value="5,300 USDC" detail="Próximos 30 días" /><StatCard label="Egresos proyectados" value="2,200 USDC" detail="Operación y retiros" /><StatCard label="Saldo disponible estimado" value="9,990 USDC" detail="Luego de reservas" tone="navy" /><StatCard label="Reservas comprometidas" value="2,550 USDC" detail="Objetivos activos" tone="violet" /></div>
    <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]"><CashFlowChart data={cashFlow} title="Ingresos y egresos por mes"/><DistributionBars title="Distribución de fondos" items={[{label:'Disponible', value:9990, color:'bg-teal'}, {label:'Reservas', value:2550, color:'bg-violet'}, {label:'PEN banco', value:1020, color:'bg-sky-500'}]} /></div>
    <Card><h3 className="text-lg font-bold text-navy">Resumen de flujo de caja</h3><p className="mt-2 text-slate-500">Flujo positivo proyectado para los próximos 15 días. Las decisiones de conversión o transferencia se ejecutan fuera de Simbiosis.</p></Card>
    <ReportTable reports={monthlyReports} />
  </div>
}
