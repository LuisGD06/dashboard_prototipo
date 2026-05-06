export const user = {
  name: 'Luis García',
  type: 'Freelancer',
  localCurrency: 'PEN',
  primaryStablecoin: 'USDC',
}

export const balances = {
  USDC: 8450.75,
  USDT: 4090,
  PEN: 3850,
  exchangeRatePEN: 3.77,
}

export const sources = [
  { id: 'metamask', name: 'MetaMask', type: 'Wallet', status: 'Conectado', balance: 3620.75, currency: 'USDC' },
  { id: 'binance', name: 'Binance', type: 'Exchange', status: 'Conectado', balance: 5890, currency: 'USDT' },
  { id: 'bybit', name: 'Bybit', type: 'Exchange', status: 'Conectado', balance: 3030, currency: 'USDC' },
  { id: 'bank', name: 'Cuenta bancaria PEN', type: 'Banco', status: 'Conectado', balance: 3850, currency: 'PEN' },
  { id: 'sheets', name: 'Google Sheets / Excel', type: 'Hoja de cálculo', status: 'Pendiente', balance: 0, currency: 'PEN' },
]

export const payments = [
  { id: 1, client: 'Cliente A', project: 'Dashboard analytics', amount: 800, currency: 'USDC', dueDate: '08 May 2026', status: 'Recibido' },
  { id: 2, client: 'Cliente B', project: 'Brand system', amount: 1200, currency: 'USDT', dueDate: '07 May 2026', status: 'Pendiente' },
  { id: 3, client: 'Cliente C', project: 'Landing SaaS', amount: 550, currency: 'USDC', dueDate: '02 May 2026', status: 'Conciliado' },
  { id: 4, client: 'Cliente D', project: 'Consultoría UX', amount: 300, currency: 'USDT', dueDate: '10 May 2026', status: 'Por revisar' },
]

export const movements = [
  { id: 1, date: '06 May 2026', description: 'Pago recibido de Cliente A', category: 'Ingreso', amount: 800, currency: 'USDC', status: 'Recibido' },
  { id: 2, date: '07 May 2026', description: 'Pago pendiente de Cliente B', category: 'Cobranza', amount: 1200, currency: 'USDT', status: 'Pendiente' },
  { id: 3, date: '04 May 2026', description: 'Conversión USDC a PEN', category: 'Conversión', amount: 1500, currency: 'USDC', status: 'Conciliado' },
  { id: 4, date: '03 May 2026', description: 'Retiro a cuenta bancaria', category: 'Egreso', amount: 2400, currency: 'PEN', status: 'Conciliado' },
  { id: 5, date: '01 May 2026', description: 'Reserva para impuestos', category: 'Reserva', amount: 1000, currency: 'USDC', status: 'Reservado' },
]

export const reserves = [
  { id: 1, name: 'Impuestos', amount: 1000, target: 1800, color: 'violet' },
  { id: 2, name: 'Ahorro', amount: 750, target: 1200, color: 'teal' },
  { id: 3, name: 'Pagos futuros', amount: 500, target: 900, color: 'navy' },
  { id: 4, name: 'Emergencias', amount: 300, target: 1000, color: 'emerald' },
]

export const cashFlow = [
  { month: 'Ene', income: 3100, expense: 1800 },
  { month: 'Feb', income: 4200, expense: 2100 },
  { month: 'Mar', income: 3600, expense: 2400 },
  { month: 'Abr', income: 5100, expense: 2700 },
  { month: 'May', income: 4550, expense: 1900 },
  { month: 'Jun', income: 5300, expense: 2200 },
]

export const conversionHistory = [
  { id: 1, date: '04 May 2026', from: 'USDC', to: 'PEN', amount: 1500, result: 5655 },
  { id: 2, date: '22 Abr 2026', from: 'USDT', to: 'PEN', amount: 900, result: 3393 },
  { id: 3, date: '15 Abr 2026', from: 'USDC', to: 'USD', amount: 700, result: 700 },
]

export const alerts = [
  { id: 1, type: 'Pago', text: 'Pago pendiente de Cliente B vence mañana', active: true },
  { id: 2, type: 'Conversión', text: 'Conversión registrada hace 2 días', active: true },
  { id: 3, type: 'Reserva', text: 'Reserva de impuestos debajo del objetivo', active: true },
  { id: 4, type: 'Flujo de caja', text: 'Ingreso alto recibido este mes', active: false },
  { id: 5, type: 'Flujo de caja', text: 'Flujo de caja positivo para los próximos 15 días', active: true },
]

export const monthlyReports = [
  { month: 'Enero', income: 3100, expense: 1800, conversions: 1100, reserves: 450, finalBalance: 9150 },
  { month: 'Febrero', income: 4200, expense: 2100, conversions: 1500, reserves: 620, finalBalance: 10320 },
  { month: 'Marzo', income: 3600, expense: 2400, conversions: 900, reserves: 500, finalBalance: 11020 },
  { month: 'Abril', income: 5100, expense: 2700, conversions: 1800, reserves: 750, finalBalance: 12170 },
  { month: 'Mayo', income: 4550, expense: 1900, conversions: 1500, reserves: 1000, finalBalance: 12540.75 },
]
