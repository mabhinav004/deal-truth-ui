import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CONNECTED_STATUS_LABEL } from "./IntegrationConnectionCard";

export function CallIntegrationActions({
  onSendHubSpot,
  onNotifySlack,
}: {
  onSendHubSpot: () => void;
  onNotifySlack: () => void;
}) {
  return (
    <Card className="p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-700">CRM & team actions</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-ink-900">HubSpot</p>
            <ConnectedLabel />
          </div>
          <p className="mt-1 text-xs text-ink-500">Turn this call into CRM actions.</p>
          <Button size="sm" className="mt-3" onClick={onSendHubSpot}>
            Send intelligence
          </Button>
        </div>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-ink-900">Slack</p>
            <ConnectedLabel />
          </div>
          <p className="mt-1 text-xs text-ink-500">Send important deal intelligence and risk alerts to your team.</p>
          <Button size="sm" variant="secondary" className="mt-3" onClick={onNotifySlack}>
            Notify Slack
          </Button>
        </div>
      </div>
    </Card>
  );
}

function ConnectedLabel() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800">
      <Check className="h-3.5 w-3.5" aria-hidden />
      {CONNECTED_STATUS_LABEL}
    </span>
  );
}
