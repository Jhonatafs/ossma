# Ficha de Anamnese Geral do Cliente

## 1. Identificação do cliente

Esses campos pertencem ao cadastro básico e serão usados em relatórios, histórico e identificação.

| Campo                                  |          Tipo | Obrigatório |
| -------------------------------------- | ------------: | ----------: |
| Nome completo                          |         texto |         sim |
| Nome social/apelido, se houver         |         texto |         não |
| Data de nascimento                     |          data |         sim |
| Sexo biológico                         |       seleção |         sim |
| Gênero, se necessário para atendimento | seleção/texto |         não |
| CPF/documento                          |         texto |    opcional |
| Telefone/WhatsApp                      |         texto |         sim |
| E-mail                                 |         texto |    opcional |
| Endereço/cidade                        |         texto |    opcional |
| Profissão/ocupação                     |         texto |    opcional |
| Responsável legal, se menor de idade   |         texto | condicional |
| Telefone do responsável                |         texto | condicional |
| Contato de emergência                  |         texto |         sim |
| Telefone do contato de emergência      |         texto |         sim |

**Observação de produto:** CPF, endereço e gênero não devem ser obrigatórios no MVP, salvo se a clínica precisar. São úteis, mas aumentam coleta de dados sensíveis ou identificáveis.

---

## 2. Consentimento, ciência e privacidade

Essa seção deve aparecer no cadastro antes de salvar a anamnese.

| Campo                                                                                                        |       Tipo | Obrigatório |
| ------------------------------------------------------------------------------------------------------------ | ---------: | ----------: |
| Cliente declara que as informações fornecidas são verdadeiras                                                |   checkbox |         sim |
| Cliente autoriza o uso dos dados para cadastro, avaliações e relatórios profissionais                        |   checkbox |         sim |
| Cliente entende que a ficha não substitui consulta médica, fisioterapêutica ou nutricional quando necessária |   checkbox |         sim |
| Cliente autoriza contato para assuntos relacionados ao atendimento                                           |   checkbox |    opcional |
| Responsável legal confirma ciência, se menor de idade                                                        |   checkbox | condicional |
| Data da confirmação                                                                                          | automático |         sim |
| Profissional responsável pelo cadastro                                                                       |    vínculo |         sim |

Texto sugerido:

> Declaro que as informações fornecidas são verdadeiras e completas até onde tenho conhecimento. Entendo que estes dados serão utilizados para cadastro, avaliações, acompanhamento e emissão de relatórios profissionais. Estou ciente de que esta anamnese não substitui avaliação médica, fisioterapêutica, nutricional ou de outro profissional habilitado quando houver necessidade.

---

## 3. Objetivo principal do cliente

Aqui você evita perguntas demais e já dá contexto para qualquer avaliação futura.

| Campo                       |             Tipo | Obrigatório |
| --------------------------- | ---------------: | ----------: |
| Objetivo principal          | seleção múltipla |         sim |
| Descrição livre do objetivo |      texto curto |    opcional |
| Prazo ou evento-alvo        |       texto/data |    opcional |
| Prioridade do cliente       |          seleção |    opcional |

Sugestões para **objetivo principal**:

- Saúde geral
- Emagrecimento
- Hipertrofia/ganho de massa
- Condicionamento físico
- Performance esportiva
- Reabilitação/retorno à atividade
- Dor/desconforto
- Melhora postural
- Acompanhamento nutricional
- Estética
- Qualidade de vida
- Outro

---

## 4. Estado geral de saúde

Esta é uma das partes centrais. Use perguntas de triagem com resposta simples e campo aberto condicional.

| Pergunta                                                                                   |            Tipo |
| ------------------------------------------------------------------------------------------ | --------------: |
| Possui alguma doença ou condição de saúde diagnosticada?                                   |         sim/não |
| Se sim, qual(is)?                                                                          |     texto/lista |
| Já foi orientado por médico ou profissional de saúde a evitar ou limitar atividade física? |         sim/não |
| Possui doença cardíaca, pressão alta, arritmia ou histórico cardiovascular?                | sim/não/não sei |
| Possui diabetes, resistência à insulina ou alteração glicêmica?                            | sim/não/não sei |
| Possui doença renal, hepática, respiratória ou metabólica?                                 | sim/não/não sei |
| Tem ou teve câncer, doença autoimune, neurológica ou outra condição relevante?             |         sim/não |
| Já realizou cirurgia importante?                                                           |         sim/não |
| Se sim, qual e quando?                                                                     |           texto |
| Está em acompanhamento médico, fisioterapêutico, nutricional ou psicológico atualmente?    |         sim/não |
| Se sim, com qual profissional/especialidade?                                               |           texto |

**Regra de interface:** mostre o campo “detalhar” apenas quando a resposta for “sim” ou “não sei”. Isso deixa a ficha compacta sem perder densidade.

