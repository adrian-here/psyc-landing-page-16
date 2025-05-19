
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
    const ambientLight = new THREE.AmbientLight(0x555555);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xFF6F00, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Create more drones with different designs
    const drones: THREE.Mesh[] = [];
    
    // Drone type 1: Regular drone
    const droneGeometry = new THREE.ConeGeometry(0.1, 0.3, 6);
    
    // Drone type 2: Quadcopter style
    const quadcopterGeometry = new THREE.Group();
    const bodyGeo = new THREE.BoxGeometry(0.2, 0.05, 0.2);
    const body = new THREE.Mesh(bodyGeo, new THREE.MeshStandardMaterial({ color: 0x333333 }));
    quadcopterGeometry.add(body);
    
    const armGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.3);
    for (let i = 0; i < 4; i++) {
      const arm = new THREE.Mesh(armGeo, new THREE.MeshStandardMaterial({ color: 0x222222 }));
      arm.rotation.z = Math.PI/2;
      arm.position.set(i < 2 ? 0.15 : -0.15, 0, i % 2 === 0 ? 0.15 : -0.15);
      quadcopterGeometry.add(arm);
      
      const propGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.01);
      const prop = new THREE.Mesh(propGeo, new THREE.MeshStandardMaterial({ 
        color: 0xFF6F00,
        emissive: 0xFF6F00,
        emissiveIntensity: 0.5
      }));
      prop.position.set(i < 2 ? 0.15 : -0.15, 0, i % 2 === 0 ? 0.15 : -0.15);
      prop.rotation.x = Math.PI/2;
      quadcopterGeometry.add(prop);
    }
    
    // Create 25 drones (increased count)
    for (let i = 0; i < 25; i++) {
      // Alternate between drone types
      const isDroneType1 = i % 2 === 0;
      
      const droneMaterial = new THREE.MeshStandardMaterial({
        color: i % 3 === 0 ? 0xFF6F00 : 0x4C8C3C,
        metalness: 0.7,
        roughness: 0.3,
        emissive: i % 3 === 0 ? 0xFF6F00 : 0x4C8C3C,
        emissiveIntensity: 0.5,
      });
      
      let drone;
      if (isDroneType1) {
        drone = new THREE.Mesh(droneGeometry, droneMaterial);
      } else {
        // Clone the quadcopter for each instance
        drone = quadcopterGeometry.clone();
        drone.scale.set(0.8, 0.8, 0.8);
      }
      
      // Position drones more widely distributed and visible
      drone.position.set(
        (Math.random() - 0.5) * 20, // wider spread
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15 - 5 // bring some forward
      );
      
      drone.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      drone.userData = {
        speed: 0.005 + Math.random() * 0.015, // Some faster
        rotationSpeed: 0.01 + Math.random() * 0.02,
        direction: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        type: isDroneType1 ? 'basic' : 'quad',
        propellers: isDroneType1 ? [] : drone.children.filter((c, i) => i > 1)
      };
      
      scene.add(drone);
      drones.push(drone as THREE.Mesh);
    }
    
    // Add drone light trails
    const trailMaterial = new THREE.LineBasicMaterial({
      color: 0xFF6F00,
      opacity: 0.4,
      transparent: true
    });
    
    const trails: { line: THREE.Line, points: THREE.Vector3[], drone: THREE.Mesh }[] = [];
    
    drones.slice(0, 8).forEach(drone => {
      const points = [
        drone.position.clone(),
        drone.position.clone().add(new THREE.Vector3(-0.5, -0.5, -0.5))
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, trailMaterial);
      scene.add(line);
      trails.push({ line, points, drone });
    });
    
    // Add particles for a more dynamic feel
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 2500; // More particles
    
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 30; // Wider distribution
      colors[i] = Math.random() * 0.5; // Brighter colors
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05, // Larger particles
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.7
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
        
        // Animate propellers if it's a quadcopter
        if (drone.userData.type === 'quad') {
          drone.userData.propellers.forEach((prop: THREE.Object3D, i: number) => {
            prop.rotation.z += 0.2 * (i % 2 === 0 ? 1 : -1);
          });
        }
        
        // Boundary check and reverse direction
        if (Math.abs(drone.position.x) > 15 || Math.abs(drone.position.y) > 12 || Math.abs(drone.position.z) > 10) {
          drone.userData.direction.multiplyScalar(-1);
        }
      });
      
      // Update trails
      trails.forEach(trail => {
        trail.points[0].copy(trail.drone.position);
        trail.points[1].copy(trail.drone.position.clone().sub(
          trail.drone.userData.direction.clone().multiplyScalar(15)
        ));
        
        const positions = [];
        trail.points.forEach(p => positions.push(p.x, p.y, p.z));
        trail.line.geometry.setAttribute(
          'position', 
          new THREE.Float32BufferAttribute(positions, 3)
        );
        trail.line.geometry.attributes.position.needsUpdate = true;
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
