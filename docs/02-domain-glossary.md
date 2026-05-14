# 02 — Glossário do Domínio

## 1. Objetivo do Documento

Este documento define os principais termos usados no projeto da aplicação. O objetivo é reduzir ambiguidades entre documentação, interface, regras de negócio, modelo de dados e implementação.

A aplicação envolve áreas diferentes, como avaliação física, antropometria, cineantropometria, postura, nutrição, relatórios profissionais e armazenamento local. Por isso, os termos precisam ser padronizados desde o início.

---

## 2. Convenções Gerais

### 2.1 Idioma da Interface

A aplicação deverá ser preparada para uso internacional desde o início.

No primeiro acesso, o sistema exibirá uma tela flutuante, centralizada, com mensagem de boas-vindas em inglês e opções iniciais de configuração, incluindo idioma, tema visual e preferências básicas.

Após essa configuração inicial, a interface deverá ser exibida no idioma escolhido pelo usuário.

O português brasileiro poderá ser um dos idiomas disponíveis, mas não deve ser tratado como limitação estrutural da aplicação.

### 2.2 Idioma do Código

Recomenda-se que entidades, tipos, variáveis, schemas e nomes internos do código sejam escritos em inglês técnico, para facilitar manutenção, integração com bibliotecas e contribuição open source.

Exemplo:

```text
Interface: Cliente
Código: Client

Interface: Avaliação Antropométrica
Código: AnthropometricEvaluation

Interface: Profissional
Código: Professional
```

### 2.3 Termo Principal para a Pessoa Avaliada

O termo padrão recomendado para a aplicação é **Cliente**.

Motivo: é o termo mais genérico e funciona para diferentes contextos, como academia, clínica, consultório, projeto social, avaliação esportiva ou atendimento autônomo.

Termos alternativos poderão aparecer em relatórios ou configurações futuras:

- aluno;
- paciente;
- atleta;
- avaliado;
- praticante.

Na primeira versão, o termo padrão será **Cliente**.

---

## 3. Termos Centrais

## 3.1 Aplicação

Sistema PWA offline-first, gratuito e open source, utilizado por profissionais desportivos e de saúde para registrar clientes, realizar avaliações presenciais, executar cálculos científicos e gerar relatórios profissionais.

**Nome técnico sugerido:** `Application`

---

## 3.2 PWA

Progressive Web App. Aplicação web que pode ser instalada no dispositivo e funcionar com recursos semelhantes aos de um aplicativo nativo.

No projeto, a PWA deverá funcionar completamente offline após o primeiro acesso.

**Nome técnico sugerido:** `ProgressiveWebApp`

---

## 3.3 Offline-First

Princípio arquitetural segundo o qual a aplicação deve funcionar prioritariamente sem internet.

No projeto, isso significa que as funcionalidades essenciais não devem depender de servidor, conta online, autenticação remota ou sincronização em nuvem.

---

## 3.4 Local-First

Princípio segundo o qual os dados são armazenados primeiro no dispositivo do usuário.

No projeto, os dados ficam salvos localmente e pertencem à instalação local da aplicação. Diferentes dispositivos não compartilham dados automaticamente.

---

## 3.5 Instalação Local

Instância da aplicação instalada ou acessada em um dispositivo específico.

Exemplo:

```text
A aplicação instalada no celular do profissional é uma instalação local.
A aplicação aberta no computador do mesmo profissional é outra instalação local.
```

Cada instalação local possui seus próprios dados.

**Nome técnico sugerido:** `LocalInstallation`

---

## 3.6 Banco Local

Base de dados armazenada no dispositivo do usuário.

Na aplicação, o banco local deverá guardar instituições, profissionais, clientes, anamneses, avaliações, resultados calculados, configurações e dados necessários para relatórios.

**Nome técnico sugerido:** `LocalDatabase`

---

## 3.7 Sincronização

Processo de manter os mesmos dados atualizados entre diferentes dispositivos ou servidores.

Na primeira versão, a aplicação não terá sincronização automática.

Transferência de dados entre dispositivos deverá ocorrer por exportação e importação manual.

**Nome técnico sugerido:** `Sync`

---

## 3.8 Backup Manual

Arquivo exportado pelo usuário contendo os dados locais da aplicação.

O backup serve para recuperação futura ou transferência manual para outro dispositivo.

**Nome técnico sugerido:** `ManualBackup`

---

## 3.9 Exportação de Dados

Ação de gerar um arquivo contendo os dados locais da aplicação.

Pode ser usada para backup, migração manual ou preservação de histórico.

**Nome técnico sugerido:** `DataExport`

---

## 3.10 Importação de Dados

Ação de carregar na aplicação um arquivo previamente exportado.

A estratégia de importação ainda deverá ser definida: substituir dados atuais, mesclar dados ou permitir escolha do usuário.

**Nome técnico sugerido:** `DataImport`

---

## 4. Pessoas e Organizações

## 4.1 Profissional

Pessoa que usa a aplicação para realizar avaliações, registrar dados, interpretar resultados e emitir documentos.

Exemplos:

- educador físico;
- fisioterapeuta;
- nutricionista;
- treinador esportivo;
- personal trainer;
- professor de musculação;
- professor de artes marciais;
- avaliador físico.

O profissional é o usuário principal da aplicação.

**Nome técnico sugerido:** `Professional`

---

## 4.2 Perfil Profissional

