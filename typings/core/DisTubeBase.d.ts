export = DisTubeBase;
/** @private */
declare class DisTubeBase {
    constructor(distube: any);
    /**
     * DisTube
     * @type {DisTube}
     * @private
     */
    private distube;
    /**
     * DisTube options
     * @type {DisTube.DisTubeOptions}
     * @private
     */
    private options;
    /**
     * Discord.js client
     * @type {Discord.Client}
     * @private
     */
    private client;
    /**
     * Emit the {@link DisTube} of this base
     * @private
     * @param  {...any} args arguments
     */
    private emit;
}