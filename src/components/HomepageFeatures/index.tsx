import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Why Shopify',
    Svg: require('@site/static/img/undraw_shopify_1.svg').default,
    description: (
      <>
        Shopify powers millions of businesses worldwide. The all-in-one commerce
        platform to start, run, and grow a business.
      </>
    ),
  },
  {
    title: 'Shopify Stories',
    Svg: require('@site/static/img/undraw_shopify_2.svg').default,
    description: (
      <>
        Over a decade ago, we started a store to sell snowboards online. None of
        the ecommerce solutions at the time gave us the control we needed to be
        successful—so built our own.
      </>
    ),
  },
  {
    title: 'Our People',
    Svg: require('@site/static/img/undraw_shopify_3.svg').default,
    description: (
      <>
        Shopify has grown from 5 people in a coffee shop to over 10,000 across
        the globe. With millions of businesses powered by Shopify, we care
        deeply about the work we do.
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
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
  )
}

export default function HomepageFeatures(): JSX.Element {
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
  )
}
