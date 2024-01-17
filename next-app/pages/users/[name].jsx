import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Profile from "../../component/Profile";
import { css } from "styled-jsx/css";
import Repositories from "../../component/Repositories";

const style = css`
  .user-contents-wrapper {
    display: flex;
    padding: 20px;
  }
`;

const name = ({ user, repos }) => {
  if (!user || !repos) {
    return (
      <>
        <div>없는 계정입니다</div>
        <Link href={"/"}>처음으로</Link>
      </>
    );
  }
  return (
    <div className="user-contents-wrapper">
      <Profile user={user}></Profile>
      <Repositories user={user} repos={repos}></Repositories>
      <style jsx>{style}</style>
      {/* <div>
        <Link href={"/"}>처음으로</Link>
      </div> */}
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name, page } = query;

  try {
    let user;
    let repos;
    const userRes = await fetch(`https://api.github.com/users/${name}`);
    if (userRes.status === 200) {
      user = await userRes.json();
    }
    const repoRes = await fetch(
      `https://api.github.com/users/${name}/repos?sort=updated&page=${page}&per_page=10`
    );
    if (repoRes.status === 200) {
      repos = await repoRes.json();
    }
    console.log(user, repos);
    return { props: { user, repos } };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default name;
