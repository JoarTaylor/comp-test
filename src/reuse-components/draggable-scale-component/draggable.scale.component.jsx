import React, { useEffect, useRef, useState } from "react";
import * as S from "./styled";

export default function DraggableScale() {
    const [distance, setDistance] = useState(0)
    const containerRef = useRef(null);

    const boxRef = useRef(null);
    const isClicked = useRef(false);
    const coords = useRef({
      startX: 0,
      lastX: 0,
    })

  
    useEffect(() => {
      if (!boxRef.current || !containerRef.current) return;

      
  
      const box = boxRef.current;
      const container = containerRef.current.parentNode;
  
      const onMouseDown = (e) => {
        isClicked.current = true;
        coords.current.startX = e.clientX;
      }
  
      const onMouseUp = (e) => {
        isClicked.current = false;
        coords.current.lastX = box.offsetLeft;
      }
  
      const onMouseMove = (e) => {
        if (!isClicked.current) return;
        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        box.style.left = `${nextX}px`;
        setDistance(nextX)
      }
  
      box.addEventListener('mousedown', onMouseDown);
      box.addEventListener('mouseup', onMouseUp);
      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseleave', onMouseUp);
      
  
      const cleanup = () => {
        box.removeEventListener('mousedown', onMouseDown);
        box.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseleave', onMouseUp);
      }
  
      return cleanup;
    }, [])
  
    return (
      <>
        <S.DotContainer ref={containerRef} className="container">
          <S.Dot ref={boxRef} className="box"></S.Dot>
        </S.DotContainer>
        <div>{distance}</div>
        </>
    );
  }
