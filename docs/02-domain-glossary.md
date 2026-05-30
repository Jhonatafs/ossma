# Glossário de Domínio

**Projeto:** OSSMA — Open Source Sport Management Application  
**Documento:** 02  
**Status:** versão inicial consolidada  
**Idioma da documentação:** português brasileiro  
**Idioma de nomes técnicos:** inglês técnico

**Autoria e curadoria do projeto:** JhonFs / Jhonata Sande  
**Redação inicial:** GPT-5.5

---

## 1. Finalidade deste documento

Este documento define os principais termos de domínio do OSSMA.

O objetivo é reduzir ambiguidade, evitar fadiga de contexto, facilitar contribuição open source e proteger a coerência técnica do projeto ao longo do desenvolvimento.

Este glossário deve ser usado como referência para:

- documentação técnica;
- requisitos;
- prompts para Codex;
- nomes de módulos;
- nomes de entidades;
- fluxos de usuário;
- textos de interface;
- estrutura de dados;
- relatórios;
- decisões de arquitetura.

Sempre que houver conflito entre um termo genérico e um termo específico, o termo específico deve ser preferido.

Exemplo:

- preferir `ProfessionalProfile` a “usuário profissional”;
- preferir `InstitutionProfile` a “usuário instituição”;
- preferir `LocalInstallation` a “conta local”;
- preferir `Client` a “aluno”, “paciente” ou “avaliado” no domínio base.

---

## 2. Regras gerais de nomenclatura

### 2.1. Idioma técnico

Nomes técnicos, módulos, entidades, variáveis, funções, tipos e comentários de código devem usar inglês técnico claro.

Exemplos:

- `Client`
- `ProfessionalProfile`
- `InstitutionProfile`
- `Assessment`
- `AssessmentProtocol`
- `GeneralAnamnesis`
- `AssessmentDraft`
- `CanonicalUnit`
- `LocalBackup`

### 2.2. Interface traduzida

A interface será traduzida com Paraglide.

O texto apresentado ao usuário pode aparecer em português brasileiro, inglês ou outros idiomas futuros, mas os nomes técnicos internos permanecem em inglês.

Exemplo:

| Conceito técnico      | Interface pt-BR | Interface en |
| --------------------- | --------------- | ------------ |
| `Client`              | Cliente         | Client       |
| `ProfessionalProfile` | Profissional    | Professional |
| `InstitutionProfile`  | Instituição     | Institution  |
| `Assessment`          | Avaliação       | Assessment   |
| `Backup`              | Backup          | Backup       |

### 2.3. Rotas públicas

As rotas públicas da aplicação devem ser sempre em inglês.

Exemplos:

- `/`
- `/onboarding`
- `/clients`
- `/clients/new`
- `/clients/[id]`
- `/professionals`
- `/professionals/new`
- `/professionals/[id]`
- `/institutions`
- `/institutions/new`
- `/institutions/[id]`
- `/evaluations`
- `/evaluations/new`
- `/evaluations/[id]`
- `/settings`
- `/backup`
- `/help`
- `/documentation`

### 2.4. PascalCase

O padrão PascalCase vale para nomes técnicos de módulos, tipos, entidades e conceitos internos, não para rotas.

Exemplos corretos:

- `ClientManagement`
- `ProfessionalProfiles`
- `InstitutionProfiles`
- `AssessmentProtocols`
- `TechnicalDocumentation`

Exemplos de rotas corretas:

- `/clients`
- `/professionals`
- `/institutions`
- `/evaluations`
- `/documentation`

Evitar rotas em PascalCase.

---

## 3. Termos centrais do produto

## OSSMA

**Nome completo:** Open Source Sport Management Application.

O OSSMA é uma aplicação open source, gratuita, local-first e offline-first para profissionais de esporte, saúde e áreas relacionadas.

Seu foco inicial é permitir cadastro de clientes, anamnese, avaliações, geração de relatórios e exportação em PDF, sem depender de backend obrigatório ou login online no MVP.

---

## User

Pessoa que usa a aplicação.

O termo “usuário” deve ser usado apenas em sentido genérico, para indicar a pessoa que interage com o sistema.

