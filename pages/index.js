import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Image from 'next/image'
import { Floor } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.scene}>
      <Head >

      </Head>
      <Canvas 
        shadows
        className={styles.canvas}
        camera={{
          position: [0, 5, 7],
          isPerspectiveCamera: true,

        }}
      >
        <pointLight castShadow position={[0, 5, 20]} />
        <ambientLight color='white' castShadow/>
        <mesh position={[ -9, 0.6, 0 ]} castShadow>
          <sphereBufferGeometry args={[ 0.7, 32, 32]} />
          <meshPhysicalMaterial color='green' />
        </mesh>
        <Floor />
      </Canvas>
    </div>
  )
}
