import React from "react";
import { render } from "@testing-library/react-native";
import BadgeDetailsScreen from "../screens/BadgeDetailsScreen";

const badge = {
  name: "Test Badge",
  description: "Test badge description",
};

describe("BadgeDetailsScreen", () => {
  it("displays the badge name", () => {

    const { getByText } = render(
      <BadgeDetailsScreen route = { { params: {badge } }} />
    );

    const badgeName = getByText("Test Badge");
    expect(badgeName).toBeTruthy();
  });

  test('screen renders without errors', () => {
    render(<BadgeDetailsScreen route = { { params: {badge } }}/>)
  })

  it("displays the badge description", () => {
    const { getByText } = render(
      <BadgeDetailsScreen route={{ params: { badge } }} />
    );
    const badgeDescription = getByText("Test badge description");
    expect(badgeDescription).toBeTruthy();
  });

  it("displays the badge name and description correctly", () => {
    const { getByText } = render(
      <BadgeDetailsScreen route={{ params: { badge } }} />
    );
    const badgeName = getByText("Test Badge");
    const badgeDescription = getByText("Test badge description");
    expect(badgeName).toBeTruthy();
    expect(badgeDescription).toBeTruthy();
  });
});