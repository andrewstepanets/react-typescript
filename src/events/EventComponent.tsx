import { FC } from 'react';

const EventComponent: FC = () => {
  return (
    <div>
      <input onChange={(e) => console.log(e)} />
    </div>
  );
};
