# Anamnese Geral do Cliente

**Entidade:** `GeneralAnamnesis`
**Relacionada a:** `Client`
**Status:** rascunho inicial
**Código:** inglês técnico
**Interface:** pt-BR e en

---

## 1. Finalidade

A anamnese geral do cliente reúne informações relevantes sobre saúde, objetivos, hábitos, restrições, histórico e condições gerais do cliente.

Ela deve servir como base reutilizável para avaliações específicas, evitando perguntas repetitivas em cada nova avaliação.

A anamnese geral não substitui avaliação médica, nutricional, fisioterapêutica ou de outro profissional habilitado. Ela organiza informações declaradas pelo cliente para apoiar o julgamento profissional.

---

## 2. Princípio central

A anamnese geral deve funcionar como uma ficha viva.

Quando uma avaliação precisar de uma resposta já existente na anamnese geral, o sistema deve:

1. exibir a resposta existente;
2. permitir manter a resposta;
3. permitir editar a resposta durante a avaliação;
4. perguntar se a alteração também deve atualizar a anamnese geral;
5. salvar na avaliação o snapshot da resposta usada naquele momento.

---

## 3. Regra contra perguntas repetitivas

Cada pergunta deve ter uma chave estável.

A mesma informação não deve aparecer com nomes diferentes em avaliações diferentes.

Exemplo correto:

```text
Pergunta geral:
Usa medicamentos atualmente?

Chave:
health.currentMedications.hasCurrentMedications

Usada em:
- avaliação antropométrica
- avaliação cineantropométrica
- avaliação fisioterapêutica futura
- avaliação nutricional futura
```

Exemplo incorreto:

```text
Na anamnese geral:
Usa medicamentos?

Na avaliação antropométrica:
Está tomando algum remédio?

Na avaliação nutricional:
Faz uso de medicação?

Na avaliação fisioterapêutica:
Usa medicamento contínuo?
```

A pergunta pode ser exibida com pequenas adaptações de texto na interface, mas a chave técnica e o significado devem permanecer estáveis.

---

## 4. Estados da anamnese

A anamnese geral pode ter os seguintes estados:

```text
Draft
Completed
NeedsReview
```

### Draft

A anamnese foi iniciada, mas ainda possui campos obrigatórios pendentes.

### Completed

A anamnese possui todos os campos obrigatórios preenchidos.

### NeedsReview

A anamnese possui respostas antigas, alertas importantes ou dados que precisam ser revisados antes de nova avaliação.

---

## 5. Metadados da anamnese

Esses dados são automáticos e não devem ser preenchidos manualmente pelo usuário.

- ID da anamnese
- ID do cliente
- Versão do schema
- Criado em
- Atualizado em
- Última revisão
- Profissional responsável pela última atualização
- Estado da anamnese

---

## 6. Ordem final da anamnese em tela

1. Objetivo principal
2. Saúde geral
3. Sinais de alerta
4. Medicamentos, suplementos, alergias e restrições
5. Dor, lesões e limitações
6. Atividade física e rotina
7. Sono, estresse e hábitos
8. Alimentação e hidratação básica
9. Saúde feminina/reprodutiva, quando aplicável
10. Histórico familiar relevante
11. Observações gerais
12. Confirmação de veracidade
13. Resumo técnico automático

---

# 7. Objetivo principal

## Finalidade

Registrar o motivo principal do acompanhamento ou avaliação.

## Campos

### Objetivo principal

Tipo: seleção múltipla
Obrigatório: sim

Opções:

- Saúde geral
- Emagrecimento
- Hipertrofia / ganho de massa
- Condicionamento físico
- Performance esportiva
- Reabilitação / retorno à atividade
- Dor ou desconforto
- Melhora postural
- Acompanhamento nutricional
- Estética
- Qualidade de vida
- Outro

### Outro objetivo

Tipo: texto curto
Obrigatório: condicional
Exibir se: objetivo principal incluir `Outro`

### Descrição livre do objetivo

Tipo: texto longo
Obrigatório: não

### Prazo ou evento-alvo

Tipo: texto ou data
Obrigatório: não

Exemplos:

- casamento;
- competição;
- retorno ao esporte;
- exame físico;
- viagem;
- recomendação médica.

### Prioridade do cliente

Tipo: seleção
Obrigatório: não

Opções:

- Baixa
- Média
- Alta

---

# 8. Saúde geral

## Finalidade

