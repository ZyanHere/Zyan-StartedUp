import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";


export default async function Home({
  searchParams  }: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query;

  // const posts = await client.fetch(STARTUPS_QUERY);
  // console.log(JSON.stringify(posts,null,2))

  const params = { search: query || null };
  const session = await auth();
  console.log(session?.id);

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });


  // const posts = [{
  //   _createdAt: 'Yesterday',
  //   views: 55,
  //   author: { _id:1, name: 'Zyan'},
  //   description: "this is description",
  //   image: "https://media.gettyimages.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=612x612&w=gi&k=20&c=6eNZA8XGYgYJmD1gS7oWmGxFF6BvmWtozndUAHkpF7M=",
  //   category: 'Robots',
  //   title: "We Robots"
  // }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive/>

    </>
  );
}
