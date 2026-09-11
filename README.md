@andrescalle9/ui

Paquete de UI compartido para las apps del hub Trastero. Provee design tokens (vía CSS custom properties), componentes base y el header/footer de cross-navegación entre apps.

Qué contiene
Hoja de estilos standalone (dist/styles.css) con los estilos de los componentes, ya compilada — no depende de que la app host tenga Tailwind instalado.
Design tokens como CSS custom properties: --hub-bg, --hub-text, --hub-accent, --hub-accent-2, --hub-font-heading, --hub-font-body.
Componentes base: Button, Card.
HubHeader: logo Trastero + nombre de la app actual + link "Volver a Trastero".
HubFooter: grid de links a otras apps del hub (recibe la lista como prop).
generateAppMetadata(): helper para estandarizar title/description/OG tags entre apps.

No contiene: componentes de negocio, autenticación, ni clientes de Supabase. Eso vive en cada app.

Instalación
bash
npm install @andrescalle9/ui

Peer dependencies: next@>=14, react@>=18, react-dom@>=18. No requiere tailwindcss — el paquete no depende del scanner de utilidades de la app host.

Estilos

Importa la hoja de estilos compilada una sola vez en el layout raíz de la app:

tsx
// app/layout.tsx
import "@andrescalle9/ui/styles.css";

Personalizar el theming

Los componentes leen sus colores y tipografías de CSS custom properties con valores por defecto. Para adaptarlos a una app concreta, sobreescríbelas en tu propio :root — sin tocar ninguna config de Tailwind:

css
/* app/globals.css, después de importar @andrescalle9/ui/styles.css */
:root {
  --hub-bg: #0B0B0B;
  --hub-text: #F5F5F5;
  --hub-accent: #E8A33D;
  --hub-accent-2: #2E6E5C;
  --hub-font-heading: "Rubik", sans-serif;
  --hub-font-body: "Inter", sans-serif;
}

Uso
tsx
import { HubHeader, HubFooter } from "@andrescalle9/ui";

const otherApps = [
  { name: "Nest", url: "https://home-tasks.trastero.dev" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <HubHeader hubUrl="https://trastero.dev" appName="Mi App" />
        {children}
        <HubFooter apps={otherApps} />
      </body>
    </html>
  );
}
Desarrollo
bash
npm install
npm run build   # tsup -> dist/*.js + .d.ts, y tailwindcss -> dist/styles.css
Publicar una nueva versión
bash
npm version patch   # o minor / major
npm publish --access public
git push --follow-tags

--access public es obligatorio en paquetes con scope (npm los marca privados por defecto).

Versionado

Semver estricto. No publiques sin subir versión — las apps que consumen el paquete fijan versión exacta o rango, y una publicación sin bump rompe reproducibilidad.
