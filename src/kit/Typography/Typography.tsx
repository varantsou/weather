import React, { ReactNode, ElementType } from "react";
import styles from "./Typography.module.css";

interface TypographyProps {
  variant?: keyof typeof variantMap;
  component?: ElementType;
  className?: string;
  children?: ReactNode;
}

const variantMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
} as const;

export function Typography({
  variant = "body1",
  component,
  className = "",
  children,
  ...props
}: React.FC<TypographyProps>) {
  const Component: ElementType = component || variantMap[variant];

  const variantClass: string = styles[variant] || styles.body1;

  const combinedClassName: string = `${variantClass} ${className}`.trim();

  return (
    <Component className={combinedClassName} {...props}>
      {children}
    </Component>
  );
}