Conjunto de dados que identifica o profissional dentro da aplicação e nos relatórios.

Pode conter:

- nome completo;
- profissão;
- formação;
- especialidade;
- registro profissional;
- telefone;
- e-mail;
- assinatura ou identificação visual;
- observações profissionais.

**Nome técnico sugerido:** `ProfessionalProfile`

---

## 4.3 Profissional Ativo

Profissional selecionado no momento de uso da aplicação.

Toda avaliação, relatório ou documento emitido deve registrar o profissional responsável.

Em dispositivo compartilhado, a seleção do profissional ativo é essencial para identificar corretamente a autoria do atendimento.

**Nome técnico sugerido:** `ActiveProfessional`

---

## 4.4 Instituição

Organização local cadastrada na aplicação para representar uma academia, clínica, consultório, hospital, projeto social, equipe esportiva ou outro estabelecimento.

A instituição é opcional para uso individual, mas útil quando a aplicação for usada por mais de um profissional ou em dispositivo compartilhado.

**Nome técnico sugerido:** `Institution`

---

## 4.5 Perfil Institucional

Conjunto de dados que identifica uma instituição dentro da aplicação e nos relatórios.

Pode conter:

- nome da instituição;
- nome fantasia;
- documento institucional, se aplicável;
- telefone;
- e-mail;
- endereço;
- logotipo;
- rodapé padrão;
- observações.

**Nome técnico sugerido:** `InstitutionProfile`

---

## 4.6 Instituição Ativa

Instituição selecionada no momento de uso da aplicação.

Quando houver uma instituição ativa, avaliações e relatórios poderão ser vinculados a ela.

**Nome técnico sugerido:** `ActiveInstitution`

---

## 4.7 Cliente

Pessoa avaliada pelo profissional.

O cliente pode ser, dependendo do contexto:

- aluno;
- paciente;
- atleta;
- praticante;
- avaliado;
- cliente final.

Na primeira versão, a aplicação usará o termo **Cliente** como nomenclatura principal.

O cliente não terá acesso direto à aplicação na versão inicial.

**Nome técnico sugerido:** `Client`

---

## 4.8 Perfil do Cliente

Conjunto de dados cadastrais e relativamente estáveis do cliente.

Pode conter:

- nome completo;
- data de nascimento;
- sexo;
- telefone;
- e-mail;
- documento, se necessário;
- endereço, se necessário;
- profissão;
- responsável legal, se menor de idade;
- observações gerais.

Dados que mudam frequentemente, como peso, perímetros ou resultados de avaliações, não devem ser tratados como dados fixos do perfil.

**Nome técnico sugerido:** `ClientProfile`

---

## 4.9 Responsável Legal

Pessoa responsável por um cliente menor de idade ou incapaz, quando aplicável.

Pode conter:

- nome;
- parentesco;
- telefone;
- documento;
- observações.

**Nome técnico sugerido:** `LegalGuardian`

---

## 5. Atendimento e Registro

## 5.1 Atendimento Presencial

Situação em que o profissional coleta dados diretamente do cliente, presencialmente, usando instrumentos, observação clínica, entrevista, testes funcionais ou medidas corporais.

Na primeira versão, todas as avaliações serão presenciais.

**Nome técnico sugerido:** `InPersonAssessment`

---

## 5.2 Anamnese

Coleta estruturada de informações históricas, hábitos, queixas, objetivos, restrições e contexto do cliente.

A anamnese pode ser geral ou específica para um tipo de avaliação.

Exemplos:

- anamnese geral;
- anamnese postural;
- anamnese dietética;
- anamnese esportiva;
- histórico de lesões;
- histórico de saúde.

**Nome técnico sugerido:** `Anamnesis`

---

## 5.3 Queixa Principal

Principal motivo relatado pelo cliente para a avaliação ou atendimento.

Pode incluir dor, desconforto, limitação funcional, objetivo estético, objetivo esportivo ou demanda nutricional.

**Nome técnico sugerido:** `ChiefComplaint`

---

## 5.4 Histórico

Conjunto de eventos relevantes passados que podem influenciar a avaliação.

Exemplos:

- doenças;
- cirurgias;
- traumas;
- lesões;
- medicamentos;
- histórico esportivo;
- histórico alimentar;
- histórico familiar;
- hábitos de vida.

**Nome técnico sugerido:** `History`

---

## 5.5 Avaliação

Registro estruturado de uma coleta presencial realizada por um profissional em um cliente, em determinada data, com determinado objetivo.

Uma avaliação contém dados brutos, cálculos derivados, interpretações e, quando aplicável, relatório exportável.

Tipos principais:

- avaliação postural;
- avaliação antropométrica;
- avaliação nutricional;
- avaliação cineantropométrica.

**Nome técnico sugerido:** `Evaluation`

---

## 5.6 Tipo de Avaliação

Classificação que define o módulo, os campos, cálculos e relatório aplicáveis a uma avaliação.

Valores iniciais:

```text
postural
anthropometric
nutritional
kinanthropometric
```

**Nome técnico sugerido:** `EvaluationType`

---

## 5.7 Dados Brutos

Informações coletadas diretamente pelo profissional, antes de qualquer cálculo derivado.

Exemplos:

- peso;
- altura;
- perímetro de cintura;
- dobra tricipital;
- glicemia informada;
- distância dedo-chão;
- observação de alinhamento postural.

Dados brutos devem ser preservados para garantir rastreabilidade dos cálculos.