No modelo de domínio, evitar usar `User` como entidade principal quando houver termo mais claro.

Preferir:

- `ProfessionalProfile`, quando o assunto for a pessoa que realiza avaliações;
- `InstitutionProfile`, quando o assunto for uma clínica, academia ou organização;
- `Client`, quando o assunto for a pessoa avaliada;
- `LocalInstallation`, quando o assunto for a instalação local da aplicação.

---

## Client

Pessoa avaliada, acompanhada ou cadastrada no sistema.

O cliente pode ter:

- dados cadastrais;
- foto;
- anamnese geral;
- avaliações;
- histórico de avaliações;
- relatórios exportáveis.

No MVP, o cliente não é vinculado diretamente a profissional ou instituição.

O vínculo histórico acontece por meio da avaliação.

---

## ProfessionalProfile

Perfil do profissional que realiza avaliações.

O `ProfessionalProfile` existe para identificar tecnicamente quem realizou uma avaliação e para fornecer dados ao carimbo técnico do relatório.

Uma avaliação deve ter exatamente um profissional responsável.

Um profissional pode estar vinculado a no máximo uma instituição.

Um profissional pode existir sem instituição vinculada.

Exemplos de dados possíveis:

- nome completo;
- nome profissional;
- profissão;
- registro profissional, se houver;
- telefone;
- e-mail;
- endereço profissional, se aplicável;
- logo ou imagem permitida no MVP;
- instituição vinculada, se houver.

---

## InstitutionProfile

Perfil de uma instituição, como academia, clínica, hospital, consultório, equipe ou organização.

A instituição tem finalidade principalmente institucional, visual e de identificação no relatório.

No MVP, a instituição não representa sistema de permissões, equipe, login ou controle de acesso.

Uma instituição pode existir sem profissional vinculado.

Uma instituição pode ter vários profissionais vinculados a ela, pois cada profissional pode apontar para uma instituição.

Quando o profissional responsável por uma avaliação estiver vinculado a uma instituição, os dados institucionais devem aparecer no cabeçalho do relatório por meio do snapshot salvo na avaliação.

---

## LocalInstallation

Instalação local da aplicação em um dispositivo, navegador ou ambiente PWA.

O `LocalInstallation` representa o contexto local onde os dados ficam armazenados.

No MVP:

- não há backend obrigatório;
- não há login online obrigatório;
- não há sincronização automática;
- não há senha local;
- não há criptografia local;
- o backup é manual;
- a segurança do dispositivo é responsabilidade do usuário.

Uma instalação local pode conter:

- um profissional autônomo;
- vários profissionais de uma clínica;
- uma ou mais instituições;
- vários clientes;
- várias avaliações.

---

## 4. Termos de avaliação

## Assessment

Avaliação realizada para um cliente por um profissional.

A avaliação é o centro histórico do sistema.

Uma avaliação deve registrar:

- tipo de avaliação;
- cliente avaliado;
- profissional responsável;
- instituição vinculada ao profissional, se houver;
- snapshot do cliente;
- snapshot do profissional;
- snapshot da instituição, se houver;
- dados coletados;
- protocolos escolhidos;
- respostas de anamnese usadas;
- confirmações de ciência/veracidade;
- resultados calculáveis;
- observações;
- metadados;
- estado da avaliação.

Antes de iniciar a coleta de dados, uma avaliação deve ter:

- tipo de avaliação;
- cliente;
- profissional avaliador.

Depois disso, pode existir como rascunho incompleto e salvar progresso automaticamente.

---

## AssessmentType

Tipo de avaliação disponível na aplicação.

No MVP, os tipos iniciais são:

- avaliação antropométrica;
- avaliação cineantropométrica.

Tipos futuros podem incluir:

- avaliação nutricional;
- avaliação postural;
- avaliação cardiorrespiratória;
- avaliação fisioterapêutica;
- avaliação de relação de apoio;
- outras avaliações futuras.

Os tipos de avaliação devem ser organizados por método estável, como categoria e ordem alfabética.

---

## AssessmentProtocol

