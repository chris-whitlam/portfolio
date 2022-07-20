export interface Image {
  alt?: string;
  blurHash?: string;
  url: string;
  height?: number;
  width?: number;
}

export interface GraphQLImage {
  alt?: string;
  blurHash?: string;
  image: {
    url: string;
    height?: number;
    width?: number;
  }
}