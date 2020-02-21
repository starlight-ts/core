import { BaseClient, BaseClientOptions } from './BaseClient';
import { WebSocketManager, WSOptions } from './ws/WebSocketManager';
import { mergeDefault } from '@klasa/utils';
import { ClientOptionsDefaults } from '../util/Constants';

export interface ClientOptions extends BaseClientOptions {
	ws: WSOptions;
}

/**
 * The Project-Blue Client used to wrap the discord api
 */
export class Client extends BaseClient {

	/**
	 * The WebSocket manager
	 */
	public ws: WebSocketManager;

	/**
	 * The options to use for this client
	 */
	public options: ClientOptions;


	/**
	 * @param options All of your preferences on how Project-Blue should work for you
	 */
	public constructor(options: Partial<ClientOptions>) {
		super(options);
		this.options = mergeDefault(ClientOptionsDefaults, options);
		this.ws = new WebSocketManager(this.api, this.options.ws);
	}

	/**
	 * Sets the token to use for the api.
	 */
	set token(token: string) {
		super.token = token;
		this.ws.token = token;
	}

	/**
	 * Connects the client to the websocket
	 */
	public async connect(): Promise<void> {
		// todo: Not ready yet
		// await this.ws.spawn();
	}

	/**
	 * Destroys all timers and disconnects all shards from the websocket
	 */
	public async destroy(): Promise<void> {
		await super.destroy();
		// todo: Not ready yet
		// await this.ws.despawn();
	}

}
