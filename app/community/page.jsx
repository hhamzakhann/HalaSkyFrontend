import { ShareInput } from "@/app/_components/ShareInput";
import Navigation from "../_components/Navigation";
import { TrendingHashtags } from "../_components/TrendingHashtags";
import { FeedItem } from "../_components/UI/FeedItem";

export default function CommunityPage() {
  const user = {
    name: "John Doe",
    image: "/placeholder.svg?height=40&width=40",
  };

  const feedItems = [
    {
      id: "1",
      author: {
        name: "Melissa John",
        image: "/placeholder.svg?height=40&width=40",
        isPremium: true,
        date: "Wed, 15 Aug",
        location: "Sydney",
      },
      content:
        "It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well. Above are a few examples of how the random paragraph.",
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
      likes: 24,
      comments: 5,
      shares: 2,
    },
    {
      id: "2",
      author: {
        name: "James Faner",
        image: "/placeholder.svg?height=40&width=40",
        date: "Wed, 10 Aug",
      },
      isPoll: true,
      content:
        "Looking for Your Next Travel Destination? 🌍\nHere are some top picks to inspire your wanderlust.",
      pollOptions: [
        { text: "Norway", votes: 7, color: "#fccd27" },
        { text: "Finland", votes: 4, color: "#ff6363" },
        { text: "Phuket", votes: 5, color: "#47ca6a" },
        { text: "Bali", votes: 3, color: "#52acff" },
      ],
      likes: 12,
      comments: 0,
      shares: 1,
    },
  ];

  const trendingHashtags = [
    { tag: "Australia", views: "104k" },
    { tag: "Love Saudi", views: "105k" },
    { tag: "Qatar", views: "104k" },
    { tag: "DesertDubai", views: "102k" },
    { tag: "Kangaroos", views: "100k" },
    { tag: "Skydiveinspire", views: "99k" },
    { tag: "bulgamespin", views: "97k" },
    { tag: "Fairymeadowpakistan", views: "96.5k" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation varient="main-nav" />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ShareInput user={user} />

            <div className="space-y-6">
              {feedItems.map((item) => (
                <FeedItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <TrendingHashtags hashtags={trendingHashtags} />
          </div>
        </div>
      </main>
    </div>
  );
}
