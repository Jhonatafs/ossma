# Fluxos Principais

**Projeto:** OSSMA — Open Source Sport Management Application  
**Documento:** 04  
**Status:** versão inicial consolidada  
**Idioma da documentação:** português brasileiro  
**Idioma de nomes técnicos:** inglês técnico

**Autoria e curadoria do projeto:** JhonFs / Jhonata Sande  
**Redação inicial:** GPT-5.5

---

## 1. Finalidade

Este documento descreve os fluxos principais do OSSMA para o MVP e para o esqueleto inicial da aplicação.

Ele deve orientar:

- estrutura inicial de páginas;
- navegação HTML sem CSS visual;
- formulários;
- estados principais;
- bloqueios de fluxo;
- mensagens de orientação;
- prompts pequenos para Codex;
- testes manuais;
- revisão de implementação.

Este documento não define aparência visual final. A fase inicial deve priorizar HTML semântico, acessibilidade, clareza e funcionamento.

---

## 2. Princípios gerais dos fluxos

Os fluxos do OSSMA devem seguir os princípios abaixo.

### 2.1. HTML semântico primeiro

Na fase inicial, os fluxos devem ser implementados com HTML semântico puro, sem CSS visual.

A navegação deve continuar compreensível mesmo sem estilo.

### 2.2. Acessibilidade como base

Os fluxos devem funcionar com:

- teclado;
- leitores de tela;
- navegação textual;
- marcação semântica;
- formulários com `label`;
- mensagens claras;
- botões com texto explícito.

### 2.3. Leveza e foco

Durante a coleta de avaliação, a interface deve focar no preenchimento dos dados.

O relatório não deve ser renderizado continuamente em tempo real no MVP.

### 2.4. Dados antes de aparência

A sequência de implementação deve priorizar:

1. rotas;
2. navegação;
3. formulários;
4. regras de fluxo;
5. banco local;
6. cálculos;
7. relatórios;
8. backup;
9. CSS e acabamento visual.

### 2.5. Bloqueios claros

Quando um fluxo não puder continuar, o sistema deve explicar o motivo e oferecer o próximo caminho útil.

Exemplo:

- sem cliente cadastrado: orientar criação de cliente;
- sem profissional cadastrado: orientar criação de `ProfessionalProfile`;
- avaliação incompleta: indicar campos obrigatórios faltantes.

---

## 3. Rotas iniciais

O esqueleto inicial deve prever as seguintes rotas:

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

Todas as rotas públicas devem ser em inglês.

---

## 4. Estados principais

## 4.1. Estado da avaliação

Estados iniciais de `Assessment`:

```text
Draft
Completed
```

### Draft

Avaliação criada após definição mínima de:

- tipo de avaliação;
- cliente;
- profissional avaliador.

Pode estar incompleta.

Deve salvar progresso de forma incremental quando o banco local estiver implementado.

### Completed

Avaliação finalizada após:

- preenchimento dos campos obrigatórios;
- validação dos dados necessários;
- confirmações de ciência e veracidade;
- revisão final;
- geração possível do relatório HTML.

---

## 4.2. Estados que não entram no MVP

O MVP não deve implementar:

- ativo/inativo para cliente;
- ativo/inativo para profissional;
- arquivamento;
- lixeira;
- histórico detalhado campo a campo;
- avaliação combinada;
- preview de relatório em tempo real obrigatório.

---

## 5. Fluxo 01: primeiro acesso e onboarding

## Objetivo

Apresentar o OSSMA ao usuário, configurar preferências básicas e registrar aceite explícito sobre funcionamento local/offline.

## Rota principal

```text
/onboarding
```

## Fluxo

```text
Usuário acessa a aplicação pela primeira vez
→ sistema detecta ausência de onboarding concluído
→ redireciona para /onboarding
→ apresenta nome da aplicação
→ apresenta explicação local/offline
→ apresenta responsabilidade por backup
→ apresenta responsabilidade pela segurança do dispositivo
→ apresenta aviso de uso profissional
→ permite escolher idioma
→ permite escolher tema básico
→ apresenta mini tutorial
→ exige aceite explícito
→ salva onboarding como concluído
→ direciona para /
```

