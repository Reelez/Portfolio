/**
 * Animated fill button.
 * variant: "cyan" (default) | "purple"
 * as: "button" | "a" | Link — pass the component to render as
 */
export default function Button({ children, variant = 'cyan', className = '', ...props }) {
  const variantClass = variant === 'purple' ? 'btn-purple' : ''
  return (
    <button className={`btn-animated ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({ children, variant = 'cyan', className = '', href, ...props }) {
  const variantClass = variant === 'purple' ? 'btn-purple' : ''
  return (
    <a href={href} className={`btn-animated ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </a>
  )
}
