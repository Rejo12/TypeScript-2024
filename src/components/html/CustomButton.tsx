type CustomButtonType = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({
  variant,
  children,
  ...rest
}: CustomButtonType) => {
  return <button {...rest}>{children}</button>;
};
