import { useEffect, useState } from 'react';
import './App.css';

function Animation({children, animation}) {
  const [className, setClassName] = useState(null)
    useEffect(() => {
      const intersectionObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setClassName(animation)
          console.log(children.props.id, animation)
        }
      })
      intersectionObserver.observe(document.querySelector(`#${children.props.id}`))
      return () => intersectionObserver.disconnect()
    }, [animation, children.props.id])
  return (
    <span className={className}>{children}</span>
  );
}

export default Animation;