# Mapa de Cálculos - Avaliação Antropométrica Simples

**Unidades padrão:**

- massa corporal em `kg`,
- estatura em `cm` no cadastro,
- estatura convertida para `m` no IMC,
- dobras em `mm`, perímetros em `cm`,
- diâmetros em `cm`,
- idade em anos completos e,
- para curvas pediátricas, idade em meses.

---

## Seção — Anamnese da Avaliação Antropométrica

Esta seção deve ser preenchida com **dados puxados da anamnese geral do cliente** e com **campos específicos da avaliação antropométrica**. Quando uma pergunta já existir na ficha do cliente, manter exatamente o mesmo nome da seção e da pergunta, permitindo editar a resposta durante a avaliação. A estrutura considera que a avaliação antropométrica pode atender objetivos de triagem, perimetria, dobras cutâneas, composição corporal, acompanhamento evolutivo e cálculos energéticos.

---

### 1. Dados do cliente

| Campo                      | Origem           | Obrigatório |
| -------------------------- | ---------------- | ----------: |
| Nome completo              | ficha do cliente |         sim |
| Data de nascimento         | ficha do cliente |         sim |
| Idade na data da avaliação | automático       |         sim |
| Sexo biológico             | ficha do cliente |         sim |
| Telefone/WhatsApp          | ficha do cliente |         não |
| E-mail                     | ficha do cliente |         não |
| Profissão/ocupação         | ficha do cliente |         não |

---

### 2. Responsável e emergência

| Campo                                | Origem           | Obrigatório |
| ------------------------------------ | ---------------- | ----------: |
| Responsável legal, se menor de idade | ficha do cliente | condicional |
| Telefone do responsável              | ficha do cliente | condicional |
| Contato de emergência                | ficha do cliente |         sim |
| Telefone do contato de emergência    | ficha do cliente |         sim |

---

### 3. Consentimento

| Campo                                                                                                                 | Origem                   | Obrigatório |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------ | ----------: |
| Cliente declara que as informações fornecidas são verdadeiras                                                         | ficha do cliente         |         sim |
| Cliente autoriza o uso dos dados para cadastro, avaliações e relatórios profissionais                                 | ficha do cliente         |         sim |
| Cliente entende que a ficha não substitui consulta médica, fisioterapêutica ou nutricional quando necessária          | ficha do cliente         |         sim |
| Responsável legal confirma ciência, se menor de idade                                                                 | ficha do cliente         | condicional |
| Cliente autoriza aferição de peso, estatura, perímetros e dobras cutâneas necessárias para a avaliação antropométrica | avaliação antropométrica |         sim |
| Cliente foi informado de que algumas medidas exigem contato físico profissional                                       | avaliação antropométrica |         sim |
| Cliente autoriza registro dos resultados no histórico antropométrico                                                  | avaliação antropométrica |         sim |

---

### 4. Objetivo principal

| Campo                            | Origem                   | Obrigatório |
| -------------------------------- | ------------------------ | ----------: |
| Objetivo principal               | ficha do cliente         |         sim |
| Descrição livre do objetivo      | ficha do cliente         |         não |
| Prazo ou evento-alvo             | ficha do cliente         |         não |
| Prioridade do cliente            | ficha do cliente         |         não |
| Foco da avaliação antropométrica | avaliação antropométrica |         sim |

**Opções para Foco da avaliação antropométrica:**

- Avaliação inicial
- Acompanhamento de evolução
- Emagrecimento / redução de gordura corporal
- Hipertrofia / ganho de massa muscular
- Manutenção corporal
- Saúde geral / triagem antropométrica
- Performance esportiva
- Acompanhamento nutricional
- Retorno ao treino
- Outro

---

### 5. Saúde geral

