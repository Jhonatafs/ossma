# Banco de Dados Local — OSSMA

## 1. Visão geral

O OSSMA usa um banco de dados local baseado em **IndexedDB**, acessado por meio da biblioteca **Dexie**.

A aplicação segue o modelo **local-first**: os dados principais ficam armazenados no dispositivo do usuário e a aplicação deve funcionar sem conexão com a internet.

No MVP, não haverá backend, login, sincronização em nuvem ou multiusuário real. A persistência será local.

O banco local deve sustentar o fluxo principal da aplicação:

```text
Cliente
→ Avaliação específica
→ Anamnese usada na avaliação
→ Dados coletados
→ Cálculos derivados
→ Relatório técnico
→ PDF
```

O backup local é uma funcionalidade separada do fluxo da avaliação. Ele pertence às configurações/armazenamento local da aplicação e será executado manualmente pelo usuário.

---

## 2. Nome do banco

```text
ossma_local_db
```

## 3. Versão inicial

```text
1
```

A versão inicial do banco deve conter somente as tabelas necessárias para iniciar o MVP.

---

## 4. Princípios do banco local

O banco de dados do OSSMA deve seguir estes princípios:

1. **Local-first**  
   Os dados pertencem ao usuário e ficam armazenados localmente no dispositivo.

2. **Offline por padrão**  
   A aplicação deve permitir cadastro, avaliação e geração de relatório sem internet.

3. **Sem backend no MVP**  
   Não haverá servidor, API remota ou autenticação centralizada na primeira versão.

4. **Dados coletados são fonte primária**  
   Em uma avaliação, a fonte da verdade são os dados coletados, respostas usadas, protocolos escolhidos, versões das fórmulas e contexto da avaliação.

5. **Cálculos são derivados**  
   Resultados como IMC, relação cintura/quadril e relação cintura/estatura devem poder ser recalculados a partir dos dados salvos.

6. **Snapshots preservam histórico**  
   Avaliações finalizadas devem preservar snapshots relevantes para que alterações futuras em clientes, profissionais, fórmulas ou classificações não alterem o histórico da avaliação.

7. **Backup manual**  
   Exportação e importação de dados serão funcionalidades manuais do sistema, não etapas obrigatórias do fluxo de avaliação.

8. **Evolução incremental**  
   O banco deve começar pequeno e crescer conforme a necessidade real do produto.

---

## 5. Convenções gerais

### IDs

Todos os registros principais devem usar ID em formato `string`, preferencialmente UUID.

Exemplo:

```ts
id: string;
```

### Datas

Datas devem ser armazenadas como string ISO 8601.

Exemplo:

```ts
createdAt: string;
updatedAt: string;
```

### Idioma do código

O código técnico deve usar inglês.

Exemplos:

```text
client
professional
assessment
createdAt
updatedAt
```

### Idioma da interface

A interface pode ter suporte a:

```text
pt-BR
en
```

### Nome de campos técnicos

Campos técnicos devem usar `camelCase`.

Exemplos:

```text
fullName
dateOfBirth
professionalId
evaluatedAt
```

### Status

Status devem ser enums em string.

Exemplos:

```text
active
archived
draft
completed
voided
```

### Exclusão de registros

Registros importantes não devem ser removidos fisicamente por padrão.

Quando fizer sentido, usar status:

```text
archived
```

A exclusão física deve ser reservada para funcionalidades explícitas de limpeza, reset local ou importação controlada.

---

## 6. Tabelas implementadas na versão 1

A versão inicial do banco deve implementar apenas quatro tabelas:

```text
professionals
clients
assessments
settings
```

As demais estruturas devem ser documentadas, mas não implementadas antes de necessidade real.

---

# 7. Tabela `professionals`

## Finalidade

Armazena os profissionais que realizam avaliações e assinam relatórios técnicos.

Um profissional pode ser um educador físico, nutricionista, fisioterapeuta ou outro profissional habilitado, mas o MVP deve focar no uso para avaliação antropométrica básica.

## Chave primária

```text
id
```

## Índices

```text
id
localIdentifier
status
createdAt
updatedAt
```

