
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xFF6F00, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Create drones
    const drones: THREE.Mesh[] = [];
    const droneGeometry = new THREE.ConeGeometry(0.1, 0.3, 6);
    
    for (let i = 0; i < 15; i++) {
      const droneMaterial = new THREE.MeshStandardMaterial({
        color: i % 3 === 0 ? 0xFF6F00 : 0x4C8C3C,
        metalness: 0.7,
        roughness: 0.3,
        emissive: i % 3 === 0 ? 0xFF6F00 : 0x4C8C3C,
        emissiveIntensity: 0.3,
      });
      
      const drone = new THREE.Mesh(droneGeometry, droneMaterial);
      drone.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      );
      drone.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      drone.userData = {
        speed: 0.005 + Math.random() * 0.01,
        rotationSpeed: 0.01 + Math.random() * 0.01,
        direction: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        )
      };
      scene.add(drone);
      drones.push(drone);
    }
    
    // Add particles for a more dynamic feel
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 2000;
    
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
      colors[i] = Math.random() * 0.3;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.5
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Animate drones
      drones.forEach(drone => {
        drone.position.x += drone.userData.direction.x;
        drone.position.y += drone.userData.direction.y;
        drone.position.z += drone.userData.direction.z;
        
        drone.rotation.x += drone.userData.rotationSpeed;
        drone.rotation.y += drone.userData.rotationSpeed * 0.5;
        
        // Boundary check and reverse direction
        if (Math.abs(drone.position.x) > 10 || Math.abs(drone.position.y) > 10 || Math.abs(drone.position.z) > 5) {
          drone.userData.direction.multiplyScalar(-1);
        }
      });
      
      // Slowly rotate particles
      particles.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);
  
  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

export default ThreeDBackground;
