import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		// children: "Button CTA",
		variant: "solid",
		size: "md",
		colorscheme: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: "Button CTA",
		variant: "secondary",
	},
};

export const SecondaryGray: Story = {
	args: {
		children: "Button CTA",
		variant: "secondaryGray",
	},
};

export const Tertiary: Story = {
	args: {
		children: "Button CTA",
		variant: "tertiary",
	},
};

// export const Solid: Story = {
// 	args: {
// 		children: "Button CTA",
// 		variant: "solid",
// 	},
// };

// export const Outline: Story = {
// 	args: {
// 		children: "Button CTA",
// 		variant: "outline",
// 	},
// };

// export const Ghost: Story = {
// 	args: {
// 		children: "Button CTA",
// 		variant: "ghost",
// 	},
// };
