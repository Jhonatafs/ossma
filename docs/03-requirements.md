# Requisitos Iniciais

**Projeto:** OSSMA — Open Source Sport Management Application  
**Documento:** 03  
**Status:** versão inicial consolidada  
**Idioma da documentação:** português brasileiro  
**Idioma de nomes técnicos:** inglês técnico

**Autoria e curadoria do projeto:** JhonFs / Jhonata Sande  
**Redação inicial:** GPT-5.5

---

## 1. Finalidade

Este documento define os requisitos iniciais do OSSMA para orientar documentação, implementação incremental, revisão técnica e geração de prompts para Codex.

Os requisitos aqui registrados representam decisões já fechadas para a fundação do projeto e para o MVP. O documento não deve substituir os mapas técnicos detalhados de anamnese, antropometria e cineantropometria.

Arquivos técnicos normativos:

- `ficha-de-anamnese-geral-do-cliente.md`;
- `mapa-tecnico-de-calculo-para-antropometrica.md`;
- `mapa_tecnico_de_cálculo_para_cineantropometria(1).md`.

---

## 2. Convenção dos requisitos

Os requisitos usam o padrão:

```text
REQ-CATEGORY-NNN
```

Exemplos:

- `REQ-APP-001`;
- `REQ-CLIENT-001`;
- `REQ-ASSESSMENT-001`;
- `REQ-REPORT-001`.

Tipos usados:

- **Funcional**;
- **Não funcional**;
- **Dados**;
- **Interface**;
- **Documentação**;
- **Segurança/Responsabilidade**;
- **Planejamento**;
- **Fora de escopo**.

Prioridades usadas:

- **Fundação**: necessário para estruturar o projeto.
- **MVP**: obrigatório para a primeira versão útil.
- **Futuro**: reconhecido, mas fora do MVP.

---

## 3. Requisitos da aplicação

### REQ-APP-001 — PWA

**Tipo:** Não funcional  
**Prioridade:** MVP

O OSSMA deve ser desenvolvido inicialmente como uma PWA.

**Critérios de aceitação:**

- Deve funcionar em navegadores modernos.
- Deve ser preparado para instalação como PWA.
- Deve ser a estratégia multiplataforma inicial.
- Não deve exigir aplicativo nativo separado no MVP.

---

### REQ-APP-002 — Local-first

**Tipo:** Não funcional  
**Prioridade:** MVP

A aplicação deve ser local-first.

**Critérios de aceitação:**

- Os dados principais devem ser armazenados localmente.
- O uso principal não deve depender de servidor remoto.
- O banco local deve ser a fonte primária de dados no MVP.

---

### REQ-APP-003 — Offline-first

**Tipo:** Não funcional  
**Prioridade:** MVP

A aplicação deve priorizar funcionamento offline.

**Critérios de aceitação:**

- Fluxos principais devem funcionar sem internet após carregamento/instalação inicial.
- Cadastro, avaliação, relatório HTML e consulta local não devem exigir conexão permanente.
- Recursos remotos não devem ser obrigatórios no MVP.

---

### REQ-APP-004 — Sem backend obrigatório

**Tipo:** Não funcional  
**Prioridade:** MVP

O MVP não deve exigir backend obrigatório.

**Critérios de aceitação:**

- Não deve exigir servidor próprio para fluxos principais.
- Não deve depender de API remota para cadastrar ou consultar dados locais.
- Backend futuro deve ser opcional.

---

### REQ-APP-005 — Sem login online obrigatório

**Tipo:** Segurança/Responsabilidade  
**Prioridade:** MVP

O MVP não deve exigir login online.

**Critérios de aceitação:**

- O usuário deve poder usar o sistema sem conta online.
- O sistema não deve depender de autenticação remota.
- `OnlineAccount` fica fora do MVP.

---

### REQ-APP-006 — Sem sincronização automática

**Tipo:** Não funcional  
**Prioridade:** MVP

O MVP não deve ter sincronização automática entre dispositivos.

**Critérios de aceitação:**

- Dados não devem ser sincronizados automaticamente entre dispositivos.
- Backup e restauração devem ser manuais.
- Sincronização futura fica fora do MVP.

---

## 4. Requisitos técnicos

### REQ-TECH-001 — Stack inicial

**Tipo:** Não funcional  
**Prioridade:** Fundação

A stack inicial deve usar:

- TypeScript;
- SvelteKit;
- pnpm;
- Paraglide;
- PWA;
- Dexie.js/IndexedDB, salvo decisão técnica melhor.

**Critérios de aceitação:**

- O projeto deve ser criado com SvelteKit.
- O gerenciamento de pacotes deve usar pnpm.
- A internacionalização deve usar Paraglide.
- O banco local deve considerar Dexie.js/IndexedDB como preferência inicial.

---

### REQ-TECH-002 — Inglês técnico no código

