# 05 — Plano do Banco Local

## 1. Objetivo do Documento

Este documento define a proposta inicial de banco de dados local do OSSMA.

O objetivo é organizar a estrutura de persistência da aplicação antes da implementação com Dexie.js/IndexedDB.

Este documento não é definitivo. Ele serve como base técnica para revisão, ajustes e implementação incremental.

---

## 2. Contexto Geral da Aplicação

OSSMA é uma aplicação PWA, offline-first e local-first para profissionais desportivos e de saúde.

A aplicação será usada exclusivamente por profissionais para:

- cadastrar clientes;
- registrar anamnese geral;
- realizar avaliações presenciais;
- executar cálculos automáticos;
- gerar relatórios profissionais;
- exportar relatórios em PDF;
- fazer backup manual;
- importar backup manual;
- operar sem backend obrigatório;
- operar sem login online;
- operar sem sincronização automática.

A primeira versão deve funcionar em uma única instalação local. Cada dispositivo terá sua própria base de dados.

Exemplo:

```text
O celular do profissional possui uma base local.
O computador do mesmo profissional possui outra base local.
Os dados só serão transferidos manualmente por backup/importação.
```

---

## 3. Tecnologia Escolhida

## 3.1 IndexedDB

O banco local será baseado em IndexedDB, recurso nativo dos navegadores modernos para armazenamento estruturado no lado do cliente.

## 3.2 Dexie.js

Dexie.js será usado como camada de abstração sobre IndexedDB.

Motivos:

- simplifica operações CRUD;
- permite versionamento de schema;
- melhora a ergonomia em TypeScript;
- funciona bem com aplicações offline-first;
- evita uso direto da API IndexedDB, que é mais verbosa.

## 3.3 Nome técnico sugerido

```ts
LocalDatabase;
```

Nome do arquivo principal sugerido:

```text
src/lib/db/database.ts
```

---

## 4. Princípios do Banco Local

## 4.1 Local-first

Os dados devem ser gravados primeiro no dispositivo do usuário.

A aplicação não deve depender de servidor para funcionalidades essenciais.

## 4.2 Offline-first

O banco deve funcionar completamente sem internet.

Nenhuma operação essencial deve exigir rede.

## 4.3 Schema versionado

O banco local deve possuir versionamento desde a primeira versão.

Versão inicial proposta:

```text
1
```

## 4.4 Código em inglês técnico

Os nomes internos devem ser escritos em inglês técnico.

Exemplo:

```text
Cliente → Client
Profissional → Professional
Instituição → Institution
Avaliação → Evaluation
Anamnese → Anamnesis
```

## 4.5 Dados exportáveis

A estrutura do banco deve facilitar futura exportação e importação manual.

## 4.6 Rastreabilidade

Avaliações, cálculos e relatórios devem preservar dados suficientes para auditoria técnica futura.

## 4.7 Simplicidade no MVP

O banco deve começar simples.

Não implementar sincronização, permissões avançadas, criptografia local complexa ou histórico completo de tudo na primeira versão.

---

## 5. O Que Será Persistido Localmente

A aplicação deverá persistir:

- preferências da interface;
- estado de onboarding;
- profissionais;
- instituições;
- clientes;
- anamnese geral;
- histórico de alterações da anamnese;
- avaliações;
- resultados calculados;
- relatórios;
- snapshots de relatório;
- metadados de fórmulas/protocolos usados;
- metadados de backup;
- metadados da instalação local.

---

## 6. O Que Não Será Persistido no Marco 5

O Marco 5 deve criar apenas a fundação do banco.

Não implementar ainda:

- CRUD completo de clientes;
- CRUD completo de profissionais;
- CRUD completo de instituições;
- formulários reais de avaliação;
- relatórios reais;
- PDF;
- backup real;
- importação real;
- sincronização;
- login;
- permissões;
- criptografia avançada;
- anexos;
- imagens de avaliação;
- dados laboratoriais completos;
- banco de fórmulas completo.

O Marco 5 deve entregar:

- Dexie instalado;
- instância do banco;
- schema inicial versionado;
- stores iniciais;
- tipos base;
- utilitários simples;
- health check local;
- testes básicos.

---

# 7. Estratégia de Organização dos Arquivos

## 7.1 Estrutura sugerida

