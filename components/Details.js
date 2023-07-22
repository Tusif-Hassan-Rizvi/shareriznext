import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import stylesbutton from '@/styles/about.module.css';
import Grid from 'components/Grid';
import Link from 'next/link';

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  const StockData =
    typeof window !== 'undefined' && window.sessionStorage
      ? JSON.parse(window.sessionStorage.getItem('item'))
      : null;
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (StockData !== value) {
      setValue(StockData);
    }
  }, []);

  return (
    <>
      <Link href={'/'}>
        <button
          type="button"
          // onClick={() => router.back()}
          className={stylesbutton.buttonStyle}
          style={{ marginLeft: '10px' }}
        >
          Go Back
        </button>
      </Link>
      {value !== null ? (
        <>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <h2>{value.symbol}</h2>
            Last Update {value.lastUpdateTime}
          </div>
          <div
            style={{
              marginTop: '10vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Grid StockData={value}></Grid>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Slug;
