# Mapa de Cálculos - Avaliação Cineantropométrica

**Unidades padrão:**

- massa corporal em `kg`,
- estatura em `cm` no cadastro,
- estatura convertida para `m` no IMC,
- dobras em `mm`, perímetros em `cm`,
- diâmetros em `cm`,
- idade em anos completos e,
- para curvas pediátricas, idade em meses.

---

## Seção — Anamnese da Avaliação Cineantropométrica

Esta seção deve ser preenchida com **dados puxados da anamnese geral do cliente** e com **campos específicos da avaliação cineantropométrica**. Quando uma pergunta já existir na ficha do cliente, manter exatamente o mesmo nome da seção e da pergunta. A avaliação cineantropométrica exige maior cuidado porque pode envolver IMC, distribuição corporal, dobras cutâneas, perímetros, diâmetros ósseos, comprimentos segmentares, somatotipo, proporcionalidade, fracionamento corporal e cálculos energéticos.

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

| Campo                                                                                                                                                                                            | Origem                       | Obrigatório |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------: |
| Cliente declara que as informações fornecidas são verdadeiras                                                                                                                                    | ficha do cliente             |         sim |
| Cliente autoriza o uso dos dados para cadastro, avaliações e relatórios profissionais                                                                                                            | ficha do cliente             |         sim |
| Cliente entende que a ficha não substitui consulta médica, fisioterapêutica ou nutricional quando necessária                                                                                     | ficha do cliente             |         sim |
| Responsável legal confirma ciência, se menor de idade                                                                                                                                            | ficha do cliente             | condicional |
| Cliente autoriza aferição de peso, estatura, altura sentada, envergadura, perímetros, dobras cutâneas, diâmetros ósseos e comprimentos corporais necessários para a avaliação cineantropométrica | avaliação cineantropométrica |         sim |
| Cliente foi informado de que algumas medidas exigem contato físico profissional                                                                                                                  | avaliação cineantropométrica |         sim |
| Cliente autoriza registro dos resultados no histórico cineantropométrico                                                                                                                         | avaliação cineantropométrica |         sim |

---

### 4. Objetivo principal

| Campo                                | Origem                       | Obrigatório |
| ------------------------------------ | ---------------------------- | ----------: |
| Objetivo principal                   | ficha do cliente             |         sim |
| Descrição livre do objetivo          | ficha do cliente             |         não |
| Prazo ou evento-alvo                 | ficha do cliente             |         não |
| Prioridade do cliente                | ficha do cliente             |         não |
| Foco da avaliação cineantropométrica | avaliação cineantropométrica |         sim |

**Opções para Foco da avaliação cineantropométrica:**

- Avaliação inicial
- Acompanhamento de evolução
- Perfil cineantropométrico completo
- Composição corporal
- Somatotipo
- Proporcionalidade corporal
- Distribuição corporal
- Performance esportiva
- Comparação com perfil de referência
- Acompanhamento nutricional
- Retorno ao treino ou esporte
- Saúde geral / triagem corporal
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

| Pergunta                                                                                                                                                                              | Origem                       | Obrigatório |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------: |
| Usa medicamentos atualmente?                                                                                                                                                          | ficha do cliente             |         sim |
| Quais medicamentos, dose e frequência?                                                                                                                                                | ficha do cliente             | condicional |
| Usa suplemento alimentar?                                                                                                                                                             | ficha do cliente             |         sim |
| Quais suplementos?                                                                                                                                                                    | ficha do cliente             | condicional |
| Possui alergia a medicamento, alimento, látex, adesivo ou outro item?                                                                                                                 | ficha do cliente             |         sim |
| Quais alergias e reação apresentada?                                                                                                                                                  | ficha do cliente             | condicional |
| Possui restrição alimentar por saúde, religião, preferência ou intolerância?                                                                                                          | ficha do cliente             |         sim |
| Quais restrições?                                                                                                                                                                     | ficha do cliente             | condicional |
| Já teve reação adversa durante exercício, dieta, suplemento ou tratamento?                                                                                                            | ficha do cliente             |         sim |
| Detalhar reação adversa                                                                                                                                                               | ficha do cliente             | condicional |
| Usa diurético, hormônio, corticoide, anticoncepcional, anti-inflamatório frequente ou medicamento que possa alterar peso, retenção hídrica, hidratação, edema ou composição corporal? | avaliação cineantropométrica |         sim |
| Usa creatina ou outro suplemento que possa alterar peso corporal, volume muscular, hidratação ou desempenho?                                                                          | avaliação cineantropométrica |         sim |

---

### 8. Dor, lesões e limitações

