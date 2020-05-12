import { Structure } from '../base/Structure';
import { MessageReactionEmoji } from './MessageReactionEmoji';

import type { APIReactionData } from '@klasa/dapi-types';
import type { Client } from '../../../Client';
import type { Message } from '../Message';

/**
 * @see https://discord.com/developers/docs/resources/channel#reaction-object
 */
export class MessageReaction extends Structure {

	/**
	 * The reaction ID.
	 * @since 0.0.1
	 */
	public readonly id: string;

	/**
	 * Whether or not the current user reacted using this emoji.
	 * @since 0.0.1
	 */
	public me!: boolean;

	/**
	 * Times this emoji has been used to react.
	 * @since 0.0.1
	 */
	public count!: number;

	/**
	 * Emoji information.
	 * @since 0.0.1
	 */
	public readonly emoji: MessageReactionEmoji;

	/**
	 * The {@link Message message} instance this is tied to.
	 * @since 0.0.1
	 */
	public readonly message: Message;

	public constructor(client: Client, data: APIReactionData, message: Message) {
		super(client);
		this.id = data.emoji.id ?? data.emoji.name as string;
		this.message = message;
		this.emoji = new MessageReactionEmoji(client, data.emoji, this);
		this._patch(data);
	}

	protected _patch(data: APIReactionData): this {
		this.me = data.me;
		this.count = data.count;
		return this;
	}

	/**
	 * The emoji as shown in Discord.
	 * @since 0.0.1
	 */
	public toString(): string {
		return this.emoji.toString();
	}

	/**
	 * Defines the JSON.stringify behavior of this structure.
	 * @since 0.0.1
	 */
	public toJSON(): object {
		return {
			me: this.me,
			count: this.count,
			emoji: this.emoji.toJSON()
		};
	}

}
