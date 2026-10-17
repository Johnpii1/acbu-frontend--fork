import { redirect } from "next/navigation";

/**
 * Keep the legacy URL working without presenting a dead-end placeholder.
 * Bill payment is currently disabled on the main Bills page until a real
 * payment API is available.
 */
export default function BillsPayPage() {
  redirect("/bills");
}
