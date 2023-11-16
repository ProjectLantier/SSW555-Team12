import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import BadgeCollectionScreen from "../screens/BadgeCollectionScreen";

const navigation = {
  navigate: jest.fn(),
};

test("BadgeCollectionScreen contains the 'Noobie' badge", () => {
  const { getByText } = render(<BadgeCollectionScreen />);

  const badgeElement = getByText("Badge: Noobie");
  expect(badgeElement).toBeTruthy();
});

test("Badge count is greater than 0", () => {
  const { getAllByText } = render(<BadgeCollectionScreen />);
  const badges = getAllByText(/Badge:/);
  expect(badges.length).toBeGreaterThan(0);
});

test("Pressing a badge card triggers navigation with the right parameters", () => {
  const { getByText } = render(
    <BadgeCollectionScreen navigation={navigation} />
  );
  const firstBadge = getByText("Badge: Noobie");
  fireEvent.press(firstBadge.parent.parent);
  expect(navigation.navigate).toHaveBeenCalledWith("BadgeDetailsScreen", {
    badge: {
      id: 1,
      name: "Noobie",
      description: "Awarded for your first location visited!",
    },
  });
});