**Nome técnico sugerido:** `RawData`

---

## 5.8 Dados Derivados

Resultados calculados a partir dos dados brutos.

Exemplos:

- IMC;
- relação cintura-quadril;
- percentual de gordura;
- massa magra;
- somatotipo;
- disponibilidade energética;
- índice muscular-ósseo.

**Nome técnico sugerido:** `DerivedData`

---

## 5.9 Resultado Calculado

Valor produzido automaticamente pela aplicação a partir de fórmula, protocolo ou regra.

Todo resultado calculado deve ser rastreável aos dados brutos e à fórmula utilizada.

**Nome técnico sugerido:** `ComputedResult`

---

## 5.10 Interpretação Profissional

Texto ou classificação adicionada pelo profissional com base nos dados coletados, resultados calculados e julgamento técnico.

A aplicação pode auxiliar cálculos e organização, mas a interpretação final é responsabilidade do profissional.

**Nome técnico sugerido:** `ProfessionalInterpretation`

---

## 5.11 Recomendação

Orientação fornecida pelo profissional ao cliente após avaliação.

Pode ser relacionada a treino, postura, nutrição, acompanhamento, encaminhamento ou reavaliação.

**Nome técnico sugerido:** `Recommendation`

---

## 5.12 Observação Profissional

Campo livre usado pelo profissional para registrar informações relevantes que não se encaixam em campos estruturados.

**Nome técnico sugerido:** `ProfessionalNote`

---

## 6. Avaliação Postural

## 6.1 Avaliação Postural

Avaliação presencial voltada à observação e registro de alinhamentos, desvios, assimetrias, mobilidade, estabilidade, postura estática e postura funcional.

Tem foco principal em fisioterapeutas e profissionais que atuam com movimento, reabilitação, prevenção e acompanhamento funcional.

**Nome técnico sugerido:** `PosturalEvaluation`

---

## 6.2 Inspeção Estática

Observação da postura do cliente em posição parada, geralmente nos planos anterior, posterior e lateral.

**Nome técnico sugerido:** `StaticInspection`

---

## 6.3 Plano Anterior

Vista frontal do corpo usada para observar cabeça, ombros, tórax, pelve, joelhos e pés.

**Nome técnico sugerido:** `AnteriorView`

---

## 6.4 Plano Posterior

Vista de costas usada para observar coluna, escápulas, pelve, tendão calcâneo, retropé e assimetrias posteriores.

**Nome técnico sugerido:** `PosteriorView`

---

## 6.5 Plano Lateral

Vista de perfil usada para observar projeção da cabeça, curvaturas sagitais, pelve e joelhos.

**Nome técnico sugerido:** `LateralView`

---

## 6.6 Alinhamento Cranial

Observação da posição da cabeça em relação ao corpo, podendo envolver inclinação, rotação ou projeção anterior.

**Nome técnico sugerido:** `CranialAlignment`

---

## 6.7 Nível Acromial

Comparação da altura dos acrômios direito e esquerdo para verificar assimetria de ombros.

**Nome técnico sugerido:** `AcromialLevel`

---

## 6.8 Ângulo de Charpy

Ângulo infraesternal observado ou medido na avaliação postural, relacionado à configuração torácica e mecânica respiratória.

**Nome técnico sugerido:** `CharpyAngle`

---

## 6.9 Triângulo de Tales

Espaço visual entre tronco e braço em repouso, comparado entre os lados direito e esquerdo.

**Nome técnico sugerido:** `TalesTriangle`

---

## 6.10 EIAS

Espinhas ilíacas antero-superiores. Marcos anatômicos usados na avaliação de alinhamento pélvico.

**Nome técnico sugerido:** `AnteriorSuperiorIliacSpine`

---

## 6.11 Cristas Ilíacas

Referências anatômicas usadas para observar simetria horizontal da pelve.

**Nome técnico sugerido:** `IliacCrests`

---

## 6.12 Genu Valgum

Alinhamento em valgo dos joelhos, popularmente conhecido como joelhos para dentro.

**Nome técnico sugerido:** `GenuValgum`

---

## 6.13 Genu Varum

Alinhamento em varo dos joelhos, popularmente conhecido como joelhos arqueados.

**Nome técnico sugerido:** `GenuVarum`

---

## 6.14 Genu Recurvatum

Hiperextensão dos joelhos observada no plano lateral.

**Nome técnico sugerido:** `GenuRecurvatum`

---

## 6.15 Teste de Adams

Teste clínico usado na observação de assimetrias do tronco e possíveis desvios escolióticos durante flexão anterior.

**Nome técnico sugerido:** `AdamsTest`

---

## 6.16 ROM

Range of Motion. Amplitude de movimento articular medida em graus, geralmente por goniometria ou inclinometria.

**Nome técnico sugerido:** `RangeOfMotion`

---

## 6.17 Goniometria

Método de medição da amplitude articular usando goniômetro.

**Nome técnico sugerido:** `Goniometry`

---

## 6.18 Inclinometria

Método de medição de inclinação ou amplitude usando inclinômetro.

**Nome técnico sugerido:** `Inclinometry`

---

## 6.19 Teste de Schober

Teste utilizado para avaliar mobilidade lombar por variação de distância em centímetros.

**Nome técnico sugerido:** `SchoberTest`

---

## 6.20 Apoio Unipodal