## Critérios de aceitação

- O usuário deve entender que os dados ficam localmente.
- O usuário deve entender que backup é responsabilidade dele.
- O usuário deve entender que segurança do dispositivo é responsabilidade dele.
- O usuário deve aceitar explicitamente os avisos principais.
- O usuário deve poder consultar essas informações depois em ajuda, configurações ou documentação.

## Observações

O tema pode ser configurado no onboarding, mas a fase inicial do projeto ainda pode usar HTML puro sem CSS visual.

---

## 6. Fluxo 02: página inicial

## Objetivo

Servir como ponto central de navegação simples da aplicação.

## Rota principal

```text
/
```

## Fluxo

```text
Usuário acessa /
→ sistema exibe navegação principal
→ sistema exibe links para áreas principais
→ usuário escolhe o módulo desejado
```

## Áreas principais

A página inicial deve oferecer caminhos para:

- clientes;
- profissionais;
- instituições;
- avaliações;
- backup;
- configurações;
- ajuda;
- documentação técnica.

## Critérios de aceitação

- Deve funcionar sem CSS visual.
- Deve usar HTML semântico.
- Deve usar links claros.
- Deve evitar cartões visuais obrigatórios na fase inicial.
- Deve ser navegável por teclado e leitor de tela.

---

## 7. Fluxo 03: navegação global inicial

## Objetivo

Permitir acesso às rotas principais com marcação HTML simples e acessível.

## Fluxo

```text
Usuário acessa qualquer página principal
→ sistema exibe navegação semântica
→ usuário pode ir para as áreas principais
→ conteúdo específico da página aparece dentro de main
```

## Estrutura conceitual

```html
<html>
	<body>
		<main>
			<!-- page content -->
		</main>
	</body>
</html>
```

## Critérios de aceitação

- A navegação deve funcionar sem CSS.
- Links devem ter texto significativo.
- O conteúdo da página deve estar dentro de `main`.
- Não depender de ícones para compreensão.
- Não depender de menu visual complexo na primeira fase.

---

## 8. Fluxo 04: criar ProfessionalProfile

## Objetivo

Cadastrar o profissional que poderá realizar avaliações e aparecer no carimbo técnico do relatório.

## Rota principal

```text
/professionals
```

## Fluxo

```text
Usuário acessa /professionals
→ escolhe criar ProfessionalProfile
→ preenche dados profissionais obrigatórios
→ preenche dados opcionais, se desejar
→ vincula InstitutionProfile, se houver
→ adiciona imagem/logo, se desejar
→ sistema valida campos obrigatórios
→ sistema salva ProfessionalProfile
→ sistema retorna para lista/detalhe de profissionais
```

## Critérios de aceitação

- Deve permitir criar profissional sem instituição vinculada.
- Deve permitir vincular no máximo uma instituição.
- Deve permitir imagem/logo até 2MB.
- Dados necessários ao carimbo técnico devem ser armazenados.
- Nomes técnicos devem usar `ProfessionalProfile`.

## Bloqueios

Se o usuário tentar criar avaliação sem `ProfessionalProfile`, o sistema deve bloquear o início da coleta e orientar cadastro de profissional.

---

## 9. Fluxo 05: criar InstitutionProfile

## Objetivo

Cadastrar uma instituição para identificação institucional em relatórios.

## Rota principal

```text
/institutions
```

## Fluxo

```text
Usuário acessa /institutions
→ escolhe criar InstitutionProfile
→ preenche dados institucionais obrigatórios
→ preenche dados opcionais, se desejar
→ adiciona logo, se desejar
→ sistema valida campos obrigatórios
→ sistema salva InstitutionProfile
→ sistema retorna para lista/detalhe de instituições
```

## Critérios de aceitação

