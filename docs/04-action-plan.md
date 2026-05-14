# 04 — Plano de Ação para Criação da Aplicação

## 1. Objetivo do Documento

Este documento define um plano de ação prático para iniciar, organizar e desenvolver a aplicação.

O foco é transformar a ideia, os fluxos e a documentação inicial em um processo executável de desenvolvimento, com etapas claras, entregáveis objetivos e ordem de prioridade.

A aplicação será uma PWA offline-first, local-first, gratuita, open source, com código em inglês técnico e documentação inicial em português brasileiro.

---

## 2. Premissas do Plano

Este plano considera que:

- o projeto será desenvolvido por um desenvolvedor júnior, recém-formado em Ciência da Computação;
- o desenvolvimento contará com apoio de IA;
- a aplicação será open source sob licença MIT;
- a primeira versão não terá backend obrigatório;
- a primeira versão não terá login online;
- a primeira versão não terá sincronização automática;
- o armazenamento será local;
- a aplicação será uma PWA;
- a documentação inicial será feita em pt-BR;
- o código será escrito em inglês técnico;
- o primeiro módulo funcional prioritário será a avaliação antropométrica básica;
- os módulos postural, nutricional e cineantropométrico serão implementados gradualmente.

---

## 3. Estratégia Geral

A aplicação deve ser construída de forma incremental.

A ordem correta não é começar pelos cálculos avançados nem pelos relatórios finais. Primeiro é necessário criar a fundação técnica da aplicação.

Estratégia recomendada:

```text
1. Organizar projeto e documentação.
2. Definir stack técnica.
3. Criar base PWA.
4. Criar navegação e layout responsivo.
5. Criar banco local.
6. Implementar primeiro acesso e configurações.
7. Implementar perfis profissionais e instituições.
8. Implementar clientes e anamnese geral.
9. Implementar avaliação antropométrica básica.
10. Implementar cálculos básicos.
11. Implementar pré-visualização de relatório.
12. Implementar exportação PDF.
13. Implementar backup e importação.
14. Testar offline.
15. Refinar MVP.
```

---

## 4. Fases do Projeto

# Fase 0 — Preparação Conceitual

## Objetivo

Consolidar o entendimento do produto antes de programar.

## Entregáveis

- `01-product-vision.md`
- `02-domain-glossary.md`
- `03-requirements.md`
- `04-action-plan.md`
- diagramas Mermaid do fluxo de uso

## Tarefas

- Revisar visão do produto.
- Revisar glossário.
- Revisar requisitos.
- Criar diagramas de fluxo.
- Definir escopo do MVP.
- Listar questões em aberto.

## Critério de pronto

A fase estará concluída quando o projeto possuir documentação suficiente para iniciar a estrutura técnica sem depender apenas de memória ou conversa.

---

# Fase 1 — Decisões Técnicas Iniciais

## Objetivo

Definir a stack e a arquitetura inicial do projeto.

## Decisões recomendadas

### Linguagem

```text
TypeScript
```

### Framework de interface

```text
React
```

### Build tool

```text
Vite
```

### PWA

```text
vite-plugin-pwa
```

### Banco local

```text
IndexedDB com Dexie.js
```

### Formulários

```text
React Hook Form
```

### Validação

```text
Zod
```

### Internacionalização

```text
i18next ou react-i18next
```

### Testes

```text
Vitest
```

### Testes de interface futuros

```text
Playwright
```

### Diagramas

```text
Mermaid
PlantUML
DBML
```

## Entregáveis

- documento de decisões técnicas iniciais;
- estrutura inicial do projeto;
- README inicial;
- licença MIT;
- configuração básica de lint e formatter.

## Critério de pronto

A fase estará concluída quando a stack inicial estiver definida e o projeto puder ser executado localmente com um comando simples.

---

# Fase 2 — Criação do Repositório e Estrutura Base

## Objetivo

Criar a base do projeto no VSCode/Git.

## Estrutura inicial sugerida

```text
project-root/
  docs/
    diagrams/
    database/
    product/
    technical/
  public/
  src/
    app/
    assets/
    components/
    config/
    db/
    features/
    hooks/
    i18n/
    layouts/
    lib/
    pages/
    routes/
    services/
    styles/
    tests/
    types/
  package.json
  README.md
  LICENSE
```

## Estrutura por feature sugerida

```text
src/features/
  onboarding/
  settings/
  profile/
  professionals/
  institutions/
  clients/
  anamnesis/
  evaluations/
  reports/
  backup/
```

## Tarefas

- Criar repositório Git.
- Criar projeto com Vite + React + TypeScript.
- Configurar ESLint.
- Configurar Prettier.
- Configurar aliases de importação.
- Criar estrutura de pastas.
- Adicionar licença MIT.
- Criar README inicial.
- Adicionar arquivos de documentação existentes.

## Critério de pronto

A fase estará concluída quando a aplicação abrir com uma página inicial mínima e o projeto estiver organizado em pastas.

---

# Fase 3 — PWA e Funcionamento Offline

## Objetivo

Garantir que a aplicação seja instalável e funcione offline.

## Tarefas

- Configurar `vite-plugin-pwa`.
- Criar manifest da aplicação.
- Definir nome provisório do app.
- Definir ícones provisórios.
- Configurar service worker.
- Configurar cache dos assets principais.
- Testar instalação como PWA.
- Testar abertura em modo offline.

## Entregáveis

- PWA instalável.
- Manifest configurado.
- Service worker funcional.
- Teste manual offline documentado.

## Critério de pronto

A fase estará concluída quando a aplicação puder ser aberta após o primeiro carregamento sem conexão com a internet.

---

# Fase 4 — Internacionalização e Primeiro Acesso

## Objetivo

Implementar o fluxo inicial de boas-vindas e configuração.

## Fluxo esperado

```text
Boas-vindas
Selecionar idioma por bandeiras
Selecionar tema
Selecionar tipo de uso
Criar perfil institucional, se aplicável
Criar perfil profissional
Mostrar tutorial/contextualização
Entrar na página inicial
```

## Tarefas

- Configurar i18n.
- Criar idiomas iniciais: inglês e português.
- Criar tela de boas-vindas.
- Criar seleção de idioma por bandeiras.
- Criar seleção de tema.
- Criar seleção de tipo de uso:
  - uso autônomo;
  - uso institucional.

- Criar formulário inicial de instituição, quando aplicável.
- Criar formulário inicial de profissional.
- Salvar preferências localmente.
- Impedir repetição do onboarding depois de concluído.

## Critério de pronto

A fase estará concluída quando uma instalação nova conduzir o usuário pelo primeiro acesso e salvar suas preferências localmente.

---

# Fase 5 — Layout Principal e Navegação

## Objetivo

Criar a estrutura visual principal da aplicação.

## Menu principal

```text
Início
Clientes
Perfil
Backups
FAQs
Documentação técnica
Configurações
```

## Tarefas

- Criar layout base.
- Criar barra de navegação universal.
- Permitir posição da barra em telas largas:
  - esquerda;
  - direita;
  - topo;
  - rodapé.

- Restringir posição da barra em telas pequenas:
  - topo;
  - rodapé.

- Criar página inicial.
- Criar dashboard inicial.
- Criar área de novidades e atualizações.
- Criar área de documentação e implementações.
- Criar responsividade para telas pequenas.

## Critério de pronto

A fase estará concluída quando o usuário conseguir navegar pelas principais seções da aplicação em desktop e celular.

---

# Fase 6 — Banco Local

## Objetivo

Criar a camada de persistência local da aplicação.

## Tecnologia sugerida

```text
IndexedDB + Dexie.js
```

## Entidades iniciais