Registrar condições de saúde declaradas pelo cliente que possam exigir cautela, encaminhamento, adaptação ou atenção profissional.

## Campos

### Possui alguma doença ou condição de saúde diagnosticada?

Tipo: sim / não / não sei
Obrigatório: sim

### Quais doenças ou condições?

Tipo: texto longo ou lista
Obrigatório: condicional
Exibir se: resposta anterior for `sim` ou `não sei`

### Já foi orientado por médico ou profissional de saúde a evitar ou limitar atividade física?

Tipo: sim / não / não sei
Obrigatório: sim

### Detalhes da orientação

Tipo: texto longo
Obrigatório: condicional
Exibir se: resposta anterior for `sim` ou `não sei`

### Possui doença cardíaca, pressão alta, arritmia ou histórico cardiovascular?

Tipo: sim / não / não sei
Obrigatório: sim

### Possui diabetes, resistência à insulina ou alteração glicêmica?

Tipo: sim / não / não sei
Obrigatório: sim

### Possui doença renal, hepática, respiratória ou metabólica?

Tipo: sim / não / não sei
Obrigatório: sim

### Tem ou teve câncer, doença autoimune, neurológica ou outra condição relevante?

Tipo: sim / não / não sei
Obrigatório: sim

### Já realizou cirurgia importante?

Tipo: sim / não
Obrigatório: sim

### Qual cirurgia e quando?

Tipo: texto longo
Obrigatório: condicional
Exibir se: realizou cirurgia importante

### Está em acompanhamento médico, fisioterapêutico, nutricional ou psicológico atualmente?

Tipo: sim / não
Obrigatório: sim

### Com qual profissional ou especialidade?

Tipo: texto curto
Obrigatório: condicional
Exibir se: está em acompanhamento

---

# 9. Sinais de alerta

## Finalidade

Identificar sinais que exigem atenção profissional antes de exercício, avaliação física ou coleta antropométrica.

Essa seção não gera diagnóstico. Ela apenas sinaliza cautela.

## Campos

### Sente dor ou aperto no peito em repouso ou durante esforço?

Tipo: sim / não
Obrigatório: sim

### Sente falta de ar desproporcional ao esforço?

Tipo: sim / não
Obrigatório: sim

### Já teve desmaio, perda de consciência ou tontura frequente?

Tipo: sim / não
Obrigatório: sim

### Sente palpitações, batimentos irregulares ou taquicardia sem causa aparente?

Tipo: sim / não
Obrigatório: sim

### Tem dor forte, recente ou progressiva em articulações, músculos, coluna ou tendões?

Tipo: sim / não
Obrigatório: sim

### Teve lesão nos últimos 12 meses que limita movimento ou exercício?

Tipo: sim / não
Obrigatório: sim

### Está com febre, infecção, mal-estar importante ou condição aguda no momento?

Tipo: sim / não
Obrigatório: sim

### Há alguma atividade que sabe que não deve fazer?

Tipo: sim / não
Obrigatório: sim

### Detalhes dos sinais de alerta ou limitações

Tipo: texto longo
Obrigatório: condicional
Exibir se: qualquer resposta da seção for `sim`

---

## Regra automática da seção

Se qualquer pergunta de sinal de alerta for respondida com `sim`, marcar:

```text
requiresProfessionalAttention = true
```

Esse status não bloqueia automaticamente a anamnese, mas deve aparecer como alerta para o profissional.

---

# 10. Medicamentos, suplementos, alergias e restrições

## Finalidade

Registrar informações relevantes para segurança, interpretação de avaliações e possíveis interferências em medidas corporais, desempenho ou atendimento.

## Campos

### Usa medicamentos atualmente?

Tipo: sim / não
Obrigatório: sim

### Quais medicamentos, dose e frequência?

Tipo: lista ou texto longo
Obrigatório: condicional
Exibir se: usa medicamentos

### Usa suplemento alimentar?

Tipo: sim / não
Obrigatório: sim

### Quais suplementos?

Tipo: lista ou texto longo
Obrigatório: condicional
Exibir se: usa suplementos

### Possui alergia a medicamento, alimento, látex, adesivo ou outro item?

Tipo: sim / não / não sei
Obrigatório: sim

### Quais alergias e qual reação apresentada?

Tipo: texto longo
Obrigatório: condicional
Exibir se: possui alergia ou não sabe

### Possui restrição alimentar por saúde, religião, preferência ou intolerância?

