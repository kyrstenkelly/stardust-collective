import type { Product, ProductOption } from '@commerce/types'

export type SelectedOptions = {
  size: string | null
}

export function getDefaultOption(options: ProductOption[], optionType: string) {
  let defaultOption = null
  options.forEach((option) => {
    if (option.displayName.toLowerCase() === optionType.toLowerCase()) {
      option.values.forEach((v) => {
        if (v.isDefault) {
          defaultOption = v.label.toLowerCase()
        }
      })
    }
  })
  return defaultOption
}

export function getVariant(product: Product, opts: SelectedOptions) {
  const variant = product.variants.find((variant) => {
    return Object.entries(opts).every(([key, value]) =>
      variant.options.find((option) => {
        if (
          option.__typename === 'MultipleChoiceOption' &&
          option.displayName.toLowerCase() === key.toLowerCase()
        ) {
          return option.values.find((v) => v.label.toLowerCase() === value)
        }
      })
    )
  })
  return variant
}
