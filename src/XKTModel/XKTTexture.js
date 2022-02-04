/**
 * A texture shared by {@link XKTMaterial}s.
 *
 * * Created by {@link XKTModel#createTexture}
 * * Stored in {@link XKTMaterial#textures}, {@link XKTModel#textures} and {@link XKTModel#texturesList}
 *
 * @class XKTTexture
 */
class XKTTexture {

    /**
     * @private
     */
    constructor(cfg) {

        /**
         * Unique ID of this XKTTexture in {@link XKTModel#textures}.
         *
         * @type {Number}
         */
        this.textureId = cfg.textureId;

        /**
         * Index of this XKTTexture in {@link XKTModel#texturesList};
         *
         * @type {Number}
         */
        this.textureIndex = cfg.textureIndex;

        /**
         * Texture image data.
         *
         * @type {String}
         */
        this.data = cfg.data;
    }
}

export {XKTTexture};