## Campos previstos

```ts
type Professional = {
	id: string;

	localIdentifier: string;

	fullName: string;
	displayName: string;

	professionName: string;
	professionalTitle: string;

	registration?: ProfessionalRegistration;

	phone?: Phone;
	email?: string;

	status: 'active' | 'archived';

	createdAt: string;
	updatedAt: string;
};
```

## Campos auxiliares

```ts
type ProfessionalRegistration = {
	organization?: string;
	number?: string;
	country?: string;
	region?: string;
	category?: string;
	showInReports: boolean;
};

type Phone = {
	countryCode: string;
	areaCode: string;
	number: string;
	clean: string;
};
```

## Observações

Dados relevantes do profissional devem ser copiados para snapshot quando uma avaliação for finalizada ou quando um relatório técnico for gerado.

Isso evita que alterações futuras no cadastro do profissional alterem relatórios antigos.

Exemplo:

```text
O profissional mudou o nome exibido ou registro profissional.
Relatórios antigos devem continuar mostrando os dados usados no momento da avaliação.
```

---

# 8. Tabela `clients`

## Finalidade

Armazena os clientes avaliados.

O cliente é a pessoa associada a avaliações, anamneses, medidas e relatórios.

## Chave primária

```text
id
```

## Índices

```text
id
fullName
status
createdAt
updatedAt
```

## Campos previstos

```ts
type Client = {
	id: string;

	fullName: string;
	dateOfBirth: string;
	biologicalSex: 'male' | 'female';

	primaryPhone: Phone;
	email?: string;

	emergencyContact?: EmergencyContact;
	legalGuardian?: LegalGuardian;

	status: 'active' | 'archived';

	createdAt: string;
	updatedAt: string;
};
```

## Campos auxiliares

```ts
type EmergencyContact = {
	fullName: string;
	relationship?: string;
	phone: Phone;
};

type LegalGuardian = {
	fullName: string;
	relationship?: string;
	phone?: Phone;
	reason?: string;
};
```

## Observações

Dados importantes do cliente devem ser copiados em snapshot na avaliação finalizada.

Isso evita que mudanças futuras no cadastro alterem a interpretação histórica da avaliação.

Exemplo:

```text
O cliente corrigiu nome, telefone ou outro dado cadastral.
A avaliação antiga deve continuar preservando os dados relevantes usados naquele momento.
```

---

# 9. Tabela `assessments`

## Finalidade

Armazena avaliações específicas realizadas para clientes.

No MVP, o foco será:

```text
basicAnthropometric
```

A avaliação é o principal agregado do domínio. Ela concentra:

```text
cliente
profissional
tipo de avaliação
respostas usadas
dados coletados
contexto de cálculo
resultados derivados
snapshot de relatório
```

## Chave primária

```text
id
```

## Índices

```text
id
clientId
professionalId
status
type
evaluatedAt
updatedAt
```

## Campos previstos

```ts
type Assessment = {
	id: string;

	type: AssessmentType;

	clientId: string;
	professionalId: string;

	status: AssessmentStatus;

	evaluatedAt: string;
	completedAt?: string;

	anamnesisSnapshot?: AssessmentAnamnesisSnapshot;
	collectedData: AssessmentCollectedData;
	calculationContext?: AssessmentCalculationContext;
	derivedResultsSnapshot?: AssessmentDerivedResultsSnapshot;
	reportSnapshot?: AssessmentReportSnapshot;

	createdAt: string;
	updatedAt: string;
};
```

## Tipos auxiliares

```ts
type AssessmentType = 'basicAnthropometric';

type AssessmentStatus = 'draft' | 'completed' | 'voided';
```

## Anamnese usada na avaliação

A avaliação pode usar perguntas vindas da ficha viva do cliente, mas deve salvar um snapshot próprio das respostas efetivamente usadas.

```ts
type AssessmentAnamnesisSnapshot = {
	generalAnamnesisId?: string;
	generalAnamnesisSchemaVersion?: number;

	selectedQuestionKeys: string[];

	answers: AssessmentAnamnesisAnswer[];

	reviewedByProfessionalId?: string;
	reviewedAt?: string;
};
```

