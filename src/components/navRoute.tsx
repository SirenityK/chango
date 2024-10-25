import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

interface Props {
  children: React.ReactNode;
}

export function NavRoute({
  children,
  ...props
}: ComponentProps<typeof Link> & Props) {
  return (
    <Link {...props} className={cn("hover:underline", props.className)}>
      {children}
    </Link>
  );
}