| Pergunta                                                                                   | Origem           | Obrigatório |
| ------------------------------------------------------------------------------------------ | ---------------- | ----------: |
| Possui alguma doença ou condição de saúde diagnosticada?                                   | ficha do cliente |         sim |
| Se sim, qual(is)?                                                                          | ficha do cliente | condicional |
| Já foi orientado por médico ou profissional de saúde a evitar ou limitar atividade física? | ficha do cliente |         sim |
| Possui doença cardíaca, pressão alta, arritmia ou histórico cardiovascular?                | ficha do cliente |         sim |
| Possui diabetes, resistência à insulina ou alteração glicêmica?                            | ficha do cliente |         sim |
| Possui doença renal, hepática, respiratória ou metabólica?                                 | ficha do cliente |         sim |
| Tem ou teve câncer, doença autoimune, neurológica ou outra condição relevante?             | ficha do cliente |         sim |
| Já realizou cirurgia importante?                                                           | ficha do cliente |         sim |
| Se sim, qual e quando?                                                                     | ficha do cliente | condicional |
| Está em acompanhamento médico, fisioterapêutico, nutricional ou psicológico atualmente?    | ficha do cliente |         sim |
| Se sim, com qual profissional/especialidade?                                               | ficha do cliente | condicional |

---

### 6. Sinais de alerta

| Pergunta                                                                            | Origem           | Obrigatório |
| ----------------------------------------------------------------------------------- | ---------------- | ----------: |
| Sente dor ou aperto no peito em repouso ou durante esforço?                         | ficha do cliente |         sim |
| Sente falta de ar desproporcional ao esforço?                                       | ficha do cliente |         sim |
| Já teve desmaio, perda de consciência ou tontura frequente?                         | ficha do cliente |         sim |
| Sente palpitações, batimentos irregulares ou taquicardia sem causa aparente?        | ficha do cliente |         sim |
| Tem dor forte, recente ou progressiva em articulações, músculos, coluna ou tendões? | ficha do cliente |         sim |
| Teve lesão nos últimos 12 meses que limita movimento ou exercício?                  | ficha do cliente |         sim |
| Está com febre, infecção, mal-estar importante ou condição aguda no momento?        | ficha do cliente |         sim |
| Há alguma atividade que você sabe que não deve fazer?                               | ficha do cliente |         sim |
| Detalhes dos sinais ou limitações                                                   | ficha do cliente | condicional |

---

### 7. Medicamentos, alergias e restrições

| Pergunta                                                                                                                                                           | Origem                   | Obrigatório |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ----------: |
| Usa medicamentos atualmente?                                                                                                                                       | ficha do cliente         |         sim |
| Quais medicamentos, dose e frequência?                                                                                                                             | ficha do cliente         | condicional |
| Usa suplemento alimentar?                                                                                                                                          | ficha do cliente         |         sim |
| Quais suplementos?                                                                                                                                                 | ficha do cliente         | condicional |
| Possui alergia a medicamento, alimento, látex, adesivo ou outro item?                                                                                              | ficha do cliente         |         sim |
| Quais alergias e reação apresentada?                                                                                                                               | ficha do cliente         | condicional |
| Possui restrição alimentar por saúde, religião, preferência ou intolerância?                                                                                       | ficha do cliente         |         sim |
| Quais restrições?                                                                                                                                                  | ficha do cliente         | condicional |
| Já teve reação adversa durante exercício, dieta, suplemento ou tratamento?                                                                                         | ficha do cliente         |         sim |
| Detalhar reação adversa                                                                                                                                            | ficha do cliente         | condicional |
| Usa diurético, hormônio, corticoide, anticoncepcional, anti-inflamatório frequente ou medicamento que possa alterar peso, retenção hídrica ou composição corporal? | avaliação antropométrica |         sim |
| Usa creatina ou outro suplemento que possa alterar peso corporal, volume muscular, hidratação ou desempenho?                                                       | avaliação antropométrica |         sim |

---

### 8. Dor, lesões e limitações

