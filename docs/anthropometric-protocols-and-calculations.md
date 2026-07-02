# Protocolos e Cálculos — Avaliação Antropométrica Básica

**Documento:** Protocolos e cálculos da avaliação antropométrica básica  
**Entidade relacionada:** `AnthropometricAssessment`  
**Status:** rascunho técnico para discussão  
**Código:** sempre em inglês  
**Interface:** pt-BR e en  
**Unidades canônicas:**

- Massa corporal: `kg`
- Estatura: `cm` na coleta
- Estatura convertida: `m` nos cálculos de IMC
- Circunferências: `cm`
- Dobras cutâneas: `mm`
- Idade: anos completos
- Percentuais: `0–100`

---

## 1. Finalidade

Este documento define os protocolos, fórmulas, dados obrigatórios e regras de ativação usados na avaliação antropométrica básica.

A avaliação antropométrica básica usa:

- balança;
- estadiômetro ou recurso equivalente para estatura;
- fita métrica;
- adipômetro.

Esta avaliação não usa:

- paquímetro ósseo;
- diâmetros ósseos;
- somatotipo;
- fracionamento corporal anatômico completo;
- protocolo cineantropométrico completo.

---

## 2. Regra geral de ativação dos cálculos

Nenhum campo deve ser obrigatório apenas por existir no formulário.

Um campo só se torna obrigatório quando for necessário para:

1. protocolo selecionado;
2. cálculo ativado;
3. índice escolhido;
4. confirmação obrigatória da avaliação.

Regra geral:

```text
Protocolos escolhidos
→ determinam cálculos disponíveis
→ cálculos disponíveis determinam medidas obrigatórias
→ medidas extras permanecem opcionais
```

---

## 3. Protocolos de percentual de gordura

#### 3.1 Protocolo para clientes com 16 anos ou menos

###### Protocolo escolhido

**Slaughter et al. — tríceps + subescapular**

###### Faixa de uso no sistema

```text
Idade: até 16 anos
Sexo biológico: masculino ou feminino
```

###### Observação técnica

A literatura original é mais adequada para crianças e adolescentes, frequentemente usada em faixas como 8 a 18 anos. No sistema, o recorte operacional será “16 anos ou menos”, mas avaliações em crianças muito novas devem receber aviso de cautela.

###### Dados necessários

| Dado               |           Unidade | Obrigatório |
| ------------------ | ----------------: | ----------: |
| Sexo biológico     | `male` / `female` |         sim |
| Idade              |    anos completos |         sim |
| Dobra tricipital   |                mm |         sim |
| Dobra subescapular |                mm |         sim |

###### Soma usada

```text
S2 = dobra_tricipital_mm + dobra_subescapular_mm
```

###### Fórmulas

######## Masculino, S2 ≤ 35 mm

```text
body_fat_percent = 1.21 × S2 - 0.008 × S2² - 1.7
```

######## Masculino, S2 > 35 mm

```text
body_fat_percent = 0.783 × S2 + 1.6
```

######## Feminino, S2 ≤ 35 mm

```text
body_fat_percent = 1.33 × S2 - 0.013 × S2² - 2.5
```

######## Feminino, S2 > 35 mm

```text
body_fat_percent = 0.546 × S2 + 9.7
```

###### Campos obrigatórios gerados por este protocolo

- Dobra tricipital
- Dobra subescapular

###### Conversor Siri/Brozek

Não se aplica, pois o protocolo gera percentual de gordura diretamente.

---

#### 3.2 Protocolo para adultos de 17 a 60 anos — Jackson-Pollock 3 dobras

###### Protocolo escolhido

**Jackson-Pollock 3 dobras**

###### Faixa de uso no sistema

```text
Idade: 17 a 60 anos
Sexo biológico: masculino ou feminino
```

###### Dados necessários

| Dado                   |           Unidade | Masculino | Feminino |
| ---------------------- | ----------------: | --------: | -------: |
| Sexo biológico         | `male` / `female` |       sim |      sim |
| Idade                  |    anos completos |       sim |      sim |
| Dobra peitoral         |                mm |       sim |      não |
| Dobra abdominal        |                mm |       sim |      não |
| Dobra da coxa          |                mm |       sim |      sim |
| Dobra tricipital       |                mm |       não |      sim |
| Dobra supra-ilíaca     |                mm |       não |      sim |
| Conversor de densidade |    Siri ou Brozek |       sim |      sim |

