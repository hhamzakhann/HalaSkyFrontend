import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hash } from "lucide-react";

export function TrendingHashtags({ hashtags }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Trending Hashtag</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {hashtags.map((hashtag) => (
            <li key={hashtag.tag} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 rounded-full p-1">
                  <Hash className="h-4 w-4 text-gray-500" />
                </div>
                <span>{hashtag.tag}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({hashtag.views}/View)
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
