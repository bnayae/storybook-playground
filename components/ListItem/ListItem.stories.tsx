import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import ListItem from "./ListItem";
import { IListItemProps } from "./IListItemProps";

// This default export determines where you story goes in the story list
export default {
  title: "List Item Stories",
  component: ListItem,
} as Meta;

// We create a “template” of how args map to rendering
const Template: Story<IListItemProps> = (args) => <ListItem {...args} />;

const defaultArgs: IListItemProps = {
  data: {
    id: 1,
    name: "bnaya",
  },
};

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = defaultArgs;
Primary.storyName = "Primary story";

export const FirstStory = () => <ListItem {...defaultArgs} />;
FirstStory.storyName = "First story";