---

## 5. Sinais de alerta e segurança para exercício

Essa seção serve para orientar encaminhamento, cautela ou liberação profissional, sem diagnosticar.

| Pergunta                                                                            |              Tipo |
| ----------------------------------------------------------------------------------- | ----------------: |
| Sente dor ou aperto no peito em repouso ou durante esforço?                         |           sim/não |
| Sente falta de ar desproporcional ao esforço?                                       |           sim/não |
| Já teve desmaio, perda de consciência ou tontura frequente?                         |           sim/não |
| Sente palpitações, batimentos irregulares ou taquicardia sem causa aparente?        |           sim/não |
| Tem dor forte, recente ou progressiva em articulações, músculos, coluna ou tendões? |           sim/não |
| Teve lesão nos últimos 12 meses que limita movimento ou exercício?                  |           sim/não |
| Está com febre, infecção, mal-estar importante ou condição aguda no momento?        |           sim/não |
| Há alguma atividade que você sabe que não deve fazer?                               |           sim/não |
| Detalhes dos sinais ou limitações                                                   | texto condicional |

**Regra sugerida para o sistema:** se qualquer resposta de alerta for “sim”, marcar a anamnese com status `requiresProfessionalAttention`. Isso não bloqueia o cadastro, apenas avisa o profissional.

---

## 6. Medicamentos, alergias e restrições

Esses dados são úteis para praticamente todas as áreas: educação física, fisioterapia e nutrição.

| Pergunta                                                                     |        Tipo |
| ---------------------------------------------------------------------------- | ----------: |
| Usa medicamentos atualmente?                                                 |     sim/não |
| Quais medicamentos, dose e frequência?                                       | lista/texto |
| Usa suplemento alimentar?                                                    |     sim/não |
| Quais suplementos?                                                           | lista/texto |
| Possui alergia a medicamento, alimento, látex, adesivo ou outro item?        |     sim/não |
| Quais alergias e reação apresentada?                                         |       texto |
| Possui restrição alimentar por saúde, religião, preferência ou intolerância? |     sim/não |
| Quais restrições?                                                            |       texto |
| Já teve reação adversa durante exercício, dieta, suplemento ou tratamento?   |     sim/não |
| Detalhar reação adversa                                                      |       texto |

---

## 7. Dor, lesões e limitações funcionais

Essa parte alimenta bem avaliações físicas, fisioterapêuticas, posturais e cineantropométricas.

| Pergunta                                                                           |                              Tipo |
| ---------------------------------------------------------------------------------- | --------------------------------: |
| Sente dor atualmente?                                                              |                           sim/não |
| Local da dor                                                                       | seleção por região corporal/texto |
| Intensidade da dor de 0 a 10                                                       |                            escala |
| Frequência da dor                                                                  |      eventual/frequente/constante |
| O que piora?                                                                       |                             texto |
| O que melhora?                                                                     |                             texto |
| A dor limita trabalho, treino, sono ou atividades diárias?                         |                           sim/não |
| Já teve fratura, entorse, luxação, hérnia, lesão muscular, ligamentar ou tendínea? |                           sim/não |
| Detalhes da lesão e data aproximada                                                |                             texto |
| Possui limitação de movimento conhecida?                                           |                           sim/não |
| Usa órtese, palmilha, bengala, muleta ou outro apoio?                              |                           sim/não |

---

## 8. Histórico familiar relevante

Não precisa virar prontuário médico extenso. O ideal é perguntar por grandes grupos.

| Pergunta                                                                                  |            Tipo |
| ----------------------------------------------------------------------------------------- | --------------: |
| Há histórico familiar de doença cardiovascular precoce?                                   | sim/não/não sei |
| Há histórico familiar de hipertensão, diabetes ou dislipidemia?                           | sim/não/não sei |
| Há histórico familiar de obesidade, câncer, doença renal ou outras condições importantes? | sim/não/não sei |
| Detalhes, se souber                                                                       |           texto |

---

## 9. Hábitos e estilo de vida

Esses dados ajudam em avaliações nutricionais, físicas e de risco geral.

| Pergunta                                     |                     Tipo |
| -------------------------------------------- | -----------------------: |
| Pratica atividade física atualmente?         |                  sim/não |
| Tipo de atividade                            |              texto/lista |
| Frequência semanal                           |                   número |
| Duração média por sessão                     |                   número |
| Intensidade percebida                        |    leve/moderada/intensa |
| Há quanto tempo pratica?                     |                    texto |
| Já treinou antes?                            |                  sim/não |
| Tabagismo                                    | nunca/ex-fumante/fumante |
| Consumo de álcool                            |  não/ocasional/frequente |
| Sono médio por noite                         |          número de horas |
| Qualidade do sono                            |         boa/regular/ruim |
| Nível de estresse percebido                  |      baixo/moderado/alto |
| Trabalho/rotina envolve muito tempo sentado? |                  sim/não |
| Observações sobre rotina                     |                    texto |

