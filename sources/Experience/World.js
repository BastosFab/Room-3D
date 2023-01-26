import * as THREE from 'three'
import Experience from './Experience.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        if(this.debug)  {
            this.debugFolder = this.debug.addFolder({
                title: 'Light One',
                expanded: true});
        }
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setRoom()
            }
        })
    }

    // setDummy()
    // {
    //     this.resources.items.lennaTexture.encoding = THREE.sRGBEncoding
        
    //     const cube = new THREE.Mesh(
    //         new THREE.BoxGeometry(1, 1, 1),
    //         new THREE.MeshBasicMaterial({ map: this.resources.items.lennaTexture })
    //     )
    //     this.scene.add(cube)        
    // }

    setRoom() {
        this.room = {}
        this.room.model = this.resources.items.roomModel.scene

        this.scene.add(this.room.model)

        const directionLightOne = new THREE.DirectionalLight('#243299')
        directionLightOne.position.set(-3, 1.30, 1.30)
        this.scene.add(directionLightOne)
        console.log(directionLightOne)

        if(this.debug) {
            const PARAMS = {
                x: -3,
                y: 1.30,
                z: 1.30,
                color: '#243299',
                intensity: 3
              };
            this.debugFolder.addInput(PARAMS, 'color')
            this.debugFolder.addInput(PARAMS, 'x', {
                    min: -20,
                    max: 20
                })
            this.debugFolder.addInput(PARAMS, 'y', {
                min: -20,
                max: 20
            })
            this.debugFolder.addInput(PARAMS, 'z', {
                min: -20,
                max: 20
            })
            this.debugFolder.addInput(PARAMS, 'intensity', {
                min: -20,
                max: 20
            })
            this.debugFolder.on('change', () => {
                    directionLightOne.color.set(PARAMS.color)
                    directionLightOne.position.set(PARAMS.x, PARAMS.y, PARAMS.z)
                })
        }
    }

    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}