- Instituição pode existir sem profissional vinculado.
- Instituição pode ter logo até 2MB.
- Instituição não representa login, permissão ou conta no MVP.
- Nomes técnicos devem usar `InstitutionProfile`.

---

## 10. Fluxo 06: vincular ProfessionalProfile a InstitutionProfile

## Objetivo

Permitir que um profissional tenha uma instituição associada para fins de relatório.

## Fluxo

```text
Usuário acessa ProfessionalProfile
→ escolhe editar
→ seleciona uma InstitutionProfile existente
→ sistema salva vínculo
→ avaliações futuras desse profissional derivam a instituição automaticamente
```

## Critérios de aceitação

- Um profissional pode ter no máximo uma instituição vinculada.
- O vínculo é opcional.
- A instituição da avaliação deve ser derivada automaticamente do profissional.
- O usuário não deve escolher manualmente instituição dentro da avaliação quando o vínculo já existir.

---

## 11. Fluxo 07: criar Client

## Objetivo

Cadastrar um cliente com dados básicos, anamnese geral e consentimentos necessários.

## Rota principal

```text
/clients/new
```

## Fluxo

```text
Usuário acessa /clients/new
→ preenche dados cadastrais obrigatórios
→ preenche dados opcionais, se desejar
→ adiciona foto, se desejar
→ preenche anamnese geral obrigatória
→ preenche campos condicionais exigidos pelas respostas
→ registra consentimentos obrigatórios
→ sistema valida dados obrigatórios
→ sistema salva Client
→ sistema direciona para /clients/[id]
```

## Critérios de aceitação

- Cliente não deve ser salvo sem dados obrigatórios.
- Cliente não deve ser salvo sem anamnese geral obrigatória.
- Cliente não deve ser salvo sem consentimentos obrigatórios.
- Foto deve respeitar limite de 2MB.
- Cliente não deve ser vinculado diretamente a profissional ou instituição.

## Observações

Alguns campos da anamnese podem representar ausência de informação relevante. Isso não significa que o bloco foi ignorado.

Exemplo:

```text
Histórico de cirurgia: não informado ou nada relevante
```

---

## 12. Fluxo 08: listar e acessar clientes

## Objetivo

Permitir consulta de clientes cadastrados e acesso ao histórico de avaliações.

## Rota principal

```text
/clients
```

## Fluxo

```text
Usuário acessa /clients
→ sistema lista clientes
→ usuário escolhe um cliente
→ sistema abre /clients/[id]
→ sistema exibe dados do cliente
→ sistema exibe anamnese geral
→ sistema exibe histórico de avaliações
→ sistema permite iniciar nova avaliação para esse cliente
```

## Critérios de aceitação

- Deve existir link para criar novo cliente.
- Deve existir caminho para visualizar detalhe do cliente.
- Deve existir caminho para editar dados e anamnese.
- Deve existir caminho para iniciar avaliação a partir do cliente.

---

## 13. Fluxo 09: editar anamnese geral do cliente

## Objetivo

Permitir atualizar a anamnese geral do cliente fora do fluxo de avaliação.

## Rota principal

```text
/clients/[id]
```

## Fluxo

```text
Usuário acessa detalhe do cliente
→ escolhe editar anamnese geral
→ altera respostas
→ sistema valida campos obrigatórios e condicionais
→ sistema salva alterações
→ sistema atualiza updatedAt do cliente/anamnese
```

## Critérios de aceitação

- Alterações futuras na anamnese geral não devem alterar avaliações antigas.
- Avaliações antigas preservam snapshots das respostas usadas.
- Campos condicionais devem continuar válidos.

---

## 14. Fluxo 10: iniciar avaliação por /evaluations/new

## Objetivo

Criar uma avaliação a partir do módulo de avaliações.

## Rota principal

```text
/evaluations/new
```

## Fluxo

