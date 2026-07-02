# Fase 1 — Fundação do projeto

## Objetivo

Criar o projeto e garantir que ele roda.

## Passos

1. [OK] Criar repositório.
2. [OK] Criar projeto SvelteKit com TypeScript.
3. [OK] Configurar:

   - ESLint;
   - Prettier;
   - Vitest;
   - Playwright, opcional no começo;
   - pnpm.

4. [OK] Criar estrutura inicial de pastas.
5. [OK] Criar layout simples:

   - menu lateral ou superior;
   - página inicial;
   - página de clientes;
   - página de avaliações;
   - página de configurações.

## Critério de pronto

```text
O projeto roda localmente sem erro.
```

---

# Fase 2 — Banco local

## Objetivo

Salvar dados no dispositivo.

## Passos

1. [OK] Instalar Dexie.
2. [OK] Criar banco IndexedDB.
3. [OK] Criar tabelas iniciais:

   - `clients`;
   - `professionals`;
   - `assessments`;
   - `settings`.

4. Criar repositórios simples:

   - criar;
   - buscar por ID;
   - listar;
   - atualizar;
   - arquivar.

## Critério de pronto

```text
Dados continuam salvos depois de fechar e abrir o navegador.
```

---

# Fase 3 — Cadastro do profissional

## Objetivo

Cadastrar quem faz a avaliação.

## Campos mínimos

1. Nome completo.
2. Nome exibido.
3. Profissão.
4. Registro profissional, opcional.
5. Telefone, opcional.
6. E-mail, opcional.

## Passos

1. Criar tela de cadastro de profissional.
2. Criar tela de edição.
3. Salvar no IndexedDB.
4. Permitir escolher profissional padrão.

## Critério de pronto

```text
Consigo cadastrar um profissional e usá-lo em uma avaliação.
```

---

# Fase 4 — Cadastro do cliente

## Objetivo

Cadastrar a pessoa avaliada.

## Campos mínimos

1. Nome completo.
2. Data de nascimento.
3. Idade calculada.
4. Sexo biológico.
5. Telefone.
6. E-mail opcional.
7. Contato de emergência opcional.

## Passos

1. Criar formulário de cliente.
2. Criar listagem de clientes.
3. Criar busca simples por nome.
4. Criar página de perfil do cliente.
5. Permitir editar cliente.

## Critério de pronto

```text
Consigo cadastrar, listar, buscar, abrir e editar um cliente.
```

---

# Fase 5 — Perfil do cliente

## Objetivo

Centralizar as ações do cliente.

## Tela simples

O perfil deve ter:

1. Dados básicos do cliente.
2. Botão: nova avaliação.
3. Lista de avaliações em rascunho.
4. Lista de avaliações finalizadas.
5. Botão: editar cadastro.

Não precisa ficar bonito.

## Critério de pronto

```text
A partir do cliente, consigo iniciar uma nova avaliação.
```

---

# Fase 6 — Criar avaliação antropométrica básica

## Objetivo

Criar a entidade principal do MVP.

## Fluxo mínimo

```text
Cliente → Nova avaliação → Anamnese específica → Medidas → Cálculos → Relatório
```

## Dados mínimos da avaliação

1. Cliente.
2. Profissional.
3. Data da avaliação.
4. Status:

   - rascunho;
   - finalizada.

5. Anamnese específica.
6. Medidas coletadas.
7. Resultados calculados.
8. Snapshot do relatório.

## Critério de pronto

```text
Consigo criar uma avaliação em rascunho vinculada a um cliente.
```

---

# Fase 7 — Anamnese específica mínima

## Objetivo

Coletar somente perguntas necessárias para a avaliação antropométrica.

## Perguntas mínimas

1. Treinou intensamente nas últimas 24h?
2. Ingeriu álcool nas últimas 24h?
3. Dormiu muito mal na noite anterior?
4. Fez refeição pesada nas últimas 3h?
5. Está em jejum prolongado?
6. Está com retenção de líquido ou inchaço?
7. Usa medicamento que pode alterar peso ou hidratação?
8. Usa suplemento que pode alterar peso, hidratação ou volume muscular?
9. Há dor, lesão ou região que não deve ser medida?

## Importante

Não implemente a anamnese geral completa agora.

Ela entra depois do MVP ou no MVP 2.

## Critério de pronto

```text
Consigo salvar as respostas específicas dentro da avaliação.
```

---

# Fase 8 — Medidas básicas

## Objetivo

Registrar medidas suficientes para gerar um relatório simples.

## Medidas do MVP

1. Massa corporal.
2. Estatura.
3. Cintura.
4. Quadril.
5. Abdômen, opcional.
6. Pescoço, opcional.

## Não incluir ainda

- dobras cutâneas;
- protocolos complexos;
- cineantropometria;
- somatotipo;
- diâmetros ósseos.

## Critério de pronto

