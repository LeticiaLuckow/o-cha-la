import * as Toast from '@radix-ui/react-toast';
import styled, { keyframes } from 'styled-components';

const VIEWPORT_PADDING = 25;

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const Viewport = styled(Toast.Viewport)`
  list-style: none;
  background: #f0e6ef;
  width: 324px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  position: fixed;
  bottom: 0;
  right: 12px;
`;

const Root = styled(Toast.Root)`
&[data-state="open"] {
  animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
};
&[data-state="closed"] {
  animation: ${hide} 100ms ease-in;
};
&[data-swipe="move"] {
  transform: 'translateX(var(--radix-toast-swipe-move-x))';
};
&[data-swipe="cancel"] {
  transform: 'translateX(0)',
  transition: 'transform 200ms ease-out';
};
&[data-swipe="end"] {
  animation: ${swipeOut} 100ms ease-out;
};

padding:12px
`;

export { Viewport, Root };
