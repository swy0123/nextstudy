import css from "styled-jsx/css";
import Link from "next/link";
import { GoOrganization, GoMail, GoLink, GoLocation } from "react-icons/go";

const style = css`
  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }
  .profile-image-wrapper {
    width: 100%;
    border: 1px solid #e1e4e8;
  }
  .profile-image-wrapper .profile-image {
    display: block;
    width: 100%;
  }
  .proofile-username {
    margin: 0;
    padding-top: 16px;
    font-size: 26px;
  }
  .proofile-user-login {
    margin: 0;
    font-size: 20px;
  }
  .proofile-user-bio {
    margin: 0;
    padding-top: 16px;
    font-size: 40px;
  }
  .profile-user-html-url {
    margin: 0;
    padding-top: 16px;
    font-size: 16px;
  }

  .proofile-user-info {
    display: flex;
    align-items: center;
    margin: 4px 0 0;
  }
  .proofile-user-info-text {
    margin-left: 6px;
  }
`;

const Profile = ({ user }) => {
  if (!user) {
    return null;
  }
  console.log(user);
  return (
    <>
      <div className="profile-box ">
        <div className="profile-image-wrapper">
          <img className="profile-image" src={user.avatar_url} alt={`${user.name} 프로필 이미지`} />
        </div>
        <h2 className="profil-username">{user.name}</h2>
        <p className="profile-user-login">{user.login}</p>
        <p className="profile-user-bio">{user.bio}</p>
        <p className="profile-user-info">
          <GoOrganization size={16} color="#6a737d"></GoOrganization>
          <span className="proofile-user-info-text">
            {user.organization ? user.organization : '""'}
          </span>
        </p>
        <p className="profile-user-info">
          <GoMail size={16} color="#6a737d"></GoMail>
          <span className="proofile-user-info-text">{user.email ? user.email : '""'}</span>
        </p>
        <p className="profile-user-info">
          <GoLink size={16} color="#6a737d"></GoLink>
          <span className="proofile-user-info-text">{user.blog ? user.blog : '""'}</span>
        </p>
        <p className="profile-user-info">
          <GoLocation size={16} color="#6a737d"></GoLocation>
          <span className="proofile-user-info-text">{user.location ? user.location : '""'}</span>
        </p>
        <a href={user.html_url} className="profile-user-html-url">
          {user.html_url}
        </a>
      </div>
      <style jsx>{style}</style>
    </>
  );
};
export default Profile;
