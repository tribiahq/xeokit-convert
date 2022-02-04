/**
 * Represents the usage of a {@link XKTGeometry} by an {@link XKTEntity}.
 *
 * * Created by {@link XKTModel#createEntity}
 * * Stored in {@link XKTEntity#meshes} and {@link XKTModel#meshesList}
 * * Has an {@link XKTGeometry} and {@link XKTMaterial}, which it can share with other {@link XKTMesh}es
 *
 * @class XKTMesh
 */
class XKTMesh {

    /**
     * @private
     */
    constructor(cfg) {

        /**
         * Unique ID of this XKTMesh in {@link XKTModel#meshes}.
         *
         * @type {Number}
         */
        this.meshId = cfg.meshId;

        /**
         * Index of this XKTMesh in {@link XKTModel#meshesList};
         *
         * @type {Number}
         */
        this.meshIndex = cfg.meshIndex;

        /**
         * The 4x4 modeling transform matrix.
         *
         * Transform is relative to the center of the {@link XKTTile} that contains this XKTMesh's {@link XKTEntity},
         * which is given in {@link XKTMesh#entity}.
         *
         * When the ````XKTEntity```` shares its {@link XKTGeometry}s with other ````XKTEntity````s, this matrix is used
         * to transform this XKTMesh's XKTGeometry into World-space. When this XKTMesh does not share its ````XKTGeometry````,
         * then this matrix is ignored.
         *
         * @type {Number[]}
         */
        this.matrix = cfg.matrix;

        /**
         * The instanced {@link XKTGeometry}.
         *
         * @type {XKTGeometry}
         */
        this.geometry = cfg.geometry;

        /**
         * The {@link XKTMaterial} that defines the appearance of this XKTMesh.
         *
         * @type {XKTMaterial}
         */
        this.material = cfg.material;

        /**
         * The owner {@link XKTEntity}.
         *
         * Set by {@link XKTModel#createEntity}.
         *
         * @type {XKTEntity}
         */
        this.entity = null; // Set after instantiation, when the Entity is known
    }
}

export {XKTMesh};