```text
src/lib/db/
  database.ts
  schema.ts
  types.ts
  ids.ts
  timestamps.ts
  health.ts
  database.test.ts
```

## 7.2 Alternativa por feature

Mais tarde, cada feature pode ter seus próprios repositórios:

```text
src/lib/features/clients/
  client-repository.ts
  client-types.ts

src/lib/features/professionals/
  professional-repository.ts
  professional-types.ts

src/lib/features/evaluations/
  evaluation-repository.ts
  evaluation-types.ts
```

## 7.3 Decisão recomendada

Começar com:

```text
src/lib/db/
```

E depois criar repositórios por feature quando as entidades reais forem implementadas.

Motivo: o Marco 5 é infraestrutura, não domínio completo.

---

# 8. Convenções Técnicas

## 8.1 IDs

Todos os registros principais devem usar IDs locais estáveis.

Tipo recomendado:

```ts
type EntityId = string;
```

Formato recomendado:

```ts
crypto.randomUUID();
```

Entidades principais com ID:

- Professional;
- Institution;
- Client;
- Anamnesis;
- AnamnesisHistoryEntry;
- Evaluation;
- Report;
- ReportSnapshot;
- BackupMetadata;
- LocalInstallation.

## 8.2 Datas

Datas técnicas devem ser salvas como string ISO 8601 em UTC.

Campos técnicos:

```ts
createdAt: string;
updatedAt: string;
deletedAt?: string;
```

Exemplo:

```ts
new Date().toISOString();
```

## 8.3 Soft delete

Para o MVP, a decisão ainda pode ser adiada.

Opções:

### Exclusão física

Remove o registro do banco.

Vantagem:

- simples.

Desvantagem:

- reduz possibilidade de recuperação.

### Soft delete

Marca o registro como excluído.

Exemplo:

```ts
deletedAt?: string;
```

Vantagem:

- permite recuperação futura;
- preserva histórico.

Desvantagem:

- exige filtros em todas as consultas.

## 8.4 Decisão recomendada

Para entidades críticas, usar soft delete futuramente.

No Marco 5, apenas preparar tipos com `deletedAt?: string`, sem implementar regras completas.

## 8.5 Unidades de medida

Dados quantitativos devem guardar unidade quando houver risco de ambiguidade.

Exemplo:

```ts
{
  value: 72,
  unit: 'kg'
}
```

## 8.6 Dados brutos e derivados

Avaliações devem separar:

```ts
rawData;
computedResults;
professionalInterpretation;
```

Dados brutos não devem ser sobrescritos por resultados calculados.

## 8.7 Snapshots

Relatórios devem guardar cópia dos dados relevantes no momento da emissão.

Isso impede que alterações futuras em cliente, profissional ou instituição modifiquem relatórios já emitidos.

---

# 9. Stores/Tabelas Propostas

## 9.1 Lista geral

Stores propostas para a estrutura final:

```text
appMetadata
interfacePreferences
onboardingState
localInstallations
professionals
institutions
professionalInstitutionLinks
clients
anamneses
anamnesisHistory
evaluations
computedResults
reports
reportSnapshots
backupMetadata
protocols
formulas
scientificReferences
```

## 9.2 Stores do Marco 5

No Marco 5, criar apenas as stores iniciais, mesmo que vazias:

```text
appMetadata
professionals
institutions
clients
anamneses
anamnesisHistory
evaluations
reports
reportSnapshots
backupMetadata
```

Preferências de interface e onboarding já estão em `localStorage` neste momento.

Decisão futura:

- manter preferências simples em `localStorage`; ou
- migrar preferências para IndexedDB;
- manter ambos, com IndexedDB para dados de domínio e localStorage para preferências leves.

Recomendação atual:

```text
Preferências leves continuam em localStorage.
Dados de domínio ficam em IndexedDB/Dexie.
```

---

# 10. Modelos Base

## 10.1 BaseEntity

Modelo base para entidades persistentes.

```ts
export type EntityId = string;

export interface BaseEntity {
	id: EntityId;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;
}
```

## 10.2 AuditableEntity

Pode ser usado futuramente para entidades que precisam registrar autoria.

```ts
export interface AuditableEntity extends BaseEntity {
	createdByProfessionalId?: EntityId;
	updatedByProfessionalId?: EntityId;
}
```

