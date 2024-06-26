/*
author: Levin Pamay
Version: 1.
The `reportWebVitals` function asynchronously imports and uses metrics from the 'web-vitals' module to measure and report key performance indicators like CLS, FID, FCP, LCP, and TTFB via the provided `onPerfEntry` callback function.
*/ 
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
