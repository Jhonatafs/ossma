# 03 — Requisitos

## 1. Objetivo do Documento

Este documento define os requisitos iniciais da aplicação. Ele transforma a visão do produto e o glossário do domínio em requisitos organizados, rastreáveis e testáveis.

A aplicação será uma PWA offline-first e local-first para uso profissional em avaliações presenciais posturais, antropométricas, nutricionais e cineantropométricas, com armazenamento local, cálculos científicos e geração de relatórios profissionais.

A documentação desta fase será escrita em português brasileiro. O código-fonte, nomes técnicos internos, comentários e estruturas de implementação serão escritos em inglês técnico.

---

## 2. Escopo deste Documento

Este documento cobre:

- requisitos funcionais;
- requisitos não funcionais;
- requisitos de dados;
- requisitos de navegação;
- requisitos de relatórios;
- requisitos de funcionamento offline;
- requisitos de backup e importação/exportação;
- requisitos de internacionalização;
- requisitos científicos;
- exclusões explícitas da primeira versão.

Este documento não define em detalhe:

- modelo final do banco de dados;
- layout final das telas;
- identidade visual final;
- stack técnica definitiva;
- catálogo completo de fórmulas;
- referências científicas completas;
- templates finais dos relatórios.

Esses pontos serão tratados em documentos posteriores.

---

## 3. Convenção de Identificação dos Requisitos

Os requisitos serão identificados por prefixos:

| Prefixo | Significado                      |
| ------- | -------------------------------- |
| `RF`    | Requisito Funcional              |
| `RNF`   | Requisito Não Funcional          |
| `RD`    | Requisito de Dados               |
| `RR`    | Requisito de Relatório           |
| `RB`    | Requisito de Backup              |
| `RI`    | Requisito de Internacionalização |
| `RC`    | Requisito Científico             |
| `EX`    | Exclusão explícita               |

Estados possíveis:

| Estado           | Significado                        |
| ---------------- | ---------------------------------- |
| `Obrigatório`    | Deve ser implementado              |
| `Recomendado`    | Deve ser implementado se viável    |
| `Futuro`         | Planejado para versões posteriores |
| `Fora do Escopo` | Não faz parte da versão atual      |

---

## 4. Atores

## 4.1 Profissional

Usuário principal da aplicação. É responsável por cadastrar clientes, coletar dados, realizar avaliações, interpretar resultados e exportar documentos.

Exemplos:

- educador físico;
- fisioterapeuta;
- nutricionista;
- treinador esportivo;
- personal trainer;
- professor de musculação;
- professor de artes marciais;
- avaliador físico.

---

## 4.2 Cliente

Pessoa avaliada pelo profissional.

O cliente não terá acesso direto à aplicação na primeira versão.

A aplicação deverá permitir personalizar o termo exibido para a pessoa avaliada, podendo usar:

- Cliente;
- Aluno;
- Paciente;
- Atleta;
- Avaliado.

---

## 4.3 Instituição

Organização local cadastrada na aplicação, como academia, clínica, consultório, hospital, projeto social, equipe esportiva ou outro estabelecimento.

A instituição será opcional para uso individual.

---

## 4.4 Instalação Local

Instância da aplicação em um dispositivo específico.

Cada instalação local terá seus próprios dados.

Exemplo:

```text
A aplicação instalada no celular terá uma base local.
A aplicação aberta no computador terá outra base local.
Não haverá sincronização automática entre elas na primeira versão.
```

---

## 5. Premissas do Produto

- A aplicação será usada exclusivamente por profissionais.
- As avaliações serão realizadas presencialmente.
- A aplicação não fará avaliação automática por fotos.
- A aplicação será uma PWA.
- A aplicação deverá funcionar offline após o primeiro acesso.
- A aplicação armazenará dados localmente.
- A primeira versão não dependerá de backend obrigatório.
- A primeira versão não terá conta online.
- A primeira versão não terá sincronização automática.
- A transferência entre dispositivos ocorrerá por exportação e importação manual.
- O projeto será gratuito.
- O projeto será open source.
- A licença será MIT.
- A documentação inicial será em português brasileiro.
- O código-fonte será escrito em inglês técnico.
- A interface deverá suportar inglês e português.
- O idioma padrão no primeiro acesso será inglês.

---

# 6. Requisitos Funcionais

## 6.1 Primeiro Acesso e Configuração Inicial

### RF-001 — Exibir tela inicial de configuração

**Estado:** Obrigatório

No primeiro acesso, a aplicação deve exibir uma tela flutuante, centralizada, com mensagem de boas-vindas em inglês.

Essa tela deverá permitir configurar, no mínimo:

- idioma da interface;
- tema visual;
- termo usado para a pessoa avaliada.

Critérios de aceitação:

- Ao abrir uma instalação nova, a tela inicial deve ser exibida.
- A mensagem inicial deve aparecer em inglês.
- O usuário deve conseguir escolher idioma e tema.
- Após concluir a configuração, a aplicação deve salvar as preferências localmente.
- A tela inicial não deve aparecer novamente, salvo se os dados locais forem limpos ou redefinidos.

---

### RF-002 — Salvar preferências locais

**Estado:** Obrigatório

A aplicação deve salvar localmente as preferências do usuário.

Preferências iniciais:

