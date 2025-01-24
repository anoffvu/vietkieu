import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function BouncingStool() {
  const SPEED = 4 // Pixels per frame
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [velocity, setVelocity] = useState({ x: SPEED, y: SPEED })
  const [initialized, setInitialized] = useState(false)

  // Initialize position after component mounts
  useEffect(() => {
    if (!initialized) {
      setPosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
      })
      setInitialized(true)
    }
  }, [initialized])

  useEffect(() => {
    if (!initialized) return

    const updatePosition = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x
        let newY = prev.y + velocity.y
        let newVelocityX = velocity.x
        let newVelocityY = velocity.y

        // Bounce off walls
        if (newX <= 0 || newX >= window.innerWidth - 100) {
          newVelocityX = -velocity.x
          setVelocity((v) => ({ ...v, x: newVelocityX }))
        }
        if (newY <= 0 || newY >= window.innerHeight - 100) {
          newVelocityY = -velocity.y
          setVelocity((v) => ({ ...v, y: newVelocityY }))
        }

        // Keep within bounds
        newX = Math.max(0, Math.min(newX, window.innerWidth - 100))
        newY = Math.max(0, Math.min(newY, window.innerHeight - 100))

        return { x: newX, y: newY }
      })
    }

    const interval = setInterval(updatePosition, 16)
    return () => clearInterval(interval)
  }, [velocity, initialized])

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!initialized) return

    // Calculate vector from cursor to stool center
    const stoolCenterX = position.x + 50
    const stoolCenterY = position.y + 50
    const cursorX = e.clientX
    const cursorY = e.clientY

    // Calculate bounce direction
    const dx = stoolCenterX - cursorX
    const dy = stoolCenterY - cursorY

    // Normalize and set new velocity
    const length = Math.sqrt(dx * dx + dy * dy)
    setVelocity({
      x: (dx / length) * SPEED,
      y: (dy / length) * SPEED,
    })
  }

  return (
    <div
      style={{
        position: 'fixed',
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 16ms linear',
        opacity: initialized ? 1 : 0, // Hide until initialized
      }}
      onMouseEnter={handleMouseEnter}
      className='cursor-pointer'
    >
      <div style={{ width: '100px', height: '100px', position: 'relative' }}>
        <Image
          src='/images/stool.png'
          alt='Bouncing plastic stool'
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
}
