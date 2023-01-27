import * as THREE from 'three'

import Experience from './Experience'

export default class MacScreen {

    constructor() {
        this.experience = new Experience()
        this.ressources = this.experience.resources
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.world = this.experience.world

        this.setModel()
    }

    setModel()
    {
        this.model = {}

        this.model.element = document.createElement('img')
        this.model.element.src = '../assets/macImage.png'

        this.model.element.style.position = 'fixed'
        this.model.element.style.top = 0
        this.model.element.style.left = 0
        this.model.element.style.zIndex = 1

        // document.body.append(this.model.element)
        
        // Texture
        this.model.texture = new THREE.TextureLoader().load(this.model.element.src)
        this.model.texture.encoding = THREE.sRGBEncoding

        // Material
        this.model.material = new THREE.MeshBasicMaterial({
            map: this.model.texture
        })
        
        this.model.mesh = this.ressources.items.macScreenModel.scene.children[0]
        this.model.mesh.material = this.model.material
        this.scene.add(this.model.mesh)
    }

    update()
    {

    }

}