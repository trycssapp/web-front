import { Broadcast } from '../../../lib/interfaces';
import { Button } from '../../Buttons';
import Bravo from '../headings/Bravo';
import P from '../headings/P';

function Error({ title, label, onClick, isLoading }: Broadcast.Base) {
  return (
    <div className="flex flex-col items-center p-4 mx-auto rounded-md">
      <Bravo>{title ? title : 'Something went wrong..'}</Bravo>
      <P className="mb-8 text-on-100">
        {label}
        <br /> Please try agian later.
      </P>
      <Button.White
        className="w-auto"
        label="Try again"
        onClick={onClick}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Error;