```text
settings
professionals
institutions
clients
anamneses
anamnesisHistory
evaluations
reports
reportSnapshots
```

## Tarefas

- Configurar Dexie.
- Criar versão inicial do banco local.
- Criar stores principais.
- Criar camada de repositórios.
- Criar funções CRUD genéricas quando útil.
- Testar persistência local.
- Testar atualização de schema.

## Critério de pronto

A fase estará concluída quando a aplicação conseguir salvar, listar, editar e remover dados locais básicos.

---

# Fase 7 — Perfil: Profissionais e Instituições

## Objetivo

Implementar a gestão dos perfis usados nos relatórios.

## Tarefas

### Profissionais

- Criar profissional.
- Listar profissionais.
- Visualizar profissional.
- Editar profissional.
- Excluir profissional.
- Selecionar profissional ativo.

### Instituições

- Criar instituição.
- Listar instituições.
- Visualizar instituição.
- Editar instituição.
- Excluir instituição.
- Selecionar instituição ativa.
- Vincular profissionais a instituições.

## Critério de pronto

A fase estará concluída quando for possível configurar o perfil profissional e institucional que será usado em avaliações e relatórios.

---

# Fase 8 — Clientes e Anamnese Geral

## Objetivo

Implementar a área central de clientes.

## Tarefas

### Clientes

- Criar cliente.
- Listar clientes.
- Pesquisar clientes.
- Visualizar cliente.
- Editar cliente.
- Excluir cliente.

### Anamnese geral

- Criar anamnese geral vinculada ao cliente.
- Editar anamnese geral.
- Impedir exclusão isolada da anamnese geral.
- Excluir anamnese apenas junto com cliente.
- Registrar histórico das últimas X alterações.

## Critério de pronto

A fase estará concluída quando o profissional conseguir cadastrar clientes, editar seus dados e manter uma anamnese geral única por cliente.

---

# Fase 9 — Motor de Avaliações

## Objetivo

Criar a base genérica para avaliações antes de implementar cada módulo específico.

## Entidade central

```text
Evaluation
```

## Tipos de avaliação

```text
anthropometric
postural
nutritional
kinanthropometric
```

## Status sugeridos

```text
draft
completed
issued
archived
```

## Tarefas

- Criar estrutura genérica de avaliação.
- Permitir nova avaliação dentro do cliente.
- Permitir escolher tipo de avaliação.
- Salvar avaliação como rascunho.
- Concluir avaliação.
- Editar avaliação.
- Excluir avaliação.
- Listar histórico de avaliações.
- Abrir avaliação existente.

## Critério de pronto

A fase estará concluída quando o fluxo de avaliação existir mesmo antes dos cálculos avançados.

---

# Fase 10 — Avaliação Antropométrica Básica

## Objetivo

Implementar o primeiro módulo avaliativo funcional do MVP.

## Campos iniciais

### Dados básicos

- massa corporal;
- estatura;
- envergadura.

### Perímetros

- ombros;
- tórax;
- braço direito relaxado;
- braço esquerdo relaxado;
- braço direito contraído;
- braço esquerdo contraído;
- antebraço direito;
- antebraço esquerdo;
- cintura;
- abdome;
- quadril;
- coxa direita proximal;
- coxa esquerda proximal;
- coxa direita média;
- coxa esquerda média;
- coxa direita distal;
- coxa esquerda distal;
- panturrilha direita;
- panturrilha esquerda.

### Observações qualitativas

- definição muscular aparente;
- pontos fortes;
- pontos fracos;
- postura dinâmica observada;
- observações profissionais.

## Cálculos iniciais

- IMC;
- relação cintura-quadril;
- relação cintura-estatura;
- relação ombro-cintura;
- simetria bilateral.

## Critério de pronto

A fase estará concluída quando o profissional conseguir realizar uma avaliação antropométrica básica, salvar, editar, reabrir e visualizar resultados calculados.

