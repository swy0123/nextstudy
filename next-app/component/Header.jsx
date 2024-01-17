import React, { useState, userState } from "react";
import css from "styled-jsx/css";
import { IoLogoGithub } from "react-icons/io";
import { useRouter } from "next/router";

const HeaderCss = css`
  .header-wrapper {
    padding: 14px 14px;
    background-color: #24292e;
    line-height: 0;
    display: flex;
    align-items: center;
  }
  .header-search-form input {
    margin: 0 16px;
    background-color: hsla(0, 0%, 100%, 0.125);
    width: 300px;
    height: 28px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: white;
    padding: 0 12px;
    font-size: 14px;
    font-weight: bold;
  }
  .header-navigations a {
    color: white;
    margin-right: 16px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Header = () => {
  const [username, serUsername] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/users/${username}`);
    serUsername("");
  };

  return (
    <div>
      <div className="header-wrapper">
        <IoLogoGithub color="white" size={36}></IoLogoGithub>
        <form className="header-search-form" onSubmit={onSubmit}>
          <input value={username} onChange={(e) => serUsername(e.target.value)} />
        </form>
        <nav className="header-navigations">
          <a href="https://github.com/pulls">Pull Request</a>
          <a href="https://github.com/issues">Issues</a>
          <a href="https://github.com/marketplace">Marketplace</a>
          <a href="https://github.com/explore">Explore</a>
        </nav>
      </div>
      <style jsx>{HeaderCss}</style>
    </div>
  );
};

export default Header;
