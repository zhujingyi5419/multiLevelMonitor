import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import PureRenderMixin from 'react-addons-pure-render-mixin'
class MachineRoom extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.cameraPosition = new THREE.Vector3(0, 0, 5);
        this.state = {
            cubeRotation: new THREE.Euler(),
        };
        this._onAnimate = () => {
            this.setState({
                cubeRotation: new THREE.Euler(
                    this.state.cubeRotation.x + 0.1,
                    this.state.cubeRotation.y + 0.1,
                    0
                ),
            });
        };
    }

    render() {
        const width = window.innerWidth; // canvas width
        const height = window.innerHeight; // canvas height
        return (<React3
            mainCamera="camera"
            width={width}
            height={height}
            onAnimate={this._onAnimate}>
            <scene>
                <perspectiveCamera
                    name="camera"
                    fov={75}
                    aspect={width / height}
                    near={0.1}
                    far={1000}
                    position={this.cameraPosition}
                />
                <mesh rotation={this.state.cubeRotation}>
                    <boxGeometry  width={1}  height={1} depth={1}/>
                    <meshBasicMaterial  color={0x00ff00}/>
                </mesh>
            </scene>
        </React3>);
    }
}
export default MachineRoom