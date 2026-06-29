---
title: Purpose & Scope
sidebar_label: Purpose & Scope
 
id: intro
 
sidebar_position: 1
slug: /
---

# The HEVIDS Standard for Enterprise AI Governance

**Harmony · Ethics · Veracity · Integrity · Discernment · Safeguards**

| | |
|---|---|
| **Document identifier** | HEVIDS-STD-2026-v1.0 |
| **Version** | v1.0 — Draft Release, Open for Public Comment |
| **Status** | Public draft |
| **Steward** | Dr. Anderson D. Prewitt, DRADPA LLC |
| **License (framework text)** | Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0) |
| **Trademark notice** | HEVIDS™ is a trademark (U.S. Serial No. 99376104, published for opposition). "AEGIS" and "Sigvis Matrix" are also trademarks. The marks are protected; the standard's text is open. |
| **DOI** | https://doi.org/10.5281/zenodo.21045472 |
| **Canonical reference text** | Prewitt, A. D. (2026). *Enhancing Business Value Through Artificial Intelligence.* ISBN 979-8-9995924-8-4 |
| **Companion formal paper** | Prewitt, A. D. (2026). *Institutionalizing Trust: HEVIDS and Reverse Game Theory as a Sociotechnical Intervention for Enterprise AI Alignment.* SSRN 6915218 |

---

## 1. Purpose and Scope

HEVIDS is an open standard for governing the behavior of deployed artificial intelligence systems inside organizations. It addresses a specific and narrow question: **once an AI system has been built and approved for use, what governs what it is permitted to do, and how is that governance evidenced?**

HEVIDS is deliberately scoped *below* model training and *above* runtime engineering. It does not govern how a model is trained — that is the domain of frameworks like Constitutional AI. It does not specify a particular runtime enforcement architecture — that is an implementation choice left to adopting organizations and tooling vendors. HEVIDS specifies the **governance outcomes** a deployed AI system and its surrounding institutional process must satisfy, expressed as a structured set of functions, categories, and subcategories that an organization can assess against, attest to, and produce evidence for.

The standard is intended for:

- Corporate boards and audit committees exercising AI oversight duties
- Chief AI Officers, Chief Risk Officers, and compliance functions implementing governance programs
- Third-party auditors and assessors evaluating organizational AI governance maturity
- Regulators, standards bodies, and academic researchers studying AI governance frameworks
- Toolmakers building runtime enforcement, monitoring, or audit products that wish to align their outputs to a named external standard

## 2. Relationship to Other Frameworks

HEVIDS is not a replacement for existing AI risk and compliance frameworks. It is designed to sit alongside them and to be cross-walked against them (see [Informative References](./informative-references)).

- **NIST AI Risk Management Framework** — NIST AI RMF defines a four-function risk management process (GOVERN, MAP, MEASURE, MANAGE). HEVIDS defines *what* a governed AI system's behavior must satisfy; NIST AI RMF defines the organizational *process* for managing AI risk generally. Organizations following NIST AI RMF can use HEVIDS as the substantive content of their MAP and MEASURE functions for deployed-system behavior.
- **ISO/IEC 42001** — ISO 42001 is a certifiable AI management system standard. HEVIDS subcategories are designed to produce evidence artifacts (documented testing, named accountability, retained logs) that map directly onto ISO 42001's clause-level evidence requirements.
- **EU AI Act** — The EU AI Act imposes binding legal obligations on high-risk AI systems. HEVIDS is not a legal compliance instrument and does not substitute for legal review. It is designed so that an organization implementing HEVIDS in good faith will, as a byproduct, generate much of the documentary evidence the Act's risk-management, record-keeping, and human-oversight articles require.
- **Constitutional AI and model-level alignment techniques** — These govern what a model is *trained* to do. HEVIDS governs what a *deployed* model is *permitted* to do. The two are complementary; an organization may use both.