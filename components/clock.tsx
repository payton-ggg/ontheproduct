import Spline from "@splinetool/react-spline";

export default function Clock() {
  return (
    <div className="static z-10 h-[600px] top-[980px] left-[1000px] min-[1000px]:absolute bg-black shadow-clock">
      <Spline scene="https://prod.spline.design/ngYdebOxXLbBKsyj/scene.splinecode" />
    </div>
  );
}