Teste de equilíbrio no qual o cliente permanece apoiado em uma perna por determinado tempo.

**Nome técnico sugerido:** `SingleLegStance`

---

## 7. Avaliação Antropométrica

## 7.1 Avaliação Antropométrica

Avaliação presencial voltada à mensuração corporal, acompanhamento de composição global, perímetros, simetrias, proporções e evolução física.

No projeto, tem foco principal em musculação, hipertrofia, estética e acompanhamento corporal geral.

**Nome técnico sugerido:** `AnthropometricEvaluation`

---

## 7.2 Massa Corporal

Peso corporal total do cliente, medido em quilogramas.

**Nome técnico sugerido:** `BodyMass`

---

## 7.3 Estatura

Altura total do cliente, medida em centímetros.

**Nome técnico sugerido:** `Stature`

---

## 7.4 Envergadura

Distância entre as pontas dos dedos médios com os braços abertos lateralmente.

**Nome técnico sugerido:** `ArmSpan`

---

## 7.5 Perimetria

Mensuração de circunferências corporais em centímetros.

Exemplos:

- braço;
- antebraço;
- cintura;
- abdome;
- quadril;
- coxa;
- panturrilha.

**Nome técnico sugerido:** `GirthMeasurement`

---

## 7.6 Perímetro Segmentar

Circunferência medida em uma região específica do corpo.

**Nome técnico sugerido:** `SegmentalGirth`

---

## 7.7 Braço Relaxado

Circunferência do braço medida sem contração voluntária.

**Nome técnico sugerido:** `RelaxedArmGirth`

---

## 7.8 Braço Contraído

Circunferência do braço medida durante contração voluntária.

**Nome técnico sugerido:** `FlexedArmGirth`

---

## 7.9 Cintura

Circunferência medida na região mais estreita do tronco, conforme protocolo definido.

**Nome técnico sugerido:** `WaistGirth`

---

## 7.10 Abdome

Circunferência medida na altura do umbigo ou ponto definido pelo protocolo.

**Nome técnico sugerido:** `AbdominalGirth`

---

## 7.11 Quadril

Circunferência medida na maior protuberância dos glúteos.

**Nome técnico sugerido:** `HipGirth`

---

## 7.12 Simetria Bilateral

Comparação entre medidas do lado direito e esquerdo do corpo.

Exemplos:

- braço direito versus braço esquerdo;
- coxa direita versus coxa esquerda;
- panturrilha direita versus panturrilha esquerda.

**Nome técnico sugerido:** `BilateralSymmetry`

---

## 7.13 IMC

Índice de Massa Corporal. Relação entre massa corporal e estatura ao quadrado.

**Nome técnico sugerido:** `BodyMassIndex`

---

## 7.14 RCQ

Relação Cintura-Quadril. Índice usado para avaliar distribuição corporal de gordura.

**Nome técnico sugerido:** `WaistHipRatio`

---

## 7.15 RCEst

Relação Cintura-Estatura. Índice calculado pela divisão da cintura pela estatura.

**Nome técnico sugerido:** `WaistHeightRatio`

---

## 7.16 Índice de Adônis

Relação entre circunferência de ombros e cintura.

No projeto, deve ser tratado como referência estética, não como parâmetro clínico universal.

**Nome técnico sugerido:** `AdonisIndex`

---

## 7.17 Definição Muscular Aparente

Escala subjetiva utilizada pelo profissional para estimar visualmente o grau aparente de definição muscular.

Deve ser identificada no relatório como avaliação subjetiva.

**Nome técnico sugerido:** `ApparentMuscleDefinition`

---

## 8. Avaliação Nutricional

## 8.1 Avaliação Nutricional

Avaliação presencial voltada à coleta de dados dietéticos, clínico-nutricionais, bioquímicos, metabólicos e desportivos.

Tem foco em dietas, recomendações alimentares, necessidades energéticas e suporte nutricional ao desempenho ou à saúde.

**Nome técnico sugerido:** `NutritionalEvaluation`

---

## 8.2 Anamnese Dietética

Coleta de informações sobre hábitos alimentares, preferências, aversões, alergias, intolerâncias, rotina alimentar e ingestão pregressa.

**Nome técnico sugerido:** `DietaryAnamnesis`

---

## 8.3 Recordatório de 24 Horas

Registro detalhado dos alimentos e líquidos consumidos pelo cliente nas últimas 24 horas.

**Nome técnico sugerido:** `TwentyFourHourRecall`

---

## 8.4 Diário Alimentar

Registro alimentar realizado ao longo de um ou mais dias.

**Nome técnico sugerido:** `FoodDiary`

---

## 8.5 QFA

Questionário de Frequência Alimentar. Instrumento usado para registrar a frequência de consumo de alimentos ou grupos alimentares.

**Nome técnico sugerido:** `FoodFrequencyQuestionnaire`

---

## 8.6 Alergia Alimentar

Resposta adversa imunológica relacionada ao consumo de determinado alimento.

**Nome técnico sugerido:** `FoodAllergy`

---

## 8.7 Intolerância Alimentar

Dificuldade ou reação adversa não necessariamente imunológica ao consumo de determinado alimento ou componente.

**Nome técnico sugerido:** `FoodIntolerance`

---

## 8.8 Escala de Bristol

Escala usada para classificar a forma e consistência das fezes.

**Nome técnico sugerido:** `BristolStoolScale`

---

## 8.9 Hidratação