Protocolo usado dentro de uma avaliação.

Um `AssessmentProtocol` define, conforme o tipo de avaliação:

- campos obrigatórios;
- campos opcionais;
- campos condicionais;
- medidas exigidas;
- fórmulas;
- regras de cálculo;
- partes do relatório;
- limitações de uso;
- metadados técnicos necessários.

Exemplo:

Dentro de uma avaliação antropométrica, o usuário pode escolher um protocolo como Jackson-Pollock 3 dobras ou Jackson-Pollock 7 dobras, quando aplicável.

O protocolo escolhido determina quais dados precisam ser coletados e quais cálculos podem ser gerados.

---

## AnthropometricAssessment

Avaliação antropométrica.

É um tipo de avaliação com dados, protocolos, cálculos e relatório próprios.

Pode envolver, conforme o protocolo:

- massa corporal;
- estatura;
- perímetros;
- dobras cutâneas;
- diâmetros;
- índices de triagem;
- composição corporal;
- cálculos energéticos;
- evolução de medidas;
- observações técnicas.

A avaliação antropométrica é separada da avaliação cineantropométrica.

---

## KinanthropometricAssessment

Avaliação cineantropométrica.

É um tipo de avaliação próprio, com dados, protocolos, cálculos e relatório próprios.

Pode envolver, conforme o protocolo:

- composição corporal;
- somatotipo;
- proporcionalidade;
- perímetros;
- dobras cutâneas;
- diâmetros ósseos;
- comprimentos segmentares;
- índices corporais;
- perfil esportivo;
- comparações de referência;
- cálculos energéticos.

A cineantropometria pode exigir maior complexidade técnica que a avaliação antropométrica simples.

---

## CombinedAssessment

Avaliação combinada.

Ideia futura em que múltiplos tipos de avaliação poderiam ser executados em conjunto, usando uma única coleta de dados ou uma sequência integrada.

Fora do MVP.

No MVP, avaliações antropométrica e cineantropométrica são separadas.

---

## AssessmentDraft

Rascunho de avaliação.

Estado de uma avaliação iniciada após a definição mínima de:

- tipo de avaliação;
- cliente;
- profissional avaliador.

O rascunho pode estar incompleto.

Deve salvar progressivamente os dados preenchidos para proteger contra queda de energia, fechamento do navegador, travamento do dispositivo ou interrupção do atendimento.

---

## CompletedAssessment

Avaliação finalizada.

Estado de uma avaliação que teve sua coleta concluída, dados revisados e confirmações registradas.

A avaliação finalizada deve ter dados suficientes para regenerar o relatório HTML e permitir exportação em PDF.

---

## 5. Termos de anamnese

## GeneralAnamnesis

Anamnese geral do cliente.

É obrigatória no cadastro do cliente.

Reúne informações gerais sobre saúde, hábitos, objetivos, restrições e histórico relevante.

Pode incluir:

- identificação básica;
- consentimento;
- objetivo principal;
- saúde geral;
- sinais de alerta;
- medicamentos;
- alergias;
- restrições;
- dor;
- lesões;
- limitações;
- histórico familiar;
- hábitos;
- atividade física;
- sono;
- alimentação;
- saúde feminina/reprodutiva, quando aplicável;
- resumo técnico automático.

A anamnese geral serve como base reutilizável para avaliações específicas.

---

## AssessmentAnamnesis

Anamnese específica de uma avaliação.

Cada tipo de avaliação pode exigir dados próprios de anamnese.

A anamnese específica pode:

- reutilizar respostas da anamnese geral;
- exibir respostas existentes;
- coletar respostas específicas da avaliação;
- salvar o snapshot das respostas usadas;
- solicitar atualização da anamnese geral quando uma resposta reaproveitada for alterada.

Quando uma avaliação puxar uma resposta da anamnese geral, a resposta deve apenas aparecer.

Se o usuário alterar essa resposta durante a avaliação, o sistema deve perguntar se deseja atualizar também a anamnese geral do cliente.

---

## TruthAndAwarenessConfirmation

Confirmação de ciência e veracidade.

