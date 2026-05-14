# 01 — Visão do Produto

## 1. Identificação

**Nome provisório do projeto:** Aplicação Profissional de Avaliações Físicas e Nutricionais  
**Tipo de produto:** PWA offline-first  
**Licença:** MIT  
**Modelo de distribuição:** Open source e gratuito  
**Público-alvo:** Profissionais desportivos e de saúde, especialmente autônomos e pequenos estabelecimentos  
**Status do documento:** Rascunho inicial  
**Data:** 2026-05-11

---

## 2. Resumo Executivo

A aplicação será uma ferramenta profissional, gratuita, open source e offline-first para realização presencial de avaliações posturais, antropométricas, cineantropométricas e nutricionais.

O sistema será utilizado exclusivamente por profissionais. Clientes, alunos, pacientes ou atletas não terão acesso direto à aplicação. O profissional realizará a coleta presencial dos dados, registrará as informações no sistema, executará cálculos automáticos baseados em protocolos científicos e exportará relatórios com valor profissional.

A primeira versão não dependerá de servidor, conta online, sincronização em nuvem ou autenticação remota. Após o primeiro acesso, a aplicação deverá funcionar completamente offline, armazenando os dados localmente no dispositivo do usuário.

---

## 3. Problema

Profissionais autônomos e pequenos estabelecimentos da área esportiva e da saúde frequentemente precisam realizar avaliações físicas, nutricionais e posturais com aparência profissional, mas encontram barreiras como:

- alto custo de softwares especializados;
- dependência de internet;
- soluções fechadas e pouco auditáveis;
- baixa qualidade técnica de planilhas improvisadas;
- dificuldade de gerar relatórios profissionais;
- ausência de ferramentas simples para armazenamento histórico local;
- pouca acessibilidade para profissionais de baixa renda;
- dificuldade de aplicar protocolos científicos com consistência.

Muitos profissionais acabam usando papel, planilhas ou aplicativos genéricos, o que prejudica padronização, organização, histórico, apresentação e reprodutibilidade dos resultados.

---

## 4. Proposta de Valor

A aplicação pretende oferecer uma solução local, gratuita e tecnicamente confiável para que profissionais possam:

- cadastrar clientes;
- registrar anamneses;
- realizar avaliações presenciais;
- aplicar protocolos científicos;
- gerar cálculos automáticos;
- acompanhar evolução;
- emitir relatórios profissionais em PDF;
- manter dados armazenados localmente;
- usar a ferramenta sem depender de internet após o primeiro acesso;
- portar dados manualmente entre dispositivos por exportação e importação.

A proposta central é entregar uma ferramenta acessível, robusta e de código aberto para profissionais que precisam de qualidade técnica sem depender de mensalidades ou infraestrutura complexa.

---

## 5. Visão do Produto

Construir uma PWA offline-first, open source e gratuita para apoiar profissionais desportivos e de saúde na realização presencial de avaliações físicas, posturais, cineantropométricas e nutricionais, com cálculos científicos, histórico local e relatórios profissionais exportáveis.

A aplicação deve ser simples o suficiente para ser usada por profissionais autônomos e pequenos estabelecimentos, mas rigorosa o suficiente para preservar protocolos, unidades, referências, limitações e dados brutos utilizados nos cálculos.

---

## 6. Objetivos do Produto

### 6.1 Objetivo Geral

Fornecer uma aplicação profissional e acessível para coleta, cálculo, organização e exportação de avaliações presenciais nas áreas de saúde, exercício físico, composição corporal, postura, nutrição e desempenho.

### 6.2 Objetivos Específicos

- Permitir funcionamento completo offline após o primeiro acesso.
- Armazenar dados localmente no dispositivo do usuário.
- Permitir cadastro de instituições, profissionais e clientes.
- Registrar autoria profissional de cada avaliação.
- Gerar relatórios com identificação profissional e institucional.
- Organizar avaliações por cliente e por data.
- Preservar histórico de avaliações.
- Executar cálculos automáticos com base em protocolos científicos.
- Informar protocolos, unidades, limitações e referências utilizadas.
- Permitir exportação manual de dados para backup.
- Permitir importação manual de dados em outro dispositivo.
- Ser gratuito e distribuído sob licença MIT.
- Ser desenvolvido com tecnologias acessíveis para manutenção por desenvolvedor individual.

