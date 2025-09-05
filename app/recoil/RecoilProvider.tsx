// src/recoil/RecoilRootProvider.tsx
'use client';

import { RecoilRoot } from 'recoil';

const RecoilRootProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootProvider;
