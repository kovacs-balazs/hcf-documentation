import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Optimized',
    Svg: require('@site/static/img/optimized.svg').default,
    description: (
      <>
        We put lots of energy into optimising the plugin, so we can guarantee the best quality to our customers.
      </>
    ),
  },
  {
    title: 'Multi-Language',
    Svg: require('@site/static/img/letöltés-removebg-preview (1).svg').default,
    description: (
      <>
        Our plugin supports different languages per player.
        (Currently only english messages are available by default.)
      </>
    ),
  },
  {
    title: 'GUI Menus',
    Svg: require('@site/static/img/menu_big.svg').default,
    description: (
      <>
        We made menus for easier manage a faction. All function of faction available from menu.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
