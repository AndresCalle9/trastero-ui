@andrescalle9/ui

Paquete de UI compartido para las apps del hub Trastero. Provee design tokens, componentes base y el header/footer de cross-navegación entre apps.

Qué contiene
Design tokens (colores, tipografía, spacing) como preset de Tailwind.
Componentes base: Button, Card.
HubHeader: logo Trastero + nombre de la app actual + link "Volver a Trastero".
HubFooter: grid de links a otras apps del hub (recibe la lista como prop).
generateAppMetadata(): helper para estandarizar title/description/OG tags entre apps.

No contiene: componentes de negocio, autenticación, ni clientes de Supabase. Eso vive en cada app.

Instalación
bash
npm install @andrescalle9/ui

Peer dependencies: next@^14, tailwindcss@^3.

Tailwind

Extiende tu tailwind.config con el preset del paquete:

js
// tailwind.config.js
module.exports = {
  presets: [require("@andrescalle9/ui/tailwind-preset")],
  content: [
    "./app/**/*.{ts,tsx}",
    "./node_modules/@andrescalle9/ui/dist/**/*.js",
  ],
};
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
npm run build   # tsup -> dist/ (.js + .d.ts)
Publicar una nueva versión
bash
npm version patch   # o minor / major
npm publish --access public
git push --follow-tags

--access public es obligatorio en paquetes con scope (npm los marca privados por defecto).

Versionado

Semver estricto. No publiques sin subir versión — las apps que consumen el paquete fijan versión exacta o rango, y una publicación sin bump rompe reproducibilidad.