| Pergunta                                                                            | Origem                   | Obrigatório |
| ----------------------------------------------------------------------------------- | ------------------------ | ----------: |
| Sente dor atualmente?                                                               | ficha do cliente         |         sim |
| Local da dor                                                                        | ficha do cliente         | condicional |
| Intensidade da dor de 0 a 10                                                        | ficha do cliente         | condicional |
| Frequência da dor                                                                   | ficha do cliente         | condicional |
| O que piora?                                                                        | ficha do cliente         | condicional |
| O que melhora?                                                                      | ficha do cliente         | condicional |
| A dor limita trabalho, treino, sono ou atividades diárias?                          | ficha do cliente         | condicional |
| Já teve fratura, entorse, luxação, hérnia, lesão muscular, ligamentar ou tendínea?  | ficha do cliente         |         sim |
| Detalhes da lesão e data aproximada                                                 | ficha do cliente         | condicional |
| Possui limitação de movimento conhecida?                                            | ficha do cliente         |         sim |
| Usa órtese, palmilha, bengala, muleta ou outro apoio?                               | ficha do cliente         |         sim |
| Há feridas, lesões de pele, dor local ou desconforto em alguma região a ser medida? | avaliação antropométrica |         sim |
| Alguma região corporal não deve ser medida hoje?                                    | avaliação antropométrica |         sim |
| Regiões que não devem ser medidas                                                   | avaliação antropométrica | condicional |

---

### 9. Atividade física e rotina

| Pergunta                                                 | Origem                   | Obrigatório |
| -------------------------------------------------------- | ------------------------ | ----------: |
| Pratica atividade física atualmente?                     | ficha do cliente         |         sim |
| Tipo de atividade                                        | ficha do cliente         | condicional |
| Frequência semanal                                       | ficha do cliente         | condicional |
| Duração média por sessão                                 | ficha do cliente         | condicional |
| Intensidade percebida                                    | ficha do cliente         | condicional |
| Há quanto tempo pratica?                                 | ficha do cliente         | condicional |
| Já treinou antes?                                        | ficha do cliente         |         sim |
| Tabagismo                                                | ficha do cliente         |         sim |
| Consumo de álcool                                        | ficha do cliente         |         sim |
| Sono médio por noite                                     | ficha do cliente         |         sim |
| Qualidade do sono                                        | ficha do cliente         |         sim |
| Nível de estresse percebido                              | ficha do cliente         |         sim |
| Trabalho/rotina envolve muito tempo sentado?             | ficha do cliente         |         sim |
| Observações sobre rotina                                 | ficha do cliente         |         não |
| Praticou treino intenso nas últimas 24 horas?            | avaliação antropométrica |         sim |
| Ingeriu bebida alcoólica nas últimas 24 horas?           | avaliação antropométrica |         sim |
| Dormiu muito mal na noite anterior?                      | avaliação antropométrica |         sim |
| Fator de atividade para cálculo energético, se aplicável | avaliação antropométrica | condicional |

---

### 10. Alimentação/hidratação básica

| Pergunta                                                      | Origem                   | Obrigatório |
| ------------------------------------------------------------- | ------------------------ | ----------: |
| Quantas refeições costuma fazer por dia?                      | ficha do cliente         |         não |
| Tem rotina alimentar regular?                                 | ficha do cliente         |         sim |
| Consumo de água aproximado por dia                            | ficha do cliente         |         não |
| Tem dificuldade alimentar importante?                         | ficha do cliente         |         sim |
| Qual dificuldade?                                             | ficha do cliente         | condicional |
| Segue alguma dieta atualmente?                                | ficha do cliente         |         sim |
| Qual dieta ou orientação?                                     | ficha do cliente         | condicional |
| Possui intolerância alimentar diagnosticada?                  | ficha do cliente         |         sim |
| Qual?                                                         | ficha do cliente         | condicional |
| Evacuação intestinal                                          | ficha do cliente         |         não |
| Observações nutricionais gerais                               | ficha do cliente         |         não |
| Fez refeição pesada nas últimas 3 horas?                      | avaliação antropométrica |         sim |
| Está em jejum prolongado ou restrição alimentar intensa hoje? | avaliação antropométrica |         sim |
| Percebe retenção de líquido, inchaço ou edema hoje?           | avaliação antropométrica |         sim |
| Teve alteração intestinal importante nos últimos dias?        | avaliação antropométrica |         sim |
| Ingestão energética diária estimada, se conhecida             | avaliação antropométrica |    opcional |
| Está em déficit calórico, superávit calórico ou manutenção?   | avaliação antropométrica |    opcional |

