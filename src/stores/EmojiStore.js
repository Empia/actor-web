/*
 * Copyright (C) 2015 Actor LLC. <https://actor.im>
 */

import { Store } from 'flux/utils';
import Dispatcher from '../dispatcher/ActorAppDispatcher';
import { ActionTypes } from '../constants/ActorAppConstants';

let _isOpen = false;

class EmojiStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);
  }

  isOpen() {
    return _isOpen;
  }

  __onDispatch(action) {
    switch(action.type) {
      case ActionTypes.EMOJI_SHOW:
        _isOpen = true;
        this.__emitChange();
        break;
      case ActionTypes.EMOJI_CLOSE:
        _isOpen = false;
        this.__emitChange();
        break;
      default:
    }
  }
}

export default new EmojiStore(Dispatcher);
