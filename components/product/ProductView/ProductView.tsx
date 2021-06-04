import cn from 'classnames'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { FC, useState, useEffect } from 'react'
import s from './ProductView.module.css'

import { ProductSlider } from '@components/product'
import { Button, Container, Select, Text, useUI, Option } from '@components/ui'

import type { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import { useAddItem } from '@framework/cart'

import { getVariant, getDefaultOption, SelectedOptions } from '../helpers'
import WishlistButton from '@components/wishlist/WishlistButton'

interface Props {
  className?: string
  children?: any
  product: Product
}

const ProductView: FC<Props> = ({ product }) => {
  const addItem = useAddItem()
  const { openCartSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [choices, setChoices] = useState<SelectedOptions>({
    size: getDefaultOption(product.options, 'size'),
  })

  // Select the correct variant based on choices
  const variant = getVariant(product, choices)
  const { price } = usePrice({
    amount: variant?.prices?.price.value || product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode:
      variant?.prices?.price.currencyCode || product.price.currencyCode!,
  })

  useEffect(() => {
    // Selects the default option
    product.variants[0].options?.forEach((v) => {
      setChoices((choices) => ({
        ...choices,
        [v.displayName.toLowerCase()]: v.values[0].label.toLowerCase(),
      }))
    })
  }, [])

  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
      })
      openCartSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <Container className="max-w-none w-full" clean>
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />
      <div className={cn(s.root, 'fit')}>
        <div className={cn(s.productDisplay, 'fit')}>
          <div className={s.sliderContainer}>
            <ProductSlider key={product.id}>
              {product.images.map((image, i) => (
                <div key={image.url} className={s.imageContainer}>
                  <Image
                    className={s.img}
                    src={image.url!}
                    alt={image.alt || 'Product Image'}
                    width={1050}
                    height={500}
                    priority={i === 0}
                    quality="85"
                  />
                </div>
              ))}
            </ProductSlider>
          </div>
        </div>
        <div className={s.sidebar}>
          <section>
            <div className={s.nameBox}>
              <h1 className={s.name}>{product.name}</h1>
              {process.env.COMMERCE_WISHLIST_ENABLED && (
                <WishlistButton
                  className={s.wishlistButton}
                  productId={product.id}
                  variant={product.variants[0]! as any}
                />
              )}
            </div>
            <div className={s.price}>{price}</div>
            {product.options?.map((opt) => {
              const activeChoice = (choices as any)[
                opt.displayName.toLowerCase()
              ]
              const selectOptions = opt.values.map(
                (v) =>
                  ({
                    label: v.label,
                    value: v.label.toLowerCase(),
                  } as Option)
              )
              return (
                <Select
                  defaultOption={selectOptions.find(
                    (o) => o.label === activeChoice
                  )}
                  key={opt.displayName}
                  label={opt.displayName}
                  options={selectOptions}
                  onChange={(value: Option) => {
                    setChoices((choices) => {
                      return {
                        ...choices,
                        [opt.displayName.toLowerCase()]: value.label,
                      }
                    })
                  }}
                />
              )
            })}

            <div className="pb-14 break-words w-full max-w-xl">
              <Text html={product.description} />
            </div>
          </section>
          <div>
            <Button
              aria-label="Add to Cart"
              type="button"
              className={s.button}
              onClick={addToCart}
              loading={loading}
              disabled={!variant && product.options.length > 0}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
