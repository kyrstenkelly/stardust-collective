import type { GetStaticPropsContext } from 'next'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'
import { ChevronUp } from '@components/icons'
import styles from './commissions.module.css'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  return {
    props: { pages },
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
