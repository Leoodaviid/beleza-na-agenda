import { ReactNode } from "react";

type Props = {
  className: string;
  children: ReactNode;
};
const Circle = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};

export default Circle;
