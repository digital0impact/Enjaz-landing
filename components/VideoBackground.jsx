'use client'

import { useEffect, useRef } from 'react'

export default function VideoBackground() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {})
  }, [])

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 h-full w-full object-cover"
        style={{ zIndex: -2 }}
      >
        <source src={`/${encodeURIComponent('خلفية.mp4')}`} type="video/mp4" />
      </video>
    </>
  )
}
