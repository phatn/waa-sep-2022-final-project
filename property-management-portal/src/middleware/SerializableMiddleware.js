import { Iterable } from 'immutable'
import {
  createSerializableStateInvariantMiddleware,
  isPlain
} from '@reduxjs/toolkit';

// Augment middleware to consider Immutable.JS iterables serializable
export const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

export const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value);

export const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
});