**Tipo:** Não funcional  
**Prioridade:** Fundação

Código, nomes técnicos, variáveis, funções, tipos e comentários devem usar inglês técnico claro.

**Critérios de aceitação:**

- Evitar português em nomes técnicos de código.
- Evitar abreviações obscuras.
- Preferir nomes explícitos, como `professionalProfile`, `institutionProfile`, `assessmentProtocol`.

---

### REQ-TECH-003 — Documentação inicial em português

**Tipo:** Documentação  
**Prioridade:** Fundação

A documentação inicial deve ser escrita em português brasileiro.

**Critérios de aceitação:**

- Documentos de produto e planejamento devem usar português brasileiro.
- Termos de código podem permanecer em inglês.
- A documentação deve ser clara, viva e revisável.

---

### REQ-TECH-004 — Nomes técnicos em PascalCase

**Tipo:** Não funcional  
**Prioridade:** Fundação

Nomes técnicos de módulos devem usar inglês técnico e PascalCase.

**Critérios de aceitação:**

- Exemplos: `ClientManagement`, `ProfessionalProfiles`, `AssessmentManagement`.
- Rotas não devem usar PascalCase.
- Rotas devem ser em inglês e formato web comum.

---

## 5. Requisitos de estrutura, navegação e HTML inicial

### REQ-SHELL-001 — Estrutura global mínima

**Tipo:** Interface  
**Prioridade:** Fundação

A aplicação deve manter estrutura global mínima baseada em:

```html
<html>
	<body>
		<main>
			<!-- page content -->
		</main>
	</body>
</html>
```

**Critérios de aceitação:**

- Conteúdo variável deve ser renderizado dentro de `main`.
- O layout global deve ser simples e estável.
- A implementação em SvelteKit deve preservar o esqueleto global.

---

### REQ-SHELL-002 — Área útil da aplicação

**Tipo:** Interface  
**Prioridade:** Fundação

A aplicação deve ser pensada para ocupar 100% da área útil disponível.

**Critérios de aceitação:**

- Deve considerar navegador, PWA instalada e dispositivos móveis.
- A regra visual final será refinada na etapa de CSS.
- A intenção estrutural deve ser preservada desde o começo.

---

### REQ-SHELL-003 — HTML puro na fase inicial

**Tipo:** Interface  
**Prioridade:** Fundação

A fase inicial deve usar HTML semântico puro, sem CSS visual.

**Critérios de aceitação:**

- Priorizar estrutura, navegação, formulários e regras de negócio.
- Adiar CSS para etapa posterior.
- Não depender de estética para validar fluxo.

---

### REQ-NAV-001 — Rotas iniciais

**Tipo:** Interface  
**Prioridade:** Fundação

O esqueleto inicial deve prever as rotas:

```text
/
/onboarding
/clients
/clients/new
/clients/[id]
/professionals
/institutions
/evaluations
/evaluations/new
/evaluations/[id]
/settings
/backup
/help
/documentation
```

**Critérios de aceitação:**

- Todas as rotas públicas devem ser em inglês.
- `/` deve ser a página inicial.
- `/documentation` deve existir para documentação técnica.
- As rotas podem começar como páginas HTML simples.

---

### REQ-NAV-002 — Navegação acessível

**Tipo:** Interface  
**Prioridade:** Fundação

A navegação inicial deve seguir boas práticas de HTML e acessibilidade.

**Critérios de aceitação:**

- Deve funcionar sem CSS visual.
- Deve ser navegável por teclado.
- Deve ser compreensível por leitores de tela.
- Deve usar marcação semântica.

---

## 6. Requisitos de acessibilidade, usabilidade e performance

### REQ-A11Y-001 — HTML semântico

**Tipo:** Não funcional  
**Prioridade:** MVP

A aplicação deve priorizar HTML semântico.

**Critérios de aceitação:**

- Usar `main` para conteúdo principal.
- Usar formulários com labels explícitos.
- Usar hierarquia clara de títulos.
- Evitar controles sem nome acessível.

---

### REQ-A11Y-002 — Navegação por teclado

**Tipo:** Não funcional  
**Prioridade:** MVP

A aplicação deve ser navegável por teclado.

**Critérios de aceitação:**

- Links e controles devem ser alcançáveis por teclado.
- Fluxos principais não devem depender exclusivamente de mouse ou toque.

---

### REQ-A11Y-003 — Leitores de tela

**Tipo:** Não funcional  
**Prioridade:** MVP

A estrutura inicial deve considerar leitores de tela.

**Critérios de aceitação:**

- Campos devem ter rótulos claros.
- Mensagens de erro devem ser associáveis ao campo.
- Navegação deve ter texto significativo.

---

### REQ-USABILITY-001 — Clareza antes de estética

**Tipo:** Não funcional  
**Prioridade:** Fundação

A aplicação deve priorizar clareza, estrutura e uso antes de refinamento visual.

