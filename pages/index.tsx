import { Layout } from '@components/common'
import { Grid } from '@components/ui'
import { ProductCard } from '@components/product'
import commerce from '@lib/api/commerce'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const { products } = await commerce.getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })
  const { categories } = await commerce.getSiteInfo({ config, preview })
  const { pages } = await commerce.getAllPages({ config, preview })

  return {
    props: {
      products,
      categories,
      pages,
    },
    revalidate: 14400,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {/* <Hero headline="stardust collective" /> */}
      <Grid layout="home" className="mt-6">
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
    </>
  )
}

Home.Layout = Layout
