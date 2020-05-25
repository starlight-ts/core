import { RequestOptions } from '@klasa/rest';
import { DataStore } from './base/DataStore';
import type { APIInviteData } from '@klasa/dapi-types';
import type { Invite } from '../structures/Invite';
import type { Client } from '../../client/Client';
/**
 * The store for {@link Invite invites}.
 * @since 0.0.1
 */
export declare class InviteStore extends DataStore<Invite> {
    /**
     * Builds the store.
     * @since 0.0.1
     * @param client The {@link Client client} this store belongs to.
     */
    constructor(client: Client);
    /**
     * Deletes an invite given its code.
     * @since 0.0.1
     * @param code The {@link Invite#code invite code}.
     * @param requestOptions The additional request options.
     * @see https://discord.com/developers/docs/resources/invite#delete-invite
     */
    remove(code: string, requestOptions?: RequestOptions): Promise<Invite>;
    /**
     * Returns a {@link Invite invite} with optionally their metadata.
     * @since 0.0.1
     * @param code The {@link Invite#code invite code}.
     * @see https://discord.com/developers/docs/resources/invite#get-invite
     */
    fetch(code: string, options?: InviteStoreFetchOptions): Promise<Invite>;
    /**
     * Adds a new structure to this DataStore
     * @param data The data packet to add
     * @param cache If the data should be cached
     */
    protected _add(data: APIInviteData): Invite;
}
/**
 * The options for {@link InviteStore#fetch}.
 * @since 0.0.1
 * @see https://discord.com/developers/docs/resources/invite#get-invite-get-invite-url-parameters
 */
export interface InviteStoreFetchOptions {
    /**
     * Whether the invite should contain approximate member counts.
     * @since 0.0.1
     * @default false
     */
    with_counts?: boolean;
}