```text
Usuário acessa /evaluations/new
→ sistema verifica se há Client cadastrado
→ sistema verifica se há ProfessionalProfile cadastrado
→ usuário escolhe tipo de avaliação
→ usuário escolhe cliente
→ usuário escolhe profissional avaliador
→ sistema deriva InstitutionProfile do profissional, se houver
→ usuário escolhe AssessmentProtocol, se aplicável
→ sistema cria Assessment em estado Draft
→ sistema direciona para coleta
```

## Critérios de aceitação

- Sem cliente cadastrado, o sistema deve bloquear a coleta e orientar cadastro de cliente.
- Sem profissional cadastrado, o sistema deve bloquear a coleta e orientar cadastro de profissional.
- Tipo, cliente e profissional são obrigatórios antes da coleta.
- Instituição não é escolhida manualmente na avaliação.
- Instituição é derivada do vínculo do profissional.

---

## 15. Fluxo 11: iniciar avaliação a partir do cliente

## Objetivo

Criar uma avaliação diretamente a partir do detalhe de um cliente.

## Rota principal

```text
/clients/[id]
```

## Fluxo

```text
Usuário acessa /clients/[id]
→ escolhe nova avaliação
→ sistema verifica se há ProfessionalProfile cadastrado
→ usuário escolhe tipo de avaliação
→ usuário escolhe profissional avaliador
→ sistema deriva InstitutionProfile do profissional, se houver
→ usuário escolhe AssessmentProtocol, se aplicável
→ sistema cria Assessment em estado Draft
→ sistema direciona para coleta
```

## Critérios de aceitação

- Cliente já vem definido pelo contexto da página.
- Profissional continua obrigatório.
- Tipo de avaliação continua obrigatório.
- Protocolo pode ser obrigatório conforme tipo de avaliação.
- O resultado final deve ser a mesma entidade `Assessment` criada por `/evaluations/new`.

---

## 16. Fluxo 12: bloqueio por ausência de cliente

## Objetivo

Evitar iniciar coleta de avaliação sem cliente cadastrado.

## Fluxo

```text
Usuário tenta criar avaliação
→ sistema não encontra Client cadastrado
→ sistema exibe aviso
→ sistema oferece link para /clients/new
```

## Mensagem recomendada

```text
Nenhum cliente cadastrado. Cadastre um cliente antes de iniciar uma avaliação.
```

## Critérios de aceitação

- Não deve criar avaliação sem cliente.
- Deve orientar o próximo passo.
- Não deve permitir coleta de dados solta sem vínculo com cliente.

---

## 17. Fluxo 13: bloqueio por ausência de ProfessionalProfile

## Objetivo

Evitar iniciar coleta de avaliação sem profissional avaliador.

## Fluxo

```text
Usuário tenta criar avaliação
→ sistema não encontra ProfessionalProfile cadastrado
→ sistema exibe aviso
→ sistema oferece link para /professionals
```

## Mensagem recomendada

```text
Nenhum profissional cadastrado. Cadastre um ProfessionalProfile antes de iniciar uma avaliação.
```

## Critérios de aceitação

- Não deve criar avaliação sem profissional.
- Deve orientar o próximo passo.
- Deve preservar a regra de que toda avaliação tem exatamente um profissional avaliador.

---

## 18. Fluxo 14: coleta de avaliação

## Objetivo

Coletar dados da avaliação conforme tipo e protocolo escolhidos.

## Rota principal

```text
/evaluations/[id]
```

## Fluxo

```text
Usuário acessa Assessment em Draft
→ sistema exibe tipo de avaliação
→ sistema exibe cliente
→ sistema exibe profissional avaliador
→ sistema exibe protocolo escolhido, se houver
→ sistema exibe respostas reaproveitadas da anamnese geral
→ sistema exibe campos específicos da avaliação
→ sistema marca campos obrigatórios
→ sistema marca campos opcionais
→ sistema exibe campos condicionais conforme respostas/protocolo
→ usuário preenche dados
→ sistema valida campos obrigatórios
→ sistema salva progresso
```

