import { FC } from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hi there! {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
export const ChildAsFC: FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      Hi there! {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