Tipo: sim / não
Obrigatório: sim

### Quais restrições?

Tipo: texto longo
Obrigatório: condicional
Exibir se: possui restrição alimentar

### Já teve reação adversa durante exercício, dieta, suplemento ou tratamento?

Tipo: sim / não
Obrigatório: sim

### Detalhar reação adversa

Tipo: texto longo
Obrigatório: condicional
Exibir se: já teve reação adversa

---

# 11. Dor, lesões e limitações

## Finalidade

Registrar dores, lesões e limitações relevantes para avaliações físicas, antropométricas, cineantropométricas, posturais ou fisioterapêuticas futuras.

## Campos

### Sente dor atualmente?

Tipo: sim / não
Obrigatório: sim

### Local da dor

Tipo: texto curto ou seleção anatômica futura
Obrigatório: condicional
Exibir se: sente dor atualmente

### Intensidade da dor

Tipo: escala de 0 a 10
Obrigatório: condicional
Exibir se: sente dor atualmente

### Frequência da dor

Tipo: seleção
Obrigatório: condicional
Exibir se: sente dor atualmente

Opções:

- Rara
- Ocasional
- Frequente
- Constante

### O que piora a dor?

Tipo: texto longo
Obrigatório: condicional
Exibir se: sente dor atualmente

### O que melhora a dor?

Tipo: texto longo
Obrigatório: condicional
Exibir se: sente dor atualmente

### A dor limita trabalho, treino, sono ou atividades diárias?

Tipo: sim / não
Obrigatório: condicional
Exibir se: sente dor atualmente

### Já teve fratura, entorse, luxação, hérnia, lesão muscular, ligamentar ou tendínea?

Tipo: sim / não
Obrigatório: sim

### Detalhes da lesão e data aproximada

Tipo: texto longo
Obrigatório: condicional
Exibir se: já teve lesão

### Possui limitação de movimento conhecida?

Tipo: sim / não
Obrigatório: sim

### Qual limitação?

Tipo: texto longo
Obrigatório: condicional
Exibir se: possui limitação de movimento

### Usa órtese, palmilha, bengala, muleta ou outro apoio?

Tipo: sim / não
Obrigatório: sim

### Qual apoio?

Tipo: texto curto
Obrigatório: condicional
Exibir se: usa apoio

---

# 12. Atividade física e rotina

## Finalidade

Registrar o nível geral de atividade física, rotina e contexto de esforço do cliente.

## Campos

### Pratica atividade física atualmente?

Tipo: sim / não
Obrigatório: sim

### Tipo de atividade

Tipo: texto ou seleção múltipla
Obrigatório: condicional
Exibir se: pratica atividade física

Opções sugeridas:

- Musculação
- Caminhada
- Corrida
- Ciclismo
- Natação
- Lutas
- Esporte coletivo
- Pilates
- Funcional
- Outro

### Frequência semanal

Tipo: número
Obrigatório: condicional
Exibir se: pratica atividade física

### Duração média por sessão

Tipo: número em minutos
Obrigatório: condicional
Exibir se: pratica atividade física

### Intensidade percebida

Tipo: seleção
Obrigatório: condicional
Exibir se: pratica atividade física

Opções:

- Leve
- Moderada
- Intensa
- Muito intensa

### Há quanto tempo pratica?

Tipo: texto curto
Obrigatório: condicional
Exibir se: pratica atividade física

### Já treinou antes?

Tipo: sim / não
Obrigatório: sim

### Modalidade esportiva principal, se houver

Tipo: texto curto
Obrigatório: não

### Objetivo esportivo, se houver

Tipo: texto curto
Obrigatório: não

### Trabalho ou rotina envolve muito tempo sentado?

Tipo: sim / não
Obrigatório: sim

### Observações sobre rotina

Tipo: texto longo
Obrigatório: não

---

# 13. Sono, estresse e hábitos

## Finalidade

Registrar fatores de estilo de vida que podem afetar saúde, composição corporal, recuperação, dor e desempenho.

## Campos

### Sono médio por noite

Tipo: número em horas
Obrigatório: sim

### Qualidade do sono

Tipo: seleção
Obrigatório: sim

Opções:

- Boa
- Regular
- Ruim

### Nível de estresse percebido

Tipo: seleção
Obrigatório: sim

Opções:

- Baixo
- Moderado
- Alto

### Tabagismo

Tipo: seleção
Obrigatório: sim

Opções:

- Nunca fumou
- Ex-fumante
- Fumante atual

### Consumo de álcool

Tipo: seleção
Obrigatório: sim

Opções:

- Não consome
- Ocasional
- Frequente

### Observações sobre sono, estresse ou hábitos

Tipo: texto longo
Obrigatório: não

---

# 14. Alimentação e hidratação básica

## Finalidade

Registrar informações alimentares gerais úteis para interpretação de avaliações físicas e corporais.

Essa seção não é uma avaliação nutricional.

## Campos

### Quantas refeições costuma fazer por dia?

Tipo: número
Obrigatório: não

### Tem rotina alimentar regular?

Tipo: sim / não
Obrigatório: sim

### Consumo de água aproximado por dia

Tipo: número em litros
Obrigatório: não

### Tem dificuldade alimentar importante?

Tipo: sim / não
Obrigatório: sim

### Qual dificuldade?

Tipo: texto longo
Obrigatório: condicional
Exibir se: tem dificuldade alimentar

### Segue alguma dieta atualmente?

Tipo: sim / não
Obrigatório: sim

### Qual dieta ou orientação?

Tipo: texto longo
Obrigatório: condicional
Exibir se: segue dieta

### Possui intolerância alimentar diagnosticada?

Tipo: sim / não
Obrigatório: sim

### Qual intolerância?

Tipo: texto longo
Obrigatório: condicional
Exibir se: possui intolerância

### Evacuação intestinal

Tipo: seleção
Obrigatório: não

Opções:

- Regular
- Irregular
- Constipação frequente
- Diarreia frequente
- Prefere não informar

### Observações nutricionais gerais

Tipo: texto longo
Obrigatório: não

---

# 15. Saúde feminina/reprodutiva, quando aplicável

## Finalidade

Registrar informações reprodutivas relevantes quando aplicável, sem tornar a seção obrigatória para todos.

## Regra de exibição

Essa seção deve aparecer conforme sexo biológico e decisão do profissional.

## Campos

### Esta seção se aplica ao cliente?

Tipo: sim / não / prefere não responder
Obrigatório: condicional

### Está gestante ou suspeita de gravidez?

Tipo: sim / não / não sei
Obrigatório: condicional
Exibir se: seção se aplica

### Está no pós-parto?

Tipo: sim / não
Obrigatório: condicional
Exibir se: seção se aplica

### Amamenta atualmente?

Tipo: sim / não
Obrigatório: condicional
Exibir se: seção se aplica

### Ciclo menstrual é regular?

Tipo: sim / não / não se aplica
Obrigatório: condicional
Exibir se: seção se aplica

### Usa contraceptivo hormonal ou DIU?

Tipo: sim / não / não se aplica
Obrigatório: condicional
Exibir se: seção se aplica

### Observações relevantes

Tipo: texto longo
Obrigatório: não

---

# 16. Histórico familiar relevante

## Finalidade

Registrar histórico familiar básico relacionado a riscos gerais.

## Campos

### Possui histórico familiar de doença cardiovascular importante?

Tipo: sim / não / não sei
Obrigatório: não

### Possui histórico familiar de diabetes?

Tipo: sim / não / não sei
Obrigatório: não

### Possui histórico familiar de hipertensão?

Tipo: sim / não / não sei
Obrigatório: não

### Possui histórico familiar de obesidade importante?

Tipo: sim / não / não sei
Obrigatório: não

### Possui histórico familiar de doença metabólica, neurológica, autoimune ou outra condição relevante?

Tipo: sim / não / não sei
Obrigatório: não

### Detalhes do histórico familiar

Tipo: texto longo
Obrigatório: condicional
Exibir se: qualquer resposta da seção for `sim` ou `não sei`

---

# 17. Observações gerais

## Finalidade

Permitir registro livre de informação relevante que não se encaixou nas seções anteriores.

## Campos

### Observações pessoais relevantes para o atendimento

Tipo: texto longo
Obrigatório: não

### Observações finais da anamnese geral

Tipo: texto longo
Obrigatório: não

### Observações técnicas do profissional

Tipo: texto longo
Obrigatório: não

---

# 18. Confirmação de veracidade

## Finalidade

Registrar que as informações foram declaradas pelo cliente ou responsável.

## Campos

### Cliente confirma que as informações fornecidas são verdadeiras e completas até onde tem conhecimento

Tipo: checkbox
Obrigatório: sim

### Cliente entende que a anamnese não substitui consulta, diagnóstico ou avaliação de profissional habilitado quando necessário

