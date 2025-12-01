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

    camera.position.z = 8

    // Create materials with UO colors
    const greenMaterial = new THREE.MeshBasicMaterial({
      color: 0x154733,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    })

    const goldMaterial = new THREE.MeshBasicMaterial({
      color: 0xFEE123,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })

    const mixedMaterial = new THREE.MeshBasicMaterial({
      color: 0x2a7a4f,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })

    // Create larger, more prominent shapes
    const shapes: THREE.Mesh[] = []

    // Large torus
    const torus1 = new THREE.Mesh(
      new THREE.TorusGeometry(2, 0.5, 16, 100),
      greenMaterial
    )
    torus1.position.set(-4, 3, -8)
    shapes.push(torus1)

    // Medium torus
    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.5, 0.3, 16, 100),
      goldMaterial
    )
    torus2.position.set(5, -2, -10)
    shapes.push(torus2)

    // Large sphere
    const sphere1 = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 32, 32),
      mixedMaterial
    )
    sphere1.position.set(4, 4, -12)
    shapes.push(sphere1)

    // Medium sphere
    const sphere2 = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      greenMaterial
    )
    sphere2.position.set(-5, -3, -9)
    shapes.push(sphere2)

    // Dodecahedron
    const dodeca = new THREE.Mesh(
      new THREE.DodecahedronGeometry(1.2),
      goldMaterial
    )
    dodeca.position.set(0, -4, -11)
    shapes.push(dodeca)

    // Octahedron
    const octa = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.5),
      mixedMaterial
    )
    octa.position.set(-3, 0, -7)
    shapes.push(octa)

    // Box
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      greenMaterial
    )
    box.position.set(6, 1, -13)
    shapes.push(box)

    shapes.forEach(shape => scene.add(shape))

    // Create particles for extra depth
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 150
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x154733,
      transparent: true,
      opacity: 0.6,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    particlesMesh.position.z = -10
    scene.add(particlesMesh)

    // Animation loop
    let scrollY = 0
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY
    })

    const animate = () => {
      requestAnimationFrame(animate)

      const time = Date.now() * 0.0001

      // Rotate shapes with different speeds
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.002 + (index * 0.0005)
        shape.rotation.y += 0.003 + (index * 0.0003)

        // Gentle floating motion
        shape.position.y += Math.sin(time + index) * 0.002
      })

      // Rotate particles slowly
      particlesMesh.rotation.y += 0.0005
      particlesMesh.rotation.x = scrollY * 0.0002

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
    />
  )
}

export default Background3D