###### Soma usada — masculino

```text
S3 = dobra_peitoral_mm + dobra_abdominal_mm + dobra_coxa_mm
```

###### Soma usada — feminino

```text
S3 = dobra_tricipital_mm + dobra_supra_iliaca_mm + dobra_coxa_mm
```

###### Fórmula de densidade corporal — masculino

```text
body_density =
  1.10938
  - 0.0008267 × S3
  + 0.0000016 × S3²
  - 0.0002574 × age_years
```

###### Fórmula de densidade corporal — feminino

```text
body_density =
  1.0994921
  - 0.0009929 × S3
  + 0.0000023 × S3²
  - 0.0001392 × age_years
```

###### Conversão para percentual de gordura

Selecionar uma das opções:

```text
Siri:
body_fat_percent = (495 / body_density) - 450
```

```text
Brozek:
body_fat_percent = (457 / body_density) - 414.2
```

###### Campos obrigatórios gerados por este protocolo

######## Masculino

- Dobra peitoral
- Dobra abdominal
- Dobra da coxa
- Conversor Siri ou Brozek

######## Feminino

- Dobra tricipital
- Dobra supra-ilíaca
- Dobra da coxa
- Conversor Siri ou Brozek

---

#### 3.3 Protocolo para adultos de 17 a 60 anos — Jackson-Pollock 7 dobras

###### Protocolo escolhido

**Jackson-Pollock 7 dobras**

###### Faixa de uso no sistema

```text
Idade: 17 a 60 anos
Sexo biológico: masculino ou feminino
```

###### Dados necessários

| Dado                   |           Unidade | Obrigatório |
| ---------------------- | ----------------: | ----------: |
| Sexo biológico         | `male` / `female` |         sim |
| Idade                  |    anos completos |         sim |
| Dobra peitoral         |                mm |         sim |
| Dobra axilar média     |                mm |         sim |
| Dobra tricipital       |                mm |         sim |
| Dobra subescapular     |                mm |         sim |
| Dobra abdominal        |                mm |         sim |
| Dobra supra-ilíaca     |                mm |         sim |
| Dobra da coxa          |                mm |         sim |
| Conversor de densidade |    Siri ou Brozek |         sim |

###### Soma usada

```text
S7 =
  dobra_peitoral_mm
  + dobra_axilar_media_mm
  + dobra_tricipital_mm
  + dobra_subescapular_mm
  + dobra_abdominal_mm
  + dobra_supra_iliaca_mm
  + dobra_coxa_mm
```

###### Fórmula de densidade corporal — masculino

```text
body_density =
  1.112
  - 0.00043499 × S7
  + 0.00000055 × S7²
  - 0.00028826 × age_years
```

###### Fórmula de densidade corporal — feminino

```text
body_density =
  1.097
  - 0.00046971 × S7
  + 0.00000056 × S7²
  - 0.00012828 × age_years
```

###### Conversão para percentual de gordura

```text
Siri:
body_fat_percent = (495 / body_density) - 450
```

```text
Brozek:
body_fat_percent = (457 / body_density) - 414.2
```

###### Campos obrigatórios gerados por este protocolo

- Dobra peitoral
- Dobra axilar média
- Dobra tricipital
- Dobra subescapular
- Dobra abdominal
- Dobra supra-ilíaca
- Dobra da coxa
- Conversor Siri ou Brozek

---

#### 3.4 Protocolo para clientes maiores de 60 anos

###### Protocolo escolhido

**Durnin-Womersley 4 dobras**

###### Faixa de uso no sistema

```text
Idade: maior que 60 anos
Sexo biológico: masculino ou feminino
```

###### Justificativa

Este protocolo usa quatro dobras cutâneas e possui equações por sexo e faixa etária, incluindo faixa acima de 50 anos. Para o sistema, ele será usado como protocolo operacional para clientes maiores de 60 anos.

###### Dados necessários

| Dado                   |           Unidade | Obrigatório |
| ---------------------- | ----------------: | ----------: |
| Sexo biológico         | `male` / `female` |         sim |
| Idade                  |    anos completos |         sim |
| Dobra bicipital        |                mm |         sim |
| Dobra tricipital       |                mm |         sim |
| Dobra subescapular     |                mm |         sim |
| Dobra supra-ilíaca     |                mm |         sim |
| Conversor de densidade |    Siri ou Brozek |         sim |

