import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Testing Button Component", () => {
  it("snapshot test", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  it("role = 'button' であること", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  describe("Props", () => {
    describe("children", () => {
      it("渡した children が正しく描画されていること", () => {
        const expectedChildren = "children";
        render(<Button>{expectedChildren}</Button>);
        expect(screen.getByText(expectedChildren)).toBeInTheDocument();
      });
    });
    describe("disabled", () => {
      it("disabled が true の時に、 disabled 属性がセットされていること", () => {
        render(<Button disabled={true} />);
        expect(screen.getByRole("button")).toBeDisabled();
      });
      it("disabled が false の時に、 disabled 属性がセットされていないこと", () => {
        render(<Button />);
        expect(screen.getByRole("button")).toBeEnabled();
      });
    });
  });

  describe("Events", () => {
    it("Button をクリックした時に、 onClick 関数が一度実行されること", async () => {
      const mockOnClick = vi.fn();
      render(<Button onClick={mockOnClick} />);
      await userEvent.click(screen.getByRole("button"));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
