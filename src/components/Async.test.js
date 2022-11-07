import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);

    //.find returns a promise, so this test need to be async
    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