###### Soma usada

```text
S4 =
  dobra_bicipital_mm
  + dobra_tricipital_mm
  + dobra_subescapular_mm
  + dobra_supra_iliaca_mm
```

###### Log usado

```text
L = log10(S4)
```

###### Fórmula para maiores de 50 anos — masculino

```text
body_density = 1.1715 - 0.0779 × L
```

###### Fórmula para maiores de 50 anos — feminino

```text
body_density = 1.1339 - 0.0645 × L
```

###### Conversão para percentual de gordura

```text
Siri:
body_fat_percent = (495 / body_density) - 450
```

```text
Brozek:
body_fat_percent = (457 / body_density) - 414.2
```

###### Campos obrigatórios gerados por este protocolo

- Dobra bicipital
- Dobra tricipital
- Dobra subescapular
- Dobra supra-ilíaca
- Conversor Siri ou Brozek

---

## 4. Conversores de densidade corporal para percentual de gordura

Alguns protocolos não geram percentual de gordura diretamente. Eles geram primeiro densidade corporal.

Quando o protocolo gerar densidade corporal, o sistema deve exigir a escolha do conversor.

#### 4.1 Siri

###### Dados necessários

| Dado               | Unidade | Obrigatório |
| ------------------ | ------: | ----------: |
| Densidade corporal |    g/ml |         sim |

###### Fórmula

```text
body_fat_percent = (495 / body_density) - 450
```

---

#### 4.2 Brozek

###### Dados necessários

| Dado               | Unidade | Obrigatório |
| ------------------ | ------: | ----------: |
| Densidade corporal |    g/ml |         sim |

###### Fórmula

```text
body_fat_percent = (457 / body_density) - 414.2
```

---

## 5. Índices de saúde

#### 5.1 IMC tradicional — Quételet / OMS

###### Dados necessários

| Dado           | Unidade | Obrigatório |
| -------------- | ------: | ----------: |
| Massa corporal |      kg |         sim |
| Estatura       |       m |         sim |

###### Fórmula

```text
bmi_quetelet = body_mass_kg / height_m²
```

###### Observação

Este é o IMC tradicional, usado como índice de triagem. Não diferencia massa gorda, massa muscular, massa óssea ou massa residual.

---

#### 5.2 IMC ajustado por massa gorda — Grecco / FMRP-USP

###### Nome técnico recomendado

```text
BMIfat
```

###### Dados necessários

| Dado                   | Unidade | Obrigatório |
| ---------------------- | ------: | ----------: |
| Massa corporal         |      kg |         sim |
| Massa gorda percentual |       % |         sim |
| Estatura               |      cm |         sim |

###### Fórmula

```text
bmi_fat = ((3 × body_mass_kg) + (4 × body_fat_percent)) / height_cm
```

###### Observação crítica

Este índice depende de um percentual de gordura já calculado ou medido. Portanto, ele não deve ser apresentado como IMC independente.

Ele só pode ser calculado quando houver:

- massa corporal;
- estatura;
- percentual de gordura válido.

Se o percentual de gordura vier de dobras cutâneas, o sistema deve registrar qual protocolo gerou esse percentual.

---

#### 5.3 Novo IMC — Nick Trefethen

###### Dados necessários

| Dado           | Unidade | Obrigatório |
| -------------- | ------: | ----------: |
| Massa corporal |      kg |         sim |
| Estatura       |       m |         sim |

###### Fórmula

```text
bmi_trefethen = 1.3 × body_mass_kg / height_m^2.5
```

---

#### 5.4 IMC — Hindemburg Melão Jr.

###### Status

```text
Pendente de validação da fórmula final de 2021.
```

###### Fórmula educacional encontrada em material acadêmico

```text
bmi_melao_educational = 1.89 × body_mass_kg / height_m^3.144
```

###### Dados necessários

| Dado           | Unidade | Obrigatório |
| -------------- | ------: | ----------: |
| Massa corporal |      kg |         sim |
| Estatura       |       m |         sim |

---

#### 5.5 Relação cintura-quadril

###### Dados necessários

| Dado                      | Unidade | Obrigatório |
| ------------------------- | ------: | ----------: |
| Circunferência da cintura |      cm |         sim |
| Circunferência do quadril |      cm |         sim |

###### Fórmula

```text
waist_hip_ratio = waist_circumference_cm / hip_circumference_cm
```

