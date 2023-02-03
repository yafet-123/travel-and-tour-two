import React from 'react';
import Head from 'next/head';
import { HeaderTitle } from '../../types/types';

export const MainHeader: React.FC<HeaderTitle> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Eco Travel Ethiopia offers you a tailor made sustainable adventures"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
    </div>
  );
};