---

### 11. Saúde feminina/reprodutiva, condicional

| Pergunta                                                                       | Origem                   | Obrigatório |
| ------------------------------------------------------------------------------ | ------------------------ | ----------: |
| Esta seção se aplica ao cliente?                                               | ficha do cliente         |         sim |
| Está gestante ou suspeita de gravidez?                                         | ficha do cliente         | condicional |
| Está no pós-parto?                                                             | ficha do cliente         | condicional |
| Amamenta atualmente?                                                           | ficha do cliente         | condicional |
| Ciclo menstrual é regular?                                                     | ficha do cliente         | condicional |
| Usa contraceptivo hormonal ou DIU?                                             | ficha do cliente         | condicional |
| Está em período menstrual ou pré-menstrual com alteração corporal perceptível? | avaliação antropométrica | condicional |
| Observações relevantes                                                         | ficha do cliente         |         não |

---

### 12. Observações finais

| Campo                                                      | Origem                   | Obrigatório |
| ---------------------------------------------------------- | ------------------------ | ----------: |
| Observações pessoais relevantes para o atendimento         | ficha do cliente         |         não |
| Observações finais da anamnese geral                       | ficha do cliente         |         não |
| Observações específicas para esta avaliação antropométrica | avaliação antropométrica |         não |
| Observações técnicas do profissional                       | avaliação antropométrica |         não |

---

### 13. Confirmação de veracidade

| Campo                                                                                                                                                                                      | Origem                   | Obrigatório |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ----------: |
| Cliente confirma que as informações da anamnese geral são verdadeiras                                                                                                                      | ficha do cliente         |         sim |
| Cliente confirma que as informações específicas desta avaliação antropométrica são verdadeiras                                                                                             | avaliação antropométrica |         sim |
| Cliente entende que alimentação, hidratação, treino recente, sono, ciclo menstrual, medicamentos, retenção de líquido e condições de saúde podem interferir nos resultados antropométricos | avaliação antropométrica |         sim |
| Profissional confirma que revisou a anamnese antes da coleta das medidas                                                                                                                   | avaliação antropométrica |         sim |
| Data e hora da confirmação                                                                                                                                                                 | automático               |         sim |
| Profissional avaliador                                                                                                                                                                     | avaliação antropométrica |         sim |

---

## Índices de Triagem

- **IMC** `[massa corporal (kg), estatura (m)]`
- **Classificação do IMC adulto** `[IMC, idade]`
- **IMC por idade - opcional para adolescentes** `[massa corporal (kg), estatura (m), sexo biológico, idade em meses, referência OMS]`
- **RCQ - Relação Cintura-Quadril** `[circunferência da cintura (cm), circunferência do quadril (cm)]`
- **RCEst - Relação Cintura-Estatura** `[circunferência da cintura (cm), estatura (cm)]`
- **Classificação da cintura** `[circunferência da cintura (cm), sexo biológico, idade, ponto de corte adotado]`

---

## Perimetria e Acompanhamento Corporal

### Perímetros principais

- **Cintura** `[circunferência da cintura (cm)]`
- **Quadril** `[circunferência do quadril (cm)]`
- **Abdome** `[circunferência abdominal (cm)]`
- **Tórax** `[circunferência torácica (cm)]`
- **Braço relaxado** `[circunferência do braço relaxado (cm)]`
- **Braço contraído** `[circunferência do braço contraído (cm)]`
- **Antebraço** `[circunferência do antebraço (cm)]`
- **Coxa** `[circunferência da coxa (cm)]`
- **Panturrilha** `[circunferência da panturrilha (cm)]`

### Assimetrias simples