- idioma selecionado;
- tema visual;
- termo para pessoa avaliada;
- profissional ativo;
- instituição ativa.

Critérios de aceitação:

- As preferências devem permanecer após fechar e reabrir a aplicação.
- As preferências devem funcionar offline.

---

## 6.2 Navegação Principal

### RF-003 — Exibir menu principal

**Estado:** Obrigatório

A aplicação deve possuir o seguinte menu principal:

```text
Início
Clientes
Perfil
Backup
Configurações
```

Critérios de aceitação:

- O menu deve ser exibido após a configuração inicial.
- Os itens devem respeitar o idioma selecionado.
- O menu deve ser simples e adequado para telas pequenas.

---

### RF-004 — Organizar a seção Perfil

**Estado:** Obrigatório

A seção Perfil deve agrupar:

- Profissionais;
- Instituições.

Critérios de aceitação:

- O usuário deve conseguir acessar o cadastro de profissionais por Perfil.
- O usuário deve conseguir acessar o cadastro de instituições por Perfil.

---

### RF-005 — Organizar a seção Clientes como centro operacional

**Estado:** Obrigatório

A seção Clientes deve concentrar o fluxo principal de uso da aplicação.

Ela deve permitir acesso a:

- lista de clientes cadastrados;
- cadastro de novo cliente;
- dados do cliente;
- anamnese geral;
- avaliações do cliente;
- histórico de avaliações;
- relatório/resultado de cada avaliação.

Critérios de aceitação:

- O profissional deve conseguir abrir um cliente a partir da lista.
- O profissional deve conseguir criar novo cliente.
- O profissional deve conseguir acessar avaliações e histórico dentro do cliente.
- O profissional deve conseguir abrir uma avaliação do histórico.
- Ao abrir uma avaliação, deve ser possível visualizar o resultado/relatório e editar a avaliação.

---

## 6.3 Profissionais

### RF-006 — Cadastrar profissional

**Estado:** Obrigatório

A aplicação deve permitir cadastrar profissionais localmente.

Campos possíveis:

- nome completo;
- profissão;
- formação;
- especialidade;
- registro profissional;
- telefone;
- e-mail;
- endereço;
- logo ou identificação visual;
- assinatura digitalizada;
- observações.

Critérios de aceitação:

- O cadastro deve funcionar offline.
- O profissional pode existir sem instituição.
- O profissional pode ser vinculado a uma instituição, quando aplicável.

---

### RF-007 — Listar profissionais

**Estado:** Obrigatório

A aplicação deve permitir listar os profissionais cadastrados localmente.

Critérios de aceitação:

- A lista deve estar disponível em Perfil > Profissionais.
- A lista deve funcionar offline.

---

### RF-008 — Editar profissional

**Estado:** Obrigatório

A aplicação deve permitir editar dados de um profissional.

Critérios de aceitação:

- As alterações devem ser salvas localmente.
- Alterações futuras no perfil profissional não devem alterar relatórios já emitidos ou snapshots já preservados.

---

### RF-009 — Excluir profissional

**Estado:** Obrigatório

A aplicação deve permitir excluir profissionais, respeitando regras de integridade.

Critérios de aceitação:

- A aplicação deve alertar se o profissional estiver vinculado a avaliações existentes.
- Avaliações e relatórios já emitidos devem preservar os dados do profissional usados na época.

---

### RF-010 — Selecionar profissional ativo

**Estado:** Obrigatório

A aplicação deve permitir selecionar um profissional ativo.

O profissional ativo será usado como responsável por novas avaliações e documentos.

Critérios de aceitação:

- Uma nova avaliação deve registrar o profissional responsável.
- A aplicação deve impedir a finalização de uma avaliação sem profissional responsável.
- O profissional ativo deve ser salvo localmente.

---

## 6.4 Instituições

### RF-011 — Cadastrar instituição

**Estado:** Obrigatório

A aplicação deve permitir cadastrar instituições localmente.

Campos possíveis:

- nome da instituição;
- nome fantasia;
- documento institucional, se aplicável;
- telefone;
- e-mail;
- endereço;
- logotipo;
- rodapé padrão;
- observações.

Critérios de aceitação:

- O cadastro deve funcionar offline.
- A instituição deve poder ser usada em relatórios quando selecionada.

---

### RF-012 — Listar instituições

**Estado:** Obrigatório

A aplicação deve permitir listar instituições cadastradas localmente.

Critérios de aceitação:

- A lista deve estar disponível em Perfil > Instituições.
- A lista deve funcionar offline.

---

### RF-013 — Editar instituição

**Estado:** Obrigatório

A aplicação deve permitir editar dados de uma instituição.

Critérios de aceitação:

- As alterações devem ser salvas localmente.
- Alterações futuras na instituição não devem alterar relatórios já emitidos ou snapshots já preservados.

---

### RF-014 — Excluir instituição

**Estado:** Obrigatório

A aplicação deve permitir excluir instituições, respeitando regras de integridade.

Critérios de aceitação:

- A aplicação deve alertar se a instituição estiver vinculada a profissionais, clientes, avaliações ou relatórios.
- Avaliações e relatórios já emitidos devem preservar os dados institucionais usados na época.

---

### RF-015 — Selecionar instituição ativa

**Estado:** Obrigatório

