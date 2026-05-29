import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import {
  Badge,
  Button,
  BUTTON_REQUIRED_STORY_VARIANTS,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  UI_EXPORTS,
} from "../index";

describe("FEAT-f4db-react-ui-component", () => {
  afterEach(() => {
    cleanup();
  });

  it("exports Button, Input, Card, Badge from package entry", () => {
    expect(UI_EXPORTS).toEqual(["Button", "Input", "Card", "Badge"]);
    expect(Button).toBeDefined();
    expect(Input).toBeDefined();
    expect(Card).toBeDefined();
    expect(Badge).toBeDefined();
  });

  it.each(BUTTON_REQUIRED_STORY_VARIANTS)(
    "renders Button variant %s",
    (variant) => {
      render(<Button variant={variant}>{variant}</Button>);
      expect(
        screen.getByRole("button", { name: variant }),
      ).toBeInTheDocument();
    },
  );

  it("does not fire click when Button is disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Disabled
      </Button>,
    );
    await user.click(screen.getByRole("button", { name: "Disabled" }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders Input with placeholder", () => {
    render(<Input placeholder="Email" />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("renders Card structure", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>Body</CardContent>
      </Card>,
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
  });

  it("renders Badge", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });
});
