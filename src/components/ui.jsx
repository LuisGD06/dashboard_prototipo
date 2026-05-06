import { X } from 'lucide-react'

export function Card({ children, className = '' }) {
  return <section className={`rounded-3xl border border-slate-200 bg-white p-5 shadow-soft ${className}`}>{children}</section>
}

export function Badge({ children, tone = 'slate' }) {
  const tones = {
    green: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    amber: 'bg-amber-50 text-amber-700 ring-amber-200',
    blue: 'bg-sky-50 text-sky-700 ring-sky-200',
    violet: 'bg-violet-50 text-violet-700 ring-violet-200',
    red: 'bg-rose-50 text-rose-700 ring-rose-200',
    slate: 'bg-slate-100 text-slate-700 ring-slate-200',
  }
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${tones[tone]}`}>{children}</span>
}

export function statusTone(status) {
  return {
    Conectado: 'green', Recibido: 'green', Conciliado: 'blue', Reservado: 'violet',
    Pendiente: 'amber', 'Por revisar': 'red', 'No conectado': 'slate',
  }[status] || 'slate'
}

export function StatCard({ label, value, detail, icon: Icon, tone = 'teal' }) {
  const bg = tone === 'violet' ? 'bg-violet-50 text-violet-700' : tone === 'navy' ? 'bg-navy text-white' : 'bg-teal-50 text-teal-700'
  return <Card className="min-h-[140px]">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <h3 className="mt-3 text-2xl font-bold text-navy">{value}</h3>
        <p className="mt-2 text-sm text-slate-500">{detail}</p>
      </div>
      {Icon && <div className={`rounded-2xl p-3 ${bg}`}><Icon size={22} /></div>}
    </div>
  </Card>
}

export function Switch({ checked, onChange }) {
  return <button onClick={onChange} className={`relative h-7 w-12 rounded-full transition ${checked ? 'bg-teal' : 'bg-slate-300'}`} aria-label="Cambiar estado">
    <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${checked ? 'left-6' : 'left-1'}`} />
  </button>
}

export function Modal({ title, children, onClose }) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4">
    <div className="smooth-enter w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-xl font-bold text-navy">{title}</h3>
        <button onClick={onClose} className="rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200"><X size={18} /></button>
      </div>
      {children}
    </div>
  </div>
}

export function Toast({ message }) {
  if (!message) return null
  return <div className="fixed bottom-6 right-6 z-50 rounded-2xl bg-navy px-5 py-4 text-sm font-semibold text-white shadow-2xl smooth-enter">{message}</div>
}