A aplicação deve permitir selecionar uma instituição ativa.

A instituição ativa será opcional.

Critérios de aceitação:

- O profissional pode usar a aplicação sem instituição ativa.
- Quando houver instituição ativa, novas avaliações e relatórios poderão ser vinculados a ela.

---

## 6.5 Clientes

### RF-016 — Cadastrar cliente

**Estado:** Obrigatório

A aplicação deve permitir cadastrar clientes localmente.

Campos possíveis:

- nome completo;
- data de nascimento;
- sexo;
- telefone;
- e-mail;
- documento, se aplicável;
- endereço, se aplicável;
- profissão;
- responsável legal, se aplicável;
- observações gerais.

Critérios de aceitação:

- O cadastro deve funcionar offline.
- O cadastro não deve depender de validação online.

---

### RF-017 — Listar clientes

**Estado:** Obrigatório

A aplicação deve permitir listar clientes cadastrados localmente.

Critérios de aceitação:

- A lista deve aparecer na seção Clientes.
- A lista deve funcionar offline.

---

### RF-018 — Pesquisar clientes

**Estado:** Recomendado

A aplicação deve permitir pesquisar clientes cadastrados.

Critérios de aceitação:

- O profissional deve conseguir buscar cliente por nome.
- A busca deve funcionar offline.

---

### RF-019 — Visualizar dados do cliente

**Estado:** Obrigatório

A aplicação deve permitir visualizar os dados de um cliente.

A tela do cliente deve dar acesso a:

- perfil do cliente;
- anamnese geral;
- nova avaliação;
- histórico de avaliações;
- resultados/relatórios.

Critérios de aceitação:

- Ao abrir um cliente, o usuário deve visualizar seus dados principais e ações relacionadas.

---

### RF-020 — Editar cliente

**Estado:** Obrigatório

A aplicação deve permitir editar dados cadastrais do cliente.

Critérios de aceitação:

- As alterações devem ser salvas localmente.
- Alterações futuras no cliente não devem alterar relatórios já emitidos ou snapshots já preservados.

---

### RF-021 — Excluir cliente

**Estado:** Obrigatório

A aplicação deve permitir excluir clientes.

A exclusão do cliente deve remover ou tornar inacessíveis os dados relacionados, conforme estratégia de exclusão definida posteriormente.

Dados relacionados:

- anamnese geral;
- avaliações;
- resultados/relatórios;
- histórico local.

Critérios de aceitação:

- A aplicação deve solicitar confirmação antes de excluir o cliente.
- A aplicação deve informar que a exclusão do cliente também afeta a anamnese geral e registros relacionados.

---

## 6.6 Anamnese Geral

### RF-022 — Criar anamnese geral vinculada ao cliente

**Estado:** Obrigatório

Cada cliente deve possuir uma anamnese geral vinculada a ele.

A anamnese geral pode ser criada durante o cadastro do cliente ou no primeiro acesso à área de anamnese.

Critérios de aceitação:

- Cada cliente deve ter no máximo uma anamnese geral.
- A anamnese geral pertence ao cliente.

---

### RF-023 — Editar anamnese geral

**Estado:** Obrigatório

A aplicação deve permitir editar a anamnese geral do cliente.

Critérios de aceitação:

- O profissional pode atualizar os dados da anamnese geral.
- As alterações devem ser salvas localmente.

---

### RF-024 — Impedir exclusão isolada da anamnese geral

**Estado:** Obrigatório

A aplicação não deve permitir excluir a anamnese geral de forma isolada.

Critérios de aceitação:

- Não deve existir ação de exclusão separada para a anamnese geral.
- A anamnese geral só deve ser excluída junto com o cliente.

---

### RF-025 — Permitir edição de campos pertinentes da anamnese durante avaliação

**Estado:** Obrigatório

Durante uma avaliação, a aplicação deve permitir editar partes da anamnese geral que sejam pertinentes à avaliação em andamento.

Critérios de aceitação:

- A avaliação pode exibir campos relevantes da anamnese geral.
- Ao editar esses campos, a anamnese geral do cliente deve ser atualizada.
- A avaliação deve preservar os dados necessários para rastreabilidade do relatório.

---

## 6.7 Avaliações

### RF-026 — Criar avaliação

**Estado:** Obrigatório

A aplicação deve permitir criar avaliações vinculadas a um cliente.

Tipos iniciais:

- avaliação postural;
- avaliação antropométrica;
- avaliação nutricional;
- avaliação cineantropométrica.

Critérios de aceitação:

- Uma avaliação deve sempre estar vinculada a um cliente.
- Uma avaliação deve registrar o profissional responsável.
- Uma avaliação pode registrar a instituição ativa, se houver.
- A criação deve funcionar offline.

---

### RF-027 — Salvar avaliação como rascunho

**Estado:** Obrigatório

A aplicação deve permitir salvar uma avaliação parcialmente preenchida como rascunho.

Critérios de aceitação:

- Uma avaliação incompleta pode ser salva.
- Um rascunho pode ser reaberto e editado posteriormente.

---

### RF-028 — Concluir avaliação

**Estado:** Obrigatório

A aplicação deve permitir marcar uma avaliação como concluída.

Critérios de aceitação:

- Campos obrigatórios devem ser validados antes da conclusão.
- Resultados calculados devem ser gerados quando os dados necessários estiverem disponíveis.

---

### RF-029 — Editar avaliação

**Estado:** Obrigatório

A aplicação deve permitir editar avaliações existentes.

Critérios de aceitação:

- O profissional pode abrir uma avaliação pelo histórico e editá-la.
- Ao alterar dados de entrada, resultados calculados devem ser atualizados quando aplicável.
- A aplicação deve preservar regras de rastreabilidade para relatórios emitidos.

---

### RF-030 — Excluir avaliação

**Estado:** Obrigatório

A aplicação deve permitir excluir avaliações.

Critérios de aceitação:

- A aplicação deve solicitar confirmação antes da exclusão.
- A avaliação deve ser removida do histórico do cliente conforme estratégia de exclusão definida posteriormente.

---

### RF-031 — Visualizar histórico de avaliações

**Estado:** Obrigatório

A aplicação deve permitir visualizar o histórico de avaliações de um cliente.

Critérios de aceitação:

- A tela do cliente deve listar avaliações anteriores.
- O profissional deve conseguir abrir uma avaliação do histórico.
- Ao abrir a avaliação, deve ser possível visualizar o resultado/relatório.
- Ao abrir a avaliação, deve ser possível editá-la.

---

### RF-032 — Comparar avaliações

**Estado:** Recomendado

A aplicação deve permitir comparar avaliações do mesmo tipo para o mesmo cliente.

Comparações iniciais sugeridas:

- evolução da massa corporal;
- evolução de perímetros;
- evolução da cintura;
- evolução de índices antropométricos;
- evolução de resultados calculados relevantes.

Critérios de aceitação:

- O profissional deve conseguir comparar pelo menos duas avaliações do mesmo cliente.
- A comparação deve funcionar offline.

---

# 7. Requisitos dos Módulos Avaliativos

## 7.1 Avaliação Postural

### RF-033 — Registrar anamnese e histórico postural

**Estado:** Obrigatório

O módulo de avaliação postural deve permitir registrar dados qualitativos e históricos.

Campos iniciais sugeridos:

- queixa principal;
- localização da dor;
- intensidade da dor;
- comportamento da dor;
- tipo suspeito de dor;
- histórico de traumas;
- histórico de cirurgias;
- hábitos ergonômicos;
- postura predominante no trabalho;
- postura predominante em repouso.

Critérios de aceitação:

- O profissional deve conseguir registrar os dados posturais históricos.
- Os dados devem ser salvos como parte da avaliação.

---

### RF-034 — Registrar inspeção estática postural

**Estado:** Obrigatório

O módulo de avaliação postural deve permitir registrar inspeção estática.

Grupos iniciais:

- plano anterior;
- plano posterior;
- plano lateral.

Critérios de aceitação:

- O profissional deve conseguir registrar observações qualitativas.
- O profissional deve conseguir registrar valores quantitativos quando aplicável.

---

### RF-035 — Registrar avaliação funcional e mobilidade

**Estado:** Obrigatório

O módulo de avaliação postural deve permitir registrar dados funcionais e de mobilidade.

Campos iniciais sugeridos:

- amplitude de movimento;
- goniometria;
- inclinometria;
- distância dedo-chão;
- teste de Schober;
- apoio unipodal.

Critérios de aceitação:

- O profissional deve conseguir registrar valores com unidade.
- O profissional deve conseguir adicionar observações.

---

### RF-036 — Gerar resultado/relatório postural

**Estado:** Obrigatório

A aplicação deve gerar um resultado/relatório específico para avaliação postural.

Critérios de aceitação:

- O relatório deve exibir os dados posturais coletados.
- O relatório deve exibir a interpretação profissional.
- O relatório deve conter seção de aviso técnico geral.
- O relatório deve conter carimbo profissional em todas as páginas.

---

## 7.2 Avaliação Antropométrica

### RF-037 — Registrar dados antropométricos básicos

**Estado:** Obrigatório

O módulo de avaliação antropométrica deve permitir registrar dados básicos.

Campos iniciais:

- massa corporal;
- estatura;
- envergadura.

Critérios de aceitação:

- O profissional deve conseguir registrar valores com unidade.
- A aplicação deve validar campos numéricos.

---

### RF-038 — Registrar perimetria segmentar

**Estado:** Obrigatório

O módulo de avaliação antropométrica deve permitir registrar perímetros segmentares.

Campos iniciais sugeridos:

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

Critérios de aceitação:

- Os valores devem ser registrados em centímetros.
- Campos bilaterais devem permitir comparação entre lado direito e esquerdo.

---

### RF-039 — Calcular índices antropométricos iniciais

**Estado:** Obrigatório

A aplicação deve calcular índices antropométricos quando os dados necessários estiverem disponíveis.

Cálculos iniciais:

- IMC;
- relação cintura-quadril;
- relação cintura-estatura;
- relação ombro-cintura;
- diferenças de simetria bilateral.

Critérios de aceitação:

- A aplicação não deve calcular índice quando faltar dado obrigatório.
- A aplicação deve informar quais dados estão faltando quando um cálculo não puder ser realizado.

---

### RF-040 — Registrar avaliação muscular qualitativa

**Estado:** Obrigatório