**Critérios de aceitação:**

- CSS visual deve vir depois de navegação, formulários e regras principais.
- A aplicação deve ser compreensível mesmo sem CSS.

---

### REQ-PERF-001 — Leveza

**Tipo:** Não funcional  
**Prioridade:** MVP

A aplicação deve priorizar leveza e performance.

**Critérios de aceitação:**

- Evitar dependências pesadas sem justificativa.
- Evitar salvar artefatos pesados no banco local.
- Priorizar dados estruturados.
- Limitar imagens a 2MB.

---

### REQ-PERF-002 — Modularidade

**Tipo:** Não funcional  
**Prioridade:** Fundação

Funcionalidades devem ser organizadas de forma modular.

**Critérios de aceitação:**

- Avaliações futuras devem poder ser adicionadas sem reescrever o núcleo.
- Protocolos devem ser organizados por tipo de avaliação.
- Cálculos e relatórios devem ser isoláveis por módulo.

---

## 7. Requisitos de internacionalização e unidades

### REQ-I18N-001 — Paraglide

**Tipo:** Não funcional  
**Prioridade:** MVP

A aplicação deve usar Paraglide para internacionalização.

**Critérios de aceitação:**

- Idiomas iniciais: inglês e português brasileiro.
- Textos de interface devem ser preparados para tradução.
- Deve permitir expansão futura para novos idiomas.

---

### REQ-I18N-002 — Rotas e código em inglês

**Tipo:** Não funcional  
**Prioridade:** Fundação

Rotas públicas e nomes técnicos internos devem permanecer em inglês.

**Critérios de aceitação:**

- Rotas públicas em inglês.
- Código em inglês.
- Interface traduzida por idioma.

---

### REQ-I18N-003 — Unidades canônicas

**Tipo:** Dados  
**Prioridade:** MVP

Valores mensuráveis devem ser armazenados em unidades canônicas.

**Critérios de aceitação:**

- Massa corporal: `kg`.
- Estatura no cadastro: `cm`.
- Estatura para IMC: `m`.
- Dobras cutâneas: `mm`.
- Perímetros: `cm`.
- Diâmetros: `cm`.
- Idade: anos completos.
- Idade pediátrica: meses, quando aplicável.
- Temperatura futura: `°C`.
- A interface poderá converter unidades futuramente, mas o banco deve manter unidades canônicas.

---

## 8. Requisitos de onboarding

### REQ-ONBOARDING-001 — Primeiro acesso

**Tipo:** Interface  
**Prioridade:** MVP

A aplicação deve ter onboarding no primeiro acesso.

**Critérios de aceitação:**

- Apresentar nome da aplicação.
- Explicar funcionamento local/offline.
- Permitir configuração de idioma.
- Permitir configuração de tema.
- Apresentar mini tutorial.
- Indicar onde encontrar ajuda depois.

---

### REQ-ONBOARDING-002 — Aceite explícito

**Tipo:** Segurança/Responsabilidade  
**Prioridade:** MVP

O onboarding deve exigir aceite explícito.

**Critérios de aceitação:**

- Informar que os dados ficam localmente.
- Informar que backup é responsabilidade do usuário.
- Informar que segurança do dispositivo é responsabilidade do usuário.
- Informar que a aplicação não substitui julgamento profissional.

---

### REQ-ONBOARDING-003 — Informações acessíveis depois

**Tipo:** Documentação  
**Prioridade:** MVP

Informações do onboarding devem permanecer acessíveis depois.

**Critérios de aceitação:**

- Disponíveis em ajuda, configurações ou documentação.
- Devem explicar dados locais, backup, restauração e uso básico.

---

## 9. Requisitos de ProfessionalProfile

### REQ-PROFESSIONAL-001 — Cadastro de ProfessionalProfile

**Tipo:** Funcional  
**Prioridade:** MVP

O sistema deve permitir cadastrar `ProfessionalProfile`.

**Critérios de aceitação:**

- Armazenar dados de identificação profissional.
- Armazenar dados necessários ao carimbo técnico.
- Permitir vínculo opcional com uma instituição.
- Permitir logo/imagem profissional no MVP, respeitando 2MB.

---

### REQ-PROFESSIONAL-002 — Profissional obrigatório na avaliação

**Tipo:** Funcional  
**Prioridade:** MVP

Toda avaliação deve ter exatamente um profissional avaliador.

**Critérios de aceitação:**

- A coleta não deve iniciar sem profissional selecionado.
- O relatório deve exibir snapshot do profissional.
- O profissional deve aparecer como responsável técnico.

---

### REQ-PROFESSIONAL-003 — Vínculo com instituição

**Tipo:** Funcional  
**Prioridade:** MVP

Um profissional pode estar vinculado a no máximo uma instituição.

**Critérios de aceitação:**

