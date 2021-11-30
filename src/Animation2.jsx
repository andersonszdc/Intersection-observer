import { useEffect, useState } from 'react';
import './App.css';

function Animation2({children}) {
    const [inView, setInView] = useState(false)
    const element = children(inView)
    useEffect(() => {
      const intersectionObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !inView) {
          setInView(true)
        }
      })
      intersectionObserver.observe(document.querySelector(`#${element.props.id}`))
      return () => intersectionObserver.disconnect()
    })

  return (
    <>
        {children(inView)}
    </> 
    );
}

export default Animation2;