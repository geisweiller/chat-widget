import { render, screen } from "@testing-library/react";

import { MaintenanceBanner } from "../MaintenanceBanner";

describe("MaintenanceBanner", () => {
  it("renders the maintenance message", () => {
    const message = "🚧 Service is under maintenance";

    render(<MaintenanceBanner message={message} />);

    expect(screen.getByText(message)).toBeDefined();
  });
});
