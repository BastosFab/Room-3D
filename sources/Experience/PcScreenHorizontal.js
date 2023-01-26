import * as THREE from 'three'

import Experience from './Experience'

export default class PcScreenHorizontal {

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

        this.model.element = document.createElement('video')
        this.model.element.muted = true
        this.model.element.loop = true
        this.model.element.playsInline = true
        this.model.element.src = '../assets/codVideo.mp4'
        this.model.element.play()

        this.model.element.style.position = 'fixed'
        this.model.element.style.top = 0
        this.model.element.style.left = 0
        this.model.element.style.zIndex = 1

        // document.body.append(this.model.element)
        
        // Texture
        this.model.texture = new THREE.VideoTexture(this.model.element)

        // Material
        this.model.material = new THREE.MeshBasicMaterial({
            map: this.model.texture
        })
        
        this.model.mesh = this.ressources.items.pcScreenHorizontal.scene.children[0]
        this.model.mesh.material = this.model.material
        this.scene.add(this.model.mesh)
    }

    update()
    {

    }

}