---

## 7. Público-Alvo

### 7.1 Público Principal

- Profissionais de Educação Física.
- Personal trainers.
- Fisioterapeutas.
- Nutricionistas.
- Treinadores esportivos.
- Professores de musculação.
- Professores de artes marciais.
- Avaliadores físicos.
- Pequenas academias.
- Pequenas clínicas.
- Consultórios independentes.
- Projetos sociais esportivos.
- Pequenas equipes esportivas.

### 7.2 Características do Público

O público-alvo tende a ter uma ou mais das seguintes características:

- baixo orçamento para software;
- necessidade de trabalhar offline;
- uso em celular, notebook ou computador simples;
- atendimento presencial;
- necessidade de gerar relatórios para clientes;
- pouca ou nenhuma infraestrutura tecnológica própria;
- preferência por ferramenta simples, direta e sem mensalidade;
- necessidade de preservar os dados sob controle local.

---

## 8. Usuários do Sistema

A aplicação será de uso exclusivo dos profissionais ou da instituição local que realiza os atendimentos.

### 8.1 Profissional Autônomo

Usuário que trabalha sozinho e utiliza a aplicação em um ou mais dispositivos, sem sincronização automática entre eles.

Exemplo:

```text
Professor autônomo usa a aplicação no celular.
Os dados ficam salvos apenas naquele celular.
Para usar os mesmos dados no computador, ele deve exportar e importar manualmente.
```

### 8.2 Pequena Instituição

Academia, clínica, consultório, projeto social ou equipe que utiliza a aplicação em dispositivo compartilhado.

Exemplo:

```text
Academia X possui um computador compartilhado.
Vários profissionais usam a mesma instalação local.
Cada avaliação registra qual profissional a realizou.
```

### 8.3 Cliente, Aluno, Paciente ou Atleta

Pessoa avaliada pelo profissional. Não terá acesso direto ao sistema na versão inicial. Receberá relatórios, fichas, recomendações ou documentos exportados pelo profissional.

---

## 9. Contextos de Uso

### 9.1 Uso Individual

- Um profissional instala a PWA em seu dispositivo.
- Cadastra seu perfil profissional.
- Cadastra clientes.
- Realiza avaliações presencialmente.
- Gera relatórios em PDF.
- Faz backup manual quando desejar.

### 9.2 Uso em Dispositivo Compartilhado

- Uma instituição cadastra seus dados.
- Cadastra profissionais vinculados.
- O profissional ativo é selecionado antes da avaliação.
- A avaliação registra quem realizou o atendimento.
- A separação entre profissionais é organizacional, não uma camada robusta de segurança.

### 9.3 Uso em Múltiplos Dispositivos

- Cada dispositivo possui seus próprios dados locais.
- Não haverá sincronização automática na primeira versão.
- A transferência de dados ocorrerá por exportação e importação manual.

---

## 10. Princípios do Produto

### 10.1 Offline-First

A aplicação deve funcionar completamente offline após o primeiro acesso. Funcionalidades essenciais não devem depender de conexão com internet.

### 10.2 Local-First

Os dados pertencem à instalação local do usuário e ficam armazenados no dispositivo utilizado.

### 10.3 Sem Servidor Obrigatório

A primeira versão não dependerá de backend, autenticação online ou banco de dados remoto.

### 10.4 Gratuito e Open Source

A aplicação será gratuita e distribuída com licença MIT, permitindo uso, estudo, modificação e redistribuição.

### 10.5 Rigor Científico

Cálculos, protocolos e classificações devem ser documentados, testáveis e associados às suas referências e limitações.

### 10.6 Simplicidade Operacional

A aplicação deve ser simples de usar, instalar, manter e entender. O público-alvo não deve depender de conhecimento técnico avançado.

### 10.7 Transparência

A aplicação deve deixar claro quando um dado é objetivo, subjetivo, estimado, derivado ou dependente da interpretação profissional.

### 10.8 Responsabilidade Profissional

A aplicação apoia o profissional, mas não substitui julgamento clínico, competência legal, formação técnica ou responsabilidade profissional.

---

## 11. Escopo Funcional Geral

A aplicação deverá conter, em sua visão completa:

