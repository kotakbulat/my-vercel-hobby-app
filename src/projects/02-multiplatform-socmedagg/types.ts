export type Platform = 'youtube' | 'twitter' | 'instagram';
export type PostType = 'video' | 'text' | 'image';

export interface BasePost {
    id: string;
    author: string;
    avatar: string;
}

export interface VideoPost extends BasePost {
    type: 'video';
    platform: 'youtube';
    videoId: string;
    title: string;
}

export interface TextPost extends BasePost {
    type: 'text';
    platform: 'twitter';
    content: string;
}

export interface ImagePost extends BasePost {
    type: 'image';
    platform: 'instagram';
    imageId: string;
    caption: string;
}

export type FeedPost = VideoPost | TextPost | ImagePost;

export type RawPost = 
    | Omit<VideoPost, 'id' | 'avatar'>
    | Omit<TextPost, 'id' | 'avatar'>
    | Omit<ImagePost, 'id' | 'avatar'>;