| Pergunta                                                                                                        | Origem                       | Obrigatório |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------: |
| Sente dor atualmente?                                                                                           | ficha do cliente             |         sim |
| Local da dor                                                                                                    | ficha do cliente             | condicional |
| Intensidade da dor de 0 a 10                                                                                    | ficha do cliente             | condicional |
| Frequência da dor                                                                                               | ficha do cliente             | condicional |
| O que piora?                                                                                                    | ficha do cliente             | condicional |
| O que melhora?                                                                                                  | ficha do cliente             | condicional |
| A dor limita trabalho, treino, sono ou atividades diárias?                                                      | ficha do cliente             | condicional |
| Já teve fratura, entorse, luxação, hérnia, lesão muscular, ligamentar ou tendínea?                              | ficha do cliente             |         sim |
| Detalhes da lesão e data aproximada                                                                             | ficha do cliente             | condicional |
| Possui limitação de movimento conhecida?                                                                        | ficha do cliente             |         sim |
| Usa órtese, palmilha, bengala, muleta ou outro apoio?                                                           | ficha do cliente             |         sim |
| Há feridas, lesões de pele, dor local ou desconforto em alguma região a ser medida?                             | avaliação cineantropométrica |         sim |
| Alguma região corporal não deve ser medida hoje?                                                                | avaliação cineantropométrica |         sim |
| Regiões que não devem ser medidas                                                                               | avaliação cineantropométrica | condicional |
| Há limitação para permanecer em pé, sentado, com braços abertos ou em posição exigida para medidas segmentares? | avaliação cineantropométrica |         sim |
| Detalhes da limitação postural ou funcional para coleta                                                         | avaliação cineantropométrica | condicional |

---

### 9. Atividade física e rotina

| Pergunta                                                 | Origem                       | Obrigatório |
| -------------------------------------------------------- | ---------------------------- | ----------: |
| Pratica atividade física atualmente?                     | ficha do cliente             |         sim |
| Tipo de atividade                                        | ficha do cliente             | condicional |
| Frequência semanal                                       | ficha do cliente             | condicional |
| Duração média por sessão                                 | ficha do cliente             | condicional |
| Intensidade percebida                                    | ficha do cliente             | condicional |
| Há quanto tempo pratica?                                 | ficha do cliente             | condicional |
| Já treinou antes?                                        | ficha do cliente             |         sim |
| Tabagismo                                                | ficha do cliente             |         sim |
| Consumo de álcool                                        | ficha do cliente             |         sim |
| Sono médio por noite                                     | ficha do cliente             |         sim |
| Qualidade do sono                                        | ficha do cliente             |         sim |
| Nível de estresse percebido                              | ficha do cliente             |         sim |
| Trabalho/rotina envolve muito tempo sentado?             | ficha do cliente             |         sim |
| Observações sobre rotina                                 | ficha do cliente             |         não |
| Praticou treino intenso nas últimas 24 horas?            | avaliação cineantropométrica |         sim |
| Ingeriu bebida alcoólica nas últimas 24 horas?           | avaliação cineantropométrica |         sim |
| Dormiu muito mal na noite anterior?                      | avaliação cineantropométrica |         sim |
| Fator de atividade para cálculo energético, se aplicável | avaliação cineantropométrica | condicional |
| Gasto energético do exercício, se conhecido              | avaliação cineantropométrica |    opcional |
| Modalidade esportiva principal, se aplicável             | avaliação cineantropométrica |    opcional |
| Posição, função ou categoria esportiva, se aplicável     | avaliação cineantropométrica |    opcional |

---

### 10. Alimentação/hidratação básica

| Pergunta                                                      | Origem                       | Obrigatório |
| ------------------------------------------------------------- | ---------------------------- | ----------: |
| Quantas refeições costuma fazer por dia?                      | ficha do cliente             |         não |
| Tem rotina alimentar regular?                                 | ficha do cliente             |         sim |
| Consumo de água aproximado por dia                            | ficha do cliente             |         não |
| Tem dificuldade alimentar importante?                         | ficha do cliente             |         sim |
| Qual dificuldade?                                             | ficha do cliente             | condicional |
| Segue alguma dieta atualmente?                                | ficha do cliente             |         sim |
| Qual dieta ou orientação?                                     | ficha do cliente             | condicional |
| Possui intolerância alimentar diagnosticada?                  | ficha do cliente             |         sim |
| Qual?                                                         | ficha do cliente             | condicional |
| Evacuação intestinal                                          | ficha do cliente             |         não |
| Observações nutricionais gerais                               | ficha do cliente             |         não |
| Fez refeição pesada nas últimas 3 horas?                      | avaliação cineantropométrica |         sim |
| Está em jejum prolongado ou restrição alimentar intensa hoje? | avaliação cineantropométrica |         sim |
| Percebe retenção de líquido, inchaço ou edema hoje?           | avaliação cineantropométrica |         sim |
| Teve alteração intestinal importante nos últimos dias?        | avaliação cineantropométrica |         sim |
| Ingestão energética diária estimada, se conhecida             | avaliação cineantropométrica |    opcional |
| Está em déficit calórico, superávit calórico ou manutenção?   | avaliação cineantropométrica |    opcional |

---

### 11. Saúde feminina/reprodutiva, condicional