- O vínculo deve ser opcional.
- Se houver vínculo, a instituição deve ser derivada automaticamente para a avaliação.
- O usuário não deve escolher manualmente instituição na avaliação quando ela já estiver vinculada ao profissional.

---

### REQ-PROFESSIONAL-004 — Exclusão de ProfessionalProfile

**Tipo:** Funcional  
**Prioridade:** MVP

O sistema deve permitir excluir `ProfessionalProfile` com confirmação forte.

**Critérios de aceitação:**

- A exclusão é permitida mesmo com avaliações antigas vinculadas.
- Avaliações antigas preservam snapshots do profissional.
- O sistema deve avisar que o cadastro original será removido.
- O sistema deve avisar que novas avaliações não poderão usar o profissional excluído.
- Snapshots históricos não devem ser apagados.
- A exclusão deve exigir confirmação explícita.

---

## 10. Requisitos de InstitutionProfile

### REQ-INSTITUTION-001 — Cadastro de InstitutionProfile

**Tipo:** Funcional  
**Prioridade:** MVP

O sistema deve permitir cadastrar `InstitutionProfile`.

**Critérios de aceitação:**

- Armazenar dados institucionais relevantes para relatório.
- Permitir logo institucional no MVP, respeitando 2MB.
- A instituição pode existir sem profissional vinculado.

---

### REQ-INSTITUTION-002 — Instituição no relatório

**Tipo:** Funcional  
**Prioridade:** MVP

Quando o profissional avaliador estiver vinculado a uma instituição, a avaliação deve registrar snapshot institucional.

**Critérios de aceitação:**

- O relatório deve exibir cabeçalho institucional quando houver snapshot.
- O relatório deve ser gerado sem cabeçalho institucional quando não houver instituição.
- A instituição deve ser derivada do vínculo do profissional.

---

### REQ-INSTITUTION-003 — Exclusão de InstitutionProfile

**Tipo:** Funcional  
**Prioridade:** MVP

O sistema deve permitir excluir `InstitutionProfile` com confirmação forte.

**Critérios de aceitação:**

- A exclusão remove o vínculo em profissionais vinculados.
- Avaliações antigas preservam snapshots institucionais.
- O sistema deve avisar sobre o impacto.
- A exclusão deve exigir confirmação explícita.

---

## 11. Requisitos de Client

### REQ-CLIENT-001 — Cadastro de cliente

**Tipo:** Funcional  
**Prioridade:** MVP

O sistema deve permitir cadastrar clientes.

**Critérios de aceitação:**

- Permitir dados cadastrais obrigatórios.
- Permitir dados opcionais.
- Permitir foto do cliente no MVP, respeitando 2MB.
- Vincular o cliente à anamnese geral.
- Permitir histórico de avaliações.

---

### REQ-CLIENT-002 — Cliente sem vínculo direto

**Tipo:** Dados  
**Prioridade:** MVP

O cliente não deve ser vinculado diretamente a profissional ou instituição no MVP.

**Critérios de aceitação:**

- O cadastro do cliente é independente.
- O vínculo histórico com profissional e instituição ocorre por avaliação.
- Um cliente pode ter avaliações feitas por profissionais diferentes.

---

### REQ-CLIENT-003 — Idade calculada

**Tipo:** Dados  
**Prioridade:** MVP

A idade do cliente deve ser calculada automaticamente.

**Critérios de aceitação:**

- Armazenar data de nascimento.
- Calcular idade na data da avaliação.
- Salvar idade no snapshot da avaliação.
- Suportar idade em meses quando necessário para referências pediátricas.

---

### REQ-CLIENT-004 — Exclusão de cliente

**Tipo:** Funcional  
**Prioridade:** MVP

O sistema deve permitir excluir cliente com confirmação forte.

**Critérios de aceitação:**

- Avisar que dados relacionados serão removidos.
- Incluir anamnese, foto e avaliações relacionadas, salvo decisão técnica posterior diferente.
- Exigir confirmação explícita.
- Não haverá lixeira, ativo/inativo ou arquivamento no MVP.

---

## 12. Requisitos de anamnese

### REQ-ANAMNESIS-001 — Anamnese geral obrigatória

**Tipo:** Funcional  
**Prioridade:** MVP

Todo cliente deve ter anamnese geral.

**Critérios de aceitação:**

- A anamnese geral faz parte do cadastro do cliente.
- Deve seguir `ficha-de-anamnese-geral-do-cliente.md`.
- Campos condicionais devem respeitar respostas anteriores.
- Blocos obrigatórios devem ser tratados como parte do cadastro.

---

### REQ-ANAMNESIS-002 — Anamnese específica por avaliação

**Tipo:** Funcional  
**Prioridade:** MVP

Cada tipo de avaliação pode ter anamnese específica.

**Critérios de aceitação:**

- Antropometria deve seguir sua anamnese própria.
- Cineantropometria deve seguir sua anamnese própria.
- Perguntas reutilizadas devem manter o mesmo nome da anamnese geral.
- Respostas específicas devem ser salvas na avaliação.

