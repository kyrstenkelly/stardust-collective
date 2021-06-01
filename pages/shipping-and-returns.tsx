import type { GetStaticPropsContext } from 'next'
import { Layout } from '@components/common'
import { Container, Text } from '@components/ui'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/common/get-all-pages'

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

export default function ShippingReturns() {
  return (
    <Container>
      <div className="flex m-4 md:m-8 lg:m-16">
        <div className="w-full">
          <Text variant="heading" className="font-cursive text-6xl mb-8">
            Shipping &amp; Returns
          </Text>

          <Text
            variant="sectionHeading"
            className="font-semibold text-2xl mb-4"
          >
            Returns Policy
          </Text>

          <Text className="mb-8">
            You may return most items within 30 days of delivery for a full
            refund. We'll also pay the return shipping costs if the return is a
            result of our error (you received an incorrect or defective item,
            etc.). You should expect to receive your refund within four weeks of
            giving your package to the return shipper, however, in many cases
            you will receive a refund more quickly. This time period includes
            the transit time for us to receive your return from the shipper (5
            to 10 business days), the time it takes us to process your return
            once we receive it (3 to 5 business days), and the time it takes
            your bank to process our refund request (5 to 10 business days). If
            you need to return an item, please Contact Us with your order number
            and details about the product you would like to return. We will
            respond quickly with instructions for how to return items from your
            order.
          </Text>

          <Text
            variant="sectionHeading"
            className="font-semibold text-2xl mb-4"
          >
            Shipping
          </Text>

          <Text className="mb-8">
            Currently, we only ship to the United States. If you are outside of
            the United States and would like to check in on the status of
            international shipping, please Contact Us. When you place an order,
            we will estimate shipping and delivery dates for you based on the
            availability of your items and the shipping options you choose.
            Depending on the shipping provider you choose, shipping date
            estimates may appear on the shipping quotes page. Please also note
            that the shipping rates for many items we sell are weight-based.
          </Text>
        </div>
      </div>
    </Container>
  )
}

ShippingReturns.Layout = Layout