Registro da ingestão hídrica diária e/ou sinais relacionados ao estado de hidratação.

**Nome técnico sugerido:** `Hydration`

---

## 8.10 Exame Clínico-Nutricional

Observação de sinais físicos relacionados ao estado nutricional, como pele, cabelos, unhas, mucosas, saúde bucal e sinais gastrointestinais.

**Nome técnico sugerido:** `ClinicalNutritionalExam`

---

## 8.11 Dados Bioquímicos

Resultados de exames laboratoriais informados ou registrados na avaliação nutricional.

Exemplos:

- hemograma;
- glicemia;
- insulina;
- hemoglobina glicada;
- perfil lipídico;
- ferritina;
- vitamina B12;
- vitamina D;
- ureia;
- creatinina;
- TGO;
- TGP;
- CK.

**Nome técnico sugerido:** `BiochemicalData`

---

## 8.12 Valor de Referência Laboratorial

Intervalo ou valor de referência informado pelo laboratório para determinado exame.

Deve ser registrado porque pode variar conforme método, laboratório, idade, sexo e condição clínica.

**Nome técnico sugerido:** `LaboratoryReferenceRange`

---

## 8.13 TMB

Taxa Metabólica Basal. Estimativa do gasto energético em repouso absoluto.

**Nome técnico sugerido:** `BasalMetabolicRate`

---

## 8.14 GET

Gasto Energético Total. Estimativa do gasto energético diário total, considerando metabolismo basal, atividade física e outros componentes.

**Nome técnico sugerido:** `TotalEnergyExpenditure`

---

## 8.15 Macronutrientes

Nutrientes necessários em maior quantidade na dieta.

Principais:

- proteínas;
- carboidratos;
- gorduras.

**Nome técnico sugerido:** `Macronutrients`

---

## 8.16 Micronutrientes

Vitaminas e minerais necessários em menor quantidade.

**Nome técnico sugerido:** `Micronutrients`

---

## 8.17 Disponibilidade de Energia

Indicador calculado pela relação entre ingestão energética, gasto energético do exercício e massa livre de gordura.

Fórmula conceitual:

```text
EA = (ingestão energética - gasto energético do exercício) / massa livre de gordura
```

Unidade:

```text
kcal/kg MLG/dia
```

**Nome técnico sugerido:** `EnergyAvailability`

---

## 8.18 Suplementação

Registro do uso atual ou prévio de suplementos, ergogênicos, vitaminas, minerais ou compostos bioativos.

**Nome técnico sugerido:** `Supplementation`

---

## 9. Avaliação Cineantropométrica

## 9.1 Avaliação Cineantropométrica

Avaliação técnica avançada que relaciona medidas corporais, composição corporal, proporcionalidade, somatotipo e desempenho físico.

No projeto, é voltada principalmente para atletas, treinamento esportivo e análise morfológica avançada.

**Nome técnico sugerido:** `KinanthropometricEvaluation`

---

## 9.2 ISAK

International Society for the Advancement of Kinanthropometry. Organização associada à padronização de medidas cineantropométricas.

No projeto, o termo será usado para indicar perfil de medidas antropométricas padronizadas.

**Nome técnico sugerido:** `ISAK`

---

## 9.3 Perfil ISAK

Conjunto de medidas coletadas segundo padronização antropométrica.

Pode incluir:

- medidas básicas;
- dobras cutâneas;
- perímetros;
- diâmetros ósseos.

**Nome técnico sugerido:** `ISAKProfile`

---

## 9.4 Dobra Cutânea

Medida da espessura de uma prega de pele e tecido subcutâneo, geralmente em milímetros.

**Nome técnico sugerido:** `Skinfold`

---

## 9.5 Perímetro

Circunferência corporal medida em centímetros.

**Nome técnico sugerido:** `Girth`

---

## 9.6 Diâmetro Ósseo

Distância entre pontos ósseos anatômicos, geralmente medida com paquímetro antropométrico.

**Nome técnico sugerido:** `BoneBreadth`

---

## 9.7 Estatura Sentada

Altura medida com o cliente sentado, usada para análise de proporção entre tronco e membros inferiores.

**Nome técnico sugerido:** `SittingHeight`

---

## 9.8 Índice Córmico

Relação entre estatura sentada e estatura total, útil para análise de proporção corporal.

**Nome técnico sugerido:** `CormicIndex`

---

## 9.9 Modelo de 5 Componentes

Modelo de composição corporal que fraciona a massa corporal em cinco componentes:

- massa adiposa;
- massa muscular;
- massa óssea;
- massa residual;
- massa epitelial.

**Nome técnico sugerido:** `FiveComponentModel`

---

## 9.10 Massa Adiposa

Componente relacionado ao tecido adiposo corporal.

**Nome técnico sugerido:** `AdiposeMass`

---

## 9.11 Massa Muscular

Componente relacionado ao tecido muscular corporal.

**Nome técnico sugerido:** `MuscleMass`

---

## 9.12 Massa Óssea

Componente relacionado à estrutura óssea corporal.

**Nome técnico sugerido:** `BoneMass`

---

## 9.13 Massa Residual

Componente relacionado a órgãos internos, fluidos e demais tecidos não classificados como adiposo, muscular, ósseo ou epitelial.

**Nome técnico sugerido:** `ResidualMass`

---

## 9.14 Massa Epitelial

Componente relacionado principalmente à pele.

