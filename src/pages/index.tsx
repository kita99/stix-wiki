import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heading}>
          The right way to organize the world's cyber intelligence
        </Heading>
        <p className={styles.description}>{siteConfig.tagline}</p>
        <div className={styles.buttonGroup}>
          <Link className={styles.primaryButton} to="/docs/intro">Introduction</Link>
          <Link className={styles.secondaryButton} to="/docs/build">Start building</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Community portal for the Structured Threat Information Expression (STIX™) language and serialization format"
    >
      <HomepageHeader />

      <main>
        <div className={styles.featureSection}>
          <div className="container">
            <h2>Why use STIX?</h2>
            <div className={styles.cardGroup}>
              <div className={styles.card}>
                <div className={`la la-users ${styles.cardIcon}`} />
                <div className={styles.cardTitle}>
                  Collaboration
                </div>
                <div className={styles.cardDescription}>
                  Foster collaboration and information sharing within your security community, facilitating collective defense efforts against cyber adversaries
                </div>
              </div>

              <div className={styles.card}>
                <div className={`la la-stream ${styles.cardIcon}`} />
                <div className={styles.cardTitle}>
                  Automation
                </div>
                <div className={styles.cardDescription}>
                  Automate threat intelligence workflows and response processes, reducing manual overhead and enhancing operational efficiency
                </div>
              </div>

              <div className={styles.card}>
                <div className={`la la-cubes ${styles.cardIcon}`} />
                <div className={styles.cardTitle}>
                  Scalability
                </div>
                <div className={styles.cardDescription}>
                  Scale your threat intelligence operations effortlessly, accommodating the evolving needs and complexities of modern cybersecurity landscapes
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featureSection}>
          <div className="container">
            <h2>What FOSS is available?</h2>
            <div className={styles.projectList}>
              <div className={styles.projectListItem}>
                <div className={`lab la-github ${styles.projectIcon}`}/>
                <div className={styles.projectTitle}>
                  OpenTAXII
                </div>
                <div className={styles.projectDescription}>
                  TAXII server implementation in Python from EclecticIQ.
                </div>
                <a className={styles.projectLink} href="https://github.com/eclecticiq/OpenTAXII" target="_blank">View project</a>
              </div>

              <div className={styles.projectListItem}>
                <div className={`lab la-github ${styles.projectIcon}`}/>
                <div className={styles.projectTitle}>
                  stix-shifter
                </div>
                <div className={styles.projectDescription}>
                  Connect to data repositories using STIX Patterning, and return results as STIX Observations.
                </div>
                <a className={styles.projectLink} href="https://github.com/opencybersecurityalliance/stix-shifter" target="_blank">View project</a>
              </div>

              <div className={styles.projectListItem}>
                <div className={`lab la-github ${styles.projectIcon}`}/>
                <div className={styles.projectTitle}>
                  stixview
                </div>
                <div className={styles.projectDescription}>
                 Create embeddable and interactive STIX2 graphs.
                </div>
                <a className={styles.projectLink} href="https://github.com/traut/stixview" target="_blank">View project</a>
              </div>

              <div className={styles.projectListItem}>
                <div className={`lab la-github ${styles.projectIcon}`}/>
                <div className={styles.projectTitle}>
                  MISP-STIX
                </div>
                <div className={styles.projectDescription}>
                 Handle the conversion between MISP and STIX formats.
                </div>
                <a className={styles.projectLink} href="https://github.com/MISP/misp-stix" target="_blank">View project</a>
              </div>

              <div className={styles.projectListItem}>
                <div className={`lab la-github ${styles.projectIcon}`}/>
                <div className={styles.projectTitle}>
                  notion-stix
                </div>
                <div className={styles.projectDescription}>
                 Integrate Threat Intelligence into your Notion workspace.
                </div>
                <a className={styles.projectLink} href="https://github.com/brittonhayes/notion-stix" target="_blank">View project</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featureSection}>
          <div className="container">
            <h2>What is the purpose of this website?</h2>
            <p>
              Put quite simply, this website aims to be a portal into the current state of STIX, namely the spec and
              open source software built around it. We believe that STIX is an amazing standard but it is severely
              lacking in terms of community and core tooling, there are few STIX open source projects around, and
              the ones being actively maintained... are even fewer.

            </p>
            <p>We want to change this by:</p>
            <ol>
              <li>
                Indexing all the available knowledge about STIX
              </li>
              <li>
                Showcasing all the great stuff the community is building
              </li>
              <li>
                Incentivizing more people to build with it
              </li>
              <li>
                Building a community of like minded invididuals
              </li>
            </ol>
          </div>
        </div>
      </main>
    </Layout>
  );
}