| Pergunta                                                                       | Origem                       | Obrigatório |
| ------------------------------------------------------------------------------ | ---------------------------- | ----------: |
| Esta seção se aplica ao cliente?                                               | ficha do cliente             |         sim |
| Está gestante ou suspeita de gravidez?                                         | ficha do cliente             | condicional |
| Está no pós-parto?                                                             | ficha do cliente             | condicional |
| Amamenta atualmente?                                                           | ficha do cliente             | condicional |
| Ciclo menstrual é regular?                                                     | ficha do cliente             | condicional |
| Usa contraceptivo hormonal ou DIU?                                             | ficha do cliente             | condicional |
| Está em período menstrual ou pré-menstrual com alteração corporal perceptível? | avaliação cineantropométrica | condicional |
| Observações relevantes                                                         | ficha do cliente             |         não |

---

### 12. Condições específicas para coleta cineantropométrica

| Pergunta                                                                                                                                 | Origem                       | Obrigatório |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------: |
| Cliente está com roupa adequada para aferição de perímetros, dobras, diâmetros e comprimentos corporais?                                 | avaliação cineantropométrica |         sim |
| Cliente retirou objetos que possam interferir nas medidas, como relógio, pulseiras, acessórios volumosos ou calçados, quando necessário? | avaliação cineantropométrica |         sim |
| Cliente consegue permanecer em posição anatômica ou posição solicitada durante a coleta?                                                 | avaliação cineantropométrica |         sim |
| Cliente consegue manter braços abertos para medida de envergadura, se necessária?                                                        | avaliação cineantropométrica | condicional |
| Cliente consegue permanecer sentado para medida de altura sentada, se necessária?                                                        | avaliação cineantropométrica | condicional |
| Cliente apresenta assimetria, deformidade, amputação, edema localizado ou alteração corporal que interfira na interpretação das medidas? | avaliação cineantropométrica |         sim |
| Detalhes da alteração corporal que interfere na coleta ou interpretação                                                                  | avaliação cineantropométrica | condicional |
| Protocolo de medida adotado                                                                                                              | avaliação cineantropométrica |         sim |

---

### 13. Escopo técnico da avaliação cineantropométrica

| Campo                                           | Origem                       | Obrigatório |
| ----------------------------------------------- | ---------------------------- | ----------: |
| Tipo de perfil cineantropométrico               | avaliação cineantropométrica |         sim |
| Protocolo de composição corporal                | avaliação cineantropométrica | condicional |
| Protocolo de somatotipo                         | avaliação cineantropométrica | condicional |
| Protocolo de proporcionalidade                  | avaliação cineantropométrica | condicional |
| Protocolo energético                            | avaliação cineantropométrica | condicional |
| Perfil de referência para comparação, se houver | avaliação cineantropométrica |    opcional |
| Observações sobre escolha dos protocolos        | avaliação cineantropométrica |         não |

**Opções para Tipo de perfil cineantropométrico:**

- Perfil básico
- Perfil intermediário
- Perfil completo
- Perfil esportivo
- Perfil pediátrico/adolescente
- Perfil adulto
- Perfil de composição corporal
- Perfil de somatotipo
- Perfil de proporcionalidade
- Perfil de acompanhamento evolutivo

---

### 14. Observações finais

| Campo                                                          | Origem                       | Obrigatório |
| -------------------------------------------------------------- | ---------------------------- | ----------: |
| Observações pessoais relevantes para o atendimento             | ficha do cliente             |         não |
| Observações finais da anamnese geral                           | ficha do cliente             |         não |
| Observações específicas para esta avaliação cineantropométrica | avaliação cineantropométrica |         não |
| Observações técnicas do profissional                           | avaliação cineantropométrica |         não |

---

### 15. Confirmação de veracidade

| Campo                                                                                                                                                                                                          | Origem                       | Obrigatório |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------: |
| Cliente confirma que as informações da anamnese geral são verdadeiras                                                                                                                                          | ficha do cliente             |         sim |
| Cliente confirma que as informações específicas desta avaliação cineantropométrica são verdadeiras                                                                                                             | avaliação cineantropométrica |         sim |
| Cliente entende que alimentação, hidratação, treino recente, sono, ciclo menstrual, medicamentos, retenção de líquido, edema, postura e condições de saúde podem interferir nos resultados cineantropométricos | avaliação cineantropométrica |         sim |
| Profissional confirma que revisou a anamnese antes da coleta das medidas                                                                                                                                       | avaliação cineantropométrica |         sim |
| Data e hora da confirmação                                                                                                                                                                                     | automático                   |         sim |
| Profissional avaliador                                                                                                                                                                                         | avaliação cineantropométrica |         sim |

---

## Índices de Triagem e Distribuição Corporal

- **IMC** `[massa corporal (kg), estatura (m)]`
- **IMC por idade - OMS 5 a 19 anos** `[massa corporal (kg), estatura (m), sexo biológico, idade em meses, tabela/referência OMS]`
- **Classificação de IMC adulto** `[IMC, idade]`
- **Classificação de IMC por idade** `[IMC, sexo biológico, idade em meses, referência OMS/LMS]`
- **Circunferência da cintura isolada** `[circunferência da cintura (cm), sexo biológico, idade, ponto de corte adotado]`
- **RCQ - Relação Cintura-Quadril** `[circunferência da cintura (cm), circunferência do quadril (cm)]`
- **RCEst - Relação Cintura-Estatura** `[circunferência da cintura (cm), estatura (cm)]`
- **Índice córmico** `[altura sentada (cm), estatura (cm)]`
- **Relação envergadura-estatura** `[envergadura (cm), estatura (cm)]`
- **Índice acromio-ilíaco** `[diâmetro biacromial (cm), diâmetro bi-iliocristal/bi-ilíaco (cm)]`
- **Índice braquial** `[comprimento do antebraço (cm), comprimento do braço (cm)]`
- **Índice crural** `[comprimento da perna (cm), comprimento da coxa (cm)]`