**Nome técnico sugerido:** `EpithelialMass`

---

## 9.15 Somatotipo

Classificação morfológica do corpo em três componentes: endomorfia, mesomorfia e ectomorfia.

**Nome técnico sugerido:** `Somatotype`

---

## 9.16 Heath-Carter

Método de determinação do somatotipo antropométrico.

**Nome técnico sugerido:** `HeathCarterMethod`

---

## 9.17 Endomorfia

Componente do somatotipo relacionado à adiposidade relativa.

**Nome técnico sugerido:** `Endomorphy`

---

## 9.18 Mesomorfia

Componente do somatotipo relacionado à robustez musculoesquelética relativa.

**Nome técnico sugerido:** `Mesomorphy`

---

## 9.19 Ectomorfia

Componente do somatotipo relacionado à linearidade relativa.

**Nome técnico sugerido:** `Ectomorphy`

---

## 9.20 Somatocarta

Representação gráfica do somatotipo em coordenadas bidimensionais.

**Nome técnico sugerido:** `Somatochart`

---

## 9.21 SAD

Somatotype Attitudinal Distance. Distância entre dois somatotipos, como o somatotipo atual e um somatotipo alvo.

**Nome técnico sugerido:** `SomatotypeAttitudinalDistance`

---

## 9.22 Phantom

Modelo de proporcionalidade que compara medidas do indivíduo com um modelo humano de referência.

**Nome técnico sugerido:** `PhantomModel`

---

## 9.23 Z-Score

Valor padronizado que expressa o quanto uma medida se distancia de um modelo ou referência.

**Nome técnico sugerido:** `ZScore`

---

## 9.24 Índice Muscular-Ósseo

Relação entre massa muscular e massa óssea.

Pode ser usado como indicador da relação entre musculatura e estrutura de suporte.

**Nome técnico sugerido:** `MuscleBoneIndex`

---

## 9.25 Razão Adiposa-Muscular

Relação entre massa adiposa e massa muscular.

**Nome técnico sugerido:** `AdiposeMuscleRatio`

---

## 9.26 Área Muscular do Braço

Estimativa da área muscular da seção transversal do braço, geralmente calculada a partir de perímetro e dobra cutânea.

**Nome técnico sugerido:** `ArmMuscleArea`

---

## 9.27 Área Muscular da Coxa

Estimativa da área muscular da seção transversal da coxa.

**Nome técnico sugerido:** `ThighMuscleArea`

---

## 10. Protocolos, Fórmulas e Ciência

## 10.1 Protocolo

Conjunto padronizado de procedimentos, medidas, fórmulas, critérios e limitações para realizar uma avaliação ou cálculo.

**Nome técnico sugerido:** `Protocol`

---

## 10.2 Fórmula

Expressão matemática usada para calcular um resultado a partir de dados de entrada.

Toda fórmula deve ter referência, unidade, população indicada e testes automatizados.

**Nome técnico sugerido:** `Formula`

---

## 10.3 Referência Científica

Fonte bibliográfica usada para justificar protocolo, fórmula, classificação ou recomendação.

**Nome técnico sugerido:** `ScientificReference`

---

## 10.4 População Indicada

Grupo para o qual determinada fórmula ou protocolo foi desenvolvido ou validado.

Exemplos:

- adultos;
- idosos;
- adolescentes;
- homens;
- mulheres;
- atletas;
- sedentários.

**Nome técnico sugerido:** `TargetPopulation`

---

## 10.5 Limitação do Protocolo

Restrição, cuidado ou condição que pode afetar a validade de uma fórmula ou protocolo.

Exemplo:

```text
Esta equação não foi validada para crianças.
```

**Nome técnico sugerido:** `ProtocolLimitation`

---

## 10.6 Alerta de Aplicabilidade

Mensagem exibida quando um protocolo é usado fora da população indicada ou com dados insuficientes.

**Nome técnico sugerido:** `ApplicabilityWarning`

---

## 10.7 Unidade de Medida

Unidade usada para registrar um dado quantitativo.

Exemplos:

- kg;
- cm;
- mm;
- graus;
- segundos;
- kcal;
- g/kg.

**Nome técnico sugerido:** `MeasurementUnit`

---

## 10.8 Validação de Dados

Processo de verificar se os dados informados são coerentes, completos e compatíveis com a unidade e protocolo esperados.

**Nome técnico sugerido:** `DataValidation`

---

## 10.9 Rastreabilidade do Cálculo

Capacidade de identificar quais dados brutos, fórmula, protocolo e versão foram usados para gerar determinado resultado.

**Nome técnico sugerido:** `CalculationTraceability`

---

## 10.10 Versão do Protocolo

Identificador usado para saber qual versão de uma fórmula, protocolo ou implementação foi usada em uma avaliação.

**Nome técnico sugerido:** `ProtocolVersion`

---

## 11. Relatórios e Documentos

## 11.1 Relatório

Documento gerado pela aplicação a partir de uma avaliação ou conjunto de dados do cliente.

Pode ser exportado em PDF e entregue ao cliente.

**Nome técnico sugerido:** `Report`

---

## 11.2 Relatório Profissional

Relatório com identificação do profissional, instituição, cliente, data, protocolo, resultados, interpretação, recomendações e rodapé técnico.

Deve ter aparência formal e valor profissional.

**Nome técnico sugerido:** `ProfessionalReport`

---

## 11.3 PDF

Formato principal de exportação de relatórios na primeira versão.

