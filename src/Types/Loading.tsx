declare module 'react-loading' {  
    import * as React from 'react';  
  
    const ReactLoading: React.FC<{  
      type: string;  
      color: string;  
      height?: number | string;  
      width?: number | string;  
    }>;  
  
    export default ReactLoading;  
  }