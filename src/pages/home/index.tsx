export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-8 font-['Poppins']">
      <div className="max-w-5xl w-full space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold">Repositório Totalmente Configurado</h1>
          <p className="text-2xl text-muted-foreground">Bem-vindo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Core</h2>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>React 18</li>
              <li>TypeScript</li>
              <li>Vite</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Estilização</h2>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>Tailwind CSS</li>
              <li>shadcn/ui</li>
              <li>Dark/Light mode</li>
              <li>Lucide Icons</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Gerenciamento de Estado</h2>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>TanStack Query</li>
              <li>React Hook Form</li>
              <li>Zod</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Ferramentas</h2>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li>React Router DOM</li>
              <li>ESLint</li>
              <li>Estrutura organizada</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-base text-muted-foreground pt-8 border-t">
          <p>
            Criado por{' '}
            <a
              href="https://github.com/JordanFeliphe"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              Jordan Feliphe
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