Para cintura e quadril, o protocolo OMS/WHO STEPS mede a cintura no ponto médio entre a última costela palpável e a crista ilíaca, ao fim de uma expiração normal, e o quadril na maior circunferência sobre os glúteos, ambos lidos ao 0,1 cm mais próximo. ([CDC WHO][1]) A OMS interpreta IMC por idade, entre 5 e 19 anos, por desvios-padrão, não por pontos de corte adultos. ([Organização Mundial da Saúde][2])

---

## Somas de Dobras, Densidade Corporal e Conversões

### Somas auxiliares

- **Σ2 Slaughter - tríceps + subescapular** `[dobra tricipital (mm), dobra subescapular (mm)]`
- **Σ3 Jackson-Pollock homens** `[dobra peitoral (mm), dobra abdominal (mm), dobra da coxa (mm)]`
- **Σ3 Jackson-Pollock mulheres** `[dobra tricipital (mm), dobra supra-ilíaca (mm), dobra da coxa (mm)]`
- **Σ3 Guedes homens** `[dobra tricipital (mm), dobra supra-ilíaca (mm), dobra abdominal (mm)]`
- **Σ3 Guedes mulheres** `[dobra da coxa (mm), dobra supra-ilíaca (mm), dobra subescapular (mm)]`
- **Σ4 Peterson** `[dobra tricipital (mm), dobra subescapular (mm), dobra supra-ilíaca/crista ilíaca (mm), dobra da coxa média (mm)]`
- **Σ4 Durnin-Womersley** `[dobra bicipital (mm), dobra tricipital (mm), dobra subescapular (mm), dobra supra-ilíaca (mm)]`
- **Σ7 Jackson-Pollock** `[dobra peitoral (mm), dobra axilar média (mm), dobra tricipital (mm), dobra subescapular (mm), dobra abdominal (mm), dobra supra-ilíaca (mm), dobra da coxa (mm)]`

### Conversões de densidade corporal

- **Densidade corporal por equação de dobras** `[sexo biológico, idade, soma de dobras exigida pelo protocolo, equação escolhida]`
- **%G por Siri** `[densidade corporal]`
- **%G por Brozek** `[densidade corporal]`

A conversão Siri/Brozek entra quando a equação calcula primeiro densidade corporal. O sistema deve salvar tanto a equação de densidade quanto a equação de conversão, porque “Jackson-Pollock + Siri” e “Jackson-Pollock + Brozek” não são exatamente o mesmo cálculo. O pacote técnico revisado lista essa escolha explicitamente em protocolos como Durnin, Guedes, Jackson e Petroski.

---

## Percentual de Gordura por Dobras Cutâneas

### Crianças e adolescentes

#### Slaughter et al. - 8 a 15 anos

- **%G Slaughter - meninos, Σ2 ≤ 35 mm** `[sexo biológico, idade, dobra tricipital (mm), dobra subescapular (mm)]`
- **%G Slaughter - meninos, Σ2 > 35 mm** `[sexo biológico, idade, dobra tricipital (mm), dobra subescapular (mm)]`
- **%G Slaughter - meninas, Σ2 ≤ 35 mm** `[sexo biológico, idade, dobra tricipital (mm), dobra subescapular (mm)]`
- **%G Slaughter - meninas, Σ2 > 35 mm** `[sexo biológico, idade, dobra tricipital (mm), dobra subescapular (mm)]`

Para 16 a 18 anos, Slaughter ainda pode ser usado como protocolo juvenil. Para 18+ em avaliação adulta, o melhor é trocar para protocolo adulto. A literatura ainda usa Slaughter amplamente, mas há queda de precisão em alguns contextos, especialmente obesidade infantil e populações específicas. ([PMC][3])

---

### Jovens adultos (16+) e Adultos (18+) - protocolos gerais

#### Peterson, Czerwinski e Siervogel - adultos

- **%G Peterson - homens adultos** `[sexo biológico, idade, estatura (cm), dobra tricipital (mm), dobra subescapular (mm), dobra supra-ilíaca/crista ilíaca (mm), dobra da coxa média (mm)]`
- **%G Peterson - mulheres adultas** `[sexo biológico, idade, massa corporal (kg), estatura (cm), IMC, dobra tricipital (mm), dobra subescapular (mm), dobra supra-ilíaca/crista ilíaca (mm), dobra da coxa média (mm)]`

Peterson foi desenvolvido com referência em modelo de quatro compartimentos e, no estudo original, comparou suas equações com Durnin-Womersley e Jackson-Pollock. O estudo informa que as equações clássicas tenderam a subestimar %G, especialmente em maiores níveis de gordura corporal. ([ScienceDirect][4])