- cadastro de instituições;
- cadastro de profissionais;
- cadastro de clientes;
- seleção de instituição ativa;
- seleção de profissional ativo;
- registro de anamnese;
- avaliação postural;
- avaliação antropométrica;
- avaliação cineantropométrica;
- avaliação nutricional;
- cálculos automáticos;
- histórico de avaliações;
- comparação de evolução;
- geração de relatórios profissionais;
- exportação em PDF;
- exportação manual de backup;
- importação manual de backup;
- configurações locais;
- modelos de relatório.

---

## 12. Módulos Avaliativos

### 12.1 Avaliação Postural

Avaliação presencial com foco em fisioterapeutas e profissionais que atuam com movimento, postura, reabilitação, prevenção e acompanhamento funcional.

O módulo deverá permitir registro de:

- queixa principal;
- histórico de traumas e cirurgias;
- hábitos ergonômicos;
- inspeção estática em plano anterior;
- inspeção estática em plano posterior;
- inspeção estática em plano lateral;
- avaliação funcional;
- mobilidade;
- amplitude de movimento;
- testes funcionais simples;
- observações profissionais.

A avaliação será baseada em coleta presencial. A aplicação não fará análise postural automática por fotos.

### 12.2 Avaliação Antropométrica

Avaliação presencial com foco em musculação, estética, hipertrofia, acompanhamento físico e evolução corporal.

O módulo deverá permitir registro de:

- massa corporal;
- estatura;
- envergadura;
- perímetros segmentares;
- simetrias bilaterais;
- índices proporcionais;
- relação cintura-quadril;
- relação cintura-estatura;
- índice ombro-cintura;
- definição muscular aparente;
- pontos fortes e fracos;
- observações relacionadas ao treinamento.

Este módulo é candidato principal para o MVP inicial por entregar valor prático com menor complexidade científica que a cineantropometria completa.

### 12.3 Avaliação Nutricional

Avaliação presencial geral com foco em dieta, comportamento alimentar, necessidades energéticas, recomendações e contexto desportivo.

O módulo deverá permitir registro de:

- recordatório de 24 horas;
- diário alimentar;
- frequência alimentar;
- preferências;
- alergias;
- intolerâncias;
- hábito intestinal;
- hidratação;
- sinais clínico-nutricionais;
- dados bioquímicos;
- rotina de treinamento;
- suplementação;
- energia durante o treino;
- recuperação;
- tolerância gastrointestinal;
- estimativas de necessidade energética;
- distribuição de macronutrientes.

A prescrição dietética individualizada deve ser realizada por profissional legalmente habilitado.

### 12.4 Avaliação Cineantropométrica

Avaliação técnica avançada com foco em atletas, desempenho, composição corporal, morfologia, proporcionalidade e bioenergética.

O módulo deverá permitir registro de:

- metadados da coleta;
- idade cronológica;
- maturação biológica em jovens atletas;
- histórico de lesões;
- lado dominante;
- modalidade esportiva;
- horário da coleta;
- medidas básicas;
- dobras cutâneas;
- perímetros;
- diâmetros ósseos;
- modelo de 5 componentes;
- somatotipo Heath-Carter;
- somatocarta;
- SAD;
- Phantom Z-scores;
- índices de performance;
- TMB, GET e disponibilidade energética.

Este módulo deve ser implementado de forma modular e posterior ao núcleo inicial, devido à maior complexidade científica e operacional.

---

## 13. Relatórios Profissionais

Os relatórios exportados deverão ter aparência técnica e valor profissional.

Cada relatório deverá conter, conforme aplicável:

- nome da instituição;
- logotipo da instituição;
- dados do profissional;
- profissão ou formação;
- registro profissional, quando houver;
- assinatura ou identificação profissional, quando houver;
- dados do cliente;
- data da avaliação;
- tipo de avaliação;
- dados coletados;
- cálculos realizados;
- protocolo utilizado;
- referência do protocolo;
- interpretação profissional;
- observações;
- recomendações;
- data de emissão;
- rodapé profissional;
- aviso técnico;
- numeração de páginas.

O relatório deve preservar os dados usados no momento da emissão. Alterações futuras no perfil profissional ou institucional não devem modificar relatórios já emitidos.

---

## 14. Armazenamento e Portabilidade