O módulo antropométrico deve permitir registrar observações qualitativas musculares.

Campos iniciais sugeridos:

- definição muscular aparente;
- pontos fortes;
- pontos fracos;
- postura dinâmica observada;
- limitações de movimento observadas;
- observações profissionais.

Critérios de aceitação:

- O profissional deve conseguir registrar observações subjetivas.
- Campos subjetivos devem ser identificados como observações profissionais.

---

### RF-041 — Gerar resultado/relatório antropométrico

**Estado:** Obrigatório

A aplicação deve gerar um resultado/relatório específico para avaliação antropométrica.

Critérios de aceitação:

- O relatório deve exibir dados coletados.
- O relatório deve exibir índices calculados.
- O relatório deve exibir interpretação profissional.
- O relatório deve conter seção de aviso técnico geral.
- O relatório deve conter carimbo profissional em todas as páginas.

---

## 7.3 Avaliação Nutricional

### RF-042 — Registrar anamnese dietética

**Estado:** Obrigatório

O módulo de avaliação nutricional deve permitir registrar anamnese dietética.

Campos iniciais sugeridos:

- recordatório de 24 horas;
- diário alimentar;
- frequência alimentar;
- preferências;
- aversões;
- alergias;
- intolerâncias;
- crenças alimentares;
- hábito intestinal;
- escala de Bristol;
- ingestão hídrica.

Critérios de aceitação:

- O profissional deve conseguir registrar dados qualitativos e quantitativos.
- Os dados devem ser salvos localmente.

---

### RF-043 — Registrar exame clínico-nutricional

**Estado:** Obrigatório

O módulo nutricional deve permitir registrar observações clínico-nutricionais qualitativas.

Áreas iniciais sugeridas:

- cabelos;
- unhas;
- pele;
- mucosas;
- conjuntivas;
- saúde bucal;
- hidratação aparente;
- cicatrização;
- distensão abdominal;
- pirose;
- refluxo.

Critérios de aceitação:

- O profissional deve conseguir classificar ou descrever observações.
- O profissional deve conseguir marcar campos como não avaliados.

---

### RF-044 — Registrar dados bioquímicos

**Estado:** Obrigatório

O módulo nutricional deve permitir registrar dados bioquímicos manualmente.

Para cada exame, a aplicação deve permitir:

- valor;
- unidade;
- referência laboratorial;
- data do exame;
- observações.

Exames iniciais sugeridos:

- hemograma completo;
- glicemia de jejum;
- insulina;
- hemoglobina glicada;
- colesterol total;
- HDL;
- LDL;
- VLDL;
- triglicerídeos;
- ferritina;
- vitamina B12;
- vitamina D;
- magnésio;
- zinco;
- creatinina;
- ureia;
- TGO;
- TGP;
- creatinoquinase.

Critérios de aceitação:

- O profissional deve conseguir registrar exames manualmente.
- A aplicação não deve depender de integração automática com laboratório.

---

### RF-045 — Registrar contexto nutricional desportivo

**Estado:** Obrigatório

O módulo nutricional deve permitir registrar contexto nutricional relacionado ao treino.

Campos iniciais sugeridos:

- modalidade praticada;
- cronograma de treinamento;
- horário do treino;
- duração;
- intensidade;
- frequência semanal;
- histórico de suplementação;
- energia durante o treino;
- percepção de recuperação;
- tolerância gastrointestinal sob esforço.

Critérios de aceitação:

- O profissional deve conseguir registrar o contexto desportivo.
- Os dados devem poder ser usados em interpretação e cálculos futuros.

---

### RF-046 — Calcular estimativas nutricionais iniciais

**Estado:** Recomendado

A aplicação deve calcular estimativas nutricionais quando os dados necessários estiverem disponíveis.

Cálculos iniciais sugeridos:

- taxa metabólica basal;
- gasto energético total;
- distribuição de macronutrientes;
- proteína em g/kg;
- carboidrato em g/kg;
- gordura em g/kg;
- disponibilidade de energia.

Critérios de aceitação:

- Os cálculos só devem ser executados quando os dados necessários estiverem disponíveis.
- A aplicação deve informar dados faltantes.
- A aplicação deve exibir a fórmula ou protocolo utilizado.

---

### RF-047 — Gerar resultado/relatório nutricional

**Estado:** Obrigatório

A aplicação deve gerar um resultado/relatório específico para avaliação nutricional.

Critérios de aceitação:

- O relatório deve exibir dados nutricionais coletados.
- O relatório deve exibir estimativas calculadas quando disponíveis.
- O relatório deve exibir interpretação profissional.
- O relatório deve conter seção de aviso técnico geral.
- O relatório deve conter carimbo profissional em todas as páginas.

---

## 7.4 Avaliação Cineantropométrica

### RF-048 — Registrar metadados cineantropométricos

**Estado:** Recomendado

O módulo cineantropométrico deve permitir registrar metadados e contexto.

Campos iniciais sugeridos:

- idade cronológica;
- maturação biológica, quando aplicável;
- histórico de lesões;
- histórico de cirurgias;
- lado dominante;
- modalidade esportiva;
- nível competitivo;
- horário da coleta;
- observações sobre hidratação;
- condições da coleta.

Critérios de aceitação:

- O profissional deve conseguir registrar dados de contexto.
- O horário da coleta deve ser salvo para rastreabilidade.

---

### RF-049 — Registrar perfil ISAK

**Estado:** Futuro

O módulo cineantropométrico deve permitir registrar perfil ISAK completo.

Grupos de medidas:

- medidas básicas;
- dobras cutâneas;
- perímetros;
- diâmetros ósseos.

Critérios de aceitação:

- As medidas devem ser registradas com unidades corretas.
- A aplicação deve validar campos obrigatórios para cada cálculo.

---

### RF-050 — Calcular modelo de 5 componentes

**Estado:** Futuro

A aplicação deve calcular composição corporal por modelo de 5 componentes quando os dados necessários estiverem disponíveis.

Componentes:

- massa adiposa;
- massa muscular;
- massa óssea;
- massa residual;
- massa epitelial.

Critérios de aceitação:

- A aplicação deve exibir o protocolo utilizado.
- A aplicação deve informar dados faltantes quando o cálculo não puder ser realizado.

---

### RF-051 — Calcular somatotipo Heath-Carter

**Estado:** Futuro

A aplicação deve calcular somatotipo antropométrico pelo método Heath-Carter quando os dados necessários estiverem disponíveis.

Resultados possíveis:

- endomorfia;
- mesomorfia;
- ectomorfia;
- coordenada X;
- coordenada Y;
- somatocarta;
- SAD, quando houver somatotipo-alvo.

Critérios de aceitação:

- A aplicação só deve calcular quando os dados necessários estiverem disponíveis.
- A aplicação deve preservar rastreabilidade do cálculo.

---

### RF-052 — Calcular perfil Phantom

**Estado:** Futuro

A aplicação deve calcular Z-scores do modelo Phantom quando os dados necessários estiverem disponíveis.

Critérios de aceitação:

- A aplicação deve exibir Z-scores por grupo de medida.
- A aplicação deve exibir protocolo, referência e limitações.

---

### RF-053 — Gerar resultado/relatório cineantropométrico

**Estado:** Futuro

A aplicação deve gerar um resultado/relatório específico para avaliação cineantropométrica.

Critérios de aceitação:

- O relatório deve exibir medidas brutas.
- O relatório deve exibir indicadores avançados calculados.
- O relatório deve exibir interpretação profissional.
- O relatório deve conter seção de aviso técnico geral.
- O relatório deve conter carimbo profissional em todas as páginas.

---

# 8. Requisitos de Relatórios e Resultados

### RR-001 — Gerar documento específico por tipo de avaliação

**Estado:** Obrigatório

Cada tipo de avaliação deve possuir seu próprio documento de resultado/relatório.

Tipos iniciais:

- relatório postural;
- relatório antropométrico;
- relatório nutricional;
- relatório cineantropométrico.

Critérios de aceitação:

- Ao abrir uma avaliação, o sistema deve exibir o resultado/relatório correspondente ao tipo da avaliação.
- A estrutura do relatório deve ser compatível com a avaliação realizada.

---

### RR-002 — Visualizar relatório pelo histórico

**Estado:** Obrigatório

O profissional deve conseguir abrir uma avaliação pelo histórico do cliente e visualizar seu resultado/relatório.

Critérios de aceitação:

- O histórico deve permitir abrir avaliações anteriores.
- O relatório deve ser exibido offline.

---

### RR-003 — Exportar relatório em PDF

**Estado:** Obrigatório

A aplicação deve permitir exportar relatórios em PDF.

Critérios de aceitação:

- A exportação deve funcionar offline.
- O PDF deve conter identificação profissional.
- O PDF deve conter dados do cliente.
- O PDF deve conter dados da avaliação e resultados.

---

### RR-004 — Exibir carimbo profissional em todas as páginas

**Estado:** Obrigatório

Toda página do relatório deve conter um carimbo profissional.

O carimbo poderá conter:

- nome do profissional;
- profissão;
- registro profissional;
- contatos;
- endereço;
- instituição;
- logotipo;
- outras informações configuradas.

Critérios de aceitação:

- O carimbo deve aparecer em todas as páginas do relatório.
- O carimbo deve cumprir função semelhante a um carimbo físico profissional.

---

### RR-005 — Incluir seção de aviso técnico geral

**Estado:** Obrigatório

Todo relatório deve conter uma seção de aviso técnico geral dentro do resultado/relatório.

O aviso deve ser genérico, claro e abrangente.

O aviso deve explicar que:

- as avaliações são baseadas em coleta presencial;
- os resultados dependem da precisão dos dados coletados;
- cálculos são estimativas baseadas em protocolos selecionados;
- a interpretação é responsabilidade do profissional;
- a aplicação não realiza diagnóstico automático;
- o documento não substitui julgamento profissional qualificado.

Critérios de aceitação:

- O relatório deve conter uma seção chamada Aviso Técnico ou equivalente conforme idioma.
- O aviso deve aparecer no PDF exportado.
- O aviso não deve ser específico para apenas um tipo de avaliação.

---

### RR-006 — Preservar snapshot do relatório

**Estado:** Obrigatório

A aplicação deve preservar os dados relevantes usados na emissão do relatório.

Dados possíveis do snapshot:

- identificação do cliente;
- dados do profissional;
- dados da instituição;
- data da avaliação;
- data de emissão;
- dados brutos;
- resultados calculados;
- versões de protocolos;
- configurações do relatório.

Critérios de aceitação:

- Alterar o profissional depois da emissão não deve alterar relatórios já emitidos.
- Alterar a instituição depois da emissão não deve alterar relatórios já emitidos.
- Alterar o cliente depois da emissão não deve alterar relatórios já emitidos.

---

### RR-007 — Evitar linguagem de diagnóstico automático

**Estado:** Obrigatório

Os relatórios não devem apresentar diagnóstico automático gerado pela aplicação.

Termos preferidos:

- interpretação profissional;
- achados;
- observações;
- indicadores;
- classificações;
- recomendações.

Critérios de aceitação:

- O sistema não deve gerar frases afirmando diagnóstico automático.
- A conclusão deve ser atribuída ao profissional responsável.

---

# 9. Requisitos de Dados

### RD-001 — Armazenar dados localmente

**Estado:** Obrigatório

Todos os dados essenciais devem ser armazenados localmente no dispositivo do usuário.

Dados essenciais:

- preferências;
- profissionais;
- instituições;
- clientes;
- anamneses;
- avaliações;
- resultados calculados;
- snapshots de relatórios;
- metadados de backup.

---

### RD-002 — Preservar dados brutos

**Estado:** Obrigatório

A aplicação deve preservar os dados brutos coletados nas avaliações.

Os dados brutos não devem ser substituídos apenas por resultados calculados.

---

### RD-003 — Preservar resultados calculados com rastreabilidade

**Estado:** Obrigatório

A aplicação deve armazenar resultados calculados com informações suficientes para rastreabilidade.

Dados de rastreabilidade possíveis:

- nome da fórmula;
- versão da fórmula;
- nome do protocolo;
- versão do protocolo;
- valores de entrada;
- unidades;
- data do cálculo.

---

### RD-004 — Usar identificadores locais estáveis

**Estado:** Obrigatório

Entidades principais devem possuir identificadores locais estáveis.

Entidades:

- profissional;
- instituição;
- cliente;
- anamnese;
- avaliação;
- snapshot de relatório;
- backup.

---

### RD-005 — Suportar versionamento de schema

**Estado:** Obrigatório

O banco local deve suportar versionamento de schema para permitir migrações futuras.

---

# 10. Requisitos Científicos

### RC-001 — Documentar fórmulas

**Estado:** Obrigatório

Toda fórmula implementada deve ser documentada.

A documentação deve conter:

- nome da fórmula;
- equação;
- entradas necessárias;
- unidades;
- população indicada;
- limitações;
- referência científica;
- observações de implementação.

---

### RC-002 — Validar entradas obrigatórias

**Estado:** Obrigatório

A aplicação deve validar dados obrigatórios antes de executar cálculos.

Critérios de aceitação:

- A aplicação não deve calcular se faltarem dados necessários.
- A aplicação deve informar quais dados estão faltando.

---

### RC-003 — Exibir protocolo utilizado

**Estado:** Obrigatório

A aplicação deve exibir o protocolo ou fórmula usada em cada resultado calculado.

---

### RC-004 — Alertar limitações de aplicabilidade

**Estado:** Obrigatório

A aplicação deve alertar quando um protocolo puder não se aplicar ao perfil do cliente ou quando a aplicabilidade não puder ser determinada.

---

### RC-005 — Testar fórmulas automaticamente

**Estado:** Obrigatório

Implementações de fórmulas devem possuir testes automatizados.

Critérios de aceitação:

- Cada fórmula implementada deve ter pelo menos um teste.
- Os testes devem comparar saídas esperadas com entradas conhecidas.

---

# 11. Requisitos de Backup e Portabilidade

### RB-001 — Exportar backup manual

**Estado:** Obrigatório

A aplicação deve permitir exportar dados locais em arquivo de backup.

Critérios de aceitação:

- A exportação deve funcionar offline.
- O usuário deve conseguir armazenar o arquivo manualmente.
- O backup deve conter os dados locais necessários para restauração ou transferência.

---

### RB-002 — Importar backup manual

**Estado:** Obrigatório

A aplicação deve permitir importar um backup previamente exportado.

Critérios de aceitação:

- A importação deve funcionar offline.
- A aplicação deve validar o arquivo antes da importação.
- A aplicação deve alertar sobre substituição, mesclagem ou conflito de dados conforme estratégia definida posteriormente.

---

### RB-003 — Versionar formato do backup

**Estado:** Obrigatório

Arquivos de backup devem conter metadados de versão do formato.

Critérios de aceitação:

- O backup deve informar a versão do formato.
- A aplicação deve verificar compatibilidade antes da importação.

---

### RB-004 — Informar responsabilidade sobre dados locais

**Estado:** Obrigatório

A aplicação deve informar claramente que os dados são locais e que o usuário é responsável por proteger o dispositivo e os arquivos de backup.

Critérios de aceitação:

- O aviso deve aparecer na área de Backup.
- O aviso deve aparecer em Configurações ou área equivalente de informações.

---

# 12. Requisitos de Internacionalização

### RI-001 — Suportar inglês e português

**Estado:** Obrigatório

A aplicação deve suportar, inicialmente, inglês e português.

---