- **Assimetria de braços** `[braço direito (cm), braço esquerdo (cm)]`
- **Assimetria de antebraços** `[antebraço direito (cm), antebraço esquerdo (cm)]`
- **Assimetria de coxas** `[coxa direita (cm), coxa esquerda (cm)]`
- **Assimetria de panturrilhas** `[panturrilha direita (cm), panturrilha esquerda (cm)]`

### Evolução de perímetros

- **Variação da cintura** `[cintura atual (cm), cintura anterior (cm)]`
- **Variação do quadril** `[quadril atual (cm), quadril anterior (cm)]`
- **Variação do braço** `[braço atual (cm), braço anterior (cm)]`
- **Variação da coxa** `[coxa atual (cm), coxa anterior (cm)]`
- **Variação da panturrilha** `[panturrilha atual (cm), panturrilha anterior (cm)]`

---

## Dobras Cutâneas Básicas

### Dobras recomendadas para avaliação simples

- **Dobra tricipital** `[dobra tricipital (mm)]`
- **Dobra subescapular** `[dobra subescapular (mm)]`
- **Dobra supra-ilíaca** `[dobra supra-ilíaca (mm)]`
- **Dobra abdominal** `[dobra abdominal (mm)]`
- **Dobra peitoral** `[dobra peitoral (mm)]`
- **Dobra da coxa** `[dobra da coxa (mm)]`

### Dobras opcionais

- **Dobra bicipital** `[dobra bicipital (mm)]`
- **Dobra axilar média** `[dobra axilar média (mm)]`
- **Dobra panturrilha medial** `[dobra panturrilha medial (mm)]`

Para academia e personal, o ideal é que o app permita protocolos simples primeiro. Protocolos longos podem existir, mas não devem ser obrigatórios.

---

## Percentual de Gordura - Crianças (de 8 anos) e Adolescentes (Até 15 anos)

### Slaughter et al. - adolescentes

- **%G Slaughter - meninos, Σ2 ≤ 35 mm** `[sexo biológico, idade, dobra tricipital (mm), dobra subescapular (mm)]`
- **%G Slaughter - meninos, Σ2 > 35 mm** `[sexo biológico, idade, dobra tricipital (mm), dobra subescapular (mm)]`
- **%G Slaughter - meninas, Σ2 ≤ 35 mm** `[sexo biológico, idade, dobra tricipital (mm), dobra subescapular (mm)]`
- **%G Slaughter - meninas, Σ2 > 35 mm** `[sexo biológico, idade, dobra tricipital (mm), dobra subescapular (mm)]`

---

## Percentual de Gordura - Adultos e Jovens Adultos (16+)

## Protocolos principais para avaliação simples

### Jackson-Pollock 3 Dobras

#### Homens adultos

- **%G Jackson-Pollock 3 dobras - homens** `[sexo biológico, idade, dobra peitoral (mm), dobra abdominal (mm), dobra da coxa (mm), conversão Siri ou Brozek]`

#### Mulheres adultas

- **%G Jackson-Pollock 3 dobras - mulheres** `[sexo biológico, idade, dobra tricipital (mm), dobra supra-ilíaca (mm), dobra da coxa (mm), conversão Siri ou Brozek]`

Esse é o melhor protocolo para entrar como **padrão prático** da avaliação antropométrica simples. Tem poucas medidas, é conhecido e funciona bem para uso de academia quando bem aplicado.

---

### Guedes 3 Dobras - opcional brasileiro

#### Homens adultos jovens

- **%G Guedes - homens** `[sexo biológico, idade, dobra tricipital (mm), dobra supra-ilíaca (mm), dobra abdominal (mm), conversão Siri]`

#### Mulheres adultas jovens

- **%G Guedes - mulheres** `[sexo biológico, idade, dobra da coxa (mm), dobra supra-ilíaca (mm), dobra subescapular (mm), conversão Siri]`

Guedes pode entrar como opção por ser conhecido no Brasil, mas eu não o colocaria como padrão universal. Ele deve ficar como **protocolo selecionável**.

---

## Protocolos complementares

