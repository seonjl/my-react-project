import React, { MouseEvent } from 'react';

interface ToggleProps {
  checked: boolean;
  className?: string;
  size?: 'lg' | 'sm';
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function Toggle({
  checked,
  onClick,
  size = 'sm',
  className,
}: ToggleProps) {
  const width = getStyleClassNamesBySize(size);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-flex aspect-video cursor-pointer items-center ${className}`}
      style={{ width }}
    >
      <input
        type="checkbox"
        id="toggle"
        readOnly
        checked={checked}
        className="peer sr-only"
      />
      <div
        className={`
        peer
        h-[100%]

        w-[100%]
        rounded-full

        bg-[#DCE0E9]
        after:absolute
        after:left-[6%]
        after:top-[7.5%]
        after:h-[85%]

        after:w-[48%]
        after:rounded-full
        after:bg-white
        after:transition-all
        after:content-['']
        peer-checked:bg-[#FF802D]
        peer-checked:after:translate-x-[85%]
        peer-checked:after:border-white
        peer-focus:outline-none
      `}
      />
    </button>
  );
}

function getStyleClassNamesBySize(size: ToggleProps['size']) {
  if (size === 'sm') {
    return '30px';
  }

  return '48px';
}
