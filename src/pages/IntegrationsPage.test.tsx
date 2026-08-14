import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { IntegrationsPage } from "./IntegrationsPage";
import { HUBSPOT_LOGO_URL, SLACK_LOGO_URL } from "@/features/integrations/IntegrationConnectionCard";

function renderPage() {
  return render(
    <MemoryRouter>
      <IntegrationsPage />
    </MemoryRouter>,
  );
}

describe("IntegrationsPage", () => {
  it("shows HubSpot and Slack as connected with brand logos and no setup fields", () => {
    renderPage();

    expect(screen.getByText("HubSpot connected")).toBeInTheDocument();
    expect(screen.getByText("Slack connected")).toBeInTheDocument();
    expect(screen.getAllByText("Connected").length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole("article", { name: /HubSpot Connected/i })).toBeInTheDocument();
    expect(screen.getByRole("article", { name: /Slack Connected/i })).toBeInTheDocument();
    expect(document.querySelector(`img[src="${HUBSPOT_LOGO_URL}"]`)).toBeTruthy();
    expect(document.querySelector(`img[src="${SLACK_LOGO_URL}"]`)).toBeTruthy();
    expect(screen.queryByLabelText(/webhook/i)).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/hooks\.slack\.com/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
    expect(screen.queryByText(/not configured/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/checking/i)).not.toBeInTheDocument();
  });
});
