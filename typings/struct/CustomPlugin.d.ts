export = CustomPlugin;
/**
 * Custom Plugin
 * @extends Plugin
 */
declare class CustomPlugin extends Plugin {
    /** Create a custom plugin */
    constructor();
    /**
     * Execute if the url is validated
     * @param {Discord.VoiceChannel|Discord.StageChannel} voiceChannel The voice channel will be joined
     * @param {string} url Validated url
     * @param {Discord.GuildMember} member Requested user
     * @param {Discord.TextChannel?} textChannel Default {@link Queue#textChannel}
     * @param {boolean} skip Skip the playing song (if exists) and play the added song/playlist instantly
     * @param {boolean} unshift Add the song/playlist to the beginning of the queue (after the playing song if exists)
     * @returns {Promise<void>}
     */
    play(voiceChannel: Discord.VoiceChannel | Discord.StageChannel, url: string, member: Discord.GuildMember, textChannel: Discord.TextChannel | null, skip: boolean, unshift: boolean): Promise<void>;
}
import Plugin = require("./Plugin");
import Discord = require("discord.js");
