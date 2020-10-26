import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'

import { Universe } from "gol-wasm";

interface Props {
  children?: JSX.Element | JSX.Element[],
  windowWidth?: number | string,
  windowHeight?: number | string,
  // pause_off_screen: boolean,
  // position_x: number | string,
  // position_y: number | string,
  universeWidth?: number,
  universeHeigh?: number,
}


const DEFAULT_WINDOW_WIDTH = 300;
const DEFAULT_WINDOW_HEIGHT = 180;
const DEFAULT_UNIVERSE_WIDTH = 300;
const DEFAULT_UNIVERSE_HEIGHT = 180;

export const UniverseWindow = (props: Props) => {
  let {
    windowWidth,
    windowHeight,
    universeWidth,
    universeHeigh,
    children,
  } = props;

  const style_size = {
    width: windowWidth!==undefined?windowWidth:DEFAULT_WINDOW_WIDTH,
    height: windowHeight!==undefined?windowHeight:DEFAULT_WINDOW_HEIGHT,
  };

  let universe = Universe.new(
    universeWidth!==undefined?universeWidth:DEFAULT_UNIVERSE_WIDTH,
    universeHeigh!==undefined?universeHeigh:DEFAULT_UNIVERSE_HEIGHT
  );

  universe.tick();

  const canvasRef = useRef(null);

  useEffect(() => {
    
  }, []);

  return (
    <div className={styles.window}
      style={{
        ...style_size,
        // backgroundColor: 'red',
      }}
    >
      <canvas
        id="gol"
        ref={canvasRef}
        style={{
          ...style_size,
          position: 'absolute',
          backgroundColor: 'aqua',
        }}
      ></canvas>
      <div
        style={{
          ...style_size,
          position: 'absolute',
        }}
        
      >{children}</div>
    </div>
  );
}