**Nome técnico sugerido:** `PdfDocument`

---

## 11.4 Snapshot do Relatório

Cópia dos dados relevantes no momento da emissão do relatório.

Serve para impedir que alterações futuras no perfil profissional, institucional ou nos dados do cliente modifiquem relatórios já emitidos.

**Nome técnico sugerido:** `ReportSnapshot`

---

## 11.5 Rodapé Profissional

Área do relatório contendo identificação do profissional, instituição, contato, registro profissional, aviso técnico ou informações configuradas.

**Nome técnico sugerido:** `ProfessionalFooter`

---

## 11.6 Assinatura Digitalizada

Imagem ou representação visual da assinatura do profissional.

Na primeira versão, não deve ser tratada como assinatura digital jurídica avançada.

**Nome técnico sugerido:** `SignatureImage`

---

## 11.7 Aviso Técnico

Texto que informa limitações da avaliação, responsabilidade profissional, natureza estimativa de cálculos ou restrições do método.

**Nome técnico sugerido:** `TechnicalDisclaimer`

---

## 11.8 Modelo de Relatório

Estrutura visual e textual usada para gerar relatórios.

Pode incluir cabeçalho, seções, tabelas, gráficos, rodapé e ordem das informações.

**Nome técnico sugerido:** `ReportTemplate`

---

## 12. Segurança e Privacidade

## 12.1 Privacidade Local

Conceito de que os dados ficam armazenados no dispositivo do usuário, sem envio automático para servidor externo.

**Nome técnico sugerido:** `LocalPrivacy`

---

## 12.2 Separação Organizacional

Separação simples entre instituições, profissionais e clientes dentro da aplicação.

Não representa controle de segurança forte.

**Nome técnico sugerido:** `OrganizationalSeparation`

---

## 12.3 Controle de Acesso

Mecanismo que limita quem pode visualizar ou alterar dados.

Na primeira versão, não haverá controle de acesso robusto.

**Nome técnico sugerido:** `AccessControl`

---

## 12.4 Administrador

Usuário com permissões superiores de gerenciamento.

Na primeira versão, a aplicação não terá administrador.

**Nome técnico sugerido:** `Administrator`

---

## 12.5 Responsabilidade do Usuário

Princípio segundo o qual o usuário é responsável pela proteção do dispositivo, cuidado com backups, exclusão de dados e uso adequado das informações.

**Nome técnico sugerido:** `UserResponsibility`

---

## 12.6 Dados Sensíveis

Informações pessoais ou de saúde que exigem cuidado especial.

Exemplos:

- histórico de saúde;
- exames;
- avaliação nutricional;
- dados corporais;
- queixas;
- lesões;
- informações clínicas.

**Nome técnico sugerido:** `SensitiveData`

---

## 13. Estado, Histórico e Evolução

## 13.1 Histórico de Avaliações

Conjunto de avaliações realizadas para o mesmo cliente ao longo do tempo.

**Nome técnico sugerido:** `EvaluationHistory`

---

## 13.2 Evolução

Comparação entre avaliações realizadas em datas diferentes.

Exemplos:

- evolução de peso;
- evolução de cintura;
- evolução de perímetros;
- evolução de composição corporal;
- evolução de postura;
- evolução de indicadores nutricionais.

**Nome técnico sugerido:** `ProgressTracking`

---

## 13.3 Comparação Longitudinal

Análise de dados do mesmo cliente ao longo do tempo.

**Nome técnico sugerido:** `LongitudinalComparison`

---

## 13.4 Data da Avaliação

Data em que a avaliação foi realizada presencialmente.

**Nome técnico sugerido:** `EvaluationDate`

---

## 13.5 Data de Emissão

Data em que o relatório foi gerado ou exportado.

Pode ser diferente da data da avaliação.

**Nome técnico sugerido:** `IssueDate`

---

## 13.6 Status da Avaliação

Estado atual de uma avaliação.

Valores possíveis:

```text
rascunho
concluída
emitida
arquivada
```

Sugestão técnica:

```text
draft
completed
issued
archived
```

**Nome técnico sugerido:** `EvaluationStatus`

---

## 14. Termos que Devem Ser Evitados ou Usados com Cuidado

## 14.1 Diagnóstico

A aplicação não deve prometer diagnóstico automático.

O termo pode ser usado apenas quando apropriado à atuação legal do profissional e ao contexto de uso.

Preferir:

```text
interpretação profissional
achados da avaliação
observações
indicadores
classificações
```

---

## 14.2 Laudo

O termo laudo pode ter peso técnico, clínico ou jurídico. Deve ser evitado no MVP, salvo se houver definição clara de uso por profissional habilitado.

Preferir:

```text
relatório
relatório profissional
relatório de avaliação
```

---

## 14.3 Paciente

Pode ser adequado em contexto clínico, especialmente fisioterapia e nutrição, mas não é universal.

Na interface geral, preferir **Cliente**.

---

## 14.4 Aluno

Adequado para academias, musculação, artes marciais e treinamento. Não é universal.

Na interface geral, preferir **Cliente**.

---

## 14.5 Atleta

Adequado para avaliação esportiva e cineantropométrica. Não é universal.

Na interface geral, preferir **Cliente**.

---

## 14.6 Avaliação por Foto

Fora do escopo inicial.

Fotos, caso existam futuramente, devem ser tratadas apenas como anexos documentais, não como fonte primária de cálculo ou diagnóstico automatizado.

