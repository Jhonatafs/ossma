# 01 — Product Vision

## 1. Project name

**OSSMA** means **Open Source Sport Management Application**.

OSSMA is an open source application for sport, health and related professionals. Its initial focus is client management, general anamnesis, professional evaluations, historical records, report preview in HTML and report export to PDF.

The application is designed to be local-first and offline-first, with no mandatory backend, no mandatory online login and no automatic synchronization in the MVP.

## 2. Origin and motivation

OSSMA was idealized by **JhonFs / Jhonata Sande** from practical experience of approximately seven years working in his father’s bodybuilding gym.

During this period, it became clear that many self-employed physical education professionals, small gyms, clinics and small health/sport establishments do not have easy access to good free applications suited to daily professional use.

Spreadsheets, Google Forms and Google Sheets can be useful, but they often become inefficient in daily routines, especially for professionals who work mainly from a mobile phone and need to register clients, collect anamnesis, perform evaluations and generate professional reports.

The first version of the idea appeared around five years ago, initially as a system based on forms and spreadsheets. Later, it evolved into the proposal of a dedicated open source application.

## 3. Problem

Professionals and small establishments in sport and health often rely on improvised tools to manage clients, anamnesis, evaluations and reports.

Common problems include:

- poor usability on mobile devices;
- dependence on internet connection;
- fragile organization of client history;
- lack of structured professional records;
- difficulty generating clear professional reports;
- weak professional or institutional identity in exported documents;
- dependence on generic tools such as spreadsheets;
- cost or access barriers in specialized tools.

## 4. Initial target audience

The initial target audience is:

- self-employed physical education professionals;
- personal trainers;
- small gyms;
- small clinics;
- small sport/health establishments;
- professionals who perform in-person evaluations and need organized records and exportable reports.

The evaluated person is not the primary user of the application in the MVP. The main user is the professional or establishment that registers clients, performs evaluations and generates reports.

## 5. Product value proposition

OSSMA should offer a free, open source, local-first and offline-first application that allows professionals and small establishments to:

- register clients;
- record general anamnesis;
- perform professional evaluations;
- preserve historical evaluation data;
- preview reports in HTML;
- export reports to PDF;
- identify the professional responsible for the evaluation;
- show institutional data in reports when applicable;
- work without a mandatory backend;
- work without mandatory online login;
- work across multiple platforms through PWA technology.

## 6. Initial technical strategy

OSSMA will initially be developed as a **PWA**.

The intended platforms are:

- Android;
- iOS;
- macOS;
- Windows;
- Linux;
- ChromeOS;
- modern browsers.

The MVP will store data locally on the user’s device/browser. It will not provide automatic synchronization between devices.

## 7. Technical principles

The project must follow these technical principles:

- open source;
- free to use;
- local-first;
- offline-first;
- no mandatory backend in the MVP;
- no mandatory online login in the MVP;
- no automatic synchronization in the MVP;
- no local password in the MVP;
- no local encryption in the MVP;
- incremental architecture;
- small and reviewable milestones;
- clear technical documentation;
- structured data as the source of truth;
- generated reports as derived artifacts;
- code, technical names and code comments in technical English;
- initial documentation in Brazilian Portuguese;
- internationalization from the beginning;
- canonical units for stored measurable data.

Initial stack decisions:

- **SvelteKit** as the application framework;
- **TypeScript** as the programming language;
- **pnpm** as the package manager;
- **Paraglide** for internationalization;
- **Dexie.js / IndexedDB** as the preferred local database strategy, unless a better technical option is justified later;
- **PWA** as the multiplatform distribution strategy.

## 8. Local/offline model

In the MVP, OSSMA will use a local/offline data model.

This means:

- data is stored on the user’s device/browser;
- no server is required for the core MVP workflow;
- no online account is required;
- no automatic synchronization exists between devices;
- backup is manual;
- the safety of the device is the responsibility of the user;
- clearing browser data or removing the application may cause data loss if no backup exists.

The onboarding, settings and help sections must explain this clearly.

## 9. MVP scope

The MVP includes:

- PWA local/offline application foundation;
- onboarding with application name, basic explanation, language selection, theme selection and mini tutorial;
- settings/help access to onboarding-related information;
- professional profile registration;
- institution profile registration;
- optional link between professional and institution;
- client registration;
- client photo;
- professional/institution logo;
- maximum initial image size of **2MB** per photo/logo;
- mandatory general client anamnesis;
- anthropometric evaluation;
- cineanthropometric evaluation;
- protocol selection when required by the evaluation;
- evaluation start requiring evaluation type, client and professional;
- incomplete evaluation draft after the required initial data exists;
- progressive saving during the evaluation process;
- historical snapshots of relevant client, professional and institution data;
- storage of raw data, calculable data, calculation results and metadata;
- regenerable HTML report based on saved structured data;
- PDF export on demand;
- textual professional stamp in reports;
- institutional header in reports when the professional has a linked institution;
- truth/awareness confirmation for anamnesis and evaluation answers;
- manual local backup;
- backup package as a **zip file containing JSON + images**, with room for technical refinement.