### RI-002 — Usar inglês no primeiro acesso

**Estado:** Obrigatório

A tela de primeiro acesso deve ser exibida em inglês por padrão.

---

### RI-003 — Usar estrutura i18n

**Estado:** Obrigatório

A aplicação deve usar uma estrutura de internacionalização baseada em i18n.

Critérios de aceitação:

- Textos da interface devem ser externalizados.
- A troca de idioma deve alterar os textos da interface.
- Novos idiomas devem poder ser adicionados futuramente sem reescrever a aplicação.

---

# 13. Requisitos Não Funcionais

### RNF-001 — Funcionar offline após o primeiro acesso

**Estado:** Obrigatório

A aplicação deve funcionar offline após o primeiro carregamento ou instalação.

---

### RNF-002 — Ser local-first

**Estado:** Obrigatório

A aplicação deve priorizar armazenamento local e funcionamento independente de servidor.

---

### RNF-003 — Não depender de backend obrigatório

**Estado:** Obrigatório

A primeira versão não deve exigir backend para funcionalidades essenciais.

---

### RNF-004 — Não exigir conta online

**Estado:** Obrigatório

A primeira versão não deve exigir cadastro online, login remoto ou autenticação em servidor.

---

### RNF-005 — Ser multiplataforma por PWA

**Estado:** Obrigatório

A aplicação deve ser acessível em navegadores modernos e instalável como PWA quando suportado.

Plataformas-alvo:

- Android;
- iOS;
- Windows;
- Linux;
- macOS;
- ChromeOS.

---

### RNF-006 — Ser gratuita e open source

**Estado:** Obrigatório

A aplicação deve ser gratuita e distribuída como projeto open source sob licença MIT.

---

### RNF-007 — Usar código em inglês técnico

**Estado:** Obrigatório

O código-fonte deve ser escrito completamente em inglês técnico.

Isso inclui:

- nomes de arquivos;
- nomes de pastas;
- variáveis;
- funções;
- tipos;
- classes;
- comentários;
- documentação técnica interna.

---

### RNF-008 — Ser adequada para desenvolvimento individual

**Estado:** Obrigatório

A arquitetura deve ser viável para desenvolvimento e manutenção por um desenvolvedor individual júnior, com apoio de ferramentas de IA.

---

### RNF-009 — Ter boa usabilidade em telas pequenas

**Estado:** Obrigatório

A aplicação deve ser confortável para uso em celular, tablet, notebook e desktop.

---

### RNF-010 — Ser transparente sobre limitações

**Estado:** Obrigatório

A aplicação deve informar limitações técnicas, científicas e de responsabilidade profissional quando aplicável.

---

# 14. Exclusões Explícitas da Primeira Versão

### EX-001 — Sem aplicativo do cliente

**Estado:** Fora do Escopo

A primeira versão não terá acesso direto para clientes, alunos, pacientes ou atletas.

---

### EX-002 — Sem sincronização automática

**Estado:** Fora do Escopo

A primeira versão não terá sincronização automática entre dispositivos.

---

### EX-003 — Sem backend obrigatório

**Estado:** Fora do Escopo

A primeira versão não dependerá de backend obrigatório para funcionar.

---

### EX-004 — Sem conta online

**Estado:** Fora do Escopo

A primeira versão não exigirá criação de conta online.

---

### EX-005 — Sem administrador

**Estado:** Fora do Escopo

A primeira versão não terá administrador, hierarquia de permissões ou controle de acesso robusto.

---

### EX-006 — Sem avaliação automática por foto

**Estado:** Fora do Escopo

A aplicação não fará avaliação postural, antropométrica ou qualquer outra avaliação automática por foto.

Fotos, se existirem futuramente, serão apenas anexos documentais.

---

### EX-007 — Sem diagnóstico automático

**Estado:** Fora do Escopo

A aplicação não realizará diagnóstico automático.

---

### EX-008 — Sem prescrição automática autônoma

**Estado:** Fora do Escopo

A aplicação não deve gerar prescrição profissional automática sem interpretação e responsabilidade do profissional.

---

### EX-009 — Sem pagamento ou assinatura

**Estado:** Fora do Escopo

A primeira versão não terá sistema de cobrança, assinatura ou pagamento.

---

### EX-010 — Sem teleatendimento

**Estado:** Fora do Escopo

A primeira versão não terá recursos de teleatendimento.

---

# 15. Questões em Aberto

As seguintes decisões precisam ser refinadas em documentos posteriores:

- estratégia exata de exclusão de dados relacionados ao cliente;
- estratégia de importação de backup: substituir, mesclar ou escolher;
- formato técnico do backup;
- stack técnica definitiva;
- modelo de dados local;
- template visual dos relatórios;
- texto final do aviso técnico geral;
- política de responsabilidade profissional;
- lista inicial de fórmulas e protocolos científicos;
- estratégia de versionamento de fórmulas;
- design final das telas;
- critérios exatos do MVP 1.

---

# 16. Próximo Documento Recomendado

Após este documento, os próximos documentos recomendados são:

```text
04-business-rules.md
05-evaluation-modules.md
06-mvp-scope.md
```

O próximo mais importante é `04-business-rules.md`, pois ele transformará estes requisitos em regras de negócio objetivas para orientar banco de dados, interface e validações.
