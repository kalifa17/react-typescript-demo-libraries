import * as React from 'react';

declare class SpringLoader extends React.Component<SpringLoaderProps, any> {}

interface SpringLoaderProps {
  className?: string;
  toggle?: boolean;
  name: string;
  size?: 'lg' | '2x' | '3x' | '4x' | '5x';
}

declare var SpringLoaderType: typeof SpringLoader;
export = SpringLoaderType;