## 10. Out of MVP scope

The following items are not part of the MVP:

- workout plan module;
- diet module;
- food recommendation module;
- sport training protocol module;
- nutritional evaluation;
- postural evaluation;
- cardiorespiratory evaluation;
- physiotherapy evaluation;
- support/relation evaluation;
- combined evaluation execution;
- fused reports from multiple evaluation types;
- online login;
- mandatory backend;
- automatic synchronization between devices;
- local password;
- local encryption;
- team permission system;
- active/inactive/archived status for clients;
- active/inactive/archived status for professionals;
- digitalized signature;
- storing exported PDF files in the database;
- separate native applications for each platform.

These items may be considered in future versions.

## 11. Core entities

OSSMA’s initial domain is organized around four core concepts:

1. **Client**;
2. **Professional**;
3. **Institution**;
4. **Evaluation**.

### 11.1 Client

The client is the person being evaluated or followed.

A client has registration data, a general anamnesis, evaluations, history and exportable reports.

In the MVP, the client is not directly linked to a professional or institution. The historical relationship is recorded through evaluations.

### 11.2 Professional

The professional is the person who performs an evaluation.

Every evaluation must have exactly one responsible professional.

The professional profile exists to identify and validate who performed the evaluation, both inside the system and in exported reports.

The professional’s data must appear in the report as a textual professional stamp, similar in purpose to professional identification in medical prescriptions or exams.

A professional may be linked to at most one institution.

### 11.3 Institution

The institution represents a gym, clinic, hospital, office, team or similar organization.

The institution profile exists mainly for identification and institutional/marketing purposes in reports.

If the professional responsible for an evaluation is linked to an institution, the institution data must appear in the report header.

An institution may exist without any linked professional.

### 11.4 Evaluation

The evaluation is the central historical record of the system.

Each evaluation belongs to a client and is performed by exactly one professional.

The evaluation stores the data needed to preserve what happened at the time of the professional procedure.

## 12. Evaluation workflow

Before data collection starts, the system must require:

1. evaluation type;
2. client;
3. professional evaluator.

After these three items exist, the evaluation may be saved as an incomplete draft.

The core workflow is:

1. choose evaluation type;
2. choose client;
3. choose professional evaluator;
4. choose protocol, when applicable;
5. collect data;
6. progressively save the draft;
7. review anamnesis and evaluation-specific information;
8. register truth/awareness confirmation;
9. preview the report in HTML;
10. export to PDF, if desired.

The system may allow the user to start the evaluation flow from different places, such as the client page or the evaluations area. Internally, the same rules apply.

## 13. Initial evaluation types and technical source files

The initial supported evaluation types are:

- **AnthropometricEvaluation**;
- **CineanthropometricEvaluation**.

The detailed fields, technical rules and formulas are defined in dedicated technical files:

- `ficha-de-anamnese-geral-do-cliente.md` defines the general client anamnesis fields;
- `mapa-tecnico-de-calculo-para-antropometrica.md` defines the anthropometric evaluation fields, calculations and technical rules;
- `mapa_tecnico_de_cálculo_para_cineantropometria(1).md` defines the cineanthropometric evaluation fields, calculations and technical rules.

These files are treated as the technical source for detailed form fields, formulas and evaluation-specific rules. The product vision document does not duplicate all field-level content.

## 14. Protocols

Some evaluation types may require protocol selection before or during data collection.

For example, in anthropometric evaluation, the professional may choose a specific skinfold protocol such as a 3-site or 7-site protocol depending on the intended calculation.

A protocol may define:

- required fields;
- optional fields;
- formulas;
- calculation rules;
- report sections;
- interpretation constraints;
- required metadata.

The MVP supports the protocol structure needed for anthropometric and cineanthropometric evaluations, according to the technical source files.

## 15. Historical snapshots

An evaluation must preserve the facts of the moment in which it was performed or finalized.

For this reason, each evaluation must store snapshots of the relevant data from:

- client;
- professional;
- institution, when applicable.

This prevents future profile changes from changing the historical meaning of older evaluations.

Example:

If a professional changes institution later, an older evaluation must still show the institution linked to the professional at the moment of that evaluation.

## 16. Anamnesis

The client must have a mandatory general anamnesis in the registration flow.

The general anamnesis details are defined in:

- `ficha-de-anamnese-geral-do-cliente.md`.

Each evaluation type may also include evaluation-specific anamnesis/checklist fields.

When an evaluation uses an answer from the general anamnesis, the system simply displays the existing answer.

