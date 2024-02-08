import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
	title: "Components/Text",
	component: Text,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		as: "h1",
		children:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reiciendis, dolorum id, ipsa eos, molestias obcaecati necessitatibus accusamus voluptatem officia ut autem asperiores dignissimos saepe tempora explicabo? Praesentium, nulla quia?",
	},
};
