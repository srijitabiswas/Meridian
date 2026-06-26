import { useScrollReveal } from '../../hooks/useScrollReveal';

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <Tag
      ref={ref}
      className={`${isVisible ? 'animate-fade-up' : 'opacity-0'} ${className}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}