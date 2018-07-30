let gl;

export default {
    init(gl){
        gl = gl;
    },
    setGeometry(){
        if(!gl){console.log('geometry.js需要初始化出gl');return false;}
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
                0, -100,
                150, 124,
                -175, 100
            ]),
            gl.STATIC_DRAW
        );
    }
}