---

# Fase 11 — Motor de Cálculos Científicos

## Objetivo

Criar uma estrutura confiável e testável para fórmulas.

## Regras

- Toda fórmula deve ter nome.
- Toda fórmula deve ter versão.
- Toda fórmula deve declarar entradas.
- Toda fórmula deve declarar unidades.
- Toda fórmula deve validar dados faltantes.
- Toda fórmula deve retornar resultado rastreável.
- Toda fórmula deve ter teste automatizado.

## Estrutura sugerida

```text
src/features/calculations/
  anthropometric/
  nutritional/
  kinanthropometric/
  shared/
```

## Critério de pronto

A fase estará concluída quando os cálculos iniciais antropométricos estiverem testados e rastreáveis.

---

# Fase 12 — Relatórios e Pré-visualização

## Objetivo

Criar a primeira versão do sistema de relatórios.

## Requisitos

- Cada tipo de avaliação terá seu próprio relatório.
- O relatório será visualizado antes de exportar.
- O relatório terá seção de aviso técnico geral.
- O relatório terá carimbo profissional em todas as páginas.
- O relatório preservará snapshot dos dados.

## Tarefas

- Criar layout de relatório antropométrico.
- Criar pré-visualização do relatório.
- Criar seção de aviso técnico geral.
- Criar carimbo profissional.
- Criar snapshot de relatório.
- Criar visualização posterior pelo histórico.

## Critério de pronto

A fase estará concluída quando o usuário conseguir visualizar o relatório de uma avaliação antropométrica salva.

---

# Fase 13 — Exportação PDF

## Objetivo

Permitir exportar o relatório em PDF.

## Tarefas

- Escolher biblioteca de PDF.
- Criar exportação local.
- Garantir funcionamento offline.
- Garantir carimbo profissional em todas as páginas.
- Testar PDF em desktop e mobile.
- Testar quebra de páginas.
- Testar relatório com muitos dados.

## Critério de pronto

A fase estará concluída quando uma avaliação antropométrica puder ser exportada em PDF offline.

---

# Fase 14 — Backup e Importação

## Objetivo

Permitir portabilidade manual dos dados.

## Tarefas

- Criar exportação da base local.
- Criar importação de backup.
- Criar validação do arquivo.
- Criar metadados de versão.
- Criar aviso de responsabilidade.
- Definir estratégia inicial:
  - substituir base atual; ou
  - mesclar dados; ou
  - perguntar ao usuário.

## Recomendação para MVP

Começar com estratégia simples:

```text
Importação substitui a base atual após confirmação explícita do usuário.
```

Mesclagem pode ficar para versão futura.

## Critério de pronto

A fase estará concluída quando o usuário conseguir exportar dados em um dispositivo e importar em outro manualmente.

---

# Fase 15 — Testes do MVP

## Objetivo

Validar se o MVP é utilizável e confiável.

## Testes manuais obrigatórios

- abrir aplicação pela primeira vez;
- selecionar idioma;
- selecionar tema;
- criar perfil profissional;
- criar instituição;
- cadastrar cliente;
- editar anamnese;
- criar avaliação antropométrica;
- salvar rascunho;
- concluir avaliação;
- visualizar relatório;
- exportar PDF;
- exportar backup;
- importar backup;
- testar offline;
- testar em tela pequena;
- testar em tela larga.

## Testes automatizados obrigatórios

- fórmulas antropométricas iniciais;
- validações de dados;
- funções principais do banco local;
- exportação/importação quando possível.

## Critério de pronto

A fase estará concluída quando o fluxo principal funcionar sem internet e sem dados quebrados.

---

# Fase 16 — Refinamento do MVP

## Objetivo

Melhorar a experiência antes de adicionar novos módulos.

## Tarefas

