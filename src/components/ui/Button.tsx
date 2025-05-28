import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-white shadow hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
        outline:
          "border border-secondary-300 bg-white shadow-sm hover:bg-secondary-50 hover:text-secondary-900 dark:border-secondary-700 dark:bg-secondary-800 dark:hover:bg-secondary-700 dark:hover:text-white",
        secondary:
          "bg-secondary-100 text-secondary-900 shadow-sm hover:bg-secondary-200 dark:bg-secondary-700 dark:text-white dark:hover:bg-secondary-600",
        ghost: "hover:bg-secondary-100 hover:text-secondary-900 dark:hover:bg-secondary-800 dark:hover:text-white",
        link: "text-primary-600 underline-offset-4 hover:underline dark:text-primary-400",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = ({ className, variant, size, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }