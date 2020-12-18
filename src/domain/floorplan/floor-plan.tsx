import {cx} from '@emotion/css';
import {cssHeightFull, cssWidthFull} from '../ui/style/css';
import React, {Component, createRef} from 'react';
import {
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneBufferGeometry,
  PointLight,
  Scene,
  SphereBufferGeometry,
  WebGLRenderer,
} from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


export default class FloorPlan extends Component {

  private containerRef = createRef<HTMLDivElement>();

  private lightIntense = 1;

  private camera: PerspectiveCamera | undefined;
  private scene = new Scene();
  private renderer = new WebGLRenderer({ alpha: false, antialias: true });

  private light = new PointLight(0xffffff, this.lightIntense, 10);

  private action: 'lightOff' | 'lightOn' | null = null;

  public componentDidMount() {
    this.create3dModel();
  }

  public render() {
    return (
      <>
        <div ref={this.containerRef} className={cx(cssHeightFull, cssWidthFull)}/>

        <button type={'button'} onClick={() => {
          this.action = 'lightOff';
        }}>
          Licht Aus
        </button>

        <button type={'button'} onClick={() => {
          this.light.visible = true;
          this.action = 'lightOn';
        }}>
          Licht An
        </button>


        <div>
          TODO Hier sollte ein Einstellungsorder sein für die threeJs Settings
        </div>
      </>
    );
  }

  private create3dModel() {
    const container = this.containerRef.current!;

    // Load Camera Perspektive
    this.camera = new PerspectiveCamera(10, container?.clientWidth / container?.clientHeight, 1, 20000);

    this.camera.position.set(80, 100, 120);

    // Load a Renderer
    // var renderer = new WebGLRenderer({ alpha: false });
    this.renderer.setClearColor(0xC5C5C3);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container?.clientWidth, container?.clientHeight);


    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap; // default THREE.PCFShadowMap

    container.appendChild(this.renderer.domElement);

    // Load the Orbitcontroller
    new OrbitControls(this.camera, this.renderer.domElement);

    // Load Light
    // const ambientLight = new AmbientLight(0xffffff, 1);
    // ambientLight.castShadow = true;
    // this.scene.add(ambientLight);

    // const directionalLight = new DirectionalLight(0xffffff);
    // directionalLight.castShadow = true;
    // directionalLight.position.set(0, 40, 40).normalize();
    //
    // this.scene.add(directionalLight);


    // Addiontal Light
    const light = new DirectionalLight(0xffffff, 0.8);
    light.position.set(0, 40, 40); //default; light shining from top
    // light.castShadow = true; // default false
    // light.shadow.bias = -0.001;

    light.shadow.camera.top = 40;
    light.shadow.camera.bottom = -70;
    light.shadow.camera.left = -150;
    light.shadow.camera.right = 150;
    light.shadow.camera.near = 25;
    light.shadow.camera.far = 250;
    light.shadow.bias = -0.005;

    this.scene.add( light );


    // light.shadow.mapSize.width = 1024; // default
    // light.shadow.mapSize.height = 1024; // default
    light.shadow.camera.near = 25; // default
    light.shadow.camera.far = 70; // default

    light.shadow.camera.left = -20;
    light.shadow.camera.right = 20;
    light.shadow.camera.top = 20;
    light.shadow.camera.bottom = -20;


    const loader = new GLTFLoader();
    loader.load('./floorplan3d/models/gleesen-grundriss-v1.gltf', (gltf) => {
      // gltf.scene.scale.set(1, 1, 1);
      gltf.scene.position.x = 0;				    //Position (x = right+ left-)
      gltf.scene.position.y = 0;				    //Position (y = up+, down-)
      gltf.scene.position.z = 0;				    //Position (z = front +, back-)

      gltf.scene.traverse(function (child) {
        child.castShadow = true;
        child.receiveShadow = true;
      });


      this.scene.add(gltf.scene);
      this.render3d();
    });


    //Create a plane that receives shadows (but does not cast them)
    const planeGeometry = new PlaneBufferGeometry(200, 200, 32, 32);
    const planeMaterial = new MeshStandardMaterial({ color: 0xaaff00 });
    const plane = new Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    this.scene.add(plane);

    plane.position.y = 0; // Oben Unten
    plane.position.z = 0;
    plane.position.x = 12;
    plane.rotateX(- Math.PI / 2);


    // const helper = new CameraHelper( light.shadow.camera );
    // scene.add( helper );


    // Point Light
    // const lightSphere = new SphereBufferGeometry(0.1, 16, 8);

    // this.light.add(new Mesh(lightSphere, new MeshBasicMaterial({ color: 0xff0040 })));

    this.light.position.z = 15;
    this.light.position.y = 5;
    this.light.position.z = 6;
    this.light.castShadow = true;

    this.light.shadow.camera.near = 0.5;
    this.light.shadow.camera.far = 50;

    this.light.shadow.bias = -0.004;

    console.log(this.light.shadow.camera.near);
    console.log(this.light.shadow.camera.far);

    this.scene.add(this.light);

    this.renderer.render(this.scene, this.camera);
    this.animate();

  }

  private animate() {

    switch (this.action) {
      case 'lightOff':
        this.light.intensity -= 0.1;

        if (this.light.intensity <= 0) {
          this.light.visible = false;
          this.action = null;
        }
        break;

      case 'lightOn':
        this.light.intensity += 0.1;

        if (this.light.intensity >= this.lightIntense) {
          this.action = null;
        }
        break;
    }


    this.render3d();
    requestAnimationFrame(() => this.animate());
  }

  private render3d() {
    this.renderer.render(this.scene, this.camera!);
  }
}


// export function FloorPlanOld() {
//
//   // TODO Das hier nicht alles in React machen sondern auslagern
//   const containerRef = useRef<HTMLDivElement | null>(null);
//
//   // three refs
//   const cameraRef = useRef<PerspectiveCamera | undefined>();
//   const sceneRef = useRef<Scene>(new Scene());
//   const rendererRef = useRef<WebGLRenderer>(new WebGLRenderer({ alpha: false, antialias: true }));
//
//   // Settings
//   const [fov, setFov] = useState(10);
//
//   // Test Light
//   const lightSphereRef = useRef(new SphereBufferGeometry(0.1, 16, 8));
//   const light1Ref = useRef(new PointLight(0xff0040, 1, 150));
//
//   const action = useRef<'lightOff' | 'lightOn' | null>('lightOff');
//
//   useEffect(() => {
//     create3dModel();
//   }, [containerRef]);
//
//   useEffect(() => {
//     const camera = cameraRef.current;
//
//     if (camera) {
//       console.log('change fov');
//       camera.fov = fov;
//       camera.updateProjectionMatrix();
//     }
//   }, [fov]);
//
//   return (
//     <>
//       <div ref={containerRef} className={cx(cssHeightFull, cssWidthFull)}/>
//
//       <div>
//         FOV: <input value={fov} onChange={(event) => {
//         const value = parseInt(event.target.value);
//
//         if (!isNaN(value)) {
//           setFov(value);
//         }
//       }}/>
//
//
//         <button type={'button'} onChange={() => {
//           light1Ref.current.intensity = 0;
//           light1Ref.current.updateMatrix();
//           light1Ref.current.updateMatrixWorld();
//         }}>
//           Licht Aus
//         </button>
//
//         <button type={'button'} onChange={() => action.current = 'lightOn'}>
//           Licht An
//         </button>
//
//       </div>
//     </>
//   );
//
//
//
// }