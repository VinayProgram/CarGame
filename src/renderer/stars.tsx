import React from "react";


const Stars = ({ count = 5000, radius = 500 }) => {
  const generateRandomPosition = () => {
    // Generate a random point on a sphere
    const phi = Math.acos(2 * Math.random() - 1);  // Angle from the z-axis
    const theta = Math.random() * 2 * Math.PI;     // Angle around the z-axis

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    return [x, y, z];
  };

  const starsArray = new Array(count).fill(null).map((_, i) => {
    const [x, y, z] = generateRandomPosition();
    return (
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshBasicMaterial color="white" />
      </mesh>
    );
  });

  return <React.Suspense>{starsArray}</React.Suspense>;
};


export default Stars;