### 14.1 Armazenamento Local

Os dados serão salvos localmente no dispositivo do usuário, preferencialmente usando IndexedDB ou tecnologia equivalente para persistência local em PWA.

### 14.2 Sem Sincronização Inicial

A primeira versão não terá sincronização automática entre dispositivos. Um celular, computador ou tablet terá sua própria base local.

### 14.3 Exportação e Importação Manual

A aplicação deverá permitir:

- exportar backup local;
- importar backup previamente gerado;
- transferir dados manualmente entre dispositivos;
- preservar estrutura de dados e histórico.

A estratégia exata de mesclagem, substituição ou versionamento será definida em documento próprio.

---

## 15. Segurança, Privacidade e Responsabilidade

A aplicação não terá foco em segurança robusta na primeira versão. Não haverá administrador, senha obrigatória, controle avançado de permissões ou autenticação online.

Entretanto, por lidar com dados sensíveis, a aplicação deverá ser transparente sobre suas limitações.

A aplicação deverá informar ao usuário que:

- os dados são armazenados localmente;
- a proteção do dispositivo é responsabilidade do usuário;
- backups exportados devem ser armazenados com cuidado;
- o uso em dispositivo compartilhado exige responsabilidade dos profissionais envolvidos;
- a separação entre instituições e profissionais é organizacional, não uma barreira forte de segurança;
- exclusão, backup e portabilidade dos dados dependem da ação do usuário.

Recursos avançados de segurança poderão ser adicionados em versões futuras, como senha local, criptografia de backup e sincronização segura opcional.

---

## 16. Fora do Escopo Inicial

A primeira versão não deverá incluir:

- app do cliente final;
- login online;
- autenticação remota;
- sincronização automática;
- servidor obrigatório;
- SaaS;
- painel web administrativo;
- permissões complexas;
- avaliação automática por foto;
- diagnóstico automatizado;
- inteligência artificial para laudo clínico;
- prescrição automática sem validação profissional;
- integração com WhatsApp;
- integração com e-mail;
- pagamentos;
- prontuário médico completo;
- teleatendimento;
- assinatura digital jurídica avançada;
- marketplace de protocolos.

---

## 17. Produto Mínimo Viável — MVP

O MVP deve entregar uma versão pequena, funcional e útil da aplicação, sem tentar cobrir todos os módulos avançados.

### 17.1 MVP 1 — Núcleo Local e Antropometria Básica

Funcionalidades recomendadas para a primeira entrega:

- instalação como PWA;
- funcionamento offline;
- banco local;
- cadastro de instituição;
- cadastro de profissional;
- seleção de profissional ativo;
- cadastro de cliente;
- anamnese geral simples;
- avaliação antropométrica básica;
- cálculos antropométricos iniciais;
- relatório PDF profissional;
- exportação manual de backup;
- importação manual de backup.

### 17.2 Cálculos Iniciais Sugeridos para o MVP

- IMC;
- relação cintura-quadril;
- relação cintura-estatura;
- índice ombro-cintura;
- simetria bilateral de perímetros;
- diferenças segmentares entre avaliações;
- evolução de massa corporal;
- evolução de perímetros.

### 17.3 Critério de Sucesso do MVP

O MVP será considerado funcional quando um profissional conseguir:

1. abrir a aplicação sem internet após o primeiro acesso;
2. cadastrar seus dados profissionais;
3. cadastrar um cliente;
4. realizar uma avaliação antropométrica presencial;
5. gerar cálculos básicos;
6. exportar um relatório profissional em PDF;
7. exportar um backup local;
8. importar esse backup em outra instalação.

---

## 18. Roadmap Inicial

### Fase 1 — Fundação

- PWA offline-first.
- Banco local.
- Estrutura de projeto.
- Cadastro de instituição.
- Cadastro de profissional.
- Cadastro de cliente.
- Backup e importação.

### Fase 2 — Avaliação Antropométrica

- Formulário de avaliação.
- Cálculos básicos.
- Histórico por cliente.
- Relatório PDF.
- Comparação entre avaliações.

### Fase 3 — Avaliação Postural

- Anamnese postural.
- Inspeção estática.
- Avaliação funcional.
- Relatório postural.

### Fase 4 — Avaliação Nutricional

