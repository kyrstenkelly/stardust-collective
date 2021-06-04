import type { GetStaticPropsContext } from 'next'
import { Bag } from '@components/icons'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import commerce from '@lib/api/commerce'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const { pages } = await commerce.getAllPages({ config, preview })
  const { categories } = await commerce.getSiteInfo({ config, preview })
  return {
    props: { pages, categories },
  }
}

export default function Orders() {
  return (
    <Container>
      <Text variant="pageHeading">My Orders</Text>
      <div className="flex-1 p-24 flex flex-col justify-center items-center ">
        <span className="border border-dashed border-secondary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-primary text-primary">
          <Bag className="absolute" />
        </span>
        <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
          No orders found
        </h2>
      </div>
    </Container>
  )
}

Orders.Layout = Layout
