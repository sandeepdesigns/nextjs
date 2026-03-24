"use client";
type Props = {
  videoSrc: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
};
export default function VideoHero({
  videoSrc,
  title,
  subtitle,
  buttonText,
}: Props) {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl mb-6">
              {subtitle}
            </p>
          )}

          {buttonText && (
            <a href="#demo-popup" data-fancybox="" className="px-6 py-3 bg-white text-black rounded-lg">
              {buttonText}
            </a>
          )}

        </div>
      </div>

    </section>
  );
}