export const HUBSPOT_LOGO_URL = "https://cdn.justcall.io/app/assets/images/integrations/new/hubspot.png";
export const SLACK_LOGO_URL = "https://cdn.justcall.io/app/assets/images/integrations/new/slack.png";

export const CONNECTED_STATUS_LABEL = "Connected";

export function ConnectedStatusChip({
  label = CONNECTED_STATUS_LABEL,
}: {
  label?: string;
}) {
  return <span className="chip proof">{label}</span>;
}

export function IntegrationConnectionCard({
  name,
  eyebrow,
  description,
  logoUrl,
  capabilities,
}: {
  name: string;
  eyebrow: string;
  description: string;
  logoUrl: string;
  capabilities: string[];
}) {
  return (
    <article className="int-card card pad-lg reveal on" aria-label={`${name} ${CONNECTED_STATUS_LABEL}`}>
      <div className="between" style={{ marginBottom: 14, alignItems: "flex-start" }}>
        <div className="hstack" style={{ gap: 14, alignItems: "center" }}>
          <div className={`int-mark ${name.toLowerCase()}`}>
            <img src={logoUrl} alt="" className="int-logo" width={52} height={52} />
          </div>
          <div>
            <div className="eyebrow" style={{ color: "var(--proof)" }}>
              {eyebrow}
            </div>
            <h2 className="int-name">{name}</h2>
          </div>
        </div>
        <ConnectedStatusChip />
      </div>
      <p className="sub" style={{ fontSize: 13, maxWidth: "42ch" }}>
        {description}
      </p>
      <div className="int-ready">
        <span className="stamp proof anim">{CONNECTED_STATUS_LABEL}</span>
        <p className="tiny" style={{ margin: 0, color: "var(--text-2)" }}>
          Credentials stay on the integration service — this app never stores them.
        </p>
      </div>
      {capabilities.length > 0 ? (
        <ul className="int-caps" aria-label={`${name} capabilities`}>
          {capabilities.map((item) => (
            <li key={item}>
              <span aria-hidden>✓</span>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