- Corrigir bugs.
- Melhorar layout responsivo.
- Melhorar mensagens de erro.
- Melhorar fluxo de primeiro acesso.
- Melhorar relatório.
- Melhorar dashboard.
- Revisar textos de i18n.
- Revisar documentação.

## Critério de pronto

A fase estará concluída quando o MVP puder ser usado por um profissional real em uma avaliação antropométrica simples.

---

# 5. MVP 1 — Definição Objetiva

O MVP 1 deve entregar apenas o necessário para provar que a aplicação funciona.

## O MVP 1 inclui

- PWA offline.
- Primeiro acesso com idioma, tema e perfil.
- Interface em inglês e português.
- Layout principal responsivo.
- Menu principal.
- Cadastro de profissionais.
- Cadastro de instituições.
- Cadastro de clientes.
- Anamnese geral.
- Histórico simples de anamnese.
- Avaliação antropométrica básica.
- Cálculos antropométricos iniciais.
- Pré-visualização de relatório.
- Carimbo profissional.
- Aviso técnico geral.
- Exportação PDF.
- Backup manual.
- Importação manual.

## O MVP 1 não inclui

- avaliação postural completa;
- avaliação nutricional completa;
- avaliação cineantropométrica completa;
- app do cliente;
- sincronização;
- backend;
- login online;
- permissões avançadas;
- diagnóstico automático;
- avaliação por foto;
- prescrição automática;
- pagamento.

---

# 6. Ordem Recomendada de Implementação do MVP 1

```text
1. Criar projeto Vite + React + TypeScript.
2. Configurar PWA.
3. Configurar i18n.
4. Configurar tema claro/escuro.
5. Criar onboarding.
6. Criar layout principal.
7. Criar navegação.
8. Configurar Dexie/IndexedDB.
9. Criar settings locais.
10. Criar profissionais.
11. Criar instituições.
12. Criar clientes.
13. Criar anamnese geral.
14. Criar histórico da anamnese.
15. Criar estrutura genérica de avaliações.
16. Criar avaliação antropométrica.
17. Criar cálculos antropométricos.
18. Criar testes dos cálculos.
19. Criar pré-visualização de relatório.
20. Criar carimbo profissional.
21. Criar aviso técnico geral.
22. Criar exportação PDF.
23. Criar backup.
24. Criar importação.
25. Testar offline.
26. Testar responsividade.
27. Corrigir bugs.
28. Fechar MVP.
```

---

# 7. Marcos do Projeto

## Marco 1 — Base técnica executando

A aplicação abre localmente e possui estrutura inicial.

## Marco 2 — PWA offline funcional

A aplicação funciona offline depois do primeiro acesso.

## Marco 3 — Onboarding funcional

O usuário configura idioma, tema e perfil inicial.

## Marco 4 — CRUD local funcional

Profissionais, instituições e clientes podem ser cadastrados localmente.

## Marco 5 — Avaliação antropométrica funcional

O profissional consegue registrar uma avaliação antropométrica básica.

## Marco 6 — Cálculos testados

Os cálculos iniciais estão implementados e testados.

## Marco 7 — Relatório funcional

O relatório pode ser visualizado com carimbo e aviso técnico.

## Marco 8 — PDF funcional

O relatório pode ser exportado em PDF offline.

## Marco 9 — Backup funcional

A base local pode ser exportada e importada manualmente.

## Marco 10 — MVP pronto

O fluxo completo funciona em cenário real simples.

---

# 8. Checklist Técnico Inicial

## Projeto

- [ ] Criar repositório Git.
- [ ] Criar projeto Vite.
- [ ] Configurar TypeScript.
- [ ] Configurar ESLint.
- [ ] Configurar Prettier.
- [ ] Criar README.
- [ ] Adicionar LICENSE MIT.

## PWA

- [ ] Configurar manifest.
- [ ] Configurar service worker.
- [ ] Configurar cache.
- [ ] Testar offline.

## Interface

