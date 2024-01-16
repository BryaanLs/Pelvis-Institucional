/* eslint-disable react/prop-types */
const Container = ({ children, sectionClass, mainClass, ...props }) => {
  return (
    <section className={`container ${sectionClass}`} {...props}>
      <div className={`mainContent ${mainClass}`}>{children}</div>
    </section>
  );
};

export default Container;
