const StaticPage = (props) => {
  return (
    <div>
      <div>time : {props.time}</div>
    </div>
  );
};

export const getStaticProps = async () => {
  return { props: { time: new Date().toISOString() }, revalidate: 3 };
};

export default StaticPage;