### Durnin-Womersley 4 Dobras

#### Homens

- **%G Durnin-Womersley - homens** `[sexo biológico, idade/faixa etária, dobra bicipital (mm), dobra tricipital (mm), dobra subescapular (mm), dobra supra-ilíaca (mm), conversão Siri ou Brozek]`

#### Mulheres

- **%G Durnin-Womersley - mulheres** `[sexo biológico, idade/faixa etária, dobra bicipital (mm), dobra tricipital (mm), dobra subescapular (mm), dobra supra-ilíaca (mm), conversão Siri ou Brozek]`

Boa opção quando o profissional prefere um protocolo curto e tradicional.

---

### Peterson 4 Dobras - opcional mais técnico

#### Homens adultos

- **%G Peterson - homens** `[sexo biológico, idade, estatura (cm), dobra tricipital (mm), dobra subescapular (mm), dobra supra-ilíaca/crista ilíaca (mm), dobra da coxa média (mm)]`

#### Mulheres adultas

- **%G Peterson - mulheres** `[sexo biológico, idade, massa corporal (kg), estatura (cm), IMC, dobra tricipital (mm), dobra subescapular (mm), dobra supra-ilíaca/crista ilíaca (mm), dobra da coxa média (mm)]`

Peterson é tecnicamente interessante, mas talvez não deva ser o primeiro protocolo exibido para usuário comum. Melhor deixá-lo como opção avançada.

---

## Protocolos opcionais avançados, mas ainda antropométricos

### Jackson-Pollock 7 Dobras

#### Homens adultos

- **%G Jackson-Pollock 7 dobras - homens** `[sexo biológico, idade, dobra peitoral (mm), dobra axilar média (mm), dobra tricipital (mm), dobra subescapular (mm), dobra abdominal (mm), dobra supra-ilíaca (mm), dobra da coxa (mm), conversão Siri ou Brozek]`

#### Mulheres adultas

- **%G Jackson-Pollock 7 dobras - mulheres** `[sexo biológico, idade, dobra peitoral (mm), dobra axilar média (mm), dobra tricipital (mm), dobra subescapular (mm), dobra abdominal (mm), dobra supra-ilíaca (mm), dobra da coxa (mm), conversão Siri ou Brozek]`

Esse protocolo ainda cabe na avaliação antropométrica, mas eu não o colocaria como fluxo principal. Ele exige mais medidas e mais habilidade.

---

## Composição Corporal Simples

Esses cálculos dependem de um `%G` previamente calculado por algum protocolo.

- **Massa gorda** `[massa corporal (kg), percentual de gordura (%G)]`
- **Massa livre de gordura** `[massa corporal (kg), massa gorda (kg)]`
- **Percentual de massa gorda** `[massa gorda (kg), massa corporal (kg)]`
- **Percentual de massa livre de gordura** `[massa livre de gordura (kg), massa corporal (kg)]`
- **Razão massa gorda/massa livre de gordura** `[massa gorda (kg), massa livre de gordura (kg)]`
- **Massa corporal alvo por %G desejado** `[massa livre de gordura (kg), percentual de gordura alvo (%)]`
- **Massa gorda alvo** `[massa corporal alvo (kg), percentual de gordura alvo (%)]`
- **Diferença estimada de gordura corporal** `[massa gorda atual (kg), massa gorda alvo (kg)]`

### Evolução da composição corporal

- **Variação de massa corporal** `[massa corporal atual (kg), massa corporal anterior (kg)]`
- **Variação de massa gorda** `[massa gorda atual (kg), massa gorda anterior (kg)]`
- **Variação de massa livre de gordura** `[massa livre de gordura atual (kg), massa livre de gordura anterior (kg)]`
- **Variação do percentual de gordura** `[%G atual, %G anterior]`

---

## Área Muscular Simples

Este bloco é útil, mas pode ficar como **opcional**.

### Braço

