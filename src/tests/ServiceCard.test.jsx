import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ServiceCard from "../components/ServiceCard";

const mockService = {
  id: 1,
  name: "AML Screening",
  description: "Test service",
  category: "KYC",
  price: 50,
  status: "Active",
  turnaroundTime: "5 min",
};

describe("ServiceCard", () => {
  it("renders service name", () => {
    render(<ServiceCard service={mockService} />);
    expect(screen.getByText("AML Screening")).toBeInTheDocument();
  });
})