import type {ReactNode} from 'react';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const highlights = [
  {
    title: 'Governance-first structure',
    description:
      'HEVIDS frames enterprise AI through six functions: Harmony, Ethics, Veracity, Integrity, Discernment, and Safeguards.',
  },
  {
    title: 'Versioned publication',
    description:
      'The documentation is prepared for published releases and future version switcher updates as the standard evolves.',
  },
  {
    title: 'Cross-framework alignment',
    description:
      'Informative references provide a policy-oriented bridge to the EU AI Act, NIST AI RMF, and ISO/IEC 42001.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <p className={styles.kicker}>Open governance standard</p>
      <Heading as="h1" className={styles.title}>
        {siteConfig.title}
      </Heading>
      <p className={styles.lead}>{siteConfig.tagline}</p>
      <p className={styles.sublead}>
        Organized for durable, auditable publication in the style of a
        standards body.
      </p>
      <div className={styles.actions}>
        <Link className={styles.primaryAction} to="/docs/">
          Read the docs
        </Link>
        <Link className={styles.secondaryAction} to="/docs/">
          View published docs
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="The HEVIDS Standard"
      description="An open standard for enterprise AI governance."
    >
      <main className={styles.page}>
        <HomepageHeader />
        <section className={styles.grid} aria-label="Highlights">
          {highlights.map((item) => (
            <article key={item.title} className={styles.card}>
              <Heading as="h2" className={styles.cardTitle}>
                {item.title}
              </Heading>
              <p className={styles.cardBody}>{item.description}</p>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  );
}