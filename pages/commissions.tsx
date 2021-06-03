import type { GetStaticPropsContext } from 'next'
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
export default function Commissions() {
  return (
    <Container>
      <div className="flex m-4 md:m-8 lg:m-16">
        <div className="w-full">
          <Text variant="heading" className="font-cursive text-6xl">
            Commissions
          </Text>

          <Text className="mb-8">
            Want a custom piece of art? Fill out the form below!
          </Text>

          <iframe
            src="https://airtable.com/embed/shreedeZhCWDKjsgI?backgroundColor=teal"
            frameBorder="0"
            width="100%"
            height="2990"
            style={{ background: 'transparent', border: '1px solid #ccc' }}
          />
        </div>
      </div>
    </Container>
  )
}

Commissions.Layout = Layout
