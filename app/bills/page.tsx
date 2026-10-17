import { PageContainer } from "@/components/layout/page-container";
import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";

/**
 * Bills remains a preview until a real billing API is integrated.
 * Do not display fabricated balances, transaction history, or payment success.
 */
export default function BillsPage() {
  return (
    <div className="pb-20">
      <div className="px-4 pt-6 pb-6 border-b border-border">
        <h1 className="text-2xl font-bold text-foreground mb-2">Bills</h1>
        <p className="text-sm text-muted-foreground">
          Pay bills and subscriptions easily
        </p>
      </div>

      <PageContainer>
        <Card className="border-border p-8 flex flex-col items-center text-center gap-4 mt-6">
          <Zap className="w-10 h-10 text-muted-foreground" aria-hidden="true" />
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-1">
              Bills preview
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Bill payments are temporarily unavailable while we connect a
              verified billing service. No payment will be taken, and no
              balance or transaction history is shown here until live data is
              available.
            </p>
          </div>
        </Card>
      </PageContainer>
    </div>
  );
}
