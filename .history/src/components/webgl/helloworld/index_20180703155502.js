import GL from '@/components/webgl/lib/initGL.js';
import vertex from './vertex.html';
import fragment from './fragment.html';

let gl = GL.init();

//准备着色器
let vertex_shader = GL.createVertexShader(vertex);
let fragement_shader = GL.createFragmentShader(fragment);
let program = GL.linkShader(vertex_shader, fragement_shader);
