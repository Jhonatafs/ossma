# OSSMA

Aplicação local-first para organizar avaliações antropométricas, desde o cadastro de profissionais e clientes até a geração de relatórios técnicos.

O projeto está em desenvolvimento. A fundação SvelteKit, as rotas iniciais e a configuração do banco local IndexedDB já estão estruturadas; CRUD e regras de domínio ainda não foram implementados.

## Tecnologias

- SvelteKit e TypeScript
- Dexie e IndexedDB
- Paraglide
- Vitest e Playwright
- pnpm

## Desenvolvimento

Instale as dependências:

```sh
pnpm install
```

Inicie o servidor de desenvolvimento:

```sh
pnpm run dev
```

## Validação

```sh
pnpm run check
pnpm run lint
pnpm run test
pnpm run build
```

## Build estático

O build usa `adapter-static` como SPA com fallback em `index.html`:

```sh
pnpm run build
pnpm run preview
```

## Documentação

- [Roteiro até o MVP](docs/roteiro-ate-mvp.md)
- [Banco de dados local](docs/database.md)

## Licença

Distribuído sob a licença [MIT](LICENSE).
