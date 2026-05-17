import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Services from "../pages/Services";
import * as useFetchServicesModule from "../hooks/useFetchServices";

const mockServices = [
  { id: 1, name: "AML Screening", category: "KYC" },
  { id: 2, name: "KYB Verification", category: "KYB" },
];

describe("Services Page", () => {
  beforeEach(() => {
    vi.spyOn(useFetchServicesModule, "default").mockReturnValue({
      data: mockServices,
      loading: false,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders heading correctly", () => {
    render(<Services />);
    expect(screen.getByText(/Compliance Services/i)).toBeInTheDocument();
  });
});