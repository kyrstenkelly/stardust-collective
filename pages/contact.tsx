import type { GetStaticPropsContext } from 'next'
import { Layout, SocialNav } from '@components/common'
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

export default function Contact() {
  return (
    <Container>
      <div className="flex m-8 lg:m-16">
        <div className="w-full">
          <section className="mb-12">
            <Text variant="heading" className="font-cursive text-6xl">
              Contact
            </Text>

            <Text variant="sectionHeading">Email/Social</Text>

            <Text>
              Please feel free to reach out to me via email, or any of my social
              channels:
            </Text>

            <SocialNav showLabels />
          </section>

          <section className="mb-12">
            <Text variant="sectionHeading">Contact Form</Text>

            <Text className="mb-8">
              Alternatively, fill out the form below and I'll get back to you as
              soon as I can!
            </Text>
          </section>
        </div>
      </div>
      <div className="lg:m-8">
        {/* <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script> */}
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrrSGtfdi9uwuJyP?backgroundColor=teal"
          frameBorder="0"
          width="100%"
          height="860"
          style={{ background: 'transparent' }}
        />
      </div>
    </Container>
  )
}

Contact.Layout = Layout