- **Perímetro corrigido do braço** `[circunferência do braço (cm), dobra tricipital (mm)]`
- **Área total do braço** `[circunferência do braço (cm)]`
- **Área muscular do braço - simples** `[circunferência do braço (cm), dobra tricipital (mm)]`
- **Área muscular corrigida do braço - Heymsfield** `[sexo biológico, circunferência do braço (cm), dobra tricipital (mm)]`
- **Área adiposa do braço** `[área total do braço, área muscular do braço]`

### Coxa

- **Perímetro corrigido da coxa** `[circunferência da coxa (cm), dobra da coxa (mm)]`
- **Área muscular da coxa - simples** `[circunferência da coxa (cm), dobra da coxa (mm)]`

Para avaliação simples, eu não colocaria área muscular refinada com diâmetro femoral. Isso já começa a encostar na cineantropometria.

---

## Metabolismo Energético

### Taxa metabólica basal

#### Adultos

- **TMB Mifflin-St Jeor - homens** `[sexo biológico, massa corporal (kg), estatura (cm), idade]`
- **TMB Mifflin-St Jeor - mulheres** `[sexo biológico, massa corporal (kg), estatura (cm), idade]`

Esse deve ser o cálculo padrão para adultos na avaliação simples.

### Gasto energético total

- **GET por fator de atividade** `[TMB, fator de atividade/PAL]`
- **GET sedentário/leve** `[TMB, fator de atividade leve]`
- **GET moderado** `[TMB, fator de atividade moderado]`
- **GET intenso** `[TMB, fator de atividade intenso]`

### Balanço energético simples

- **Déficit ou superávit estimado** `[ingestão energética diária (kcal), GET (kcal)]`
- **Meta calórica para perda de peso** `[GET, déficit planejado (kcal)]`
- **Meta calórica para ganho de peso** `[GET, superávit planejado (kcal)]`

Não colocaria disponibilidade de energia, RED-S ou cálculo esportivo avançado nessa avaliação simples. Isso combina mais com nutrição esportiva ou avaliação avançada.

---

## Dados Mínimos da Avaliação Antropométrica Simples

### Identificação

- `sexoBiologico`
- `dataNascimento`
- `idadeAnos`
- `idadeMeses`
- `dataAvaliacao`

### Medidas básicas

- `massaCorporalKg`
- `estaturaCm`

### Perímetros essenciais

- `cinturaCm`
- `quadrilCm`
- `abdomenCm`
- `bracoRelaxadoDireitoCm`
- `bracoRelaxadoEsquerdoCm`
- `bracoContraidoDireitoCm`
- `bracoContraidoEsquerdoCm`
- `coxaDireitaCm`
- `coxaEsquerdaCm`
- `panturrilhaDireitaCm`
- `panturrilhaEsquerdaCm`

### Dobras essenciais por protocolo

#### Para Jackson-Pollock 3 homens

- `dobraPeitoralMm`
- `dobraAbdominalMm`
- `dobraCoxaMm`

#### Para Jackson-Pollock 3 mulheres

- `dobraTricipitalMm`
- `dobraSuprailiacaMm`
- `dobraCoxaMm`

#### Para Guedes homens

- `dobraTricipitalMm`
- `dobraSuprailiacaMm`
- `dobraAbdominalMm`

#### Para Guedes mulheres

- `dobraCoxaMm`
- `dobraSuprailiacaMm`
- `dobraSubescapularMm`

#### Para Slaughter adolescentes

- `dobraTricipitalMm`
- `dobraSubescapularMm`

### Dados energéticos opcionais

- `fatorAtividade`
- `ingestaoEnergeticaKcalDia`
- `deficitOuSuperavitPlanejadoKcal`

---

## Campos que cada resultado deve salvar

Mesmo na avaliação simples, o resultado precisa guardar o método usado.

- `calculationId`
- `equationId`
- `equationName`
- `equationVersion`
- `protocolName`
- `applicableSex`
- `applicableAgeRange`
- `inputValuesSnapshot`
- `inputUnits`
- `resultValue`
- `resultUnit`
- `calculatedAt`
- `sourceReference`
- `notes`
