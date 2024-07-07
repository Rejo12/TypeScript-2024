import { ElementType } from "react";

type TextOwnProps<E> = {
  size: "sm" | "md" | "lg";
  color?: string;
  children: React.ReactNode;
  as?: React.ElementType;
};

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends ElementType>({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