---

#### 5.6 Relação cintura-estatura

###### Dados necessários

| Dado                      | Unidade | Obrigatório |
| ------------------------- | ------: | ----------: |
| Circunferência da cintura |      cm |         sim |
| Estatura                  |      cm |         sim |

###### Fórmula

```text
waist_height_ratio = waist_circumference_cm / height_cm
```

---

## 6. Composição corporal simples

Estes cálculos dependem de um percentual de gordura válido.

#### 6.1 Massa gorda

###### Dados necessários

| Dado                  | Unidade | Obrigatório |
| --------------------- | ------: | ----------: |
| Massa corporal        |      kg |         sim |
| Percentual de gordura |       % |         sim |

###### Fórmula

```text
fat_mass_kg = body_mass_kg × (body_fat_percent / 100)
```

---

#### 6.2 Massa livre de gordura

###### Dados necessários

| Dado           | Unidade | Obrigatório |
| -------------- | ------: | ----------: |
| Massa corporal |      kg |         sim |
| Massa gorda    |      kg |         sim |

###### Fórmula

```text
fat_free_mass_kg = body_mass_kg - fat_mass_kg
```

###### Observação

A massa livre de gordura inclui massa muscular, massa óssea, massa residual, água e demais componentes não classificados como massa gorda.

---

#### 6.3 Percentual de massa livre de gordura

###### Dados necessários

| Dado                   | Unidade | Obrigatório |
| ---------------------- | ------: | ----------: |
| Massa livre de gordura |      kg |         sim |
| Massa corporal         |      kg |         sim |

###### Fórmula

```text
fat_free_mass_percent = (fat_free_mass_kg / body_mass_kg) × 100
```

---

#### 6.4 Razão massa gorda / massa livre de gordura

###### Dados necessários

| Dado                   | Unidade | Obrigatório |
| ---------------------- | ------: | ----------: |
| Massa gorda            |      kg |         sim |
| Massa livre de gordura |      kg |         sim |

###### Fórmula

```text
fat_to_fat_free_mass_ratio = fat_mass_kg / fat_free_mass_kg
```

---

#### 6.5 Massa corporal alvo por percentual de gordura desejado

###### Dados necessários

| Dado                         | Unidade | Obrigatório |
| ---------------------------- | ------: | ----------: |
| Massa livre de gordura atual |      kg |         sim |
| Percentual de gordura alvo   |       % |         sim |

###### Fórmula

```text
target_body_mass_kg = fat_free_mass_kg / (1 - target_body_fat_percent / 100)
```

---

#### 6.6 Massa gorda alvo

###### Dados necessários

| Dado                       | Unidade | Obrigatório |
| -------------------------- | ------: | ----------: |
| Massa corporal alvo        |      kg |         sim |
| Percentual de gordura alvo |       % |         sim |

###### Fórmula

```text
target_fat_mass_kg = target_body_mass_kg × (target_body_fat_percent / 100)
```

---

#### 6.7 Diferença estimada de gordura corporal

###### Dados necessários

| Dado              | Unidade | Obrigatório |
| ----------------- | ------: | ----------: |
| Massa gorda atual |      kg |         sim |
| Massa gorda alvo  |      kg |         sim |

###### Fórmula

```text
estimated_fat_mass_difference_kg = fat_mass_kg - target_fat_mass_kg
```

---

## 7. Cálculos energéticos

#### 7.1 Taxa metabólica basal — Mifflin-St Jeor

###### Dados necessários

| Dado           |           Unidade | Obrigatório |
| -------------- | ----------------: | ----------: |
| Sexo biológico | `male` / `female` |         sim |
| Massa corporal |                kg |         sim |
| Estatura       |                cm |         sim |
| Idade          |    anos completos |         sim |

###### Fórmula — masculino

```text
bmr_kcal_day =
  (10 × body_mass_kg)
  + (6.25 × height_cm)
  - (5 × age_years)
  + 5
```

###### Fórmula — feminino

```text
bmr_kcal_day =
  (10 × body_mass_kg)
  + (6.25 × height_cm)
  - (5 × age_years)
  - 161
```

---

#### 7.2 Taxa metabólica basal — Katch-McArdle

###### Dados necessários

| Dado                   | Unidade | Obrigatório |
| ---------------------- | ------: | ----------: |
| Massa livre de gordura |      kg |         sim |

###### Fórmula