Tipo: checkbox
Obrigatório: sim

### Responsável legal confirma ciência, se aplicável

Tipo: checkbox
Obrigatório: condicional

### Profissional responsável pela revisão

Tipo: vínculo com `ProfessionalProfile`
Obrigatório: sim

### Data e hora da confirmação

Tipo: data/hora automática
Obrigatório: sim

---

# 19. Resumo técnico automático

## Finalidade

Gerar um resumo interno para facilitar leitura rápida pelo profissional.

Esse resumo não deve ser preenchido manualmente.

## Campos automáticos

- Cliente possui alerta de saúde?
- Cliente possui doença ou condição declarada?
- Cliente possui sinal de alerta?
- Usa medicamentos?
- Usa suplementos?
- Possui alergias?
- Possui restrições alimentares?
- Tem dor atual?
- Tem lesão ou limitação?
- Pratica atividade física atualmente?
- Possui rotina muito sedentária?
- Sono ruim?
- Estresse alto?
- Saúde feminina/reprodutiva exige atenção?
- Anamnese está completa?
- Requer revisão profissional?
- Data da última atualização

## Exemplo de resumo automático

```text
Cliente adulto, objetivo principal: emagrecimento e saúde geral.
Declara hipertensão controlada, usa medicamento contínuo, pratica caminhada 2x/semana e relata dor lombar leve.
Possui sinalização para atenção profissional antes de atividade intensa.
```

---

# 20. Regras de atualização durante avaliações

Quando uma avaliação usar uma resposta da anamnese geral:

1. a resposta deve aparecer como dado reaproveitado;
2. o profissional pode manter a resposta;
3. o profissional pode editar a resposta;
4. se editar, o sistema deve perguntar:

```text
Deseja atualizar também a anamnese geral do cliente?
```

Se responder `sim`:

- atualizar a anamnese geral;
- registrar data/hora;
- registrar profissional responsável;
- preservar snapshot na avaliação.

Se responder `não`:

- manter a anamnese geral sem alteração;
- salvar a nova resposta apenas na avaliação;
- preservar snapshot na avaliação.

---

# 21. Regras de obrigatoriedade

## Obrigatórias na anamnese geral

- Objetivo principal
- Saúde geral
- Sinais de alerta
- Medicamentos
- Suplementos
- Alergias
- Restrições alimentares
- Dor atual
- Lesões e limitações
- Atividade física atual
- Sono
- Estresse
- Tabagismo
- Consumo de álcool
- Rotina alimentar regular
- Dificuldade alimentar importante
- Dieta atual
- Intolerância alimentar
- Confirmação de veracidade
- Profissional responsável pela revisão
- Data/hora automática

## Condicionais

- Detalhes de doença ou condição
- Detalhes de orientação médica
- Detalhes de cirurgia
- Detalhes de acompanhamento profissional
- Detalhes de sinais de alerta
- Medicamentos, dose e frequência
- Suplementos usados
- Alergias e reações
- Restrições alimentares
- Reações adversas
- Local, intensidade e frequência da dor
- Detalhes de lesão
- Limitações de movimento
- Apoios usados
- Detalhes de atividade física
- Saúde feminina/reprodutiva
- Histórico familiar detalhado
- Confirmação do responsável legal

## Opcionais

- Prazo ou evento-alvo
- Prioridade do cliente
- Modalidade esportiva principal
- Objetivo esportivo
- Consumo de água
- Evacuação intestinal
- Observações gerais
- Observações técnicas

---

# 22. Ordem compacta para exibição em avaliações

Quando uma avaliação puxar a anamnese geral, ela não precisa mostrar tudo aberto.

A exibição recomendada é:

1. Resumo técnico automático
2. Alertas e sinais de risco
3. Medicamentos, suplementos, alergias e restrições
4. Dor, lesões e limitações
5. Atividade física e rotina
6. Alimentação e hidratação básica
7. Saúde feminina/reprodutiva, se aplicável
8. Observações relevantes
9. Botão: revisar anamnese completa

---

# 23. Chaves técnicas sugeridas

## Objetivo

- `goals.primaryGoals`
- `goals.otherGoalDescription`
- `goals.freeDescription`
- `goals.targetEventOrDeadline`
- `goals.priority`

## Saúde geral