Toda avaliação deve registrar confirmação de que o cliente declarou ciência e veracidade das informações fornecidas.

Essa confirmação deve aparecer no relatório.

Pode incluir:

- confirmação do cliente;
- confirmação do responsável legal, quando aplicável;
- confirmação do profissional avaliador;
- data e hora da confirmação.

---

## 6. Campos e obrigatoriedade

## RequiredField

Campo obrigatório.

Deve ser preenchido para permitir avanço, conclusão ou validade do fluxo em que aparece.

Exemplo:

- nome completo do cliente;
- data de nascimento;
- sexo biológico;
- profissional avaliador;
- tipo de avaliação.

---

## OptionalField

Campo opcional.

Pode ser preenchido para enriquecer o cadastro, avaliação ou relatório, mas não impede o avanço do fluxo quando ausente.

Exemplo:

- observações gerais;
- descrição livre de objetivo;
- profissão/ocupação;
- e-mail, quando não for obrigatório.

---

## ConditionalField

Campo condicional.

Campo que só se torna obrigatório quando uma condição é atendida.

Exemplo:

- responsável legal, se cliente for menor de idade;
- telefone do responsável, se houver responsável legal;
- detalhe de cirurgia, se o cliente declarar cirurgia;
- região que não deve ser medida, se o cliente informar restrição de medida;
- dobras específicas, se determinado protocolo for escolhido.

---

## DerivedField

Campo derivado.

Campo calculado automaticamente a partir de outros dados.

Exemplo:

- idade na data da avaliação;
- IMC;
- relação cintura-quadril;
- relação cintura-estatura;
- massa gorda;
- massa livre de gordura;
- data e hora de confirmação.

---

## 7. Snapshots e histórico

## Snapshot

Cópia histórica de dados relevantes no momento da avaliação.

A avaliação deve salvar snapshots de:

- cliente;
- profissional;
- instituição, quando houver;
- respostas de anamnese usadas;
- protocolos escolhidos;
- dados necessários para relatório.

O snapshot preserva os fatos do atendimento.

Mudanças futuras no cadastro do cliente, profissional ou instituição não devem alterar o significado histórico da avaliação já realizada.

---

## ClientSnapshot

Snapshot dos dados relevantes do cliente no momento da avaliação.

Pode incluir:

- nome completo;
- nome social ou nome de preferência;
- data de nascimento;
- idade na data da avaliação;
- sexo biológico;
- foto, se aplicável;
- respostas de anamnese usadas;
- informações necessárias ao relatório.

---

## ProfessionalSnapshot

Snapshot dos dados relevantes do profissional no momento da avaliação.

Pode incluir:

- nome;
- profissão;
- registro profissional, se houver;
- contato;
- dados para carimbo técnico;
- logo ou imagem, quando aplicável.

---

## InstitutionSnapshot

Snapshot dos dados relevantes da instituição no momento da avaliação.

Existe apenas quando o profissional responsável estiver vinculado a uma instituição.

Pode incluir:

- nome da instituição;
- nome fantasia;
- contato;
- endereço;
- logo;
- dados usados no cabeçalho institucional.

---

## 8. Relatórios e exportação

## Report

Representação dos resultados de uma avaliação.

No MVP, o relatório deve ser regenerado a partir dos dados estruturados salvos.

O relatório não é a fonte primária dos dados.

A fonte primária é a avaliação com seus dados, snapshots, cálculos e metadados.

---

## HtmlReport

Relatório visualizável em HTML dentro da aplicação.

Deve ser regenerado a partir dos dados salvos.

Pode ser usado apenas para visualização ou como base para exportação PDF.

---

## PdfExport

Exportação do relatório para PDF.

No MVP, o PDF exportado não deve ser salvo no banco de dados.

O usuário pode salvar, enviar ou arquivar o PDF fora da aplicação.

O banco pode, futuramente, registrar metadados de exportação, mas não deve armazenar o arquivo PDF.

---

## TechnicalStamp

Carimbo técnico do profissional.

Bloco textual no relatório usado para identificar o profissional responsável pela avaliação.

Pode incluir:

- nome;
- profissão;
- registro profissional, se houver;
- contato;
- data;
- observação técnica.

No MVP, o carimbo é textual.

Assinatura digitalizada fica fora do MVP.

---

## InstitutionalHeader

Cabeçalho institucional do relatório.

Bloco exibido quando a avaliação possui snapshot de instituição.

Pode incluir:

- nome da instituição;
- logo;
- endereço;
- contato;
- dados institucionais relevantes.

Se não houver instituição vinculada ao profissional no momento da avaliação, o relatório deve ser gerado sem cabeçalho institucional.

---

## 9. Dados locais, banco e backup

## LocalDatabase

Banco local da aplicação.

No MVP, a opção preferida é Dexie.js/IndexedDB, salvo decisão técnica melhor.

Deve armazenar dados estruturados necessários para funcionamento local/offline.

Não deve armazenar PDFs exportados.

Pode armazenar imagens se a estratégia técnica assim definir, respeitando limites de tamanho e impacto no backup.

---

## LocalBackup

Backup manual local.

No MVP, o backup será responsabilidade do usuário.

A estrutura base definida é um arquivo `.zip` contendo:

- JSON com dados estruturados;
- imagens necessárias, quando aplicável;
- metadados de versão;
- informações suficientes para restauração.

O backup deve restaurar o funcionamento da aplicação local.

Não deve funcionar como pasta de PDFs exportados.

---

## BackupArchive

Arquivo de backup exportado.

Formato base:

- `.zip`

Conteúdo esperado:

- dados em JSON;
- imagens;
- metadados;
- versão do schema;
- versão da aplicação, quando aplicável.

A estrutura pode ser refinada tecnicamente durante a implementação.

---

## Restore

Restauração de dados a partir de backup.

Processo de importar um backup local para reconstruir dados da aplicação.

A restauração deve considerar compatibilidade de versão e integridade dos dados.

---

## 10. Imagens e arquivos

## LocalImage

Imagem usada pela aplicação.

No MVP, imagens entram no escopo, incluindo:

- foto do cliente;
- logo de profissional, quando aplicável;
- logo de instituição, quando aplicável.

As imagens devem preservar qualidade suficiente para uso profissional, sem prejudicar desempenho, banco local, backup e restauração.

---

## ClientPhoto

Foto do cliente.

Imagem associada ao cadastro do cliente.

Deve respeitar o limite inicial de 2MB.

---

## ProfessionalLogo

Logo ou imagem associada ao profissional.

Deve respeitar o limite inicial de 2MB.

Quando usada em relatório, deve vir do snapshot da avaliação ou dos dados salvos de forma historicamente consistente.

---

## InstitutionLogo

Logo da instituição.

Deve respeitar o limite inicial de 2MB.

Quando usada em relatório, deve vir do snapshot da avaliação ou dos dados salvos de forma historicamente consistente.

---

## ImageSizeLimit

Limite máximo permitido para imagens.

No MVP, o limite inicial definido é:

```text
2MB por imagem
```

Esse limite se aplica a fotos e logos.

---

## 11. Unidades e medidas

## CanonicalUnit

Unidade canônica de armazenamento.

Cada campo mensurável deve declarar explicitamente sua unidade de armazenamento.

A unidade canônica permite cálculos consistentes e futuras conversões regionais.

Exemplos:

| Tipo de dado         | Unidade canônica |
| -------------------- | ---------------- |
| massa corporal       | kg               |
| estatura no cadastro | cm               |
| estatura para IMC    | m                |
| dobras cutâneas      | mm               |
| perímetros           | cm               |
| diâmetros            | cm               |
| idade                | anos completos   |
| idade pediátrica     | meses            |
| temperatura          | °C               |
| frequência cardíaca  | bpm              |

A interface pode futuramente exibir unidades diferentes, mas o banco deve manter unidades canônicas estáveis.

---

## Measurement

Medida coletada durante cadastro, anamnese ou avaliação.

Exemplos:

- massa corporal;
- estatura;
- perímetro da cintura;
- dobra cutânea tricipital;
- diâmetro ósseo;
- frequência cardíaca.