```ts
type AssessmentAnamnesisAnswer = {
	key: string;

	labelSnapshot: string;
	value: unknown;

	source: 'generalAnamnesis' | 'assessmentOnly' | 'newAnswer';

	action:
		| 'keptExisting'
		| 'editedForAssessmentOnly'
		| 'editedAndUpdatedGeneralAnamnesis'
		| 'answeredOnlyInAssessment';

	answeredAt: string;
	answeredByProfessionalId?: string;
};
```

## Dados coletados

Os dados coletados são a fonte primária da avaliação.

Para avaliação antropométrica básica:

```ts
type AssessmentCollectedData = {
	collectionConditions?: CollectionConditions;
	measurements?: AnthropometricMeasurements;
	notes?: string;
};
```

```ts
type CollectionConditions = {
	location?: string;

	condition: 'normal' | 'hasInterferingFactor' | 'partialCollection' | 'restrictedCollection';

	usedInstruments: InstrumentType[];

	instrumentNotes?: string;
	defaultCollectionSide?: 'right' | 'left';

	notes?: string;
};
```

```ts
type InstrumentType = 'scale' | 'stadiometer' | 'measuringTape' | 'skinfoldCaliper';
```

```ts
type AnthropometricMeasurements = {
	bodyMassKg?: number;
	heightCm?: number;

	waistCircumferenceCm?: number;
	hipCircumferenceCm?: number;
	abdomenCircumferenceCm?: number;
	neckCircumferenceCm?: number;

	skinfoldsMm?: Partial<Record<SkinfoldKey, number>>;
};
```

```ts
type SkinfoldKey =
	| 'triceps'
	| 'subscapular'
	| 'biceps'
	| 'chest'
	| 'midaxillary'
	| 'suprailiac'
	| 'abdominal'
	| 'thigh'
	| 'medialCalf';
```

## Contexto de cálculo

```ts
type AssessmentCalculationContext = {
	calculationEngineVersion: string;
	protocolSetVersion?: string;

	enabledCalculations: string[];

	formulaVersions: Record<string, string>;
	classificationTableVersions?: Record<string, string>;
};
```

## Snapshot de resultados derivados

Resultados são derivados, mas podem ser salvos como snapshot ao finalizar a avaliação.

```ts
type AssessmentDerivedResultsSnapshot = {
	calculatedAt: string;

	calculationEngineVersion: string;

	inputsHash?: string;

	results: DerivedResult[];
	warnings?: CalculationWarning[];
};
```

```ts
type DerivedResult = {
	id: string;
	labelSnapshot: string;

	value: number;
	unit: string;

	formulaId: string;
	formulaVersion: string;

	inputKeys: string[];

	classification?: {
		tableId: string;
		tableVersion: string;
		label: string;
	};
};
```

```ts
type CalculationWarning = {
	code: string;
	message: string;
	severity: 'info' | 'warning' | 'critical';
};
```

## Snapshot de relatório

```ts
type AssessmentReportSnapshot = {
	reportTemplateId: string;
	reportTemplateVersion: string;

	generatedAt: string;

	clientSnapshot: ReportClientSnapshot;
	professionalSnapshot: ReportProfessionalSnapshot;

	sections?: ReportSectionSnapshot[];
};
```

## Observações

A avaliação finalizada deve preservar os dados usados naquele momento.

Alterações futuras em:

```text
cliente
profissional
anamnese geral
fórmulas
classificações
templates de relatório
```

não devem alterar o histórico da avaliação já finalizada.

---

# 10. Tabela `settings`

## Finalidade

Armazena preferências locais da aplicação.

Configurações pertencem ao sistema, não ao fluxo da avaliação.

## Chave primária

```text
id
```

## Índices

```text
id
```

## Campos previstos

```ts
type Settings = {
	id: string;

	locale: 'pt-BR' | 'en';

	dateFormat?: string;
	timeFormat?: string;

	defaultCountry?: string;
	defaultPhoneCountryCode?: string;

	lastBackupAt?: string;

	createdAt: string;
	updatedAt: string;
};
```

