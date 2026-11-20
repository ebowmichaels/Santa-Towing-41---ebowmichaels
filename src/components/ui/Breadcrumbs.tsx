import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: 'dark' | 'light';
}

export default function Breadcrumbs({ items, className, variant = 'dark' }: BreadcrumbsProps) {
  const isLight = variant === 'light';
  
  return (
    <nav className={cn(
      "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium mb-3",
      isLight ? "text-white/60" : "text-dark/60",
      className
    )}>
      <Link 
        to="/" 
        className={cn(
          "hover:text-accent transition-colors flex items-center gap-1 shrink-0",
          isLight && "hover:text-white"
        )}
      >
        <Home className="w-3.5 h-3.5 shrink-0" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-4 h-4 shrink-0" />
            {item.path ? (
              <Link 
                to={item.path} 
                className={cn(
                  "hover:text-accent transition-colors break-words",
                  isLight && "hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn(
                "break-words",
                isLight ? "text-white" : "text-dark"
              )}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
