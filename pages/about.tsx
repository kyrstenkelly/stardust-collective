import { Layout } from '@components/common'
import Image from 'next/image'
import { Container, Text } from '@components/ui'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })

  return {
    props: {
      pages,
    },
    revalidate: 14400,
  }
}

export default function About({
  pages,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="flex m-8 lg:m-16">
        <Image
          src="/kyrsten.jpg"
          width={300}
          height={300}
          className="rounded-full"
        />
        <div className="mx-8 lg:mx-16">
          <p className="font-cursive text-6xl">Hello!</p>
          <Text className="mt-8">My name is Kyrsten Kelly.</Text>
        </div>
      </div>
    </Container>
  )
}

About.Layout = Layout