Toda medida técnica deve ter:

- valor;
- unidade;
- contexto;
- data, quando necessário;
- protocolo, quando aplicável.

---

## Calculation

Cálculo realizado pela aplicação a partir de dados salvos.

Exemplos:

- IMC;
- relação cintura-quadril;
- relação cintura-estatura;
- percentual de gordura;
- massa gorda;
- massa livre de gordura;
- composição corporal;
- índices cineantropométricos.

O cálculo deve preservar dados suficientes para rastrear qual protocolo ou fórmula foi usado.

---

## 12. Documentação técnica

## TechnicalDocumentation

Documentação técnica acessível pela rota `/documentation`.

Deve conter informações úteis para profissionais e colaboradores, incluindo:

- fórmulas escolhidas;
- protocolos usados;
- boas práticas de medição;
- orientações técnicas;
- referências operacionais;
- explicações sobre limites dos cálculos;
- notas sobre uso profissional dos resultados.

A documentação técnica não substitui formação profissional, normas da área ou julgamento técnico do avaliador.

---

## ProductDocumentation

Documentação de produto e planejamento.

Inclui documentos como:

- visão do produto;
- glossário de domínio;
- requisitos;
- fluxos principais;
- roadmap;
- decisões técnicas;
- prompts para Codex.

---

## 13. Estrutura visual e navegação

## GlobalLayout

Estrutura global mínima e persistente da aplicação.

O esqueleto inicial deve seguir a ideia:

```html
<html>
	<body>
		<main>
			<!-- conteúdo da página -->
		</main>
	</body>
</html>
```

Em SvelteKit, a implementação deve preservar um layout global estável e renderizar o conteúdo variável dentro do `main`.

---

## MainContent

Área principal da página.

Todo conteúdo específico da página deve ser renderizado dentro de `main`.

A estrutura deve priorizar semântica, acessibilidade e clareza.

---

## Navigation

Estrutura de navegação da aplicação.

No início, a navegação deve ser HTML puro, sem dependência de CSS visual.

Deve seguir boas práticas de HTML e acessibilidade.

Deve funcionar bem com:

- teclado;
- leitores de tela;
- navegação sem CSS;
- dispositivos simples;
- usuários com deficiência visual;
- usuários com deficiência auditiva;
- navegação textual sempre que possível.

---

## Page

Página acessível por uma rota.

Exemplos:

- Index/Home: `/`
- Onboarding: `/onboarding`
- Clients: `/clients`
- Professionals: `/professionals`
- Institutions: `/institutions`
- Evaluations: `/evaluations`
- Settings: `/settings`
- Backup: `/backup`
- Help: `/help`
- Documentation: `/documentation`

---

## Form

Formulário de cadastro, anamnese, avaliação, configuração ou backup.

Os formulários devem ser semanticamente corretos, acessíveis e claros.

Devem indicar:

- campos obrigatórios;
- campos opcionais;
- campos condicionais;
- unidades de medida;
- origem de respostas reaproveitadas;
- avisos técnicos quando necessário.

---

## 14. Módulos iniciais

## Index

Página inicial da aplicação, acessível por `/`.

Deve apresentar caminhos principais da aplicação de forma simples e sem dependência de CSS no início.

---

## Onboarding

Fluxo de primeiro acesso.

Deve explicar:

- nome da aplicação;
- funcionamento local/offline;
- responsabilidade sobre backup;
- configurações básicas;
- idioma;
- tema;
- mini tutorial;
- acesso posterior às informações em ajuda/configurações.

---

## ClientManagement

Módulo de gestão de clientes.

Inclui:

- lista de clientes;
- criação de cliente;
- visualização de cliente;
- edição de cliente;
- anamnese geral;
- histórico de avaliações;
- foto do cliente.

---

## ProfessionalProfiles

Módulo de perfis profissionais.

Inclui cadastro e edição de `ProfessionalProfile`.

---

## InstitutionProfiles

Módulo de perfis institucionais.

Inclui cadastro e edição de `InstitutionProfile`.

---

## AssessmentManagement

Módulo de avaliações.

Inclui:

- escolha de tipo de avaliação;
- escolha de cliente;
- escolha de profissional;
- escolha de protocolo, quando aplicável;
- coleta de dados;
- salvamento progressivo;
- visualização de relatório;
- exportação PDF.

---

## BackupManagement

Módulo de backup.

Inclui:

- exportação manual de backup;
- importação/restauração;
- avisos sobre responsabilidade do usuário;
- tratamento de JSON e imagens em arquivo zip.

---

## Settings

Módulo de configurações.

Pode incluir:

- idioma;
- tema;
- preferências de exibição;
- informações sobre dados locais;
- acesso a ajuda;
- acesso a termos;
- configurações futuras.

---

## Help

Área de ajuda ao usuário.

Deve explicar como usar a aplicação, especialmente:

- uso local/offline;
- backup;
- restauração;
- relatórios;
- avaliações;
- limitações do sistema.

---

## Documentation

Área de documentação técnica, acessível por `/documentation`.

Deve reunir documentação sobre fórmulas, protocolos, boas práticas de medição e referências operacionais.

---

## 15. Termos fora do MVP

## TrainingPlan

Ficha de treino.

Fora do MVP.

Pode ser módulo futuro.

---

## DietPlan

Dieta.

Fora do MVP.

Pode ser módulo futuro.

---

## FoodRecommendation

Recomendação alimentar.

Fora do MVP.

Pode ser módulo futuro.

---

## SportsTrainingProtocol

Protocolo de treinamento esportivo.

Fora do MVP.

Pode ser módulo futuro.

---

## OnlineAccount

Conta online.

Fora do MVP.

O MVP não exige login online.

---

## CloudSync

Sincronização em nuvem.

Fora do MVP.

A aplicação não terá sincronização automática entre dispositivos na primeira versão.

---

## LocalPassword

Senha local.

Fora do MVP.

Pode ser considerada no futuro.

---

## LocalEncryption

Criptografia local.

Fora do MVP.

Pode ser considerada no futuro.

---

## DigitalSignature

Assinatura digitalizada ou digital.

Fora do MVP.

No MVP, o relatório terá apenas carimbo textual do profissional.

---

## 16. Marcos técnicos de implementação

A ordem inicial de implementação deve seguir progressão incremental:

1. HTML puro com navegação completa;
2. HTML puro com formulários;
3. banco de dados local;
4. camada local de domínio, cálculos e geração de relatórios;
5. exportação, backup e restauração;
6. CSS, responsividade e refinamentos visuais;
7. melhorias posteriores.

Essa ordem existe para priorizar estrutura, dados, regras de negócio e funcionamento antes de estética.

---

## 17. Termos a evitar ou usar com cuidado

## User como entidade principal

Evitar usar `User` como entidade principal de domínio no MVP.

O termo pode causar confusão entre:

- profissional;
- instituição;
- pessoa usando a aplicação;
- instalação local.

Usar termos específicos.

## Account

Evitar o termo `Account` no MVP.

A aplicação não terá conta online obrigatória.

## Tenant

Evitar o termo `Tenant` no MVP.

Pode sugerir arquitetura multi-tenant, SaaS ou backend compartilhado, o que não faz parte do escopo inicial.

## Organization

Usar com cuidado.

Preferir `InstitutionProfile` para manter clareza no domínio atual.

## Patient

Evitar como termo base.

O público pode incluir educação física, esporte, academias e clínicas. `Client` é mais neutro.

## Student

Evitar como termo base.

Pode ser usado em tradução futura ou personalização, mas `Client` permanece como entidade principal.

## Athlete

Evitar como termo base.

Alguns clientes serão atletas, mas nem todos.

---

## 18. Regra final de clareza

Sempre que um nome técnico puder ser curto ou claro, escolher claro.

Evitar abreviações obscuras.

Exemplos:

Preferir:

```ts
professionalProfile;
institutionProfile;
assessmentProtocol;
clientGeneralAnamnesis;
```

Evitar:

```ts
prof;
inst;
proto;
anam;
usr;
```

O OSSMA é open source. Clareza de nomes é parte da experiência de colaboração.