- [ ] Criar layout base.
- [ ] Criar navegação.
- [ ] Criar página inicial.
- [ ] Criar onboarding.
- [ ] Criar tema claro.
- [ ] Criar tema escuro.
- [ ] Criar responsividade.

## Dados

- [ ] Configurar Dexie.
- [ ] Criar banco local.
- [ ] Criar stores.
- [ ] Criar repositórios.
- [ ] Criar migração inicial.

## Funcionalidades

- [ ] Profissionais.
- [ ] Instituições.
- [ ] Clientes.
- [ ] Anamnese.
- [ ] Avaliações.
- [ ] Antropometria.
- [ ] Relatórios.
- [ ] PDF.
- [ ] Backup.

## Testes

- [ ] Testes de fórmulas.
- [ ] Testes de validação.
- [ ] Testes de banco local.
- [ ] Testes manuais offline.
- [ ] Testes em telas pequenas.

---

# 9. Riscos e Mitigações

## Risco 1 — Escopo grande demais

O projeto tem muitos módulos e pode se tornar inviável se tudo for iniciado ao mesmo tempo.

Mitigação:

```text
Implementar primeiro apenas o MVP 1 com antropometria básica.
```

---

## Risco 2 — Erros científicos

Fórmulas implementadas incorretamente podem gerar resultados errados.

Mitigação:

```text
Documentar fórmula, unidade, referência e criar testes automatizados.
```

---

## Risco 3 — PWA não funcionar offline de verdade

Alguns recursos podem quebrar offline, especialmente PDF, fontes, imagens e rotas.

Mitigação:

```text
Testar em modo offline desde o início.
```

---

## Risco 4 — Perda de dados locais

Usuário pode perder dados ao limpar navegador, trocar dispositivo ou remover app.

Mitigação:

```text
Implementar backup no MVP e exibir avisos claros.
```

---

## Risco 5 — Banco local mal planejado

Mudanças futuras podem quebrar dados antigos.

Mitigação:

```text
Usar versionamento de schema desde o começo.
```

---

## Risco 6 — Relatório com aparência amadora

O relatório é parte central do valor profissional da aplicação.

Mitigação:

```text
Criar template limpo, carimbo profissional e exportação PDF de qualidade.
```

---

# 10. Princípios de Desenvolvimento

## 10.1 Pequenas entregas

Cada etapa deve gerar algo testável.

Evitar trabalhar semanas em algo que não pode ser executado.

---

## 10.2 Primeiro funcionar, depois sofisticar

Não começar com fórmulas avançadas, design complexo ou sincronização.

---

## 10.3 Código em inglês, documentação inicial em português

O código será internacional desde o início.

A documentação de planejamento pode permanecer em pt-BR até a fase de revisão final.

---

## 10.4 Testar offline sempre

Toda funcionalidade essencial deve ser testada sem internet.

---

## 10.5 Fórmulas são código crítico

Cálculos científicos devem ser tratados como parte sensível do sistema.

---

## 10.6 Relatório é produto

O PDF não é detalhe. Ele é uma das principais entregas para o profissional.

---

# 11. Próximos Arquivos Recomendados

Após este plano, recomenda-se criar:

```text
05-technical-stack.md
06-project-structure.md
07-mvp-scope.md
08-local-database-plan.md
09-report-system-plan.md
10-scientific-calculation-plan.md
```

A próxima decisão mais importante é a stack técnica final, especialmente:

- biblioteca de interface;
- solução PWA;
- banco local;
- biblioteca de PDF;
- biblioteca de formulários;
- validação;
- i18n;
- testes.

---

# 12. Próxima Ação Imediata

A próxima ação prática recomendada é criar o projeto base com:

```text
Vite + React + TypeScript
```

Depois configurar:

```text
PWA
i18n
tema claro/escuro
Dexie.js
estrutura de pastas
```

Somente após essa fundação a aplicação deve avançar para clientes, anamnese e avaliações.
