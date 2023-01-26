import * as THREE from 'three'
import Experience from './Experience.js'
import TvScreen from './tvScreen.js'
import PcScreenHorizontal from './PcScreenHorizontal.js'

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
                this.setTvScreens()
                this.setPcScreenHorizontal()
            }
        })
    }

    setRoom() {
        this.room = {}
        this.room.model = this.resources.items.roomModel.scene

        this.room.texture = this.resources.items.bakedTexture
        this.room.texture.encoding = THREE.sRGBEncoding
        this.room.texture.flipY = false

        this.room.material = new THREE.MeshBasicMaterial({ map: this.room.texture})

        this.room.model.traverse((_child) => {
            if(_child instanceof THREE.Mesh) {
                _child.material = this.room.material
            }
        })

        this.scene.add(this.room.model)

        const directionLightOne = new THREE.DirectionalLight('#243299')
        directionLightOne.position.set(-3, 1.30, 1.30)
        this.scene.add(directionLightOne)
    }

    setTvScreens()
    {
        this.tvScreen = new TvScreen()
    }

    setPcScreenHorizontal() {
        this.pcScreenHorizontal = new PcScreenHorizontal()
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