## Critérios de aceitação

- Campos obrigatórios devem ser identificáveis.
- Campos opcionais devem ser identificáveis.
- Campos condicionais devem depender de respostas, cliente ou protocolo.
- Dados devem seguir unidades canônicas.
- O foco da tela deve ser coleta, não relatório.
- O relatório não deve ser renderizado continuamente em tempo real no MVP.

---

## 19. Fluxo 15: uso de respostas da anamnese geral na avaliação

## Objetivo

Reaproveitar respostas já existentes sem obrigar o usuário a redigitar tudo.

## Fluxo

```text
Sistema carrega anamnese geral do cliente
→ avaliação exibe respostas relevantes
→ usuário mantém resposta existente
ou
→ usuário altera resposta reaproveitada
→ sistema pergunta se deseja atualizar a anamnese geral
→ usuário escolhe sim ou não
```

## Se o usuário escolher sim

```text
Sistema atualiza anamnese geral do cliente
→ sistema salva nova resposta também na avaliação
→ avaliação preserva snapshot da resposta usada
```

## Se o usuário escolher não

```text
Sistema mantém anamnese geral original
→ sistema salva nova resposta apenas na avaliação
→ avaliação preserva snapshot da resposta usada
```

## Critérios de aceitação

- Respostas puxadas devem aparecer sem exigir confirmação extra só por estarem visíveis.
- Alterações devem ser explícitas.
- O usuário deve entender se está atualizando o cadastro geral ou apenas a avaliação.
- Avaliações antigas não devem ser alteradas.

---

## 20. Fluxo 16: escolher AssessmentProtocol

## Objetivo

Permitir que o protocolo defina campos, obrigatoriedades e cálculos disponíveis.

## Fluxo

```text
Usuário escolhe tipo de avaliação
→ sistema verifica se o tipo exige protocolo
→ usuário escolhe AssessmentProtocol, se aplicável
→ sistema define campos obrigatórios, opcionais e condicionais
→ sistema salva protocolo na Assessment
```

## Critérios de aceitação

- O protocolo escolhido deve ser salvo.
- Campos obrigatórios devem variar conforme protocolo.
- Cálculos disponíveis devem respeitar protocolo.
- Se o protocolo for obrigatório, coleta não deve iniciar sem ele.
- Se o protocolo puder ser escolhido durante a coleta, o sistema deve recalcular obrigatoriedades de forma clara.

---

## 21. Fluxo 17: validação antes de finalizar avaliação

## Objetivo

Garantir que a avaliação só seja finalizada com dados suficientes.

## Fluxo

```text
Usuário tenta finalizar Assessment
→ sistema valida campos obrigatórios
→ sistema valida campos condicionais ativos
→ sistema valida confirmações necessárias
→ sistema aponta pendências de preenchimento
→ usuário corrige dados
→ sistema libera revisão final
```

## Critérios de aceitação

- Avaliação incompleta permanece em `Draft`.
- Campos faltantes devem ser indicados.
- Confirmações de ciência/veracidade são obrigatórias.
- Dados necessários ao relatório devem estar completos.

---

## 22. Fluxo 18: revisão final da avaliação

## Objetivo

Permitir revisar dados antes de marcar avaliação como finalizada.

## Fluxo

```text
Usuário completa dados obrigatórios
→ sistema abre etapa de revisão final
→ sistema mostra resumo dos dados principais
→ sistema mostra cliente
→ sistema mostra profissional
→ sistema mostra instituição derivada, se houver
→ sistema mostra tipo e protocolo
→ sistema mostra confirmações
→ usuário revisa
→ usuário confirma finalização
→ sistema muda estado para Completed
```

## Critérios de aceitação

- Revisão final deve ocorrer antes do relatório oficial.
- Revisão deve ser simples e sem necessidade de CSS visual.
- O usuário deve poder voltar e corrigir dados antes de finalizar.
- A finalização deve preservar snapshots necessários.

---