- `health.hasDiagnosedCondition`
- `health.diagnosedConditionsDetails`
- `health.hasExerciseRestrictionAdvice`
- `health.exerciseRestrictionAdviceDetails`
- `health.hasCardiovascularCondition`
- `health.hasDiabetesOrGlycemicChange`
- `health.hasRenalHepaticRespiratoryOrMetabolicCondition`
- `health.hasCancerAutoimmuneNeurologicalOrRelevantCondition`
- `health.hadMajorSurgery`
- `health.majorSurgeryDetails`
- `health.isUnderProfessionalCare`
- `health.professionalCareDetails`

## Sinais de alerta

- `warningSigns.hasChestPain`
- `warningSigns.hasDisproportionateShortnessOfBreath`
- `warningSigns.hasFaintingOrFrequentDizziness`
- `warningSigns.hasPalpitations`
- `warningSigns.hasSevereOrProgressivePain`
- `warningSigns.hadRecentLimitingInjury`
- `warningSigns.hasAcuteCondition`
- `warningSigns.hasKnownForbiddenActivity`
- `warningSigns.details`
- `warningSigns.requiresProfessionalAttention`

## Medicamentos e restrições

- `medications.hasCurrentMedications`
- `medications.currentMedicationsDetails`
- `supplements.usesSupplements`
- `supplements.supplementsDetails`
- `allergies.hasAllergies`
- `allergies.allergyDetails`
- `restrictions.hasFoodRestrictions`
- `restrictions.foodRestrictionDetails`
- `adverseReactions.hasAdverseReaction`
- `adverseReactions.details`

## Dor e lesões

- `pain.hasCurrentPain`
- `pain.location`
- `pain.intensity`
- `pain.frequency`
- `pain.worsensWith`
- `pain.improvesWith`
- `pain.limitsDailyLife`
- `injuries.hasRelevantPastInjury`
- `injuries.details`
- `movement.hasKnownLimitation`
- `movement.limitationDetails`
- `supportDevices.usesSupportDevice`
- `supportDevices.details`

## Atividade física e rotina

- `lifestyle.isPhysicallyActive`
- `lifestyle.activityTypes`
- `lifestyle.weeklyFrequency`
- `lifestyle.averageSessionDurationMinutes`
- `lifestyle.perceivedIntensity`
- `lifestyle.practiceTime`
- `lifestyle.hasTrainedBefore`
- `lifestyle.mainSport`
- `lifestyle.sportGoal`
- `lifestyle.sedentaryRoutine`
- `lifestyle.routineNotes`

## Sono, estresse e hábitos

- `habits.averageSleepHours`
- `habits.sleepQuality`
- `habits.perceivedStressLevel`
- `habits.smokingStatus`
- `habits.alcoholConsumption`
- `habits.notes`

## Alimentação e hidratação

- `nutrition.mealsPerDay`
- `nutrition.hasRegularEatingRoutine`
- `nutrition.waterIntakeLitersPerDay`
- `nutrition.hasImportantEatingDifficulty`
- `nutrition.eatingDifficultyDetails`
- `nutrition.followsDiet`
- `nutrition.dietDetails`
- `nutrition.hasDiagnosedFoodIntolerance`
- `nutrition.foodIntoleranceDetails`
- `nutrition.bowelFunction`
- `nutrition.notes`

## Saúde feminina/reprodutiva

- `reproductive.applies`
- `reproductive.isPregnantOrSuspectsPregnancy`
- `reproductive.isPostpartum`
- `reproductive.isBreastfeeding`
- `reproductive.hasRegularCycle`
- `reproductive.usesHormonalContraceptiveOrIud`
- `reproductive.notes`

## Histórico familiar

- `familyHistory.hasCardiovascularHistory`
- `familyHistory.hasDiabetesHistory`
- `familyHistory.hasHypertensionHistory`
- `familyHistory.hasObesityHistory`
- `familyHistory.hasOtherRelevantHistory`
- `familyHistory.details`

## Confirmação

- `confirmation.truthDeclarationAccepted`
- `confirmation.professionalLimitAcknowledged`
- `confirmation.legalGuardianAccepted`
- `confirmation.reviewedByProfessionalId`
- `confirmation.confirmedAt`

---

# 24. Decisão final

A anamnese geral deve ser completa, mas não repetitiva.

Ela deve ser densa em informação, porém guiada por campos condicionais.

As avaliações específicas não devem duplicar perguntas gerais. Elas devem reutilizar respostas, permitir atualização explícita e salvar snapshot histórico da resposta usada.
