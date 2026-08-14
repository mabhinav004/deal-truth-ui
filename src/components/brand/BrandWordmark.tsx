import { PRODUCT_NAME } from "@/lib/brand";

/** Nav lockup: saffron accent on the dot in Sach.AI. */
export function BrandWordmark() {
  const separator = PRODUCT_NAME.indexOf(".");
  const head = separator >= 0 ? PRODUCT_NAME.slice(0, separator) : PRODUCT_NAME;
  const tail = separator >= 0 ? PRODUCT_NAME.slice(separator + 1) : "";
  return (
    <span className="brandname">
      {head}
      {tail ? <em>.</em> : null}
      {tail}
    </span>
  );
}
