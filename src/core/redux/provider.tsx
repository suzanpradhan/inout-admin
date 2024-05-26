'use client';

import { add } from '@/modules/features/opt/cartSlice';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from './store';

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // console.log(storeRef.current);
    storeRef.current.dispatch(add('product'));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}