## 10.3 MeasurementValue

```ts
export interface MeasurementValue {
	value: number;
	unit: string;
}
```

## 10.4 LocalizedText

Pode ser usado em templates, protocolos e fórmulas futuramente.

```ts
export interface LocalizedText {
	en: string;
	'pt-BR': string;
}
```

---

# 11. App Metadata

## 11.1 Objetivo

Guardar informações técnicas sobre a base local.

## 11.2 Store

```text
appMetadata
```

## 11.3 Modelo sugerido

```ts
export interface AppMetadata extends BaseEntity {
	key: string;
	value: unknown;
}
```

## 11.4 Dados possíveis

- versão do banco;
- data de criação da base local;
- data da última migração;
- versão da aplicação que criou a base;
- observações técnicas.

## 11.5 Índices sugeridos

```text
key
```

---

# 12. Local Installation

## 12.1 Objetivo

Representar uma instalação local da aplicação.

Cada dispositivo ou navegador pode ter uma instalação própria.

## 12.2 Store

```text
localInstallations
```

## 12.3 Modelo sugerido

```ts
export interface LocalInstallation extends BaseEntity {
	installationId: EntityId;
	appVersion: string;
	databaseVersion: number;
	createdOnDeviceLabel?: string;
	notes?: string;
}
```

## 12.4 Observação

Essa store pode ser adiada para depois. Para o Marco 5, `appMetadata` pode cumprir função semelhante de forma mais simples.

---

# 13. Profissionais

## 13.1 Objetivo

Guardar os profissionais que usam a aplicação e assinam avaliações/relatórios.

## 13.2 Store

```text
professionals
```

## 13.3 Modelo sugerido

```ts
export interface Professional extends BaseEntity {
	fullName: string;
	displayName?: string;
	profession?: string;
	education?: string;
	specialty?: string;
	professionalRegistry?: string;
	phone?: string;
	email?: string;
	address?: string;
	logoUri?: string;
	signatureUri?: string;
	notes?: string;
	isActive?: boolean;
}
```

## 13.4 Índices sugeridos

```text
id
fullName
isActive
createdAt
updatedAt
```

## 13.5 Observações

O profissional ativo pode ser salvo em preferências locais.

Relatórios devem usar snapshot do profissional, não referência dinâmica.

---

# 14. Instituições

## 14.1 Objetivo

Guardar academias, clínicas, consultórios, hospitais, equipes ou outros estabelecimentos.

## 14.2 Store

```text
institutions
```

## 14.3 Modelo sugerido

```ts
export interface Institution extends BaseEntity {
	name: string;
	tradeName?: string;
	document?: string;
	phone?: string;
	email?: string;
	address?: string;
	logoUri?: string;
	footerText?: string;
	notes?: string;
	isActive?: boolean;
}
```

## 14.4 Índices sugeridos

```text
id
name
tradeName
isActive
createdAt
updatedAt
```

## 14.5 Observações

A instituição é opcional para uso autônomo.

Relatórios devem usar snapshot da instituição, quando houver.

---

# 15. Vínculo Profissional-Instituição

## 15.1 Objetivo

Representar relação entre profissionais e instituições.

Um profissional pode atuar em mais de uma instituição.

Uma instituição pode ter vários profissionais.

## 15.2 Store

```text
professionalInstitutionLinks
```

## 15.3 Modelo sugerido

```ts
export interface ProfessionalInstitutionLink extends BaseEntity {
	professionalId: EntityId;
	institutionId: EntityId;
	role?: string;
	isDefault?: boolean;
}
```

## 15.4 Índices sugeridos

```text
professionalId
institutionId
[professionalId+institutionId]
isDefault
```

## 15.5 Observação

Esta store pode ser adiada para o Marco 6.

No MVP inicial, é possível guardar apenas `institutionId` opcional no profissional ou selecionar instituição ativa separadamente.

---

# 16. Clientes

## 16.1 Objetivo

Guardar pessoas avaliadas pelo profissional.

## 16.2 Store

```text
clients
```

## 16.3 Modelo sugerido

