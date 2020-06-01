
type LocationState = any;

export interface Location<S = LocationState> {
  pathname: string;
  // search: Search;
  state?: S;
  // hash: Hash;
  // key?: LocationKey;
} 