import { TypeAnimation } from "react-type-animation";

const HomeTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        "Znajdź najlepsze okazje",
        1000,
        "Poznaj tysiące możliwości",
        1000,
        "Odważ się na zmiany",
        1000,
        "Podkreśl swoje piękno",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "2em",
        display: "block",
        color: "white",
        fontWeight: "bold",
        height: "2.1em",
      }}
      repeat={Infinity}
      cursor={false}
    />
  );
};

export default HomeTitle
