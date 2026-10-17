import { redirect } from "next/navigation";

/**
 * The catalog is already the default view on /bills, so keep this legacy URL
 * as a redirect instead of showing a duplicate placeholder page.
 */
export default function BillsCatalogPage() {
  redirect("/bills");
}
