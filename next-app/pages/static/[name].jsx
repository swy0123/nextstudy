import fetch from "isomorphic-unfetch";

const name = ({user, time}) => {
  const username = user && user.name;
  // console.log("새로고침")

  return (
    <div>
      <h1>static page</h1>
      <h3>{username}</h3>
      <h3>{time}</h3>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user, time: new Date().toISOString() } };
    }
    return { props: { time: new Date().toISOString() } };
  } catch (e) {
    console.log(e);
    return { props: { time: new Date().toISOString() } };
  }
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: "swy0123" } }],
    fallback: true,
  };
};
export default name;
