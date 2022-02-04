/**
 * A material shared by {@link XKTMesh}es.
 *
 * * Created by {@link XKTModel#createMaterial}
 * * Registered in {@link XKTMesh#material}, {@link XKTModel#materials} and {@link XKTModel#materialsList}
 *
 * @class XKTMetalRoughMaterial
 */
class XKTMaterial {

    /**
     * @private
     */
    constructor(cfg) {

        /**
         * Unique ID of this XKTMaterial in {@link XKTModel#materials}.
         *
         * @type {Number}
         */
        this.materialId = cfg.materialId;

        /**
         * Identifies the material type.
         *
         * @type {Number}
         */
        this.materialType = cfg.materialType;

        /**
         * Index of this XKTMaterial in {@link XKTModel#meshesList};
         *
         * @type {Number}
         */
        this.materialIndex = cfg.materialIndex;

        /**
         * The number of {@link XKTMesh}s that reference this XKTMaterial.
         *
         * @type {Number}
         */
        this.numInstances = 0;

        /**
         * List of {@link XKTTexture}s used by this XKTMaterial.
         *
         * @type {XKTTexture[]}
         */
        this.textures = cfg.textures;

        /**
         * List of attributes of this XKTMaterial.
         *
         * @type {number[]}
         */
        this.attributes = cfg.attributes;
    }
}

export {XKTMaterial};