#### Jackson-Pollock 7 dobras - adultos

- **%G Jackson-Pollock 7 dobras - homens** `[sexo biológico, idade, dobra peitoral (mm), dobra axilar média (mm), dobra tricipital (mm), dobra subescapular (mm), dobra abdominal (mm), dobra supra-ilíaca (mm), dobra da coxa (mm), conversão Siri ou Brozek]`
- **%G Jackson-Pollock 7 dobras - mulheres** `[sexo biológico, idade, dobra peitoral (mm), dobra axilar média (mm), dobra tricipital (mm), dobra subescapular (mm), dobra abdominal (mm), dobra supra-ilíaca (mm), dobra da coxa (mm), conversão Siri ou Brozek]`

#### Jackson-Pollock 3 dobras - adultos

- **%G Jackson-Pollock 3 dobras - homens** `[sexo biológico, idade, dobra peitoral (mm), dobra abdominal (mm), dobra da coxa (mm), conversão Siri ou Brozek]`
- **%G Jackson-Pollock 3 dobras - mulheres** `[sexo biológico, idade, dobra tricipital (mm), dobra supra-ilíaca (mm), dobra da coxa (mm), conversão Siri ou Brozek]`

As fórmulas de 3 dobras e 7 dobras de Jackson-Pollock usam sexo, idade e somatório de dobras, com sítios diferentes para homens e mulheres no protocolo de 3 dobras.

#### Durnin-Womersley 4 dobras - adultos e jovens adultos

- **%G Durnin-Womersley - homens 17-72 anos** `[sexo biológico, idade/faixa etária, dobra bicipital (mm), dobra tricipital (mm), dobra subescapular (mm), dobra supra-ilíaca (mm), conversão Siri ou Brozek]`
- **%G Durnin-Womersley - mulheres 16-68 anos** `[sexo biológico, idade/faixa etária, dobra bicipital (mm), dobra tricipital (mm), dobra subescapular (mm), dobra supra-ilíaca (mm), conversão Siri ou Brozek]`

Durnin-Womersley depende de coeficientes por sexo e faixa etária, por isso o app deve guardar a faixa etária usada, não só as quatro dobras. ([CRAN][5])

---

### Adultos (18+) - protocolos brasileiros úteis

#### Guedes 3 dobras - adultos jovens

- **%G Guedes - homens 18-30 anos** `[sexo biológico, idade, dobra tricipital (mm), dobra supra-ilíaca (mm), dobra abdominal (mm), conversão Siri]`
- **%G Guedes - mulheres 18-30 anos** `[sexo biológico, idade, dobra da coxa (mm), dobra supra-ilíaca (mm), dobra subescapular (mm), conversão Siri]`

Guedes é útil no contexto brasileiro, mas tem faixa etária estreita e não deve ser usado como fórmula genérica para todas as idades. As fontes técnicas listam Guedes como protocolo de 3 dobras para ambos os sexos, com população de adultos jovens. ([CRAN][5])

#### Petroski - adultos brasileiros, deixar como protocolo opcional

- **%G Petroski 2 dobras - homens 18-66 anos** `[idade, dobra tricipital (mm), dobra axilar média (mm), conversão Siri ou Brozek]`
- **%G Petroski 3 dobras - homens e mulheres** `[sexo biológico, idade, massa corporal (kg), estatura (cm), dobras exigidas pela variante Petroski selecionada, conversão Siri ou Brozek]`
- **%G Petroski 4 dobras - homens e mulheres** `[sexo biológico, idade, massa corporal (kg), estatura (cm), dobras exigidas pela variante Petroski selecionada, conversão Siri ou Brozek]`

Petroski merece entrar como módulo brasileiro complementar, mas não como cálculo solto. Ele tem variantes por número de dobras e por sexo, então a implementação deve congelar exatamente qual variante foi adotada. ([CRAN][5])

---

## Composição Corporal Simples - Dois Compartimentos

- **Massa gorda** `[massa corporal (kg), percentual de gordura (%G)]`
- **Massa livre de gordura** `[massa corporal (kg), massa gorda (kg)]`
- **Percentual de massa livre de gordura** `[massa livre de gordura (kg), massa corporal (kg)]`
- **Razão massa gorda/massa livre de gordura** `[massa gorda (kg), massa livre de gordura (kg)]`
- **Massa corporal alvo por %G desejado** `[massa livre de gordura (kg), percentual de gordura alvo (%)]`
- **Massa gorda alvo** `[massa corporal alvo (kg), percentual de gordura alvo (%)]`
- **Excesso ou déficit estimado de gordura** `[massa gorda atual (kg), massa gorda alvo (kg)]`

Esses cálculos dependem diretamente do `%G`. Portanto, cada resultado deve guardar qual protocolo gerou o percentual: Peterson, Jackson-Pollock 7, Jackson-Pollock 3, Durnin-Womersley, Guedes, Slaughter etc. Sem isso, o histórico vira uma colcha de retalhos numérica.

---

## Composição Corporal Robusta - Massa Anatômica e Fracionamento

### Ross-Kerr - modelo de cinco componentes