```text
Consigo preencher medidas corporais básicas e salvar.
```

---

# Fase 9 — Cálculos básicos

## Objetivo

Gerar resultados simples e úteis.

## Cálculos do MVP

1. IMC.
2. Relação cintura/quadril.
3. Relação cintura/estatura.

## Exemplo

```text
IMC = peso / altura²
```

## Regra importante

Os cálculos não são a fonte da verdade.

A fonte da verdade é:

```text
dados coletados + protocolo + versão da fórmula
```

## Critério de pronto

```text
A aplicação calcula resultados automaticamente a partir dos dados salvos.
```

---

# Fase 10 — Revisão da avaliação

## Objetivo

Antes de finalizar, mostrar tudo para conferência.

## Tela de revisão

Mostrar:

1. Cliente.
2. Profissional.
3. Data.
4. Respostas da anamnese.
5. Medidas coletadas.
6. Cálculos.
7. Avisos simples.
8. Botão: finalizar avaliação.

## Critério de pronto

```text
Consigo revisar uma avaliação antes de finalizar.
```

---

# Fase 11 — Finalização da avaliação

## Objetivo

Transformar rascunho em avaliação finalizada.

## Ao finalizar

1. Validar campos obrigatórios.
2. Recalcular resultados.
3. Salvar snapshot dos resultados.
4. Salvar versão das fórmulas.
5. Salvar data de finalização.
6. Bloquear edição direta.

## Critério de pronto

```text
Avaliação finalizada não muda acidentalmente.
```

---

# Fase 12 — Relatório técnico HTML

## Objetivo

Gerar relatório visual simples.

## Seções do relatório

1. Cabeçalho.
2. Dados do cliente.
3. Dados do profissional.
4. Data da avaliação.
5. Anamnese específica.
6. Medidas coletadas.
7. Resultados calculados.
8. Observações.
9. Limitações do método.
10. Assinatura técnica.

## Critério de pronto

```text
Consigo abrir uma página de relatório da avaliação finalizada.
```

---

# Fase 13 — Exportar PDF

## Objetivo

Permitir entregar o relatório ao cliente.

## Solução do MVP

Usar:

```ts
window.print();
```

Com CSS básico para impressão.

Não implemente geração avançada de PDF agora.

## Critério de pronto

```text
Consigo imprimir ou salvar o relatório como PDF pelo navegador.
```

---

# Fase 14 — PWA offline

## Objetivo

A aplicação funcionar instalada e sem internet.

## Passos

1. Criar manifest.
2. Criar ícones básicos.
3. Criar service worker.
4. Cachear arquivos principais.
5. Testar offline.
6. Mostrar status online/offline.

## Critério de pronto

```text
Consigo instalar a aplicação e abrir offline.
```

---

# Fase 15 — Backup manual simples

## Objetivo

Evitar perda de dados locais.

## MVP

1. Exportar backup JSON.
2. Importar backup JSON.
3. Mostrar aviso: “faça backup regularmente”.

## Não fazer agora

- backup automático;
- nuvem;
- sincronização;
- criptografia avançada;
- múltiplos dispositivos.

## Critério de pronto

```text
Consigo exportar e importar os dados locais.
```

---

# Ordem final do MVP

Siga exatamente esta ordem:

```text
1. Projeto SvelteKit
2. Banco local com Dexie
3. Cadastro de profissional
4. Cadastro de cliente
5. Perfil do cliente
6. Criar avaliação antropométrica
7. Anamnese específica mínima
8. Medidas básicas
9. Cálculos básicos
10. Revisão
11. Finalização
12. Relatório HTML
13. Exportar PDF
14. PWA offline
15. Backup manual JSON
```

---

# O que não fazer até terminar o MVP

Não implemente:

```text
- tela bonita;
- dashboard;
- login;
- servidor;
- nuvem;
- mensalidades;
- nutrição;
- fisioterapia;
- cineantropometria;
- dobras cutâneas;
- gráficos;
- assinatura digital;
- permissões avançadas;
- editor dinâmico de formulários;
- motor genérico complexo;
- múltiplos idiomas;
- tema visual avançado.
```

---

# Definição objetiva de MVP pronto

O MVP estará pronto quando você conseguir fazer isto:

```text
1. Abrir a PWA.
2. Cadastrar profissional.
3. Cadastrar cliente.
4. Abrir perfil do cliente.
5. Criar avaliação antropométrica.
6. Responder anamnese específica.
7. Preencher peso, altura, cintura e quadril.
8. Calcular IMC, cintura/quadril e cintura/altura.
9. Finalizar avaliação.
10. Gerar relatório técnico.
11. Salvar como PDF.
12. Fechar o navegador.
13. Abrir novamente.
14. Ver que os dados continuam salvos.
15. Exportar backup JSON.
```

Esse é o alvo. Nada além disso antes de concluir.