---

## 15. Mapeamento Interface × Código

| Termo na Interface           | Nome Técnico Sugerido         | Observação                            |
| ---------------------------- | ----------------------------- | ------------------------------------- |
| Aplicação                    | `Application`                 | Sistema completo                      |
| Instituição                  | `Institution`                 | Opcional no uso individual            |
| Profissional                 | `Professional`                | Usuário principal                     |
| Cliente                      | `Client`                      | Pessoa avaliada                       |
| Anamnese                     | `Anamnesis`                   | Geral ou específica                   |
| Avaliação                    | `Evaluation`                  | Registro principal de coleta          |
| Avaliação Postural           | `PosturalEvaluation`          | Módulo postural                       |
| Avaliação Antropométrica     | `AnthropometricEvaluation`    | Módulo de medidas corporais básicas   |
| Avaliação Nutricional        | `NutritionalEvaluation`       | Módulo nutricional                    |
| Avaliação Cineantropométrica | `KinanthropometricEvaluation` | Módulo avançado                       |
| Dados Brutos                 | `RawData`                     | Coleta direta                         |
| Resultados Calculados        | `ComputedResult`              | Saída de fórmulas                     |
| Protocolo                    | `Protocol`                    | Regra científica padronizada          |
| Fórmula                      | `Formula`                     | Cálculo matemático                    |
| Relatório                    | `Report`                      | Documento gerado                      |
| PDF                          | `PdfDocument`                 | Exportação inicial                    |
| Backup                       | `ManualBackup`                | Exportação de dados locais            |
| Importação                   | `DataImport`                  | Entrada de dados exportados           |
| Exportação                   | `DataExport`                  | Saída de dados locais                 |
| Banco Local                  | `LocalDatabase`               | Persistência no dispositivo           |
| Profissional Ativo           | `ActiveProfessional`          | Autor da avaliação atual              |
| Instituição Ativa            | `ActiveInstitution`           | Contexto institucional atual          |
| Snapshot do Relatório        | `ReportSnapshot`              | Cópia dos dados no momento da emissão |

---

## 16. Decisões Terminológicas Consolidadas

- O termo principal para a pessoa avaliada será **Cliente**.
- O termo **Profissional** será usado para quem opera a aplicação.
- O termo **Instituição** será usado para academias, clínicas, consultórios, equipes e estabelecimentos similares.
- O termo **Avaliação** será usado como entidade genérica para qualquer coleta estruturada.
- O termo **Relatório** será preferido em vez de laudo.
- O termo **Interpretação Profissional** será preferido em vez de diagnóstico automático.
- O termo **Offline-first** descreve a prioridade de funcionamento sem internet.
- O termo **Local-first** descreve a prioridade de armazenamento no dispositivo.
- Separação entre profissionais e instituições será chamada de **separação organizacional**, não segurança forte.

---

## 17. Decisões Terminológicas Complementares

As seguintes decisões foram definidas após revisão do glossário:

- A aplicação permitirá personalizar o termo usado para a pessoa avaliada, podendo exibir Cliente, Aluno, Paciente, Atleta ou Avaliado.
- Cada tipo de avaliação terá seu próprio documento de resultado/relatório.
- A lista inicial de idiomas suportados será: inglês e português.
- O idioma padrão do primeiro acesso será inglês.
- A estrutura de internacionalização da interface será baseada em i18n.

---

## 18. Questões em Aberto

As seguintes decisões ainda precisam ser refinadas:

- definir nomenclatura final dos módulos no menu principal;
- definir nomes técnicos finais no código;
- definir como os avisos técnicos aparecerão nos relatórios;
- definir se haverá termos legais específicos para uso nutricional, fisioterapêutico e desportivo.

---

## 19. Respostas as questões do ponto 18

### Menu principal

```text
Início
Clientes
Perfil
Backup
Configurações
```

### Estrutura de Perfil

```text
Perfil
├── Profissionais
└── Instituições
```

### Estrutura de Clientes

```text
Clientes
├── Lista de clientes cadastrados
├── Novo cliente
├── Avaliações
└── Histórico de avaliações
```

No histórico, o profissional poderá:

```text
abrir avaliação;
visualizar resultado/relatório;
editar avaliação.
```

### CRUD

Haverá CRUD para:

```text
clientes;
avaliações.
```

A **anamnese geral** será diferente:

```text
pode ser editada;
não pode ser excluída isoladamente;
só é excluída junto com o cliente.
```

Durante uma avaliação, partes pertinentes da anamnese geral poderão ser editadas.

### Código

```text
Todo o código será em inglês técnico.
```

Inclui:

```text
nomes de arquivos;
pastas;
variáveis;
funções;
tipos;
classes;
comentários;
documentação técnica interna.
```

### Avisos técnicos

Os avisos técnicos serão:

```text
uma seção dentro do resultado/relatório;
genéricos;
claros;
abrangentes;
não específicos por tipo de avaliação.
```

Ou seja, não haverá um aviso diferente para postural, outro para nutricional, outro para antropometria etc.

### Carimbo profissional

Toda página do relatório terá um **carimbo profissional**, semelhante a um carimbo físico.

Pode conter:

```text
nome do profissional;
contatos;
endereço;
logo;
registro profissional;
instituição;
outros dados configurados.
```

Esse carimbo deve aparecer em todas as páginas do relatório.