---

### REQ-ANAMNESIS-003 — Reutilização de respostas

**Tipo:** Funcional  
**Prioridade:** MVP

Avaliações podem puxar respostas da anamnese geral.

**Critérios de aceitação:**

- Respostas puxadas aparecem sem exigir nova confirmação.
- O usuário pode manter a resposta.
- O usuário pode alterar a resposta durante a avaliação.
- Alterar resposta reaproveitada deve disparar pergunta sobre atualizar a anamnese geral.

---

### REQ-ANAMNESIS-004 — Atualização explícita da anamnese geral

**Tipo:** Funcional  
**Prioridade:** MVP

Se uma resposta da anamnese geral for alterada durante uma avaliação, o sistema deve perguntar se o usuário deseja atualizar a anamnese geral.

**Critérios de aceitação:**

- Mostrar alteração de resposta antiga para nova.
- Se aceitar, atualizar o cadastro geral.
- Se recusar, salvar apenas na avaliação.
- A avaliação deve preservar snapshot da resposta usada.

---

### REQ-ANAMNESIS-005 — Confirmação de ciência e veracidade

**Tipo:** Segurança/Responsabilidade  
**Prioridade:** MVP

Toda avaliação deve registrar confirmação de ciência e veracidade.

**Critérios de aceitação:**

- Registrar confirmação do cliente ou responsável, quando aplicável.
- Registrar confirmação do profissional avaliador.
- Registrar data e hora.
- Exibir confirmação no relatório.

---

## 13. Requisitos de avaliação

### REQ-ASSESSMENT-001 — Tipos iniciais

**Tipo:** Funcional  
**Prioridade:** MVP

O MVP deve suportar avaliações antropométrica e cineantropométrica como tipos separados.

**Critérios de aceitação:**

- Antropometria é um tipo próprio.
- Cineantropometria é um tipo próprio.
- Cada tipo tem dados, protocolos, cálculos e relatório próprios.
- Fusão de avaliações fica fora do MVP.

---

### REQ-ASSESSMENT-002 — Pré-requisitos para coleta

**Tipo:** Funcional  
**Prioridade:** MVP

Antes de iniciar a coleta, a avaliação deve ter tipo, cliente e profissional avaliador definidos.

**Critérios de aceitação:**

- Exigir tipo de avaliação.
- Exigir cliente.
- Exigir profissional avaliador.
- Bloquear coleta sem esses três elementos.

---

### REQ-ASSESSMENT-003 — Rascunho

**Tipo:** Funcional  
**Prioridade:** MVP

Após definir tipo, cliente e profissional, a avaliação pode existir como rascunho.

**Critérios de aceitação:**

- Estado inicial: `Draft`.
- Dados preenchidos devem ser salvos progressivamente.
- O usuário deve poder retomar avaliação incompleta.
- O rascunho deve reduzir risco de perda por interrupção.

---

### REQ-ASSESSMENT-004 — Avaliação finalizada

**Tipo:** Funcional  
**Prioridade:** MVP

A avaliação pode ser finalizada quando possuir dados e confirmações necessárias.

**Critérios de aceitação:**

- Estado final: `Completed`.
- Deve permitir regenerar relatório HTML.
- Deve permitir exportação PDF.
- Deve preservar snapshots necessários.

---

### REQ-ASSESSMENT-005 — Edição de avaliação finalizada

**Tipo:** Funcional  
**Prioridade:** MVP

Avaliações finalizadas podem ser editadas.

**Critérios de aceitação:**

- Preservar `createdAt`.
- Atualizar `updatedAt`.
- Histórico campo a campo não é obrigatório no MVP.
- Manter consistência dos dados usados no relatório.

---

### REQ-ASSESSMENT-006 — Exclusão de avaliação

**Tipo:** Funcional  
**Prioridade:** MVP

O sistema deve permitir excluir avaliação com confirmação forte.

**Critérios de aceitação:**

- Avisar que a avaliação será removida.
- Exigir confirmação explícita.
- Não haverá lixeira no MVP.
- PDFs exportados fora da aplicação não fazem parte da exclusão.

---

### REQ-ASSESSMENT-007 — Snapshots

**Tipo:** Dados  
**Prioridade:** MVP

A avaliação deve salvar snapshots históricos.

**Critérios de aceitação:**

- Salvar snapshot do cliente.
- Salvar snapshot do profissional.
- Salvar snapshot da instituição, quando houver.
- Salvar dados de anamnese usados.
- Salvar protocolo escolhido, quando aplicável.
- Evitar duplicação pesada de imagens quando possível.

---

## 14. Requisitos de protocolos

### REQ-PROTOCOL-001 — AssessmentProtocol

**Tipo:** Funcional  
**Prioridade:** MVP

Avaliações podem exigir escolha de `AssessmentProtocol`.

