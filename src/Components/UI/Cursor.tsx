import { useRef } from "react"

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorPosition = function (e: MouseEvent) {
    if (cursorRef.current) {
      cursorRef.current.style.top = `${e.clientY}px`
      cursorRef.current.style.left = `${e.clientX}px`
    }
  };

  window.addEventListener("mousemove", cursorPosition);

  return (
    <div ref={cursorRef} className="fixed h-[200px] w-[200px] bg-blue-300 dark:bg-blue-500 z-[1] rounded-full blur-[100px] -translate-1/2 pointer-events-none duration-1000 transition-all ease-out">
      
    </div>
  )
}

export default Cursor