- Anamnese dietética.
- Registro de exames.
- Rotina de treino.
- Cálculo de necessidades energéticas.
- Recomendações e relatório nutricional.

### Fase 5 — Cineantropometria

- Perfil ISAK completo.
- Somatotipo Heath-Carter.
- Modelo de 5 componentes.
- Phantom Z-scores.
- Índices de performance.
- Relatório técnico avançado.

### Fase 6 — Recursos Avançados

- senha local opcional;
- backup criptografado;
- sincronização opcional;
- modelos personalizados de relatório;
- anexos;
- assinatura digitalizada;
- empacotamento desktop/mobile, se necessário.

---

## 19. Requisitos de Qualidade

A aplicação deverá buscar:

- baixo consumo de recursos;
- boa usabilidade em telas pequenas;
- clareza nos formulários;
- validação de unidades;
- mensagens de erro compreensíveis;
- preservação dos dados brutos;
- rastreabilidade dos cálculos;
- testes automatizados para fórmulas;
- exportação de documentos legíveis;
- funcionamento confiável offline;
- código organizado e documentado;
- facilidade de manutenção por desenvolvedor individual.

---

## 20. Critérios de Sucesso do Produto

O produto será bem-sucedido se conseguir:

- ser usado por profissionais sem mensalidade;
- funcionar de forma confiável offline;
- gerar relatórios com aparência profissional;
- reduzir dependência de planilhas improvisadas;
- preservar histórico de avaliações;
- aplicar cálculos de forma consistente;
- permitir auditoria das fórmulas por ser open source;
- ser simples o suficiente para adoção por profissionais autônomos;
- ser modular o suficiente para crescer com novos protocolos.

---

## 21. Riscos Principais

### 21.1 Escopo Excessivo

O produto envolve várias áreas técnicas e científicas. O risco de tentar implementar tudo de uma vez é alto.

Mitigação: desenvolver por fases, começando pelo núcleo local e antropometria básica.

### 21.2 Erros em Cálculos Científicos

Fórmulas mal implementadas podem gerar resultados incorretos.

Mitigação: documentar referências, unidades, pré-condições e criar testes automatizados para cada fórmula.

### 21.3 Perda de Dados Locais

Como os dados ficam no dispositivo, o usuário pode perdê-los em caso de dano, limpeza do navegador ou troca de aparelho.

Mitigação: implementar backup/exportação desde o MVP e avisos claros sobre responsabilidade do usuário.

### 21.4 Expectativa de Segurança Maior que a Real

Usuários podem imaginar que a separação entre profissionais é uma segurança forte.

Mitigação: deixar claro que a separação é organizacional e que o controle do dispositivo é responsabilidade do usuário.

### 21.5 Complexidade da Cineantropometria

O módulo cineantropométrico exige grande quantidade de medidas, protocolos e referências.

Mitigação: implementá-lo depois da base da aplicação e de avaliações mais simples.

---

## 22. Decisões Consolidadas

- A aplicação será uma PWA.
- A aplicação será offline-first.
- O uso será exclusivamente profissional.
- Avaliações serão presenciais.
- Não haverá avaliação automática por fotos.
- Os dados serão locais.
- Não haverá sincronização automática na primeira versão.
- Não haverá backend obrigatório na primeira versão.
- Não haverá conta online.
- Não haverá administrador.
- A separação entre profissionais será organizacional.
- O projeto será gratuito.
- O projeto será open source.
- A licença será MIT.
- O primeiro foco funcional será a avaliação antropométrica básica.
- A cineantropometria completa será tratada como módulo avançado.

---

## 23. Questões em Aberto

As seguintes decisões ainda precisam ser fechadas em documentos posteriores:

- nome oficial da aplicação;
- identidade visual;
- termo principal para a pessoa avaliada: cliente, aluno, paciente, atleta ou avaliado;
- stack técnica definitiva;
- formato exato do backup;
- estratégia de importação: substituir, mesclar ou escolher;
- lista inicial de protocolos antropométricos;
- lista inicial de fórmulas nutricionais;
- modelo visual do relatório PDF;
- estrutura detalhada do banco local;
- estratégia de versionamento de dados;
- padrão de testes para fórmulas;
- avisos legais e termos de responsabilidade;
- política de contribuição open source.