## ID recomendado

Como a aplicação terá provavelmente um único registro de configurações locais, pode-se usar:

```text
local-settings
```

## Observações

Configurações podem crescer no futuro para incluir:

```text
aparência
idioma
região
backup
armazenamento
preferências de relatório
status da PWA
```

No MVP, manter simples.

---

# 11. Tabelas planejadas para fases futuras

As tabelas abaixo estão documentadas para orientar a evolução do sistema, mas não devem ser implementadas na versão inicial sem necessidade real.

```text
generalAnamneses
reports
images
backupLogs
auditEvents
```

---

# 12. Tabela futura `generalAnamneses`

## Finalidade

Armazena a ficha viva do cliente.

A anamnese geral contém perguntas estáveis reutilizáveis por diferentes avaliações.

Ela não é etapa obrigatória antes de toda avaliação.

Cada avaliação deve puxar apenas as perguntas relevantes e salvar snapshot próprio das respostas usadas.

## Campos previstos

```ts
type GeneralAnamnesis = {
	id: string;
	clientId: string;

	schemaVersion: number;

	status: 'draft' | 'completed' | 'needsReview';

	answers: Record<string, GeneralAnamnesisAnswer>;

	technicalSummary?: string;

	requiresProfessionalAttention?: boolean;

	createdAt: string;
	updatedAt: string;

	lastReviewedAt?: string;
	lastReviewedByProfessionalId?: string;
};
```

```ts
type GeneralAnamnesisAnswer = {
	key: string;
	value: unknown;

	updatedAt: string;
	updatedByProfessionalId?: string;

	source: 'directGeneralAnamnesisEdit' | 'assessmentUpdate';

	lastUsedInAssessmentId?: string;
};
```

## Observação

A anamnese geral é mutável. Avaliações finalizadas não devem depender do estado atual dela para reconstruir o passado.

---

# 13. Tabela futura `reports`

## Finalidade

Armazena snapshots de relatórios técnicos gerados.

No MVP inicial, relatórios podem ser derivados diretamente da avaliação.

Uma tabela própria `reports` só deve ser criada se houver necessidade de:

```text
histórico independente de relatórios
múltiplas versões de relatório por avaliação
relatórios reemitidos
relatórios personalizados
controle de exportação
```

## Campos previstos

```ts
type Report = {
	id: string;

	assessmentId: string;
	clientId: string;
	professionalId: string;

	templateId: string;
	templateVersion: string;

	generatedAt: string;

	htmlSnapshot?: string;

	createdAt: string;
	updatedAt: string;
};
```

---

# 14. Tabela futura `images`

## Finalidade

Armazena imagens processadas usadas pela aplicação.

Exemplos:

```text
foto do cliente
foto do profissional
logo local futura
```

## Observação

Imagens devem ser separadas dos registros principais para evitar que objetos grandes prejudiquem leitura e escrita de dados comuns.

## Campos previstos

```ts
type LocalImage = {
	id: string;

	ownerType: 'client' | 'professional' | 'settings';

	ownerId: string;

	mimeType: 'image/jpeg' | 'image/png' | 'image/webp';

	sizeBytes: number;
	width: number;
	height: number;

	blob: Blob;

	createdAt: string;
	updatedAt: string;
};
```

---

# 15. Tabela futura `backupLogs`

## Finalidade

Registra exportações e importações manuais de backup.

Backup é função de sistema, não etapa da avaliação.

## Campos previstos

```ts
type BackupLog = {
	id: string;

	action: 'export' | 'import';

	status: 'success' | 'failed';

	includedImages: boolean;

	fileName?: string;
	errorMessage?: string;

	createdAt: string;
};
```

## Observação

A existência de `backupLogs` não substitui o próprio arquivo de backup. Ela apenas registra eventos locais.

---

# 16. Tabela futura `auditEvents`

## Finalidade

Registra eventos importantes do sistema.

Exemplos:

```text
avaliação finalizada
avaliação anulada
backup importado
dados locais apagados
fórmula migrada
```

## Campos previstos

