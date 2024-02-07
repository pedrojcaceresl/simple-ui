import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export const Button = ({ ...props }: ButtonProps) => {
	return (
		<button className="bg-primary-600 px-5 rounded-xl py-2 text-white">
			Button CTA
		</button>
	);
};