- **Massa adiposa anatômica - Ross-Kerr** `[massa corporal (kg), estatura (cm), altura sentada (cm), dobras do perfil ISAK, perímetros do perfil ISAK, diâmetros ósseos do perfil ISAK, comprimentos/alturas segmentares do perfil ISAK, sexo biológico, idade]`
- **Massa muscular - Ross-Kerr** `[massa corporal (kg), estatura (cm), altura sentada (cm), dobras do perfil ISAK, perímetros do perfil ISAK, diâmetros ósseos do perfil ISAK, comprimentos/alturas segmentares do perfil ISAK, sexo biológico, idade]`
- **Massa óssea - Ross-Kerr** `[massa corporal (kg), estatura (cm), altura sentada (cm), dobras do perfil ISAK, perímetros do perfil ISAK, diâmetros ósseos do perfil ISAK, comprimentos/alturas segmentares do perfil ISAK, sexo biológico, idade]`
- **Massa residual - Ross-Kerr** `[massa corporal (kg), massa epitelial/pele (kg), massa adiposa anatômica (kg), massa muscular (kg), massa óssea (kg)]`
- **Massa epitelial/pele - Ross-Kerr** `[massa corporal (kg), estatura (cm), altura sentada (cm), dobras do perfil ISAK, perímetros do perfil ISAK, diâmetros ósseos do perfil ISAK, comprimentos/alturas segmentares do perfil ISAK, sexo biológico, idade]`
- **Percentual de massa adiposa anatômica** `[massa adiposa anatômica (kg), massa corporal (kg)]`
- **Percentual de massa muscular** `[massa muscular (kg), massa corporal (kg)]`
- **Percentual de massa óssea** `[massa óssea (kg), massa corporal (kg)]`
- **Percentual de massa residual** `[massa residual (kg), massa corporal (kg)]`
- **Percentual de massa epitelial/pele** `[massa epitelial/pele (kg), massa corporal (kg)]`

Ross-Kerr deve ser tratado como protocolo completo, não como fórmula isolada. A literatura o descreve como fracionamento de pele, adiposo, osso, músculo e residual em pessoas de ambos os sexos, aproximadamente de 6 a 77 anos, e estudos aplicados citam o uso de massa corporal, estatura, altura sentada, diâmetros, dobras e perímetros. ([Semantic Scholar][6])

### Índices derivados do fracionamento

- **Índice muscular-ósseo** `[massa muscular (kg), massa óssea (kg)]`
- **Razão adiposa-muscular** `[massa adiposa anatômica (kg), massa muscular (kg)]`
- **Razão óssea-corporal** `[massa óssea (kg), massa corporal (kg)]`
- **Razão muscular-corporal** `[massa muscular (kg), massa corporal (kg)]`
- **Razão adiposa-corporal anatômica** `[massa adiposa anatômica (kg), massa corporal (kg)]`
- **Soma dos cinco componentes** `[massa epitelial/pele (kg), massa adiposa anatômica (kg), massa muscular (kg), massa óssea (kg), massa residual (kg)]`
- **Erro de fechamento dos cinco componentes** `[massa corporal (kg), soma dos cinco componentes (kg)]`

### Massa óssea por Rocha

- **Massa óssea - Rocha** `[estatura (m), diâmetro biestiloideo do punho (m ou cm convertido), diâmetro bicondilar/biepicondilar do fêmur (m ou cm convertido)]`

A equação de Rocha é citada como estimativa antropométrica de massa óssea a partir de estatura, diâmetro biestiloideo e diâmetro do fêmur. Aqui é essencial congelar unidade e variante da fórmula para não gerar resultados incompatíveis entre versões do app. ([PMC][7])

### Massa muscular esquelética por Lee - não liberar sem decisão sobre coeficiente populacional

- **Massa muscular esquelética - Lee et al.** `[estatura (m), idade, sexo biológico, perímetro corrigido do braço, perímetro corrigido da coxa, perímetro corrigido da panturrilha, coeficiente populacional]`

Como esse protocolo exige coeficiente populacional, ele deve ficar fora da primeira etapa se o sistema não vai trabalhar com variáveis por etnia/população. No banco, deixe previsto como protocolo bloqueado ou futuro, não como cálculo ativo silencioso.

---

## Áreas Musculares, Perímetros Corrigidos e Segmentos

### Perímetros corrigidos

- **Perímetro corrigido do braço** `[circunferência do braço (cm), dobra tricipital (mm)]`
- **Perímetro corrigido da panturrilha** `[circunferência da panturrilha (cm), dobra da panturrilha medial (mm)]`
- **Perímetro corrigido da coxa** `[circunferência da coxa (cm), dobra da coxa (mm)]`

### Braço

- **Área total do braço** `[circunferência do braço (cm)]`
- **Área muscular do braço - não corrigida** `[circunferência do braço (cm), dobra tricipital (mm)]`
- **Área muscular corrigida do braço - Heymsfield** `[sexo biológico, circunferência do braço (cm), dobra tricipital (mm)]`
- **Área adiposa do braço** `[área total do braço, área muscular do braço]`
- **Índice de área muscular do braço** `[área muscular do braço, estatura ou referência escolhida]`

