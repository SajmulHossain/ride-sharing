export interface IHistory {
  history: Root[];
}

interface Root {
  from: From;
  to: To;
}

interface From {
  place: string;
  at: string;
}

interface To {
  place: string;
  at: string;
}