## 23. Fluxo 19: visualizar relatório HTML

## Objetivo

Visualizar o relatório após avaliação completa.

## Rota principal

```text
/evaluations/[id]
```

ou subetapa equivalente dentro da avaliação.

## Fluxo

```text
Assessment está Completed
→ usuário escolhe visualizar relatório
→ sistema gera relatório HTML a partir dos dados salvos
→ sistema exibe relatório
→ usuário revisa relatório
→ usuário pode exportar PDF
```

## Critérios de aceitação

- Relatório deve ser gerado após preenchimento completo e finalização/revisão.
- Relatório deve ser regenerado a partir dos dados salvos.
- Relatório não deve ser armazenado como fonte primária.
- Relatório deve incluir carimbo técnico.
- Relatório deve incluir cabeçalho institucional quando houver.
- Relatório deve incluir confirmações obrigatórias.

## Regra sobre prévia em tempo real

O MVP não deve exigir prévia de relatório em tempo real durante a coleta.

Prévia parcial ou em tempo real pode ser considerada futuramente, desde que não prejudique:

- performance;
- simplicidade da interface;
- clareza do fluxo;
- leveza da aplicação.

---

## 24. Fluxo 20: exportar PDF

## Objetivo

Permitir exportar o relatório para arquivo PDF.

## Fluxo

```text
Usuário visualiza relatório HTML
→ usuário escolhe exportar PDF
→ sistema gera PDF sob demanda
→ usuário salva ou compartilha o arquivo fora da aplicação
```

## Critérios de aceitação

- PDF só deve ser exportado após relatório estar disponível.
- PDF não deve ser salvo no banco local.
- PDF não deve ser incluído como fonte primária da aplicação.
- Backup não deve depender de PDFs exportados.

---

## 25. Fluxo 21: editar avaliação finalizada

## Objetivo

Permitir correção ou atualização de uma avaliação já finalizada.

## Fluxo

```text
Usuário acessa Assessment Completed
→ escolhe editar
→ sistema permite alteração dos dados editáveis
→ sistema valida novamente campos obrigatórios
→ sistema atualiza updatedAt
→ sistema permite nova revisão
→ sistema regenera relatório HTML a partir dos dados atualizados
```

## Critérios de aceitação

- `createdAt` deve ser preservado.
- `updatedAt` deve ser atualizado.
- Histórico campo a campo não é obrigatório no MVP.
- O relatório deve refletir os dados atuais salvos da avaliação.
- Snapshots históricos devem continuar coerentes com a avaliação.

---

## 26. Fluxo 22: excluir Client

## Objetivo

Permitir excluir cliente com confirmação forte.

## Fluxo

```text
Usuário acessa /clients/[id]
→ escolhe excluir cliente
→ sistema exibe aviso forte
→ sistema informa impacto sobre dados relacionados
→ usuário confirma explicitamente
→ sistema exclui cliente e dados relacionados conforme regra do MVP
→ sistema retorna para /clients
```

## Aviso deve mencionar

- cliente será removido;
- anamnese geral será removida;
- foto será removida;
- avaliações relacionadas podem ser removidas conforme regra do MVP;
- não há lixeira no MVP.

## Critérios de aceitação

- Exclusão exige confirmação forte.
- O usuário deve entender o impacto.
- Não deve haver exclusão silenciosa.

---

## 27. Fluxo 23: excluir ProfessionalProfile

## Objetivo

Permitir excluir profissional preservando snapshots de avaliações antigas.

## Fluxo

```text
Usuário acessa ProfessionalProfile
→ escolhe excluir
→ sistema exibe aviso forte
→ sistema informa que avaliações antigas preservarão snapshots
→ sistema informa que o cadastro original será removido
→ sistema informa que novas avaliações não poderão usar esse profissional
→ usuário confirma explicitamente
→ sistema remove ProfessionalProfile
```

## Critérios de aceitação