### Coxa

- **Área muscular da coxa - simples** `[circunferência da coxa (cm), dobra anterior da coxa (mm)]`
- **Área muscular da coxa - refinada** `[circunferência da coxa (cm), dobra anterior da coxa (mm), largura/diâmetro femoral (cm)]`
- **Área adiposa da coxa** `[área total da coxa, área muscular da coxa]`

O anexo lista a área muscular do braço, a versão corrigida por sexo e a área muscular da coxa simples/refinada como cálculos úteis para acompanhamento corporal.

---

## Metabolismo Energético

### Taxa metabólica basal ou de repouso

- **TMB Mifflin-St Jeor - homens adultos** `[sexo biológico, massa corporal (kg), estatura (cm), idade]`
- **TMB Mifflin-St Jeor - mulheres adultas** `[sexo biológico, massa corporal (kg), estatura (cm), idade]`
- **TMB Schofield/WHO-FAO-UNU - homens 18-30** `[sexo biológico, idade, massa corporal (kg)]`
- **TMB Schofield/WHO-FAO-UNU - homens 31-60** `[sexo biológico, idade, massa corporal (kg)]`
- **TMB Schofield/WHO-FAO-UNU - homens >60** `[sexo biológico, idade, massa corporal (kg)]`
- **TMB Schofield/WHO-FAO-UNU - mulheres 18-30** `[sexo biológico, idade, massa corporal (kg)]`
- **TMB Schofield/WHO-FAO-UNU - mulheres 31-60** `[sexo biológico, idade, massa corporal (kg)]`
- **TMB Schofield/WHO-FAO-UNU - mulheres >60** `[sexo biológico, idade, massa corporal (kg)]`
- **TMB Schofield pediátrica - peso + altura** `[sexo biológico, idade, massa corporal (kg), estatura (cm), tabela/equação pediátrica selecionada]`
- **TMB Henry/Oxford** `[sexo biológico, idade, massa corporal (kg), estatura (cm, se a variante escolhida exigir)]`

Mifflin-St Jeor usa massa corporal, estatura, idade e sexo, com fórmulas distintas para homens e mulheres. ([Nutrium][8]) Para crianças e adolescentes, o anexo recomenda não transportar Mifflin automaticamente, dando preferência a equações/tabelas pediátricas como Schofield ou Henry.

### Gasto energético total e disponibilidade

- **PAL - Physical Activity Level** `[gasto energético total, TMB]`
- **GET/TEE por fator de atividade** `[TMB, PAL ou fator de atividade selecionado]`
- **GET/TEE estimado a partir de Mifflin** `[massa corporal (kg), estatura (cm), idade, sexo biológico, PAL]`
- **GET/TEE estimado a partir de Schofield** `[massa corporal (kg), idade, sexo biológico, PAL]`
- **Disponibilidade de energia - EA** `[ingestão energética diária (kcal), gasto energético do exercício (kcal), massa livre de gordura (kg)]`
- **Déficit/superávit energético estimado** `[ingestão energética diária (kcal), GET/TEE (kcal)]`

O relatório FAO/WHO/UNU trabalha com `GET = TMB × PAL`, e fontes derivadas desse modelo organizam PAL em faixas como sedentário/leve, ativo/moderado e vigoroso. ([FAOHome][9]) A disponibilidade de energia deve ser salva como cálculo esportivo contextual, não como diagnóstico automático.

---

## Somatotipo, Proporcionalidade e Cineantropometria

### Heath-Carter

- **Endomorfia** `[dobra tricipital (mm), dobra subescapular (mm), dobra supraespinal/supraspinale (mm), estatura (cm)]`
- **Mesomorfia** `[diâmetro biepicondilar do úmero (cm), diâmetro bicondilar/biepicondilar do fêmur (cm), perímetro corrigido do braço (cm), perímetro corrigido da panturrilha (cm), estatura (cm)]`
- **Ectomorfia** `[estatura (cm), massa corporal (kg)]`
- **Somatotipo completo** `[endomorfia, mesomorfia, ectomorfia]`
- **Coordenada X da somatocarta** `[endomorfia, ectomorfia]`
- **Coordenada Y da somatocarta** `[endomorfia, mesomorfia, ectomorfia]`
- **HWR - Height Weight Ratio** `[estatura (cm), massa corporal (kg)]`

O método Heath-Carter usa equações métricas: endomorfia por polinômio, mesomorfia e ectomorfia por relações lineares e condicionais. ([Clinicas Phentermine][10])

### Distâncias e comparações de somatotipo

- **SAD - Somatotype Attitudinal Distance** `[endomorfia A, mesomorfia A, ectomorfia A, endomorfia B, mesomorfia B, ectomorfia B]`
- **Distância do somatotipo ao perfil de referência** `[endomorfia avaliado, mesomorfia avaliado, ectomorfia avaliado, endomorfia referência, mesomorfia referência, ectomorfia referência]`
- **Média de somatotipo de grupo** `[lista de endomorfias, lista de mesomorfias, lista de ectomorfias]`

### Phantom e proporcionalidade