```ts
export type BiologicalSex = 'female' | 'male' | 'other' | 'notInformed';

export interface Client extends BaseEntity {
	fullName: string;
	preferredName?: string;
	birthDate?: string;
	biologicalSex?: BiologicalSex;
	phone?: string;
	email?: string;
	document?: string;
	address?: string;
	occupation?: string;
	legalGuardian?: LegalGuardian;
	notes?: string;
}

export interface LegalGuardian {
	fullName: string;
	relationship?: string;
	phone?: string;
	document?: string;
	notes?: string;
}
```

## 16.4 Índices sugeridos

```text
id
fullName
birthDate
createdAt
updatedAt
```

## 16.5 Observações

Dados variáveis, como peso e perímetros, não devem ficar no perfil do cliente.

Esses dados pertencem às avaliações.

---

# 17. Anamnese Geral

## 17.1 Objetivo

Guardar informações gerais, relativamente persistentes, sobre histórico, hábitos, objetivos e restrições do cliente.

Cada cliente deve ter no máximo uma anamnese geral ativa.

## 17.2 Store

```text
anamneses
```

## 17.3 Modelo sugerido

```ts
export interface Anamnesis extends BaseEntity {
	clientId: EntityId;
	chiefComplaint?: string;
	healthHistory?: string;
	injuryHistory?: string;
	surgeryHistory?: string;
	medicationHistory?: string;
	familyHistory?: string;
	lifestyleHabits?: string;
	physicalActivityHistory?: string;
	dietaryNotes?: string;
	sleepNotes?: string;
	occupationalNotes?: string;
	goals?: string;
	restrictions?: string;
	generalNotes?: string;
}
```

## 17.4 Índices sugeridos

```text
id
clientId
updatedAt
```

## 17.5 Regra importante

A anamnese geral pertence ao cliente.

Ela pode ser editada, mas não deve ser excluída isoladamente.

Para excluir a anamnese geral, o cliente deve ser excluído.

---

# 18. Histórico da Anamnese

## 18.1 Objetivo

Guardar histórico das últimas alterações importantes da anamnese geral.

## 18.2 Store

```text
anamnesisHistory
```

## 18.3 Modelo sugerido

```ts
export interface AnamnesisHistoryEntry extends BaseEntity {
	anamnesisId: EntityId;
	clientId: EntityId;
	changedByProfessionalId?: EntityId;
	changedAt: string;
	changeReason?: string;
	snapshot: Partial<Anamnesis>;
}
```

## 18.4 Índices sugeridos

```text
anamnesisId
clientId
changedAt
```

## 18.5 Limite sugerido

Guardar as últimas X alterações.

Valor inicial sugerido:

```text
10
```

Esse valor pode virar preferência futura.

---

# 19. Avaliações

## 19.1 Objetivo

Guardar registros de avaliações presenciais realizadas em clientes.

Cada avaliação deve pertencer a um cliente e ter profissional responsável.

## 19.2 Store

```text
evaluations
```

## 19.3 Tipos de avaliação

```ts
export type EvaluationType = 'postural' | 'anthropometric' | 'nutritional' | 'kinanthropometric';
```

## 19.4 Status da avaliação

```ts
export type EvaluationStatus = 'draft' | 'completed' | 'issued' | 'archived';
```

## 19.5 Modelo sugerido

```ts
export interface Evaluation extends BaseEntity {
	clientId: EntityId;
	professionalId: EntityId;
	institutionId?: EntityId;
	type: EvaluationType;
	status: EvaluationStatus;
	evaluationDate: string;
	rawData: unknown;
	computedResults?: ComputedResult[];
	professionalInterpretation?: string;
	recommendations?: string;
	notes?: string;
}
```

## 19.6 Índices sugeridos

```text
id
clientId
professionalId
institutionId
type
status
evaluationDate
createdAt
updatedAt
[clientId+type]
[clientId+evaluationDate]
```

## 19.7 Observações

O campo `rawData` pode começar como `unknown` ou tipo genérico no Marco 5.

Nos marcos específicos, cada tipo de avaliação poderá ter seu próprio schema de dados.

Exemplo futuro:

```ts
export interface AnthropometricRawData {
	bodyMassKg?: number;
	statureCm?: number;
	armSpanCm?: number;
	waistGirthCm?: number;
}
```

---

# 20. Resultados Calculados

## 20.1 Objetivo

Guardar resultados automáticos gerados por fórmulas.

## 20.2 Estratégia

Existem duas opções.

### Opção A — Dentro da avaliação