```ts
type AuditEvent = {
	id: string;

	eventType: string;

	entityType?: string;
	entityId?: string;

	message: string;

	metadata?: Record<string, unknown>;

	createdAt: string;
};
```

## Observação

Não implementar auditoria completa no MVP inicial.

---

# 17. Relacionamentos lógicos

IndexedDB não impõe relacionamentos relacionais como um banco SQL tradicional, mas a aplicação deve respeitar estes vínculos lógicos:

```text
Client 1:N Assessments

Professional 1:N Assessments

Client 1:1 GeneralAnamnesis
ou
Client 1:N GeneralAnamnesis
```

A decisão entre `1:1` e `1:N` para `GeneralAnamnesis` deve ser tomada quando essa funcionalidade for implementada.

Para o MVP, a tabela `generalAnamneses` não deve ser criada ainda.

## Relação entre avaliação e relatório

```text
Assessment 1:1 ReportSnapshot
```

No MVP, o relatório pode ser salvo dentro da própria avaliação como snapshot.

Uma tabela `reports` separada só deve ser criada se surgir necessidade real.

---

# 18. Política de snapshots

Snapshots são essenciais para preservar histórico.

Ao finalizar uma avaliação, o sistema deve preservar os dados relevantes usados naquele momento.

## Dados que podem virar snapshot

```text
dados básicos do cliente
dados do profissional
respostas de anamnese usadas
dados coletados
protocolos escolhidos
versões de fórmulas
versões de classificações
resultados exibidos
template de relatório usado
```

## O que snapshots evitam

```text
cliente muda cadastro e altera avaliação antiga
profissional muda registro e altera relatório antigo
fórmula muda e altera resultado antigo sem rastreabilidade
classificação muda e altera interpretação antiga
anamnese geral muda e altera respostas antigas
```

## Regra central

```text
Avaliação finalizada deve ser historicamente estável.
```

---

# 19. Política de migração

O banco será versionado pelo Dexie.

Toda alteração estrutural futura deve aumentar a versão do banco.

Exemplo conceitual:

```ts
db.version(1).stores({
	professionals: 'id, localIdentifier, status, createdAt, updatedAt',
	clients: 'id, fullName, status, createdAt, updatedAt',
	assessments: 'id, clientId, professionalId, status, type, evaluatedAt, updatedAt',
	settings: 'id'
});

db.version(2).stores({
	professionals: 'id, localIdentifier, status, createdAt, updatedAt',
	clients: 'id, fullName, status, createdAt, updatedAt',
	assessments: 'id, clientId, professionalId, status, type, evaluatedAt, updatedAt',
	settings: 'id',
	generalAnamneses: 'id, clientId, status, updatedAt'
});
```

## Regras de migração

1. Migrations devem preservar dados existentes.
2. Mudanças destrutivas devem ser evitadas.
3. Quando uma mudança destrutiva for inevitável, ela deve ser documentada.
4. O backup manual deve ser recomendado antes de migrações relevantes.
5. Alterações em estrutura de snapshot devem preservar avaliações finalizadas.

---

# 20. Fora do escopo da versão inicial

A versão inicial do banco não deve implementar:

```text
sincronização em nuvem
autenticação
multiusuário real
criptografia avançada
backup automático
servidor
auditoria completa
relatórios em tabela própria
imagens persistidas
anamnese geral persistida em tabela própria
motor genérico de formulários
controle financeiro
mensalidades
```

Esses recursos podem ser avaliados em fases futuras.

---

# 21. Estado atual da implementação

Na versão inicial do banco, apenas as seguintes tabelas devem ser criadas no código:

```text
professionals
clients
assessments
settings
```

As demais estruturas estão documentadas para orientar evolução futura, mas não devem ser implementadas antes de necessidade real.

---

# 22. Próxima etapa técnica

Depois desta documentação, a implementação inicial deve criar apenas:

```text
src/lib/db/schema.ts
src/lib/db/db.ts
```

Com Dexie configurado para:

```text
ossma_local_db
version 1
professionals
clients
assessments
settings
```

Não criar repositórios, formulários, telas com banco ou lógica de avaliação nesta etapa.