Aqui, a recomendação geral do ACSM para adultos saudáveis usa atividade aeróbica moderada ou vigorosa e fortalecimento muscular como referência de prática física regular, então frequência, duração e intensidade são campos úteis para qualquer triagem inicial. ([ACSM][2])

---

## 10. Saúde feminina/reprodutiva, quando aplicável

Não coloque isso como tela obrigatória para todos. Use pergunta condicional.

| Pergunta                               |                          Tipo |
| -------------------------------------- | ----------------------------: |
| Esta seção se aplica ao cliente?       | sim/não/prefere não responder |
| Está gestante ou suspeita de gravidez? |               sim/não/não sei |
| Está no pós-parto?                     |                       sim/não |
| Amamenta atualmente?                   |                       sim/não |
| Ciclo menstrual é regular?             |         sim/não/não se aplica |
| Usa contraceptivo hormonal ou DIU?     |                       sim/não |
| Observações relevantes                 |                         texto |

## 12. Resumo técnico automático

Esse campo não é preenchido pelo cliente. O sistema gera.

| Campo                                     | Origem               |
| ----------------------------------------- | -------------------- |
| Cliente possui alerta de saúde?           | respostas da seção 5 |
| Cliente possui doença/condição declarada? | seção 4              |
| Usa medicamentos?                         | seção 6              |
| Tem dor atual?                            | seção 7              |
| Tem restrição alimentar?                  | seção 6/10           |
| Pratica atividade física atualmente?      | seção 9              |
| Requer consentimento de responsável?      | idade                |
| Anamnese está completa?                   | campos obrigatórios  |
| Data da última atualização                | automático           |

Exemplo de resumo:

> Cliente adulto, objetivo principal: emagrecimento e saúde geral. Declara hipertensão controlada, usa medicamento contínuo, pratica caminhada 2x/semana, relata dor lombar leve. Possui sinalização para atenção profissional antes de atividade intensa.

---

# Versão compacta da ficha

Para não ficar grande demais, eu dividiria a anamnese assim:

## Obrigatória no cadastro

1. Identificação básica
2. Contato de emergência
3. Consentimento e ciência
4. Objetivo principal
5. Histórico familiar
6. Saúde feminina/reprodutiva (Se melher biológica)
7. Estado geral de saúde
8. Sinais de alerta
9. Medicamentos e alergias
10. Dor/lesão atual
11. Atividade física atual
12. Sono, tabagismo e álcool
13. Restrições alimentares básicas

Essa divisão deixa a ficha **básica, porém densa**: ela recolhe o essencial, mas só aprofunda quando existe resposta positiva.

---

# Regra de reutilização nas avaliações

Cada pergunta da anamnese geral deve ter uma **chave estável**, para que avaliações específicas possam puxar a resposta.

Exemplos:

| Pergunta geral              | Chave sugerida                      | Usada em                           |
| --------------------------- | ----------------------------------- | ---------------------------------- |
| Usa medicamentos?           | `health.currentMedications`         | antropometria, nutrição, fisio     |
| Possui dor atual?           | `pain.hasCurrentPain`               | fisioterapia, postural, treino     |
| Local da dor                | `pain.currentPainLocation`          | fisioterapia, cineantropometria    |
| Pratica atividade física?   | `lifestyle.physicalActivityStatus`  | todas as avaliações físicas        |
| Possui restrição alimentar? | `nutrition.foodRestrictions`        | nutrição, composição corporal      |
| Está gestante?              | `reproductive.isPregnant`           | antropometria, nutrição, exercício |
| Tem doença cardiovascular?  | `health.hasCardiovascularCondition` | exercício, antropometria, fisio    |
| Assinou ciência/veracidade? | `consent.truthDeclarationAccepted`  | relatórios                         |

Regra importante:

> Quando uma avaliação específica alterar uma resposta que veio da anamnese geral, o sistema deve perguntar: “Deseja atualizar também a anamnese geral do cliente?”
> Se sim, atualiza o cadastro. Se não, salva apenas o snapshot daquela avaliação.

---

# Modelo final recomendado para o MVP

Para o MVP, eu usaria esta ordem:

1. Dados do cliente
2. Responsável e emergência
3. Consentimento
4. Objetivo principal
5. Saúde geral
6. Sinais de alerta
7. Medicamentos, alergias e restrições
8. Dor, lesões e limitações
9. Atividade física e rotina
10. Alimentação/hidratação básica
11. Saúde feminina/reprodutiva, condicional
12. Observações finais
13. Confirmação de veracidade