```ts
computedResults?: ComputedResult[];
```

Vantagem:

- mais simples;
- fácil de carregar junto com a avaliação.

Desvantagem:

- consultas por cálculo ficam mais difíceis.

### Opção B — Store separada

```text
computedResults
```

Vantagem:

- melhor para buscas, histórico e comparação.

Desvantagem:

- mais complexidade.

## 20.3 Decisão recomendada

Para o MVP, armazenar `computedResults` dentro da avaliação.

Criar store separada apenas se houver necessidade real futura.

## 20.4 Modelo sugerido

```ts
export interface ComputedResult {
	id: EntityId;
	key: string;
	label: string;
	value: number | string | boolean | null;
	unit?: string;
	formulaId?: string;
	formulaVersion?: string;
	protocolId?: string;
	protocolVersion?: string;
	inputs?: Record<string, unknown>;
	warnings?: string[];
	computedAt: string;
}
```

---

# 21. Relatórios

## 21.1 Objetivo

Guardar metadados de relatórios gerados a partir de avaliações.

## 21.2 Store

```text
reports
```

## 21.3 Modelo sugerido

```ts
export interface Report extends BaseEntity {
	evaluationId: EntityId;
	clientId: EntityId;
	professionalId: EntityId;
	institutionId?: EntityId;
	reportType: EvaluationType;
	issueDate: string;
	title?: string;
	technicalDisclaimer: string;
	snapshotId?: EntityId;
	pdfUri?: string;
	notes?: string;
}
```

## 21.4 Índices sugeridos

```text
id
evaluationId
clientId
professionalId
institutionId
reportType
issueDate
createdAt
```

## 21.5 Observações

O PDF pode não ser armazenado no banco inicialmente.

A aplicação pode gerar o PDF sob demanda a partir do snapshot.

---

# 22. Snapshots de Relatório

## 22.1 Objetivo

Guardar cópia dos dados relevantes no momento da emissão do relatório.

## 22.2 Store

```text
reportSnapshots
```

## 22.3 Modelo sugerido

```ts
export interface ReportSnapshot extends BaseEntity {
	reportId: EntityId;
	evaluationId: EntityId;
	clientData: unknown;
	professionalData: unknown;
	institutionData?: unknown;
	rawData: unknown;
	computedResults?: ComputedResult[];
	professionalInterpretation?: string;
	recommendations?: string;
	protocolVersions?: Record<string, string>;
	appVersion: string;
}
```

## 22.4 Índices sugeridos

```text
id
reportId
evaluationId
createdAt
```

## 22.5 Observações

Relatórios antigos devem ser preservados mesmo que o cliente, profissional ou instituição sejam editados depois.

---

# 23. Backup Metadata

## 23.1 Objetivo

Guardar metadados sobre backups exportados ou importados.

## 23.2 Store

```text
backupMetadata
```

## 23.3 Modelo sugerido

```ts
export type BackupOperation = 'export' | 'import';

export interface BackupMetadata extends BaseEntity {
	operation: BackupOperation;
	fileName?: string;
	formatVersion: string;
	appVersion: string;
	databaseVersion: number;
	performedAt: string;
	notes?: string;
}
```

## 23.4 Índices sugeridos

```text
operation
performedAt
createdAt
```

## 23.5 Observação

Backup real será implementado depois do banco e das primeiras entidades de domínio.

---

# 24. Protocolos, Fórmulas e Referências Científicas

## 24.1 Objetivo

Guardar metadados sobre fórmulas, protocolos e referências científicas usados em cálculos.

## 24.2 Estratégia inicial

No MVP, fórmulas podem começar como código puro versionado, sem store no banco.

Exemplo:

```text
src/lib/features/calculations/
```

Mas os resultados calculados devem registrar:

- fórmula usada;
- versão da fórmula;
- protocolo usado;
- versão do protocolo;
- entradas utilizadas.

## 24.3 Stores futuras

```text
protocols
formulas
scientificReferences
```

## 24.4 Modelo futuro de Formula

```ts
export interface Formula extends BaseEntity {
	key: string;
	name: string;
	version: string;
	expression?: string;
	targetPopulation?: string;
	limitations?: string[];
	referenceIds?: EntityId[];
}
```

## 24.5 Decisão recomendada

Não criar stores de fórmulas no Marco 5.

