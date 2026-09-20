import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { classNames } from "@/lib/class-names";

type ButtonVariant = "primary" | "secondary" | "inverse" | "accentContrast";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedProps & {
  href: string;
  disabled?: never;
  type?: never;
};

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-foreground bg-foreground text-background hover:border-accent hover:bg-accent hover:text-accent-foreground",
  secondary:
    "border-border bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
  inverse:
    "border-white bg-white text-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground",
  accentContrast:
    "border-accent-foreground bg-accent-foreground text-accent hover:border-foreground hover:bg-foreground hover:text-background",
};

const baseClass =
  "type-nav group inline-flex min-h-12 items-center justify-center border px-6 py-3 transition-[color,background-color,border-color,transform] duration-[var(--motion-normal)] ease-[var(--ease-premium)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)] disabled:pointer-events-none disabled:opacity-45";

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = classNames(baseClass, variants[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link className={classes} href={props.href}>
        {children}
      </Link>
    );
  }

  const {
    href: _href,
    children: _children,
    className: _className,
    variant: _variant,
    ...buttonProps
  } = props;
  void _href;
  void _children;
  void _className;
  void _variant;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
