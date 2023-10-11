type Props = {
  value: number | bigint;
  locales?: string | string[];
  options?: Intl.NumberFormatOptions;
};

/**
 * @default locales 'en-EN'
 */
export const formatNumber = ({
  value,
  locales = "en-EN",
  options = {},
}: Props) => {
  return new Intl.NumberFormat(locales, options).format(value);
};

export const formatPrice = (value: number) => {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
};
