import { hubspotCapabilityLabels } from "@/api/hubspot";
import { PRODUCT_NAME } from "@/lib/brand";
import {
  ConnectedStatusChip,
  HUBSPOT_LOGO_URL,
  IntegrationConnectionCard,
  SLACK_LOGO_URL,
} from "@/features/integrations/IntegrationConnectionCard";

const SLACK_CAPABILITIES = ["Deal risk", "Claim refused", "Dimension lost", "No next meeting"] as const;
const HUBSPOT_CAPABILITIES = hubspotCapabilityLabels();
const HUBSPOT_STATUS_LABEL = "HubSpot connected";
const SLACK_STATUS_LABEL = "Slack connected";

export function IntegrationsPage() {
  return (
    <div className="page mid">
      <div className="vstack" style={{ gap: 16 }}>
        <header className="card pad-lg reveal">
          <div className="eyebrow" style={{ marginBottom: 6 }}>
            Integrations
          </div>
          <h1 className="serif" style={{ fontSize: 33, letterSpacing: "-.02em", maxWidth: "24ch" }}>
            Nothing reaches your CRM without a receipt.
          </h1>
          <p className="sub" style={{ marginTop: 9, maxWidth: "62ch" }}>
            HubSpot writes only evidenced fields. Slack is configured on the {PRODUCT_NAME} API — credentials never touch this browser.
          </p>
          <div className="hstack" style={{ marginTop: 14, flexWrap: "wrap" }}>
            <ConnectedStatusChip label={HUBSPOT_STATUS_LABEL} />
            <ConnectedStatusChip label={SLACK_STATUS_LABEL} />
            <span className="chip">credentials never touch the browser</span>
          </div>
        </header>

        <div className="split">
          <IntegrationConnectionCard
            name="HubSpot"
            eyebrow="CRM & deal management"
            description="Deals, notes, tasks and logged activity — each field written only when a transcript segment supports it."
            logoUrl={HUBSPOT_LOGO_URL}
            capabilities={HUBSPOT_CAPABILITIES}
          />
          <IntegrationConnectionCard
            name="Slack"
            eyebrow="Team alerts"
            description="Deal risks, refused claims and lost dimensions, delivered with the evidence attached."
            logoUrl={SLACK_LOGO_URL}
            capabilities={[...SLACK_CAPABILITIES]}
          />
        </div>

        <p className="invariant" style={{ maxWidth: "58ch" }}>
          The same gate that blocks an unproven claim from the report blocks it from your pipeline.
        </p>
      </div>
    </div>
  );
}
