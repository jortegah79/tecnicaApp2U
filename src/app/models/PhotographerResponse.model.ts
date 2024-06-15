export interface PhotographerResponse {
  count:     number;
  next:      string;
  previous:  null;
  results:   Result[];
  timestamp: Date;
}

export interface Result {
  id:          number;
  guid:        string;
  email:       string;
  first_name:  string;
  last_name:   string;
  is_removed:  boolean;
  description: string;
  avatar:      null;
  image:       string;
  facebook:    null | string;
  instagram:   null | string;
  webpage:     null | string;
}
