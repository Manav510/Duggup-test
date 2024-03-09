export interface SocialLink {
    website: string;
  }
  
  export interface BaseTimelineItem {
    date: string;
    isJob: "Yes" | "No";
  }
  
  export interface Post extends BaseTimelineItem {
    isJob: "No";
    content: string;
    image: string;
  }
  
  export interface Job extends BaseTimelineItem {
    isJob: "Yes";
    company: string;
    office: string;
    change: string;
    position: string;
    type: string;
    Location?: string;
    image: string;
  }
  
  export type TimelineItem = Post | Job;
  
  export interface User {
    name: string;
    title: string;
    company: string;
    bio: string;
    profilePicture: string;
    followed: boolean;
    socialLinks: SocialLink;
    timelineItems: TimelineItem[];
  }
  
  export interface UserData {
    user: User;
  }
  export type TimelineEntry = Post | Job;