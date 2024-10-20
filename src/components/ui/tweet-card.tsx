import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const TweetSkeleton: React.FC = () => (
  <Card className="w-full h-48 animate-pulse">
    <CardContent className="p-4">
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-gray-300 h-12 w-12"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2 mt-4">
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    </CardContent>
  </Card>
);

export const TweetNotFound: React.FC<{ error?: any }> = ({ error }) => (
  <Card className="w-full">
    <CardContent className="p-4">
      <p className="text-center text-gray-500">Tweet not found</p>
      {error && <p className="text-center text-red-500 text-sm mt-2">{error.message}</p>}
    </CardContent>
  </Card>
);

// Placeholder for MagicTweet component
export const MagicTweet: React.FC<{ tweet: any; components?: any }> = ({ tweet, components }) => (
  <Card className="w-full">
    <CardContent className="p-4">
      <p>{tweet.text}</p>
      {/* Implement the full tweet rendering logic here */}
    </CardContent>
  </Card>
);
