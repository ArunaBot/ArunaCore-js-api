/*
  Copyright 2023-2026 Hugo Heger (LoboMetalurgico)

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { IMessage } from '../interfaces';

/**
 * WebSocket message parser.
 */
export class WebSocketParser {
  /**
   * Create the message object by the given properties.
   *
   * @param from - The 'from' property of the message.
   * @param content - The 'content' property of the message.
   * @param type - The optional 'type' property of the message.
   * @param command - The optional 'command' property of the message.
   * @param target - The optional 'target' property of the message.
   * @param args - The optional 'args' property of the message.
   * @returns {IMessage} Message object.
   */
  public static format(from: { id: string, key?: string }, content: any, { type, command, target, args }: { type?: string, command?: string, target?: { id: string, key?: string }, args?: string[] }): IMessage {
    const finalJSON: IMessage = {
      from,
      content,
    };

    if (command) Object.assign(finalJSON, { command });
    if (target) Object.assign(finalJSON, { target });
    if (args) Object.assign(finalJSON, { args });
    if (type) Object.assign(finalJSON, { type });

    return finalJSON;
  }

  /**
   * Format and convert a WebSocket message object into a message string.
   *
   * @param from - The 'from' property of the message.
   * @param content - The 'content' property of the message.
   * @param type - The optional 'type' property of the message.
   * @param command - The optional 'command' property of the message.
   * @param target - The optional 'target' property of the message.
   * @param args - The optional 'args' property of the message.
   * @returns The WebSocket message string.
   */
  public static formatToString(from: { id: string, key?: string }, content: any, { type, command, target, args }: { type?: string, command?: string, target?: { id: string, key?: string }, args?: string[] }): string {
    return JSON.stringify(this.format(from, content, { type, command, target, args }));
  }

  /**
   * @private
   */
  public static formatToStringWithUUID(from: { id: string, key?: string }, uuid: string, content: any, { type, command, target, args }: { type?: string, command?: string, target?: { id: string, key?: string }, args?: string[] }): string {
    const message = this.format(from, content, { type, command, target, args });
    Object.assign(message, { uuid });
    return JSON.stringify(message);
  }
}