**Critérios de aceitação:**

- Protocolos devem ser definidos por tipo de avaliação.
- O protocolo determina campos obrigatórios, opcionais e condicionais.
- O protocolo determina cálculos disponíveis.
- O protocolo escolhido deve ser salvo na avaliação.

---

### REQ-PROTOCOL-002 — Protocolos antropométricos

**Tipo:** Funcional  
**Prioridade:** MVP

A avaliação antropométrica deve seguir o arquivo técnico correspondente.

**Critérios de aceitação:**

- Campos e fórmulas devem seguir `mapa-tecnico-de-calculo-para-antropometrica.md`.
- Campos obrigatórios devem variar conforme protocolo escolhido.
- Protocolos como Jackson-Pollock 3 dobras e 7 dobras devem poder ser representados quando incluídos na implementação.

---

### REQ-PROTOCOL-003 — Protocolos cineantropométricos

**Tipo:** Funcional  
**Prioridade:** MVP

A avaliação cineantropométrica deve seguir o arquivo técnico correspondente.

**Critérios de aceitação:**

- Campos e fórmulas devem seguir `mapa_tecnico_de_cálculo_para_cineantropometria(1).md`.
- Deve suportar perfis e protocolos próprios de cineantropometria.
- Campos obrigatórios devem variar conforme protocolo escolhido.

---

### REQ-PROTOCOL-004 — Organização dos tipos de avaliação

**Tipo:** Interface  
**Prioridade:** MVP

Tipos de avaliação devem ser organizados por método estável.

**Critérios de aceitação:**

- Usar categoria e/ou ordem alfabética.
- Permitir crescimento futuro.
- Evitar ordem casual de implementação.

---

## 15. Requisitos de relatório

### REQ-REPORT-001 — Relatório HTML

**Tipo:** Funcional  
**Prioridade:** MVP

O sistema deve gerar relatório HTML a partir dos dados salvos.

**Critérios de aceitação:**

- O relatório deve ser visualizável na aplicação.
- Deve ser regenerado a partir da avaliação.
- Não é fonte primária dos dados.
- Deve incluir dados, cálculos, observações, snapshots e confirmações.

---

### REQ-REPORT-002 — Exportação PDF

**Tipo:** Funcional  
**Prioridade:** MVP

O sistema deve permitir exportar relatório para PDF.

**Critérios de aceitação:**

- Exportação sob demanda.
- O usuário salva ou envia o PDF fora da aplicação.
- O PDF não deve ser salvo no banco.
- O banco pode registrar metadados futuros, mas não o arquivo PDF.

---

### REQ-REPORT-003 — Carimbo técnico

**Tipo:** Funcional  
**Prioridade:** MVP

O relatório deve exibir carimbo textual do profissional.

**Critérios de aceitação:**

- Usar snapshot do profissional.
- Identificar responsável pela avaliação.
- Não exigir assinatura digitalizada no MVP.

---

### REQ-REPORT-004 — Cabeçalho institucional

**Tipo:** Funcional  
**Prioridade:** MVP

O relatório deve exibir cabeçalho institucional quando houver instituição no snapshot.

**Critérios de aceitação:**

- Usar snapshot institucional.
- Omitir cabeçalho se não houver instituição.
- A instituição é derivada do vínculo do profissional.

---

### REQ-REPORT-005 — Confirmações no relatório

**Tipo:** Segurança/Responsabilidade  
**Prioridade:** MVP

O relatório deve exibir confirmação de ciência e veracidade.

**Critérios de aceitação:**

- Indicar confirmação do cliente.
- Indicar revisão/confirmação profissional quando aplicável.
- Incluir data e hora.
- Considerar responsável legal quando aplicável.

---

## 16. Requisitos de imagens

### REQ-MEDIA-001 — Imagens no MVP

**Tipo:** Funcional  
**Prioridade:** MVP

O MVP deve permitir imagens para cliente, profissional e instituição.

**Critérios de aceitação:**

- Cliente pode ter foto.
- Profissional pode ter logo ou imagem.
- Instituição pode ter logo.
- Imagens devem respeitar limite de 2MB.

---

### REQ-MEDIA-002 — Blob no IndexedDB

**Tipo:** Dados  
**Prioridade:** MVP

Imagens devem ser armazenadas como `Blob` no IndexedDB.

**Critérios de aceitação:**

- A imagem deve ser associada por identificador ao registro correspondente.
- A estratégia deve evitar duplicação desnecessária.
- Imagens necessárias à restauração devem entrar no backup.
- Snapshots devem evitar duplicar imagens pesadas quando uma referência estável for suficiente.

---

### REQ-MEDIA-003 — Limite de 2MB

**Tipo:** Não funcional  
**Prioridade:** MVP

O limite inicial de imagem deve ser 2MB por imagem.

**Critérios de aceitação:**