Apenas garantir que `ComputedResult` tenha rastreabilidade.

---

# 25. Estratégia Inicial de Schema Dexie

## 25.1 Schema versão 1 sugerido

```ts
this.version(1).stores({
	appMetadata: 'id, key',
	professionals: 'id, fullName, isActive, createdAt, updatedAt',
	institutions: 'id, name, tradeName, isActive, createdAt, updatedAt',
	clients: 'id, fullName, birthDate, createdAt, updatedAt',
	anamneses: 'id, clientId, updatedAt',
	anamnesisHistory: 'id, anamnesisId, clientId, changedAt',
	evaluations:
		'id, clientId, professionalId, institutionId, type, status, evaluationDate, createdAt, updatedAt, [clientId+type], [clientId+evaluationDate]',
	reports:
		'id, evaluationId, clientId, professionalId, institutionId, reportType, issueDate, createdAt',
	reportSnapshots: 'id, reportId, evaluationId, createdAt',
	backupMetadata: 'id, operation, performedAt, createdAt'
});
```

## 25.2 Observação sobre índices compostos

Índices compostos devem ser usados com moderação.

Criar apenas os que serão úteis para consultas reais.

---

# 26. Consultas Principais Esperadas

## 26.1 Clientes

- listar clientes por nome;
- abrir cliente por ID;
- buscar cliente por nome;
- listar avaliações de um cliente;
- abrir anamnese de um cliente.

## 26.2 Avaliações

- listar avaliações por cliente;
- listar avaliações por tipo;
- listar histórico de avaliações de um cliente;
- abrir avaliação específica;
- filtrar avaliações por status;
- comparar avaliações do mesmo tipo.

## 26.3 Relatórios

- abrir relatório por avaliação;
- listar relatórios de um cliente;
- abrir snapshot de relatório;
- exportar PDF novamente a partir de snapshot.

## 26.4 Profissionais e Instituições

- listar profissionais;
- selecionar profissional ativo;
- listar instituições;
- selecionar instituição ativa;
- vincular avaliação ao profissional e instituição ativa.

---

# 27. Integridade Referencial

IndexedDB/Dexie não impõe chaves estrangeiras automaticamente como bancos relacionais.

A aplicação deve controlar integridade em código.

Exemplos:

- uma avaliação não deve ser criada sem cliente;
- uma avaliação não deve ser concluída sem profissional responsável;
- uma anamnese deve pertencer a um cliente existente;
- um relatório deve pertencer a uma avaliação existente;
- snapshot deve pertencer a um relatório existente.

## 27.1 Estratégia recomendada

Criar validações nos repositórios ou services de cada feature.

Não confiar apenas no banco.

---

# 28. Exclusão de Dados

## 28.1 Cliente

Ao excluir um cliente, a aplicação deve informar que isso afeta:

- anamnese;
- histórico da anamnese;
- avaliações;
- relatórios;
- snapshots.

## 28.2 Estratégia inicial recomendada

No MVP, preferir soft delete para clientes e avaliações.

Assim, dados históricos podem ser preservados e exportados futuramente.

## 28.3 Relatórios emitidos

Relatórios emitidos devem ser preservados quando possível.

Mesmo que o cliente seja editado posteriormente, snapshots continuam guardando os dados da época.

---

# 29. Backup e Importação

## 29.1 Estratégia futura

O backup deve exportar:

- versão do formato;
- versão da aplicação;
- versão do banco;
- data de exportação;
- dados das stores;
- metadados.

## 29.2 Formato inicial sugerido

```json
{
	"formatVersion": "1.0.0",
	"appVersion": "0.0.1",
	"databaseVersion": 1,
	"exportedAt": "2026-01-01T00:00:00.000Z",
	"stores": {
		"clients": [],
		"professionals": [],
		"institutions": [],
		"evaluations": []
	}
}
```

## 29.3 Estratégia de importação inicial

No primeiro MVP com backup real, usar estratégia simples:

```text
Importação substitui a base atual após confirmação explícita.
```

Mesclagem pode ficar para versão futura.

---

# 30. Segurança e Privacidade

## 30.1 Responsabilidade local

Os dados ficam no dispositivo do usuário.

O usuário é responsável por proteger o dispositivo, navegador, sistema operacional e arquivos de backup.

## 30.2 Dados sensíveis