If the user changes an answer that came from the general anamnesis during an evaluation, the system must ask whether the general client anamnesis should also be updated.

The evaluation must always preserve the answer used in its own historical record.

## 17. Truth and awareness confirmation

Every evaluation must register confirmation that the client/professional reviewed the information and that the client declared the answers to be true to the best of their knowledge.

This confirmation must appear in the report.

The confirmation is not a medical diagnosis and does not transfer professional judgment to the application. It records that the information was declared, reviewed and used as part of the professional procedure.

## 18. Reports

Reports must be generated as HTML views from structured saved data.

The user may preview the report inside the application and export it to PDF when desired.

The database must not store exported PDF files.

The report must include:

- evaluation type;
- client data snapshot;
- professional data snapshot;
- institution data snapshot, when applicable;
- collected data;
- selected protocol, when applicable;
- calculated results;
- relevant anamnesis answers;
- observations;
- truth/awareness confirmation;
- professional textual stamp;
- institutional header, when applicable.

The HTML report is a generated view. The PDF is an exported artifact. The structured evaluation data is the source of truth.

## 19. Images

Images are part of the MVP.

Supported image types:

- client photo;
- professional logo/image, when applicable;
- institution logo.

Initial maximum size:

- **2MB per image**.

The application must handle images carefully to preserve quality while avoiding damage to performance, local database size, backup size and PWA usability.

The technical storage strategy may use database storage, local file-like storage or references, as long as backup and restoration remain reliable.

## 20. Backup

The MVP backup must be manual and local.

The intended backup package is:

- a **zip file** containing:
  - structured JSON data;
  - images required for restoration.

The backup must restore the functional local application data, including:

- clients;
- professionals;
- institutions;
- anamnesis data;
- evaluations;
- snapshots;
- calculation data/results;
- settings required for use;
- images, if required for restoration;
- schema/version metadata.

The backup is not meant to store exported PDF files.

Exported PDFs are user-owned documents outside the database and outside the core backup responsibility.

## 21. Units and internationalization

OSSMA must support internationalization from the start.

Initial languages:

- English;
- Brazilian Portuguese.

Public module names must be in English.

Public module naming pattern:

- **PascalCase**;
- example pattern: `FirstSecondThird`;
- examples: `ClientProfile`, `ProfessionalProfile`, `InstitutionProfile`, `AnthropometricEvaluation`, `CineanthropometricEvaluation`.

Measured data must be stored using canonical units defined by data type.

Examples:

- body mass in `kg`;
- height/stature according to field requirement, with conversion when needed;
- skinfolds in `mm`;
- perimeters in `cm`;
- diameters in `cm`;
- temperature in `°C`, when applicable;
- age in complete years;
- pediatric curve age in months, when applicable.

Canonical storage units allow future interface conversion according to language, region or configuration.

## 22. Initial implementation roadmap

The initial implementation should be incremental and avoid large destructive changes.

The refined milestone order is:

1. **Static HTML navigation prototype**  
   Build the complete navigation flow using simple static screens and no real data persistence.

2. **Static HTML form prototype**  
   Build the main forms as static/local UI prototypes, focusing on structure, fields and workflow before database integration.

3. **Local database foundation**  
   Add Dexie.js/IndexedDB schema and local persistence for the core entities.

4. **Local domain layer**  
   Implement local business rules, calculation functions and report data preparation. This is the local “backend-like” layer, but it does not require a server.

5. **Reports, export and backup**  
   Implement HTML report generation, PDF export, manual backup and restoration.

6. **Visual refinement and CSS**  
   Improve styling, responsiveness, accessibility and final interface polish.

CSS needed for basic usability may exist before milestone 6, but visual refinement is intentionally kept as a later stage to avoid polishing screens before the workflow and data model are stable.

## 23. Future modules

After the MVP foundation, OSSMA may evolve to include:

- workout plans;
- diets;
- food recommendations;
- sport training protocols;
- nutritional evaluation;
- postural evaluation;
- cardiorespiratory evaluation;
- physiotherapy evaluation;
- support/relation evaluation;
- combined evaluations;
- advanced report models;
- digitalized signature;
- local password;
- local encryption;
- network/cloud backup;
- optional synchronization;
- additional exports;
- optional collaborative features if a backend is ever introduced.

## 24. MVP summary

The OSSMA MVP must deliver a local/offline PWA that allows the user to register professionals, institutions and clients; collect a mandatory general anamnesis; perform anthropometric and cineanthropometric evaluations; save incomplete drafts progressively; preserve historical snapshots; regenerate HTML reports from structured data; export PDF reports; manage lightweight images; and perform manual backup through a zip package containing JSON and required images.

The goal of the MVP is not to cover the entire professional routine of sport and health professionals. Its goal is to build a reliable, extensible and well-documented foundation for professional evaluations.