- **Phantom Z-score - medida linear** `[medida observada, estatura (cm), valor Phantom da variável, desvio-padrão Phantom da variável, expoente d = 1]`
- **Phantom Z-score - área** `[medida observada, estatura (cm), valor Phantom da variável, desvio-padrão Phantom da variável, expoente d = 2]`
- **Phantom Z-score - massa/volume** `[medida observada, estatura (cm), valor Phantom da variável, desvio-padrão Phantom da variável, expoente d = 3]`
- **Perfil Phantom completo** `[conjunto de medidas antropométricas, estatura (cm), tabela Phantom de referência, expoente por tipo de medida]`

O anexo diferencia bem o Phantom Z-score da OMS pediátrica: Phantom é proporcionalidade cineantropométrica; WHO BMI-for-age é crescimento/triagem pediátrica.

---

## Lista Canônica de Dados Brutos para o Banco

### Identificação biológica e temporal

- `sexoBiologico`
- `dataNascimento`
- `idadeAnos`
- `idadeMeses`
- `dataAvaliacao`
- `protocoloMedida`

### Medidas básicas

- `massaCorporalKg`
- `estaturaCm`
- `alturaSentadaCm`
- `envergaduraCm`

### Perímetros

- `cinturaCm`
- `quadrilCm`
- `ombrosCm`
- `toraxCm`
- `abdomenCm`
- `bracoRelaxadoCm`
- `bracoContraidoCm`
- `antebracoCm`
- `coxaCm`
- `panturrilhaCm`

### Dobras cutâneas

- `dobraBicipitalMm`
- `dobraTricipitalMm`
- `dobraSubescapularMm`
- `dobraSuprailiacaMm`
- `dobraSupraespinalMm`
- `dobraPeitoralMm`
- `dobraAxilarMediaMm`
- `dobraAbdominalMm`
- `dobraCoxaMm`
- `dobraPanturrilhaMedialMm`

### Diâmetros ósseos

- `diametroBiestiloideoPunhoCm`
- `diametroBiepicondilarUmeroCm`
- `diametroBicondilarFemurCm`
- `diametroBiacromialCm`
- `diametroBiliocristalCm`

### Comprimentos e alturas segmentares

- `comprimentoBracoCm`
- `comprimentoAntebracoCm`
- `comprimentoCoxaCm`
- `comprimentoPernaCm`
- `alturaIlioespinalCm`

### Dados nutricionais e energéticos

- `ingestaoEnergeticaKcalDia`
- `gastoExercicioKcalDia`
- `pal`
- `fatorAtividade`
- `percentualGorduraAlvo`

---

## Campos que cada resultado calculado deve salvar

- `calculationId`
- `equationId`
- `equationName`
- `equationVersion`
- `protocolName`
- `applicabilityAgeRange`
- `applicabilitySex`
- `inputValuesSnapshot`
- `inputUnits`
- `resultValue`
- `resultUnit`
- `calculatedAt`
- `sourceReference`
- `notes`

Esse ponto é importante para o OSSMA: o número sozinho é frágil. O valor precisa carregar o “rastro do cálculo”, senão uma avaliação feita com Jackson-Pollock 3 dobras pode ser comparada indevidamente com outra feita por Peterson, Guedes ou Ross-Kerr.

[1]: https://cdn.who.int/media/docs/default-source/ncds/ncd-surveillance/steps/part3-section5.pdf 'Microsoft Word - Part3_Section 5 Collecting Step 2 data_Physical Measurements.doc'

[2]: https://www.who.int/tools/growth-reference-data-for-5to19-years/indicators/bmi-for-age "
BMI-for-age (5-19 years)
"
[3]: https://pmc.ncbi.nlm.nih.gov/articles/PMC3831534/?utm_source=chatgpt.com "A comparison of the Slaughter skinfold-thickness equations ..."
[4]: https://www.sciencedirect.com/science/article/pii/S0002916523057623 "Development and validation of skinfold-thickness prediction equations with a 4-compartment model - ScienceDirect"
[5]: https://cran.r-project.org/web/packages/bodycomp/bodycomp.pdf "bodycomp: Percent Body Fat Values Using Anthropometric Prediction Equations"
[6]: https://www.semanticscholar.org/paper/An-anthropometric-method-for-fractionation-of-skin%2C-Kerr-App/6ba5f6419a4ff4514e9f5f8aaa404829cda40df7?utm_source=chatgpt.com "An anthropometric method for fractionation of skin, adipose ..."
[7]: https://pmc.ncbi.nlm.nih.gov/articles/PMC11164060/?utm_source=chatgpt.com "Agreement and differences between the equations for ... - PMC"
[8]: https://nutrium.com/blog/mifflin-st-jeor-for-nutrition-professionals/ "Mifflin-St. Jeor for nutrition professionals - Nutrium Blog"
[9]: https://www.fao.org/4/y5686e/y5686e.pdf?utm_source=chatgpt.com "Human energy requirements"
[10]: https://phentermineclinics.net/wp-content/uploads/2023/09/Heath-CarterManual.pdf "HC_ASIM3_WEB.PDF"
