import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-10 left-0 w-full h-full flex justify-center items-center">
        <div className="rounded-full w-[10vh] h-[10vh]"> Loading... </div>
      </div>
    </Html>
  );
};

export default Loader;
