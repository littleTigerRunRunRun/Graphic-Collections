console.log("this is main js for piece - testground in project threejs")
//https://codepen.io/ycw/pen/BPdaRq

import {} from '../lib/base.js';

let img = new Image();
img.src = 'data:image/jpeg;base64,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';

let container = document.getElementById('container');
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 100);
let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
//                    GPU %
// BasicShadowMap     1x
// PCFShadowMap       2x    (default)
// PCFSoftShadowMap   
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
container.appendChild(renderer.domElement);

// Controls stuff
let controls = new THREE.OrbitControls(camera);
controls.maxAzimuthAngle = Math.PI/3;//hor
controls.minAzimuthAngle = -Math.PI/3;
controls.maxPolarAngle = Math.PI/180 * 160;//vert
controls.minPolarAngle = Math.PI/180 * 20;
controls.update();

// Lights animation stuff
const lights = [];
const lightMoDirs = [1, 1, -1];
const lightMoSpeeds = [0.03, 0.05, 0.04];

(function tick() {
	requestAnimationFrame(tick);
	renderer.render(scene, camera);
    for (const [i, light] of lights.entries()) {
        const lightOldX = light.position.x;
        const lightNewX = light.position.x + lightMoDirs[i] * lightMoSpeeds[i];
        if (lightNewX > 4 || lightNewX < -4) {
            lightMoDirs[i] *= -1;
        }
        light.position.x = lightNewX;
    }
}());

//Resize Events
addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

// Main Flow
preload().then(main);

function preload() {
    return new Promise((res, rej) => {
        new THREE.TextureLoader().load(img.src, res, undefined, rej);
    });
}

function main(texture) {
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    
    addWall();
    addLights(addFrame(texture));
    
    camera.position.set(-0.3, -0.5, 0.8);
    controls.update();
}

function addWall() {
    const s = 100;
    const color = 0xaa6666;
    { // wall
        const geometry = new THREE.PlaneGeometry(s, s, 1, 1);
        const material = new THREE.MeshPhongMaterial({color:color});
        const object = new THREE.Mesh( geometry, material );
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add(object);
    }
    
    { // cube "wrapping" the scene, i.e a room
        const geometry = new THREE.BoxGeometry(s, s, s);
        const material = new THREE.MeshPhongMaterial({color:color});
        material.side = THREE.DoubleSide;
        const object = new THREE.Mesh( geometry, material );
        object.castShadow = false;
        object.receiveShadow = true;
        scene.add(object);
    }
};

function addFrame(texture) {
    const frameDepth = 0.01;//z
    const borderWidth = 0.05;//along x (/y)
    const borderDepth = frameDepth * 4;//thicker s.t. it casts shadow on board
    const borderColor = 0x222222;//if fullblack, absorb all light(no way)
    const frameBg = 0xffffff;//bg colo of picture(imagine if its translucent)
    const pictureScale = 0.8;//control amount of frame board to be seen
    const frameBBox = {};//frame bbox, return object

    // frame max dim = 1 in webgl space
    let frameWidth, frameHeight;
    if (texture.image.width > texture.image.height) {
        frameWidth = 1;
        frameHeight = texture.image.height / texture.image.width;
    }
    else {
        frameHeight = 1;
        frameWidth = texture.image.width / texture.image.height;
    }
    
    { // picture plane
        const geometry = new THREE.PlaneGeometry(frameWidth*pictureScale, frameHeight*pictureScale, 1, 1);
        const material = new THREE.MeshPhongMaterial({map:texture});
        const object = new THREE.Mesh( geometry, material );
        object.position.z = frameDepth/2;//overlap with frame borad surface.
        object.castShadow = false;
        object.receiveShadow = true;
        ///一个大于0的offset 会把模型推到离你（摄像机）更远一点的位置，相应地，一个小于0的offset 会把模型拉近。
        /// GL_POLYGON_OFFSET_FILL 用于解决共面的多个面重叠渲染时出现边缘闪光的情况
        //资料参考：https://www.cnblogs.com/bitzhuwei/archive/2015/06/12/4571539.html#_label1
        material.polygonOffset = true;//offset=DEPTHSLOPE*<Factor> + <EPSILON>*Units
        material.polygonOffsetUnits = -50;//-ve->get closer;(+ve push farther)
        scene.add(object);
    }
    
    { // frame board (the white shim)
        const geometry = new THREE.BoxGeometry(frameWidth, frameHeight, frameDepth);
        const material = new THREE.MeshPhongMaterial({color:frameBg});
        const object = new THREE.Mesh( geometry, material );
        object.castShadow = false;
        object.receiveShadow = true;
        scene.add(object);  
    }
    
    { // right border
        const geometry = new THREE.BoxGeometry( borderWidth, frameHeight, borderDepth );
        const material = new THREE.MeshPhongMaterial( { color: borderColor } );
        const object = new THREE.Mesh( geometry, material );
        object.position.x = frameWidth/2 + borderWidth/2; // as if css contentbox boxsizing model
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add(object);
    }
    
    { // left border
        const geometry = new THREE.BoxGeometry( borderWidth, frameHeight, borderDepth );
        const material = new THREE.MeshPhongMaterial( { color: borderColor } );
        const object = new THREE.Mesh( geometry, material );
        object.position.x = -frameWidth/2 + -borderWidth/2;
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add(object);
    }
    
    { // top border
        const geometry = new THREE.BoxGeometry(frameWidth + borderWidth*2, borderWidth, borderDepth );
        const material = new THREE.MeshPhongMaterial( { color: borderColor } );
        const object = new THREE.Mesh( geometry, material );
        object.position.y = frameHeight/2 + borderWidth/2;
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add(object);
    }
    
    { // bottom border
        const geometry = new THREE.BoxGeometry(frameWidth + borderWidth*2, borderWidth, borderDepth );
        const material = new THREE.MeshPhongMaterial( { color: borderColor } );
        const object = new THREE.Mesh( geometry, material );
        object.position.y = -frameHeight/2 + -borderWidth/2;
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add(object);
    }
    
    frameBBox.width = frameWidth + borderWidth * 2; //include borders
    frameBBox.height = frameHeight + borderWidth * 2;
    return frameBBox;
}

function addLights(frameBBox) {
  const w = frameBBox.width;
  const h = frameBBox.height;
  const shadowMapWidth = 1024;//shadow quality factor
  const shadowMapHeight = 1024;//ditto
  
  { // ambient
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
  }
  
  { // light#1
    const color = 0xffff00;//Y
    const intensity = 0.4;
    const distance = 0;
    const decay = 1;
    const angle = Math.PI/40;
    const penumbra = 1;
    const light = new THREE.SpotLight(color,intensity,distance,angle,penumbra,decay);
    light.position.set(-w*2, h*6, 7);
    light.castShadow = true;
    light.shadow.mapSize.width = shadowMapWidth;
    light.shadow.mapSize.height = shadowMapHeight;
    scene.add( light );
    lights.push(light);
  }
  
  { // light#2
    const color = 0x00ffff;//C
    const intensity = 5;
    const distance = 14;
    const decay = 2;
    const angle = Math.PI/40;
    const penumbra = 1;
    const light = new THREE.SpotLight(color,intensity,distance,angle,penumbra,decay);
    light.position.set(w*3, h*6, 2);
    light.castShadow = true;
    light.shadow.mapSize.width = shadowMapWidth;
    light.shadow.mapSize.height = shadowMapHeight;
    scene.add(light);
    lights.push(light);
  }
  
  { // light#3
    const color = 0xff00ff;//M
    const intensity = 5;
    const distance = 14;
    const decay = 2;
    const angle = Math.PI/40;
    const penumbra = 1;
    const light = new THREE.SpotLight(color,intensity,distance,angle,penumbra,decay);
    light.position.set(0, h*6, 2);
    light.castShadow = true;
    light.shadow.mapSize.width = shadowMapWidth;
    light.shadow.mapSize.height = shadowMapHeight;
    scene.add(light);
    lights.push(light);
  }
}