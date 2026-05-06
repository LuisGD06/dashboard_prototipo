# Simbiosis - Dashboard Prototipo

Prototipo web académico para una plataforma SaaS FinTech **no custodial** de tesorería en stablecoins dirigida a freelancers y profesionales independientes que reciben pagos del extranjero en USDT o USDC.

Simbiosis no es una wallet, no es un exchange, no custodia fondos, no ejecuta transferencias reales y no brinda asesoría tributaria ni recomendaciones de inversión. El prototipo usa datos simulados para mostrar cómo una capa de organización financiera puede ayudar a visualizar, registrar, conciliar y planificar saldos, pagos, conversiones y reservas.

## Stack

- React + Vite.
- Tailwind CSS.
- lucide-react para iconografía.
- Datos mock en `src/data/mockData.js`.
- Sin backend, autenticación real, APIs externas ni conexiones blockchain.

## Estructura

```text
src/
  components/
  pages/
  data/
  App.jsx
  main.jsx
  index.css
```

## Instalación y ejecución

```bash
npm install
npm run dev
```

Para generar una versión productiva:

```bash
npm run build
npm run preview
```

## Pantallas incluidas

1. Landing / Inicio.
2. Onboarding / Crear cuenta demo.
3. Conectar fuentes en modo lectura.
4. Dashboard principal.
5. Seguimiento de pagos con modal y cambio de estado.
6. Conversor referencial.
7. Reservas y obligaciones con modal.
8. Alertas configurables.
9. Reportes y planificación con toast simulado.
10. Resultado / beneficio final.
