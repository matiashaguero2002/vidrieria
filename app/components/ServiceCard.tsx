import type { ReactNode } from "react";
import type { Service } from "@/lib/data/services";

const iconMap: Record<string, ReactNode> = {
  factory: (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21V9l6 4V9l6 4V9l6 4v8M3 21h18"
      />
    </svg>
  ),
  wrench: (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a4 4 0 0 0 5 5l-9 9a2.8 2.8 0 0 1-4-4l9-9Z"
      />
    </svg>
  ),
  message: (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a8 8 0 1 1-3.5 6.6L3 21l2.4-6A8 8 0 0 1 21 12Z"
      />
    </svg>
  ),
  shield: (
    <svg
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"
      />
    </svg>
  ),
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-sf-card border border-sf-border rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-2xl hover:border-sf-accent transition-all duration-300">
      <div className="w-16 h-16 mx-auto mb-6 bg-sf-primary group-hover:bg-sf-accent rounded-2xl flex items-center justify-center text-white transition-colors">
        {iconMap[service.icon] ?? iconMap.factory}
      </div>
      <h4 className="text-lg font-bold text-sf-primary mb-3">
        {service.title}
      </h4>
      <p className="text-sf-text-muted text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}

export default ServiceCard;