- Rejeitar ou tratar imagens acima de 2MB.
- Informar o usuário sobre o limite.
- Aplicar o limite a fotos e logos.

---

## 17. Requisitos de banco local

### REQ-DATABASE-001 — Banco local

**Tipo:** Dados  
**Prioridade:** MVP

A aplicação deve usar banco local para dados estruturados.

**Critérios de aceitação:**

- Preferência inicial: Dexie.js/IndexedDB.
- Armazenar clientes, profissionais, instituições, anamneses, avaliações, configurações e metadados.
- Não armazenar PDFs exportados.
- Armazenar imagens como Blob no IndexedDB.

---

### REQ-DATABASE-002 — Dados primários

**Tipo:** Dados  
**Prioridade:** MVP

O banco deve armazenar dados primários, calculáveis, snapshots e metadados.

**Critérios de aceitação:**

- Salvar dados brutos.
- Salvar dados necessários para cálculo.
- Salvar resultados calculados quando necessário.
- Salvar snapshots.
- Regenerar relatório HTML a partir dos dados salvos.

---

### REQ-DATABASE-003 — Metadados

**Tipo:** Dados  
**Prioridade:** MVP

Registros principais devem conter metadados mínimos.

**Critérios de aceitação:**

- Registros devem ter `createdAt`.
- Registros editáveis devem ter `updatedAt`.
- Avaliações devem preservar estado `Draft` ou `Completed`.
- Considerar versionamento para migrações futuras.

---

## 18. Requisitos de backup e restauração

### REQ-BACKUP-001 — Backup manual

**Tipo:** Segurança/Responsabilidade  
**Prioridade:** MVP

O backup do MVP deve ser manual.

**Critérios de aceitação:**

- O usuário inicia a exportação.
- A aplicação explica que backup é responsabilidade do usuário.
- Não há backup automático em rede no MVP.

---

### REQ-BACKUP-002 — Backup em ZIP

**Tipo:** Dados  
**Prioridade:** MVP

O backup deve usar arquivo `.zip`.

**Critérios de aceitação:**

- Conter JSON com dados estruturados.
- Conter imagens necessárias à restauração.
- Conter metadados de versão.
- A estrutura pode ser refinada tecnicamente sem alterar a regra base.

---

### REQ-BACKUP-003 — Restauração substitutiva

**Tipo:** Dados  
**Prioridade:** MVP

A restauração de backup deve substituir a base local atual.

**Critérios de aceitação:**

- Não haverá merge no MVP.
- Avisar que a base atual será substituída.
- Exigir confirmação explícita.
- Validar compatibilidade básica do backup quando possível.

---

### REQ-BACKUP-004 — PDFs fora do backup

**Tipo:** Dados  
**Prioridade:** MVP

O backup não deve armazenar PDFs exportados.

**Critérios de aceitação:**

- PDFs exportados não fazem parte do banco.
- PDFs exportados não são exigidos no backup.
- O backup restaura a aplicação, não uma pasta de documentos exportados.

---

## 19. Requisitos de documentação

### REQ-DOCUMENTATION-001 — Rota /documentation

**Tipo:** Documentação  
**Prioridade:** Fundação

A aplicação deve ter rota `/documentation`.

**Critérios de aceitação:**

- A rota deve existir no esqueleto inicial.
- Deve ser destinada à documentação técnica interna da aplicação.
- Deve ser separada da documentação de produto do repositório.

---

### REQ-DOCUMENTATION-002 — Conteúdo técnico

**Tipo:** Documentação  
**Prioridade:** MVP

A documentação técnica da aplicação deve conter fórmulas, protocolos e boas práticas.

**Critérios de aceitação:**

- Explicar fórmulas escolhidas.
- Explicar protocolos usados.
- Incluir boas práticas de medição.
- Incluir avisos sobre limites de interpretação.
- Informar que não substitui formação profissional.

---

### REQ-DOCUMENTATION-003 — Documentos normativos

**Tipo:** Documentação  
**Prioridade:** MVP

Os documentos técnicos de anamnese e avaliações devem servir como referência normativa para implementação.

**Critérios de aceitação:**

- Anamnese geral segue `ficha-de-anamnese-geral-do-cliente.md`.
- Antropometria segue `mapa-tecnico-de-calculo-para-antropometrica.md`.
- Cineantropometria segue `mapa_tecnico_de_cálculo_para_cineantropometria(1).md`.
- O documento de requisitos não duplica integralmente tabelas e fórmulas desses arquivos.

---

## 20. Requisitos de exclusão

### REQ-DELETION-001 — Sem ativo/inativo/arquivado

**Tipo:** Funcional  
**Prioridade:** MVP

O MVP não deve ter ativo, inativo ou arquivado para clientes e profissionais.

**Critérios de aceitação:**

- Não implementar arquivamento no MVP.
- Não implementar ativação/desativação no MVP.
- Usar exclusão com confirmação forte.

