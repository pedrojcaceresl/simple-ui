import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
	[
		"w-full",
		"rounded-lg",
		"font-semibold",
		"focus:outline-none",
		"disabled:cursor-not-allowed",
		"transition-all duration-300",
	],
	{
		variants: {
			variant: {
				solid: "",
				outline: "border-2",
				ghost: "transition-colors duration-300",
				secondary: "border-2 border-primary-600",
				secondaryGray: "border-2 ",
				tertiary: "bg-secondary-300",
			},
			size: {
				sm: "px-4 py-2 text-sm",
				md: "px-4 py-2 text-base",
				lg: "px-7 py-4 text-lg",
			},
			colorscheme: {
				primary: "",
				secondary: "bg-secondary-600 text-secondary-950",
				secondaryGray:
					"bg-white text-neutral-500 border-2 border-neutral-500",
			},
		},
		compoundVariants: [
			{
				variant: "solid",
				colorscheme: "primary",
				className: "bg-primary-600 hover:bg-primary-800 text-white",
			},
			{
				variant: "secondary",
				colorscheme: "primary",
				className:
					"text-primary-600 hover:bg-gray-50 border-primary-600",
			},
			{
				variant: "secondaryGray",
				colorscheme: "primary",
				className: "text-neutral-500 hover:bg-gray-50 border-gray-400",
			},
			{
				variant: "tertiary",
				colorscheme: "primary",
				className: "text-secondary-950 hover:bg-secondary-400",
			},
			{
				variant: "outline",
				colorscheme: "primary",
				className:
					"text-primary-500 border-neutral-500 bg-transparent hover:bg-primary-100",
			},

			{
				variant: "ghost",
				colorscheme: "primary",
				className:
					"text-primary-600 bg-transparent hover:bg-primary-100",
			},
		],
		defaultVariants: {
			variant: "solid",
			size: "md",
			colorscheme: "primary",
		},
	}
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = ({
	variant,
	size,
	colorscheme,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			className={cn(
				buttonStyles({ variant, size, colorscheme, className })
			)}
		>
			Button CTA
		</button>
	);
};
