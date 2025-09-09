import { Logo } from "../../logo";
import { Footer } from "../../footer";
import { Container } from "../../container";
import { Menu } from "../../menu";
import type { ReactNode } from "react";

type TemplateProps = {
	children: ReactNode;
};

const Template = ({ children }: TemplateProps) => {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Container>
				<Menu />
			</Container>
			{children}
			<Container>
				<Footer />
			</Container>
		</>
	);
};

export { Template };