---

### REQ-DELETION-002 — Confirmação forte

**Tipo:** Segurança/Responsabilidade  
**Prioridade:** MVP

Exclusões relevantes devem exigir confirmação forte.

**Critérios de aceitação:**

- Excluir cliente exige confirmação forte.
- Excluir profissional exige confirmação forte.
- Excluir instituição exige confirmação forte.
- Excluir avaliação exige confirmação forte.
- O aviso deve explicar o impacto da exclusão.

---

## 21. Itens fora do MVP

### REQ-OUT-001 — Fichas de treino fora do MVP

**Tipo:** Fora de escopo  
**Prioridade:** Futuro

Fichas de treino ficam fora do MVP.

---

### REQ-OUT-002 — Dietas fora do MVP

**Tipo:** Fora de escopo  
**Prioridade:** Futuro

Dietas ficam fora do MVP.

---

### REQ-OUT-003 — Recomendações alimentares fora do MVP

**Tipo:** Fora de escopo  
**Prioridade:** Futuro

Recomendações alimentares ficam fora do MVP.

---

### REQ-OUT-004 — Protocolos de treinamento esportivo fora do MVP

**Tipo:** Fora de escopo  
**Prioridade:** Futuro

Protocolos de treinamento esportivo ficam fora do MVP.

---

### REQ-OUT-005 — Avaliações futuras fora do MVP

**Tipo:** Fora de escopo  
**Prioridade:** Futuro

Avaliações nutricionais, posturais, cardiorrespiratórias, fisioterapêuticas e de relação de apoio ficam fora do MVP.

---

### REQ-OUT-006 — Segurança avançada fora do MVP

**Tipo:** Fora de escopo  
**Prioridade:** Futuro

Senha local e criptografia local ficam fora do MVP.

---

### REQ-OUT-007 — Sincronização e cloud fora do MVP

**Tipo:** Fora de escopo  
**Prioridade:** Futuro

Sincronização automática, backup em rede e conta conectada ficam fora do MVP.

---

### REQ-OUT-008 — PDF no banco proibido

**Tipo:** Fora de escopo  
**Prioridade:** MVP

O sistema não deve salvar PDFs exportados no banco.

Este item é uma restrição de arquitetura, não apenas adiamento.

---

### REQ-OUT-009 — Assinatura digitalizada fora do MVP

**Tipo:** Fora de escopo  
**Prioridade:** Futuro

Assinatura digitalizada fica fora do MVP. O relatório terá carimbo textual.

---

### REQ-OUT-010 — Avaliações combinadas fora do MVP

**Tipo:** Fora de escopo  
**Prioridade:** Futuro

Execução combinada ou fusão de avaliações fica fora do MVP.

---

## 22. Marcos de implementação

### REQ-MILESTONE-001 — Ordem incremental

**Tipo:** Planejamento  
**Prioridade:** Fundação

A implementação deve seguir ordem incremental:

1. HTML puro com navegação completa;
2. HTML puro com formulários;
3. banco de dados local;
4. camada local de domínio, cálculos e geração de relatórios;
5. exportação, backup e restauração;
6. CSS, responsividade e refinamentos visuais;
7. melhorias posteriores.

---

### REQ-MILESTONE-002 — Tarefas pequenas para Codex

**Tipo:** Planejamento  
**Prioridade:** Fundação

Cada marco deve ser implementado em tarefas pequenas e revisáveis.

**Critérios de aceitação:**

- Não pedir ao Codex para implementar o sistema inteiro.
- Não misturar banco, cálculos, PDF e CSS na mesma tarefa inicial.
- Cada prompt deve ter escopo pequeno.
- Cada alteração deve ser testável.

---

## 23. Resumo obrigatório do MVP

O MVP do OSSMA deve cumprir:

- PWA;
- local-first;
- offline-first;
- SvelteKit;
- TypeScript;
- pnpm;
- Paraglide;
- Dexie.js/IndexedDB como preferência inicial;
- HTML semântico puro na fase inicial;
- rotas públicas em inglês;
- interface traduzível;
- cadastro de clientes;
- cadastro de profissionais;
- cadastro de instituições;
- anamnese geral obrigatória;
- avaliações antropométrica e cineantropométrica separadas;
- `AssessmentProtocol`;
- tipo, cliente e profissional obrigatórios antes da coleta;
- estados `Draft` e `Completed`;
- salvamento progressivo;
- snapshots históricos;
- relatório HTML regenerável;
- exportação PDF sem salvar PDF no banco;
- imagens como Blob no IndexedDB;
- limite de 2MB por imagem;
- backup manual `.zip` com JSON e imagens;
- restauração substitutiva, sem merge;
- exclusões com confirmação forte;
- sem login online;
- sem backend obrigatório;
- sem sincronização automática;
- sem senha local;
- sem criptografia local;
- sem arquivamento ativo/inativo no MVP.