- Exclusão é permitida mesmo com avaliações antigas vinculadas.
- Snapshots de avaliações antigas não devem ser apagados.
- Imagens não devem ser duplicadas desnecessariamente nos snapshots.
- A exclusão exige confirmação forte.

---

## 28. Fluxo 24: excluir InstitutionProfile

## Objetivo

Permitir excluir instituição preservando snapshots de avaliações antigas.

## Fluxo

```text
Usuário acessa InstitutionProfile
→ escolhe excluir
→ sistema exibe aviso forte
→ sistema informa que profissionais vinculados ficarão sem instituição
→ sistema informa que avaliações antigas preservarão snapshots
→ usuário confirma explicitamente
→ sistema remove InstitutionProfile
→ sistema remove vínculo dos ProfessionalProfiles vinculados
```

## Critérios de aceitação

- Exclusão exige confirmação forte.
- Profissionais vinculados devem ficar sem instituição.
- Avaliações antigas preservam snapshots institucionais.
- Novas avaliações não devem usar instituição excluída.

---

## 29. Fluxo 25: excluir Assessment

## Objetivo

Permitir excluir avaliação com confirmação forte.

## Fluxo

```text
Usuário acessa Assessment
→ escolhe excluir avaliação
→ sistema exibe aviso forte
→ sistema informa que a avaliação será removida
→ usuário confirma explicitamente
→ sistema exclui Assessment
→ sistema retorna ao cliente ou à lista de avaliações
```

## Critérios de aceitação

- Exclusão exige confirmação forte.
- Não há lixeira no MVP.
- PDFs exportados fora da aplicação não são afetados.
- A exclusão não deve remover cliente nem profissional.

---

## 30. Fluxo 26: exportar backup

## Objetivo

Gerar backup manual da base local.

## Rota principal

```text
/backup
```

## Fluxo

```text
Usuário acessa /backup
→ escolhe exportar backup
→ sistema coleta dados estruturados
→ sistema coleta imagens necessárias
→ sistema gera JSON
→ sistema empacota JSON + imagens + metadados em ZIP
→ usuário salva arquivo de backup
```

## Conteúdo esperado

- dados estruturados em JSON;
- imagens necessárias para restauração;
- metadados de versão;
- informações mínimas para compatibilidade futura.

## Critérios de aceitação

- Backup deve ser manual.
- Backup deve usar `.zip`.
- Backup deve incluir imagens necessárias.
- Backup não deve incluir PDFs exportados como requisito.
- O usuário deve ser lembrado de guardar o arquivo com segurança.

---

## 31. Fluxo 27: restaurar backup

## Objetivo

Restaurar a aplicação a partir de backup local.

## Rota principal

```text
/backup
```

## Fluxo

```text
Usuário acessa /backup
→ escolhe importar/restaurar backup
→ seleciona arquivo ZIP
→ sistema valida estrutura básica
→ sistema informa que a base local atual será substituída
→ usuário confirma explicitamente
→ sistema substitui base local atual pelos dados do backup
→ sistema restaura imagens necessárias
→ sistema informa conclusão
```

## Critérios de aceitação

- Restauração substitui base local atual.
- Não há merge de backup no MVP.
- Confirmação forte é obrigatória.
- O sistema deve validar estrutura básica quando possível.
- O usuário deve ser avisado do risco antes de restaurar.

---

## 32. Fluxo 28: acessar documentação técnica

## Objetivo

Permitir consulta de fórmulas, protocolos e boas práticas de medição.

## Rota principal

```text
/documentation
```

## Fluxo

```text
Usuário acessa /documentation
→ sistema exibe documentação técnica
→ usuário consulta fórmulas escolhidas
→ usuário consulta protocolos usados
→ usuário consulta boas práticas de medição
→ usuário consulta avisos técnicos e limitações
```

## Conteúdo esperado

- fórmulas escolhidas;
- protocolos usados;
- boas práticas de medição;
- orientações técnicas;
- limites de interpretação;
- referência aos documentos técnicos do projeto.

## Critérios de aceitação

