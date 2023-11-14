import './style.css'
import * as THREE from 'three';

// threejs 三个要素 场景 相机 渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// 渲染器中加入场景和相机
renderer.render(scene, camera)