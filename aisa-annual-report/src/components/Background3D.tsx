import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Background3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    camera.position.z = 5

    // Create subtle geometric shapes
    const geometry1 = new THREE.TorusGeometry(0.7, 0.2, 16, 100)
    const geometry2 = new THREE.SphereGeometry(0.5, 32, 32)
    const geometry3 = new THREE.BoxGeometry(0.6, 0.6, 0.6)

    const material = new THREE.MeshBasicMaterial({
      color: 0x154733, // UO Green
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })

    const torus = new THREE.Mesh(geometry1, material)
    const sphere = new THREE.Mesh(geometry2, material)
    const box = new THREE.Mesh(geometry3, material)

    torus.position.set(-2, 1, -3)
    sphere.position.set(2, -1, -4)
    box.position.set(0, 2, -5)

    scene.add(torus, sphere, box)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Very subtle rotations
      torus.rotation.x += 0.001
      torus.rotation.y += 0.002

      sphere.rotation.x += 0.001
      sphere.rotation.y += 0.001

      box.rotation.x += 0.002
      box.rotation.y += 0.001

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      style={{ opacity: 0.3 }}
    />
  )
}

export default Background3D
