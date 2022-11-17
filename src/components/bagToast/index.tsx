import * as Toast from '@radix-ui/react-toast';
import { Dispatch, SetStateAction } from 'react';
import { Root, Viewport } from './styles';

type BagToastType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
const BagToast = ({ open, setOpen }: BagToastType) => {
  return (
    <>
      <Toast.Provider swipeDirection="right">
        <Root open={open} onOpenChange={setOpen}>
          <Toast.ToastDescription asChild>
            <div>produto adicionado ao carrinho</div>
          </Toast.ToastDescription>
        </Root>

        <Viewport />
      </Toast.Provider>
    </>
  );
};

export default BagToast;
