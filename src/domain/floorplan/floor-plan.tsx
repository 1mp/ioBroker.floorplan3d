import React, {useEffect, useRef} from 'react';
import {cx} from '@emotion/css';
import {cssHeightFull, cssWidthFull} from '../ui/style/css';
import {AmbientLight, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer} from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

export default function FloorPlan() {

  // TODO Das hier nicht alles in React machen sondern auslagern
  const containerRef = useRef<HTMLDivElement | null>(null);

  // three refs
  const cameraRef = useRef<PerspectiveCamera | undefined>();
  const sceneRef = useRef<Scene>(new Scene());
  const rendererRef = useRef<WebGLRenderer>(new WebGLRenderer({ alpha: false, antialias: true }));

  useEffect(() => {

      if (containerRef.current) {

        const container = containerRef.current;
        const renderer = rendererRef.current;
        const scene = sceneRef.current;

        // Load Camera Perspektive
        cameraRef.current = new PerspectiveCamera(10, container?.clientWidth / container?.clientHeight, 1, 20000);


        const camera = cameraRef.current;

        camera.position.set(150, 150, 150);

        // Load a Renderer
        // var renderer = new WebGLRenderer({ alpha: false });
        renderer.setClearColor(0xC5C5C3);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container?.clientWidth, container?.clientHeight);
        container.appendChild(renderer.domElement);

        // Load the Orbitcontroller
        new OrbitControls(camera, renderer.domElement);

        // Load Light
        const ambientLight = new AmbientLight(0xcccccc);
        scene.add(ambientLight);

        const directionalLight = new DirectionalLight(0xffffff);
        directionalLight.position.set(0, 1, 1).normalize();
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        loader.load('floorplan3d/models/floorplan-test.gltf', function (gltf) {
          gltf.scene.scale.set(2, 2, 2);
          gltf.scene.position.x = 0;				    //Position (x = right+ left-)
          gltf.scene.position.y = 0;				    //Position (y = up+, down-)
          gltf.scene.position.z = 0;				    //Position (z = front +, back-)

          scene.add(gltf.scene);
        });


        // const container = containerRef.current;
        //
        // cameraRef.current = new PerspectiveCamera(20, container?.clientWidth / container?.clientHeight, 1, 10000);
        //
        //
        // const camera = cameraRef.current;
        // const scene = sceneRef.current;
        // const renderer = rendererRef.current;
        // const loader = new GLTFLoader();
        //
        //
        // camera.position.z = 50;
        // camera.position.x = 50;
        // camera.position.y = 50;
        // scene.background = new Color(0xff0f0f);
        //
        // // Licht
        // const light = new DirectionalLight( 0xffffff );
        // light.position.set(5, 10, 2);
        // scene.add( light );
        //
        //
        // // loader.load('models/floorplan-test.gltf', function (gltf) {
        // //
        // //   scene.add(gltf.scene);
        // //
        // //   console.log(gltf);
        // //
        // // }, undefined, function (error) {
        // //
        // //   console.error(error);
        // //
        // // });
        //
        // loader.load('https://threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf', (gltf) => {
        //   const root = gltf.scene;
        //   scene.add(root);
        //
        //   // compute the box that contains all the stuff
        //   // from root and below
        //   const box = new Box3().setFromObject(root);
        //
        //   const boxSize = box.getSize(new Vector3()).length();
        //   const boxCenter = box.getCenter(new Vector3());
        //
        //   camera.near = boxSize / 100;
        //   camera.far = boxSize * 100;
        //
        //   camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
        //
        //   // // set the camera to frame the box
        //   // frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
        //   //
        //   // // update the Trackball controls to handle the new size
        //   // controls.maxDistance = boxSize * 10;
        //   // controls.target.copy(boxCenter);
        //   // controls.update();
        // });
        //
        //
        //
        // const geometry = new BoxGeometry();
        // const material = new MeshBasicMaterial( { color: 0x00ff00 } );
        // const cube = new Mesh( geometry, material );
        //
        // scene.add(cube);
        //
        //
        // renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.setSize(container?.clientWidth, container?.clientHeight);
        // container.appendChild(renderer.domElement);

        renderer.render(scene, camera);
        animate();

      }
    }
    , [containerRef]);

  return (
    <div ref={containerRef} className={cx(cssHeightFull, cssWidthFull)}/>
  );

  function animate() {
    render();
    requestAnimationFrame(animate);
  }

  function render() {
    rendererRef.current.render(sceneRef.current, cameraRef.current!);
  }

}