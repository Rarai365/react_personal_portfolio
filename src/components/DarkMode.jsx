const DarkMode = () => {
  return (
    <>
      <label className="dark-mode-toggle" for="dark-mode">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>

      <input type="checkbox" id="dark-mode" />
    </>
  );
};

export default DarkMode;