```text
bmr_katch_mcardle_kcal_day = 370 + (21.6 × fat_free_mass_kg)
```

###### Observação

Este cálculo depende da massa livre de gordura. Portanto, ele só deve ser ativado quando houver percentual de gordura válido.

---

#### 7.3 Gasto energético diário estimado

###### Dados necessários

| Dado                  |       Unidade | Obrigatório |
| --------------------- | ------------: | ----------: |
| Taxa metabólica basal |      kcal/dia |         sim |
| Fator de atividade    | multiplicador |         sim |

###### Fórmula

```text
tdee_kcal_day = bmr_kcal_day × activity_factor
```

###### Fatores de atividade sugeridos

| Nível               | Fator |
| ------------------- | ----: |
| Sedentário          |  1.20 |
| Levemente ativo     | 1.375 |
| Moderadamente ativo |  1.55 |
| Muito ativo         | 1.725 |
| Extremamente ativo  |  1.90 |

###### Observação

O fator de atividade é estimativo. Deve ser tratado como aproximação, não como prescrição nutricional.

---

## 8. Regras de obrigatoriedade por cálculo

#### 8.1 Sempre necessários para iniciar a avaliação

- Cliente
- Profissional avaliador
- Data da avaliação
- Sexo biológico
- Idade na data da avaliação

---

#### 8.2 Necessários para IMCs

###### Quételet

- Massa corporal
- Estatura

###### Trefethen

- Massa corporal
- Estatura

###### Melão Jr.

- Massa corporal
- Estatura

###### Grecco / BMIfat

- Massa corporal
- Estatura
- Percentual de gordura válido

---

#### 8.3 Necessários para índices de saúde

###### Relação cintura-quadril

- Cintura
- Quadril

###### Relação cintura-estatura

- Cintura
- Estatura

---

#### 8.4 Necessários para composição corporal

- Massa corporal
- Percentual de gordura válido

---

#### 8.5 Necessários para gasto energético

###### Mifflin-St Jeor

- Sexo biológico
- Massa corporal
- Estatura
- Idade
- Fator de atividade, se calcular gasto diário

###### Katch-McArdle

- Percentual de gordura válido
- Massa livre de gordura calculada
- Fator de atividade, se calcular gasto diário

---

## 9. Regras para seleção automática por idade

#### 9.1 Cliente com 16 anos ou menos

Exibir primeiro:

```text
Slaughter — tríceps + subescapular
```

Ocultar por padrão:

```text
Jackson-Pollock 3 dobras
Jackson-Pollock 7 dobras
Durnin-Womersley idosos
```

---

#### 9.2 Cliente de 17 a 60 anos

Exibir primeiro:

```text
Jackson-Pollock 3 dobras
Jackson-Pollock 7 dobras
```

Ocultar por padrão:

```text
Slaughter
Durnin-Womersley idosos
```

---

#### 9.3 Cliente maior de 60 anos

Exibir primeiro:

```text
Durnin-Womersley 4 dobras
```

Ocultar por padrão:

```text
Slaughter
Jackson-Pollock 3 dobras
Jackson-Pollock 7 dobras
```

---

## 10. Regra de rastreabilidade

Todo resultado calculado deve salvar:

- fórmula usada;
- protocolo usado;
- versão do protocolo;
- dados de entrada;
- unidades;
- data da avaliação;
- profissional avaliador;
- conversor usado, se houver;
- observações de limitação, se houver.

Exemplo:

```text
Jackson-Pollock 3 dobras + Siri
```

não é o mesmo resultado que:

```text
Jackson-Pollock 3 dobras + Brozek
```

---

## 11. Decisões pendentes

#### 11.1 Fórmula definitiva de Melão Jr. 2021

Pendente confirmar:

- expoente final;
- constante de normalização;
- unidade esperada da estatura;
- referência primária.

#### 11.2 Classificações por resultado

Ainda falta definir:

- classificação de percentual de gordura;
- classificação de relação cintura-quadril;
- classificação de relação cintura-estatura;
- classificação de IMC tradicional;
- classificação de BMIfat;
- classificação por idade e sexo, quando aplicável.

#### 11.3 Protocolo para crianças muito novas

Se o sistema permitir avaliação de crianças pequenas, deve exibir aviso técnico. O protocolo juvenil não deve ser apresentado como igualmente confiável para todas as idades abaixo de 16 anos.