A aplicação armazenará dados pessoais, corporais, históricos e possivelmente clínicos.

Mesmo sem backend, o cuidado com privacidade deve ser explícito na interface e documentação.

## 30.3 Criptografia

Criptografia local avançada não faz parte do MVP.

Pode ser avaliada futuramente.

## 30.4 Login local

Login local ou senha de acesso não faz parte da primeira versão.

---

# 31. Relação com Preferências Existentes

Atualmente, algumas preferências já são persistidas fora do banco local principal:

- idioma;
- tema;
- exibição do menu;
- estado de onboarding.

Essas preferências usam `localStorage`.

## 31.1 Decisão recomendada

Manter essas preferências em `localStorage` por enquanto.

Motivo:

- são leves;
- são necessárias antes do banco de domínio;
- são preferências da interface, não dados principais do cliente.

No futuro, se necessário, podem ser migradas para IndexedDB.

---

# 32. Plano do Marco 5

## 32.1 Objetivo

Implementar a fundação técnica do banco local com Dexie.

## 32.2 Entregáveis

- instalar Dexie;
- criar `src/lib/db/database.ts`;
- criar `src/lib/db/types.ts`;
- criar `src/lib/db/ids.ts`;
- criar `src/lib/db/timestamps.ts`;
- criar `src/lib/db/health.ts`;
- configurar schema versão 1;
- criar stores iniciais;
- criar teste básico de geração de IDs;
- criar teste básico de normalização de timestamps, se aplicável;
- criar teste básico de health check, se aplicável;
- garantir que build continua funcionando;
- documentar uso básico.

## 32.3 Fora do escopo do Marco 5

- telas de CRUD;
- formulários reais;
- persistência real de profissionais;
- persistência real de clientes;
- backup real;
- importação real;
- avaliações reais;
- relatórios reais;
- PDF;
- sincronização.

---

# 33. Critérios de Pronto do Marco 5

O Marco 5 será considerado concluído quando:

- Dexie estiver instalado;
- banco local estiver configurado;
- schema versão 1 existir;
- stores iniciais existirem;
- tipos base existirem;
- utilitários de ID e timestamp existirem;
- health check local existir;
- testes passarem;
- `pnpm run format` passar;
- `pnpm run lint` passar;
- `pnpm run test` passar;
- `pnpm run check` passar;
- `pnpm run build` passar;
- aplicação continuar instalável/offline após build.

---

# 34. Riscos Técnicos

## 34.1 Schema mal planejado

Risco:

- precisar migrar dados cedo demais.

Mitigação:

- começar simples;
- versionar schema desde o início;
- evitar modelagem excessivamente rígida para avaliações.

## 34.2 Uso excessivo de `unknown`

Risco:

- perder segurança de tipos.

Mitigação:

- aceitar `unknown` no Marco 5 para infraestrutura;
- substituir por schemas específicos nos marcos de avaliações.

## 34.3 Backup difícil

Risco:

- estrutura fragmentada dificultar exportação.

Mitigação:

- manter stores principais claras;
- registrar metadados;
- criar formato de backup antes da exportação real.

## 34.4 Relatórios alterados por dados futuros

Risco:

- relatório antigo mudar quando cliente/profissional for editado.

Mitigação:

- usar `ReportSnapshot`.

---

# 35. Próximo Documento Recomendado

Após este documento, recomenda-se criar:

```text
06-data-model.md
```

Esse documento deve detalhar os modelos TypeScript esperados para as entidades principais e pode servir como base direta para implementação.

---

# 36. Resumo Executivo

O banco local do OSSMA deve ser simples, versionado e preparado para evolução.

A primeira implementação não deve tentar resolver todos os módulos da aplicação.

O foco inicial é criar uma fundação segura para armazenar dados locais de domínio.

Ordem recomendada:

```text
Marco 5 — Banco local com Dexie
Marco 6 — Perfil profissional e instituição reais
Marco 7 — Clientes e anamnese geral
Marco 8 — Motor genérico de avaliações
Marco 9 — Avaliação antropométrica básica
```

A modelagem deve favorecer:

- funcionamento offline;
- rastreabilidade;
- exportação futura;
- relatórios com snapshot;
- evolução incremental;
- simplicidade suficiente para um desenvolvedor individual manter o projeto.