- A documentação técnica deve ser acessível na aplicação.
- Deve ser separada da documentação de produto do repositório.
- Deve informar que não substitui formação profissional.

---

## 33. Fluxo 29: acessar ajuda

## Objetivo

Explicar uso básico da aplicação.

## Rota principal

```text
/help
```

## Fluxo

```text
Usuário acessa /help
→ sistema exibe ajuda básica
→ usuário consulta informações sobre uso local/offline
→ usuário consulta backup
→ usuário consulta restauração
→ usuário consulta fluxo de avaliações
```

## Critérios de aceitação

- Deve explicar o funcionamento local/offline.
- Deve explicar responsabilidade de backup.
- Deve explicar o básico do uso da aplicação.
- Deve ser compreensível para usuário não técnico.

---

## 34. Fluxo 30: acessar configurações

## Objetivo

Permitir ajustes básicos da aplicação.

## Rota principal

```text
/settings
```

## Fluxo

```text
Usuário acessa /settings
→ sistema exibe configurações disponíveis
→ usuário ajusta idioma
→ usuário ajusta tema, quando CSS/tema estiverem disponíveis
→ usuário consulta informações sobre dados locais
→ usuário acessa ajuda ou backup quando necessário
```

## Critérios de aceitação

- Interface deve ser traduzível com Paraglide.
- Idioma deve ser configurável.
- Tema pode existir como preferência antes do refinamento visual final.
- Configurações não devem criar dependência de conta online no MVP.

---

## 35. Fluxo 31: retorno após interrupção

## Objetivo

Reduzir perda de dados durante avaliação.

## Fluxo futuro com banco local

```text
Usuário inicia Assessment em Draft
→ sistema salva progresso incrementalmente
→ navegador fecha ou dispositivo desliga
→ usuário retorna à aplicação
→ sistema permite retomar Draft
```

## Critérios de aceitação

- Avaliações em Draft devem ser retomáveis quando banco local estiver implementado.
- O sistema deve listar ou indicar avaliações incompletas.
- Dados salvos não devem depender de envio para servidor.

---

## 36. Ordem recomendada para implementação dos fluxos

A implementação deve seguir esta ordem:

1. criar rotas vazias com HTML semântico;
2. criar navegação global simples;
3. criar página inicial;
4. criar páginas de clientes;
5. criar páginas de profissionais;
6. criar páginas de instituições;
7. criar páginas de avaliações;
8. criar páginas de backup;
9. criar páginas de ajuda e documentação;
10. adicionar formulários HTML estáticos;
11. adicionar validações simples;
12. adicionar banco local;
13. adicionar salvamento real;
14. adicionar domínio de avaliações;
15. adicionar cálculos;
16. adicionar relatório HTML;
17. adicionar exportação PDF;
18. adicionar backup/restauração real;
19. adicionar CSS e refinamentos visuais.

---

## 37. Fluxos fora do MVP

Os seguintes fluxos não devem ser implementados no MVP:

- login online;
- criação de conta online;
- sincronização automática;
- backup em nuvem;
- senha local;
- criptografia local;
- ficha de treino;
- dieta;
- recomendação alimentar;
- protocolos de treinamento esportivo;
- avaliação combinada;
- assinatura digitalizada;
- permissões por equipe;
- multiusuário com autenticação;
- lixeira;
- arquivamento;
- preview contínuo de relatório em tempo real.

---

## 38. Resumo operacional do MVP

O fluxo central do MVP é:

```text
Onboarding
→ cadastro de ProfessionalProfile
→ cadastro opcional de InstitutionProfile
→ cadastro de Client com anamnese geral
→ criação de Assessment
→ escolha de tipo e AssessmentProtocol
→ coleta de dados
→ confirmação de ciência/veracidade
→ revisão final
→ Completed
→ relatório HTML
→ exportação PDF
→ backup manual
```

Esse fluxo deve permanecer leve, acessível, local, offline e semanticamente claro.
