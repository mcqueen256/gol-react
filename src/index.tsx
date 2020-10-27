import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'

import { Universe, UniverseConfig } from "gol-wasm";

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
// const DEFAULT_UNIVERSE_WIDTH = 300;
// const DEFAULT_UNIVERSE_HEIGHT = 180;

export const UniverseWindow = (props: Props) => {
  let {
    windowWidth,
    windowHeight,
    // universeWidth,
    // universeHeigh,
    children,
  } = props;

  const style_size = {
    width: windowWidth!==undefined?windowWidth:DEFAULT_WINDOW_WIDTH,
    height: windowHeight!==undefined?windowHeight:DEFAULT_WINDOW_HEIGHT,
  };

  // let universe = Universe.new();
  // Which is the same as:
  let config = UniverseConfig.new().set_override_size(5, 3);
  let universe: Universe = config.configure();
  // or
  // let universe = builder.from(rle_string);



  // let universe = Universe.from_default_spaceship_rle();
  

  // let builder = UniverseBuilder.new();
  // builder
  //   .override_size(width, height);
  //   .cell_size(10);

  // let universe = Universe.from(builder); // or
  // let universe = builder.build();

  // universe.tick();

  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    if (canvasRef.current!== null) {
      let canvas: HTMLCanvasElement = canvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      universe.connect_canvas(canvas);
      universe.draw();
      console.log(canvasRef.current)
    }
    
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
