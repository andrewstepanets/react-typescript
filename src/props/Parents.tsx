import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
      new object
    </ChildAsFC>
  );
};

export default Parent;
